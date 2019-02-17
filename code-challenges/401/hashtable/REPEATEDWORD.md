# First repeated word
## Challenge
Write a function that accepts a lengthy string parameter.
Without utilizing any of the built-in library methods available to your language, return the first word to occur more than once in that provided string.

## Approach & Efficiency
In this code challenge I used a hashtable to solve. I started with spliting every word in the input into a array and looped over that array first checking if that word was in the hash table. If it was I would return that word, if it wasnt I would add the word to the hashtable and move to the next one. 