class Song {
    constructor(public songId: number, public title: string, public artist: string) {}
}

class PlaylistNode {
    public next: PlaylistNode | null = null;
    constructor(public songId: number) {}
}

class Playlist {
    private head: PlaylistNode | null = null;
    private tail: PlaylistNode | null = null;
    private songMap: { [key: number]: PlaylistNode } = {};

    addSong(songId: number): void {
        const newNode = new PlaylistNode(songId);
        this.songMap[songId] = newNode;
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            if (this.tail) {
                this.tail.next = newNode;
            }
            this.tail = newNode;
        }
    }

    removeSong(songId: number): void {
        if (!(songId in this.songMap)) {
            return;
        }
        const nodeToRemove = this.songMap[songId];
        if (nodeToRemove === this.head) {
            this.head = nodeToRemove.next;
            if (nodeToRemove === this.tail) {
                this.tail = null;
            }
        } else {
            let current = this.head;
            while (current && current.next !== nodeToRemove) {
                current = current.next;
            }
            if (current && current.next === nodeToRemove) {
                current.next = nodeToRemove.next;
                if (nodeToRemove === this.tail) {
                    this.tail = current;
                }
            }
        }
        delete this.songMap[songId];
    }

    shuffle(): void {
        if (!this.head || !this.head.next) {
            return;
        }

        // Convert linked list to array
        const nodes: PlaylistNode[] = [];
        let current: PlaylistNode | null = this.head;
        while (current) {
            nodes.push(current);
            current = current.next;
        }

        // Shuffle the array using Fisher-Yates algorithm
        for (let i = nodes.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [nodes[i], nodes[j]] = [nodes[j], nodes[i]];
        }

        // Rebuild the linked list
        this.head = nodes[0];
        current = this.head;
        for (let i = 1; i < nodes.length; i++) {
            current.next = nodes[i];
            current = nodes[i];
        }
        this.tail = current;
        this.tail.next = null;
    }

    printPlaylist(songMetadata: Song[]): void {
        let current: PlaylistNode | null = this.head;
        while (current) {
            const song = songMetadata[current.songId];
            console.log(`${song.title} by ${song.artist}`);
            current = current.next;
        }
    }
}

// Sample usage
const songMetadata: Song[] = [
    new Song(0, "Busy to be Bae", "KissDanial"),
    new Song(1, "Song B", "Artist 2"),
    new Song(2, "Song C", "Artist 3"),
    new Song(3, "Song D", "Artist 4"),
];

const playlist = new Playlist();
playlist.addSong(0);
playlist.addSong(1);
playlist.addSong(2);
playlist.addSong(3);

console.log("Original playlist:");
playlist.printPlaylist(songMetadata);

playlist.removeSong(1);
console.log("\nAfter removing Song B:");
playlist.printPlaylist(songMetadata);

playlist.shuffle();
console.log("\nAfter shuffling:");
playlist.printPlaylist(songMetadata);
