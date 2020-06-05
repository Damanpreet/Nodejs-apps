const notes = require("./notes");
const chalk = require("chalk");
const yargs = require("yargs");

// add a note
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    console.log(chalk.yellow("Adding a new note"));
    console.log(chalk.yellow("Title: ", argv.title));
    console.log(chalk.yellow("Body of the note: ", argv.body));
    notes.addNotes(argv.title, argv.body);
  },
});

// remove a note
yargs.command({
  command: "remove",
  describe: "Remove the note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    console.log(chalk.yellow("Removing the note with title: " + argv.title));
    notes.removeNote(argv.title);
  },
});

// list the notes
yargs.command({
  command: "list",
  describe: "List the notes",
  handler: () => {
    notes.listNotes();
    console.log("Listing out all the notes");
  },
});

// read a note
yargs.command({
  command: "read",
  describe: "Read a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    notes.readNote(argv.title);
    console.log("Reading a note");
  },
});

yargs.parse();
