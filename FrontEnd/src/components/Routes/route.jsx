import {Route,Routes} from "react-router-dom";
import Signup from "../Signup";
import Login from "../Login";
import Hero from "../Hero";
import Members from "../Members";
import Books from "../Books";
import AdminHome from "../AdminHome";
import AdminBooks from "../AdminBooks";
import AdminMembers from "../AdminMembers";
const RoutePaths = () =>{
    return(
        <>
            <Routes>
                <Route path="/" element={<Hero/>} />
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/signup" element={<Signup/>}></Route>
                <Route path="/books" element={<Books/>}></Route>
                <Route path="/members" element={<Members/>}></Route>
                <Route path="/adminhome" element={<AdminHome/>}></Route>
                <Route path="/admin/books" element={<AdminBooks/>}></Route>
                <Route path="/admin/members" element={<AdminMembers/>}></Route>

            </Routes>
        </>
    )
}

export default RoutePaths