module.exports = function StackOfBoxes(boxes) {

  function gatherPossibleBoxes(baselineBox, boxes) {
    let possibleBoxes = [];
    for (const box of boxes) {
      if (
        box[0] > baselineBox[0] && 
        box[1] > baselineBox[1] && 
        box[2] > baselineBox[2]
      ) {
        possibleBoxes.push(box.slice());
      }
    }
    return possibleBoxes;
  }

  function recursive(baselineBox, boxes) {
    let tallest = 0;
    const possibleBoxes = gatherPossibleBoxes(baselineBox, boxes);
    for (const box of possibleBoxes) {
      const otherPossibleBoxes = possibleBoxes.filter(b => b !== box);
      const tallestBeneath = recursive(box, otherPossibleBoxes);
      tallest = Math.max(tallest, tallestBeneath + box[1]);
    }
    return tallest;
  }

  const tallest = recursive([0,0,0], boxes);

  console.log('StackOfBoxes tallest = ', tallest);

  return tallest;
}