{
    name: "Iron Man",
    genre: "fantasy",
    country: "USA",
    year: 2008
},
{
   name: "Avengers",
   genre: "fantasy",
   country: "USA",
   year: 2011
},
{
   name: "The Game",
   genre: "thriller",
   country: "USA",
   year: 1997,
},

{
   name: "The Game111sfgdfgdfg",
   genre: "thriller111",
   country: "USA",
   year: 1997,
},
{
   name: "The ",
   genre: "fantasy",
   country: "USA",
   year: 2019,
}

use films

db.films.insert({[..data..]]) //вставка даних
db.films.find() // відображення даних
db.films.find({name: "The Game"}) //відображення фільму по імені
db.films.find({year: {$gt: 2000}}) // відображення фільмів роки яких 2000+
db.films.update({name: "Avengers", "genre" : "fantasy"}, {$set: {"genre" : "fantasy sci-fi"}}) // перезаписуємо жанр фільму
db.films.find() // відображення даних