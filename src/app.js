const notes = [
  { 
    title: "first note", 
    noteBody: "this is an example note",
    id: 1 
  }
]

const addBtn = document.getElementsByClassName("icons")[0]
const notesArea = document.getElementsByClassName("write-note-area")[0]
const notesListContainer = document.getElementsByClassName("notes-list")[0]

addBtn.addEventListener("click", () => createNewNote())

function createNewNote() {
    const newNote = `
    <div class="newnote__container"> 
    <input class= "title" type="text" placeholder="Title..."/> 
    <textarea class="notebody" placeholder="Note..."></textarea>
       <div class="newnote__buttons">
          <button onClick="saveNote(this)" class="save">Save</button>
          <button onClick="deleteNote(this)" class="cancel">Cancel</button>
       </div>
    </div>
    `
    notesArea.innerHTML=newNote
}

function deleteNote(ref){
  ref.parentNode.parentNode.remove()
}

function saveNote(ref){
  const title=document.getElementsByClassName("title")[0].value.trim()
  const noteBody = document.getElementsByClassName("notebody")[0].value.trim()
  if(title==="" || noteBody === "") {
    alert("Can't save empty note") 
    return
  }
  const id= notes.length + 1
  const note={
    title,noteBody,id
  }
  notes.push(note)
  refreshNotesList()
  ref.parentNode.parentNode.remove()
}
function refreshNotesList(){
  let notesList = ""
  for(var note of notes){
  notesList+=`
          <li data-id="${note.id}" onClick="showNote(this)" class="noteslist__item">
          ${note.title}
          </li>
          `
  }
  notesListContainer.innerHTML=notesList
}

function showNote(ref){
  const id = ref.getAttribute("data-id")
  const note = notes.find(item => item.id == id)
  const noteTemplate = ` 
  <div class="newnote__container"> 
  <input class= "title" value="${note.title}" type="text" placeholder="Title..."/> 
  <textarea class="notebody" read-only placeholder="Note...">${note.noteBody}</textarea>
  <div class="newnote__buttons">
  <button onClick="deleteNote(this)" class="cancel">Cancel</button>
 </div>
  </div>
  ` 
  notesArea.innerHTML = noteTemplate
 }
 
 refreshNotesList()