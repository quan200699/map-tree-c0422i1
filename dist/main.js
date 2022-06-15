"use strict";
let map = new Map();
map.set('dog', 'mèo');
map.set('cat', 'chó');
console.log(map.get('dog'));
let keys = map.keys();
console.log(keys);
let values = map.values();
console.log(values);
// map.delete('dog');//xóa theo key
// map.clear(); //xóa tất cả
let entries = map.entries();
for (const entry of entries) {
    console.log(`key: ${entry[0]} - value: ${entry[1]}`);
}
