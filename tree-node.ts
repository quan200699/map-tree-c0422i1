export class TreeNode<T> {
    public value: T;
    public leftTreeNode: TreeNode<T>|null = null;
    public rightTreeNode: TreeNode<T>|null = null;


    constructor(value: T) {
        this.value = value;
    }

    search(root: TreeNode<T>, findValue: T): TreeNode<T> | undefined {
        let current = root;
        while (current.value !== findValue) {
            if (findValue > current.value) {
                if (current.rightTreeNode == null) {
                    return undefined;
                }
                current = current.rightTreeNode;
            } else if (findValue < current.value) {
                if (current.leftTreeNode == null) {
                    return undefined;
                }
                current = current.leftTreeNode;
            }
        }
        return current;
    }
}

let tree = new TreeNode<number>(60);
tree.leftTreeNode = new TreeNode<number>(55);
tree.rightTreeNode = new TreeNode<number>(100);
let x = tree.search(tree, 60);
if (x != undefined) {
    console.log('Tìm thấy')
} else {
    console.log('Không tìm thấy')
}
