async function mockApiCall() {
    return new Promise((resolve, reject) => {
        // Simulate a random success or failure
        setTimeout(() => {
            if (Math.random() > 0.7) {
                resolve('Success: Data fetched!');
            } else {
                reject(new Error('Mock API Call Failed'));
            }
        }, 1000); // Simulate a 1 second delay for the API call
    });
}

// Custom function to pause execute for `ms` milliseconds
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchWithExponentialBackoff(
    mockApiCall,
    maxRetries = 20,
    delay = 1000
) {
    // implement logic here
    let attempts = 0; // attempts to far, max is `maxRetries`
    let result = null;
    while (attempts < maxRetries) {
        try {
            result = await mockApiCall();
            return result;
        } catch (e) {
            delay += 1000; // keep incrementing wait time by 1000ms
            console.log('- Fail, now retrying in:', delay, 'ms');
        }
        // Pause execution for now
        await sleep(delay);
        attempts += 1;
    }
    return result;
}

// Example usage
(async () => {
    try {
        let data = await fetchWithExponentialBackoff(mockApiCall);
        console.log('Data fetched successfully:', data);
    } catch (error) {
        console.error(error.message);
    }
})();
