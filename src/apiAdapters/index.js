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