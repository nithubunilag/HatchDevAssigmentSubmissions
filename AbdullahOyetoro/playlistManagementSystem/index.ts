//  

/**
 * getsongdata() takes in a parameter of the number of songs and the number of things to collect for  example
 * takes the no of songs 10, and no of data 5 
 * which means its taking 10 songs and 5 metadata points e.h name of song and artist and album name 
 * producer name writtersnames year of release or relase date
 * the function returns an array od song metadata objects
 */
/** function takes 2 parameters artistName and number of results 
 * the parameters are hen added to the http request
 * this brings a json file which has alot of objects
 * this objects are then streamlinened by another function
*/


class SongData {
  trackName: string;
  artistName: string;
  trackId: number;
  releaseYear: string;

  constructor(trackName: string, artistName: string, trackId: number, releaseDate: string) {
    this.trackName = trackName;
    this.artistName = artistName;
    this.trackId = trackId;
    this.releaseYear = releaseDate;
  }

  toString(): string {
    return `SongData(trackName=${this.trackName}, artistName=${this.artistName}, trackId=${this.trackId}, releaseDate=${this.releaseYear})`;
  }
}

let songlist: SongData[] = [];

async function getsongData(entity:string,limit:number=10) {
  try {
    const response = await fetch(`https://itunes.apple.com/search?term=${entity}&media=music&limit=${limit}`);
    const songs = await response.json();

    for (let result of songs.results) {
      const { trackName, artistName, trackId, releaseDate } = result;
      const song = new SongData(trackName, artistName, trackId, releaseDate.substring(0,4));
      songlist.push(song);
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
function loadPlaylist(playlist:Playlist<SongData>, arr:SongData[]){
  for(let i=0 ; i< arr.length;){
    playlist.queue(arr.shift()!)
  }
}

class songNode<SongData>{
  data:SongData
  next:songNode<SongData> |null;
  constructor(data:SongData){
    this.data = data
    this.next = null
  }
}
type repeatType = "off"| "all"|"one"
class Playlist<SongData>{
  head:songNode<SongData>;
  repeat: repeatType = "off"

  queue(val:SongData){
    let newNode = new songNode(val)
    if(!this.head){
      this.head = newNode
      return
    }
    
    // if theres a head and the repeat is off or false
    let currentNode = this.head
    if(this.head&& this.repeat == "off")
    {
      
      while(currentNode.next !== null){
        currentNode = currentNode.next
        if(currentNode.next = this.head){
          break
        }
      }
      currentNode.next = newNode
      return
    }
    if(this.head&& this.repeat == "all"){
      while(currentNode.next !== null){
        currentNode = currentNode.next
      }
      currentNode.next = newNode
      currentNode = currentNode.next
      currentNode.next = this.head
    }
    if(this.head && this.repeat == "one"){
      return
    }
  }
}

getsongData("lojay",8).then(() => {
  // console.log(songlist);
  const sounds = new Playlist<SongData>()
  // sounds.repeat = "all"
  loadPlaylist(sounds,songlist)
  console.log(sounds)
});

// sounds.queue(songlist.shift()!)
