class media {
    constructor(info) {
        this.publicationDate = info.publicationDate;
        this.name = info.name;
    }
}

class Song extends media {
    constructor(songData) {
        super(songData);
        this.artist = songData.artist;

    }
}

const mySong = new Song({
    artist: "John Lennon",
    name: "Imagine",
    publicationDate: "1971"
});

console.log(mySong);  // Output: John Lennon
console.log(mySong.name);  // Output: Imagine