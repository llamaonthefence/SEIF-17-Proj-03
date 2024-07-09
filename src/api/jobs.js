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
  const createURL = BASE_URL + '/createjob';
  console.log(createURL);

  try {
    console.log("api/job jobData: ", JSON.stringify(jobData));
    const res = await fetch(createURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jobData),
    });

    // Log response
    console.log("api/job POST Response:", res);

    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Invalid job creation");
    }
  } catch (error) {
    console.error("Error creating job:", error);
    throw error; // Propagate the error further
  }
}