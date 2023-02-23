import react from "react";

export const logIn = () => {
    localStorage.setItem('token', JSON.stringify(response.data.token))
  }
  
  export const logOut= () => {
    localStorage.removeItem('token')
    localStorage.removeItem("username")
  }
  
  export const isLoggedIn = () => {
    return localStorage.getItem('token')!== null
  }