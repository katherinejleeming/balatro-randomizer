
//array of decks to store information & provide option to weight the randomizer to deck preference
const decks = [
    {
        name: "Red Deck",
        image: "./images/deck_images/Red_Deck.png",
        weight: 3,
        description: "+1 discard every round."
    },
    {
        name: "Blue Deck",
        image: "./images/deck_images/Blue_Deck.png",
        weight: 3,
        description: "+1 hand every round."
    },
    {
        name: "Yellow Deck",
        image: "./images/deck_images/Yellow_Deck.png",
        weight: 3,
        description: "Start with an extra $10."
    },
    {
        name: "Green Deck",
        image: "./images/deck_images/Green_Deck.png",
        weight: 3,
        description: "You don't earn interest. Instead, gain $2 per remaining Hand and $1 per remaining Discard at the end of each round."
    },
    {
        name: "Black Deck",
        image: "./images/deck_images/Black_Deck.png",
        weight: 3,
        description: "+1 Joker slot, but -1 hand every round."
    },
    {
        name: "Abandoned Deck",
        image: "./images/deck_images/Abandoned_Deck.jpeg",
        weight: 3,
        description: "This deck is smaller than normal as it has no Face Cards in it."
    },
    {
        name: "Anaglyph Deck",
        image: "./images/deck_images/Anaglyph_Deck.jpeg",
        weight: 3,
        description: "After defeating each Boss Blind, gain a Double Tag."
    },
    // {
    //     name: "Challenge Deck",
    //     image: "./images/deck_images/Challenge_Deck.png",
    //     weight: 3,
    //     description: "This back is used for the deck used during Challenge runs."
    // },
    {
        name: "Checkered Deck",
        image: "./images/deck_images/Checkered_Deck.png",
        weight: 3,
        description: "Start run with 26 Spades and 26 Hearts in deck, and no Clubs or Diamonds."
    },
    {
        name: "Erratic Deck",
        image: "./images/deck_images/Erratic_Deck.png",
        weight: 3,
        description: "All Ranks and Suits in deck are randomized."
    },
    {
        name: "Ghost Deck",
        image: "./images/deck_images/Ghost_Deck.png",
        weight: 3,
        description: "Spectral Cards may appear individually in the shop, and you start with a Hex card."
    },
    {
        name: "Magic Deck",
        image: "./images/deck_images/Magic_Deck.png",
        weight: 3,
        description: "Start run with the Crystal Ball voucher and 2 copies of The Fool."
    },
    {
        name: "Nebula Deck",
        image: "./images/deck_images/Nebula_Deck.png",
        weight: 3,
        description: "Start run with the Telescope voucher but -1 consumable slot."
    },
    {
        name: "Painted Deck",
        image: "./images/deck_images/Painted_Deck.png",
        weight: 3,
        description: "+2 Hand Size, -1 Joker Slot."
    },
    {
        name: "Plasma Deck",
        image: "./images/deck_images/Plasma_Deck.png",
        weight: 3,
        description: "Balance Chips and Mult when calculating score for played hand. X2 base Blind size."
    },
    {
        name: "Zodiac Deck",
        image: "./images/deck_images/Zodiac_Deck.png",
        weight: 3,
        description: "Start the run with Tarot Merchant, Planet Merchant, and Overstock vouchers."
    }
  
  ];

//array of stakes to store information & provide option to weight the randomizer to stake preference
const stakes = [
    {
        name: "White Stake",
        image: "./images/stake_images/White_stake.png",
        weight: 3,
        description: "Base Difficulty"
    },
    {
        name: "Red Stake",
        image: "./images/stake_images/Red_stake.png",
        weight: 3,
        description: "Small Blind gives no reward money"
    },
    {
        name: "Green Stake",
        image: "./images/stake_images/Green_stake.png",
        weight: 3,
        description: "Required score scales faster for each Ante"
    },
    {
        name: "Black Stake",
        image: "./images/stake_images/Black_stake.png",
        weight: 3,
        description: "Shop can have Eternal Jokers (Can't be sold or destroyed)"
    },
    {
        name: "Blue Stake",
        image: "./images/stake_images/Blue_stake.png",
        weight: 3,
        description: "-1 Discard"
    },
    {
        name: "Purple Stake",
        image: "./images/stake_images/Purple_stake.png",
        weight: 3,
        description: "Required score scales faster for each Ante"
    },
    {
        name: "Orange Stake",
        image: "./images/stake_images/Orange_stake.png",
        weight: 3,
        description: "Booster Packs cost $1 more per Ante"
    },
    {
        name: "Gold Stake",
        image: "./images/stake_images/Gold_stake.png",
        weight: 3,
        description: "-1 hand size"
    },
];

  // function to randomize a deck incorporating preference 
  function getRandomDeck() {
    const totalWeight = decks.reduce((sum, deck) => sum + deck.weight, 0);
  
    const randomWeight = Math.random() * totalWeight;
  
    let cumulativeWeight = 0;
    for (const deck of decks) {
      cumulativeWeight += deck.weight;
      if (randomWeight < cumulativeWeight) {
        return deck;
        console.log(deck);
      }
    }
  
    return decks[decks.length - 1];
  }

   // function to randomize a deck incorporating preference 
  function getRandomStake() {
    const totalWeight = stakes.reduce((sum, stake) => sum + stake.weight, 0);
  
    const randomWeight = Math.random() * totalWeight;
  
    let cumulativeWeight = 0;
    for (const stake of stakes) {
      cumulativeWeight += stake.weight;
      if (randomWeight < cumulativeWeight) {
        return stake;
        console.log(stake);
      }
    }
    return stakes[stakes.length - 1];
  }
  
  function displayRandomDeck() {
    const outputElement = document.getElementById("outputDeck");
    const deck = getRandomDeck();

  //display image including alt text in case image doesn't load
    const deckImageElement = document.getElementById("deckImage");
    deckImageElement.src = deck.image;
    deckImageElement.alt = deck.name + " Image";
  

    const deckNameElement = document.getElementById("deckName");
    deckNameElement.textContent = deck.name;


    const deckDescriptionElement = document.getElementById("deckDescription");
    deckDescriptionElement.textContent = deck.description;
  }

  function displayRandomStake() {
    const outputElement = document.getElementById("outputStake");
    const stake = getRandomStake();

  //display image including alt text in case image doesn't load
    const stakeImageElement = document.getElementById("stakeImage");
    stakeImageElement.src = stake.image;
    stakeImageElement.alt = stake.name + " Image";
  

    const stakeNameElement = document.getElementById("stakeName");
    stakeNameElement.textContent = stake.name;


    const stakeDescriptionElement = document.getElementById("stakeDescription");
    stakeDescriptionElement.textContent = stake.description;
  }
  // action to utilise functions
  document.getElementById("randomButton").addEventListener("click", function() {
    displayRandomDeck();
    displayRandomStake();
});

  function playMusic(){
    var music = new Audio('randomize_sound.mp3');
    music.play();
    }
