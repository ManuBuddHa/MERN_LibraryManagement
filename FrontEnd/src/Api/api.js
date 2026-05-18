const baseurl = 'http://localhost:3000'

export const books = async()=>{
    const api = await fetch(`${baseurl}/books/viewbooks`);
    return api.json();
}

export const members = async()=>{
    const membersApi = await fetch(`${baseurl}/users/viewusers`);
    return membersApi.json();
}

export const LoginUser = async(postdata)=>{
    const res = await fetch(`${baseurl}/users/login`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(postdata)
    })
    return res.json()
}

export const ViewBook = async(id)=>{
    const res = await fetch(`${baseurl}/books/viewbook/${id}`);
    return res.json();
}

export const EditBook = async(id,postdata)=>{
    const res = await fetch(`${baseurl}/books/editbook/${id}`,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        credentials:"include",
        body:JSON.stringify(postdata)
    })
    return res.json()
}

export const DeleteBook = async(id)=>{
    const res = await fetch(`${baseurl}/books/deletebook/${id}`,{
        method:"DELETE",
        credentials:"include"
    })
    return res.json()
}

export const CreateBook = async(postdata)=>{
    const res = await fetch(`${baseurl}/books/createbook`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(postdata)
    })
    return res.json()
}
