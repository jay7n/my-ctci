// This is an optimized version of solution3
// Instead of taking a brutal-force search in coverInNode() every time,
// We can start the search from bottom upwards using postOrder-DFS pattern
// so that only one full scale traversing could find the truth

module.exports = function CommonAncestor(rootNode, treeNode1, treeNode2) {
  const res = doCommonAncestor(rootNode, treeNode1, treeNode2);
  if (res.enumFlag === ResEnum.Both) {
    return res.node;
  }
  return null;
}

function doCommonAncestor(rootNode, treeNode1, treeNode2) {
  if (treeNode1 === treeNode2) {
    return new Res(treeNode1, ResEnum.Both); // or treeNode2 is okay
  }

  if (rootNode) {
    const res1 = doCommonAncestor(rootNode.left, treeNode1, treeNode2);
    if (res1.enumFlag === ResEnum.Both) {
      return res1;
    }

    const res2 = doCommonAncestor(rootNode.right, treeNode1, treeNode2);
    if (res2.enumFlag === ResEnum.Both) {
      return res2;
    }

    if (res1.enumFlag == ResEnum.None && res2.enumFlag == ResEnum.None) {
    // at this point neither left or right child is the common ancestor
    // first we check the case where none of children has t1 or t2
      if (rootNode === treeNode1) {
        return new Res(rootNode, ResEnum.OnlyT1);
      } else if (rootNode === treeNode2) {
        return new Res(rootNode, ResEnum.OnlyT2);
      } else {
        return new Res(rootNode, ResEnum.None);
      }

    } else if (res1.enumFlag == ResEnum.None || res2.enumFlag == ResEnum.None) {
    // or at this point there's exactly only one child containing one t1 or t2
    // and we need to check rootNode itself then
      if (rootNode === treeNode1 && [res1.enumFlag, res2.enumFlag].includes(ResEnum.OnlyT2)) {
        return new Res(rootNode, ResEnum.Both);
      } else if (rootNode === treeNode2 && [res1.enumFlag, res2.enumFlag].includes(ResEnum.OnlyT1)) {
        return new Res(rootNode, ResEnum.Both);
      } else {
        console.error('there must be wrong somewhere', '\n\t', rootNode.data, '\n\t', treeNode1.data, '\n\t', treeNode2.data);
      }

    } else {
    // or at this point there remains only one possibility: left has one of t1 and t2 and right has the other
    // and the parent is the common ancestor
      return new Res(rootNode, ResEnum.Both);
    }

  } else {
    return new Res(null, ResEnum.None);
  }
}

const ResEnum = {
  None: 'None',
  OnlyT1: 'OnlyT1',
  OnlyT2: 'OnlyT2',
  Both: 'Both'
}

class Res {
  enumFlag;
  node;
  constructor(node, enumFlag) {
    this.node = node;
    this.enumFlag = enumFlag;
  }
}