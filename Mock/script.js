document.addEventListener('DOMContentLoaded', () => {
    const eventContainer = document.getElementById('event-container');
    const categoryFilter = document.getElementById('category-filter');
    const dateFilter = document.getElementById('date-filter');
    let events = [];

    // Fetch events from mock JSON file
    const fetchEvents = async () => {
        try {
            const response = await fetch('mock-events.json');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            events = await response.json();
            renderEvents(events);
        } catch (error) {
            console.error('Error fetching events:', error);
            eventContainer.innerHTML = '<p>Error loading events. Please try again later.</p>';
        }
    }

    // Filter events based on selected criteria
    const filterEvents = () => {
        const selectedCategory = categoryFilter.value;
        const selectedDate = dateFilter.value;
        let filteredEvents = events;

        if (selectedCategory) {
            filteredEvents = filteredEvents.filter(event => event.category === selectedCategory);
        }
        if (selectedDate) {
            filteredEvents = filteredEvents.filter(event => event.date === selectedDate);
        }
        renderEvents(filteredEvents);
    }

    // Event listeners for filters
    categoryFilter.addEventListener('change', filterEvents);
    dateFilter.addEventListener('change', filterEvents);

    // Initial fetch of events
    fetchEvents();
});
function renderEvents(eventList) {
    const eventContainer = document.getElementById('event-Container');
    eventContainer.innerHTML = '';

    if (eventList.length === 0) {
        eventContainer.innerHTML = '<p>No events found.</p>';
        return;
    }

    eventList.forEach(event => {
        const card = `
            <div class="card mb-3">
                <div class="card-body">
                    <h5>${event.name}</h5>
                    <p><strong>Category:</strong> ${event.category}</p>
                    <p><strong>Date:</strong> ${event.date}</p>
                </div>
            </div>
        `;
        eventContainer.innerHTML += card;
    });
}
