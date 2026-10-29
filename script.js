const pacMen = []; // This array holds all the PacMen

// Generate random position or velocity
function setToRandom(scale) {
    return {
        x: Math.random() * scale,
        y: Math.random() * scale,
    };
}

// Create a PacMan at a random position
function makePac() {

    // Random velocity
    let velocity = setToRandom(10);

    // Random position
    let position = setToRandom(100);

    // Create image
    let newimg = document.createElement("img");

    newimg.src = "./image/PacMan1.jpeg";

    // Set image size
    newimg.width = 100;

    // Position image absolutely
    newimg.style.position = "absolute";

    // Set initial position
    newimg.style.left = position.x + "px";
    newimg.style.top = position.y + "px";

    // Add image to game div
    let game = document.getElementById("game");
    game.appendChild(newimg);

    // Return PacMan details
    return {
        position,
        velocity,
        newimg,
    };
}

// Move PacMen continuously
function update() {

    pacMen.forEach((item) => {

        // Check wall collisions
        checkCollisions(item);

        // Update position
        item.position.x += item.velocity.x;
        item.position.y += item.velocity.y;

        // Update image position
        item.newimg.style.left = item.position.x + "px";
        item.newimg.style.top = item.position.y + "px";
    });

    // Repeat animation
    setTimeout(update, 20);
}

// Detect wall collisions
function checkCollisions(item) {

    // Right and left walls
    if (
        item.position.x + item.velocity.x + item.newimg.width >
        window.innerWidth ||
        item.position.x + item.velocity.x < 0
    ) {
        item.velocity.x = -item.velocity.x;
    }

    // Bottom and top walls
    if (
        item.position.y + item.velocity.y + item.newimg.height >
        window.innerHeight ||
        item.position.y + item.velocity.y < 0
    ) {
        item.velocity.y = -item.velocity.y;
    }
}

// Create one PacMan
function makeOne() {
    pacMen.push(makePac());
}

// Start animation
update();

// Don't change this line
if (typeof module !== "undefined") {
    module.exports = { checkCollisions, update, pacMen };
}