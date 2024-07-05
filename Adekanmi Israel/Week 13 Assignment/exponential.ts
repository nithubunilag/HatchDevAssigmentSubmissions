//Adekanmi Israel
// adekanmiisrael8@gmail.com
// github.com/IsraelAdekanmi

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
    apiCall: () => Promise<any>,
    retries: number = 5,
    delay: number = 1000
  ): Promise<any> {
     //   implement logic here
    for (let i = 0; i < retries; i++) {
      try {
        return await apiCall();
      } catch (error) {
        if (i === retries - 1) {
          throw new Error(`Failed after ${retries} retries: ${error.message}`);
        }
        // Exponential backoff delay
        await new Promise((resolve) => setTimeout(resolve, delay));
        delay *= 2; // Increase the delay exponentially
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
  