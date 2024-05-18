class Tree<T> {
    array: (T | undefined)[] = [];

    insert(value: T) {
        for (let i = 0; i < this.array.length; i++) {
            if (!this.array[i]) {
                this.array[i] = value;
                return;
            }
        }
        this.array.push(value);
    }

    getParent(index: number): T | undefined {
        if (index === 0) return undefined;
        if (!this.array[index]) throw Error("Node does not exist");
        const parentIndex = Math.floor((index - 1) / 2);
        return this.array[parentIndex];
    }

    getChildren(parentIndex: number): T[] {
        if (!this.array[parentIndex]) throw Error("Node does not exist");
        const left = this.array[parentIndex * 2 + 1];
        const right = this.array[parentIndex * 2 + 2];
        return [left, right].filter(val => val) as T[];
    }

    /** Level order traversal */
    traversal(): T[] {
        return this.array.filter(val => val) as T[];
    }

    display() {
        let height = 0;
        let lastIndex = 0;
        while (lastIndex < this.array.length) {
            const levelWidth = Math.pow(2, height);
            let level = this.array.slice(lastIndex, lastIndex + levelWidth);
            if (level.length < levelWidth) {
                level = level.concat([...new Array(levelWidth - level.length)])
            }
            console.log(level.map(val => val || '-').join(' '));
            lastIndex += Math.pow(2, height);
            height++;
        }
    }
}

const tree = new Tree<number>();
tree.insert(1);
tree.insert(2);
tree.insert(3);
tree.insert(4);
tree.insert(5);
tree.insert(6);
tree.insert(7);
console.log(tree.traversal());
tree.display();

for (let i = 0; i < tree.array.length; i++) {
    console.log(`${tree.array[i]} - Parent:${tree.getParent(i) || 'None'}, Children:[${tree.getChildren(i)}]`);
}