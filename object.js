const book  = {
    title: "1984",
    author: "George Orwell",
    isAvailable: true,

    checkout: function() {
        if(this.isAvailable) {
            this.isAvailable = false;
        }
    },
    checkin: function() {
        if(!this.isAvailable) {
            this.isAvailable = true;
        }       
    }
};
console.log(`Title: ${book.title}`);
console.log(`Author: ${book.author}`);
console.log(`Available: ${book.isAvailable}`);  
book.checkout();
console.log(`Available: ${book.isAvailable}`);  
book.checkin();
console.log(`Available: ${book.isAvailable}`);