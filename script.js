// Importing from the DOM

let laptopIcon = document.body.querySelector("#laptopIcon");
let clickPowerParagraph = document.body.querySelector("#clickPowerParagraph");
let currentCharParagraph = document.body.querySelector("#currentCharParagraph");
let charPerSecondParagraph = document.body.querySelector("#charPerSecondParagraph");
let userLevelProgressBar = document.body.querySelector("#userLevelProgressBar");
let userLevelParagraph = document.body.querySelector("#userLevelParagraph");
let developerOneParagraph = document.body.querySelector("#developerOneParagraph");
let developerTwoParagraph = document.body.querySelector("#developerTwoParagraph");
let developerThreeParagraph = document.body.querySelector("#developerThreeParagraph");
let developerFourParagraph = document.body.querySelector("#developerFourParagraph");
let developerFiveParagraph = document.body.querySelector("#developerFiveParagraph");
let developerSixParagraph = document.body.querySelector("#developerSixParagraph");
let developerSevenParagraph = document.body.querySelector("#developerSevenParagraph");
let developerEightParagraph = document.body.querySelector("#developerEightParagraph");
let developerNineParagraph = document.body.querySelector("#developerNineParagraph");
let developerTenParagraph = document.body.querySelector("#developerTenParagraph");
let developerElevenParagraph = document.body.querySelector("#developerElevenParagraph");
let developerOneImage = document.body.querySelector("#developerOneImage");
let developerTwoImage = document.body.querySelector("#developerTwoImage");
let developerThreeImage = document.body.querySelector("#developerThreeImage");
let developerFourImage = document.body.querySelector("#developerFourImage");
let developerFiveImage = document.body.querySelector("#developerFiveImage");
let developerSixImage = document.body.querySelector("#developerSixImage");
let developerSevenImage = document.body.querySelector("#developerSevenImage");
let developerEightImage = document.body.querySelector("#developerEightImage");
let developerNineImage = document.body.querySelector("#developerNineImage");
let developerTenImage = document.body.querySelector("#developerTenImage");
let developerElevenImage = document.body.querySelector("#developerElevenImage");


// Main game objects


// Player

let player = {
    clickPower : 1,
    charPerSecond : 0,
    experience : 0,
    experienceRequired : 25,
    experienceMultiplier : 1,
    level : 1,
    rankTitle : "Student Developer",
    rankTitlesArray : [
        "Student Developer",
        "Intern Developer",
        "Trainee Developer",
        "Full-time Developer",
        "Senior Developer",
        "Team Leader Developer",
        "Veteran Developer",
        "Alien Developer",
        "God Developer",
    ],

    attack() {
        let bonusFromCps = (player.charPerSecond * 0.2);
        inventory.currentChars += Math.round(player.clickPower + bonusFromCps);
        player.experience += (player.clickPower * player.experienceMultiplier);
        while (player.experience >= player.experienceRequired) {
            player.levelUp();
        }
        currentCharParagraph.textContent = inventory.currentChars;
        userLevelProgressBar.value = player.experience;
    },

    levelUp() {
        player.experience -= player.experienceRequired;
        player.experienceRequired *= 1.02;
        player.level ++;
        if (player.level == 5 || player.level == 10 || player.level == 25 || player.level == 50 || player.level == 70 || player.level == 100 || player.level == 150 || player.level == 200) {
            player.rankTitle = player.rankTitlesArray[ player.rankTitlesArray.indexOf(player.rankTitle) + 1];
            console.log("Reached");
        }
        userLevelParagraph.textContent = "Lv " + player.level + "  -  " + player.rankTitle;
        userLevelProgressBar.max = player.experienceRequired;
    }
}


// Inventory

let inventory = {
    currentChars : 0,
    currentPrograms : 0,
}


// Developers

class Developer  {

