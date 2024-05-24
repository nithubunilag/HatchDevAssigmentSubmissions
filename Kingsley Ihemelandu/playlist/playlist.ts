export class DLNode<T> {
    data: T;
    next: DLNode<T> | null;
    prev: DLNode<T> | null;
    
    constructor(data: T) {
        this.data = data;
    }
}

export class DoubleLinkedList<T> {
    head: DLNode<T> | null;

    constructor(){
        this.head = null
    }

    add(data: T, index?:number){
        const newNode = new DLNode(data);

        if(index){

            // empty list or adding to the beginning
            if (this.head == null || index === 0) {
                newNode.next = this.head;
                if (this.head) {
                this.head.prev = newNode;
                }
                this.head = newNode;
                return;
            }

            // Adding to the end (index -1)
            if (index === -1) {
                if (!this.head) {
                this.head = newNode;
                return;
                }
                let currentNode = this.head;
                while (currentNode.next) {
                currentNode = currentNode.next;
                }
                currentNode.next = newNode;
                newNode.prev = currentNode;
                return;
            }

            // Adding in between the linked list
            let currentNode = this.head;
            let currentIndex = 0;
            while (currentNode.next && currentIndex < index -1) {
                currentNode = currentNode.next;
                currentIndex++;
            }
            
            if(currentNode.next){
                newNode.next = currentNode.next;
                currentNode.next.prev = newNode;
                currentNode.next = newNode;
                newNode.prev = currentNode;
                return;
            }

        }

        if (!this.head) {
            this.head = newNode;
        } else {
            let currentNode = this.head;
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = newNode;
        }
        
        

    }

    delete(index: number){
        if(this.head == null) {
            return false
        } else {
            let deleteIndex = 0;
            let currentNode = this.head
            while(deleteIndex < index && currentNode.next){
                currentNode = currentNode.next
                deleteIndex++
            }
            if(currentNode.prev !== null){
                currentNode.prev.next = currentNode.next
            }

        }
        return true
    }

    shuffle(){
        let currentNode = this.head;
        let shuffledList: Array<T> = [];

        while (currentNode) {
        shuffledList.push(currentNode.data);
        currentNode = currentNode.next;
        }

        shuffledList.sort(() => Math.random() - 0.5);

        this.head = null;

        for (const item of shuffledList) {
        this.add(item);
        }
    }

    print(){
        const data: Array<T> = []
        let currentNode = this.head;
        while(currentNode){
            data.push(currentNode.data)
            currentNode = currentNode.next;
        }
        console.log(data)
    
    }

}

interface ISong {
    title: string;
    artist: string;
    // Add other song metadata as needed (e.g., album, duration)
  }
  


export class Song implements ISong {
    title: string;
    artist: string;
    constructor(title: string, artist: string){
        this.title = title
        this.artist = artist
    }
}

class SongList {
    songs: Song[];
  
    constructor() {
      this.songs = [];
    }
  
    addSong(song: Song): void {
      this.songs.push(song);
    }
  
    removeSong(title: string): boolean {
      const index = this.songs.findIndex((s) => s.title === title);
      if (index !== -1) {
        this.songs.splice(index, 1);
        return true;
      }
      return false;
    }
  
    getSong(title: string): Song | undefined {
      return this.songs.find((s) => s.title === title);
    }
  }
  
export class Playlist extends DoubleLinkedList<Song> {
    songList: SongList;
    constructor() {
      super()
      this.songList = new SongList()
    }
  
    addSong(song: Song, index:number = -1): void {
      this.add(song, -1)
      this.songList.addSong(song)
    }
  
    removeSong(title: string): void {
        this.songList.removeSong(title);
        const indexToDelete = this.songList.songs.findIndex((s) => s.title === title)
        this.delete(indexToDelete)
    }
  
    shuffle(): void {
      this.shuffle()
    }
  
    printPlaylist(): void {
      this.print()
    }
  }
  
  const playlist = new Playlist();

// create songs
const song1 = new Song("Bohemian Rhapsody", "Queen")
const song2 = new Song("Imagine", "John Lennon")
const song3 = new Song("Hey Jude", "The Beatles")


// Add songs to playlist
playlist.addSong(song1);
playlist.addSong(song2);
playlist.addSong(song3);

// Print playlist
playlist.printPlaylist();

// Shuffle playlist
playlist.shuffle();

// Print shuffled playlist
playlist.printPlaylist();

// Remove a song
playlist.removeSong("Imagine");

// Print updated playlist
playlist.printPlaylist()