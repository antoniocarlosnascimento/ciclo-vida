import {  useEffect, useState } from "react";
import { json } from "stream/consumers";
import { api } from "./apiAxios";
import { PostForm } from "./components/PostForm";
import { PostItem } from "./components/PostItems";
import { Post } from "./types/Post";

const App = () => {

  useEffect(() => {
    getPosts()
  }, []);

  const [posts, SetPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
    

  const getPosts = async () => {
    try {
      setLoading(true);
      let postsJson = await api.getAllPosts()
      setLoading(false);
      SetPosts(postsJson);
    } catch (error) {
      setLoading(false);
      SetPosts([]);
    }
  }

  const handleAddPost = async (title: string, body: string) => {
    let json = await api.addNewPosts(title, body, 1)
    console.log(json);
    
  }

  return (
    <div>
      { loading && <p>Loading....</p> } 
      { !loading && posts.length === 0 && <p>Não há posts para exibir.</p> } 

      <PostForm onAdd={handleAddPost} />

      { !loading && posts.length > 0 && 
        <>
          <p>Total de Posts: {posts.length}</p> 

          <div>
            {posts.map((item, index) => (
              <PostItem key={index} data={item} />
            ))}
          </div>
        </>
      }
      
    </div>
  )
}

export default App; 