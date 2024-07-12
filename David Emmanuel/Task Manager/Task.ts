export default class Task {
    title: string;
    description?: string;
    deadline?: Date;

    constructor(title: string, description?: string, deadline?: Date) {
        this.title = title;
        this.description = description;
        this.deadline = deadline;
    }

    display(i?: number) {
        if (i === undefined) console.log(this.title);
        else console.log(`${i}. ${this.title}`)
        if (this.description) console.log(this.description);
        if (this.deadline) {
            console.log(this.deadline.toDateString());
            if (this.isLate()) console.log(`(${timeDifference(new Date(), this.deadline)} late)`);
        }
    }

    isLate() {
        if (!this.deadline) return false;
        const now = new Date();
        return now.getTime() > this.deadline.getTime();
    }
}

function timeDifference(before: Date, after: Date): string {
    if (before.getTime() > after.getTime()) return timeDifference(after, before);


    const yearDiff = after.getFullYear() - before.getFullYear();
    if (yearDiff > 0) {
        if (yearDiff === 1) return "1 year";
        else return `${yearDiff} years`;
    }

    const monthDiff = after.getMonth() - before.getMonth();
    if (monthDiff > 0) {
        if (monthDiff === 1) return "1 month";
        else return `${monthDiff} months`;
    }

    const dayDiff = after.getDate() - before.getDate();
    if (dayDiff > 0) {
        if (dayDiff === 1) return "1 day";
        else return `${dayDiff} days`;
    }

    const hourDiff = after.getHours() - before.getHours();
    if (hourDiff > 0) {
        if (hourDiff === 1) return "1 hour";
        else return `${hourDiff} hours`;
    }

    const minuteDiff = after.getMinutes() - before.getMinutes();
    if (minuteDiff > 0) {
        if (minuteDiff === 1) return "1 minute";
        else return `${minuteDiff} minutes`;
    }

    return `${after.getSeconds() - before.getSeconds()} seconds`;
}