//Creating object for each ship
const USSHELLOWORLD ={
    hull: 20,
    firepower: 5,
    accuracy: .7,
    }
    function getRandom(min,max){
        return Math.floor(Math.random()*(max-min+1)+min);
    }
    function getRandomDecimals(min,max){
        return Math.random()*(max-min)+ min
    }
    class alienShips{
    constructor(name){
    this.name = name
    this.hull = getRandom(3,6)
    this.firepower = getRandom(2,4)
    this.accuracy = getRandomDecimals(.6,.8)
    }
    }
    let alienShip1 = new alienShips("Alien Ship 1")
    let alienShip2 = new alienShips("Alien Ship 2")
    let alienShip3 = new alienShips("Alien Ship 3")
    let alienShip4 = new alienShips("Alien Ship 4")
    let alienShip5 = new alienShips("Alien Ship 5")
    let alienShip6 = new alienShips("Alien Ship 6")
    console.log(alienShip1.hull)
    console.log(alienShip1.accuracy)
    let Enemy = [alienShip1, alienShip2, alienShip3, alienShip4, alienShip5, alienShip6]
    let attacker = document.querySelectorAll(".nameBox")
    let player  = attacker[0].textContent
    attacker[1].textContent = Enemy[0].name
    console.log(attacker[1].textContent)

    // let playerstats = document.querySelector(".playerStats")
    // let enemystats = document.querySelector(".enemyStats")

    function statusUpdate(){
    let playerstats = document.querySelector(".playerStats")
    playerstats.innerHTML = `Hull:${USSHELLOWORLD.hull}<br>
    FirePower:${USSHELLOWORLD.firepower}<br>
    Accuracy:${USSHELLOWORLD.accuracy}<br>`
    let enemystats = document.querySelector(".enemyStats")
    enemystats.innerHTML = `Hull:${Enemy[0].hull}<br>
    FirePower:${Enemy[1].firepower}<br>
    Accuracy:${Enemy[2].accuracy}<br>`
    }
    statusUpdate()
    let i = 0
    let enemyCounter = 1
    let playerCounter = 1
    playerHull = USSHELLOWORLD.hull

    confirm("Our planet is in danger, and you are the chosen one to save it? If you are up to the challenge press ok")
    
    function playerAttack(){
        console.log(`player counter value is ${playerCounter}`)
    if(player && playerHull > 0 && Enemy[i].hull){
        confirm(`Alien Ship ${i+1} is fighting now`)
        accuracyCheck()
        // statusUpdate()
     }
     playerCounter ++;
     enemyAttack()
    }

    function accuracyCheck(){
        if(USSHELLOWORLD.accuracy > Enemy[i].accuracy){
            Enemy[i].hull-=USSHELLOWORLD.firepower
    // statusUpdate()
            confirm(`Way to go you hit Alien Ship ${i+1}, Now its hull is ${Enemy[i].hull}`)
        }else{
            USSHELLOWORLD.hull-=Enemy[i].firepower
            // statusUpdate()
            confirm(`Damn you took a hit now your hull is ${playerHull}`)
    }
    }

    // function enemyAttack(){
    //     console.log(`the enemy counter value is ${enemyCounter}`)
    // confirm(`Alien Ship ${i+1} is attacking now`)
    // if( Enemy[i].hull>0 && playerHull > 0){
    //     accuracyCheck()
    //     statusUpdate()
    //     playerAttack()
    // }else if (playerHull <= 0){
    // confirm("Game Over, player lost")
    //     }
    //     else {(Enemy[i].hull <= 0)
    //         confirm("You are inside game mode variable")
    //         let gameMode =  prompt(`${i+1} Enemy's Ship is destroyed Do you want to retreat or continue? Enter 1 to continue, enter 0 to retreat`)
    //               if(gameMode == "1"){
    //                  i++;
    //                  attacker[1].textContent = Enemy[i].name
    //                  enemyCounter ++;
    //                  playerAttack()
    //                  } else{
    //                  return confirm("You retreated. Good Job!!!")
    //                   }
    //          }
    // }
    // // if(Enemy[i].hull <= 0){
    // //     confirm("You are inside game mode variable")
    // // let gameMode =  prompt(`${i+1} Enemy's Ship is destroyed Do you want to retreat or continue? Enter 1 to continue, enter 0 to retreat`)
    // // if(gameMode == "1"){
    // //      i++;
    // //      attacker[1].textContent = Enemy[i].name
    // //     playerAttack()
    // // }else{
    // // return confirm("You retreated. Good Job!!!")
    // // }
    // function gameMode() {
    //     playerAttack()
    //     // enemyAttack()
    // }
    //     gameMode()









































