import { Song } from "./songs";
import { DoubleLinkedList } from "../../../Week6/classworks/doublylinkedlist";

class SongList {
    songs: Song[];
  
    constructor() {
      this.songs = [];
    }
  
    addSong(song: Song): void {
      this.songs.push(song);
    }
  
    removeSong(title: string): boolean {
      const index = this.songs.findIndex((s) => s.title === title);
      if (index !== -1) {
        this.songs.splice(index, 1);
        return true;
      }
      return false;
    }
  
    getSong(title: string): Song | undefined {
      return this.songs.find((s) => s.title === title);
    }
  }
  
export class Playlist extends DoubleLinkedList<Song> {
    songList: SongList;
    constructor() {
      super()
      this.songList = new SongList()
    }
  
    addSong(song: Song, index:number = -1): void {
      this.add(song, -1)
      this.songList.addSong(song)
    }
  
    removeSong(title: string): void {
        this.songList.removeSong(title);
        const indexToDelete = this.songList.songs.findIndex((s) => s.title === title)
        this.delete(indexToDelete)
    }
  
    shuffle(): void {
      this.shuffle()
    }
  
    printPlaylist(): void {
      this.print()
    }
  }
  