const mongoose = require("mongoose");
// const db = require("../models");
const db = require("../models/book.js");

mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/googlebooks",
  { 
   useUnifiedTopology: true,
   useNewUrlParser: true 
  }
);

const bookSeed = [
  {
    title: "The Dead Zone",
    authors: ["Stephen King"],
    description:
    "Set in the fictional town of Castle Rock, Maine A #1 national bestseller about a man who wakes up from a five-year coma able to see people’s futures and the terrible fate awaiting mankind in The Dead Zone—a “compulsive page-turner” (The Atlanta Journal-Constitution). Johnny Smith awakens from a five-year coma after his car accident and discovers that he can see people’s futures and pasts when he touches them. Many consider his talent a gift; Johnny feels cursed. His fiancée married another man during his coma and people clamor for him to solve their problems. When Johnny has a disturbing vision after he shakes the hand of an ambitious and amoral politician, he must decide if he should take drastic action to change the future. With “powerful tension that holds the reader to the story like a pin to a magnet” (The Houston Post), The Dead Zone is a “faultlessly paced…continuously engrossing” (Los Angeles Times) novel of second sight.",
    image: "http://books.google.com/books/content?id=ZbUACwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    link: "https://play.google.com/store/books/details?id=ZbUACwAAQBAJ&source=gbs_api"
  }, 
  {
    title: "The Dead Zone",
    authors: ["Stephen King"],
    description:
    "Set in the fictional town of Castle Rock, Maine A #1 national bestseller about a man who wakes up from a five-year coma able to see people’s futures and the terrible fate awaiting mankind in The Dead Zone—a “compulsive page-turner” (The Atlanta Journal-Constitution). Johnny Smith awakens from a five-year coma after his car accident and discovers that he can see people’s futures and pasts when he touches them. Many consider his talent a gift; Johnny feels cursed. His fiancée married another man during his coma and people clamor for him to solve their problems. When Johnny has a disturbing vision after he shakes the hand of an ambitious and amoral politician, he must decide if he should take drastic action to change the future. With “powerful tension that holds the reader to the story like a pin to a magnet” (The Houston Post), The Dead Zone is a “faultlessly paced…continuously engrossing” (Los Angeles Times) novel of second sight.",
    image: "http://books.google.com/books/content?id=ZbUACwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    link: "https://play.google.com/store/books/details?id=ZbUACwAAQBAJ&source=gbs_api"
  }, 
  {
    title: "The Dead Zone",
    authors: ["Stephen King"],
    description:
    "Set in the fictional town of Castle Rock, Maine A #1 national bestseller about a man who wakes up from a five-year coma able to see people’s futures and the terrible fate awaiting mankind in The Dead Zone—a “compulsive page-turner” (The Atlanta Journal-Constitution). Johnny Smith awakens from a five-year coma after his car accident and discovers that he can see people’s futures and pasts when he touches them. Many consider his talent a gift; Johnny feels cursed. His fiancée married another man during his coma and people clamor for him to solve their problems. When Johnny has a disturbing vision after he shakes the hand of an ambitious and amoral politician, he must decide if he should take drastic action to change the future. With “powerful tension that holds the reader to the story like a pin to a magnet” (The Houston Post), The Dead Zone is a “faultlessly paced…continuously engrossing” (Los Angeles Times) novel of second sight.",
    image: "http://books.google.com/books/content?id=ZbUACwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    link: "https://play.google.com/store/books/details?id=ZbUACwAAQBAJ&source=gbs_api"
  }
];

db.collection.insertMany(bookSeed)
// db.Book
//   .remove({})
//   .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
