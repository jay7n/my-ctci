/**
 * ## Array, Random-Access, HashTable and Lookup Table.
 *
 * One very important feature of Array is Random-Access, which allows us to
 * directly access any arbitrary element in a sequence in the constant time. If
 * any chance can be found for a given problem, where we can use Random-Access,
 * we should take advantage of that chance without hesitation.
 *
 * Hash-Table is a very efficient DS. Behind the scene such a DS sees everything
 * in an ORDERED WAY, or everything can be seen in such an ordered way. It
 * applies the idea of Array's Random-Access from my POV. If arbitrary elements
 * has a chance to be sorted in some manner, then they can be stored in Array,
 * and Random-Access is hence able to be employed to improve the access
 * efficiency.
 *
 * ASCII characters are internally encoded to numbers, which means they have
 * been sorted automatically. Then we can create a fixed length array to store
 * them (using their code as the index) as a lookup table, which is pretty
 * useful when we need to lookup them later again for some reason in a problem.
 * the lookup cost is fairly cheap and constant as it's from Array's
 * Random-Access.
 *
 * In CTCI questions such as 1_1, 1_2, 1_4, 1_5 are all cases of this kind of
 * idea. 
 *
 *
 * ## String Traverse, Immediate Return and Fixed Length Array
 *
 * According to the nature of the given question, we do not need
 * HashTable(Lookup Table) or Random-Access. What we need is to traverse the
 * string or array element by element. Such a traversal is inevitable since the
 * question's nature requests it. In the process of traversal we can check if
 * one element hits some condition, where usually we can get the conclusion then
 * and immediately return. An immediate return won't change the computing cost
 * from the Big-O perspective, but it's still worth the optimization for small
 * questions（as the question is small, you should do it more precisely I
 * think）.
 *
 * Most modern languages support a Resizable-Array DS, whose capacity
 * dynamically increases when one more new item is being added but no more space
 * can be given there. Generally new allocated size would be twice the current
 * size, so for instance at the beginning the array has 1kb, next time it would
 * grow to 2kb, and 4kb, 8kb, 16kb... and so on, with each reallocation has a
 * O(n) copying cost, but on average such cost is lower than we think, since
 * they're amortized.
 *
 * However, if there exists any chance that we can know the total needed
 * capacity in advance, we really should consider to grab the chance. A
 * resizable array could be replaced to a fixed length array, which means
 * reallocations we talked above are not necessary any more, and zero cost needs
 * to pay. It's a pretty good optimization. In CTCI the question 1_3 reflected
 * this idea.
 *
 */