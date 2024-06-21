import LinkedList from './LinkedList.ts';

interface Song {
    id: number;
    title: string;
    artist: string;
    album: string;
    duration: number; // in seconds
}
export class Playlist {
    private queue: LinkedList<number> = new LinkedList<number>();
    private songMap: Map<number, Song> = new Map();

    addSong(song: Song): void {
        this.queue.add(song.id);
        this.songMap.set(song.id, song);
    }

    removeSong(songId: number) {
        const song = this.songMap.get(songId);
        if (!song) return false;

        const removedFromLinkedList = this.queue.delete(song.id);
        this.songMap.delete(songId);
    }

    shuffle(): void {
        const songIds = [...this.songMap.keys()];
        for (let i = songIds.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [songIds[i], songIds[j]] = [songIds[j], songIds[i]];
        }

        this.queue = new LinkedList();
        for (const songId of songIds) {
            this.queue.add(songId);
        }
    }

    getPlaylist(): Song[] {
        return this.queue.map(songId => this.songMap.get(songId)) as Song[];
    }
}
