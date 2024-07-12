// JavaScript implementation of tree using array
// numbering starting from 0 to n-1.
const tree = Array(10).fill(null);

function root(key) {
	if (tree[0] != null) {
		console.log("Tree already had root");
	} else {
		tree[0] = key;
	}
}

function setLeft(key, parent) {
	if (tree[parent] == null) {
		console.log(`Can't set child at ${(parent * 2) + 1}, no parent found <br>`);
	} else {
		tree[(parent * 2) + 1] = key;
	}
}

function setRight(key, parent) {
	if (tree[parent] == null) {
		console.log(`Can't set child at ${(parent * 2) + 2}, no parent found <br>`);
	} else {
		tree[(parent * 2) + 2] = key;
	}
}

function printTree() {
	for (let i = 0; i < 10; i++) {
		if (tree[i] != null) {
			console.log(tree[i]);
		} else {
			console.log("-");
		}
	}
}

// Driver Code
root("A");
setLeft("B", 0);
setRight("C", 0);
setLeft("D", 1);
setRight("E", 1);
setRight("F", 2);
console.log(tree);



// This code is contributed by lokeshpotta20
