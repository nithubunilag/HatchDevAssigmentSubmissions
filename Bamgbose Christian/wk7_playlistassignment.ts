class Playlist {
    private songs: string[];

    constructor() {
        this.songs = [];
    }

    addSong(song: string): void {
        this.songs.push(song);
    }

    removeSong(song: string): void {
        const index = this.songs.indexOf(song);
        if (index !== -1) {
            this.songs.splice(index, 1);
        }
    }

    getSongCount(): number {
        return this.songs.length;
    }

    getPlaylist(): string[] {
        return this.songs;
    }
}

// An Example Playlist
const myPlaylist = new Playlist();
myPlaylist.addSong("Million Dollar Baby");
myPlaylist.addSong("The Way You Look Tonight");
myPlaylist.addSong("Let it snow");
myPlaylist.addSong("Beautiful blue danube");

console.log("Playlist:", myPlaylist.getPlaylist());
console.log("Number of tracks: ", myPlaylist.getSongCount());

myPlaylist.removeSong("The Way You Look Tonight");

console.log("New playlist:", myPlaylist.getPlaylist());
console.log("New Number of tracks: ", myPlaylist.getSongCount());