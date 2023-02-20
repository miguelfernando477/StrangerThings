import React from "react";

const BASE = "https://strangers-things.herokuapp.com/api/2301-ftb-et-web-ft/posts"
export const getAllPostWithFetch = async () => {
    try {
        const response = await fetch(BASE)
        const data = await response.json()
        console.log(data.data)
        return data.data
    } catch (error) {
        console.log(error)
    }
}

export const getIndividualPost = async (id) => {
    try {
        const response = await fetch(`${BASE}/${id}`, {
            method: "GET",
        });
        const result = await response.json()
        console.log('response',response)
        return result
    } catch (error) {
        console.log(error)
    }
}

export const registerAccount = async () => {
    try {
        const response = await fetch('https://strangers-things.herokuapp.com/api/2301-ftb-et-web-ft/users/register', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user:{
                username: {newUsername},
                password: {newPassword},
                }
            })
        })
        const result = await response.json()
        console.log(result)
        return result
    } catch (error) {
        console.log(error)
    }
}