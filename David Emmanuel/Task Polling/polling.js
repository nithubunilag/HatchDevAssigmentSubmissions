function poll(task, interval) {
    const check = () => {
        task().then((result) => {
            if (!result) {
                console.log("Task running");
                setTimeout(check, interval);
            } else {
                console.log("Task complete");
            }
        });
    };
    check();
}

// Example usage
let taskStatus = false;

function checkTask() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(taskStatus), 1000);
    });
}

setTimeout(() => (taskStatus = true), 5000); // Simulate task completion after 5 seconds

poll(checkTask, 1000);
