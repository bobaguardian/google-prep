const arr = [1, 2, 3, 4];

arr[0]; // => 1 - O(1)
arr.includes(8); // => false - O(n)

// inventory bucket => very useful but not efficient if we need to update it
// need to traverse the entire array to find it - cumbersome to memorize the indices!
// sooo we use hash maps!
const arr2 = [['arrows', 'common', 20], ['great sword', 'legendary', 1], ['fruit', 'uncommon', 2]];
