

# Anime Quiz App

This is a React app that allows users to take quizzes about different anime series. 

## Overview

The app displays a character selection scroller at the top. When a character is clicked, it loads a quiz about that anime and displays the quiz questions. Users can select answers and submit to see their score.

There is also an audio player component that plays background music from Naruto.

The quizzes and questions data is stored in a JSON file and fetched dynamically when the corresponding character is selected.

## Key Components

- **AnimePage** - Main container component that renders the other components
- **CharacterScroller** - Scrolls through character images and fetches quiz data
- **AudioPlayer** - Reusable audio component for sound effects/bgm 
- **QuizForm** - Renders quiz questions and handles user input
- **Header** - Simple header content

## Key Files

- **quizdata.json** - JSON file that contains quiz and question data
- **App.js** - Renders AnimePage component
- **index.js** - Entry point that renders App

## Running the App

The app was built using Create React App. To run locally:

- Clone the repo
- Run `npm install`
- Run `npm start`
- Access the app at `http://localhost:3000`

This will start the development server and open the app in your browser.


