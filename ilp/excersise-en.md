# Individual Learning Phase: Styling, useEffect, and Debugging in a React 19 Mini-App

## Your Goal

You will build a small React 19 app where you implement several styling methods, manage side effects with `useEffect`, and investigate typical errors using React Developer Tools and browser DevTools. In the end, you will have a clear, functioning mini-app with clean styling, a timer, an event listener, and brief debugging documentation.

## What You Need

- A running React 19 environment, e.g., with Vite
- An editor like VS Code
- A browser with DevTools
- React Developer Tools installed in your browser
- A basic structure with at least these files:
  - `App.jsx`
  - `App.css`
  - `TaskCard.jsx`
  - `TaskCard.module.css`

## Time Allocation

- 10 minutes: Prepare project and create structure
- 25 minutes: Core Task 1
- 20 minutes: Core Task 2
- 25 minutes: Core Task 3
- 20 minutes: Core Task 4
- 10 minutes: Core Task 5
- 10 minutes: Optional Extension Tasks
- 10 minutes: Reflection and quick self-check

## Core Tasks

### Task 1:

Create a Mini-App basic structure with global CSS **Goal:** You set up a small app and use classic CSS files in React components.

**Assignment:**
Create a mini-app titled "Task Monitor". In the main area, display a heading, a short description, and a list of at least 3 tasks. Each task should contain at least the following information:
- Title
- Status (`open`, `in progress`, or `completed`)
- Priority (`low`, `medium`, `high`)

Use a regular CSS file (`App.css`) for the basic layout. Style:
- Page margins
- A centered content area
- Easily readable font
- Spacing between the heading, description, and task list

Do not use inline styles yet.

**Expected Result / Target State:**
Your app starts without errors, displays a simple task overview, and the basic layout is controlled via `App.css`.

### Task 2:

Style Task Component with CSS Modules **Goal:** You structure component-specific styling with CSS Modules.

**Assignment:**
Move the display of a single task into its own component `TaskCard.jsx`. Create a file `TaskCard.module.css` for this purpose. Style each card with:
- Border or shadow
- Padding
- Spacing between cards
- Clearly visible title
- Status and priority area

Use CSS Modules for all `TaskCard` styles. The global page remains formatted via `App.css`.

**Expected Result / Target State:**
The app uses at least two styling methods appropriately separated:
- Global styles in `App.css`
- Component-specific styles in `TaskCard.module.css`

### Task 3:

Conditional `className` usage for Status and Priority **Goal:** You dynamically control styling via `className` instead of inline styles.

**Assignment:**
Extend `TaskCard` so that status and priority are visually differentiated. Example:
- `open` = neutral
- `in progress` = prominent
- `completed` = positive
- `high` = clearly highlighted

Create appropriate CSS classes in the CSS Module for this and link them conditionally in React via `className`. Also add a button per task, with which you can cyclically change the status:
- `open` → `in progress` → `completed` → `open`

Ensure that the display changes immediately with the status.

**Expected Result / Target State:**
Your app uses conditional `className` logic to make different states visible. No inline styles are used for status or priority colors.

### Task 4:

Side Effects with useEffect: Timer and Cleanup **Goal:** You implement a simple side effect with `useEffect` and clean it up correctly.

**Assignment:**
In `App.jsx`, add a small "Active Session Time" area. A counter in seconds should run up there since the app was loaded. Use `useEffect` with `setInterval` for this.

Build the effect so that:
- The timer starts when the app loads
- The value updates every second
- The interval is correctly cleaned up on unmount

Additionally, add a button with which you can show and hide the task list display. This allows you to test whether components are cleanly removed and re-displayed.

**Expected Result / Target State:**
The second counter runs stably, causes no visible problems, and your effect includes cleanup for the interval.

### Task 5:

Side Effects and Debugging with Event Listeners and Tools **Goal:** You work with another side effect and examine your app with debugging tools.

**Assignment:**
Add a "Window Width" area that displays the current width of the browser window. Use `useEffect` and a `resize` event listener for this. Make sure you remove the listener again.

Then test your app with the following steps:
1. Open React Developer Tools.
2. Check the props and state of your `TaskCard` components.
3. Use the browser console and insert `console.log(...)` at appropriate places to make status changes or render behavior visible.
4. Deliberately introduce at least one self-made error and fix it again. Examples:
   - incorrect prop name
   - missing `key` in the list
   - incorrect condition for `className`
   - state not correctly passed down

Briefly note down what error you introduced, how it manifested, and how you found it.

**Expected Result / Target State:**
The window width updates correctly when the browser is resized. The event listener is removed via cleanup. You have actively used React Developer Tools and browser DevTools and demonstrably investigated at least one typical error.

## Extension Tasks

### Extension Task 1: Filter Bar with Active Styling

**Goal:** You combine state, conditional classes, and clean styling in a small UI extension.

**Assignment:**
Build a filter bar with the options:
- All
- Open
- In Progress
- Completed

Clicking on a filter should only display matching tasks. The active filter should be clearly marked with its own CSS class. Use conditional `className` assignment for this again.

**Expected Result / Target State:**
You can filter the list, and the active filter is visually clearly recognizable.

### Extension Task 2: Create a Debugging Log in the Project

**Goal:** You briefly and comprehensibly document your own troubleshooting process.

**Assignment:**
Create a file `DEBUGGING.md` and record for at least 2 errors or anomalies:
- What was the problem?
- How did you recognize it?
- Which tool helped you?
- What did you change?

Use React Developer Tools at least once and browser DevTools or the console at least once.

**Expected Result / Target State:**
Your project contains a brief, concrete debugging documentation with real observations from your app.

### Extension Task 3: Component for Hint Banner with Mount/Unmount

**Goal:** You observe `useEffect` and cleanup even more consciously on a separate component.

**Assignment:**
Create an additional component `HintBanner` that can be shown and hidden via a button. In this component, a `console.log` should be executed on mount, and another `console.log` from the cleanup should appear on unmount. Style the component with a CSS Module.

**Expected Result / Target State:**
You can clearly see in the console when the component is mounted and unmounted.

## Important Notes

- For dynamic styling, preferably use `className` and CSS classes.
- Only use inline styles when absolutely necessary.
- Always check if cleanup is required for `useEffect`.
- For lists, check that each item has a stable `key`.
- Carefully check prop names if data is not arriving or not being displayed.
- Test changes directly in the browser and regularly observe the console and DevTools.

## Reflection Questions

- Where was the difference between global CSS and CSS Modules most evident in your app?
- At which point was conditional `className` more useful to you than inline styling?
- Which side effects did you implement, and why do they need cleanup?
- Which error cost you the most time?
- Which tool helped you best with debugging: React Developer Tools, browser DevTools, or the console?
- What would you improve next in your app if you had 30 more minutes?

---