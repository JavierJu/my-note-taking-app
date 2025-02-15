import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import NoteInput from "./NoteInput";
import Note from "./Note";

function App() {
  // 새로운 노트 입력을 위한 상태: 제목과 내용
  const [currentTitle, setCurrentTitle] = useState("");
  const [currentContent, setCurrentContent] = useState("");

  // 저장된 노트 배열 (각 노트는 id, title, content 속성을 가짐)
  const [notes, setNotes] = useState([]);

  // 한 번에 하나의 필드(제목 또는 내용)를 수정할 수 있도록 하는 상태
  // editing: { noteId: number|null, field: 'title'|'content'|null, value: string }
  const [editing, setEditing] = useState({
    noteId: null,
    field: null,
    value: "",
  });

  // 컴포넌트 마운트 시 localStorage에서 노트를 불러옴
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(savedNotes);
  }, []);

  // 노트 목록이 변경될 때마다 localStorage에 저장
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  // 새로운 노트 추가 함수
  const addNote = () => {
    if (!currentTitle.trim() || !currentContent.trim()) return;
    const newNote = {
      id: Date.now(),
      title: currentTitle,
      content: currentContent,
    };
    setNotes([...notes, newNote]);
    setCurrentTitle("");
    setCurrentContent("");
  };

  // 노트 삭제 함수 (제목 영역의 삭제 버튼에서 호출)
  const deleteNote = (id, e) => {
    e.stopPropagation();
    setNotes(notes.filter((note) => note.id !== id));
  };

  // 제목 또는 내용 텍스트 클릭 시 수정 모드 전환
  const handleEditStart = (note, field) => {
    setEditing({ noteId: note.id, field, value: note[field] });
  };

  // 수정 중인 값이 변경될 때 업데이트
  const handleChangeEditing = (e) => {
    setEditing({ ...editing, value: e.target.value });
  };

  // onBlur 시 수정된 내용을 확정하여 노트 업데이트
  const commitEdit = () => {
    setNotes(
      notes.map((note) =>
        note.id === editing.noteId
          ? { ...note, [editing.field]: editing.value }
          : note
      )
    );
    setEditing({ noteId: null, field: null, value: "" });
  };

  return (
    <div className="App">
      <Header />
      <NoteInput
        currentTitle={currentTitle}
        setCurrentTitle={setCurrentTitle}
        currentContent={currentContent}
        setCurrentContent={setCurrentContent}
        addNote={addNote}
      />
      <div className="note-list">
        {notes.map((note) => (
          <Note
            key={note.id}
            note={note}
            editing={editing}
            handleEditStart={handleEditStart}
            handleChangeEditing={handleChangeEditing}
            commitEdit={commitEdit}
            deleteNote={deleteNote}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
