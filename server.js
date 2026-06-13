const express= require('express');
const app= express();
app.use(express.json());
const PORT= process.env.PORT || 3000;

let notes = [
  {
    id: 1,
    title: "Learn Express"
  },
  {
    id: 2,
    title: "Build Projects"
  }
];

app.get('/',(req,res) => {
    res.send("Welcome to Notes API");
});
app.get("/hello", (req, res) => {
  res.send("Hello XYZ!");
});

app.get("/about", (req, res) => {
  res.json({
    name: "XYZ",
    goal: "Backend Internship"
  });
});

app.get("/notes", (req, res) => {
  const { search } = req.query;

  if (!search) {
    return res.json(notes);
  }

  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(search.toLowerCase())
  );
  res.json(filteredNotes);
});

app.get('/notes/:id', (req, res) => {
  const id= parseInt(req.params.id);
  const note = notes.find(n=> n.id ===id);
  if(!note){
    return res.status(404).json({
        message:"Note not foundd"
    });
  }
  res.json(note);
});



app.post("/notes", (req, res) => {
    const {title} = req.body;
    if(!title){
        return res.status(400).json({
            message:"Title is required"
        });
    }
    const newNote={
        id:notes.length + 1,
        title    
    }
    notes.push(newNote);
    res.status(201).json({
        message:"Note created successfully",
        note:newNote
    });
});

app.put('/notes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { title } = req.body;
  const note = notes.find(n => n.id === id);
  if (!note) {
    return res.status(404).json({
      message: "Note not found"
    });
  }
  note.title = req.body.title;
  res.json({
    message: "Note updated successfully",
    note
  });
});

app.delete("/notes/:id", (req, res) => {

  const id = parseInt(req.params.id);

  const index = notes.findIndex(
    note => note.id === id
  );

  if (index === -1) {
    return res.status(404).json({
      message: "Note not found"
    });
  }

  notes.splice(index, 1);

  res.json({
    message: "Note deleted"
  });

});

app.listen(PORT, () => { 
    console.log(`Server is running on port http://localhost:${PORT}`);
});