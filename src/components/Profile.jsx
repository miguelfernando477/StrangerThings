import react, { useState } from "react";
import { getProfile } from "../apiAdapters";

const Profile = () => {
    let [profilePost, setProfilePost] = useState([])
    let [messages, setMessages] = useState([])

async function sss() {
    try {
        const result = await getProfile()
        setProfilePost(result.posts)
        console.log(profilePost)
        setMessages(result.messages)
    } catch (error) {
        console.log(error)
    }
}


    return (
        <div>
            <h1>User</h1>
            <div>{profilePost}</div>
        </div>
    )
}

export default Profile