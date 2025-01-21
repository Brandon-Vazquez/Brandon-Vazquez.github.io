document.addEventListener("DOMContentLoaded", () => {
    const path = document.querySelector('#curve');
    const pathLength = path.getTotalLength();
    const experiences = document.querySelectorAll('.timeline-item');

    // Set the initial stroke-dasharray and stroke-dashoffset to hide the path
    path.style.strokeDasharray = pathLength;
    path.style.strokeDashoffset = pathLength;

    function animatePath() {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const totalHeight = document.body.scrollHeight - windowHeight;

        // Calculate the scroll percentage with a slight lag (5%)
        const scrollPercentage = scrollY / (totalHeight * 0.9);
        const adjustedScrollPercentage = scrollPercentage * 0.70;  // Introduce a 5% lag
        
        // Calculate the stroke dash offset to create the lagging effect
        const drawLength = pathLength * (1 - adjustedScrollPercentage);

        // Ensure the path only gets shorter as we scroll
        path.style.strokeDashoffset = Math.max(drawLength, 0);

        // Call the experience reveal function
        revealExperiences(scrollPercentage);  // Use original scrollPercentage here for experiences
    }

    function revealExperiences(scrollPercentage) {
        experiences.forEach((experience, index) => {
            const experienceStart = (index * 0.2) + 0.2;
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

