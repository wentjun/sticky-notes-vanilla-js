'use strict';

//local properties
var noteList = [{
  title: 'Instructions (click to expand)',
  content: 'Simply create a note by typing your title and clicking the add button! You may also edit your title or content by simply clicking on the title or content',
  id: '0'
}, {
  title: 'Sample note',
  content: 'Just a sample note',
  id: '1'
}];

/*
  initialises the default list of notes and default state
*/
var init = function init() {
  for (var i = 0; i < noteList.length; i++) {
    renderNote(i, noteList[i].title, noteList[i].content);
  }
  renderCollapsible();
};

// renders individual note element
var renderNote = function renderNote(index, title, content) {
  // creates a list item for each 'note'
  var noteListItem = document.createElement('li');

  // creates note title div
  var noteListItemTitle = document.createElement('div');
  var titleNode = document.createTextNode(title);
  noteListItemTitle.className = 'title';
  noteListItemTitle.contentEditable = 'true';
  noteListItemTitle.appendChild(titleNode);
  // appends title to note
  noteListItem.appendChild(noteListItemTitle);

  // creates note content div
  var noteListItemParagraph = document.createElement('div');
  var noteListItemContent = document.createElement('p');
  var contentNode = document.createTextNode(content);
  noteListItemParagraph.className = 'content';
  noteListItemContent.contentEditable = 'true';
  noteListItemContent.setAttribute('data-placeholder', 'Click and type something..');
  noteListItemContent.addEventListener('keyup', function (event) {
    noteListItemParagraph.style.maxHeight = noteListItemParagraph.scrollHeight + 'px';
  }, false);
  noteListItemContent.appendChild(contentNode);
  noteListItemParagraph.appendChild(noteListItemContent);
  // appends content to note
  noteListItem.appendChild(noteListItemParagraph);

  // creates delete button for note
  var noteListItemDelete = document.createElement('SPAN');
  var closeSign = document.createTextNode('\xD7');
  noteListItemDelete.className = 'close';
  noteListItemDelete.id = index;
  noteListItemDelete.appendChild(closeSign);
  noteListItemDelete.addEventListener('click', deleteNote, false);
  // appends delete sign to note
  noteListItem.appendChild(noteListItemDelete);

  document.getElementById('notes').appendChild(noteListItem);
};

// Allows the note div to collapse/uncollapse when clicked. Click to show content of notes.
var renderCollapsible = function renderCollapsible() {
  var list = document.querySelector('ul');
  list.addEventListener('click', showContent, false);
};

// allows user to expand/collapse by clicking the entire note div
var showContent = function showContent(event) {
  if (event.target.tagName === 'DIV' && event.target.className !== 'content') {
    var content = event.target.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  } else if (event.target.tagName === 'LI') {
    var _content = event.target.querySelector('div.content');
    if (_content.style.maxHeight) {
      _content.style.maxHeight = null;
    } else {
      _content.style.maxHeight = _content.scrollHeight + 'px';
    }
  }
};

/*
  helper functions for user interactions, such as adding, deleting, and searching of notes
*/

var addNote = function addNote() {
  var inputValue = document.getElementById('title-input').value;
  var index = noteList.length;
  var note = {
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

var deleteNote = function deleteNote(event) {
  var index = event.target.id;
  var noteListElement = document.getElementById('notes');
  var noteElement = event.target.parentElement;
  if (index > -1) {
    noteList = noteList.filter(function (note) {
      return note['id'] !== index.toString();
    });
    noteListElement.removeChild(noteElement);
  }
};

var search = function search() {
  var input = document.getElementById('search-input');
  var filter = input.value.toUpperCase();
  var ul = document.getElementById('notes');
  var li = ul.getElementsByTagName('li');
  for (var i = 0; i < li.length; i++) {
    var title = li[i].getElementsByClassName('title')[0].innerText;
    if (title.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = '';
    } else {
      li[i].style.display = 'none';
    }
  }
};

init();