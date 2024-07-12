async function mockApiCall() {
    return new Promise((resolve, reject) => {
      // Simulate a random success or failure
      setTimeout(() => {
        if (Math.random() > 0.7) {
          resolve("Success: Data fetched!");
        } else {
          reject(new Error("Mock API Call Failed"));
        }
      }, 5000); // Simulate a 1 second delay for the API call
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
        // Try to make the API call
        let result = await mockApiCall();
        // If the call is successful, return the result
        return result;
      } catch (error) {
        // If the call fails and we have retries left, wait for the delay
        if (attempt < retries) {
          console.log(`Attempt ${attempt} failed. Retrying in ${delay}ms...`);
          await new Promise((resolve, reject) => setTimeout(resolve, delay));
          // Increase the delay exponentially
          delay *= 2;
        } else {
          // If no retries left, throw the error
          throw new Error(`All ${retries} attempts failed. ${error.message}`);
        }
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