const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let dinosaur1;
  let dinosaur2;
  let dinosaurs;
  let park;

  beforeEach(function () {
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('pterodactyl', 'carnivore', 25)
    dinosaurs = [dinosaur1, dinosaur2]
    park = new Park('Cretaceous Park', 5000, dinosaurs)
  })

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'Cretaceous Park' )
  });

  it('should have a ticket price', function (){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 5000)
  });


  it('should have a collection of dinosaurs', function (){
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 2 )
  });

  it('should be able to add a dinosaur to its collection', function (){
    let dinosaur3 = new Dinosaur('triceratops', 'herbivore', 40)
    park.add(dinosaur3)
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 3 )
  });

  it('should be able to remove a dinosaur from its collection', function (){
    park.remove(dinosaur2)
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 1)
  });

  xit('should be able to find the dinosaur that attracts the most visitors', function (){
    const actual = park.mostPopularDinosaur();
    assert.strictEqual(actual, 't-rex')
  });


  it('should be able to find all dinosaurs of a particular species', function () {
    const speciesArray = park.allOfSpecies('t-rex');
    const actual = speciesArray.length;
    assert.strictEqual(actual, 1)
  });


  xit('should be able to remove all dinosaurs of a particular species', function () {
    const actual = park.removeAllOfSpecies('t-rex');
    assert.strictEqual(actual, 2);
  });

});
