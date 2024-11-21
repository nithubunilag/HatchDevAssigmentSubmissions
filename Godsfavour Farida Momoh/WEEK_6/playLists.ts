class newNode<T> {
  data: T;
  next: newNode<T> | null = null;

  constructor(data: T) {
    this.data = data;
  }
}

class CircularLinkedList<T> {
  head: newNode<T> | null = null;
  length: number = 0;

  add(val: T, pos: number | null = null) {
    const node = new newNode(val);
    this.length += 1;

    if (!this.head) {
      this.head = node;
      this.head.next = this.head;
      return;
    }

    let curr = this.head;
    let count = 0;

    while (curr !== null) {
      if (curr.next === this.head && pos === null) {
        curr.next = node;
        node.next = this.head;
        return;
      }

      if (count === pos) {
        node.next = curr.next;
        curr.next = node;
        return;
      }
      curr = curr?.next;
      count += 1;
    }
  }

  printList(n = 1) {
    if (this.head === null) {
      console.log("NO ELEMENT");
      return;
    }

    let curr = this.head;
    let cycles = 0;

    while (cycles < n) {
      console.log(curr.data);
      curr = curr?.next;
      if (curr === this.head) {
        console.log("THIS BEGINS A CYCLE");
        cycles += 1;
      }
    }
  }

  toList(): T[] {
    const array: T[] = [];
    if (!this.head) {
      return array;
    }

    let curr = this.head;
    do {
      array.push(curr.data);
      curr = curr.next;
    } while (curr !== this.head);

    return array;
  }

  delete(pos: number = 0) {
    if (this.length === 0) {
      console.log("Linked list contains no elements");
      return;
    }
    if (pos < 0 || pos >= this.length) {
      console.log("The position you are trying to delete from is invalid");
      return;
    }

    let curr = this.head;
    if (pos === 0) {
      if (this.length === 1) {
        this.head = null;
      } else {
        while (curr.next !== this.head) {
          curr = curr.next;
        }
        curr.next = this.head.next;
        this.head = this.head.next;
      }
    } else {
      let prev: newNode<T> | null = null;
      let count = 0;
      while (count !== pos) {
        prev = curr;
        curr = curr.next;
        count += 1;
      }
      prev.next = curr.next;
    }
    this.length -= 1;
  }

  shuffle() {
    const list = this.toList();
    for (let i = list.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [list[i], list[j]] = [list[j], list[i]];
    }

    let curr = this.head;
    let index = 0;
    while (curr) {
      curr.data = list[index];
      index += 1;
      curr = curr.next;
      if (curr === this.head) break;
    }
  }
}

class Song {
  title: string;
  artists: string[];
  genres: string[];
  album: string | null;
  year: number;

  constructor(title: string, artist: string, genre: string, album: string, year: number) {
    this.title = title;
    this.artists = artist.split(",").map(str => str.trim());
    this.genres = genre.split(",").map(str => str.trim());
    this.album = album;
    this.year = year;
  }
}

class Playlist extends CircularLinkedList<Song> {
  addSong(song: Song) {
    this.add(song);
  }

  removeSong(pos: number) {
    this.delete(pos);
  }

  showPlaylist() {
    this.printList(1);
  }

  playNext(currentSong: Song): Song | null {
    let curr = this.head;
    if (!curr) return null;

    while (curr.data !== currentSong) {
      curr = curr.next;
    }
    return curr.next?.data || null;
  }

  playPrevious(currentSong: Song): Song | null {
    let curr = this.head;
    if (!curr) return null;

    let prev = null;
    while (curr.data !== currentSong) {
      prev = curr;
      curr = curr.next;
    }
    return prev?.data || null;
  }

  shufflePlaylist() {
    this.shuffle();
  }
}

const rapPlaylist = new Playlist();

const song1 = new Song("Euphoria", "Kendrick Lamar, Kanye West", "Rap, Hip-hop", "To Pimp A Butterfly", 2024);
rapPlaylist.addSong(song1);

const song2 = new Song("Jail", "Kanye West", "Rap, Hip-hop", "Highschool Graduation", 2011);
rapPlaylist.addSong(song2);

rapPlaylist.showPlaylist(); 
rapPlaylist.shufflePlaylist(); 
rapPlaylist.showPlaylist(); 
