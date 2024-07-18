// import ProfileFakeData from "../components/testComponents/ProfileFakeData"

const BASE_URL = "http://localhost:3000/profile";

export async function getProfile(listing_id) {

  const createURL = `${BASE_URL}/${listing_id}`;
  const res = await fetch(createURL);
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Failed to fetch profile");
  }
}

// Replace FAKE_DATABASE with ProfileFakeData
// export async function getAllProfileData() {
//     // Simulating a delay to mock async behavior (optional)
//     await new Promise(resolve => setTimeout(resolve, 1000));
  
//     // Return the fake data directly
//     return ProfileFakeData;
//   }

