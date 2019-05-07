const Park = function (name, ticketPrice, dinosaurs) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = dinosaurs;
}

Park.prototype.add = function(dinosaur) {
  this.dinosaurs.push(dinosaur)
}

Park.prototype.remove = function(dinosaur) {
  for( let i = 0; i < this.dinosaurs.length; i++){
   if ( this.dinosaurs[i] === dinosaur) {
     this.dinosaurs.splice(i, 1);
   }
 }
}

// var max = arr.reduce(function(a, b) {
//     return Math.max(a, b);

Park.prototype.mostPopularDinosaur = function() {
  const dinoArray = this.dinosaurs;
  const sortedDinoArray = dinoArray.sort('guestsAttractedPerDay');
  return sortedDinoArray;
  // }
}

Park.prototype.allOfSpecies = function(species) {
  let speciesArray = [];
  for (let dinosaur of this.dinosaurs) {
    if (dinosaur.species === species) {
      speciesArray.push(dinosaur)
    }
  }
  return speciesArray
}

Park.prototype.removeAllOfSpecies = function(species) {
  for( let i = 0; i < this.dinosaurs.length; i++){
   if ( this.dinosaurs.species[i] === species) {
     this.dinosaurs.splice(i, 1);
   }
 }
 return this.dinosaurs
}



module.exports = Park;
