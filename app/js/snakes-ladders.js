/* Constants */
// BOARD[0] is the player's current position
// BOARD[n] corresponds to HTML tile with the same id
// Value of BOARD[n] is the next tile the player should move to if they land on tile n
const BOARD = [];
const FLAVOR_TEXT = [];
const BOARD_SIZE = 100;
// Text displayed on the active tile (the player's current position)
const ACTIVE_TEXT = `<div id="activeText"><span class="hereText">you are here</span>
                    <span class="rollText">roll the die? 🎲</span></div>`;

/* Function Definitons */
// Initialize BOARD with position values
function populate(arr, size) {
    arr.push(1);
    for (let i = 1; i <= size; i++) {
        arr.push(i);
    }
}

// Change initial values in BOARD and FLAVOR_TEXT to match the Behance design
function customize() {
    BOARD[2] = 41;
    FLAVOR_TEXT[2] = "It's love at first sight! Cupid's arrow sends you straight to square 41."
    BOARD[3] = 25;
    FLAVOR_TEXT[3] = "You're not gonna find someone if you don't put yourself out there! Maybe square 25 will loosen you up.";
    BOARD[5] = 1;
    FLAVOR_TEXT[5] = "It's been a month and they still haven't texted. Back to square 1!"
    //BOARD[6] = ;
    BOARD[8] = 31;
    FLAVOR_TEXT[8] = "A secret admirer has sent you chocolates and flowers, shooting you to square 31!";
    BOARD[9] = 10;
    FLAVOR_TEXT[9] = "You feel you've found your other half in square 10. 😍"
    BOARD[11] = 12;
    FLAVOR_TEXT[11] = "Someone sends you flowers and a one-square move forward."
    BOARD[14] = 20;
    FLAVOR_TEXT[14] = "You decide to stay in, and the extra rest and relaxation propels you to square 20."
    BOARD[17] = 39;
    FLAVOR_TEXT[17] = "Your astrologer says you and your crush are compatible. Proceed to square 39!";
    BOARD[18] = 16;
    FLAVOR_TEXT[18] = "What has love done to you? You hardly recognize yourself. Go 2 squares back!";
    BOARD[19] = 20;
    FLAVOR_TEXT[19] = "Rereading your diary gives you insight to your love life, progressing you a square.";
    BOARD[21] = 41;
    FLAVOR_TEXT[21] = "Serenaded by your loved one, the force of your emotions sends you up to square 41."
    //BOARD[24] = ;
    BOARD[27] = 20;
    FLAVOR_TEXT[27] = "Time for some self reflection. Go back to square 20."
    BOARD[28] = 75;
    FLAVOR_TEXT[28] = "You decide to move in together and a year is gone before you know it. You wake up to reality on square 75.";
    BOARD[35] = 67;
    FLAVOR_TEXT[35] = "Ay caliente! 🌶 Sparks send you flying to square 67."
    BOARD[36] = 15;
    FLAVOR_TEXT[36] = "A fight sends you back to square 15. But don't worry, it's just a hiccup, right?";
    BOARD[37] = 57;
    FLAVOR_TEXT[37] = "It's time to get out of bed! Move on to square 57.";
    BOARD[38] = 32;
    FLAVOR_TEXT[38] = "You want to make it official, but they want to keep it a secret. Talk it out on square 32."
    BOARD[43] = 1;
    FLAVOR_TEXT[43] = "You decide to take a break from dating, and start back up again on square 1."
    BOARD[45] = 20;
    FLAVOR_TEXT[45] = "It takes two to be toxic! Go back to square 20."
    BOARD[46] = 88;
    FLAVOR_TEXT[46] = "Pregnancy scare! 😱 Move to square 88 to contemplate your life choices.";
    BOARD[49] = 76;
    FLAVOR_TEXT[49] = "Your style catches someone's eye, and you leave the party to get drinks on square 76.";
    BOARD[50] = 94;
    FLAVOR_TEXT[50] = "A secret admirer sent you a love letter! Move to square 94 and write one back.";
    BOARD[55] = 71;
    FLAVOR_TEXT[55] = "You have a magical night out that ends on square 71.";
    BOARD[58] = 85;
    FLAVOR_TEXT[58] = "You've been waiting for this call! Get a move on to square 85.";
    BOARD[61] = 48;
    FLAVOR_TEXT[61] = "Your relationship has turned into dependence. This throws you back to square 48.";
    BOARD[62] = 42;
    FLAVOR_TEXT[62] = "You find yourself in a love triangle and need time to sort it out. Go back to square 42.";
    BOARD[68] = 87;
    FLAVOR_TEXT[68] = "You buy a present at a sex shop. It has a happy ending on square 87.";
    BOARD[69] = 96;
    FLAVOR_TEXT[69] = "Yes, yes, it's square 69. But to be discreet, I'm sending you to square 96.";
    BOARD[70] = 71;
    FLAVOR_TEXT[70] = "You spend a romantic night under the stars on square 71.";
    BOARD[74] = 32;
    FLAVOR_TEXT[74] = "You've become the object of gossip! Maybe next time you won't kiss and tell?";
    BOARD[83] = 98;
    FLAVOR_TEXT[83] = "An unusually fancy date ends with a surprise on square 98!"
    BOARD[84] = 48;
    FLAVOR_TEXT[84] = "You've read a letter that wasn't addressed to you. Clean up the mess on square 48.";
    BOARD[90] = 51;
    FLAVOR_TEXT[90] = "A wild night out leaves you dazed on square 51."
    BOARD[92] = 72;
    FLAVOR_TEXT[92] = "After a night out at the bar, you come home in the morning to a scolding, sending you back to square 72.";
    BOARD[93] = 51;
    FLAVOR_TEXT[93] = "You drank too much and ran your mouth. Sleep it off and start a new day on square 51."
    BOARD[95] = 56;
    FLAVOR_TEXT[95] = "Your nostalgia for a past love sends you back to square 56."
    BOARD[99] = 81;
    FLAVOR_TEXT[99] = "Are you sure you're ready to commit? Let's reassess on square 81.";
}

