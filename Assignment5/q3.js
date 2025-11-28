// const user = {
//     name: "Tanisha",
//     showName: () => {
//         console.log(this.name);
//     }
// };

// user.showName();  // Output: undefined
/*Arrow functions do NOT have their own this.They take this from their surrounding (global) scope.In global scope, this.name is undefined.
So inside an object, arrow functions should NOT be used as methods. */

const user = {
    name: "Tanisha",
    showName: function () {
        console.log(this.name);
    }
};

user.showName();   // Output: Tanisha
