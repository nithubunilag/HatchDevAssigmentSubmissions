// Name: Obinka Ugonwa Divine-Favour
// email: divneobk@gmail.com

class Songs{
    title: string
    duration: number 
    artiste: string 
    nextSong: Songs | null
    prevSong: Songs | null
    status: boolean             // tells if a song is playing or not

    constructor(name: string, duration: number, artiste: string){
        this.artiste = artiste
        this.duration = duration
        this.title = name
        this.status = false
    }
    
}

class Playlist{
    song: Songs | null          // head 
    numberOfSongs: number
    totalDuration: number

    public playSong(song: Songs){
        song.status = true
        console.log(`Now playing ${song.title} by ${song.artiste}`)
    }

    // stops or pauses a song
    stopSong(song: Songs){
        song.status = false
        console.log(`${song.title} has stopped playing`)
    }

    // implementing using circular doubly linked list
    // adds new songs to the playlist
    // an instance of a song is added as a parameter, it's either created as variable and passed, or created upon passing
    addSong(newSong: Songs){
        // adding to an empty playlist
        if(!this.song){
            this.song = newSong
            this.song.nextSong = this.song
            this.song.prevSong = newSong

            this.numberOfSongs = 1
            this.totalDuration += newSong.duration
            console.log(`${newSong.title} to playlist.`)
            console.log(`Number of songs playlist: ${this.numberOfSongs}`)
            console.log(`Duration of playlist: ${this.totalDuration}`)
            return;
        }


        // adding to the end of the list
        let currentSong = this.song
        while(currentSong.nextSong !== this.song){
            currentSong = currentSong.nextSong!
        }
        
        currentSong.nextSong = newSong
        newSong.prevSong = currentSong
        newSong.nextSong = this.song
        this.song.prevSong = newSong

        this.numberOfSongs++
        this.totalDuration += newSong.duration
        console.log(`${newSong.title} to playlist.`)
        console.log(`Number of songs playlist: ${this.numberOfSongs}`)
        console.log(`Duration of playlist: ${this.totalDuration}`)
    }

    // base case: the playlist is empty
    // : we're deleting the only element in the list
    // : we're deleting the head element
    // : we're deleting any random element in the playlist
    removeSong(songToRemove: string){

        // empty playlist
        if(!this.song){
            console.log("Playlist is empty, Add songs to playlist.")
            return;
        }

        // if the playlist has only one song and it's the song to be deleted, make it null 
        if(this.numberOfSongs === 1 && this.song.title === songToRemove){
           this.song = null   
           console.log("Song has been removed from playlist, playlist is now empty.")      
           return;
        }

        // we have more than one song(element) an we're deleting the head song(element)
        if(this.numberOfSongs >= 1 && this.song.title === songToRemove){

            this.totalDuration -= this.song.duration

            this.song = this.song.nextSong
            this.song!.prevSong = this.song!.prevSong!.prevSong        // test this
            this.numberOfSongs--

            console.log("Song has been removed from playlist.")
            console.log(`Number of songs playlist: ${this.numberOfSongs}`)
            console.log(`Duration of playlist: ${this.totalDuration}`)
            return;
        }

        // deleting any other random song 
        let currentSong = this.song
        while(currentSong.nextSong!.title !== songToRemove){
            currentSong = currentSong.nextSong!
        }
        
        this.totalDuration -= currentSong.duration
        currentSong.prevSong!.nextSong = currentSong.nextSong
        currentSong.nextSong!.prevSong = currentSong.prevSong
        this.numberOfSongs--

        console.log("Song has been removed from playlist.")
        console.log(`Number of songs playlist: ${this.numberOfSongs}`)
        console.log(`Duration of playlist: ${this.totalDuration}`)

        return;
    }

    playNext(){
        // make current = current.next
        let currentSong = this.song
        currentSong!.status = false
        currentSong = currentSong!.nextSong
        currentSong!.status = true
        return;
    }

    playPrev(){
        // make current = current.prev
        let currentSong = this.song
        currentSong!.status = false
        currentSong = currentSong!.prevSong
        currentSong!.status = true
        return;
    }

    unloopPlaylist(){
        // delete the pointer between head and tail
        let currentSong = this.song!
        while(currentSong.nextSong !== this.song){
            currentSong = currentSong.nextSong!
        }
        
        currentSong.nextSong = null
        this.song!.prevSong = null
    }

    // loops the playlist after it's been unlooped
    loopplaylist(){
        // fix the pointers again
        let currentSong = this.song!
        while(currentSong.nextSong !== this.song){
            currentSong = currentSong.nextSong!
        }
        
        currentSong.nextSong = this.song
        this.song!.prevSong = currentSong
    }
}

// testing
let kpop = new Playlist()
kpop.addSong(new Songs("Butter", 210, "BTS"))
kpop.addSong(new Songs("Boy in luv", 210, "BTS"))
kpop.addSong(new Songs("Need u", 210, "BTS"))
kpop.addSong(new Songs("My universe", 210, "BTS"))
kpop.addSong(new Songs("Boy with luv", 210, "BTS"))
kpop.addSong(new Songs("ON", 210, "BTS"))
kpop.addSong(new Songs("No More Dream", 210, "BTS"))
kpop.addSong(new Songs("Life Goes On", 210, "BTS"))
kpop.removeSong("My universe")
kpop.removeSong("Butter")
// console.log(kpop)
// kpop.unloopPlaylist()
// console.log(kpop)

let stay = new Songs("Stay", 210, "BTS")
console.log(stay.status)
kpop.addSong(stay)
kpop.playSong(stay)