
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
    if (selectedCountry && selectedCountry !== "all") {
        filtered = filtered.filter(dest => dest.country === selectedCountry);
    }

    // Filter by price range
    if (selectedPrice && selectedPrice !== "all") {
        if (selectedPrice === "1000") {
            filtered = filtered.filter(dest => dest.price < 1000);
        } else if (selectedPrice === "3000") {
            filtered = filtered.filter(dest => dest.price >= 1000 && dest.price <= 3000);
        } else if (selectedPrice === "10000") {
            filtered = filtered.filter(dest => dest.price > 3000);
        }
    }

    renderDestinations(filtered);
};


// Event listeners for filters
countryFilter.addEventListener('change', filterDestinations);
priceFilter.addEventListener('change', filterDestinations);
// Initial fetch of destinations
fetchDestinations();