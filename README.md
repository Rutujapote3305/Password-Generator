# Password Generator 
A simple yet effective tool for generating secure, randomized passwords at the click of a button.

## Features
- **Complex Randomization:** Generates passwords including uppercase, lowercase, numbers, and special characters.
- **Dynamic Interface:** Instantly displays a new password without reloading the page.
- **Modern UI:** Features a minimalist design with a responsive layout and soft color palette.

## Tech Stack
- **HTML5:** Basic UI structure.
- **CSS3:** Custom styling featuring rounded corners, drop shadows, and a clean typography.
- **JavaScript:** Core logic for generating random strings using `Math.random()` and `Math.floor()`.

## How it Works
The generator pulls from a predefined string of characters and uses a loop to pick random indices:
- It creates a password of a set length (e.g., 12 characters).
- It combines various character sets to ensure complexity.
