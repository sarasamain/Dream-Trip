const reorder = (list, startIndex, endIndex, draggableId) => {
  const selectedElement = list.find(el => el.place_id === draggableId)
  const result = Array.from(list);
  result.splice(startIndex, 1);
  result.splice(endIndex, 0, selectedElement);
  return result;
};

/**
* Moves an item from one list to another list.
*/
const move = (source, destination, droppableSource, droppableDestination, draggableId, dInd) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const selectedElement = sourceClone.find(el => el.place_id === draggableId)

  selectedElement.day = dInd;
  sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, selectedElement);

  const result = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};

module.exports = {
  reorder, 
  move
}