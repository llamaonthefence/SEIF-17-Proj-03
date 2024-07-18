import ProfileFakeData from "../components/testComponents/ProfileFakeData"

// const BASE_URL = "http://localhost:3000/profiles";

// export async function getAllProfiles() {
//   const createURL = `${BASE_URL}`;
//   const res = await fetch(createURL);
//   if (res.ok) {
//     return res.json();
//   } else {
//     throw new Error("Failed to fetch profiles");
//   }
// }

// Replace FAKE_DATABASE with ProfileFakeData
export async function getAllProfileData() {
    // Simulating a delay to mock async behavior (optional)
    await new Promise(resolve => setTimeout(resolve, 1000));
  
    // Return the fake data directly
    return ProfileFakeData;
  }