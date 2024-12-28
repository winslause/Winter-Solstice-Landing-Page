// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Collapsible sections
const sections = document.querySelectorAll('section h2');
sections.forEach(h2 => {
    h2.addEventListener('click', () => {
        const content = h2.nextElementSibling;
        content.style.display = content.style.display === 'none' ? 'block' : 'none';
    });
});

// Tooltip for solstice definition
const solsticeInfo = document.querySelector('#science p:first-of-type');
solsticeInfo.setAttribute('title', 'The winter solstice is when the Sun is at its lowest elevation in the sky at noon.');

// Function to toggle light and dark mode
const toggleButton = document.createElement('button');
toggleButton.textContent = 'switch mode';
document.body.insertBefore(toggleButton, document.body.firstChild);
// Apply styling to the button
toggleButton.style.position = 'fixed';
toggleButton.style.right = '20px';
toggleButton.style.top = '20px';
toggleButton.style.padding = '10px 20px';
toggleButton.style.backgroundColor = "rgba(255, 221, 87, 0.6)";
toggleButton.style.color = '#333'; // Dark text for contrast
toggleButton.style.border = 'none';
toggleButton.style.borderRadius = '5px';
toggleButton.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.2)";
toggleButton.style.cursor = 'pointer';
toggleButton.style.zIndex = '1000';
toggleButton.style.transition = "background-color 0.3s ease, box-shadow 0.3s ease";

// Hover effect to change background color and shadow
toggleButton.addEventListener('mouseover', () => {
    toggleButton.style.backgroundColor = '#ffcc00'; // Slightly darker yellow on hover
    toggleButton.style.boxShadow = '0px 6px 12px rgba(0, 0, 0, 0.3)';
});


toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Dark mode CSS via JavaScript
const style = document.createElement('style');
style.innerHTML = `
    .dark-mode {
        background-color: #333;
        color: white;
    }
    .dark-mode #main-header, .dark-mode #main-footer {
        background-color: #111;
    }
    .dark-mode #main-nav ul li a {
        color: #fff;
    }
    .dark-mode #main-nav ul li a:hover {
        background-color: #555;
    }
    .dark-mode section {
        background-color: #444;
        color: white;
    }
`;
document.head.appendChild(style);
