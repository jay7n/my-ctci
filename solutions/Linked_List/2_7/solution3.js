module.exports = function Intersection(linkedList1, linkedList2) {
  const l1Length = linkedList1.toArray().length;
  const l2Length = linkedList2.toArray().length;

  // chop off the exceeded nodes of the longer list
  let distance = 0;
  let longerList;
  if (l1Length > l2Length) {
    distance = l1Length - l2Length;
    longerList = linkedList1;
  } else {
    distance = l2Length - l1Length;
    longerList = linkedList2;
  }

  for (let i = 0; i < distance; i++) {
    longerList.removeNodeAt(i);
  }

  // now they have the same length
  let cur1 = linkedList1.head;
  let cur2 = linkedList2.head;

  while (cur1 !== cur2) {
    cur1 = cur1.next;
    cur2 = cur2.next;
  }

  return cur1;
}