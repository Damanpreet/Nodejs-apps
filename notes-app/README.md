# Nodejs-apps
Application to create Notes, save them and fetch them.

Using this application the user can add a new note using the command -
```
node app.js add --title "Title of the note" --body "Body of the note"
```

Read an existing note -
```
node app.js read --title "Title of the note"
```

Delete an existing note -
```
node app.js remove --title "Title of the note"
```

Fetch the titles of existing notes -
```
node app.js list
```