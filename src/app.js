//local properties
let note = {
  title: null,
  content: null
};

const noteList = [
  {
    title: 'Instructions (click to expand)',
    content:
      'Simply create a note by typing your title and clicking the add button! You may also edit your title or content by simply clicking on the title or content'
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

init();
