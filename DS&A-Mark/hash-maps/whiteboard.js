const arr = [1, 2, 3, 4];

arr[0]; // => 1 - O(1)
arr.includes(8); // => false - O(n)

// inventory bucket => very useful but not efficient if we need to update it
// need to traverse the entire array to find it - cumbersome to memorize the indices!
// sooo we use hash maps!
const arr2 = [['arrows', 'common', 20], ['great sword', 'legendary', 1], ['fruit', 'uncommon', 2]];

const newArr = [,,,,,]; // -> block of memory: c678-c681, constant lookup b/c we know the range in memory but not efficient w/ lots of data
const linearArr = [,,,,,];

// go through everything in the string and hash it
// hashing the key goes into time complexity
const toHash = str => {
  let res = 0;
  for (let char of str) {
    const charCode = char.charCodeAt();
    res += charCode;
  }

  return res % newArr.length;

};

console.log(toHash('a')) // => 97
// arr[toHash('a')] = item;
console.log(arr) // => this item is placed at the 97th index of arr

// we're manipulating with a string => converted to a hash to key into the arr
// arr[toHash('arrows')] = item;
// arr[toHash('arrows')][2] += 20;

const hash = {};
// hash collisions = 2 keys hashing to the same index

// can fix this w/ linear probing - if it is colliding, assign it to the index over
// O(n) linear time - worst case => linearArr is filled so we need to iterate to an index that isn't taken
// where n = length from current index to next available spot
const linearInsert = (key, val) => {
  const index = toHash(key);
  // arr[index] ? arr[index + 1] = val : arr[index] = val;
  if (!linearArr[index]) return linearArr[index] = val;
  for(let i = index; i < linearArr.length + 1; i++) {
    if (!linearArr[i]) return linearArr[i] = val; // O(n)
  }

}

// use buckets!: instead of moving over, add it to the bucket at the index
// O(1) insertion
const insert = (key, val) => {
  const index = toHash(key);
  if (!newArr[index]) newArr[index] = [];
  newArr[index].push([key, val]);
}

linearInsert('arrows', 'yes'); // O(1) - first time is constant but next = O(n)
linearInsert('sworra', 'no');
linearInsert('sarrow', 'maybe');
console.log(linearArr);

insert('bees', 'lots');
insert('arrows', 'yes');
insert('sworra', 'no');
insert('sarrow', 'maybe');
console.log(newArr);

// collisions
console.log(newArr[toHash('arrows')])

// find a value given a key if there are collisions
// O(m) time where m is the length of collisions at that hashed key index
const find = key => {
  const index = toHash(key);
  if (newArr[index].length === 1) return newArr[index][1];
  for(let item of newArr[index]) {
    if (item[0] === key) return item[1];
  }

}

console.log(find('arrows')) // O(m)
console.log(find('bees')) // O(1)
