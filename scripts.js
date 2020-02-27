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
let shipArray = [];
const attackShipBuilder = [0,1,2,3,4];
const defenceShipBuilder = [0,1,2,3,4,5,6,7];
let shipArrayLength;
const clearGame = () => { 
    document.getElementById("mothership").innerHTML = "";
    document.getElementById("attack").innerHTML = "";
    document.getElementById("defence").innerHTML = "";
}
const newGame = () => {
    clearGame();
    shipArray = [];
    attackShipBuilder.forEach( number => shipArray.push(new AttackShip(("A" + number),"attack",45, 12)));
    defenceShipBuilder.forEach( number => shipArray.push(new Defenceship(("D" + number),"defence",80, 10)));
    shipArray.push(new MotherShip("M","mothership",100, 9));
    shipArrayLength = shipArray.length;
    shipArray.forEach(ship => ship.displayShip());
    document.getElementById("button").classList.toggle("hide");
    document.querySelector("header").classList.toggle("hide");
}
const shootShip = (shipType) => shipType.minusHitpoints();    
const checkAlive = (shipType) => shipType.isALive();
const randomNumber = () => Math.floor(Math.random() * shipArray.length);
const destoryAll = () => {
    shipArray.forEach(ship => {ship.hitPoints = 0; ship.isALive();});
    document.getElementById("button").classList.toggle("hide");
    document.querySelector("header").classList.toggle("hide");
}
const checkMotherShip = () => shipArray[shipArrayLength-1].hitPoints <= 0 ? destoryAll() : null;
const fireButton = () => {
    const damageShip = randomNumber();
    shootShip(shipArray[damageShip]);
    checkAlive(shipArray[damageShip]);
    checkMotherShip();
}