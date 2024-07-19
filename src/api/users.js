// This is the base path of the Express route we'll define
// const BASE_URL = "http://localhost:3000/users";
const BASE_URL = "https://ga-alumni-network.onrender.com/users";

export async function signUp(userData) {
  // Fetch uses an options object as a second arg to make requests
  // other than basic GET requests, include data, headers, etc.
  const res = await fetch(BASE_URL + "/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    // Fetch requires data payloads to be stringified
    // and assigned to a body property on the options object
    body: JSON.stringify(userData),
  });
  // Check if request was successful
  if (res.ok) {
    // res.json() will resolve to the JWT
    return res.json();
  } else {
    throw new Error("Invalid Sign Up");
  }
}

export async function getSigninDetails(email) {
  // Fetch uses an options object as a second arg to make requests
  // other than basic GET requests, include data, headers, etc.
  const searchParams = new URLSearchParams({"email":email});
  const getSigninDetailsURL = BASE_URL + '/signin?' + searchParams;
  console.log(getSigninDetailsURL);
  const res = await fetch(getSigninDetailsURL, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    // Fetch requires data payloads to be stringified
    // and assigned to a body property on the options object
  });
  // Check if request was successful
  if (res.ok) {
    // res.json() will resolve to the JWT
    console.log(res);
    return res.json();
  } else {
    throw new Error("Invalid User");
  }
}

export async function storeToken(userData) {
  // Fetch uses an options object as a second arg to make requests
  // other than basic GET requests, include data, headers, etc.
  const createURL = BASE_URL + '/storeToken';
  console.log(createURL);
  const res = await fetch(createURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    // Fetch requires data payloads to be stringified
    // and assigned to a body property on the options object
    body: JSON.stringify(userData),
  });
  // Check if request was successful
  if (res.ok) {
    // res.json() will resolve to the JWT
    console.log(res);
    return res.json();
  } else {
    throw new Error("Invalid Token");
  }
}

export async function signinUser(userData) {
  // Fetch uses an options object as a second arg to make requests
  // other than basic GET requests, include data, headers, etc.
  const signinURL = BASE_URL + '/signin';
  console.log(signinURL);
  const res = await fetch(signinURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    // Fetch requires data payloads to be stringified
    // and assigned to a body property on the options object
    body: JSON.stringify(userData),
  });
  // Check if request was successful
  if (res.ok) {
    // res.json() will resolve to the JWT
    console.log(res);
    return res.json();
  } else {
    throw new Error("Invalid signin");
  }
}

export async function checksignin(token) {
  // Fetch uses an options object as a second arg to make requests
  // other than basic GET requests, include data, headers, etc.
  const signinURL = BASE_URL + '/checksignin';
  console.log(signinURL);
  const res = await fetch(signinURL, {
    method: "POST",
    headers: { "Content-Type": "application/json", "Authorization": token},
    // Fetch requires data payloads to be stringified
    // and assigned to a body property on the options object
  });
  // Check if request was successful
  if (res.ok) {
    // res.json() will resolve to the JWT
    console.log(res);
    return res.json();
  } else {
    throw new Error("Invalid signin");
  }
}

export async function checkPermission(token) {
  // Fetch uses an options object as a second arg to make requests
  // other than basic GET requests, include data, headers, etc.
  const signinURL = BASE_URL + '/checkpermission';
  console.log(signinURL);
  const res = await fetch(signinURL, {
    method: "POST",
    headers: { "Content-Type": "application/json", "Authorization": token},
    // Fetch requires data payloads to be stringified
    // and assigned to a body property on the options object
    // body: JSON.stringify(userData),
  });
  // Check if request was successful
  if (res.ok) {
    // res.json() will resolve to the JWT
    console.log(res);
    return res.json();
  } else {
    throw new Error("Invalid signin");
  }
}

export async function signoutUser(token, userData) {
  // Fetch uses an options object as a second arg to make requests
  // other than basic GET requests, include data, headers, etc.
  const signoutURL = BASE_URL + '/signout';
  console.log(signoutURL);
  const res = await fetch(signoutURL, {
    method: "POST",
    headers: { "Content-Type": "application/json",  "Authorization": token},
    // Fetch requires data payloads to be stringified
    // and assigned to a body property on the options object
    body: JSON.stringify(userData),
  });
  // Check if request was successful
  if (res.ok) {
    // res.json() will resolve to the JWT
    console.log(res);
    return res.json();
  } else {
    throw new Error("Invalid signout");
  }
}

export async function getUserDetails(userId) {
  try {
    const url = `${BASE_URL}/${userId}`; 

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    // console.log("data: ", data)
    return data;

  } catch (error) {
    console.error(`Error fetching user details: ${error.message}`);
    throw error; // Re-throw the error for further handling
  }
}