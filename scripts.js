class AttackShip {
    constructor(name,type,hitPoints,damage){
        this.name = name;
        this.type = type;
        this.hitPoints = hitPoints;
        this.damage = damage;
        this.isAlive = true;
    }
    minusHitpoints() {
        this.hitPoints -= this.damage;
        this.updateShip()
    }
    updateShip() {
        document.getElementById(this.name).innerHTML = `<p id='${this.name}' >${this.name} : ${this.hitPoints}</p>`;
    }
    displayShip() {
        document.getElementById(this.type).innerHTML += `<p id='${this.name}' >${this.name} : ${this.hitPoints}</p>`;
    }
    isALive() {
        this.hitPoints <= 0 ? document.getElementById(this.name).style.display = "none" : null;
    }
}

class Defenceship extends AttackShip {
    constructor(name,type,hitPoints,damage){
        super(name,type,hitPoints,damage);
    }
}

class MotherShip extends AttackShip {
    constructor(name,type,hitPoints,damage){
        super(name,type,hitPoints,damage);
    }

}

const shipArray = [];
let shipArrayLength = shipArray.length;
const attackShipBuilder = [0,1,2,3,4];
const defenceShipBuilder = [0,1,2,3,4,5,6,7];

attackShipBuilder.forEach( number => shipArray.push(new AttackShip(("A" + number),"attack",45, 12)));
defenceShipBuilder.forEach( number => shipArray.push(new Defenceship(("D" + number),"defence",80, 10)));
shipArray.push(new MotherShip("M","mothership",100, 9))
shipArray.forEach(ship => ship.displayShip());

const shootShip = (shipType) => shipType.minusHitpoints();    
const checkAlive = (shipType) => shipType.isALive();
const randomNumber = () => Math.floor(Math.random() * shipArray.length);

const fireButton = () => {
    const damageShip = randomNumber();
    shootShip(shipArray[damageShip]);
    checkAlive(shipArray[damageShip]);
    checkMotherShip();
}

const destoryAll = () => shipArray.forEach(ship => { 
    ship.hitPoints = 0; 
    ship.isALive();})

const checkMotherShip = () => shipArray[shipArrayLength].hitPoints <= 0 ? destoryAll() : null;

checkMotherShip();