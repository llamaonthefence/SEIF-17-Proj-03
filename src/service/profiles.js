import * as profilesAPI from "../api/profiles";

export async function getAllProfiles() {
  try {
    const profiles = await profilesAPI.getAllProfileData();
    return profiles;
  } catch (error) {
    console.error("Error fetching profiles:", error);
    throw error; 
  }
}

