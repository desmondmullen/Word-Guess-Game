What this project does:
This Word Guess Game lets the user try to guess the top ten baby names for any of the last 100 years. When a word is guessed (or not), it is shown in the appropriate ranking in the "girl names" or "boy names" box so the user is encouraged to play again. Pick a year - maybe your birth year? maybe a parent's birth year? an historic year? - and see how many names you can guess.

Why this project is useful:
This project demonstrates basic concepts of manipulating objects and arrays for responsive user interaction. A user can select any of 100 sets of names to guess. Names guessed (or not) are arranged in their proper hierarchies, and - on the desktop version - a newspaper front page from the year selected is used as the background and can be viewed without obstruction at the click of a button. The opacity of the background images is adjusted in CSS which was helpful in development. THe background image is held in a container in the HTML because opacity cannot be adjusted programmatically on true background images. The 100-year list of names was simply copy-and-pasted from a Social Security web page and then processed using the processSSNames.html file with this project. That page output a complete JavaScript object ready to copy-and-paste into the gameplay.js file. The user can adjust the difficulty to their preference.

How users can get started with this project:
Pick a year, then type letters to guess a top-ten name from that year. In "normal" mode you get chances equalling the length of the name plus two. In "easy" mode you get the name length plus four chances. In "hard" mode you get chances numbering *one less* than the length of the name! Correct guesses (guessing a letter that is in the name) do not subtract from the number of chances you have to guess the name

Where users can get help with this project:
Gameplay is explained on the start (index) page and the gameplay page. If you have any questions or comments, please email me at dsm@busylittlestudios.com

Who maintains and contributes to the project
This project is maintained by Desmond Mullen. Anyone may suggest contributions.