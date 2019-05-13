// Importing from the DOM

const laptopIcon = document.body.querySelector("#laptopIcon");
const clickPowerParagraph = document.body.querySelector("#clickPowerParagraph");
const xpMultiplierParagraph = document.body.querySelector(
  "#xpMultiplierParagraph"
);
const currentCharParagraph = document.body.querySelector(
  "#currentCharParagraph"
);
const charPerSecondParagraph = document.body.querySelector(
  "#charPerSecondParagraph"
);
const userLevelProgressBar = document.body.querySelector(
  "#userLevelProgressBar"
);
const userLevelParagraph = document.body.querySelector("#userLevelParagraph");
const developerOneParagraph = document.body.querySelector(
  "#developerOneParagraph"
);
const developerTwoParagraph = document.body.querySelector(
  "#developerTwoParagraph"
);
const developerThreeParagraph = document.body.querySelector(
  "#developerThreeParagraph"
);
const developerFourParagraph = document.body.querySelector(
  "#developerFourParagraph"
);
const developerFiveParagraph = document.body.querySelector(
  "#developerFiveParagraph"
);
const developerSixParagraph = document.body.querySelector(
  "#developerSixParagraph"
);
const developerSevenParagraph = document.body.querySelector(
  "#developerSevenParagraph"
);
const developerEightParagraph = document.body.querySelector(
  "#developerEightParagraph"
);
const developerNineParagraph = document.body.querySelector(
  "#developerNineParagraph"
);
const developerTenParagraph = document.body.querySelector(
  "#developerTenParagraph"
);
const developerElevenParagraph = document.body.querySelector(
  "#developerElevenParagraph"
);
const developerOneImage = document.body.querySelector("#developerOneImage");
const developerTwoImage = document.body.querySelector("#developerTwoImage");
const developerThreeImage = document.body.querySelector("#developerThreeImage");
const developerFourImage = document.body.querySelector("#developerFourImage");
const developerFiveImage = document.body.querySelector("#developerFiveImage");
const developerSixImage = document.body.querySelector("#developerSixImage");
const developerSevenImage = document.body.querySelector("#developerSevenImage");
const developerEightImage = document.body.querySelector("#developerEightImage");
const developerNineImage = document.body.querySelector("#developerNineImage");
const developerTenImage = document.body.querySelector("#developerTenImage");
const developerElevenImage = document.body.querySelector(
  "#developerElevenImage"
);
const upgradeOneParagraph = document.body.querySelector("#upgradeOneParagraph");
const upgradeTwoParagraph = document.body.querySelector("#upgradeTwoParagraph");
const upgradeThreeParagraph = document.body.querySelector(
  "#upgradeThreeParagraph"
);
const upgradeFoureParagraph = document.body.querySelector(
  "#upgradeFourParagraph"
);
const upgradeFiveParagraph = document.body.querySelector(
  "#upgradeFiveParagraph"
);
const upgradeSixParagraph = document.body.querySelector("#upgradeSixParagraph");
const upgradeSevenParagraph = document.body.querySelector(
  "#upgradeSevenParagraph"
);
const upgradeEightParagraph = document.body.querySelector(
  "#upgradeEightParagraph"
);
const upgradeOneImage = document.body.querySelector("#upgradeOneImage");
const upgradeTwoImage = document.body.querySelector("#upgradeTwoImage");
const upgradeThreeImage = document.body.querySelector("#upgradeThreeImage");
const upgradeFoureImage = document.body.querySelector("#upgradeFourImage");
const upgradeFiveImage = document.body.querySelector("#upgradeFiveImage");
const upgradeSixImage = document.body.querySelector("#upgradeSixImage");
const upgradeSevenImage = document.body.querySelector("#upgradeSevenImage");
const upgradeEightImage = document.body.querySelector("#upgradeEightImage");

// Main game objects

// Player

