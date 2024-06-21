export default function shuffle(length: number) {
    const copy = [...Array(length).keys()].map(i => i+1);
    const shuffled: number[] = [];
    while (copy.length > 0) {
        const index = Math.floor(Math.random() * copy.length);
        shuffled.push(copy.splice(index, 1)[0]);
    }
    return shuffled;
}