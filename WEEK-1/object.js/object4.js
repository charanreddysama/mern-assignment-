const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];
//filter() only "Sci-Fi" movies
let sciFiMovies = movies.filter(movie => movie.genre === "Sci-Fi");
console.log("Sci-Fi Movies:", sciFiMovies);
// map() to return:"Inception (8.8)"
let movieTitles = movies.map(movie => `${movie.title} (${movie.rating})`);
console.log("Movie Titles with Ratings:", movieTitles); 
//reduce() to find average movie rating
let totalRating = movies.reduce((acc, movie) => acc + movie.rating, 0);
let averageRating = totalRating / movies.length;
console.log("Average Movie Rating:", averageRating);    
//find() movie "Joker"
let jokerMovie = movies.find(movie => movie.title === "Joker");
console.log("Found Movie:", jokerMovie);
//  findIndex() of "Avengers"
let avengersIndex = movies.findIndex(movie => movie.title === "Avengers");
console.log("Index of Avengers:", avengersIndex);

