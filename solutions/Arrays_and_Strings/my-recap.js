/**
 * ## Array, Random-Access, HashTable and Lookup Table.
 *
 * One very important feature of Array is Random-Access, which allows us to
 * directly access arbitrary element of a sequence in the constant time. If any
 * chance can be found for a given problem, where we can use Random-Access, we
 * should take advantage of that chance without hesitation.
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
 * In CTCI questions such as 1_1, 1_2, 1_4 are all cases of this kind of idea. 
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
 * from the Big-O's perspective, but it's still worth the optimization for small
 * questions（as the question is small, you should do it more precisely I
 * think). questions 1_5, 1_6, 1_7 and 1_8 demonstrate this idea.
 *
 * Most modern languages support a Resizable-Array DS, which can dynamically
 * increases its capacity when a new item is being added but there's no more
 * space allocated. The general strategy is to allocate twice the size of the
 * current space. for instance at the beginning the array has 1kb, next time it
 * would grow up to 2kb, and 4kb, 8kb, 16kb... and so on, with each reallocation
 * has a O(n) copying cost, but on average such cost is lower than we think,
 * since they're amortized.
 *
 * However, if there exists any chance that we know the total needed capacity in
 * advance, we really should consider it. A resizable array could be replaced to
 * a fixed length array, meaning such reallocations we talked above are not
 * necessary any more, and zero cost needs to pay. It's a pretty good
 * optimization. In CTCI the question 1_3 reflected this idea.
 *
 *
 * ## Brain-Teaser
 *
 * There is a specific kind of questions which greatly reflect their nature. In
 * such cases the insight of the essence of things is more important than any
 * other algorithm-side solutions. The essence may be derived from
 * mathematical-laws or other like. 1_9 is such a case.
 *
 * In my POV, I don't like brain-teaser questions, since it doesn't focus on
 * algorithms or data-structures. Sometimes we need this insight, but they are
 * usually unusual in daily work.
 */