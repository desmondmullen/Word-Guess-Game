**What this project does**:
This Word Guess Game lets the user try to guess the top ten baby names for any of the last 100 years. First the user chooses a year, then they try to guess the name(s). When a name is guessed (or not), it is shown in the appropriate ranking in the "girl names" or "boy names" box so the user is encouraged to play again. Pick a year - maybe your birth year? maybe a parent's birth year? an historic year? - and see how many names you can guess.

**Features of this project**:
1. Guess the top-ten baby names from any year of your choice between 1918 and 2017.
2. As names are guessed, they assume their correct position in the rankings displayed near the bottom of the screen ("Top Five Girl Names" and "Top Five Boy Names").
3. Name order is always randomly selected so that even replaying the same year over again is still a challenge.
4. Any and all capitals in a name are properly capitalized - even on a name like "McNally".
5. User can select different difficulty levels to tailor the challenge to their preference.
7. After each round, or the completion of a ten-round game, simply press [return] (or click the Next Name or New Game buttons near the top of the screen) to play again.
8. See a newspaper front page in the background for the year selected (newspaper is not displayed on mobile due to space constraints).
9. If you like, you can click a button to see the newspaper front page without obstruction (not on mobile).
10. Fully operational on iPhone. Displays properly on Android but I did not finalize the onKeyUp for Android (which is handled differently than computer browsers and iPhones) because it was far outside the scope of the assignment and I don't have an Android. :)

**SPECIAL FEATURES**: This gameplay engine can be very easily adapted to other sorts of lists, for example "the players on different 2018 World Cup teams": select a team and then guess the names of the players. The background image names simply match the index of the list of words; in this game years are used for the index and the matching .jpg (e.g. "1987.jpg") is used for the background image. For World Cup teams, the team name would be the index and the player names would be the values; the [team name].jpg would be the automatically-matched background image. Opacity on the background image is set in CSS so can easily be changed to accomodate whatever jpg files the game creator wants. Opacity cannot be changed on a true "Background-Image" in HTML/CSS so the background image here resides in a wrapper on the body.

The processSSNames.html file in this repository was created and used to auto-magically output the year/names object that this iteration of the game uses. That HTML file can be used to load and format any tab-delimited file that has the index in the first column and the values in any number of columns after that. With minor tweaks it can do the same for comma-delimited and other data files. The data for this game was simply copied from a table on socialsecurity.gov and pasted into a data file. After processing with processSSNames.html, the fully formatted object was copied and pasted from processSSNames into the game's javascript.

**Why this project is useful**:
This project demonstrates basic concepts of manipulating objects and arrays for responsive user interaction. A user can select any of 100 sets of names to guess. Names guessed (or not) are arranged in their proper hierarchies, and - on the desktop version - a newspaper front page from the year selected is used as the background and can be viewed without obstruction at the click of a button. The opacity of the background images is adjusted in CSS which was helpful in development. THe background image is held in a container in the HTML because opacity cannot be adjusted programmatically on true background images. The 100-year list of names was simply copy-and-pasted from a Social Security web page and then processed using the processSSNames.html file with this project. That page output a complete JavaScript object ready to copy-and-paste into the gameplay.js file. The user can adjust the difficulty to their preference.

**How users can get started with this project**:
Pick a year, then type letters to guess a top-ten name from that year. In "normal" mode you get chances equalling the length of the name plus two. In "easy" mode you get the name length plus four chances. In "hard" mode you get chances numbering *one less* than the length of the name! Correct guesses (guessing a letter that is in the name) do not subtract from the number of chances you have to guess the name

**Where users can get help with this project**:
Gameplay is explained on the start (index) page and the gameplay page. If you have any questions or comments, please email me at dsm@busylittlestudios.com

**Who maintains and contributes to the project**:
This project is maintained by Desmond Mullen. Anyone may suggest contributions.