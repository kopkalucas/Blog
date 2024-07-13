import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";

const Write = () => {  


    const state = useLocation().state;
    const [value, setValue] = useState(state?.title || "");
    const [title, setTitle] = useState(state?.desc || "");
    const [file, setFile] = useState(null);
    const [cat, setCat] = useState(state?.cat || "");

    const navigate = useNavigate()

    const upload = async () => { 
         try {
            const formData = new FormData();
            formData.append("file", file);
            const res = await axios.post("/upload", formData);
            console.log(res.data);
            return res.data;
         } catch (err) {
                console.log(err);
        }
    }

    const handleClick = async (e) => {
        e.preventDefault();
        const imgUrl = await upload();
    
        try {
          state
            ? await axios.put(`/posts/${state.id}`, {
                title,
                desc: value,
                cat,
                img: file ? imgUrl : "",
              })
            : await axios.post(`/posts/`, {
                title,
                desc: value,
                cat,
                img: file ? imgUrl : "",
                date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
              });
              navigate("/")
        } catch (err) {
          console.log(err);
        }
      };

    return (
        <div className="add">
            <div className="content">
                <input type="text" value={title} placeholder="Title" onChange={e=>setTitle(e.target.value)}/>
                <div className="editorContainer">
                    <ReactQuill theme="snow" value={value} onChange={setValue}/>
                </div>
            </div>
            <div className="menu">
                <div className="item">
                    <h1>Publish</h1>
                    <span>
                        <b>Status: </b> Draft
                    </span>
                    <span>
                        <b>Visivility: </b> Public
                    </span>
                    <input style={{display:"none"}} type="file" id="file" name="" onChange={e=>setFile(e.target.files[0])}/>
                    <label htmlFor="file">Upload Image</label>
                </div>
                <div className="buttons">
                    <button>Save as draft</button>
                    <button onClick={handleClick}>Publish</button>
                </div>
                <div className="item">
                    <h1>Category</h1>
                    <div className="cat">
                        <input type="radio" checked={cat === "football"} name="cat" value="football" id="football" onChange={e=>setCat(e.target.value)}/>
                        <label htmlFor="football">Football</label>
                    </div>
                    <div className="cat">
                        <input type="radio" checked={cat === "basketball"} name="cat" value="basketball" id="basketball" onChange={e=>setCat(e.target.value)}/>
                        <label htmlFor="basketball">Basketball</label>
                    </div>
                    <div className="cat">
                        <input type="radio" checked={cat === "valleyball"} name="cat" value="valleyball" id="valleyball" onChange={e=>setCat(e.target.value)}/>    
                        <label htmlFor="valleyball">Valleyball</label>
                    </div>
                    <div className="cat">
                        <input type="radio" checked={cat === "tennis"} name="cat" value="tennis" id="tennis" onChange={e=>setCat(e.target.value)}/>
                        <label htmlFor="tennis">Tennis</label>
                    </div>
                    <div className="cat">
                        <input type="radio" checked={cat === "boxing"} name="cat" value="boxing" id="boxing" onChange={e=>setCat(e.target.value)}/>
                        <label htmlFor="boxing">Boxing</label>
                    </div>
                    <div className="cat">
                        <input type="radio" checked={cat === "motorsport"} name="cat" value="motorsport" id="motorsport" onChange={e=>setCat(e.target.value)}/>
                        <label htmlFor="motorsport">Motorsport</label>
                    </div>
                    <div className="cat">
                        <input type="radio" checked={cat === "esport"} name="cat" value="esport" id="esport" onChange={e=>setCat(e.target.value)}/>
                        <label htmlFor="esport">E-sport</label>
                    </div>
                </div>
            </div>
        </div>
    );
}   

export default Write