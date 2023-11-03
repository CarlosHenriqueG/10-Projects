let addNoteBtn = document.getElementById("btnAddNote");
const md = window.markdownit();

addNoteBtn.addEventListener("click", () => {
  addNote();
});

function addNote() {
  let note = document.createElement("div");
  note.classList.add("note");

  note.innerHTML = `    
  <div id="note" class="note">
  <div class="controls">
    <div class="functions">
      <button id="edit" class="edit">
        <i class="ph ph-note-pencil"></i>
      </button>
      <button id="trash" class="trash">
        <i class="ph ph-trash"></i>
      </button>
    </div>
  </div>
    <div class="main hidden"></div>
      <textarea></textarea>
  </div>
  `;

  let btnEdit = note.querySelector(".edit");
  let btnTrash = note.querySelector(".trash");

  let textarea = note.querySelector("textarea");
  let main = note.querySelector(".main");

  btnTrash.addEventListener("click", () => {
    note.remove();
  });

  function formatText() {
    let text = textarea.value;

    main.innerHTML = md.render(text);
  }

  btnEdit.addEventListener("click", () => {
    main.classList.toggle("hidden");
    textarea.classList.toggle("hidden");
    textarea.addEventListener("input", formatText);
    
    formatText();
  });

  document.body.appendChild(note);
}
