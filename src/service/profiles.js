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

export async function updateProfile(profileData) {
  try {
    console.log("service/profile/updateProfile:", profileData)
    await profilesAPI.updateProfile(profileData)
  } catch (error) {
    console.error("Error updating profile", error)
    throw error
  }
}