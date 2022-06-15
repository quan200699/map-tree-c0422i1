"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreeNode = void 0;
class TreeNode {
    constructor(value) {
        this.leftTreeNode = null;
        this.rightTreeNode = null;
        this.value = value;
    }
    search(root, findValue) {
        let current = root;
        while (current.value !== findValue) {
            if (findValue > current.value) {
                if (current.rightTreeNode == null) {
                    return undefined;
                }
                current = current.rightTreeNode;
            }
            else if (findValue < current.value) {
                if (current.leftTreeNode == null) {
                    return undefined;
                }
                current = current.leftTreeNode;
            }
        }
        return current;
    }
}
exports.TreeNode = TreeNode;
let tree = new TreeNode(60);
tree.leftTreeNode = new TreeNode(55);
tree.rightTreeNode = new TreeNode(100);
let x = tree.search(tree, 60);
if (x != undefined) {
    console.log('Tìm thấy');
}
else {
    console.log('Không tìm thấy');
}
