// Initialize particles.js
document.addEventListener("DOMContentLoaded", function () {
  particlesJS("particles-js", {
    particles: {
      number: { value: 100, density: { enable: true, value_area: 800 } },
      color: { value: "#3a7bd5" },
      shape: { type: "circle" },
      opacity: { value: 0.5, random: true },
      size: { value: 3, random: true },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#3a7bd5",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: true,
        out_mode: "out",
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "grab" },
        onclick: { enable: true, mode: "push" },
      },
    },
  });
});

// Simplified 3D effect using CSS
document.addEventListener("DOMContentLoaded", function () {
  const trophyContainer = document.getElementById("trophy-container");

  // Create a CSS 3D holographic trophy
  trophyContainer.innerHTML = `
                <div style="width: 100%; height: 100%; display: flex; justify-content: center; align-items: center; perspective: 1000px;">
                    <div style="width: 150px; height: 200px; position: relative; transform-style: preserve-3d; animation: float 6s ease-in-out infinite;">
                        <div style="position: absolute; width: 100%; height: 100%; display: flex; justify-content: center; align-items: center; backface-visibility: hidden; border-radius: 10px; background: linear-gradient(135deg, rgba(58, 123, 213, 0.2), rgba(0, 210, 255, 0.2)); box-shadow: 0 0 30px rgba(58, 123, 213, 0.5); border: 1px solid rgba(58, 123, 213, 0.3);">
                            <div style="width: 80px; height: 80px; background: linear-gradient(135deg, #3a7bd5, #00d2ff); border-radius: 50%; position: relative; box-shadow: 0 0 20px rgba(58, 123, 213, 0.7);">
                                <div style="position: absolute; top: 20px; left: 20px; width: 40px; height: 40px; background: rgba(255, 255, 255, 0.8); clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);"></div>
                            </div>
                            <div style="position: absolute; bottom: 20px; width: 120px; height: 30px; background: linear-gradient(135deg, #3a7bd5, #00d2ff); border-radius: 5px; box-shadow: 0 0 15px rgba(58, 123, 213, 0.7);"></div>
                        </div>
                    </div>
                </div>
                <style>
                    @keyframes float {
                        0% { transform: translateY(0) rotateX(0) rotateY(0); }
                        50% { transform: translateY(-20px) rotateX(5deg) rotateY(5deg); }
                        100% { transform: translateY(0) rotateX(0) rotateY(0); }
                    }
                </style>
            `;
});

// Countdown timer
function updateCountdown() {
  const countdownElement = document.querySelector(".countdown-timer");
  // Set the date we're counting down to (5 days from now)
  const countDownDate = new Date();
  countDownDate.setDate(countDownDate.getDate() + 5);

  const now = new Date().getTime();
  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  countdownElement.innerHTML = `${days} Days ${hours} Hours ${minutes} Minutes`;
}

setInterval(updateCountdown, 60000);
updateCountdown();

// Create GitHub-style contribution graph
function createContributionGraph() {
  const graph = document.getElementById("contribution-graph");
  const now = new Date();
  const startDate = new Date();
  startDate.setDate(now.getDate() - 364); // One year ago

  for (let i = 0; i < 364; i++) {
    const day = new Date(startDate);
    day.setDate(startDate.getDate() + i);

    const contributionDay = document.createElement("div");
    contributionDay.className = "contribution-day";

    // Randomly assign contribution levels for demo purposes
    const rand = Math.random();
    if (rand > 0.8) {
      contributionDay.classList.add("high");
    } else if (rand > 0.6) {
      contributionDay.classList.add("medium");
    } else if (rand > 0.4) {
      contributionDay.classList.add("low");
    }

    graph.appendChild(contributionDay);
  }
}

createContributionGraph();

// Create 3D robot animation
function createRobotAnimation() {
  const robotContainer = document.getElementById("robot-container");

  // Create a simple CSS-based robot animation
  robotContainer.innerHTML = `
                <div style="width: 100%; height: 100%; position: relative;">
                    <div style="position: absolute; bottom: 0; right: 0; width: 100px; height: 150px; transform-origin: center bottom; animation: robot-dance 8s ease-in-out infinite;">
                        <div style="position: absolute; bottom: 70px; left: 25px; width: 50px; height: 60px; background: linear-gradient(135deg, #3a7bd5, #00d2ff); border-radius: 10px 10px 0 0; box-shadow: 0 0 15px rgba(58, 123, 213, 0.7);">
                            <div style="position: absolute; top: 15px; left: 10px; width: 10px; height: 10px; border-radius: 50%; background: #ff00c8;"></div>
                            <div style="position: absolute; top: 15px; right: 10px; width: 10px; height: 10px; border-radius: 50%; background: #ff00c8;"></div>
                        </div>
                        <div style="position: absolute; bottom: 0; left: 0; width: 30px; height: 70px; background: linear-gradient(135deg, #3a7bd5, #00d2ff); border-radius: 10px 10px 0 0; transform-origin: center bottom; animation: leg-move 2s ease-in-out infinite;"></div>
                        <div style="position: absolute; bottom: 0; right: 0; width: 30px; height: 70px; background: linear-gradient(135deg, #3a7bd5, #00d2ff); border-radius: 10px 10px 0 0; transform-origin: center bottom; animation: leg-move 2s ease-in-out infinite reverse;"></div>
                        <div style="position: absolute; top: 0; left: -10px; width: 20px; height: 50px; background: linear-gradient(135deg, #3a7bd5, #00d2ff); border-radius: 10px; transform-origin: center top; animation: arm-move 3s ease-in-out infinite;"></div>
                        <div style="position: absolute; top: 0; right: -10px; width: 20px; height: 50px; background: linear-gradient(135deg, #3a7bd5, #00d2ff); border-radius: 10px; transform-origin: center top; animation: arm-move 3s ease-in-out infinite reverse;"></div>
                    </div>
                </div>
                <style>
                    @keyframes robot-dance {
                        0% { transform: translateX(0) rotate(0deg); }
                        25% { transform: translateX(-20px) rotate(5deg); }
                        50% { transform: translateX(0) rotate(0deg); }
                        75% { transform: translateX(20px) rotate(-5deg); }
                        100% { transform: translateX(0) rotate(0deg); }
                    }
                    
                    @keyframes leg-move {
                        0% { transform: rotate(-5deg); }
                        50% { transform: rotate(5deg); }
                        100% { transform: rotate(-5deg); }
                    }
                    
                    @keyframes arm-move {
                        0% { transform: rotate(10deg); }
                        50% { transform: rotate(-10deg); }
                        100% { transform: rotate(10deg); }
                    }
                </style>
            `;
}

createRobotAnimation();
