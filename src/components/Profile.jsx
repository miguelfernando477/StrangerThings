import react, { useState , useEffect} from "react";
import { getProfile } from "../apiAdapters";
import { isLoggedIn } from "../HelperFunctions";

const Profile = () => {
    let [profilePost, setProfilePost] = useState([])
    let [messages, setMessages] = useState([])

async function displayProfile() {
    try {
        const result = await getProfile()
        console.log(result)
        setProfilePost(result.data.posts)
        console.log(result.data.posts)
        setMessages(result.data.messages)
    } catch (error) {
        console.log(error)
    }
}

useEffect(() => {
    if (isLoggedIn) {
        const token = localStorage.getItem('token')
        displayProfile(token);  // JSON.parse around the token fixed the error
    }
  }, []);
  

    return (
        <div>
            <h1>User</h1>
            <div>
            {profilePost.length 
        ? profilePost.map((post, idx) => {
            return (
                post.active ? 
              <div id="postBox" key={idx}>
                <h1>{post.title}</h1>
                <p>{post.description}</p>
                <h3>Price: {post.price}</h3>
                <h3>Seller: {post.author.username}</h3>
                <h3>Location: {post.location}</h3>
              </div> : null
            );
          })
        : null}
            </div>
            
            {/* <div>{messages}</div> */}
        </div>
    )
}

export default Profile


