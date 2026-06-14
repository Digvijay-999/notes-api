const notes= require("../data/notes");
const getNotes= (req,res)=>{
    const {search} = req.query;
    if(search){
        const filteredNotes= notes.filter(note=> note.title.toLowerCase().includes(search.toLowerCase()));
        return res.json(filteredNotes);

    }
    res.json(notes);    
};
module.exports={
    getNotes
};