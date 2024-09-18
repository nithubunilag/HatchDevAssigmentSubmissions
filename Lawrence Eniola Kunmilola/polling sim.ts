function poll(task: () => Promise<boolean>, interval: number) {
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

let taskStatus = false;

function checkTask(): Promise<boolean> {
    return new Promise((resolve) => {
        setTimeout(() => resolve(taskStatus), 1000);
    });
}

setTimeout(() => (taskStatus = true), 5000); // Simulate task completion after 5 seconds

poll(checkTask, 1000);
