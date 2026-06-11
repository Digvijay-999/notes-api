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
  res.json(notes);
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

app.listen(PORT, () => { 
    console.log(`Server is running on port ${PORT}`);
});