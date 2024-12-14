# Event Emitter: A Deep Dive into Pub/Sub Design Pattern

## Introduction

The Event Emitter problem presents a classic implementation of the Publish-Subscribe (Pub/Sub) design pattern, a fundamental concept in event-driven programming. This challenge requires developers to create a flexible event management system that allows multiple components to communicate without direct dependencies.

## Key Conceptual Insights

### Design Pattern Fundamentals
The Pub/Sub pattern enables:
- Loose coupling between components
- Dynamic event registration and handling
- Scalable communication mechanisms
- Decentralized event management

### Core Requirements
The Event Emitter must support:
- Multiple listeners per event
- Order-preserving event subscription
- Dynamic subscription and unsubscription
- Flexible argument passing

## TypeScript Implementation Strategy

```typescript
type Callback = (...args: any[]) => any;
type Subscription = {
    unsubscribe: () => void
}

class EventEmitter {
    private events: Record<string, Callback[]> = {};

    subscribe(eventName: string, callback: Callback): Subscription {
        // Initialize event listeners array if not exists
        this.events[eventName] ||= [];
        this.events[eventName].push(callback);

        return {
            unsubscribe: () => {
                const index = this.events[eventName].indexOf(callback);
                if (index !== -1) {
                    this.events[eventName].splice(index, 1);
                }
            }
        };
    }

    emit(eventName: string, args: any[] = []): any[] {
        return (this.events[eventName] || [])
            .map(listener => listener(...args));
    }
}
```

## Complexity Analysis

### Time Complexity
- `subscribe()`: O(1) 
  - Appending to an array is constant time
  - Creating subscription object is O(1)

- `unsubscribe()`: O(1)
  - Using `splice()` with known index is constant time
  - `indexOf()` is O(n), but occurs only once per unsubscription

- `emit()`: O(k), where k is the number of listeners
  - Iterates through all registered listeners
  - Executes each callback sequentially

### Space Complexity
- O(m * n), where:
  - m = number of unique event types
  - n = number of listeners per event type

## Advanced Considerations

### Error Handling
- Current implementation silently handles non-existent events
- Production systems might want explicit error throwing or logging

### Performance Optimizations
- For high-frequency events, consider:
  1. Listener count limits
  2. Memory pooling for callbacks
  3. Lazy initialization of event arrays

## Real-world Use Cases

1. **User Interface Events**
   - Button clicks
   - Form submissions
   - Mouse/keyboard interactions

2. **Network Programming**
   - WebSocket message handling
   - Server-sent events
   - Asynchronous communication

3. **State Management**
   - Component communication
   - Redux-like event dispatching
   - Reactive programming patterns

## Best Practices

1. Use TypeScript for type safety
2. Implement proper memory management
3. Consider performance for large-scale applications
4. Add optional error handling
5. Provide clear documentation for event contracts

## Code Example Demonstrating Capabilities

```typescript
const emitter = new EventEmitter();

// Multiple listeners
const sub1 = emitter.subscribe('userLogin', (user) => {
    console.log(`User ${user} logged in`);
    return { status: 'success' };
});

const sub2 = emitter.subscribe('userLogin', (user) => {
    // Separate tracking logic
    trackAnalytics(user);
    return { tracked: true };
});

// Emit with arguments
const results = emitter.emit('userLogin', ['alice']);
// Results: [{ status: 'success' }, { tracked: true }]

// Unsubscribe selectively
sub1.unsubscribe();
```

The Event Emitter problem is more than a coding challenge—it's a gateway to understanding decoupled, event-driven architectures. By mastering this pattern, developers can create more modular, maintainable, and scalable software systems.
