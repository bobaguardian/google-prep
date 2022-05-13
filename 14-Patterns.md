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

# 3. Fast and Slow Pointers
AKA the Haire & Tortoise Algorithm - uses 2 pointers which move through an array at different speeds.  This approach is quite useful when dealing with cyclic linked lists/arrays.  Since the 2 pointers are moving at different speads, the 2 pointers are bound to meet.

Problems:
- Dealing with a loop in a linked list or array
- When you need to know the position of a certain element or the overall length of a linked list
- This approach compared to the 2 pointer approach:
    - Use this for a singled linked list where you can't move in a backwards direction
    - ex: use fast and slow when trying to determine if a linked list is a palindrome

Common Problems:
- Linked List Cycle
- Palindrom Linked List
- Cycle in a Circular Array

# 4. Merge Intervals
Dealing with overlapping intervals.  Understanding and recognizzing these 6 cases will help you solve a wide range of problems from inserting intervals to optmiizing interval merges. Give 2 intervals a and b, there will be 6 different ways the two intervals can relate to each other:

1. a and b do not overlap
2. a and b overlap, b ends after a
3. a completely overlaps b
4. b and a overlap, a ends after b
5. b completely overlaps a
6. b and a do not overlap

Problems:
- Asked to produce a list with only mutually exclusive intervals
- Hear the term "overlapping intervals"

Common Problems:
- Intervals Intersection
- Maximum CPU Load

# 5. Cyclic Sort
Deal with problems involving arrays containing numbers in a given range.  Iterate over the array one number at a time, and if the current number you're at is not at the correct index, swap it with the number at its correct index.

Problems:
- Involve a sorted array with numbers in a given range
- If problem asks you to find the missing/duplicate/smallest number in a sorted/rotated array

Common Problems:
- Finding the Missing Number
- Finding the Smallest Missing Positive Number


# 6. In-Place Reversal of Linked List
Reverse links between a set of nodes in a linked list, but in place (using existing node objects without using extra memory).
Pattern: reverse one node at a time starting with current pointing to head of linked list, and one variable previous pointing to the
previous node you have proccessed.

Problems:
- If you're asked to reverse a linked list without using extra memory

Common Problems:
- Reverse a sub-list (medium)
- Reverse every k-element sub-list (medium)
