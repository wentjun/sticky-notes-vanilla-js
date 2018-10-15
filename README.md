<h1 align="center">Sticky Notes App written in Vanilla JavaScript and HTML5</h1>

A quick description about the app project structure:

- Basic sticky notes app written in javascript.
- `/src` contains the source code that I have written.
- Built and transpiled code will be in the `/lib` directory.
- `master` branch contains the most updated code
- `develop` branch contains my various feature branches.
- `release` branch contains the built files.

A quick description about the app usage:

- To create a new note, simply type the note title on the top input bar, and click the 'create' button.
- The note is then added to the list below, and the user can click on the list item/div to expand it.
- After expanding it, the text box will be shown, and the user can type in his or her note content.
- To edit the title, simply click on the title and type in the changes.
- To hide the note content, simply tap anywhere on the note again (but not on the content area) to collapse it.
- To delete the note, click on the 'x' button.
- To filter out the notes via the title, simply type the search terms on the search bar.

Feel free to use the chrome dev tools to view the app in mobile/tablet format.
It has a slightly different layout compared to the desktop version

### Basic Setup

- Install the project dependencies

  ```bash
  npm i
  ```

- Build the project

```bash
  npm run build
```

- Run the project
  ```bash
  npm start
  ```
