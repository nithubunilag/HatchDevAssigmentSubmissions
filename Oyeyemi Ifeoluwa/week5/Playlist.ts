class Song {
    title: string
    artist: string

    constructor(title: string, artist: string) {
        this.title = title
        this.artist = artist
    }
}

class PlaylistManager {
     songs: Song[] = []

    addSong(title: string, artist: string): void {
        const newSong = new Song(title, artist)
        this.songs.push(newSong)
        console.log(`Added "${title}" by ${artist} to the playlist.`)
    }

    removeSong(title: string): void {
        const index = this.songs.findIndex((song) => song.title === title)
        if (index !== -1) {
            const removedSong = this.songs.splice(index, 1)[0]
            console.log(`Removed "${removedSong.title}" from the playlist.`)
        } else {
            console.log(`Song "${title}" not found in the playlist.`)
        }
    }

    // shuffleSongs(): void {
    //     for (let i = this.songs.length - 1; i > 0; i--) {
    //         const j = Math.floor(Math.random() * (i + 1))
    //         [this.songs[i], this.songs[j]] = [this.songs[j], this.songs[i]]
    //     }
    //     console.log('Shuffled the playlist.')
    // }

    displayPlaylist(): void {
        console.log('Current playlist:')
        this.songs.forEach((song) => {
            console.log(`"${song.title}" by ${song.artist}`)
        });
    }
}

const playlistManager = new PlaylistManager()
playlistManager.addSong('Leave a Light On', 'Tom Walker')
playlistManager.addSong('Addicted', 'Jorja Smith')
playlistManager.addSong('On Top Of The World', 'Imagine Dragons')
// playlistManager.shuffleSongs()
playlistManager.displayPlaylist()
playlistManager.removeSong('On Top Of The World')
playlistManager.removeSong('Work')
playlistManager.displayPlaylist()
