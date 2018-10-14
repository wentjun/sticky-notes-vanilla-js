//local properties
let note = {
  title: null,
  content: null
};

const noteList = [
  {
    title: 'Instructions (click to expand)',
    content:
      'Simply create a note by typing your title and clicking the add button!'
  },
  {
    title: 'Sample note',
    content: 'Just a sample note'
  }
];

/*
  initialises the default list of notes and default state
*/
const init = () => {
  for (var i = 0; i < noteList.length; i++) {
    renderNote(i, noteList[i].title, noteList[i].content);
  }
};

// renders individual note element
const renderNote = (index, title, content) => {
  // creates a list item for each 'note'
  const noteListItem = document.createElement('li');

  // creates note title div
  const noteListItemTitle = document.createElement('div');
  const titleNode = document.createTextNode(title);
  noteListItemTitle.className = 'title';
  noteListItemTitle.contentEditable = 'true';
  noteListItemTitle.appendChild(titleNode);
  // appends title to note
  noteListItem.appendChild(noteListItemTitle);

  document.getElementById('notes').appendChild(noteListItem);
};

init();
