# Normal Python Challenge Card Ideas

Ideas for challenge cards built around general Python programming — variables,
loops, conditionals, functions, and data structures — outside of turtle graphics.
Grounded in the block-to-text transition described in Chapter 14.

## Beginning

### Mad Libs Generator

Collect several words from the player with `input()` — a noun, a verb, an
adjective — store each in its own variable, and combine them into a short silly
story using an f-string. Introduces variables, input, and formatted output together.
Stretch goal: ask for one more word than needed and use only some of them.

### Number Guessing Game (Fixed Answer)

Set a fixed secret number in a variable, then use a `while` loop with an
`if`/`elif`/`else` chain to give "too high" or "too low" hints until the player's
guess matches. Combines loops and conditionals in the simplest possible game.
Stretch goal: limit the player to 5 guesses total.

### Simple Calculator

Ask for two numbers and an operator symbol with `input()`, then use an
`if`/`elif`/`else` chain to perform the matching operation and print the result.
Introduces conditional branching tied to real arithmetic. Stretch goal: handle
division by zero without the program crashing.

### Temperature Converter

Convert a Fahrenheit temperature to Celsius and back using the standard formulas,
storing each step in its own clearly named variable and printing a labeled result.
Introduces variables and arithmetic operators with a real-world formula. Stretch
goal: also print whether the temperature is above or below freezing.

### Countdown Timer

Use a `for` loop with `range()` counting down from a number the user provides,
printing each value, followed by "Liftoff!" once the loop finishes. Introduces
`for` loops and `range()` counting in a direction most students don't expect at
first. Stretch goal: add a one-second pause between each printed number using the
`time` module.

## Intermediate

### Word Frequency Counter

Read in a sentence or short paragraph, split it into a list of words, and use a
dictionary to count how many times each word appears, printing the results sorted
by frequency. Introduces dictionaries as a natural next step after lists. Stretch
goal: ignore capitalization and punctuation differences between words.

### Simple To-Do List Manager

Build a menu-driven program with a `while True` loop that lets the user add, remove,
and view items in a list until they choose to quit. Introduces list operations
(`append`, `remove`) inside a persistent program loop. Stretch goal: save the list
to a text file so it's still there the next time the program runs.

### Password Strength Checker

Write a function that takes a password string and checks it against rules — long
enough, contains a digit, contains an uppercase letter — using string methods and
boolean logic, returning a strength label like "weak," "medium," or "strong."
Stretch goal: give the user a specific reason their password failed, not just a
label.

### Multiplication Table Generator

Use nested `for` loops to print a neatly formatted multiplication table for a
number the user chooses, aligning columns with string formatting. Introduces nested
loops and the difference between an outer loop's variable and an inner loop's
variable. Stretch goal: print a full 12x12 table instead of a single row.

### Dice Roll Statistics Tracker

Simulate rolling two six-sided dice many times using the `random` module, storing
each total in a dictionary that counts how often each total (2 through 12) occurs,
then print a simple text bar chart of the results. Stretch goal: compare the
simulated results to the mathematically expected probabilities.

## Advanced

### Text-Based Adventure Game

Represent each location as an entry in a dictionary of "rooms," each with a
description and a set of exits to other rooms, and write a `while` loop game engine
that lets the player move between rooms by typing directions. Combines functions,
dictionaries, and conditionals into a complete interactive program. Stretch goal:
add an item the player can pick up and later use to unlock a room.

### Hangman With Word Bank

Pick a random word from a stored list, track guessed letters in a set, and write
functions that display the word's current progress and check whether the player
has won or run out of guesses. Combines sets, lists, and functions. Stretch goal:
load the word bank from a text file instead of hardcoding it.

### File-Based High Score Tracker

Read and write player scores to a text file between runs, sorting all saved scores
and displaying the top five each time the program starts. Introduces file I/O
(`open`, `read`, `write`) as a way to make data outlive a single program run.
Stretch goal: store the player's name alongside each score.

### Caesar Cipher Encoder/Decoder

Write a function that shifts every letter in a message by a chosen number of
positions using `ord()` and `chr()`, correctly handling uppercase, lowercase, and
non-letter characters, with separate encode and decode modes. Combines string
manipulation, functions, and modular arithmetic. Stretch goal: write a second
function that tries all 26 possible shifts to crack a message with an unknown key.

### Student Grade Book (Intro to Classes)

Define a `Student` class storing a name and a list of grades, with methods to add a
new grade and compute the average, then create several `Student` objects and loop
over them to print a class-wide report. A genuine first encounter with
object-oriented Python, often attempted with a partner. Stretch goal: add a method
that returns a letter grade based on the computed average.
