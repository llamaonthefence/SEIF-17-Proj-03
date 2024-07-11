import * as jobsAPI from "../api/jobs";

export async function createJob(jobData) {
  try {
    console.log("service/job/createjob jobData: ", jobData)

    await jobsAPI.createJob(jobData);
    // You can return a success message or handle additional logic here if needed
  } catch (error) {
    console.error("Error creating job:", error);
    throw error; // Propagate the error to handle it further up the chain
  }
}

export async function getAllJobs() {
  try {
    const jobs = await jobsAPI.getAllJobs();
    return jobs;
  } catch (error) {
    console.error("Error fetching jobs:", error);
    throw error; // Propagate the error to handle it further up the chain
  }
}

export async function updateJob(jobData) {
  try {
    console.log("service/job/updateJob jobData: ", jobData);
    await jobsAPI.updateJob(jobData);
    // You can return a success message or handle additional logic here if needed
  } catch (error) {
    console.error("Error updating job:", error);
    throw error; // Propagate the error to handle it further up the chain
  }
}

export async function deleteJob(jobData) {
  try {
    console.log("service/job/deleteJob jobData: ", jobData);
    await jobsAPI.deleteJob(jobData);
    // You can return a success message or handle additional logic here if needed
  } catch (error) {
    console.error("Error deleting job:", error);
    throw error; // Propagate the error to handle it further up the chain
  }
}