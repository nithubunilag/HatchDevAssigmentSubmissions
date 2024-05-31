interface IMedia {
  name: string;
  id: any;
  artist: string;
  yearOfRelease: number;
}

class Media<T> {
  // private _id: any;
  media: IMedia;
  next: Media<T> | null;

  constructor(val: IMedia) {
    this.media = val;
    this.next = null;
  }
}

class Playlist<T> {
  name: string;
  track: IMedia[];
  head: Media<T> | null;
  size: number;

  constructor(name: string) {
    this.name = name;
    this.track = [];
    this.head = null;
    this.size = 0;
  }
  add(val: IMedia) {
    const newMedia = new Media(val);
    this.track.push(val);
    if (!this.head) {
      this.head = newMedia;
    } else {
      let currentMedia = this.head;
      while (currentMedia.next) {
        currentMedia = currentMedia.next;
      }
      currentMedia.next = newMedia;
    }
    this.size++;
    // return this.track
  }

  remove(index: number) {
    if (index < 0 || index >= this.size) {
      return null;
    }
    let removeNode: Media<T> | null = null;
    if (index === 0) {
      removeNode = this.head;
      this.head = this.head!.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev!.next;
      }
      removeNode = prev!.next;
      if (prev && removeNode) {
        prev.next = removeNode.next;
      }
    }
    this.size--;
    return removeNode?.media;
  }

  shuffle() {
    if (!this.head || !this.head.next) {
      return;
    }

    let current = this.head;
    let store: Media<T>[] = [];

    while (current) {
      store.push(current);
      current = current.next!;
    }

    for (let i = store.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [store[i], store[j]] = [store[j], store[i]]
    }

    this.head = store[0]
    current = this.head
    for(let i = 1; i < store.length; i++){
      current.next = store[i]
      current = current.next
    }
    current.next = null
  }

  print() {
    if (!this.head) {
      console.log("playlist is empty");
      return;
    }

    let currentTrack = this.head;
    let trackNo = 1;
    console.log(`Playlist: ${this.name}`);

    while (currentTrack) {
      console.log(
        `${trackNo}. ${currentTrack?.media.name} by ${currentTrack?.media.artist} released in ${currentTrack?.media.yearOfRelease}, Next track: ${currentTrack.next?.media.name}`
      );
      currentTrack = currentTrack.next!;
      trackNo++;
    }
  }
}

// const secular = new Playlist("Secular");
// secular.add({
//   name: "Oceans",
//   id: "33",
//   artist: "Peter Poe",
//   yearOfRelease: 2002,
// });
// secular.add({
//   name: "river",
//   id: "23",
//   artist: "legend turner",
//   yearOfRelease: 2022,
// });
// secular.add({
//   name: "woman",
//   id: "3",
//   artist: "simi",
//   yearOfRelease: 2021,
// });
// secular.remove(1)
// secular.print();

const gospel = new Playlist("Gospel");
gospel.add({
  name: "Awake",
  id: "43",
  artist: "HillSong",
  yearOfRelease: 2018,
});
gospel.add({
  name: "Praise",
  id: "9",
  artist: "Maverick City",
  yearOfRelease: 2023,
});
gospel.add({
  name: "Igwe",
  id: "30",
  artist: "Mercy Chinwo",
  yearOfRelease: 2015,
});
gospel.add({
  name: "Majesty",
  id: "240",
  artist: "Max",
  yearOfRelease: 2005,
});
gospel.add({
  name: "In the room",
  id: "3440",
  artist: "Maverick city",
  yearOfRelease: 2024,
});
gospel.shuffle();
gospel.print();