let player = {
  clickPower: 1,
  clickPowerMultiplier: 1,
  isAutoClickActive: false,
  clickAutoSpeed: 1000,
  charPerSecond: 0,
  charPerSecondMultiplier: 1,
  idleXpSpeed: 1000,
  idleCharSpeed: 1000,
  experience: 0,
  experienceRequired: 25,
  experienceMultiplier: 1,
  level: 1,
  rankTitle: "Student Developer",
  rankTitlesArray: [
    "Student Developer",
    "Intern Developer",
    "Trainee Developer",
    "Full-time Developer",
    "Senior Developer",
    "Team Leader Developer",
    "Veteran Developer",
    "Alien Developer",
    "God Developer"
  ],

  attack() {
    let bonusFromCps = player.charPerSecond * 0.2;
    inventory.currentChars += Math.round(
      (player.clickPower + bonusFromCps) * player.clickPowerMultiplier
    );
    player.experience += player.clickPower * player.experienceMultiplier;
    while (player.experience >= player.experienceRequired) {
      player.levelUp();
    }
    currentCharParagraph.textContent = inventory.currentChars;
    userLevelProgressBar.value = player.experience;
  },

  levelUp() {
    player.experience -= player.experienceRequired;
    player.experienceRequired *= 1.05;
    player.level++;
    if (
      player.level == 5 ||
      player.level == 10 ||
      player.level == 25 ||
      player.level == 100 ||
      player.level == 200 ||
      player.level == 300 ||
      player.level == 400 ||
      player.level == 500
    ) {
      player.rankTitle =
        player.rankTitlesArray[
          player.rankTitlesArray.indexOf(player.rankTitle) + 1
        ];
      console.log("Reached");
    }
    userLevelParagraph.textContent =
      "Lv " + player.level + "  -  " + player.rankTitle;
    userLevelProgressBar.max = player.experienceRequired;
  }
};

// Inventory

let inventory = {
  currentChars: 0,
  currentPrograms: 0,
  developerDiscountMultiplier: 1
};

// Developers

class Developer {
  constructor(
    name,
    isActive,
    level,
    charPerSecond,
    price,
    charMultiplier,
    domParagraph
  ) {
    this.name = name;
    this.isActive = isActive;
    this.level = level;
    this.charPerSecond = charPerSecond;
    this.price = price;
    this.charMultiplier = charMultiplier;
    this.domParagraph = domParagraph;
  }

  static updateAllUserInterfaces() {
    developerOne.updateUserInterface();
    developerTwo.updateUserInterface();
    developerThree.updateUserInterface();
    developerFour.updateUserInterface();
    developerFive.updateUserInterface();
    developerSix.updateUserInterface();
    developerSeven.updateUserInterface();
    developerEight.updateUserInterface();
    developerNine.updateUserInterface();
    developerTen.updateUserInterface();
    developerEleven.updateUserInterface();
  }

  levelUp() {
    if (
      inventory.currentChars >=
      this.price * inventory.developerDiscountMultiplier
    ) {
      if (!this.isActive) {
        this.isActive = true;
        ++this.level;
        inventory.currentChars -= Math.round(
          this.price * inventory.developerDiscountMultiplier
        );
        player.charPerSecond +=
          this.charPerSecond * player.charPerSecondMultiplier;
        currentCharParagraph.textContent = inventory.currentChars;
        this.price = Math.floor(
          this.price * 1.3 * inventory.developerDiscountMultiplier
        );
        Developer.updateAllUserInterfaces();
      } else {
        inventory.currentChars -= Math.round(
          this.price * inventory.developerDiscountMultiplier
        );
        currentCharParagraph.textContent = inventory.currentChars;
        ++this.level;
        player.charPerSecond -=
          this.charPerSecond * player.charPerSecondMultiplier;
        if (
          this.level == 5 ||
          this.level == 10 ||
          this.level == 25 ||
          this.level == 50 ||
          this.level == 100
        ) {
          this.charPerSecond = Math.round(
            1.01 * (this.charPerSecond * this.charMultiplier)
          );
          this.price = Math.floor(
            this.price * 1.5 * inventory.developerDiscountMultiplier
          );
        } else {
          this.charPerSecond = Math.round(
            this.charPerSecond * this.charMultiplier
          );
          this.price = Math.floor(
            this.price * 1.3 * inventory.developerDiscountMultiplier
          );
        }
        player.charPerSecond +=
          this.charPerSecond * player.charPerSecondMultiplier;
        player.clickPower = player.clickPower + this.charPerSecond * 0.1;
        clickPowerParagraph.textContent =
          "Click power: " +
          Math.round(player.clickPower * player.clickPowerMultiplier);
        charPerSecondParagraph.textContent =
          "Total CPS: " +
          Math.round(player.charPerSecond * player.charPerSecondMultiplier);
        Developer.updateAllUserInterfaces();
      }
    }
  }

