type Callback = (...args: any[]) => any;
type Subscription = {
    unsubscribe: () => void
}

class EventEmitter {
    private events = {};

    subscribe(eventName: string, callback: Callback): Subscription {
        // callback fn called when event is emitted
        // even has multiple listeners for the same event(execute all)
        // when emitting events called in the order they were subscribed
        // return array of results
        // no callbacks are referentially identical
        if (!this.events[eventName]) {
            this.events[eventName] = []
        }
        this.events[eventName].push(callback)

        return {
            /**
            * removes callback from list of subs
            * @return undefined
            */
            unsubscribe: () => {
                if (!this.events[eventName]) return undefined;
                const index = this.events[eventName].indexOf(callback);
                if (index !== -1) {
                    this.events[eventName].splice(index, 1); // O(1)
                }


            }
        };
    }
    /**
    * @eventName : name of an event as a string
    * @args : optional array of args that will be
    *  passed to the callbacks
    * @return : callbacks ? array of results of all callback calls in order they were subscribed in : empty array
     */
    emit(eventName: string, args: any[] = []): any[] {
        if (!this.events[eventName]) return []
        const listeners = [...this.events[eventName]]
        const result: any[] = []
        listeners.forEach(listener => {
            result.push(listener(...args))
        })
        return result;
    }
}
const emitter = new EventEmitter();

// Subscribe to the onClick event with onClickCallback
function onClickCallback() { return 99 }
const sub = emitter.subscribe('onClick', onClickCallback);

emitter.emit('onClick'); // [99]
sub.unsubscribe(); // undefined
emitter.emit('onClick'); // []

