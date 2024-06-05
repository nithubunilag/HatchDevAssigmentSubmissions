class Song {
  constructor(
    public songId: number,
    public title: string,
    public artist: string,
    public duration: number
  ) {}

  toString(): string {
    return `${this.title} by ${this.artist} (${this.duration} mins)`;
  }
}

class PNode {
  public next: PNode | null = null;

  constructor(public song: Song) {}
}

class Playlist {
  private head: PNode | null = null;
  private tail: PNode | null = null;
  private size: number = 0;

  addSong(song: Song): void {
    const newNode = new PNode(song);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      this.tail = newNode;
    }
    this.size++;
    console.log(`Added: ${song}`);
  }

  removeSong(songId: number): void {
    let current = this.head;
    let previous: PNode | null = null;

    while (current !== null) {
      if (current.song.songId === songId) {
        if (previous === null) {
          // Removing the head
          this.head = current.next;
          if (this.head === null) {
            // If the list becomes empty
            this.tail = null;
          }
        } else {
          previous.next = current.next;
          if (current.next === null) {
            // Removing the tail
            this.tail = previous;
          }
        }
        this.size--;
        console.log(`Removed: ${current.song}`);
        return;
      }
      previous = current;
      current = current.next;
    }
    console.log(`Song with ID ${songId} not found`);
  }

  shuffle(): void {
    if (this.size < 2) {
      return;
    }

    let current = this.head;
    const songs: Song[] = [];

    while (current !== null) {
      songs.push(current.song);
      current = current.next;
    }

    // Shuffle the array using Fisher-Yates shuffle algorithm
    for (let i = songs.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [songs[i], songs[j]] = [songs[j], songs[i]];
    }

    // Rebuild the linked list with shuffled songs
    this.head = new PNode(songs[0]);
    current = this.head;
    for (let i = 1; i < songs.length; i++) {
      current.next = new PNode(songs[i]);
      current = current.next;
    }
    this.tail = current;
    this.display();
  }

  display(): void {
    let current = this.head;
    while (current !== null) {
      console.log(current.song.toString());
      current = current.next;
    }
    console.log();
  }
}

// Create songs
console.log('\n************* Added Songs *************');
const song1 = new Song(1, 'Song 1', 'James  Brown', 3.5);
const song2 = new Song(2, 'Song 2', 'Kennedy Martz', 4.0);
const song3 = new Song(3, 'Song 3', 'Benson Fernald', 5.0);
const song4 = new Song(4, 'Song 4', 'John Doe', 6.5);
const song5 = new Song(5, 'Song 5', 'Kalu Kalu', 7.0);

// Create playlist instance
const playlist = new Playlist();

// Add songs to the playlist
playlist.addSong(song1);
playlist.addSong(song2);
playlist.addSong(song3);
playlist.addSong(song4);
playlist.addSong(song5);

// Display playlist
console.log('\n************* Playlist *************');
playlist.display();

// Remove a song from the playlist
console.log('\n******** Removed Song/ Playlist *********');
playlist.removeSong(2);
playlist.removeSong(5);
console.log('Playlist: ');
playlist.display();

// Shuffle the playlist
console.log('\n********* Shuffled Playlist *********');
playlist.shuffle();
