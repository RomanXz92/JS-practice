const user = {
  name: "Годрик",
  lastName: "Гриффиндор",
  sword: "Годрик Гриффиндор",
  sallaries: [13000, 15000, 12500],
  getModifySallaries(callback) {
    const newSalaries = [];
    // for (const item of this.sallaries) {
    //     const newItem = callback(item)
    //     newSalaries.push(newItem)
    // }
    this.sallaries.forEach((el) => {
      const newItem = callback(el);
      newSalaries.push(newItem);
    });
    return newSalaries;
  },
};

// function convertUsdt(item) {
//   const result = Math.round(item / 40);
//   return result;
// }

const convertUsdt = (item) => Math.round(item / 40);

console.log(user.getModifySallaries(convertUsdt));
