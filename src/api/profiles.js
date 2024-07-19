import { getToken, getUserIdFromToken, getListingIdFromToken } from "../util/security";
// import ProfileFakeData from "../components/testComponents/ProfileFakeData"

const BASE_URL = "http://localhost:3000/profile";

export async function getAllProfiles() {
  const createURL = `${BASE_URL}`;
  const res = await fetch(createURL);
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Failed to fetch profiles");
  }
}

export async function getProfile (userid) {
  try {
    const response = await fetch (`${BASE_URL}/${userid}`)
    
    if (!response.ok) {
      throw new Error("Failed to fetch profile")
    }

    const res = await response.json();
    const profileData = res.profile[0]
    console.log("API getProfile profileData: ", profileData)
    return profileData; 
  } catch (error) {
    console.error("Error fetching profile data:", error);
    throw error; 
  }

  
}

export async function updateProfile(profileData) {
  try {
    const token = getToken();
    const user = getUserIdFromToken();
    const listing_id = profileData.listing_id;
    // console.log("listing_id: ", profileData.listing_id)
    console.log("api/profile/updateProfile:", profileData)
    const updateURL = `${BASE_URL}/${listing_id}`;
    console.log(updateURL); 
  
    console.log("API updateProfile body: ",{ ...profileData, user_id: user, listing_id: listing_id })
    const res = await fetch (updateURL, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      }, 
      body: JSON.stringify({ ...profileData, user_id: user, listing_id: listing_id }), 
    })

    // console.log("api/profile/updateProfile PATCH Response:", res)

    if (res.ok) {
      return res.json();
    } else {
      throw new Error ("invalid profile update")
    }
  } catch (error) {
    console.error("error updating profile:", error)
    throw error; 
  }
}

export async function createProfile(profileData) {
  try {
    const token = getToken();
    const user = getUserIdFromToken();

    console.log("body: ",{ ...profileData, user_id: user })

    const createURL = `${BASE_URL}/`;
    // console.log("Create URL:", createURL);

    const res = await fetch(createURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ ...profileData, user_id: user }), 
    });

    // console.log("api/job/createProfile POST Response:", res);

    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Invalid profile creation");
    }
  } catch (error) {
    console.error("Error creating profile:", error);
    throw error;
  }
}