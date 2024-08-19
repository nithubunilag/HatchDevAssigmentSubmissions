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
    let attempt = 0;
    
    while (attempt < retries) {
      try {
        return await mockApiCall();
      } catch (error) {
        attempt++;
        if (attempt >= retries) {
          throw error;
        }
        await new Promise(res => setTimeout(res, delay));
        delay *= 2; // Exponential backoff
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
  