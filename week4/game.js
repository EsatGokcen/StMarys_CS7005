// Select the canvas and set up the context
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Set canvas dimensions
canvas.width = 800;
canvas.height = 400;

// Player Object
const player = {
    x: 50,
    y: canvas.height / 2 - 25,
    width: 30,
    height: 30,
    color: "#FFD700", // Golden yellow
    speed: 25
};

// Array to store obstacles
let obstacles = [];
const obstacleSpeed = 3;
const obstacleWidth = 30;
const obstacleHeight = 30;
const spawnRate = 1000; // Spawning every 1 second

// Handle Player Movement
document.addEventListener("keydown", (event) => {
    if (event.key === "w" && player.y > 0) player.y -= player.speed;
    if (event.key === "s" && player.y < canvas.height - player.height) player.y += player.speed;
});

// Function to create obstacles
function createObstacle() {
    let obstacle = {
        x: canvas.width,
        y: Math.random() * (canvas.height - obstacleHeight),
        width: obstacleWidth,
        height: obstacleHeight,
        color: "#FF5733" // Red-orange
    };
    obstacles.push(obstacle);
}

// Collision Detection
function checkCollision(player, obstacle) {
    return (
        player.x < obstacle.x + obstacle.width &&
        player.x + player.width > obstacle.x &&
        player.y < obstacle.y + obstacle.height &&
        player.y + player.height > obstacle.y
    );
}

// Game Loop
let gameOver = false;

function gameLoop() {
    if (gameOver) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw Player
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, player.width, player.height);

    // Move Obstacles
    for (let i = 0; i < obstacles.length; i++) {
        obstacles[i].x -= obstacleSpeed;

        // Draw Obstacles
        ctx.fillStyle = obstacles[i].color;
        ctx.fillRect(obstacles[i].x, obstacles[i].y, obstacles[i].width, obstacles[i].height);

        // Check for collision
        if (checkCollision(player, obstacles[i])) {
            gameOver = true;
            alert("Game Over! You got hit!");
            return;
        }
    }

    // Remove off-screen obstacles
    obstacles = obstacles.filter(obstacle => obstacle.x + obstacle.width > 0);

    requestAnimationFrame(gameLoop);
}

// Start Game Loop
gameLoop();

// Spawn obstacles every second
setInterval(createObstacle, spawnRate);
