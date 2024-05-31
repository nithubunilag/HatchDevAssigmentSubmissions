/*Project 6: Playlist Management System*

- Develop a playlist management system that utilizes arrays for quick access to song metadata and linked lists for managing the sequence of songs in a playlist. Implement features like adding, removing, and shuffling songs.*/

class Song {
    constructor(
        public title: string,
        public artist: string,
        public duration: number // duration in seconds
    ) {}
}

class PlaylistNode {
    public next: PlaylistNode | null = null;

    constructor(public song: Song) {}
}

class Playlist {
    private head: PlaylistNode | null = null;
    private songsMetadata: Song[] = [];

    // Add song to the playlist
    addSong(song: Song): void {
        this.songsMetadata.push(song);
        const newNode = new PlaylistNode(song);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    // Remove song by title
    removeSong(title: string): void {
        this.songsMetadata = this.songsMetadata.filter(song => song.title !== title);

        if (this.head === null) return;

        if (this.head.song.title === title) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        while (current.next !== null && current.next.song.title !== title) {
            current = current.next;
        }

        if (current.next !== null) {
            current.next = current.next.next;
        }
    }

    // Shuffle the playlist
    shufflePlaylist(): void {
        if (this.head === null) return;

        // Convert linked list to array for easy shuffling
        let current: PlaylistNode | null = this.head; // Declare current as PlaylistNode | null
        const nodesArray: PlaylistNode[] = [];
        while (current !== null) {
            nodesArray.push(current);
            current = current.next;
        }

        // Fisher-Yates shuffle algorithm
        for (let i = nodesArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [nodesArray[i], nodesArray[j]] = [nodesArray[j], nodesArray[i]];
        }

        // Rebuild linked list from shuffled array
        this.head = nodesArray[0];
        current = this.head;
        for (let i = 1; i < nodesArray.length; i++) {
            current.next = nodesArray[i];
            current = current.next;
        }
        current.next = null;
    }

    // Display the playlist
    displayPlaylist(): void {
        if (this.head === null) {
            console.log('The playlist is empty.');
            return;
        }

        let current = this.head;
        while (current !== null) {
            console.log(`Title: ${current.song.title}, Artist: ${current.song.artist}, Duration: ${current.song.duration}`);
            if (current.next === null) {
                break;
            }
            current = current.next;
        }
    }

    // Search for a song by title
    searchSong(title: string): Song | null {
        return this.songsMetadata.find(song => song.title === title) || null;
    }
    shuffleSong(): void {
        if (this.head === null) return;

        // Convert linked list to array for easy shuffling
        let current: PlaylistNode | null = this.head; // Declare current as PlaylistNode | null
        const nodesArray: PlaylistNode[] = [];
        while (current !== null) {
            nodesArray.push(current);
            current = current.next;
        }

        // Fisher-Yates shuffle algorithm
        for (let i = nodesArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [nodesArray[i], nodesArray[j]] = [nodesArray[j], nodesArray[i]];
        }

        // Rebuild linked list from shuffled array
        this.head = nodesArray[0];
        current = this.head;
        for (let i = 1; i < nodesArray.length; i++) {
            current.next = nodesArray[i];
            current = current.next;
        }
        current.next = null;
    }
}

// Example usage:
const playlist = new Playlist();
playlist.addSong(new Song("Song 1", "Artist 1", 300));
playlist.addSong(new Song("Song 2", "Artist 2", 250));
playlist.addSong(new Song("Song 3", "Artist 3", 200));

console.log("Initial Playlist:");
playlist.displayPlaylist();

console.log("\nAfter Shuffling:");
playlist.shufflePlaylist();
playlist.displayPlaylist();

console.log("\nSearching for 'Song 2':");
const foundSong = playlist.searchSong("Song 2");
if (foundSong) {
    console.log(`Found - Title: ${foundSong.title}, Artist: ${foundSong.artist}, Duration: ${foundSong.duration}`);
} else {
    console.log("Song not found.");
}

console.log("\nAfter Removing 'Song 2':");
playlist.removeSong("Song 2");
playlist.displayPlaylist();
