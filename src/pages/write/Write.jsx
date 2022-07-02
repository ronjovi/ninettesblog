import {useState} from "react";
import axios from "axios"
import "./write.css"

export default function Write(){
    const [title,setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [file, setFile] = useState(null)

    const handleSubmit = (e)=>{
        e.preventDefault();
        const newPost = {
            title,
            desc,
        };
        if(file){
            const data = FormData();
            const filename = Date.now() + file.name;
            data.append("name",filename);
            data.append("file",file);
            newPost.photo = filename;
            try{
                await axios.post("/upload", data);
            }catch(err){}
        }
        try{
            const res = axios.post("/posts", newPost);
            window.location.replace("/post/" + res.data._id);
        }catch(err){}
    };
    return(
        <div className="write">
            {file && (
                <img
                className="writeImg"
                src ={URL.createObjectURL(file)} alt =""/>
            )}
            <form className="writeForm" onSubmit={handleSubmit}> 
                <div className="writeFormGroup">
                    <label htmlFor="fileInput"></label>
                    <input 
                    type= "file" 
                    name="" id="fileInput" 
                    style={{display: "none"}} 
                    onChange={e=>setFile(e.target.files[0])}
                    />
                    <input 
                    type="text" 
                    placeholder="Title" c
                    lassName="writeInput" 
                    autoFocus={true}
                    onChange={e=> setTitle(e.target.value)}
                    />
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder="Tell a story..." 
                    type="text" 
                    className="writeInput writeText"
                    onChange={e=> setDesc(e.target.value)}
                    ></textarea>
                </div>
                <button className="writeSubmit" type="submit">Publish</button>
            </form>
        </div>
    )
}       