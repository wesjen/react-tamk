import React, { useState } from "react";
import { AiOutlineClose, AiFillEdit } from "react-icons/ai";
import { Draggable } from "react-beautiful-dnd";

function Task(props) {
  const [task, setTask] = useState({
    id: props.id,
    title: props.title,
    description: props.description,
    date: props.date,
    tag: props.tag,
    tagColor: props.tagColor,
  });

  return (
    <Draggable
      draggableId={task.id.toString()}
      index={props.index}
      style={{ display: "table" }}
    >
      {(provided) => (
        <tr
          className={`task-container ${task.tagColor}`}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <td>{task.title}</td>
          <td className="icon">
            <AiFillEdit
              style={{ color: "white", cursor: "pointer" }}
              onClick={() => props.update(props.id, "title")}
            />
          </td>
          <td>{task.description}</td>
          <td className="icon">
            <AiFillEdit
              style={{ color: "white", cursor: "pointer" }}
              onClick={() => props.update(props.id, "description")}
            />
          </td>
          <td>{task.date}</td>
          <td className="icon">
            <AiFillEdit
              style={{ color: "white", cursor: "pointer" }}
              onClick={() => props.update(props.id, "date")}
            />
          </td>
          <td className="task-tags">{task.tag}</td>
          <td className="icon">
            <AiFillEdit
              style={{ color: "white", cursor: "pointer" }}
              onClick={() => props.update(props.id, "tag")}
            />
          </td>
          <td className="icon">
            <AiOutlineClose
              style={{ color: "white", cursor: "pointer" }}
              onClick={() => props.delete(props.id)}
            />
          </td>
        </tr>
      )}
    </Draggable>
  );
}

export default Task;
