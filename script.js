function loadPage(page) {
    const content = document.getElementById('page-content');
    switch(page) {
        case 'home':
            content.innerHTML = '<h2>Home Page</h2><p>Welcome to our home page.</p>';
            break;
        case 'about':
            content.innerHTML = '<h2>About Us</h2><p>Learn more about our company.</p>';
            break;
        case 'contact':
            content.innerHTML = '<h2>Contact Us</h2><p>Get in touch with us.</p>';
            break;
    }
    trackPageView(page);
}

// Function to track CTA clicks
function trackCTA(ctaId) {
    console.log(`CTA clicked: ${ctaId}`);
    Mojito.trackEvent('CTA Click', { ctaId: ctaId });
}

// Function to track page views
function trackPageView(page) {
    console.log(`Page viewed: ${page}`);
    Mojito.trackEvent('Page View', { page: page });
}

// Function to load external JS files dynamically
function loadScript(url, callback){
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = url;
    script.onload = callback;
    document.head.appendChild(script);
}

loadPage('home');