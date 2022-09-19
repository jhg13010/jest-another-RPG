function Potion(name) {
   //sets the possible types of potions 
    this.types = ['strength', 'agility', 'health'];
    //sets the name parameter as the name property; if provided 
    //if name parameter is blank, the name will be chosen at random from the types array 
    this.name = name || this.types[Math.floor(Math.random() * this.types.length)];

    //determines the value property based on the name property 
    if (this.name === 'health') {
        //health can range from 30 to 40 
        this.value = Math.floor(Math.random() * 10 + 30);
    } else {
        //strength and agiility can range from 7 to 12 
        this.value = Math.floor(Math.random() * 5 + 7);
    }
}

module.exports = Potion;