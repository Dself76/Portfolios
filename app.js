document.addEventListener('DOMContentLoaded', () => {
    const scrollContainer = document.querySelector('.scroll-container');

    function createCard(index) {
        const card = document.createElement('div');
        card.className = 'card'; // No 'hidden' since we're not using animations
        const link = document.createElement('a');
        link.href = '#';
        link.textContent = `Item ${index}`;
        card.appendChild(link);
        return card;
    }

    // Add a fixed number of cards
    const numberOfCards = 5;
    for (let i = 1; i <= numberOfCards; i++) {
        const newCard = createCard(i);
        scrollContainer.appendChild(newCard);
    }

    let itemCount = numberOfCards; // Start count based on initial cards

    // Function to add cards up to a maximum limit
    function addCards() {
        if (itemCount < 10) { // Set the limit of cards here
            itemCount++;
            const newCard = createCard(itemCount);
            scrollContainer.appendChild(newCard);
        }
    }
   
    const text = `
    I'm currently pursuing a degree in Computer Science and Software Engineering, with less than a year left to go, maintaining a GPA between 3.8 and 3.9. My academic journey has sparked a deep interest in Mathematics and Natural Language Processing, and Web Development front and backend, alongside my enduring love for all things IT.
                
    From software engineering to machine learning, security, databases, and helpdesk support, I'm constantly exploring and refining my skills. I spend my free time diving into projects with Arduino, Raspberry Pi, and coding, and keeping up with new developments. I am always eager to learn and apply new technologies.
                
    I’m actively seeking entry-level or internship opportunities in IT to further develop my expertise and contribute to innovative projects. Let's connect and see how we can make an impact together!
    `;
    const typewriterElement = document.getElementById('typewriter');
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            typewriterElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, 50); // Adjust speed by changing the timeout value
        }
    }

    typeWriter();
});
