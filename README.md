# Tanner Seramur

## Trees
Binary Search Tree is a node-based binary tree data structure which has the properties Left and right

## 1
## Challenge
* Create a Node class that has properties for the value stored in the node, the left child node, and the right child node.
* Create a BinaryTree class
    * Define a method for each of the depth first traversals called preOrder, inOrder, and postOrder which returns an array of the values, ordered appropriately.
* At no time should an exception or stack trace be shown to the end user. Catch and handle any such exceptions and return a printed value or operation which cleanly represents the state and either stops execution cleanly, or provides the user with clear direction and output.
* Create a BinarySearchTree class
    * Define a method named add that accepts a value, and adds a new node with that value in the correct location in the binary search tree.
    * Define a method named contains that accepts a value, and returns a boolean indicating whether or not the value is in the tree at least once.

## 2
### Challenge
* Write a breadth first traversal method which takes a Binary Tree as its unique input. Without utilizing any of the built-in methods available to your language, traverse the input tree using a Breadth-first approach; print every visited node’s value.

## Approach & Efficiency
We used a queue to store each value from the horizontal row starting from the root. As soon as we grabed each value and pushed it to the queue we would then go down to the next row.

#### Big-O --> (O)w


![](image1.jpeg)
![](image2.jpeg)
