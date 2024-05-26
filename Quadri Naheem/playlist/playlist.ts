// Define the Song interface
interface Song {
    id: number;
    title: string;
    artist: string;
    duration: number;
}

// Define the PNode class for the linked list
class PNode {
    public song: Song;
    public next: PNode | null = null;

    constructor(song: Song) {
        this.song = song;
    }
}

// Define the LinkedList class for managing the sequence of songs
class LinkedList {
    private head: PNode | null = null;
    public length: number = 0;

    add(song: Song) {
        const newNode = new PNode(song);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.length++;
    }

    remove(songId: number): boolean {
        if (!this.head) return false;

        if (this.head.song.id === songId) {
            this.head = this.head.next;
            this.length--;
            return true;
        }

        let current = this.head;
        while (current.next) {
            if (current.next.song.id === songId) {
                current.next = current.next.next;
                this.length--;
                return true;
            }
            current = current.next;
        }

        return false;
    }

    shuffle() {
        if (!this.head || !this.head.next) return;

        // Convert linked list to array for shuffling
        let array: PNode[] = [];
        let current = this.head;
        while (current) {
            array.push(current);
            current = current.next!;
        }

        // Basic shuffling algorithm
        for (let i = 0; i < array.length; i++) {
            const j = Math.floor(Math.random() * array.length);
            [array[i], array[j]] = [array[j], array[i]];
        }

        // Reconstruct linked list from shuffled array
        this.head = array[0];
        current = this.head;
        for (let i = 1; i < array.length; i++) {
            current.next = array[i];
            current = current.next;
        }
        current.next = null;
    }

    getSongs(): Song[] {
        let current = this.head;
        let songs: Song[] = [];
        while (current) {
            songs.push(current.song);
            current = current.next;
        }
        return songs;
    }
}

// Define the Playlist class
class Playlist {
    private songs: Song[] = [];
    private songSequence: LinkedList = new LinkedList();

    addSong(song: Song) {
        this.songs.push(song);
        this.songSequence.add(song);
    }

    removeSong(songId: number) {
        this.songs = this.songs.filter(song => song.id !== songId);
        this.songSequence.remove(songId);
    }

    shufflePlaylist() {
        this.songSequence.shuffle();
    }

    getPlaylist(): Song[] {
        return this.songSequence.getSongs();
    }

    getSongMetadata(songId: number): Song | undefined {
        return this.songs.find(song => song.id === songId);
    }
}

const playlist = new Playlist();

const song1: Song = { id: 1, title: "Song One", artist: "Artist A", duration: 210 };
const song2: Song = { id: 2, title: "Song Two", artist: "Artist B", duration: 190 };
const song3: Song = { id: 3, title: "Song Three", artist: "Artist C", duration: 200 };

playlist.addSong(song1);
playlist.addSong(song2);
playlist.addSong(song3);

console.log("Original Playlist:");
console.log(playlist.getPlaylist());

playlist.shufflePlaylist();
console.log("Shuffled Playlist:");
console.log(playlist.getPlaylist());

playlist.removeSong(2);
console.log("After Removing Song with ID 2:");
console.log(playlist.getPlaylist());
