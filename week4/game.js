// Select the canvas and set up the context
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Set canvas dimensions
canvas.width = 800;
canvas.height = 400;

// Game Objects
const player = {
    x: 50,
    y: canvas.height / 2 - 25,
    width: 30,
    height: 30,
    color: "#FFD700", // Golden yellow
    speed: 5
};

// Handle Player Movement
document.addEventListener("keydown", (event) => {
    if (event.key === "w" && player.y > 0) player.y -= player.speed;
    if (event.key === "s" && player.y < canvas.height - player.height) player.y += player.speed;
});

// Game Loop
function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw Player
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, player.width, player.height);

    requestAnimationFrame(gameLoop);
}

// Start Game
gameLoop();
