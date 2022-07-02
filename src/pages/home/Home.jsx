import axios from "axios";
import { useEffect } from "react";
import Header from "../../header/Header"
import "./home.css"
import axios from "axios";

export default function HOME(){
    const [posts, setPosts] = useState([]);
    const {search} = useLocation();
    console.log(location);
    useEffect(()=>{
        const fetchPost = async ()=>{
            const res = await axios.get("/posts"+search)
            setPosts(res.data)
        }
        fetchPosts()
    }, [search]);
    return (
        <>
        <Header/>
        <div className="home">
            <Posts posts={posts}/>
            Add a new post here..
        </div>
        </>
    )
}