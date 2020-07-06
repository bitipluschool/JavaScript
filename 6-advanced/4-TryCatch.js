/*  ---  JavaScript Basics - Advanced  ---  */
/*  ---  Try and Catch  ---  */

const player = {
  firstName: "Orel",
  lastName: "Hassid",
  get fullName() {
    return `${player.firstName} ${player.lastName}`;
  },
  set fullName(value) {
    if (typeof value !== "string") {
      throw new Error("value is not a string");
    }
    const names = value.split(" "); // convert string into an array
    this.firstName = names[0];
    this.lastName = names[1];
  },
};
try {
  player.fullName = 10;
} catch (error) {
  console.error(error);
}
