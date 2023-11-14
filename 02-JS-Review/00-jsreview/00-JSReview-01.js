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

// Destructing 结构
const book = getBook(2);
book;

// const title = book.title;
// const author = book.author;
const { title, author, pages, genres, hasMovieAdaptation, publicationDate } =
  book;
console.log(title, author, genres);

// const primaryGenre = genres[0];
// const sendaryGenre = genres[1];

const [primaryGenre, sendaryGenre, ...otherGenres] = genres;
// 将在genres中剩下的数组数据，包含在otherGenres中，将其打包为一个数组Array。
// ! And the rest operator "..." must in the end of the deconsruction pattern.具体看下面的输出
console.log(primaryGenre, sendaryGenre, otherGenres);

// -------spread operator with Array
// * spread operator "..." 展开运算符
// * 用于将数组或者对象打散，分别取出数组或者对象中的数据。
// * 用于数组时，将数组中的数据打散，分别取出数组中的数据。
// * 用于对象时，将对象中的数据打散，分别取出对象中的数据。
// * 用于对象时，如果对象中的数据是嵌套的，那么打散后的数据也是嵌套的。
// * 用于对象时，如果对象中的数据是嵌套的，那么打散后的数据也是嵌套的。
const newGenres = [...genres, "epic fantasy"];
// * 这里如果没有加上"..."的话，会出现genres数组和newGenres数组进行嵌套的情形。
// * 加上...的话就是将genres数组里面的数据一一地写入到新数组newGenres里面去，就不会存在嵌套的情况。

newGenres;

// ------spread operator with object
const updateBook = {
  ...book,
  // 添加新的属性new property⬇️
  moviePublicationDate: "2021-12-19",

  // 重写存在的属性Overriding an exiting property
  pages: 1210,
};

updateBook;

// ! Arrow Function
// ! 箭头定义函数
// function getYear(str) {
//   return str.split("-")[0];
// }
// ! const getYear =(str) => str.split("-")[0];和下面一样
const getYear = (str) => {
  return str.split("-")[0];
};

// ! 模板字符串
const summary = `${title}, a ${pages}-page lonng book, was written by ${author} and published in ${getYear(
  publicationDate
)}. And this book has ${
  hasMovieAdaptation ? "" : "not"
} been adapted as a movie.`;

summary;

// ! 三元运算符
// ! ternary operator
const pageRanges = pages > 1000 ? "over a thousand" : "less than 1000 pages";
// ! "?"前为判断条件， "?"后“为true时的输出”：“为false时的输出”
pageRanges;

console.log(`This book has ${pageRanges} pages.`);

console.log(getYear(publicationDate));

// ! 逻辑与 ‘&&’
console.log(true && "some string");
console.log(false && "some string");
// * 只有“&&”操作符前为真时，才会显示其后的内容
console.log(hasMovieAdaptation && "This book has a movie.");

// * 为假false的有0, null, '', undefined
console.log("jenkin" && "some string");
console.log(0 && "some string");

// ! 逻辑或 “||”
console.log(true || "some string");
console.log(false || "Some string");
// * “||”前为真时，返回前值，否者返回后值。

console.log(book.translations.spanish);
const spanishTranslation = book.translations.spanish || "NOT TRANSLATED";
spanishTranslation;

// "||"在值为0，null,undefined, "" 时都会被认为时false.
console.log(book.reviews.librarything.reviewsCount);
const countWrong = book.reviews.librarything.reviewsCount || "no data";
countWrong;

// ! 空值合并运算符 “??”
// * "??"只有当值为null, undefined时才会被认定为false.
// * 空值合并运算符（??）是一个逻辑运算符，当左侧的操作数为 null 或者 undefined 时，返回其右侧操作数，否则返回左侧操作数。
const count = book.reviews.librarything.reviewsCount ?? "no data";
count;

// ! optional chain 可选属性链
// * 在可能不存在的属性后加上?，就可以选择性的访问，如果不存在就不继续访问剩下的了,只会变成undefined
// * 这时就可以使用合并运算符进行选择了
function getTotalReviewCount(book) {
  const goodreads = book.reviews?.goodreads?.reviewsCount ?? 0;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  return goodreads + librarything;
}

console.log(getTotalReviewCount(book));
