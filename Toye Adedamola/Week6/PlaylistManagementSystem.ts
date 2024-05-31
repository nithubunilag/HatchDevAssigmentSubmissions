//Toye Adedamola Taibat
//toye.adedamola@gmail.com 


//Every Song must have the following:
interface Song{
    id: number;
    title: string;
    artist: string;
    duration: number;
}

//The playlist is made up of song nodes
class SongNode{
    song: Song;
    next: SongNode | null;

    constructor(song: Song){
        this.song = song;
        this.next = null;
    }
}

//PLAYLIST CLASS
class Playlist{
    private songs: Song[] = [];
    private head: SongNode| null = null;
    private tail: SongNode | null = null;
    private playlistLength : number = 0;

    addSong(song :Song){ //Append song
        const newSong : SongNode = new SongNode(song);

        //If playlist is empty
        if(!this.head){
            this.head = newSong;
            return;
        }

        //Traverse the list to find the last song
        let current_song = this.head;
        while(current_song.next !== null){
            current_song = current_song.next;
        }

        //Append new song to the end of the list
        current_song.next = newSong;

    }

    removeSong(id: number){
        if(!this.head){ //You cannot delete from an empty list
            return;
        }

        if(this.head.song.id === id){
            this.head = this.head.next;
            this.playlistLength--
            return;
        }

        let current_song: SongNode | null | undefined = this.head;
        while(current_song !== null){
            if(current_song!.song.id === id){
                current_song = current_song!.next?.next;
                this.playlistLength--;
                return;
            }
            current_song = current_song?.next;
        }

        return `Song with ID ${id} not found`;
    }

    searchPlaylist(id: number){
        if(!this.head){
            return `You can not search an empty playlist`;
        }

        let current_song : SongNode | null = this.head;
        while(current_song !== null){
            if(current_song.song.id == id){
                return `ID : ${current_song.song.id} \n Title: ${current_song.song.title} \n Artist: ${current_song.song.artist} \n Duration: ${current_song.song.duration}`
            }
            current_song = current_song.next;
        }

        return `Song with ID ${id} not found`
    }


    shufflePlaylist(){
       if(!this.head || !this.head.next){
        //No need to shuffle a playlist that is empty or has only 1 song
            return
        }

        //Shuffling 
        for(let i = this.songs.length -1; i > 0; i--){
            const j = Math.floor(Math.random() * (i + 1));
            [this.songs[i], this.songs[j]] = [this.songs[j], this.songs[i]];
        }

        //Rebuild the linked list with the shuffled array
        this.head = null;
        for(const song of this.songs){
            //For every song in the shuffled list create a new node 
            const newSong = new SongNode(song);
            if(!this.head){
                this.head = newSong;
            }
            else{
                let current = this.head;
                while(current.next){
                    current = current.next;
                }
                current.next = newSong;
            }
        }
    }


    getSongById(id: number): string{
        for(let song of this.songs){
            if(song.id === id){
                return `ID : ${song.id} \n Title: ${song.title} \n Artist: ${song.artist} \n Duration: ${song.duration}`
                

            }
        }
        return `Song with ID ${id} not found.`;
       
    }

    getSongByIndex(index: number): string{
        if(index >= 0 && index < this.songs.length){
            const song = this.songs[index];
            return `ID : ${song.id} \n Title: ${song.title} \n Artist: ${song.artist} \n Duration: ${song.duration}`;
        }
        return "Index out of bounds";
    }

    displayPlaylist(){
        if(!this.head){
           console.log("Your playlist is empty")
        }

        let current_song : SongNode | null = this.head;
        console.log("\n My Playlist");
        while(current_song !== null){
            console.log(`ID : ${current_song.song.id} \n Title: ${current_song.song.title} \n Artist: ${current_song.song.artist} \n Duration: ${current_song.song.duration}`);
            current_song = current_song.next
        }
    }
        
}

const myPlaylist = new Playlist();
const song1: Song = {id : 1, title : "Paradise", artist : "Maher Zain", duration : 200};
const song2 : Song = {id : 2, title: "Wedding", artist: "Muhammad Al Muqit", duration: 178}
const song3: Song = {id:  3, title: "For The Rest Of My Life", artist: "Maher Zain", duration: 233};


myPlaylist.addSong(song1);
myPlaylist.addSong(song2);
myPlaylist.addSong(song3);
myPlaylist.displayPlaylist();

console.log("\nSearch result", myPlaylist.searchPlaylist(2));

myPlaylist.shufflePlaylist();
console.log("\nShuffled playlist: ")
myPlaylist.displayPlaylist()

console.log(myPlaylist.getSongById(3));
myPlaylist.removeSong(3);
myPlaylist.displayPlaylist()
