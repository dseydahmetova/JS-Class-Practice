class Cat {
  constructor(color, name, breed, like) {
    this.color = color
    this.name = name
    this.breed = breed
    this.like = like
  }
  play() {
    if(this.breed === 'Bengal'){
    console.log('likes to play with teaser')
    }else{
      console.log('likes to play with laser')
    }
  }
  eatsVeggie() {
    if (this.like == true) {
      console.log("eats veggies");
    }else{
      console.log("eats only fish and meat")
    }
  }
  sleep() {
     if (this.like == true) {
    console.log('sleeps curled in a Ball')
  }else {
       console.log('sleeps on Your Chest')
  }
}
}

const cat1 = new Cat('black', 'Luna', 'American Shorthair', true)
const cat2 = new Cat('orange', 'Bella', 'Siamese', false)
const cat3 = new Cat('gray', 'Oliver', 'Bengal', true)


console.log(cat1)
console.log("\nAbout cat " + cat1.name+":")
cat1.play()
cat1.eatsVeggie()
cat1.sleep()

console.log(cat2)
console.log("\nAbout cat " + cat2.name+":")
cat2.play()
cat2.eatsVeggie()
cat2.sleep()

console.log(cat3)
console.log("\nAbout cat " + cat3.name+":")
cat3.play()
cat3.eatsVeggie()
cat3.sleep()




class Pirate {
  constructor(type, name, sex, position) {
    this.type = type
    this.name = name
    this.sex = sex
    this.position = position
  }
  hasASword() {
    if (this.position === 'master Gunner' || this.position === 'captain') {
      return true
    } else {
      return false
    }
  }
  wearJewels() {
    if (this.sex === 'female') {
      return 'wears gold necklace'
    } else {
      return 'wears eyepatches'
    }
  }
  findATreasure() {
    if (this.type === 'Landlubbers' || this.type === 'Pirate Kings') {
      return 'found gold, silver, jewels '
    } else {
      return 'robbed tanned animal skins, cocoa, tobacco'
    }
  }
}

let jollyRojer = [
  new Pirate('Landlubbers', 'Anne Bonny', 'female', 'master Gunner'),
  new Pirate('Sea Dogs', 'Henry Morgan', 'male', "captain"),
  new Pirate('Pirate Kings', 'Zack Edward', 'male', 'navigator')
]

jollyRojer.forEach((item, index) => {
  console.log(`\n${index + 1}. ${item.name} is a ${item.position} of "jollyRojer" ship and ${item.wearJewels()} and ${item.findATreasure()}`)
})

let blackPearl = [
  new Pirate('Landlubbers', 'Toothless Pete', 'male', 'master Gunner'),
  new Pirate('Pirate Kings', 'One-leg Jone', 'male', "captain"),
  new Pirate('Sea Dogs', "Lady Cassandra", 'female', 'navigator')
]

console.log('\n')

blackPearl.forEach((item, index) => {
  console.log(`\n${index + 1}. ${item.name} is a ${item.position} of "blackPearl" ship and ${item.wearJewels()} and ${item.findATreasure()}`)
})