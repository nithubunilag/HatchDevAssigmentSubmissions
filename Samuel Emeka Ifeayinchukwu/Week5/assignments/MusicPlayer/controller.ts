import { Song } from "./songs";
import { Playlist } from "./player";


const playlist = new Playlist();

// create songs
const song1 = new Song("Bohemian Rhapsody", "Queen")
const song2 = new Song("Imagine", "John Lennon")
const song3 = new Song("Hey Jude", "The Beatles")


// Add songs to playlist
playlist.addSong(song1);
playlist.addSong(song2);
playlist.addSong(song3);

// Print playlist
playlist.printPlaylist();

// Shuffle playlist
playlist.shuffle();

// Print shuffled playlist
playlist.printPlaylist();

// Remove a song
playlist.removeSong("Imagine");

// Print updated playlist
playlist.printPlaylist()
