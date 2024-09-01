let answer = parseInt(prompt("Please enter a number"));

for (let i = 1; i <= answer; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("This number is divisible by 3 and 5", i);
  } else if (i % 3 === 0) {
    console.log("This number is divisible by 3", i);
  } else if (i % 5 === 0) {
    console.log("This number is divisible by 5", i);
  } else {
    console.log(i);
  }
}