function generateTileHTML() {
    // Generate array of tile HTML elements in correct order
    let tiles = [];
    for (let i = 10; i >= 1; i--) {
        let row = [];
        for (let j = 0; j < 10; j++) {
            let id = 10 * i - j;
            let tile = `<div class="tile" id="${id}"><img src="../../assets/snakes-ladders/${id}.png"></div>`;
            if (i % 2 === 0) {
                // Add tiles in descending order (100, 99, 98...)
                row.push(tile);
            } else {
                // Add tiles in ascending order (81, 82, 83...)
                row.unshift(tile);
            }
        }
        tiles = tiles.concat(row);
    }

    // Add tiles inside the board element
    const boardElement = document.getElementsByClassName("board")[0];
    for (let i = 0; i < tiles.length; i++) {
        boardElement.innerHTML += tiles[i];
    }
}

// Return a random integer between 1 and 6 (inclusive)
function roll() {
    return 1 + Math.floor(Math.random() * 6);
}

// Rolls a die and moves the player to a new position; called when the player clicks on the active tile
function takeTurn() {
    let rolled = roll();
    alert("🎲 You rolled a " + rolled + "!");
    let current = BOARD[0];
    let next = current + rolled;
    if (next <= BOARD_SIZE) {
        updateActiveTile(current, next);
    } else {
        alert(`Too bad, you need a ${BOARD_SIZE - current} to win.`);
    }
    if (next === BOARD_SIZE) {
        alert("You win!");
        const videoHash = (rolled % 2 === 0) ? "Qc7_zRjH808" : "w9m6cwAU384";
        location.href = `https://www.youtube.com/watch_popup?v=${videoHash}&autoplay=1`
    }
    return BOARD[0];
}

// For any tile that is a snake or ladder and has flavor text, display an additional alert on mouseover, then move the player to the final position
function mouseover() {
    const position = BOARD[0];
    if (position != BOARD[position]) {
        alert(FLAVOR_TEXT[position]);
        updateActiveTile(position, BOARD[position]);
    }
}

// Updates HTML elements to reflect the player's new position
function updateActiveTile(current, next) {
    const currentTile = document.getElementById(current);
    const nextTile = document.getElementById(next);
    currentTile.classList.remove("active");
    try {
        //needed to add try/catch to circumvent undefined exception in initial page setup
        currentTile.removeEventListener("click", takeTurn);
        currentTile.removeEventListener("mouseover", mouseover);
        document.getElementById("activeText").remove();
    } catch {}
    nextTile.classList.add("active");
    nextTile.innerHTML += ACTIVE_TEXT;
    nextTile.addEventListener("click", takeTurn);
    nextTile.addEventListener("mouseover", mouseover);
    BOARD[0] = next;
}

/* Function Calls */

// Call everything on initial page load
window.onload = (event) => {
    populate(BOARD, BOARD_SIZE);
    populate(FLAVOR_TEXT, BOARD_SIZE);
    customize();
    generateTileHTML();
    updateActiveTile(BOARD[0], BOARD[0]);
};