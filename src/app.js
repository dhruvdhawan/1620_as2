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