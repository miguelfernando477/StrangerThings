import react, { useState , useEffect} from "react";
import { getProfile } from "../apiAdapters";
import { isLoggedIn } from "../HelperFunctions";

const Profile = () => {
    let [profilePost, setProfilePost] = useState([])
    let [messages, setMessages] = useState([])

async function displayProfile(token) {
    try {
        const token = localStorage.getItem('token')
        const result = await getProfile(token)
        console.log(result)
        setProfilePost(result.posts)
        console.log(profilePost)
        setMessages(result.messages)
    } catch (error) {
        console.log(error)
    }
}

useEffect(() => {
    if (isLoggedIn) {
        displayProfile();
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