  updateUserInterface() {
    this.domParagraph.innerHTML =
      "Lv " +
      this.level +
      " - " +
      this.name +
      "</br> <strong>Cost: " +
      Math.round(this.price * inventory.developerDiscountMultiplier) +
      "</strong> </br> </br> <em>CPS: " +
      Math.round(this.charPerSecond * player.charPerSecondMultiplier) +
      "</em></em>";
  }
}

let developerOne = new Developer(
  "Steve",
  false,
  0,
  2,
  50,
  1.3,
  developerOneParagraph
);
let developerTwo = new Developer(
  "John",
  false,
  0,
  13,
  500,
  1.4,
  developerTwoParagraph
);
let developerThree = new Developer(
  "Lauren",
  false,
  0,
  30,
  2500,
  1.5,
  developerThreeParagraph
);
let developerFour = new Developer(
  "Greg",
  false,
  0,
  50,
  5000,
  1.6,
  developerFourParagraph
);
let developerFive = new Developer(
  "Sarah",
  false,
  0,
  150,
  25000,
  1.7,
  developerFiveParagraph
);
let developerSix = new Developer(
  "Mike",
  false,
  0,
  400,
  100000,
  1.8,
  developerSixParagraph
);
let developerSeven = new Developer(
  "Chris",
  false,
  0,
  750,
  500000,
  1.9,
  developerSevenParagraph
);
let developerEight = new Developer(
  "Angela",
  false,
  0,
  1250,
  2500000,
  2,
  developerEightParagraph
);
let developerNine = new Developer(
  "Ryan",
  false,
  0,
  2100,
  10000000,
  2.1,
  developerNineParagraph
);
let developerTen = new Developer(
  "Claire",
  false,
  0,
  3700,
  50000000,
  2.2,
  developerTenParagraph
);
let developerEleven = new Developer(
  "Bill",
  false,
  0,
  7000,
  500000000,
  2.3,
  developerElevenParagraph
);

// Upgrades

class Upgrade {
  constructor(name, isUnlocked, level, price, domParagraph, description) {
    this.name = name;
    this.isUnlocked = isUnlocked;
    this.level = level;
    this.price = price;
    this.domParagraph = domParagraph;
    this.description = description;
  }

  levelUp() {
    if (inventory.currentChars >= this.price) {
      if (!this.isUnlocked) {
        this.isUnlocked = true;
      }
      this.level++;
      inventory.currentChars -= this.price;
      this.price *= 10;
      this.domParagraph.innerHTML =
        "Lv " +
        this.level +
        " - " +
        this.name +
        " </br> <strong>Cost: " +
        this.price +
        "</strong> </br> </br> <em>" +
        this.description +
        "</em>";
      if (this.name == "Coding skills") {
        this.upgradeClickPower();
      } else if (this.name == "Night shifts") {
        this.upgradeCharPerSecond();
      } else if (this.name == "Team meetings") {
        this.upgradeXpGain();
      } else if (this.name == "Better salaries") {
        this.upgradeIdleCharSpeed();
      } else if (this.name == "Maths studies") {
        this.upgradeIdleXpSpeed();
      } else if (this.name == "Networking") {
        this.upgradeDeveloperCost();
      } else if (this.name == "Bug fixing") {
        this.upgradeAutoClicker();
      }
    }
  }

  upgradeClickPower() {
    player.clickPowerMultiplier += 0.3;
    player.clickPower += Math.pow(5, upgradeOne.level);
    clickPowerParagraph.textContent =
      "Click power: " +
      Math.round(player.clickPower * player.clickPowerMultiplier);
  }

  upgradeCharPerSecond() {
    player.charPerSecondMultiplier += 0.01;
    Developer.updateAllUserInterfaces();
  }

  upgradeXpGain() {
    player.experienceMultiplier += 0.1;
    xpMultiplierParagraph.textContent =
      "XP Multiplier: " + Math.round(player.experienceMultiplier * 10) / 10;
  }

  upgradeIdleCharSpeed() {
    player.idleCharSpeed -= 75;
    clearInterval(activateCharPerSec);
    activateCharPerSec();
  }

  upgradeIdleXpSpeed() {
    player.idleXpSpeed -= 75;
    clearInterval(activateXpPerSec);
    activateXpPerSec();
  }

  upgradeDeveloperCost() {
    inventory.developerDiscountMultiplier -= 0.05;
    Developer.updateAllUserInterfaces();
  }

  upgradeAutoClicker() {
    if (!player.isAutoClickActive) {
      player.isAutoClickActive = true;
      activateAutoClick();
    } else {
      player.clickAutoSpeed -= 100;
      clearInterval(activateCharPerSec);
      activateAutoClick();
    }
  }
}

