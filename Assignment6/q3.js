// Promise-based version of fetchBugs()
function getBugs() {
    return new Promise((resolve, reject) => {
        console.log("Fetching bugs from server...");

        const API_FAILED = Math.random() < 0.3; // 30% chance of failure

        setTimeout(() => {
            if (API_FAILED) {
                return reject("API Error: Unable to fetch bug list");
            }

            resolve(["UI glitch", "API timeout", "Login failure"]);
        }, 1000);
    });
}

// Using the Promise
getBugs()
    .then((bugs) => {
        console.log("🐞 Bug List Retrieved:");
        console.table(bugs);
    })
    .catch((error) => {
        console.error("Error:", error);
    });
