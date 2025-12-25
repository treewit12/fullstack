const  bookObj = {
    title: "Becoming",
    author: "Michelle Obama",
    isAcailable: false

};

const bookJSON = JSON.stringify(bookObj);
console.log(bookJSON);
console.log(typeof bookJSON);


const parsedBook = JSON.parse(bookJSON);
console.log(parsedBook);
console.log(parsedBook.title);;
console.log(typeof parsedBook);
console.log(typeof bookObj);
 
    