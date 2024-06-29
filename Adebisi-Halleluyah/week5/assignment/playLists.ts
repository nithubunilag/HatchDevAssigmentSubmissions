type Song = {
    id: number;
    title: string;
    artist: string;
    duration: number; // in seconds
  };

class ListNode {
  song: Song;
  next: ListNode | null;

  constructor(song: Song) {
    this.song = song;
    this.next = null;
  }
}

class Playlist {
    private head: ListNode | null = null;
    private tail: ListNode | null = null;
    private songMap: { [id: number]: ListNode } = {};
  
    // Add a song to the end of the playlist
    addSong(song: Song): void {
      const newNode = new ListNode(song);
      this.songMap[song.id] = newNode;
  
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail!.next = newNode;
        this.tail = newNode;
      }
    }
  
    // Remove a song by ID
    removeSong(songId: number): void {
      if (!this.head) return;
  
      if (this.head.song.id === songId) {
        delete this.songMap[songId];
        this.head = this.head.next;
        if (!this.head) this.tail = null;
        return;
      }
  
      let current: ListNode | null = this.head;
      while (current.next && current.next.song.id !== songId) {
        current = current.next;
      }
  
      if (current.next) {
        delete this.songMap[songId];
        current.next = current.next.next;
        if (!current.next) this.tail = current;
      }
    }
  
    // Shuffle the playlist
    shuffle(): void {
      if (!this.head || !this.head.next) return;
  
      const nodes: ListNode[] = [];
      let current: ListNode | null = this.head;;
      while (current) {
        nodes.push(current);
        current = current.next;
      }
  
      nodes.sort(() => Math.random() - 0.5);
  
      this.head = nodes[0];
      current = this.head;
  
      for (let i = 1; i < nodes.length; i++) {
        current.next = nodes[i];
        current = current.next;
      }
      this.tail = current;
      this.tail.next = null;
    }
  
    // Print the playlist for debugging
    printPlaylist(): void {
      let current = this.head;
      while (current) {
        console.log(`${current.song.title} by ${current.song.artist}`);
        current = current.next;
      }
    }
}

const playlist = new Playlist();

const song1: Song = { id: 1, title: "fire", artist: "Davido", duration: 300 };
const song2: Song = { id: 2, title: "Rodo", artist: "Adekunle Gold", duration: 250 };
const song3: Song = { id: 3, title: "Ocean eyes", artist: "Billie Ellish", duration: 200 };
const song4: Song = { id: 4, title: "memories", artist: "Maroon 5", duration: 270 };

playlist.addSong(song1);
playlist.addSong(song2);
playlist.addSong(song3);
playlist.addSong(song4);

console.log("Original Playlist:");
playlist.printPlaylist();

playlist.removeSong(2);

console.log("\nAfter Removing Song 2:");
playlist.printPlaylist();

playlist.shuffle();

console.log("\nAfter Shuffling:");
playlist.printPlaylist();
