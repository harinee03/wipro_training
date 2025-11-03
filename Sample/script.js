//  <!-- Develop an interactive dashboard that displays destinations fetched from a JSON file. Allow filtering
//  by country or price range. Simulate live updates using Fetch API.
 
//  ES6 Features
//  Use arrays, objects, and loops effectively
 
//  Use let/const, arrow functions, destructuring, and template literals 5
//  Fetch API + Async/Await Simulate API calls and handle errors
//  DOM Manipulation
//  Dynamically render cards and update on filter actions
 
 
// Code Readability
 
//  Modular, indented, and commented code -->
const destinationsUrl = 'destinations.json';
let destinations = [];
const destinationContainer = document.getElementById('destinations');
const countryFilter = document.getElementById('countryFilter');
const priceFilter = document.getElementById('priceFilter');
// Fetch destinations from JSON file
const fetchDestinations = async () => {
    try {
        const response = await fetch(destinationsUrl);
        destinations = await response.json();
        renderDestinations(destinations);
        populateCountryFilter(destinations);
    } catch (error) {
        console.error('Error fetching destinations:', error);
    }
};
// Render destination cards
const renderDestinations = (destinationsToRender) => {
    destinationContainer.innerHTML = '';
    destinationsToRender.forEach(({ name, country, price, image }) => {
        const card = document.createElement('div');
        card.className = 'col-md-4';
        card.innerHTML = `
            <div class="card destination-card">
                <img src="${image}" class="card-img-top" alt="${name}">
                <div class="card-body">
                    <h5 class="card-title">${name}</h5>
                    <p class="card-text">Country: ${country}</p>
                    <p class="card-text">Price: $${price}</p>
                </div>
            </div>
        `;
        destinationContainer.appendChild(card);
    }
    );
};
// Populate country filter options
const populateCountryFilter = (destinations) => {
    const countries = [...new Set(destinations.map(dest => dest.country))];
    countries.forEach(country => {
        const option = document.createElement('option');
        option.value = country;
        option.textContent = country;
        countryFilter.appendChild(option);
    });
};
// Filter destinations based on selected criteria budget luxary 

const filterDestinations = () => {
    const selectedCountry = countryFilter.value;
    const selectedPrice = priceFilter.value;
    let filtered = destinations;

    // Filter by country

     if (selectedCountry)
         { filtered = filtered.filter(dest => dest.country === selectedCountry); } 
     if (selectedPrice) { filtered = filtered.filter(dest => dest.price <= parseInt(selectedPrice)); } 
     renderDestinations(filtered); };

// Event listeners for filters
countryFilter.addEventListener('change', filterDestinations);
priceFilter.addEventListener('change', filterDestinations);
// Initial fetch of destinations
fetchDestinations();