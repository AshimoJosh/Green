let donimg = document.getElementById("donimg");
let donimgs = [
  "f1.jpg",
  "g3.jpg",
  "f2.jpg",
  "g1.jpg",
];

setInterval(() => {
  let random = Math.floor(Math.random() * 4);
  donimg.src = donimgs[random];
}, 3500);

let plantimg = document.getElementById("plantimg");
let plantimgs = [
  "c8.jpg",
  "c4.jpg",
  "c2.jpg",
  "c3.jpg",
  "c5.jpg",
];

setInterval(() => {
  let random = Math.floor(Math.random() * 5);
  plantimg.src = plantimgs[random];
}, 5000);

let liveimg = document.getElementById("liveimg");
let liveimgs = [
  "l2.jpg",
  "l8.jpg",
  "l5.jpg",
  "l7.jpg",
  "l4.jpg",
  "l12.jpg",
];

setInterval(() => {
  let random = Math.floor(Math.random() * 5);
  liveimg.src = liveimgs[random];
}, 3000);

// let plantimg = document.getElementById("plantimg");
// let plantimgs = ["practicalportrait.jpg", "pic.jpg", "practicalportrait.jpg"];

// setInterval(() => {
//   let random = Math.floor(Math.random() * 3);
//   plantimg.src = plantimgs[random()];
// }, 1000);
