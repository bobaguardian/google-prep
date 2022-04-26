# [14 Patterns to Any Coding Interview Question](https://hackernoon.com/14-patterns-to-ace-any-coding-interview-question-c5bb3357f6ed)

## 1. Sliding Window
Start with first element and keep shifting to the right by one, adjusting the length of the window according to the problem (grows or shrinks)

Problems:
- Input is a linear data structure (ex: linked list, array, or string)
- You're asked to find the longest/shortest substring/subarray or a desired value

Common Problems:
- Maximum sum subarray of size K
- Longest substring with K distinct characters
- String anagrams

## 2. Two Pointers/Iterators
Two pointers iterate through the data structure in tandem until one or both pointers hit a certain condition.  This would help achieve a linear time complexity while a brute force/naive solution will produce O(n^2).  In many cases, 2 pointers can help you find a solution with better space or runtime complexity

Problems:
- useful when searching for pairs in a sorted array/linked list
- When dealing with sorted arrays/linked lists and need to find a set of elements that fulfill certain constraints
- Set of elements in array is a pair, triplet or subarray

Common Problems:
- Squaring a sorted array
- Triplets that sum to zero
- Comparing strings that contain backspaces
