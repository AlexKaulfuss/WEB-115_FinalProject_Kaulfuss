# Nail Appointment Booking Website
**WEB-115 Final Project Proposal**
Student: Alex Kaulfuss | Repo: `WEB-115_FinalProject_Kaulfuss`

---

## Overview
A website for booking my nail services.
---

## Features
Form for Name, desired appointment date and time, and service required
An updating calendar that shows my availability
A google sheets on my end that shows when my appointments are 

---

## Core Requirements Coverage

| Requirement | Implementation |
|---|---|
| **If Statements & Loops** | Generating the bracket requires looping over contestants to pair them into first-round matches. If statements determine whether a round is complete (all winners chosen) before unlocking the next round, and check edge cases like odd contestant counts or a bye slot. |
| **Event Listeners** | Click listeners on each match card select the winner and trigger a re-render. A submit listener on the setup form kicks off bracket generation. A reset button clears state after a confirmation check. |
| **DOM Element Creation** | The entire bracket (every round column, match card, contestant name label, and winner indicator) is built dynamically with `createElement` and `appendChild`. Nothing is hardcoded in the HTML beyond the app shell. |
| **Classes & Subclasses** | A base `Tournament` class holds the contestant list, bracket state, and methods like `generateBracket()` and `recordWinner()`. `SingleEliminationTournament` extends `Tournament` and implements the specific bracket-advancement logic. A `Match` class represents each individual pairing with properties for both contestants and the winner. |

---

## DLC — Additional Topics

### JSON & Local Storage
The full tournament object — contestant names, match results, current round — is serialized with `JSON.stringify()` and saved to `localStorage` after every state change. On load, `JSON.parse()` restores the bracket exactly where the user left off. This means no data is lost between sessions without any backend.

### Fetch & Public APIs
When a user starts a tournament in "Music Mode," the app fetches the top tracks for a given artist from the MusicBrainz API and pre-fills the contestant list automatically, so users can immediately bracket an artist's discography without typing anything in.

### HTML Canvas
The bracket is rendered visually on an HTML `<canvas>` element. Contestants are drawn as labeled boxes, connecting lines show the bracket structure, and completed matches are styled differently from pending ones. Canvas re-renders after every winner selection to reflect the updated state.

---

## Tech Stack

- HTML, CSS, Vanilla JavaScript
- MusicBrainz API *(free, no API key required)*
- `localStorage` for tournament persistence
- HTML Canvas for bracket rendering
- VS Code + GitHub
