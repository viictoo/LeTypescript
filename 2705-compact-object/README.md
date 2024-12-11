[Leetcode Editorial](https://leetcode.com/problems/compact-object/editorial)

<h2>
    <a href="#solution"
        class="!text-sd-muted-foreground absolute right-full top-1/2 -translate-y-1/2 cursor-pointer pr-0.5 text-xs opacity-0 group-hover/heading:opacity-100"
        aria-hidden="true" tabindex="-1">
        <div class="relative text-[12px] leading-[normal] p-[1px] before:block before:h-3 before:w-3">
        </div>
    </a>Solution
</h2>
<hr>
<h3 id="overview" level="3" class="group/heading relative"><a href="#overview"
        class="!text-sd-muted-foreground absolute right-full top-1/2 -translate-y-1/2 cursor-pointer pr-0.5 text-xs opacity-0 group-hover/heading:opacity-100"
        aria-hidden="true" tabindex="-1">
        <div class="relative text-[12px] leading-[normal] p-[1px] before:block before:h-3 before:w-3"></div>
    </a>Overview</h3>
<p>In this problem, you are required to implement a JavaScript function <code>compactObject</code>, which receives a
    JSON object as input and returns a "compact" version of the object. The term "compact" refers to the original object
    but with all keys associated with falsy values removed. This removal process is applied not just to the top-level
    object but also to any nested objects or arrays. In the context of this problem, arrays are treated as objects where
    the indices are keys. A value is considered falsy when <code>Boolean(value)</code> returns <code>false</code>.</p>
<p>Three examples are given to illustrate the behavior of the function. The first example demonstrates how all falsy
    values in an array (which is a special type of object) are removed. The second example shows the removal of a
    key-value pair from an object due to a falsy value. The third example, a bit more complex, demonstrates the removal
    of falsy values in a nested structure involving both objects and arrays.</p>
<p>Mastering this problem demands a firm grasp on JavaScript's object and array manipulation, particularly in terms of
    iterating through them and modifying their content. Moreover, it is crucial to understand what constitutes a falsy
    value in JavaScript.</p>
<p>For a comprehensive understanding of JavaScript's objects and arrays, recursion, and value comparison, we also
    recommend trying out the following problems:</p>
<ol>
    <li><a href="https://leetcode.com/problems/json-deep-equal" target="_blank">JSON Deep Equal</a></li>
    <li><a href="https://leetcode.com/problems/convert-object-to-json-string/" target="_blank">Convert Object to JSON
            String</a></li>
    <li><a href="https://leetcode.com/problems/differences-between-two-objects/" target="_blank">Differences Between Two
            Objects</a></li>
</ol>
<p>For beginners who are new to recursion, we recommend studying our <a
        href="https://leetcode.com/explore/featured/card/recursion-i/" target="_blank">Recursion I</a> card for a
    detailed introduction and more practice problems.</p>
<h4 id="handling-falsy-values">Handling Falsy Values:</h4>
<p>In JavaScript, a value is considered falsy if it converts to <code>false</code> when evaluated in a boolean context.
    This includes <code>false</code>, <code>0</code>, <code>-0</code>, <code>''</code> and <code>""</code> (empty
    string), <code>null</code>, <code>undefined</code>, and <code>NaN</code>.</p>
<p>In our problem, we want to remove keys that have a falsy value. To do this, we use a check
    <code>if(!obj) return false;</code> in our function. This concise check effectively captures all falsy values,
    allowing us to ignore them in the output.</p>
<p>This condition also correctly handles <code>null</code>. Despite <code>typeof null</code> in JavaScript returning
    <code>object</code> due to historical reasons, <code>null</code> is indeed a falsy value. It's a primitive value
    that represents the absence of any object value. Therefore, in our context, keys with a <code>null</code> value will
    also be ignored.</p>
<h4 id="use-cases-of-compactobject">Use Cases of compactObject</h4>
<p>The <code>compactObject</code> function can be a powerful tool in JavaScript applications that involve processing and
    manipulating JSON data. Its primary function is to prune an object (or an array, considered an object with indices
    as keys in JavaScript) of keys that have falsy values, including nested keys. Here are some general areas where such
    functionality might be useful:</p>
<ol>
    <li>
        <p><strong>Data Cleaning:</strong> In many real-world applications, data often comes from various sources in
            different formats, sometimes with unnecessary keys or keys with falsy values. Using
            <code>compactObject</code> can help clean this data before further processing. For instance, if we have a
            nested object such as <code>var obj = { key1: "", key2: { key3: null, key4: "value" }}</code>,
            <code>compactObject</code> will return <code>{ key2: { key4: "value" }}</code>, effectively eliminating the
            empty or null values.</p>
    </li>
    <li>
        <p><strong>API Response Processing:</strong> When working with responses from third-party APIs, it's not
            uncommon to find keys with falsy values that could potentially lead to issues if not handled properly.
            <code>compactObject</code> can be used to remove these keys, ensuring the API response is cleaner and more
            predictable for subsequent operations.</p>
    </li>
    <li>
        <p><strong>UI Rendering:</strong> Before rendering data to the UI, it can be beneficial to remove any keys with
            falsy values to create a cleaner user interface. For example, consider a UI component that takes an object
            to display a user profile. If the object includes fields with null or undefined values, it could lead to
            blank spaces or errors in the UI. By using <code>compactObject</code>, we can remove these fields before
            passing the object to the UI component.</p>
    </li>
    <li>
        <p><strong>Optimizing Storage:</strong> When storing data, using <code>compactObject</code> to remove keys with
            falsy values can help optimize the storage utilization by ensuring only meaningful data is saved.</p>
    </li>
</ol>
<p>It's important to note that the usage of <code>compactObject</code> highly depends on the specific requirements and
    context of your application. There might be cases where preserving keys with falsy values is necessary. Therefore,
    always consider your specific use case before deciding to apply this function.</p>
<hr>
<h3 id="approach-1-recursive-depth-first-search-dfs" level="3" class="group/heading relative"><a
        href="#approach-1-recursive-depth-first-search-dfs"
        class="!text-sd-muted-foreground absolute right-full top-1/2 -translate-y-1/2 cursor-pointer pr-0.5 text-xs opacity-0 group-hover/heading:opacity-100"
        aria-hidden="true" tabindex="-1">
        <div class="relative text-[12px] leading-[normal] p-[1px] before:block before:h-3 before:w-3">
</div>
    </a>Approach 1: Recursive Depth-First Search (DFS)</h3>
<h4 id="intuition">Intuition</h4>
<p>In this approach, we use the concept of Depth-First Search (DFS) recursively. The main idea is to traverse the object
    depth-first and rebuild the object or array without any falsy values.</p>
<h4 id="algorithm">Algorithm</h4>
<ol>
    <li>Base Cases: If the current value is falsy, we return <code>false</code>. If the current value is not an object,
        we return the value.</li>
    <li>Process Arrays: If the current value is an array, we iterate through the array and recursively process each
        item. If the returned value of the recursive call is truthy, we add it to a new array.</li>
    <li>Process Objects: If the current value is an object, we iterate through the object's keys and recursively process
        each value. If the returned value of the recursive call is truthy, we add it to a new object.</li>
    <li>Return the Result: Finally, we return the cleaned object or array.</li>
</ol>
<h4 id="implementation">Implementation</h4>

``` Typescript
type Obj = Record<any, any>;

function compactObject(obj: Obj): Obj {
  function dfs(obj: any): any {
    if (!obj) return false;
    if (typeof obj !== 'object') return obj;

    if (Array.isArray(obj)) {
      const newArr: any[] = [];
      for (let i = 0; i < obj.length; i++) {
        const curr = obj[i];
        const subRes = dfs(curr);

        if (subRes) {
          newArr.push(subRes);
        }
      }

      return newArr;
    }

    const newObj: Obj = {};

    for (const key in obj) {
      const subRes = dfs(obj[key]);
      if (subRes) {
        newObj[key] = subRes;
      }
    }

    return newObj;
  }

  return dfs(obj);
}
```

<p>This implementation utilizes recursion to traverse and clean the input object or array. It makes a distinction
    between handling of objects and arrays due to their unique characteristics in JavaScript. If the return of the
    <code>dfs</code> function call on a child item is truthy, that child is added to the new object or array. As a
    result, all falsy values (including empty objects or arrays) are effectively removed.</p>
<h4 id="complexity-analysis">Complexity Analysis</h4>
<p>Time complexity: <span class="math math-inline"><span class="katex"><span class="katex-html" aria-hidden="true"><span
                    class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span
                        class="mord mathnormal" style="margin-right: 0.02778em;">O</span><span
                        class="mopen">(</span><span class="mord mathnormal"
                        style="margin-right: 0.10903em;">N</span><span
                        class="mclose">)</span></span></span></span></span>, where <span class="math math-inline"><span
            class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut"
                        style="height: 0.6833em;"></span><span class="mord mathnormal"
                        style="margin-right: 0.10903em;">N</span></span></span></span></span> is the total number of
    elements in the object (including nested elements). The function traverses through each element in the object
    exactly once, which includes going through each nested object or array. Therefore, the time complexity is linear in
    terms of the total number of elements.</p>
<p>Space complexity: <span class="math math-inline"><span class="katex"><span class="katex-html"
                aria-hidden="true"><span class="base"><span class="strut"
                        style="height: 1em; vertical-align: -0.25em;"></span><span class="mord mathnormal"
                        style="margin-right: 0.02778em;">O</span><span class="mopen">(</span><span
                        class="mord mathnormal" style="margin-right: 0.02778em;">D</span><span
                        class="mclose">)</span></span></span></span></span>, where <span class="math math-inline"><span
            class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut"
                        style="height: 0.6833em;"></span><span class="mord mathnormal"
                        style="margin-right: 0.02778em;">D</span></span></span></span></span> is the depth of the
    object. The additional space is used by the call stack during the recursive calls. In the worst case, the depth of
    the recursion is equal to the depth of the object, hence the space complexity is proportional to the depth of the
    object. This assumes that object keys and array elements are not counted in the space complexity, as they are part
    of the input. If you were to include them, the space complexity could be considered <span
        class="math math-inline"><span class="katex"><span class="katex-html" aria-hidden="true"><span
                    class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span
                        class="mord mathnormal" style="margin-right: 0.02778em;">O</span><span
                        class="mopen">(</span><span class="mord mathnormal"
                        style="margin-right: 0.10903em;">N</span><span
                        class="mclose">)</span></span></span></span></span>, similar to the time complexity.</p>
<h3 id="approach-2-iterative-depth-first-search" level="3" class="group/heading relative"><a
        href="#approach-2-iterative-depth-first-search"
        class="!text-sd-muted-foreground absolute right-full top-1/2 -translate-y-1/2 cursor-pointer pr-0.5 text-xs opacity-0 group-hover/heading:opacity-100"
        aria-hidden="true" tabindex="-1">
        <div class="relative text-[12px] leading-[normal] p-[1px] before:block before:h-3 before:w-3"></div>
    </a>Approach 2: Iterative Depth-First Search</h3>
<h4 id="intuition-1">Intuition</h4>
<p>In situations where we're dealing with nested objects, we might choose to use recursion for its simplicity and
    elegance. However, recursion comes with its own set of challenges like potential stack overflows when dealing with
    large inputs. Therefore, it can be beneficial to use an iterative approach with a manually managed stack.</p>
<h4 id="algorithm-1">Algorithm</h4>
<ol>
    <li>
        <p>Initialize a stack data structure and add our input object to the stack. Also, create a new object which will
            be filled as we iterate through the original object.</p>
    </li>
    <li>
        <p>Iterative Deep Exploration: While there are still objects on the stack, pop an object from the stack. For
            each key-value pair in the object, check if the value is an object or an array. If the value is an object or
            an array, replace the corresponding value in our copy with a new empty object or array, and add the value to
            the stack.</p>
    </li>
    <li>
        <p>Guard Clauses: During our iteration, we ignore key-value pairs (or indices in case of arrays) where the value
            is falsy.</p>
    </li>
    <li>
        <p>Final Output: Once the stack is empty, it means we've explored all objects and arrays in the input. At this
            point, our copy has been modified to only contain keys (or indices for arrays) with truthy values, so we
            return it.</p>
    </li>
</ol>
<h4 id="implementation-1">Implementation</h4>

```Typescript
type Obj = Record<string, any> | any[];

function compactObject(obj: Obj): Obj {
  const stack: [Obj, Obj][] = [[obj, Array.isArray(obj) ? [] : {}]];
  let newObj: Obj = stack[0][1];

  while (stack.length > 0) {
    const [currObj, newCurrObj] = stack.pop()!;

    for (const key in currObj) {
      const val = currObj[key];

      if (!val) continue;

      if (typeof val !== 'object') {
        Array.isArray(newCurrObj) ? newCurrObj.push(val) : newCurrObj[key] = val;
        continue;
      }

      const newSubObj: Obj = Array.isArray(val) ? [] : {};
      Array.isArray(newCurrObj) ? newCurrObj.push(newSubObj) : newCurrObj[key] = newSubObj;
      stack.push([val, newSubObj]);
    }
  }

  return newObj;
};
```

<h4 id="complexity-analysis-1">Complexity Analysis</h4>
<p>Time complexity: <span class="math math-inline"><span class="katex"><span class="katex-html" aria-hidden="true"><span
                    class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span
                        class="mord mathnormal" style="margin-right: 0.02778em;">O</span><span
                        class="mopen">(</span><span class="mord mathnormal"
                        style="margin-right: 0.10903em;">N</span><span
                        class="mclose">)</span></span></span></span></span>, where <span class="math math-inline"><span
            class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut"
                        style="height: 0.6833em;"></span><span class="mord mathnormal"
                        style="margin-right: 0.10903em;">N</span></span></span></span></span> is the total number of
    keys (or indices, in the case of arrays) in the input object and all nested objects/arrays. This is because we're
    processing each key or index exactly once.</p>
<p>Space complexity: <span class="math math-inline"><span class="katex"><span class="katex-html"
                aria-hidden="true"><span class="base"><span class="strut"
                        style="height: 1em; vertical-align: -0.25em;"></span><span class="mord mathnormal"
                        style="margin-right: 0.02778em;">O</span><span class="mopen">(</span><span
                        class="mord mathnormal" style="margin-right: 0.10903em;">N</span><span
                        class="mclose">)</span></span></span></span></span>, where <span class="math math-inline"><span
            class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut"
                        style="height: 0.6833em;"></span><span class="mord mathnormal"
                        style="margin-right: 0.10903em;">N</span></span></span></span></span> is the same as above. The
    space is primarily used for the stack, which in the worst case stores all the nested objects and arrays at once.
    There's also some additional space used for the copy of the input object, but this does not change the overall <span
        class="math math-inline"><span class="katex"><span class="katex-html" aria-hidden="true"><span
                    class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span
                        class="mord mathnormal" style="margin-right: 0.02778em;">O</span><span
                        class="mopen">(</span><span class="mord mathnormal"
                        style="margin-right: 0.10903em;">N</span><span
                        class="mclose">)</span></span></span></span></span> space complexity.</p>
<h2><a href="#interview-tips"
        class="!text-sd-muted-foreground absolute right-full top-1/2 -translate-y-1/2 cursor-pointer pr-0.5 text-xs opacity-0 group-hover/heading:opacity-100"
        aria-hidden="true" tabindex="-1">
        <div class="relative text-[12px] leading-[normal] p-[1px] before:block before:h-3 before:w-3">></div>
    </a>Interview Tips:</h2>
<ul>
    <li>
        <p><strong>Can you explain how compactObject function works in the recursive approach?</strong></p>
        <ul>
            <li>In the recursive approach, the <code>compactObject</code> function uses depth-first search (DFS) to
                traverse the input object. If the value of a property is a falsy value (i.e., when
                <code>Boolean(value)</code> returns <code>false</code>), it is ignored. If the value is an object or an
                array, the function makes a recursive call to handle it. If the value is a truthy non-object (i.e., a
                primitive value like a string, number, or boolean), it is included in the output object.</li>
        </ul>
    </li>
    <li>
        <p><strong>What is the key difference between the recursive and the iterative approach?</strong></p>
        <ul>
            <li>The key difference between the recursive and iterative approach lies in how they handle the depth-first
                search of the input object. The recursive approach uses recursion and hence requires a call stack space
                proportional to the depth of the object. On the other hand, the iterative approach uses an explicit
                stack to manage the DFS, which could potentially handle larger inputs depending on the available heap
                memory.</li>
        </ul>
    </li>
    <li>
        <p><strong>Can you explain why we need to check if the value is an object or array in both approaches?</strong>
        </p>
        <ul>
            <li>Checking whether a value is an object or array is necessary because JavaScript treats arrays as a type
                of object. However, the semantics of arrays and non-array objects in JavaScript are different -
                specifically, their keys are handled differently. In an array, the keys are indices and the order
                matters, whereas in a non-array object, the keys are strings and the order doesn't matter. Therefore,
                the two cases need to be handled separately in the compactObject function.</li>
        </ul>
    </li>
    <li>
        <p><strong>What are the trade-offs between the recursive and iterative approach in terms of time and space
                complexity?</strong></p>
        <ul>
            <li>Both recursive and iterative approaches have similar time complexity - they need to visit each value in
                the object once, so they run in linear time, <span class="math math-inline"><span class="katex"><span
                            class="katex-html" aria-hidden="true"><span class="base"><span class="strut"
                                    style="height: 1em; vertical-align: -0.25em;"></span><span class="mord mathnormal"
                                    style="margin-right: 0.02778em;">O</span><span class="mopen">(</span><span
                                    class="mord mathnormal" style="margin-right: 0.10903em;">N</span><span
                                    class="mclose">)</span></span></span></span></span>. However, the space complexity
                is where they differ. The recursive approach uses the system call stack and hence the space used is
                proportional to the maximum depth of the object. This could potentially result in a stack overflow for
                deeply nested objects. The iterative approach, on the other hand, explicitly manages a stack in the heap
                memory. This means it can handle larger inputs, as it's limited by the total available memory rather
                than the size of the call stack.</li>
        </ul>
    </li>
</ul>