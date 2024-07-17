const BASE_URL = "http://localhost:3000/profile";

// export async function getAllProfiles() {
//     const createURL = `${BASE_URL}`;
//     const res = await fetch(createURL);
//     if (res.ok) {
//       return res.json();
//     } else {
//       throw new Error("Failed to fetch profiles");
//     }
//   }
  
  export async function getProfileById(id) {
    const createURL = `${BASE_URL}/${id}`;
    const res = await fetch(createURL);
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Failed to fetch profile");
    }
  }
  
  export async function createProfile(profileData) {
    const createURL = BASE_URL;
    console.log(createURL)

    try {
      console.log("api/profile profileData: ", JSON.stringify(profileData));
      const res = await fetch(createURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(profileData),
      });

      //Log response 
      console.log("api/job POST Response:", res);
  
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Failed to create profile");
      }
    } catch (error) {
      console.error("Error creating profile:", error);
      throw error;
    }
  }
  
  export async function updateProfile(id, profileData) {
    const createURL = `${BASE_URL}/${id}`;
    try {
      const res = await fetch(createURL, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(profileData),
      });
  
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Failed to update profile");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      throw error;
    }
  }
  
  export async function deleteProfile(listing_id) {
    const createURL = `${BASE_URL}/${listing_id}`;
    try {
      const res = await fetch(createURL, {
        method: "DELETE",
      });
  
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Failed to delete profile");
      }
    } catch (error) {
      console.error("Error deleting profile:", error);
      throw error;
    }
  }