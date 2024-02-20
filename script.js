const topics = [
    {
        heading: "Coffee: The True Office MVP",
        points: [
            "The lengths people go for their morning coffee ritual.",
            "Coffee as the ultimate productivity booster and team unifier."
        ]
    },
    {
        heading: "Email Etiquette: The Unwritten Rules",
        points: [
            "The comedic misuse of 'Reply All'.",
            "Deciphering the tone and hidden messages in professional emails."
        ]
    },
    {
        heading: "Dress Code Dilemmas",
        points: [
            "The wide array of interpretations of 'business casual'.",
            "The challenges and humor in dressing for themed office days."
        ]
    },
    {
        heading: "Conference Call Charades",
        points: [
            "Unmuted mics and unexpected background noises.",
            "The struggle to connect and the repeated 'Can you hear me?'"
        ]
    },
    {
        heading: "Decoding the Language of Corporate Emails",
        points: [
            "Translating common email phrases into what they actually mean.",
            "The art of being politely assertive in email communication."
        ]
    },
    {
        heading: "The Quest for the Perfect Lunch Spot",
        points: [
            "The group dynamics and negotiations in choosing where to eat.",
            "The eventual compromise that leaves everyone mildly satisfied."
        ]
    },
    {
        heading: "To Emoji or Not to Emoji in Professional Emails?",
        points: [
            "The debate over the appropriateness of emojis in work communication.",
            "Stories of when emojis in emails went hilariously wrong."
        ]
    },
    {
        heading: "The Saga of Setting Up a New Computer",
        points: [
            "The initial excitement followed by the frustration of tech issues.",
            "The challenge of remembering all passwords and transferring files."
        ]
    },
    {
        heading: "When Your Chair Squeaks During a Quiet Moment",
        points: [
            "The unexpected horror of your chair becoming the center of attention.",
            "Trying to sit still to avoid any further noise during important moments."
        ]
    },
    {
        heading: "The Office Temperature Wars",
        points: [
            "The ongoing battle over the thermostat and personal comfort zones.",
            "The appearance of personal heaters and fans as peace treaties."
        ]
    },
    {
        heading: "The Great Parking Spot Hunt",
        points: [
            "The competitive nature of securing the best parking spot.",
            "The strategies and lengths people will go to arrive early for this purpose."
        ]
    }
    // Add more topics with their points here
];

let currentIndex = 0; // Start from the first topic

function displayTalkingPoint(index) {
    const topic = topics[index];
    const container = document.getElementById("talkingPointContainer");
    container.innerHTML = ""; // Clear previous content
    
    // Create and append the heading
    const headingDiv = document.createElement("h2");
    headingDiv.textContent = topic.heading;
    container.appendChild(headingDiv);
    
    // Create and append each point in its own div under the heading
    topic.points.forEach(point => {
        const pointDiv = document.createElement("div");
        pointDiv.textContent = point;
        container.appendChild(pointDiv);
    });
}

document.getElementById("next").addEventListener("click", function() {
    currentIndex = (currentIndex + 1) % topics.length; // Cycle through topics
    displayTalkingPoint(currentIndex);
});

document.getElementById("prev").addEventListener("click", function() {
    currentIndex = (currentIndex - 1 + topics.length) % topics.length; // Cycle backwards through topics
    displayTalkingPoint(currentIndex);
});

// Initialize with the first talking point
document.addEventListener("DOMContentLoaded", function() {
    displayTalkingPoint(currentIndex);
});
