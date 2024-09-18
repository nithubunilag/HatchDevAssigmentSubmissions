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
    for(let i = 0; i < retries; i++){
      try{
        const result = await mockApiCall();
        return result;
      }
      catch (error){
        if(i === retries - 1){
          throw new Error("All retries failed: ", error.message);
        }

        const expBackoffDelay = delay * Math.pow(2, i);
        console.log(`Retrying in ${expBackoffDelay} ms`);
        await new Promise(resolve => setTimeout(resolve, backoffDelay));
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