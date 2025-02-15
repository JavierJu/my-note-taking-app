import React from "react";

function Note({
  note,
  editing,
  handleEditStart,
  handleChangeEditing,
  commitEdit,
  deleteNote,
}) {
  return (
    <div className="note">
      <div className="note-header">
        {editing.noteId === note.id && editing.field === "title" ? (
          <input
            autoFocus
            value={editing.value}
            onChange={handleChangeEditing}
            onBlur={commitEdit}
          />
        ) : (
          <h2 onClick={() => handleEditStart(note, "title")}>{note.title}</h2>
        )}
      </div>
      <div className="note-content">
        {editing.noteId === note.id && editing.field === "content" ? (
          <textarea
            autoFocus
            value={editing.value}
            onChange={handleChangeEditing}
            onBlur={commitEdit}
          />
        ) : (
          <p onClick={() => handleEditStart(note, "content")}>{note.content}</p>
        )}
      </div>
      <button className="delete-btn" onClick={(e) => deleteNote(note.id, e)}>
        Delete
      </button>
    </div>
  );
}

export default Note;