    constructor(name , isActive , level , charPerSecond , price , charMultiplier , domParagraph) {
        this.name = name;
        this.isActive = isActive;
        this.level = level;
        this.charPerSecond = charPerSecond;
        this.price = price;
        this.charMultiplier = charMultiplier;
        this.domParagraph = domParagraph;
    }
    levelUp() {
        if (inventory.currentChars >= this.price) {
            if (!this.isActive) {
                this.isActive = true;
                player.charPerSecond += this.charPerSecond;
            }
            inventory.currentChars -= this.price;
            currentCharParagraph.textContent = inventory.currentChars;
            ++ this.level;
            player.charPerSecond -= this.charPerSecond;
            if (this.level == 5 || 10 || 25 || 50 || 75 || 100) {
                this.charPerSecond = Math.round(1.05 * (this.charPerSecond * this.charMultiplier))
                this.price = Math.floor(this.price * 1.4);
            } else {
                this.charPerSecond = Math.round((this.charPerSecond * this.charMultiplier));
                this.price = Math.floor(this.price * 1.3);
            }
            player.charPerSecond += this.charPerSecond;
            clickPowerParagraph.textContent = "Click power: " + Math.round(player.clickPower + (this.charPerSecond * 0.2));
            charPerSecondParagraph.textContent = "Total CPS: " + Math.round(player.charPerSecond);
            this.domParagraph.innerHTML = "Lv " + this.level + " - " + this.name + "</br> <strong>Cost: " + this.price + "</strong> </br> </br> <em>CPS: " + this.charPerSecond + "</em></em>";
        }
    }
}

let developerOne = new Developer( "Steve" , false , 0 , 2 , 50 , 1.2 , developerOneParagraph);
let developerTwo = new Developer( "John" , false , 0 , 13 , 500 , 1.2 , developerTwoParagraph);
let developerThree = new Developer( "Lauren" , false , 0 , 30 , 2500 , 1.2 , developerThreeParagraph);
let developerFour = new Developer( "Greg" , false , 0 , 50 , 5000 , 1.2 , developerFourParagraph);
let developerFive = new Developer( "Sarah" , false , 0 , 150 , 25000 , 1.2 , developerFiveParagraph);
let developerSix = new Developer( "Mike" , false , 0 , 400 , 100000 , 1.2 , developerSixParagraph);
let developerSeven = new Developer( "Chris" , false , 0 , 750 , 500000 , 1.2 , developerSevenParagraph);
let developerEight = new Developer( "Angela" , false , 0 , 1250 , 2500000 , 1.2 , developerEightParagraph);
let developerNine = new Developer( "Ryan" , false , 0 , 2100 , 10000000 , 1.2 , developerNineParagraph);
let developerTen = new Developer( "Claire" , false , 0 , 3700 , 50000000 , 1.2 , developerTenParagraph);
let developerEleven = new Developer( "Bill" , false , 0 , 7000 , 500000000 , 1.2 , developerElevenParagraph);


// Game loop

setInterval(() => {
    updateCharPerSecond();
} , 1000)

updateCharPerSecond = () => {
    inventory.currentChars = Math.round(inventory.currentChars + player.charPerSecond);
    currentCharParagraph.textContent = inventory.currentChars;
}


// Event listeners & DOM


// Laptop

laptopIcon.addEventListener("click" , function() {
    player.attack();
});

// Developers

developerOneImage.addEventListener("click" , function() {
    developerOne.levelUp();
})
developerTwoImage.addEventListener("click" , function() {
    developerTwo.levelUp();
})
developerThreeImage.addEventListener("click" , function() {
    developerThree.levelUp();
})
developerFourImage.addEventListener("click" , function() {
    developerFour.levelUp();
})
developerFiveImage.addEventListener("click" , function() {
    developerFive.levelUp();
})
developerSixImage.addEventListener("click" , function() {
    developerSix.levelUp();
})
developerSevenImage.addEventListener("click" , function() {
    developerSeven.levelUp();
})
developerEightImage.addEventListener("click" , function() {
    developerEight.levelUp();
})
developerNineImage.addEventListener("click" , function() {
    developerNine.levelUp();
})
developerTenImage.addEventListener("click" , function() {
    developerTen.levelUp();
})
developerElevenImage.addEventListener("click" , function() {
    developerEleven.levelUp();
})


// Testing area - NOT PART OF THE CODE

let repeatCall = (toCall , times) => {
    for (let i = 0; i <= times; i++) {
        toCall();
    }
}

laptopIcon.addEventListener("click" , function() {
    repeatCall(player.attack , 100);
});