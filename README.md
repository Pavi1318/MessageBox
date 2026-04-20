# MessageBox
# Real-Time Character Counter Text Area

## Project Overview

This project demonstrates a **real-time character counter** implemented using **HTML, CSS, and JavaScript**. The application allows users to type a message into a text area while automatically tracking the number of characters entered.

As the user types, the system updates the character count instantly and shows how many characters remain out of the maximum allowed limit. If the user reaches the maximum limit, additional typing is prevented and a warning message is displayed.

---

## Features

* Text area for user input
* **Real-time character counting**
* Displays characters typed and remaining characters
* Prevents typing beyond the character limit
* Warning message when the maximum limit is reached
* Simple and user-friendly interface

---

## Text Area Limit

The maximum number of characters allowed is:

```
200 characters
```

This limit ensures that messages stay within a controlled length.

---

## Functional Requirements

### Real-Time Character Tracking

* The application listens to the **input event** on the text area.
* Every time the user types, the system updates the counter.

Example display:

```
150 / 200 characters
```

This means:

* **150 characters typed**
* **50 characters remaining**

---

### Character Limit Handling

If the user reaches the maximum character limit:

* Additional typing is **automatically prevented**
* A **warning message** is displayed

Example warning:

```
Character limit reached. Maximum 200 characters allowed.
```

This helps ensure the user does not exceed the allowed text length.

---

## Technologies Used

* **HTML5** – Structure of the text area
* **CSS3** – Styling and layout
* **JavaScript (Vanilla JS)** – Real-time character counting and validation

---

## Project Structure

```
character-counter/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## How to Run the Project

1. Clone the repository

```
git clone https://github.com/yourusername/character-counter.git
```

2. Navigate to the project directory

```
cd character-counter
```

3. Open the `index.html` file in your web browser.

---

## Example Workflow

1. The user opens the web page.
2. A **text area** with a 200-character limit is displayed.
3. As the user types, the character counter updates automatically.
4. The counter shows the number of characters typed and remaining.
5. If the limit is reached, the system prevents additional typing and displays a warning.

---

## Learning Objectives

This project helps practice:

* JavaScript **event listeners**
* DOM manipulation
* Real-time UI updates
* Input validation techniques
* Improving user experience with live feedback

---

## Author

Created as part of a **web development exercise** to demonstrate real-time input monitoring and character counting using JavaScript.
