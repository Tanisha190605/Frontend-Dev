// Step 1: Boil water
function boilWater() {
    return new Promise((resolve, reject) => {
        console.log("Boiling water...");
        
        setTimeout(() => {
            if (Math.random() < 0.2) return reject("🔥 Water boiler malfunctioned!");
            resolve("Water boiled");
        }, 1000);
    });
}

// Step 2: Brew coffee
function brewCoffee() {
    return new Promise((resolve, reject) => {
        console.log("Brewing coffee...");
        
        setTimeout(() => {
            if (Math.random() < 0.2) return reject("☕ Coffee machine jammed!");
            resolve("Coffee brewed");
        }, 1500);
    });
}

// Step 3: Pour into cup
function pourCoffee() {
    return new Promise((resolve, reject) => {
        console.log("Pouring coffee into cup...");
        
        setTimeout(() => {
            if (Math.random() < 0.2) return reject("🥤 Cup fell off the table!");
            resolve("Coffee poured");
        }, 1200);
    });
}

// Promise chaining to simulate the entire process
boilWater()
    .then((msg) => {
        console.log(msg);
        return brewCoffee();
    })
    .then((msg) => {
        console.log(msg);
        return pourCoffee();
    })
    .then((msg) => {
        console.log(msg);
        console.log("🎉 Coffee ready for the team!");
    })
    .catch((error) => {
        console.error("Process failed:", error);
    });
