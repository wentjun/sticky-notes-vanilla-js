//local properties
let noteList = [
  {
    title: 'Instructions (click to expand)',
    content:
      'Simply create a note by typing your title and clicking the add button! You may also edit your title or content by simply clicking on the title or content',
    id: '0'
  },
  {
    title: 'Sample note',
    content: 'Just a sample note',
    id: '1'
  }
];

/*
  initialises the default list of notes and default state
*/
const init = () => {
  for (var i = 0; i < noteList.length; i++) {
    renderNote(i, noteList[i].title, noteList[i].content);
  }
  renderCollapsible();
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

  // creates note content div
  const noteListItemParagraph = document.createElement('div');
  const noteListItemContent = document.createElement('p');
  const contentNode = document.createTextNode(content);
  noteListItemParagraph.className = 'content';
  noteListItemContent.contentEditable = 'true';
  noteListItemContent.setAttribute(
    'data-placeholder',
    'Click and type something..'
  );
  noteListItemContent.addEventListener(
    'keyup',
    event => {
      noteListItemParagraph.style.maxHeight =
        noteListItemParagraph.scrollHeight + 'px';
    },
    false
  );
  noteListItemContent.appendChild(contentNode);
  noteListItemParagraph.appendChild(noteListItemContent);
  // appends content to note
  noteListItem.appendChild(noteListItemParagraph);

  // creates delete button for note
  const noteListItemDelete = document.createElement('SPAN');
  const closeSign = document.createTextNode('\u00D7');
  noteListItemDelete.className = 'close';
  noteListItemDelete.id = index;
  noteListItemDelete.appendChild(closeSign);
  noteListItemDelete.addEventListener('click', deleteNote, false);
  // appends delete sign to note
  noteListItem.appendChild(noteListItemDelete);

  document.getElementById('notes').appendChild(noteListItem);
};

// Allows the note div to collapse/uncollapse when clicked. Click to show content of notes.
const renderCollapsible = () => {
  const list = document.querySelector('ul');
  list.addEventListener('click', showContent, false);
};

// allows user to expand/collapse by clicking the entire note div
const showContent = event => {
  if (event.target.tagName === 'DIV' && event.target.className !== 'content') {
    const content = event.target.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  } else if (event.target.tagName === 'LI') {
    const content = event.target.querySelector('div.content');
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  }
};

/*
  helper functions for user interactions, such as adding, deleting, and searching of notes
*/

const addNote = () => {
  const inputValue = document.getElementById('title-input').value;
  const index = noteList.length;
  const note = {
    title: '',
    content: '',
    id: ''
  };

  if (!inputValue || inputValue === '') {
    alert('Title cannot be empty!');
  } else {
    renderNote(index, inputValue, '');
    note['title'] = inputValue;
    note['id'] = index.toString();
    noteList.push(note);
    console.log(noteList);
  }
  //reset the input box
  document.getElementById('title-input').value = '';
};

const deleteNote = event => {
  const index = event.target.id;
  const noteListElement = document.getElementById('notes');
  const noteElement = event.target.parentElement;
  if (index > -1) {
    noteList = noteList.filter(note => note['id'] !== index.toString());
    noteListElement.removeChild(noteElement);
  }
};

const search = () => {
  const input = document.getElementById('search-input');
  const filter = input.value.toUpperCase();
  const ul = document.getElementById('notes');
  const li = ul.getElementsByTagName('li');
  for (var i = 0; i < li.length; i++) {
    const title = li[i].getElementsByClassName('title')[0].innerText;
    if (title.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = '';
    } else {
      li[i].style.display = 'none';
    }
  }
};

init();
