# React Note-Taking App

This project is a simple note-taking application built with React. Users can create notes by entering a title and content, edit existing notes, and delete notes. All notes are stored in the browser's localStorage, so data persists even after a page refresh.

## Features

- **Add Note:**

  - Create a new note by entering a title and content.
  - Newly created notes are added to the end of the list.

- **Edit Note:**

  - Click on the note title or content to enter edit mode.
  - Only one field (title or content) can be edited at a time.
  - When editing, the original text style is maintained, ensuring a seamless transition with only the cursor blinking.
  - Changes are saved automatically when the element loses focus.
  - The cursor can be automatically positioned at the end of the text when entering edit mode.

- **Delete Note:**

  - Delete a note by clicking the delete button located in the note header.

- **Data Persistence:**

  - Notes are saved to localStorage so that they remain available even after the page is refreshed.

- **Styling:**
  - The app features a clean and user-friendly interface with custom CSS.
  - Specific styles are applied to the header, note input area, note cards, and delete buttons to ensure consistency.

## Installation and Usage

1. **Clone the Repository:**

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Run the Development Server:**

   ```bash
   npm start
   ```

Open your browser and navigate to `http://localhost:3000` to view the app.

## File Structure

- **App.jsx:**

  - The main component that manages the note input, list rendering, edit mode transitions, and deletion functionality.

- **Header.jsx & Footer.jsx:**

  - Components for the top header and bottom footer of the page.

- **NoteInput.jsx:**

  - A component that provides a form for creating new notes.

- **Note.jsx:**

  - A component that renders each note, including the note's title, content, and delete button. It also handles the edit mode for individual notes.

- **style.css:**
  - Contains the styles for the entire page and individual components, including font sizes, colors, layout, and box shadows for an enhanced user experience.

## Future Improvements

- **Auto-Resizing Textarea:**

  - Enhance the textarea so it automatically resizes to fit the content without showing a scrollbar.

- **Drag-and-Drop Sorting:**

  - Allow users to reorder notes via drag-and-drop for a more intuitive experience.

- **Data Synchronization:**
  - Integrate with a backend server to manage data more robustly, beyond localStorage.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have any improvements or bug fixes.

## License

This project is licensed under the MIT License.
