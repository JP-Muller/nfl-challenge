# nfl-coding-exercise

This exercise should hopefully be enjoyable and will certainly allow you to apply some very popular frameworks used in practice. You can use any modern JS framework that you would like (Angular/Vue/React/etc). Some helpful resources are included here

* Angular: https://angular.io
* React: https://reactjs.org/
* Vue: https://vuejs.org/


# Expected output
* A commit into this repository including the associated HTML, CSS, and JavaScript artifacts.
* An email informing us that you are completed with details of your design decisions and any other necessary information we may need (any setup that might be necessary to run the site or if it can just run in any web server normally)

# Requirements  

* Require the user to login (login form that accepts username and password, but accepts any non-null (not blank) values).
* Upon logging in the user should be prompted to select the winners for a week’s NFL games.  [NFL 2018 Season Week 1](http://www.espn.com/nfl/schedule/_/week/1/seasontype/2)
* Upon selecting a winner the look and feel of the predicted winner and predicted loser should change in some fashion (for ex: fade, different background).
* The user should be able to filter (hide/show) the list of games by at least one attribute (division, conference, day/time of game, etc.).
* The display should include the following information for each game: 
  * Home Team
  * Away Team
  * Location / Stadium Name
  * Game Date
  * Game Time
  * Extra Credit - Weather (this should come from a public/external API, there all lots of APIs available, [click here for one](http://openweathermap.org/api), just display the current weather).
* Note: While no server back-end is required for pulling the list of games, the implementation should not statically display the list of games.  The list of games should be defined in a “constant” JavaScript (JSON) object that is loaded at runtime and then dynamically displayed in the user interface using HTML and your JS framework of choice.  Do not hesitate to call / email if you have questions about this detail (585.347.####).
* No page refreshes or modals (dialogues).