///////////////////////// my code ///////////////////////////
// // prompt('Hello world')
// let USSHelloworld = {
//     hull: 20,
//     firepower: 5,
//     accuracy: .7,
// }

// function getRandom(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// function getRandomDecimals(min, max) {
//     return Math.random() * (max - min) + min
// }
// class alienShips {
//     constructor(hull, firepower, accuracy, name) {
//         this.name = name;
//         this.hull = getRandom(3, 6)
//         this.firepower = getRandom(2, 4)
//         this.accuracy = getRandomDecimals(.6, .8)
//     }
// }
// let alienShip1 = new alienShips()
// let alienShip2 = new alienShips()
// let alienShip3 = new alienShips()
// let alienShip4 = new alienShips()
// let alienShip5 = new alienShips()
// let alienShip6 = new alienShips()

// console.log(alienShip1.hull)
// console.log(alienShip1.accuracy)
// let Enemy = [alienShip1, alienShip2, alienShip3, alienShip4, alienShip5, alienShip6]
// // let attacker2 = prompt("Please enter enemy ship name")
// let names = document.querySelectorAll(".nameBox")
// let player = names[0].textContent;
// let attacker = names[1].textContent;

// // attacker[1].textContent = attacker2
// // console.log(attacker[1].textContent)
// // let playerstats = document.querySelector(".playerStats")

// // playerstats.innerHTML = `Hull:${USSHelloworld.hull}<br>
// // FirePower:${USSHelloworld.firepower}<br>
// // Accuracy:${USSHelloworld.accuracy}<br>`

// // let enemystats = document.querySelector(".enemyStats")
// // enemystats.innerHTML = `Hull:${Enemy[0].hull}<br>
// // FirePower:${Enemy[0].firepower}<br>
// // Accuracy:${Enemy[0].accuracy}<br>`

// let i = 0
// //j=0;

// while (player && Enemy.length > 0)
// //((player && Enemy.length > 0) && true) 
// {

//     //refreshStats();

//     // alert("click " + j);
//     // j++;

//     const enemyShip = Enemy[i];

    

//     //if (player) {
//         if (USSHelloworld.accuracy > enemyShip.accuracy) {
//             enemyShip.hull -= USSHelloworld.firepower
//         } else {
//             USSHelloworld.hull -= enemyShip.firepower
//         }

//     playerstats = document.querySelector(".playerStats")
//     playerstats.innerHTML = `Hull: ${USSHelloworld.hull} <br> Fire-power: ${USSHelloworld.firepower} <br> Accuracy: ${USSHelloworld.accuracy}`
//     enemystats = document.querySelector(".enemyStats")
//     enemystats.innerHTML = `Hull: ${enemyShip.hull} <br> Fire-power: ${enemyShip.firepower} <br> Accuracy: ${enemyShip.accuracy}`

       
//    // }

//     // if (Enemy[i].hull > 0) {
//     //     //prompt("Enemy is on the roll now")
//     //     if (USSHelloworld.accuracy > Enemy[i].accuracy) {
//     //         Enemy[i].hull -= USSHelloworld.firepower
//     //     } else {
//     //         USSHelloworld.hull -= Enemy[i].firepower
//     //         //prompt("Enemy has being destroyed bring me the next!!")
//     //     }

//         // console.log(Enemy[i].hull)
//         // playerstats = document.querySelector(".playerStats")
//         // playerstats.innerHTML = `Hull: ${USSHelloworld.hull} <br> Fire-power: ${USSHelloworld.firepower} <br> Accuracy: ${USSHelloworld.accuracy}`
//         // enemystats = document.querySelector(".enemyStats")
//         // enemystats.innerHTML = `Hull: ${Enemy[i].hull} <br> Fire-power: ${Enemy[i].firepower} <br> Accuracy: ${Enemy[i].accuracy}`
//     //}

//     if(player.hull > 0 && enemyShip.hull > 0)
//         continue;
//     else if(player.hull <= 0)
//         break;
//     else if(enemyShip.hull <= 0 && i < Enemy.length) {        
//         let gameMode = prompt(`${i} Enemy's Ship is destroyed, Do you want to retreat or continue? Enter 1 to continue, enter 0 to retreat`)
//         if (gameMode == 1) {
//             i++;
//            // alert("its 1")
//         } else {
//             //alert("not 1")
//             break;
//         }
//     }
// }
