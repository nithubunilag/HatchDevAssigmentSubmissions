async function mockApiCall() {
    return new Promise((resolve, reject) => {
      // Simulate a random success or failure
      setTimeout(() => {
        if (Math.random() > 0.7) {
          resolve("Success: Data fetched!");
        } else {
          reject(new Error("Mock API Call Failed"));
        }
      }, 1000); // Simulate a 1 second delay for the API call
    });
  }
  
  async function fetchWithExponentialBackoff(
    mockApiCall,
    retries = 5,
    delay = 1000
  ) {
    //   implement logic here
    for (let attempt = 1; attempt <= retries; attempt++) {
      try {
        const result = await mockApiCall();
        return result; // If the API call succeeds, return the result
      } catch (error) {
        // if the api call fails and it it the last attempt
        if (attempt === retries) {
          throw error; // If it's the last attempt, throw the error
        }
        // Wait for the delay period before retrying
        await new Promise((res) => setTimeout(res, delay));
        // Exponentially increase the delay
        delay *= 2;
      }
    }

  }
  
  // Example usage
  (async () => {
    try {
      let data = await fetchWithExponentialBackoff(mockApiCall);
      console.log("Data fetched successfully:", data);
    } catch (error) {
      console.error(error.message);
    }
  })();