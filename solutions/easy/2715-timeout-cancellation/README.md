# 2715. Timeout Cancellation

## 📋 Problem Description

**Difficulty**: Easy
**Topics**: Asynchronous, Timers
**Companies**: N/A

Given a function `fn`, an array of arguments `args`, and a timeout `t` in milliseconds, return a `cancelFn` function.

The function `fn` should be executed after `t` milliseconds with the arguments from `args`. However, if the returned `cancelFn` is invoked before the timeout ends, `fn` should **not** be executed.

### Example 1:

```js
Input: (fn = (x) => x * 5), (args = [2]), (t = 20);
Output: [{ time: 20, returned: 10 }];
```

### Example 2:

```js
Input: (fn = (x) => x ** 2), (args = [2]), (t = 100);
Output: [];
```

---

## 🎯 My Approach

### Initial Thoughts

This is essentially a timing and cancellation problem. We are dealing with delayed execution and possible interruption before the scheduled time.

### Solution Strategy

1. Immediately schedule `fn(...args)` using `setTimeout`
2. Capture the timeout ID so we can cancel it later
3. Return a `cancelFn` that can call `clearTimeout(timeoutId)`
4. If `cancelFn` is called before `t` ms, `fn` will never run
5. Otherwise, `fn` executes after `t` ms as expected

---

## 💡 Solution

### ✅ JavaScript One-liner with Closure

```js
var cancellable = function (fn, args, t) {
  let timeoutID = setTimeout(() => fn(...args), t);
  return () => clearTimeout(timeoutID);
};
```

---

## 📊 Complexity Analysis

| Measure          | Complexity |
| ---------------- | ---------- |
| Time Complexity  | O(1)       |
| Space Complexity | O(1)       |

- `setTimeout` and `clearTimeout` are constant-time operations
- No additional data structures are used

---

## 🧠 Key Insights & Learnings

### What I Learned:

1. **Closures are essential**: The returned cancel function has access to `timeoutID` because it's enclosed within the parent scope.
2. **setTimeout returns a handle**: This ID is required for canceling the timeout.
3. **Immediate scheduling**: The `setTimeout` should run immediately when `cancellable` is called, not when `cancelFn` is called.
4. **Timing precision**: The actual execution time may vary slightly due to the JS event loop, so always use `performance.now()` or `Date.now()` when testing precision.

---

## ❗ Common Pitfalls

- Scheduling the timeout inside the returned function — this delays scheduling until it's too late.
- Forgetting that `clearTimeout` only works **before** the timer has fired.
- Forgetting to pass arguments correctly: use the spread operator `fn(...args)`.

---

## 🛠 Use Case / When to Use

- Debouncing or throttling user input
- Canceling expensive operations (e.g., API calls) if no longer needed
- Implementing timeout logic in games or UI behavior

---

## 📝 Personal Notes

**Date Solved**: \[📅 17-07-2025]
**Time Taken**: \~5 min
**Confidence Level**: ✅ Solid
**What I’d Do Differently**:

- Experiment with `Promise`-based timeouts to practice
- Wrap this logic in a reusable utility function for async workflows

---

## 🧩 Follow-up Questions

1. What if we wanted `cancelFn` to return a boolean indicating whether the cancellation was successful?
2. How could we log whether `fn` was actually executed?
3. Could this be refactored to support multiple scheduled executions with separate cancels?

---

_This problem reinforced my understanding of how closures and timers work in JavaScript, especially for delayed and cancellable executions._ 🚀

---
