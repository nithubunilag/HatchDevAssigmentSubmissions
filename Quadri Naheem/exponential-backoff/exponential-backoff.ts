async function mockApiCall(interval) {
    return new Promise((resolve, reject) => {
      // Simulate a random success or failure
      setTimeout(() => {
        if (Math.random() > 0.7) {
          resolve("Success: Data fetched!");
        } else {
          reject(new Error("Mock API Call Failed"));
        }
      }, interval); // Simulate a 1 second delay for the API call, which is increased exponentially for every failed attempt
    });
  }
  
  async function fetchWithExponentialBackoff(
    mockApiCall,
    retries = 5,
    delay = 1000,
    attempt = 1
  ) {
    //   implement logic here
    try{
        let data = await mockApiCall(delay);
        return data; 
    }catch(error){
        if (attempt >= retries) {
            throw error; //throw error if max retries reached
          }
        console.log(`${error}. Retry after ${delay}ms`);
        await new Promise((resolve) => setTimeout(resolve, delay));
        return fetchWithExponentialBackoff(mockApiCall, retries, delay * 2, attempt + 1);
    }
  }
  
  //Usage
  (async () => {
    try {
      let data = await fetchWithExponentialBackoff(mockApiCall);
      console.log("Data fetched successfully:", data);
    } catch (error) {
      console.error(`${error.message}; Max Retries Reached!`);
    }
  })();
  
