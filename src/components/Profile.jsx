import react, { useState , useEffect} from "react";
import { getProfile, getTestProfile } from "../apiAdapters";
import { isLoggedIn } from "../HelperFunctions";

const Profile = () => {
    let [profilePost, setProfilePost] = useState([])
    let [messages, setMessages] = useState([])

async function displayProfile(token) {
    try {
        // const result = await getProfile(token)
        const result = await getTestProfile(token)
        console.log(result)
        setProfilePost(result.data.posts)
        setMessages(result.data.messages)
    } catch (error) {
        console.log(error)
    }
}

useEffect(() => {
    if (isLoggedIn) {
        const token = localStorage.getItem('token')
        displayProfile(JSON.parse(token));  // JSON.parse around the token fixed the error
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


