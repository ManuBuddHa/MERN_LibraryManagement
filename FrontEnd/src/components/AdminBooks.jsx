import AdminNav from "./AdminNav"
import { useEffect, useState } from "react"
import { books, DeleteBook,CreateBook } from "../Api/api"
const AdminBooks = () => {
  const [data,setdata] = useState([])

  useEffect(()=>{
    const fetchdata = async()=>{
      const res = await books();
      setdata(res.data);
    }
    fetchdata();
  },[])

  const handleDelete = async(id)=>{
    const confirmDelete = window.confirm("Are you sure you want to delete this book?");
    if (!confirmDelete) return;
    try{
      const res = await DeleteBook(id);
      if(res.success){
        alert("Book Deleted Successfully");
        setdata(data.filter((book)=>book._id !== id));
      }else{
        alert("Failed to delete book");
      }
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };
  return (
    <div>
        <AdminNav /><br/><br/><br/>
        <h1>Books</h1>
        <table border={2}>
            <thead>
                <tr>
                    <th>Book ID</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {data.map((book) => (
                    <tr key={book._id}>
                      <td>{book.bookId}</td>
                        <td>{book.title}</td>
                        <td>{book.author}</td>
                        <td>
                            <button onClick={() => handleDelete(book._id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>

    </div>
  )
}

export default AdminBooks