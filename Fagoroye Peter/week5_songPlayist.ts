// Create a song class
class Song{
    constructor(
        public name: string,
        public artist: string,
        public genre: string,
    ){}
}

//  create the linked list
class ListNode<T>{
    song: T;
    next: ListNode<T> | null = null;

    constructor(song: T) {
        this.song = song;
    }
}

// create a playlist class
class Playlist{
    // songs: Song[] = [];
    head: ListNode<Song> | null = null;
    tail: ListNode<Song> | null = null;

    // Add to playlist
    addToPlaylist(song: Song){
        const newNode = new ListNode<Song>(song);
        // if there is no song in the playlist
        
        if (!this.head){
            this.head =  newNode;
            this.tail = newNode;
            return;
        }

        // if there is already a song in the playlist
        
        let current = this.head;
        while (current.next != undefined ) {
            current = current.next;
        }
        newNode.next = current.next;
        current.next = newNode;
        
    }

    // remove from playlist
    removeSong(song: Song) {
        let current = this.head;
        let prev: ListNode<Song> | null = null;
        while (current !== null) {
          if (current.song === song) {
            // If the current song matches, remove it from the playlist
            if (current === this.head) {
              // If the song is the head of the playlist, update the head pointer
              this.head = current.next;
            } else if (current === this.tail) {
              // If the song is the tail of the playlist, update the tail pointer
              this.tail = prev;
              this.tail!.next = null;
            } else {
              // Otherwise, update the previous song's pointer to skip over the current song
              prev!.next = current.next;
            }
            return true; // Return true to indicate that the song was successfully removed
          }
          prev = current;
          current = current.next;
        }
        return console.log("Not found in the playlist"); // Return false to indicate that the song was not found in the playlist
    }

    shufflePlaylist(): void{
        // convert linked list to array
        let playlist: ListNode<Song>[] = [];
        let currentSong: ListNode<Song> | null = this.head;
        while(currentSong){
            playlist.push(currentSong);
            currentSong = currentSong.next;
        }

        // Fisher-Yates shuffle algorithm
        for (let i = playlist.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = playlist[i];
            playlist[i] = playlist[j];
            playlist[j] = temp;
        }

        // Convert the shuffled array back to a linked list
        if (playlist.length === 0) {
            this.head = null;
            this.tail = null;
            return;
        }

        this.head = playlist[0];
        this.tail = playlist[playlist.length - 1];
        
        for (let i = 0; i < playlist.length - 1; i++) {
            playlist[i].next = playlist[i + 1];
        }
        this.tail.next = null;
    }


    showPlaylist(){
        let plalist: Song[] = []
        if(!this.head){
            return;
        }
        
        let currentSong: ListNode<Song> | null = this.head;
        while(currentSong){
            plalist.push(currentSong.song)
            currentSong = currentSong.next;
        }
        return plalist;

    }
}


   
   

    


const myPlaylist = new Playlist();
const newSong =  new Song("I wanna fly", "young jeo", "Pop");
const song2 =  new Song("Worthy Of My praise", "Dunsin Oyekan ft. Lawrence Oyor", "Gospel");
const song3 =  new Song("Love me Jeje", "Tems", "AfroBeat");
const song4 =  new Song("Until i found you", "Alex Sancehz", "classical");
myPlaylist.addToPlaylist( newSong);
myPlaylist.addToPlaylist( song2);
myPlaylist.addToPlaylist( song3);
myPlaylist.addToPlaylist( song4);


console.log("Playlist before shuffling:", myPlaylist.showPlaylist());

myPlaylist.shufflePlaylist();

console.log("Playlist after shuffling:", myPlaylist.showPlaylist());

myPlaylist.removeSong(song2);

console.log(myPlaylist.showPlaylist());

