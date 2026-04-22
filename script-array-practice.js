//STEP 1
// let array = [
//   "Spirited Away",
//   "Knives Out",
//   "Everything, Everywhere, All At Once",
//   "Now You See Me",
//   "The Dark Knight",
// ];
// console.log(array[1]);

//STEP 2
// let movies = new Array(5);
// movies[0] = "Everything, Everywhere, All At Once";
// movies[1] = "Spirited Away";
// movies[2] = "Knives Out";
// movies[3] = "Now You See Me";
// movies[4] = "The Dark Knight";
// console.log(movies[0]);

//STEP 3
// let movies = new Array(5);
// movies[0] = "Everything, Everywhere, All At Once";
// movies[1] = "Spirited Away";
// movies[2] = "Knives Out";
// movies[3] = "Now You See Me";
// movies[4] = "The Dark Knight";
// movies.splice(2, 0, "Princess Mononoke");
// console.log(movies.length);

//STEP 4
// let movies = [
//   "Spirited Away",
//   "Knives Out",
//   "Everything, Everywhere, All At Once",
//   "Now You See Me",
//   "The Dark Knight",
// ];
// delete movies[0];
// console.log(movies);

//STEP 5
// let movies = [
//   "Spirited Away",
//   "Knives Out",
//   "Everything, Everywhere, All At Once",
//   "Now You See Me",
//   "The Dark Knight",
//   "Forrest Gump",
//   "How To Train Your Dragon",
// ];
// for (let i in movies) {
//   console.log(movies[i]);
// }

//STEP 6
// let movies = [
//   "Spirited Away",
//   "Knives Out",
//   "Everything, Everywhere, All At Once",
//   "Now You See Me",
//   "The Dark Knight",
//   "Forrest Gump",
//   "How To Train Your Dragon",
// ];
// for (let movie of movies) {
//   console.log(movie);
// }

//STEP 7
// let movies = [
//   "Spirited Away",
//   "Knives Out",
//   "Everything, Everywhere, All At Once",
//   "Now You See Me",
//   "The Dark Knight",
//   "Forrest Gump",
//   "How To Train Your Dragon",
// ];
// movies.sort();
// for (let movie of movies) {
//   console.log(movie);
// }

//STEP 8
// let movies = [
//   "Spirited Away",
//   "Knives Out",
//   "Everything, Everywhere, All At Once",
//   "Now You See Me",
//   "The Dark Knight",
//   "Forrest Gump",
//   "How To Train Your Dragon",
// ];
// let leastFavMovies = ["The Boy and the Heron", "Shazam", "The Farewell"];
// console.log("Movies I like:\n");
// for (let movie of movies) {
//   console.log(movie);
// }
// console.log("...\n\nMovies I regret watching:\n");
// for (let movie of leastFavMovies) {
//   console.log(movie);
// }
// console.log("...");

//STEP 9
// let movies = [
//   "Spirited Away",
//   "Knives Out",
//   "Everything, Everywhere, All At Once",
//   "Now You See Me",
//   "The Dark Knight",
//   "Forrest Gump",
//   "How To Train Your Dragon",
// ];
// let leastFavMovies = ["The Boy and the Heron", "Shazam", "The Farewell"];
// movies = movies.concat(leastFavMovies);
// console.log(movies.sort().reverse());

//STEP 10
// let movies = [
//   "Spirited Away",
//   "Knives Out",
//   "Everything, Everywhere, All At Once",
//   "Now You See Me",
//   "The Dark Knight",
//   "Forrest Gump",
//   "How To Train Your Dragon",
// ];
// let leastFavMovies = ["The Boy and the Heron", "Shazam", "The Farewell"];
// movies = movies.concat(leastFavMovies);
// console.log(movies.sort().reverse()[movies.length - 1]);

//STEP 11
// let movies = [
//   "Spirited Away",
//   "Knives Out",
//   "Everything, Everywhere, All At Once",
//   "Now You See Me",
//   "The Dark Knight",
//   "Forrest Gump",
//   "How To Train Your Dragon",
// ];
// let leastFavMovies = ["The Boy and the Heron", "Shazam", "The Farewell"];
// movies = movies.concat(leastFavMovies);
// console.log(movies.sort().reverse()[0]);

//STEP 12
// let movies = [
//   "Spirited Away",
//   "Knives Out",
//   "Everything, Everywhere, All At Once",
//   "Now You See Me",
//   "The Dark Knight",
//   "Forrest Gump",
//   "How To Train Your Dragon",
// ];
// let leastFavMovies = ["The Boy and the Heron", "Shazam", "The Farewell"];
// movies = movies.concat(leastFavMovies);
// console.log(movies);
// let leastFavMoviesIndices = [];
// movies.forEach((movie, index) => {
//   if (leastFavMovies.indexOf(movie) > -1) {
//     leastFavMoviesIndices.push(index);
//   }
// });
// let otherFavMovies = [
//   "Legally Blonde",
//   "Howl's Moving Castle",
//   "Schindler's List",
// ];
// for (let i of leastFavMoviesIndices) {
//   movies[i] = otherFavMovies.shift();
// }
// console.log(movies);

//STEP 13
// let movies = [
//   ["Everything, Everywhere, All At Once", 1],
//   ["Knives Out", 2],
//   ["Spirited Away", 3],
//   ["How To Train Your Dragon", 4],
//   ["Legally Blonde", 5],
// ];
// movies.forEach((movieRating) => {
//   movieRating
//     .filter((item) => {
//       return typeof item === "string";
//     })
//     .forEach((movie) => {
//       console.log(movie);
//     });
// });

//STEP 14
// let employees = ["Zak", "Jessica", "Mark", "Fred", "Sally"];
// let showEmployee = (employees) => {
//   console.log("Employees:\n\n");
//   employees.forEach((employee) => {
//     console.log(employee.toUpperCase());
//   });
// };
// showEmployee(employees);

//STEP 15
// function filterValues(list) {
//   let truthy = list.filter((value) => {
//     if (value) {
//       return value;
//     }
//   });
//   return truthy;
// }

//STEP 16
// function randomListItem(list) {
//   let index = Math.floor(Math.random() * list.length);
//   return list[index];
// }

//STEP 17
// function largestNumber(list) {
//   let sorted = list.sort().reverse();
//   return sorted[0];
// }
