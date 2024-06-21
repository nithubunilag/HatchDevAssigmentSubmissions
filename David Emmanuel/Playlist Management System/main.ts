import { Playlist } from './Playlist.ts';

/**
 * Playlist uses
 */

function main() {
    const playlist = new Playlist();
    
    playlist.addSong({ id: 1, title: "Song One", artist: "Artist A", album: "Album X", duration: 240 });
    playlist.addSong({ id: 2, title: "Song Two", artist: "Artist B", album: "Album Y", duration: 180 });
    playlist.addSong({ id: 3, title: "Song Three", artist: "Artist C", album: "Album Z", duration: 210 });
    
    console.log("Original Playlist:");
    console.log(playlist.getPlaylist());

    playlist.shuffle();
    console.log("Shuffled Playlist:");
    console.log(playlist.getPlaylist());

    // NOTE: song id is not the same as its index
    playlist.removeSong(2);
    console.log("Playlist after removing song with id 2:");
    console.log(playlist.getPlaylist());

}

main();