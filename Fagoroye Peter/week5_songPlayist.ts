// Create a song class
class Song{
    constructor(
        public name: string,
        public artist: string,
        public genre: string,
    ){}
}

//  create the linked list
class ListNode{
    song: Song;
    next: ListNode | null = null;

    constructor(song: Song) {
        this.song = song;
    }
}

// create a playlist class
class Playlist{
    // songs: Song[] = [];
    head: ListNode | null = null;

    // Add to playlist
    addToPlaylist(song: Song){
        const newNode = new ListNode(song);
        // if there is no song in the playlist
        
        if (!this.head){
            this.head =  newNode;
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


    // show songs in the playlist
    showPlaylist(){
        let plalist: Song[] = []
        if(!this.head){
            return;
        }
        
        let currentSong: ListNode | null = this.head;
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



console.log(myPlaylist.showPlaylist());

