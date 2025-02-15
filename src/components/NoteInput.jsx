import React from "react";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";
function NoteInput({
  currentTitle,
  setCurrentTitle,
  currentContent,
  setCurrentContent,
  addNote,
}) {
  return (
    <div className="note-input-container">
      <input
        type="text"
        value={currentTitle}
        onChange={(e) => setCurrentTitle(e.target.value)}
        placeholder="Title..."
      />
      <textarea
        value={currentContent}
        onChange={(e) => setCurrentContent(e.target.value)}
        placeholder="Take a note..."
      />
      <button onClick={addNote}>
        <AddBoxRoundedIcon />
      </button>
    </div>
  );
}

export default NoteInput;
