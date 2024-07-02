/**
 * FULLNAME: ELOCHUKWU GERALD OKAFOR
 * EMAIL: eogerald.07@gmail.com
 * GITHUB USERNAME: dev-xero
 */
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
            return;
        }
        console.log(`- Nothing playing currently.`);
    }

    // Move to the next item in the play list
    public next(): PlayListManager<T> {
        if (this.nextUp?.getNext()) {
            this.nextUp = this.nextUp.getNext();
            console.log('- Next up is:', this.nextUp?.data);
            return this;
        }
        console.log("- You've reached the end of the playlist.");
        return this;
    }

    // Move to the previous item in the playlist
    public previous(): PlayListManager<T> {
        if (this.nextUp?.getPrev()) {
            this.nextUp = this.nextUp.getPrev();
            console.log('- Next up is:', this.nextUp?.data);
            return this;
        }
        console.log("- You're at the start of the playlist");
        return this;
    }

    // Add an item to the playlist
    public add(item: T): void {
        this.playlist.append(item);
        console.log('- Added:', item);
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

mood.next().play();

mood.next().play();
mood.next();

mood.previous().previous();

mood.add(new Song("Four Seasons", "Vivaldi", 1723));
mood.next().next().next().play();

mood.history();
