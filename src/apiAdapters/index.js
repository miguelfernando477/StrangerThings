const BASE =
  "https://strangers-things.herokuapp.com/api/2301-ftb-et-web-ft/posts";
export const getAllPostWithFetch = async () => {
  try {
    const response = await fetch(BASE,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
      }
    })
    const data = await response.json();
    console.log(data.data);
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

export const getIndividualPost = async (id) => {
  try {
    const response = await fetch(`${BASE}/${id}`, {
      method: "GET",
    });
    const result = await response.json();
    console.log("response", response);
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const registerAccount = async (username, password) => {
  try {
    const response = await fetch(
      "https://strangers-things.herokuapp.com/api/2301-ftb-et-web-ft/users/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            username: username,
            password: password,
          },
        }),
      }
    );
    const result = await response.json();
    console.log(result, "api adapter");
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const loginAccount = async (username, password) => {
  try {
    const response = await fetch(
      "https://strangers-things.herokuapp.com/api/2301-ftb-et-web-ft/users/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            username: username,
            password: password,
          },
        }),
      }
    );
    const result = await response.json();
    console.log(result, "api adapter");
    return result.data.token;
  } catch (error) {
    console.log(error);
  }
};

export const getProfile = async (token) => {
  try {
    const response = await fetch(
      "https://strangers-things.herokuapp.com/api/2301-ftb-et-web-ft/users/me",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    const result = await response.json();
    console.log("response", response);
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const newPost = async (title, description, price) => {
  try {
    const response = await fetch(
      "https://strangers-things.herokuapp.com/api/2301-ftb-et-web-ft/posts",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          post: {
            title: title,
            description: description,
            price: price,
          },
        }),
      }
    );
    const result = await response.json();
    console.log(result, "result");
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = async (id) => {
  try {
  const response = await fetch(`${BASE}/${id}`, {
    method: "DELETE",
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
      }
    })
  } catch (error) {
    console.log(error)
  }
}

export const newMessage = async (id, content) => {
  try {
    const response = await fetch(`${BASE}/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        message: {
          content: content
        }
      })
    })
  } catch (error) {
    console.log(error)
  }
}