export const logIn = () => {
    localStorage.setItem('token', JSON.stringify(response.data.token))
  }
  
  export const logOut= () => {
    localStorage.removeItem('token')
    localStorage.removeItem("username")
    alert("You've logged out")
  }
  
  export const isLoggedIn = () => {
    return localStorage.getItem('token')!== null
  }