'use client';
import React, { useState } from 'react';

const DragDropExample = () => {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);
  const [draggedItemIndex, setDraggedItemIndex] = useState<number | null>(null);

  const handleDragStart = (index: number) => {
    setDraggedItemIndex(index);
  };

  const handleDrop = (index: number) => {
    if (draggedItemIndex === null) return;
    const updatedItems = [...items];
    const [removed] = updatedItems.splice(draggedItemIndex, 1);
    updatedItems.splice(index, 0, removed);
    setItems(updatedItems);
    setDraggedItemIndex(null);
  };

  return (
    <div>
      {items.map((item, index) => (
        <div
          key={index}
          draggable
          onDragStart={() => handleDragStart(index)}
          onDragOver={(e) => e.preventDefault()}
          onDrop={() => handleDrop(index)}
          className="p-4 m-2 bg-gray-200 rounded cursor-move"
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default DragDropExample;
