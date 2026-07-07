# Counter
# People Counter App

A simple web app to count and save numbers, built with plain HTML, CSS, and JavaScript.

## Files

- **index.html** — the page structure (title, counter display, buttons)
- **style.css** — styling (background image, fonts, button colors)
- **script.js** — the logic (counting and saving)

## How It Works

### index.html
- Shows a heading "People Entered" and a counter (`#count-el`) starting at `0`.
- **Increment** button → calls `increment()` in script.js.
- **Save** button → calls `save()` in script.js.
- A `#save-el` element displays the saved numbers.
- Some old practice code is commented out (countdown, submit button, user greeting) — safe to ignore or delete.

### script.js
- Grabs the counter and save display elements using `document.getElementById()`.
- `count` is a variable starting at `0` that tracks the current count.
- `increment()`:
  - Adds 1 to `count`.
  - Updates the counter text on the page.
- `save()`:
  - Takes the current `count` value.
  - Appends it to the `#save-el` text, so every saved number is kept in a running list (e.g. `1 - 3 - 5 -`).
- Everything else in the file is commented-out learning notes (variables, functions, DOM basics) — not active code.

### style.css
- `.data` — styles the headings (color, font, shadow).
- `#count-el` — makes the counter number extra large.
- `.Buttons` — styles both buttons (red background, white text, rounded corners).
- `body` — centers everything on the page and sets a background image.

## Try It
Just open `index.html` in a browser. Click **Increment** to raise the count, and **Save** to log the current count to the save list.
