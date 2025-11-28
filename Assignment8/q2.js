function calculateBill(orderItems) {
    return new Promise((resolve, reject) => {
        try {
            const prices = orderItems.map(item => {
                if (!menu[item]) {
                    throw new Error(`Invalid item ordered: "${item}"`);
                }
                return menu[item];
            });
            const total = prices.reduce((sum, price) => sum + price, 0);

            resolve(`Final Bill Amount: ₹${total}`);
        } catch (error) {
            reject(error);
        }
    });
}
calculateBill(["burger", "fries", "coke"])
    .then(msg => console.log(msg))
    .catch(err => console.error(err.message));
calculateBill(["pizza", "maggie", "coke"])
    .then(msg => console.log(msg))
    .catch(err => console.error(err.message));
