import { getToken, getUserIdFromToken } from "../util/security";

const BASE_URL = "http://localhost:3000/jobs";

export async function getAllJobs() {
  const createURL = `${BASE_URL}`;
  const res = await fetch(createURL);
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Failed to fetch jobs");
  }
}

export async function createJob(jobData) {
  try {
    const token = getToken();
    const user = getUserIdFromToken();

    console.log("body: ",{ ...jobData, user_id: user })

    const createURL = `${BASE_URL}/createjob`;
    // console.log("Create URL:", createURL);

    const res = await fetch(createURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ ...jobData, user_id: user }), 
    });

    console.log("api/job/createJob POST Response:", res);

    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Invalid job creation");
    }
  } catch (error) {
    console.error("Error creating job:", error);
    throw error;
  }
}

export async function updateJob(jobData) {
  // console.log("api/job/updateJob jobData: ", JSON.stringify(jobData));

  const updateURL = `${BASE_URL}/updatejob/${jobData.listing_id}`;
  console.log(updateURL);

  try {
    const token = getToken();

    console.log("body: ",{ ...jobData})

    const res = await fetch(updateURL, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(jobData), 
    });

    console.log("api/job/updatejob PATCH Response:", res);

    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Invalid job update");
    }
  } catch (error) {
    console.error("Error updating job:", error);
    throw error;
  }
}

export async function deleteJob(jobData) {
  // console.log("api/job/deleteJob jobData: ", JSON.stringify(jobData));

  const updateURL = `${BASE_URL}/deletejob/${jobData.listing_id}`;
  console.log(updateURL);

  try {
    const token = getToken();

    console.log("body: ",{ ...jobData})

    const res = await fetch(updateURL, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(jobData), 
    });

    console.log("api/job/deleteJob DELETE Response:", res);

    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Invalid job delete");
    }
  } catch (error) {
    console.error("Error deleting job:", error);
    throw error;
  }
}

export async function getUserJobs(userId) {
  const userJobsURL = `${BASE_URL}/user/${userId}`;
  const res = await fetch(userJobsURL);
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Failed to fetch user jobs");
  }
}