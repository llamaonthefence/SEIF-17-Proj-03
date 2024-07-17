import * as profilesAPI from "../api/profiles";

export async function createProfile(profileData) {
    try {
        //Log for check
        console.log("service/profile profileData: ", profileData)
        await profilesAPI.createProfile(profileData);
    } catch (error) {
        console.error("Error creating profile", error);
        throw error
    }
}