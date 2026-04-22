const Book = require('../models/model');
const createBook = async (req, res) => {
    try {
        const { bookId, title, author } = req.body;
        const newBook = new Book({ bookId, title, author });
        await newBook.save();
        res.status(201).json({msg:"Book created successfully", book: newBook });
    } catch (error) {
        res.status(500).json({ error: 'Failed to create book' });
    }
};

const viewBooks = async(req,res)=>{
    try{
        const books = await Book.find();
        res.status(200).json({msg:"Books", data:books});
    } catch (error) {
        res.status(500).json({ error: 'Failed to view books' });
    }
}

const updateBook = async(req,res)=>{
    try{
        const{id}=req.params;
        const updateBook = await Book.findByIdAndUpdate(id, req.body, {new:true});
        if(!updateBook){
            return res.status(404).json({ error: 'Book not found' });
        }
        res.status(200).json({msg:"Book updated successfully", data:updateBook});   
    }
    catch(error){
        res.status(500).json({ error: 'Failed to update book' });
    };
}

const deleteBook = async(req,res)=>{
    try{
        const{id}=req.params;
        const deleteBook = await Book.findByIdAndDelete(id);
        if(!deleteBook){
            return res.status(404).json({ error: 'Book not found' });
        }
        res.status(200).json({msg:"Book deleted successfully", data:deleteBook});   
    }
    catch(error){
        res.status(500).json({ error: 'Failed to delete book' });
    };
}
module.exports = { createBook, viewBooks,updateBook,deleteBook };