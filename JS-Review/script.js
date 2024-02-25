const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// Destructuring

const {
  title,
  author,
  pages,
  publicationDate,
  genres,
  hasMovieAdaptation,
} = getBook(1);

const books = getBooks();
const book = getBook(2);

console.log(title, author, genres);

// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];

const [primaryGenre, secondaryGenre, ...otherGenres] = genres;

console.log(primaryGenre, secondaryGenre, otherGenres);

const newGenres = [...genres, "epic fantasy"];
newGenres;
const updatedBook = {
  ...book,
  // Adding a new property
  moviePublicationDate: "2001-12-19",
  // OverWriting an existing property
  pages: 1210,
};
updatedBook;

// Template Literals

const summary = `${title} a ${pages}-page long book, was written by ${author} and publisehd in ${publicationDate.split(
  "-"
)}`;
summary;

// Terenary Operator

const pagesRange = pages > 1000 ? "Over a thousand" : "less than 1000";

// Arrow Functions

function getYear(str) {
  return str.split("-")[0];
}

(str) => str.split("-")[0];

// Short Circuit Evaluation

console.log(true && "Some string"); // return the 2nd value if the first is true
console.log(false && "Some string"); // return the 1st value if the first is false

console.log(hasMovieAdaptation && "This book has a movie adaptation");

console.log(true || "Some string"); // return 1st value if the first is true
console.log(false || "Some string"); // return 2nd value if the first is false

const spanishTranslation = console.log(
  book.translations.spanish || "NOT TRANSLATED"
);

const countWrong = book.reviews.librarything.reviewsCount || "no data";
countWrong; // 'no data' because value is 0

const countReviews = book.reviews.librarything.reviewsCount ?? "no data"; // check if the data type exist then return it
countReviews; // 0

// Optional Chaining

function getTotalReviewCount(book) {
  const goodreads = book.reviews.goodreads?.reviewsCount; // check if goodreads exist then grap the reviewsCount
  const librarything = book.reviews.librarything?.reviewsCount ?? 0; // check if the data type exist then return it
  return goodreads + librarything;
}

console.log(getTotalReviewCount(books[1])); // 812
console.log(getTotalReviewCount(books[2])); // undefined

// Array Methods

// Map  (Create a new array BUT DON'T RETURN IT)
const x = [1, 2, 3, 4, 5].map((el) => el * 2); // return a new array based on the asking operation
x; // [2, 4, 6, 8, 10]

const titles = books.map((book) => book.title);
titles;

const essentialData = books.map((book) => ({
  // parenthesis act like a return statement
  title: book.title,
  author: book.author,
}));

console.log(essentialData);

// Filter RETURN A NEW ARRAY AFTER OP

const longBooksWithMovie = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
longBooksWithMovie;

const adventureBooks = books
  .filter((books) => books.genres.includes("adventure"))
  .map((book) => book.title);
adventureBooks;

// Reduce

const pagesAllBooks = books.reduce((acc, book) => acc + book.pages, 0); // shrink the entire array into a final value
pagesAllBooks;

// Sort

const arr = [3, 7, 1, 9, 6];
const sorted = arr.slice().sort((a, b) => a - b); // slice create a copy of the array since sort fct act on the original pointer
sorted; // ascending [1,3,6,7,9]
const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages); // descending
sortedByPages;

// Working With Immutable Arrays

// 1) Add Element to array

const newBook = {
  id: 6,
  title: "Harry Potter and the Chamber of Secrets",
  author: "J. K. Rowling",
};
const booksAfterAdd = [...books, newBook];
console.log(booksAfterAdd);

// 2) Delete Element from array

const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
console.log(booksAfterAdd);

// 3) Update Element from array

const bookAfterUpdate = booksAfterDelete.map((book) =>
  book.id == 1 ? {} : book
);
console.log(bookAfterUpdate);

// Fetch from an API

console.log(fetch("https://jsonplaceholder.typicode.com/todos")); // Promise { <pending> }

fetch("https://jsonplaceholder.typicode.com/todos") // Promise { <pending> } // transforming data into javascript object
  .then((res) => res.json()) // Promise { <pending> } // return javascript object
  .then((data) => console.log(data)); // data fetch

async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos"); // wait until the Promise is fullfiled then return a promise
  const data = await res.json(); // wait until the Promise is fullfiled then return the data
  //   return data;
  console.log(data);
}

getTodos();
