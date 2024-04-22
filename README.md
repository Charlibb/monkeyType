# Javascript Monkeytype mock up 
![693shots_so](https://github.com/Charlibb/monkeyType/assets/81753538/0bcaf2b1-8a36-4f95-8ee5-8c29cbdfede9)

###  100% pure vainilla Javascript project based on the popular Monkeytype game, the minimalistic and customizable typing test.


# MonkeyType Game

This is a simple typing game implemented in JavaScript. The game presents the player with a paragraph of random words, and the player needs to type them as accurately and quickly as possible.

## How to Play

1. Open the game in a web browser.
2. Once the game starts, you will see a paragraph of random words displayed on the screen.
3. Start typing the words as accurately as you can. The words will be highlighted as you type.
4. Press the spacebar to move to the next word.
5. If you make a mistake, you can press the backspace key to correct it.
6. The game ends after the timer runs out.

## Game Elements

- **Time**: Displays the remaining time.
- **Paragraph**: Displays the words to be typed.
- **Input**: Allows the player to type the words.
- **Results**: Displays the player's performance after the game ends, including words per minute (WPM) and accuracy.

## Controls

- **Spacebar**: Moves to the next word.
- **Backspace**: Deletes the last character typed.

## How It Works

- The game randomly selects a set of words for the player to type.
- The player types the words, and the game tracks accuracy and speed.
- When the timer runs out or the player completes the paragraph, the game ends, and the results are displayed.

## Developer Notes

- The game is implemented using HTML, CSS, and JavaScript.
- Custom HTML elements (`<m-word>` and `<m-letter>`) are used to represent words and letters for styling purposes.
- The game dynamically adjusts the difficulty by selecting a random set of words for each play session.

## Credits

This game is inspired by MonkeyType, a popular typing test website. This game was created thanks to Midudev, content creator who made the game as a tutorial 

# MonkeyType Game Code Explanation

This README provides an overview of the JavaScript code used to create the MonkeyType typing game. The code is structured to handle the game mechanics, including word generation, user input handling, and game over conditions.

## Code Structure

### Importing Data

The game imports an array of initial words from a separate JavaScript file (`data.js`) using ES6 module syntax.

### DOM Elements

The code initializes variables representing various DOM elements used in the game interface, such as the timer, paragraph display, input field, and result elements.

### Initialization

The `initGame()` function sets up the initial state of the game by displaying the game interface, generating a random set of words, and starting the timer.

### Event Handling

The `initEvents()` function sets up event listeners for keyboard input and button clicks. These listeners ensure that the game responds to user actions such as typing and restarting the game.

### Typing Mechanics

- The `onKeyDown()` function handles keyboard events related to typing, including moving to the next word and correcting mistakes.
- The `onKeyUp()` function updates the display based on user input, highlighting correct and incorrect characters as the player types.

### Game Over

When the timer runs out, the `gameOver()` function is called, hiding the game interface and displaying the player's results, including words per minute (WPM) and accuracy.

## Custom HTML Elements

The game uses custom HTML elements (`<m-word>` and `<m-letter>`) to represent individual words and letters in the paragraph display. These elements are styled dynamically based on user input and game state.

## Developer Notes

- The code is designed to be modular and easy to understand, with clear function names and comments explaining each section.
- It utilizes modern JavaScript features such as ES6 syntax and custom HTML elements for enhanced readability and maintainability.
- Developers can further customize the game by adjusting parameters such as initial time and word selection criteria.

## Future Improvements

- Implementing additional features such as difficulty levels or multiplayer functionality.
- Optimizing the code for performance and scalability.
- Adding support for mobile devices and touch input.



