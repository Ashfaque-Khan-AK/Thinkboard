import Note from "../models/Notes.js";
import Notes from "../models/Notes.js";
 
 export async function getAllNotes (_, res){
    try {
        const notes = await Notes.find().sort({createdAt: -1});
        res.status(200).json(notes);
    } catch (error) {
        console.error("Error in getAllNotes controller",error);
        
        res.status(500).json({message:"internal server error"});
    }
    
};

export async function getNoteById(req, res) {
    try {
        const note = await Notes.findById(req.params.id);
        if (!note) return  res.status(400).json({meassage:"Note not Found"});

        res.json(note);

    } catch (error) {
         console.error("Error in getNoteById controller",error);
        
        res.status(500).json({message:"internal server error"});
    }
}
export async function createNote(req, res) {
    try {
        const {title, content} = req.body;
        const note = new Note({title, content});
        
        const savedNote=  await note.save();
        res.status(201).json({savedNote});
    } catch (error) {
        console.error("Error in createNote controller",error);
        
        res.status(500).json({message:"internal server error"});
        
    }
};
 export async function updateNote (req, res) {
   try {
        const {title, content} = req.body;
       const updatedNote = await Note.findByIdAndUpdate(req.params.id,{title, content},{
        new: true,
       });
       if (!updatedNote) return res.status(400).json({meassage:"Note not Found"});

       res.status(200).json(updatedNote);
   } catch (error) {
     console.error("Error in updateNote controller",error);
        
        res.status(500).json({message:"internal server error"});
   }
};
 export async function deleteNote(req, res) {
      try {
       const deletedNote = await Note.findByIdAndDelete(req.params.id);
       if (!deletedNote) return res.status(400).json({meassage:"Note not Found"});

       res.status(200).json({meassage:"Note Deleted Successfully!"});
   } catch (error) {
     console.error("Error in deleteNote controller",error);
        
        res.status(500).json({message:"internal server error"});
   }
};