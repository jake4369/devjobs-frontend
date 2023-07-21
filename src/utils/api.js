import axios from "axios";

// BASE URLS
const devjobsApi = axios.create({
  baseURL: "http://127.0.0.1:8000/api/v1/",
});

// GET all jobs
export const getAllJobs = async ({ search, location, contract }) => {
  try {
    // Get the token from localStorage
    const token = localStorage.getItem("token");

    // Define custom headers for this API call
    const headers = {
      Authorization: `Bearer ${token}`,
      // Add other headers here if needed
    };

    let url;

    url =
      search || location || contract
        ? `/jobs?search=${search}&location=${location}&contract=${contract}`
        : "/jobs";

    const response = await devjobsApi.get(url, { headers });

    const jobsData = response.data.data.jobs;

    return jobsData;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Log in user
export const login = async (email, password) => {
  localStorage.clear();
  try {
    const response = await devjobsApi.post("/users/login", {
      email: email,
      password: password,
    });

    const token = response.data.token;
    // Save the token to local storage or a global state management solution (e.g., Redux).
    // For example, if using local storage:
    // localStorage.setItem("token", token);
    localStorage.setItem("token", token);

    return token;
  } catch (error) {
    console.error("Login failed:", error);
    // You can handle login errors here or throw an error to be caught in the calling code.
    throw error;
  }
};

export const signUp = async (name, email, password, passwordConfirm, role) => {
  localStorage.clear();
  try {
    // Send a request to create a new user
    const response = await devjobsApi.post("/users/signup", {
      name: name,
      email: email,
      password: password,
      passwordConfirm: passwordConfirm,
      role: role,
    });

    console.log(response.data.token);

    const token = response.data.token;
    // Save the token to local storage or a global state management solution (e.g., Redux).
    // For example, if using local storage:
    // localStorage.setItem("token", token);
    localStorage.setItem("token", token);

    return token;
  } catch (error) {
    console.error("Sign Up failed:", error);
    // You can handle sign-up errors here or throw an error to be caught in the calling code.
    throw error;
  }
};
