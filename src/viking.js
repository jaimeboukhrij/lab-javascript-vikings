// Soldier
class Soldier {
    constructor(healthValue, strengthValue) {
        this.health = healthValue
        this.strength = strengthValue
    }
    attack() {
        return this.strength
    }

    receiveDamage(damageValue) {
        this.health -= damageValue

    }



}




// Viking
class Viking extends Soldier {
    constructor(nameValue, healthValue, strengthValue) {
        super(healthValue, strengthValue)
        this.name = nameValue
    }

    receiveDamage(damageValue) {
        this.health -= damageValue
        if (damageValue < this.health) {
            return `${this.name} has received ${damageValue} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }

    battleCry() {
        return "Odin Owns You All!"
    }

}






// Saxon
class Saxon extends Soldier {



    receiveDamage(damageValue) {

        this.health -= damageValue

        if (this.health > 0) {
            return `A Saxon has received ${damageValue} points of damage`
        }
        else {
            return `A Saxon has died in combat`
        }
    }
}






// War
class War {
    constructor() {
        this.vikingArmy = []
        this.saxonArmy = []
    }

    addViking(vikinValue) {
        this.vikingArmy.push(vikinValue)
    }

    addSaxon(saxonValue) {
        this.saxonArmy.push(saxonValue)
    }

    vikingAttack() {
        const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]



        if (randomSaxon.health < randomViking.strength) {

            this.saxonArmy = this.saxonArmy.filter(animal => animal !== randomSaxon);
            return randomSaxon.receiveDamage(randomViking.strength)

        } else { return randomSaxon.receiveDamage(randomViking.strength) }




    }



    saxonAttack() {
        const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        console.log("s-->" + randomViking.health, randomSaxon.strength)

        if (randomViking.health < randomSaxon.strength) {
            console.log("dentro")
            this.vikingArmy = this.vikingArmy.filter(animal => animal !== randomViking);
            return randomSaxon.receiveDamage(randomSaxon.strength)

        } else {

            return randomViking.receiveDamage(randomSaxon.strength)
        }

    }

    showStatus() {

        if (this.saxonArmy.length === 0) {
            return 'Vikings have won the war of the century!'
        } else if (this.vikingArmy.length === 0) {
            return 'Saxons have fought for their lives and survived another day...'
        } else if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0) {
            return 'Vikings and Saxons are still in the thick of battle.'

        }
    }

}






