//your JS code here. If required.
const student = { name: "swapnil" };


Object.prototype.getKeys = function () {
  let arr = [];
  for (let [key, val] of Object.entries(this)) {
    arr.push(key)
    // console.log(key)
  }
  return arr;
}