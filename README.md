# Netflix-js

Brief explanation

We chose to make a user interface for Netflix data for users to be able to compare their favorite movies and Tv shows. We got our data from 2 different CSVs from Kaggle (https://www.kaggle.com/netflix-inc/netflix-prize-data, kaggle.com/shivamb/netflix-shows). We want to make a map based on how many movies and TV shows have been released in each country. Do ratings comparison based on movies/shows release date. We want to make our interface dynamic by incorporating inputs and dropdown menus to allow users to interact with our data set and create new visualizations. 

Inspiration
https://www.creative-tim.com/blog/web-design/free-dashboard-templates/

Ideas:
Look up different directors and they're hometowns to see which hometowns make the best directors based on ratings
Netflix Categories vs. Ratings
Bar chart that has how many movies / tv shows were released per year.
Duration vs. Rating
Count actors and actresses to see which ones are most seen in Netflix movies


----------------------------------------------------
Steps to Run Project:

1) Open pgAdmin 4 and create a new database name "Netflix"

2) Open IMDB.SQL and run lines 2 through 35 to create table IMDB5000.

3) Import to table IMDB5000 the csv named imdb_5000 in IMDB_JS_PROJECT2\static\data
    - be sure to remove the serial column from the columns to be imported or the import will fail.
    - headers toggled to yes and delimiter to ,

4) Run lines 41 to 79 of IMDB.SQL to create tables Movie_Map, Budget_Table, and Capital_Cities.

5) Import to table Capital_Cities the csv named country-capitals-final in IMDB_JS_PROJECT2\static\data
    - be sure to remove the serial column from the columns to be imported or the import will fail.
    - headers toggled to yes and delimiter to ,

6) Run lines 84 to 111 in IMDB.SQL

7) updated user= and password= in lines 62, 69 and 76 of the app.py to match the user name and password of your pgadmin. 

8) Run app.py in terminal using VS Code.

9) Open the webpage entering http://127.0.0.1:5000/ in your browser, or whatever hyperlink initiates from running the app.py


