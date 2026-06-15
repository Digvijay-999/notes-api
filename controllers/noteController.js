const notes= require("../data/notes");
const getNotes= (req,res)=>{
    const {search} = req.query;
    if(search){
        const filteredNotes= notes.filter(note=> note.title.toLowerCase().includes(search.toLowerCase()));
        return res.json(filteredNotes);

    }
    res.json(notes);    
};

const getNoteById= (req,res)=>{
    const {id} = req.params;
    const note= notes.find(note=> note.id === parseInt(id));
    if(!note){
        return res.status(404).json({message:"Note not found"});
    }
    res.json(note);
};

const createNote= (req,res)=>{
    const {title} = req.body;
    if(!title){
        return res.status(400).json({message:"Title is required"});
    }
    const newNote= {
        id: notes.length + 1,
        title
    };
    notes.push(newNote);
    res.status(201).json(newNote);
};
const updateNote= (req,res)=>{
    const {id} = req.params;
    const {title} = req.body;
    if(!title){
        return res.status(400).json({message:"Title is required"});
    }
    const note= notes.find(note=> note.id === parseInt(id));
    if(!note){
        return res.status(404).json({message:"Note not found"});
    }
    note.title= title;
    res.json(note);
};
const deleteNote= (req,res)=>{
    const {id}= req.params;
    const noteIndex= notes.findIndex(note=> note.id === parseInt(id));
    if(noteIndex === -1){
        return res.status(404).json({message:"Note not found"});
    }
    notes.splice(noteIndex,1);
    res.status(200).json({message:"Note deleted"});
}

module.exports={
    getNotes,
    getNoteById,
    createNote,
    updateNote,
    deleteNote
};