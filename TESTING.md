## Table of Contents

- [Table of Contents](#table-of-contents)
- [Code Validator](#code-validator)
  - [HTML Testing](#html-testing)
  - [CSS Testing](#css-testing)
- [Browser Performance](#browser-performance)
- [Responsiveness](#responsiveness)
- [Lighthouse Audit](#lighthouse-audit)
- [User Story Testing](#user-story-testing)
- [Testing Existing Features](#testing-existing-features)
- [Bugs](#bugs)
- [Unfixed Bugs](#unfixed-bugs)
- [Javascript Testing](#javascript-testing)

## Code Validator

### HTML Testing
<details>
<summary>Click here to view HTML Testing</summary>

| Page | Errors                                                     | Changes Made                                             |
| ---- | ---------------------------------------------------------- | -------------------------------------------------------- |
| HTML | ![Before](assets/images/testing/vaildator/html-before.png) | ![After](assets/images/testing/vaildator/html-after.png) |

</details>

### CSS Testing

<details>
<summary>Click here to view CSS Testing</summary>

| Page | Errors                                                    | Changes Made                                            |
| ---- | --------------------------------------------------------- | ------------------------------------------------------- |
| CSS  | ![Before](assets/images/testing/vaildator/css-before.png) | ![After](assets/images/testing/vaildator/css-after.png) |

</details>

## Browser Performance

<details>
<summary>Click here to view the Browser Performance</summary>

| Browser         | Screenshots                                                   |
| --------------- | ------------------------------------------------------------- |
| Google Chrome   | ![Google Chrome](assets/images/testing/browser/chrome.png)    |
| Mozilla Firefox | ![Mozilla Firefox](assets/images/testing/browser/firefox.png) |
| Brave           | ![Brave](assets/images/testing/browser/brave.png)             |
| Microsoft Edge  | ![Microsoft Edge](assets/images/testing/browser/ms.png)       |

</details>

## Responsiveness

<details>
<summary>Click here to see the responsiveness of the game</summary>

| Device | Screenshot                                                            |
| ------ | --------------------------------------------------------------------- |
| Mobile | ![Mobile Screenshot](assets/images/testing/responsiveness/mobile.png) |
| Tablet | ![Tablet Screenshot](assets/images/testing/responsiveness/tablet.png) |
| Laptop | ![Laptop Screenshot](assets/images/testing/responsiveness/laptop.png) |

</details>

## Lighthouse Audit

<details>
<summary>Click here to see Lighthouse Audit results</summary>

| Device  | Screenshot                                                                | Changes Made    |
| ------- | ------------------------------------------------------------------------- | --------------- |
| Desktop | ![Desktop Audit](assets/images/testing/lighthouse/lighthouse-desktop.png) | No changes made |
| Mobile  | ![Mobile Audit](assets/images/testing/lighthouse/lighthouse-mobile.png)   | No changes made |

</details>

## User Story Testing

<details>
<summary>Click here to see the User Story Testing</summary>

| **User Story**                                                                           | **Testing**                                                                                   | **Screenshot**                                                                             |
| ---------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| As a new user, I would like to see a clear word so I know what the game is.              | Click "Start Game" and check if a scrambled word appears on screen.                           | ![Scrambled Word](assets/images/testing/user-story-testing/scrambled-word.png)             |
| As a new user, I would like to see a Start Game button so I can begin playing easily.    | Confirm the Start Game button is visible and clickable when the game loads.                   | ![Start Button](assets/images/testing/user-story-testing/start-button.png)                 |
| As a new user, I would like to see an Instructions button to understand how to play.     | Click the Instructions button and confirm that clear guidance appears.                        | ![Instructions](assets/images/testing/user-story-testing/testing-instructions.png)         |
| As a new user, I would like to see a timer.                                              | Start a game and confirm the timer appears and begins counting down.                          | ![Timer](assets/images/testing/user-story-testing/testing-timer.png)                       |
| As a new user, I would like to see a hint button to help me if I get stuck.              | Press the Hint button and check that it reveals one random unrevealed letter.                 | ![Hint Button](assets/images/testing/user-story-testing/testing-hint-one.png)              |
| As a new user, I would like to see a restart button in case I want to play again.        | Complete the game and press Restart to ensure it resets everything.                           | ![Restart Button](assets/images/testing/user-story-testing/testing-restart-button.png)     |
| As an existing user, I would like hints that help without giving too much away.          | Use the Hint button multiple times to check that only three letters are revealed per use.     | ![Hint Result](assets/images/testing/user-story-testing/testing-three-hints.png)           |
| As an existing user, I would like to enjoy the challenge and improve my guessing skills. | Check that the game provides different scrambled words each round to encourage replayability. | ![Challenging Word](assets/images/testing/user-story-testing/testing-challenging-word.png) |

</details>

## Testing Existing Features

<details>
<summary>Click here to see Testing of Existing Features</summary>

| **Feature**                | **What Was Tested**                                                                                                          | **Screenshot**                                                           |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| **How to Play Button**     | I clicked the "How to Play" button to check that the instructions appeared clearly.                                          | ![Instructions](assets/images/testing/existing-feature/instructions.png) |
| **Start Game Button**      | I clicked the Start Game button and confirmed that a scrambled word appears when the game begins.                            | ![Start Button](assets/images/testing/existing-feature/start-button.png) |
| **Restart Button**         | I clicked the Restart button to confirm it resets the game to the beginning.                                                 | ![Restart](assets/images/testing/existing-feature/restart.png)           |
| **Submit Button**          | I typed in a word and clicked Submit to check that the game accepts and checks the answer correctly.                         | ![Submit](assets/images/testing/existing-feature/submit.png)             |
| **Three Letters Per Word** | I used the Hint button up to three times during one word to confirm it shows one unrevealed letter each time (max of three). | ![Three Hints](assets/images/testing/existing-feature/three-hints.png)   |

</details>

## Bugs 

## Unfixed Bugs 

No bugs found to my knowledge.

## Javascript Testing 

The Javascript was tested with [JS Lint](https://www.jslint.com/)

