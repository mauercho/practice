import { useState } from "react";
import "./App.css";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

const finalSpaceCharacters = [
  { id: "gary", name: "Gary Goodspeed" },
  { id: "cato", name: "Little Cato" },
  { id: "kvn", name: "KVN" },
];

function App() {
  const [characters, setCharacters] = useState(finalSpaceCharacters);

  const handleEnd = (result) => {
    // result 매개변수에는 source 항목 및 대상 위치에 같은 드래그 이벤트에 대한 정보가 포함함
    console.log(result);
    if (!result.destination) return;

    const items = Array.from(characters);

    //1. 변경시키는 아이템을 배열에서 지워주기.
    //2, return 값으로 지워진 아이템 잡아줌줌
    const [reorderedItem] = items.splice(result.source.index, 1);

    // 원하는 자리에 reorderedItem을 insert해줌.
    items.splice(result.destination.index, 0, reorderedItem);
    setCharacters(items);
  };

  return (
    <div className="App">
      <div className="App-header">
        <h1>Final Space Characters</h1>
        <DragDropContext onDragEnd={handleEnd}>
          <Droppable droppableId="characters">
            {(provided) => (
              <ul
                className="characters"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {characters.map(({ id, name }, index) => {
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided) => (
                        <li
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <p>{name}</p>
                        </li>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
}

export default App;