let upgradeOne = new Upgrade(
  "Coding skills",
  false,
  0,
  20,
  upgradeOneParagraph,
  "Increases click power!"
);
let upgradeTwo = new Upgrade(
  "Night shifts",
  false,
  0,
  20,
  upgradeTwoParagraph,
  "Better developer CPS!"
);
let upgradeThree = new Upgrade(
  "Team meetings",
  false,
  0,
  20,
  upgradeThreeParagraph,
  "Increase XP Gain!"
);
let upgradeFour = new Upgrade(
  "Better salaries",
  false,
  0,
  20,
  upgradeFourParagraph,
  "Developers code faster!"
);
let upgradeFive = new Upgrade(
  "Maths studies",
  false,
  0,
  20,
  upgradeFiveParagraph,
  "Faster passive XP!"
);
let upgradeSix = new Upgrade(
  "Networking",
  false,
  0,
  20,
  upgradeSixParagraph,
  "Reduce dev costs!"
);
let upgradeSeven = new Upgrade(
  "Bug fixing",
  false,
  0,
  20,
  upgradeSevenParagraph,
  "Faster auto click"
);
let upgradeEight = new Upgrade(
  "Go home",
  false,
  0,
  20,
  upgradeEightParagraph,
  "Restart with a gift!"
);

// Game loop

let activateCharPerSec = () => {
  setInterval(() => {
    addCharPerSecond();
  }, player.idleCharSpeed);
};

activateCharPerSec();

let activateXpPerSec = () => {
  setInterval(() => {
    addXpPerSecond();
  }, player.idleXpSpeed);
};

activateXpPerSec();

let activateAutoClick = () => {
  setInterval(() => {
    addClickPerSecond();
  }, player.clickAutoSpeed);
};

addCharPerSecond = () => {
  inventory.currentChars = Math.round(
    inventory.currentChars + player.charPerSecond
  );
  currentCharParagraph.textContent = Math.round(inventory.currentChars);
};

addXpPerSecond = () => {
  player.experience += player.clickPower * player.experienceMultiplier * 0.15;
  if (player.experience >= player.experienceRequired) {
    player.levelUp();
    userLevelProgressBar.value = player.experience;
  } else {
    userLevelProgressBar.value = player.experience;
  }
};

addClickPerSecond = () => {
  player.attack();
};

// Event listeners & DOM

// Laptop

laptopIcon.addEventListener("click", function() {
  player.attack();
});

// Developers

developerOneImage.addEventListener("click", function() {
  developerOne.levelUp();
});
developerTwoImage.addEventListener("click", function() {
  developerTwo.levelUp();
});
developerThreeImage.addEventListener("click", function() {
  developerThree.levelUp();
});
developerFourImage.addEventListener("click", function() {
  developerFour.levelUp();
});
developerFiveImage.addEventListener("click", function() {
  developerFive.levelUp();
});
developerSixImage.addEventListener("click", function() {
  developerSix.levelUp();
});
developerSevenImage.addEventListener("click", function() {
  developerSeven.levelUp();
});
developerEightImage.addEventListener("click", function() {
  developerEight.levelUp();
});
developerNineImage.addEventListener("click", function() {
  developerNine.levelUp();
});
developerTenImage.addEventListener("click", function() {
  developerTen.levelUp();
});
developerElevenImage.addEventListener("click", function() {
  developerEleven.levelUp();
});

// Upgrades

upgradeOneImage.addEventListener("click", function() {
  upgradeOne.levelUp();
});
upgradeTwoImage.addEventListener("click", function() {
  upgradeTwo.levelUp();
});
upgradeThreeImage.addEventListener("click", function() {
  upgradeThree.levelUp();
});
upgradeFourImage.addEventListener("click", function() {
  upgradeFour.levelUp();
});
upgradeFiveImage.addEventListener("click", function() {
  upgradeFive.levelUp();
});
upgradeSixImage.addEventListener("click", function() {
  upgradeSix.levelUp();
});
upgradeSevenImage.addEventListener("click", function() {
  upgradeSeven.levelUp();
});

/* Test area - NOT PART OF THE CODE.


let repeatCall = (toCall , times) => {
    for (let i = 0; i <= times; i++) {
        toCall();
    }
}

laptopIcon.addEventListener("click" , function() {
    repeatCall(player.attack , 1500);
});
*/
