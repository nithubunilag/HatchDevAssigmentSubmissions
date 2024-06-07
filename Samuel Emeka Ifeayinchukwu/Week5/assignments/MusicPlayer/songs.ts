

interface ISong {
    title: string;
    artist: string;
    // Add other song metadata as needed (e.g., album, duration)
  }
  


export class Song implements ISong {
    title: string;
    artist: string;
    constructor(title: string, artist: string){
        this.title = title
        this.artist = artist
    }
}
