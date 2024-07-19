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

export async function getProfile (listing_id) {
  try {
    const response = await fetch (`${BASE_URL}/${listing_id}`)
    
    if (!response.ok) {
      throw new Error("Failed to fetch profile")
    }

    const profileData = await response.json();
    return profileData; 
  } catch (error) {
    console.error("Error fetching profile data:", error);
    throw error; 
  }
}

// Replace FAKE_DATABASE with ProfileFakeData
// export async function getAllProfileData() {
//     // Simulating a delay to mock async behavior (optional)
//     await new Promise(resolve => setTimeout(resolve, 1000));
  
//     // Return the fake data directly
//     return ProfileFakeData;
//   }

export async function updateProfile(profileData) {
  console.log("api/profile/updateProfile profileData:", JSON.stringify(profileData))
  const updateURL = `${BASE_URL}/${profileData.listing_id}`;
  console.log(updateURL); 

  try {
    const res = await fetch (updateURL, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      }, 
      body: JSON.stringify(profileData)
    })

    console.log("api/profile/updateProfile PATCH Response:", res)

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