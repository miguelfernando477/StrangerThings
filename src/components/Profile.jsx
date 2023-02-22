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
            <div>{profilePost}</div>
            <div>{messages}</div>
        </div>
    )
}

export default Profile


