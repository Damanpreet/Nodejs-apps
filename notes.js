const fs = require("fs");
const chalk = require("chalk");

notesfile = "notes.json";

// add notes
const addNotes = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.find((note) => note.title === title); // even if the first match is found, returns

  debugger;

  if (!duplicateNotes) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.green("Note added!"));
  } else {
    console.log(chalk.red("A similar note already exists!"));
  }
};

// Remove the note
const removeNote = (title) => {
  const notes = loadNotes();

  const updatedNotes = notes.filter((note) => note.title !== title);

  if (notes.length === updatedNotes.length) {
    console.log(chalk.red.inverse("Note not found!"));
  } else {
    saveNotes(updatedNotes);
    console.log(chalk.green.inverse("Note removed!"));
  }
};

// save the note
const saveNotes = (notes) => {
  const jsonData = JSON.stringify(notes);
  fs.writeFileSync(notesfile, jsonData);
};

// load the note
const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync(notesfile);
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const listNotes = () => {
  console.log(chalk.inverse("Your notes"));
  const notes = loadNotes();
  notes.forEach((note) => {
    console.log(chalk.green(note.title));
  });
};

const readNote = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);

  if (note) {
    console.log(
      "Found note with title: " + chalk.italic(title) + ", body: " + note.body
    );
  } else {
    console.log(chalk.red("Error finding note with title " + title));
  }
};

module.exports = {
  addNotes: addNotes,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
};
