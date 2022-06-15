import axios from "axios";
import { useState } from "react";
import EditPost from "./EditPost";

const PostItem = (props) => {

    const [model, setModel] = useState();

    const editPost = () => {
        setModel (<EditPost uprender={props.rerender} rerenderer={setModel} original={props.message} id={props.id} />)
    }

    const deletePost = () => {
        if(window.confirm("Are you sure you want to delete this post?") == true){

            let postId = {id: props.id}

            axios.post('http://localhost:8888/t2assessment2_api/deletePost.php', postMessage)
            .then((res) => {
              let data = res.data;
              console.log(data)
              props.rerender(true)
            })
            .catch((error) => {
              console.log(error)
            })

        } else {
        console.log("user did not delete post")
        }
    }

    return (  

        <div className="post_item">
        <h3> {props.username} </h3>
        <h5> {props.dateTime} </h5>
        <p id="message"> {props.postMessage} </p>
        <div className="postUi">
          <div className="edit" onClick={editPost}>Edit Post</div>
          <div className="delete" onClick={deletePost}>Delete Post</div>
        </div>
      </div>
    );
}
 
export default PostItem;