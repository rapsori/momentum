const player = {
  name: "nico",
  points: 10,
  fat: true,
};

console.log(player);
console.log(player.name);
console.log(player["name"]);

// update
player.fat = false;
console.log(player);
player.points = player.points + 15;
console.log(player.points);

// add
player.lastName = "potato";
console.log(player);
