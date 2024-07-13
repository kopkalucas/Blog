import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";


const Home = () => {  

    const [posts, setPosts] = useState([]);

    const cat= useLocation().search;

    useEffect(() => {
        const fetchData = async () => {
            try{
                const res = await axios.get(`/posts${cat}`);
                setPosts(res.data);
            } catch(err){
                console.log(err);
            }
        }
        fetchData()
    }, [cat]);

    // const posts = [
    //     {
    //         id: 1,
    //         title: "Emmanuel Petit: jak dotąd nie jest godny być kapitanem",
    //         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
    //         img: "https://www.pap.pl/sites/default/files/styles/list_of_article_big/public/202407/pap_20240705_34D_0.jpg?itok=w-6ZL0FM", 
    //     },
    //     {
    //         id: 2,
    //         title: "Lorem ipsum dolor sit amet",
    //         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
    //         img: "https://www.pap.pl/sites/default/files/styles/list_of_article_big/public/202407/pap_20240705_34D_0.jpg?itok=w-6ZL0FM",
    //     },
    //     {
    //         id: 3,
    //         title: "Lorem ipsum dolor sit amet",
    //         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
    //         img: "https://www.pap.pl/sites/default/files/styles/list_of_article_big/public/202407/pap_20240705_34D_0.jpg?itok=w-6ZL0FM",
    //     },
    //     {
    //         id: 4,
    //         title: "Lorem ipsum dolor sit amet",
    //         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
    //         img: "https://www.pap.pl/sites/default/files/styles/list_of_article_big/public/202407/pap_20240705_34D_0.jpg?itok=w-6ZL0FM",
    //     },
    //     {
    //         id: 5,
    //         title: "Lorem ipsum dolor sit amet",
    //         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
    //         img: "https://www.pap.pl/sites/default/files/styles/list_of_article_big/public/202407/pap_20240705_34D_0.jpg?itok=w-6ZL0FM",
    //     }
    // ]

    const getText = (html) => {
        const doc = new DOMParser().parseFromString(html, "text/html");
        return doc.body.textContent;
    }



    return (
        <div className="home">
          <div className="posts">
            {posts.map((post) => (
              <div className="post" key={post.id}>
                <div className="img">
                  <img src={`../upload/${post.img}`} alt="" />
                </div>
                <div className="content">
                  <Link className="link" to={`/post/${post.id}`}>
                    <h1>{post.title}</h1>
                  </Link>
                  <p>{getText(post.desc)}</p>
                  <Link className="link" to={`/post/${post.id}`}>
                    <button>Read More</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
};

export default Home