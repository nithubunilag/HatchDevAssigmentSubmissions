class Song {
  constructor(
    public title: string,
    public artist: string,
    public duration: number,
    public album?: string
  ) {}
}

class Playlist {
  private songs: Song[] = [];
  private currentSongIndex: number = 0;

  addSong(song: Song) {
    this.songs.push(song);
  }

  removeSong(title: string) {
    const index = this.songs.findIndex((song) => song.title === title);
    if (index !== -1) {
      this.songs.splice(index, 1);
    }
  }

  shuffle() {
    for (let i = this.songs.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.songs[i], this.songs[j]] = [this.songs[j], this.songs[i]];
    }
  }

  playCurrentSong() {
    const currentSong = this.songs[this.currentSongIndex];
    console.log(`Now playing: ${currentSong.title} by ${currentSong.artist}`);
  }

  nextSong() {
    this.currentSongIndex = (this.currentSongIndex + 1) % this.songs.length;
    this.playCurrentSong();
  }
}

const myPlaylist = new Playlist();

const song1 = new Song("Shape of You", "Ed Sheeran", 240);
const song2 = new Song("Blinding Lights", "The Weeknd", 210);
const song3 = new Song("Dance Monkey", "Tones and I", 200);

myPlaylist.addSong(song1);
myPlaylist.addSong(song2);
myPlaylist.addSong(song3);

myPlaylist.playCurrentSong();
myPlaylist.nextSong();
myPlaylist.removeSong("Blinding Lights");
myPlaylist.shuffle();
