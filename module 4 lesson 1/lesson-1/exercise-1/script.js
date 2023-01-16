const user = {
  name: "Годрик",
  lastName: "Гриффиндор",
  sword: "Годрик Гриффиндор",
  tabel: {
    basicMagic: 70,
    flight: 40,
    fight: 100,
  },
  getModifyTabel(callback) {
    const newTabel = {};
    for (const key in this.tabel) {
      const score = this.tabel[key];
      const newScore = callback(score);
      newTabel[key] = newScore;
    }
    return newTabel;
  },
};
// function convert100to12(score){
//     const newScore = Math.round((score / 100) * 12)
//     return newScore   
// }

const convert100to12 = (score) => Math.round((score / 100) * 12)

console.log(user.getModifyTabel(convert100to12))
