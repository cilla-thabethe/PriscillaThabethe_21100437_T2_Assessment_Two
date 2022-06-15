import axios from "axios";
import { useEffect, useState } from "react";
import PostItem from "./components/PostItem";

function App() {

  sessionStorage.setItem('activeUser', 'LewisCarroll');

  const [userId, setUserId] = useState({
    username: sessionStorage.getItem('activeUser')
  });

  const [posts, setPosts] = useState();

  const [postMessage, setPostMessage] = useState({
    username: sessionStorage.getItem('activeUser'),
    message: '',
  });

  const [renderPost, setRenderPost] = useState();
  
  //read user posts
  useEffect(() => {
    axios.post('http://localhost:8888/t2assessment2_api/readPosts.php', userId)
    .then((res) => {
      let data = res.data;
      let renderPosts = data.map((item) => <PostItem key={item.id} rerender={setRenderPost} username={username} dateTime={item.dateTime} postMessage={postMessage}/>);
      console.log(data);

      setPosts(renderPosts);
      setRenderPost(false);
    })
    .catch(error => {
      console.log(error)
    });
  }, [renderPost])

  const postVal = (e) => {
    let messageVal = e.target.value;
    setPostMessage({...postMessage, message: messageVal})
  }

  const addNewPost = (e) => {
    e.preventDefault();
    document.getElementById('message').value = '';

    axios.post('http://localhost:8888/t2assessment2_api/addNewPost.php', postMessage)
    .then((res) => {
      let data = res.data;
      console.log(data)
      setRenderPost(true)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  return (
    <div className="App">
      <div className="left">
        <h1>Your Post Timeline</h1>
        <p>Populate the area below with posts from the form to the right...</p>
        {posts}       
      </div>
      <div className="right">
        <form >
          <h3>Add A New Post</h3>
          <textarea placeholder="your post here" onChange={postVal} />
          <button type="submit" onClick={addNewPost}>Add Your New Post</button>
        </form>
      </div>
    </div>
  );
}

export default App;
