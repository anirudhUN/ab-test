// Simulating A/B test group assignment
// const isGroupA = Math.random() < 0.5;

// // Function to create the navbar
// function createNavbar() {
//     const navbar = document.getElementById('navbar');
//     navbar.innerHTML = `
//         <ul>
//             <li><a href="#" onclick="loadPage('home')">Home</a></li>
//             <li><a href="#" onclick="loadPage('about')">About</a></li>
//             <li><a href="#" onclick="loadPage('contact')">Contact</a></li>
//         </ul>
//     `;
//     if (isGroupA) {
//         navbar.className = 'top-nav';
//         document.body.classList.remove('side-nav-body');
//     } else {
//         navbar.className = 'side-nav';
//         document.body.classList.add('side-nav-body');
//     }
// }

// Function to load page content
// function loadPage(page) {
//     const content = document.getElementById('page-content');
//     switch(page) {
//         case 'home':
//             content.innerHTML = '<h2>Home Page</h2><p>Welcome to our home page.</p>';
//             break;
//         case 'about':
//             content.innerHTML = '<h2>About Us</h2><p>Learn more about our company.</p>';
//             break;
//         case 'contact':
//             content.innerHTML = '<h2>Contact Us</h2><p>Get in touch with us.</p>';
//             break;
//     }
//     trackPageView(page);
// }

// Function to track CTA clicks
// function trackCTA(ctaId) {
//     console.log(`CTA clicked: ${ctaId}`);
//     Mojito.trackEvent('CTA Click', { ctaId: ctaId });
// }

// Function to track page views
// function trackPageView(page) {
//     console.log(`Page viewed: ${page}`);
//     Mojito.trackEvent('Page View', { page: page });
// }

// Function to load external JS files dynamically
// function loadScript(url, callback){
//     var script = document.createElement("script");
//     script.type = "text/javascript";
//     script.src = url;
//     script.onload = callback;
//     document.head.appendChild(script);
// }

// Load the trigger script
// loadScript('mojito/ex2/trigger.js', function() {
//     var test = {
//         activate: function() {
//             loadScript('mojito/ex2/1.js', function() {
//                 treatment();
//             });
//         }
//     };
//     trigger(test);
// });

// Initialize the page
// createNavbar();
// loadPage('home');

// Function to fetch and display the image
function loadBannerImage(id = 1) {
    const imageUrl = `https://picsum.photos/id/${id}/600/200`;

    // Assuming your banner image has an id of "banner-image"
    const bannerImageElement = document.getElementById('banner-image');
    bannerImageElement.src = imageUrl;
}

loadBannerImage()