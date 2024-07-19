import * as profilesAPI from "../api/profiles";

export async function getAllProfiles() {
  try {
    const { profiles } = await profilesAPI.getAllProfiles(); // Assuming the API response has a "profiles" field
    return profiles;
  } catch (error) {
    console.error("Error fetching profiles:", error);
    throw error; 
  }
}

export async function getUserProfile(listing_id) {
  try {
    const profile = await profilesAPI.getProfile(listing_id);
    console.log("profile: ", profile)
    return profile;
  } catch (error) {
    console.error("Error fetching profile:", error);
    throw error;
  }
}

export async function updateProfile(profileData) {
  try {
    // console.log("service/profile/updateProfile:", profileData)
    await profilesAPI.updateProfile(profileData)
  } catch (error) {
    console.error("Error updating profile", error)
    throw error
  }
}

export async function getProfileDetails(userid) {
  const userDetails = await profilesAPI.getProfile(userid);
  // console.log("service userDetails: ", userDetails)
  return userDetails;
}

export async function createProfile(profileData) {
  try {
    // console.log("service/profile/profileData profileData: ", profileData)

    await profilesAPI.createProfile(profileData);
    // You can return a success message or handle additional logic here if needed
  } catch (error) {
    console.error("Error creating profile:", error);
    throw error; // Propagate the error to handle it further up the chain
  }
}