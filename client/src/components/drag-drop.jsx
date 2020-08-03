import React, { useState } from 'react';
import Board, { moveCard, addColumn } from '@lourenci/react-kanban';
// import DetailCard from '../components/detail-cards';
import PlaceList from '../containers/place-list';

/* const board = {
  columns: [
      {
      id: 1,
      title: 'Backlog',
      cards: [],
    },
    {
      id: 2,
      title: 'Itinerary',
      cards: [
        {
          id: 9,
          title: 'Card title 9',
          description: 'Card content',
        },
        {
          id: 6,
          title: 'Card title 6',
          description: 'Card text',
        },
      ],
    },
  ],
}; */

function ControlledBoard({ place }) {
  const days = 3;
  //   const [controlledBoard, setBoard] = useState(board);
  const [board, setBoard] = useState(initialBoard);

  for (let day in days) {
    const newColumn = {
      id: day,
      title: `Day ${day}`,
      description: 'Address',
    };
    const newBoard = addColumn(board, newColumn);
    setBoard(newBoard);
  }

  function handleCardMove(_card, source, destination) {
    const updatedBoard = moveCard(controlledBoard, source, destination);
    setBoard(updatedBoard);
  }

  return (
    <Board onCardDragEnd={handleCardMove} disableColumnDrag>
      {controlledBoard}
    </Board>
  );
}

function DragDrop({ place }) {
  console.log(place);
  return (
    <>
      <ControlledBoard place={place} />
    </>
  );
}

export default DragDrop;
