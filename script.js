document.addEventListener("DOMContentLoaded", () => {
    const path = document.querySelector('#curve');
    const pathLength = path.getTotalLength();
    const experiences = document.querySelectorAll('.timeline-item');

    path.style.strokeDasharray = pathLength;
    path.style.strokeDashoffset = pathLength;

    function animatePath() {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const totalHeight = document.body.scrollHeight - windowHeight;
    
        const scrollPercentage = scrollY / totalHeight;
    
        // Fixed offset in pixels
        const fixedOffset = 170;
        const offsetInPathLength = (fixedOffset / path.getBoundingClientRect().height) * pathLength;
    

        const drawLength = pathLength * (1 - scrollPercentage);
        const startingOffset = pathLength - windowHeight * 0.6; // Start the curve higher up
    
        const adjustedDashOffset = Math.max(drawLength - offsetInPathLength, startingOffset);
    
        path.style.strokeDashoffset = adjustedDashOffset;
        revealExperiences(scrollPercentage);
    }
    
    function revealExperiences(scrollPercentage) {
        experiences.forEach((experience, index) => {
            const experienceStart = (index * 0.2) + 0.0;
            const experienceEnd = experienceStart + 0.15;

            if (scrollPercentage >= experienceStart && scrollPercentage <= experienceEnd) {
                const experienceProgress = (scrollPercentage - experienceStart) / (experienceEnd - experienceStart);
                experience.style.opacity = experienceProgress;
                experience.style.transform = `translateY(${50 * (1 - experienceProgress)}px)`;
            } else if (scrollPercentage > experienceEnd) {
                experience.style.opacity = 1;
                experience.style.transform = 'translateY(0)';
            } else {
                experience.style.opacity = 0;
                experience.style.transform = 'translateY(50px)';
            }
        });
    }

    window.addEventListener("scroll", animatePath);
});


document.addEventListener("DOMContentLoaded", () => {
    const boatContainer = document.getElementById("boats-container");
    const boatImages = ["images/purpleboat.png", "images/redboat.png", "images/orangeboat.png"]; 
    const numberOfBoats = 6; // number of boats

    for (let i = 0; i < numberOfBoats; i++) {
        const boat = document.createElement("img");
        boat.src = boatImages[Math.floor(Math.random() * boatImages.length)];
        boat.classList.add("boat");

        const randomTop = Math.random() * 95 + 5;
        const randomLeft = Math.random() * 96;
        boat.style.top = `${randomTop}%`;
        boat.style.left = `${randomLeft}%`;

        const randomRotation = Math.random() * 360;
        boat.style.setProperty("--rotation", `${randomRotation}deg`);

        boatContainer.appendChild(boat);
    }
});


document.addEventListener("DOMContentLoaded", () => {
    const starfishContainer = document.getElementById("starfish-container");

    const starfishImages = ["images/starfish.png", "images/redstarfish.png", "images/greenstarfish.png"];
    const numberOfStarfish = 7;

    for (let i = 0; i < numberOfStarfish; i++) {
        const starfish = document.createElement("img");
        starfish.src = starfishImages[Math.floor(Math.random() * starfishImages.length)];
        starfish.classList.add("starfish");

        const randomTop = Math.random() * 40 + 50;
        const randomLeft = Math.random() * 96; 
        starfish.style.top = `${randomTop}%`;
        starfish.style.left = `${randomLeft}%`;

        const randomRotation = Math.random() * 360;
        starfish.style.transform = `rotate(${randomRotation}deg)`;

        starfishContainer.appendChild(starfish);
    }
});
