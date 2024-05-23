import { DNode, DoubleNode, DoublyLinkedList } from './doubly-linked-list.ts';

/** Song Class */
class Song {
    title: string;
    artist: string;
    year: number;

    constructor(title: string, artist: string, year: number) {
        this.title = title;
        this.artist = artist;
        this.year = year;
    }

    // Override
    toString(): string {
        return `${this.title} by ${this.artist} - (${this.year})`;
    }
}

/**
 * Playlist Manager Class
 */
class PlayListManager<T> {
    public playlist: DoublyLinkedList<T>;
    public nextUp: DNode<T>;
    private plHistory: T[];

    // Initializes the playlist
    constructor(list: T[]) {
        this.playlist = new DoublyLinkedList(list);
        this.nextUp = this.playlist.getHead();
        this.plHistory = [];
    }

    // Play something from the play list
    public play(): void {
        if (this.nextUp) {
            console.log(`- Now Playing: ${this.nextUp.data}`);
            this.plHistory.push(this.nextUp.data);
            this.nextUp = this.nextUp.getNext() ?? null;
            return;
        }
        console.log(`- Nothing playing currently.`);
    }

    // Move to the next item in the play list
    public next(): void {
        this.nextUp = this.nextUp?.getNext() ?? null;
        if (this.nextUp) {
            console.log('- Next up is:', this.nextUp?.data);
            return;
        } else {
            this.nextUp = null;
            console.log("- You've reached the end of the playlist.");
        }
    }

    // Move to the previous item in the play list
    public previous(): void {
        if (this.nextUp) {
            const prevNode = this.nextUp.getPrev();
            if (prevNode) {
                this.nextUp = prevNode;
                console.log('- Next up is:', this.nextUp.data);
            } else {
                this.nextUp = this.playlist.getTail();
            }
        } else {
            console.log(
                "- You're at the end of the playlist."
            );
        }
    }

    // View playlist history
    public history(): void {
        console.log('\nHistory');
        console.log('-'.repeat(7));

        if (this.plHistory.length == 0) {
            console.log('- Nothing played so far.\n');
            return;
        }

        for (const [idx, item] of this.plHistory.entries()) {
            console.log(`${idx + 1}. ${item}`);
        }
    }
}

const mood = new PlayListManager([
    new Song('Lose Yourself', 'Eminem', 2002),
    new Song('Kamikaze', 'Eminem', 2018),
    new Song('Push Ups', 'Drake', 2024),
]);

mood.history();
mood.play();

// mood.next();
// mood.next();
mood.play();
mood.play();
mood.play();

mood.next();

mood.previous();
// mood.play();
// mood.previous();
// mood.play();

mood.history();
