// userstory2/script.js
// Uses ES6 features: const/let, arrow functions, destructuring, template literals
// Implements fetch with async/await and error handling.

// Base path to events.json (works when opened from filesystem or static server)
const EVENTS_URL = 'events.json';

let eventsData = [];

// Utility: log to live update log
const log = (msg) => {
  const ul = document.getElementById('logList');
  const li = document.createElement('li');
  li.className = 'list-group-item';
  li.textContent = `${new Date().toLocaleTimeString()}: ${msg}`;
  ul.prepend(li);
};

// Fetch events (simulated API)
const fetchEvents = async () => {
  try {
    const res = await fetch(EVENTS_URL, { cache: 'no-store' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    eventsData = data;
    log('Fetched events from mock API.');
    renderEvents(eventsData);
  } catch (err) {
    console.error('Failed to fetch events:', err);
    log(`Error fetching events: ${err.message}`);
    // show fallback UI
    document.getElementById('eventsContainer').innerHTML =
      `<div class="col-12"><div class="alert alert-danger">Failed to load events. Please try refresh.</div></div>`;
  }
};

// Render events into DOM
const renderEvents = (events) => {
  const container = document.getElementById('eventsContainer');
  if (!events || events.length === 0) {
    container.innerHTML = `<div class="col-12"><p class="text-muted">No events to display.</p></div>`;
    return;
  }
  container.innerHTML = events.map(eventCard).join('');
};

// Template for a single event card (destructuring + template literals)
const eventCard = ({ id, title, category, date, location, img, description }) => {
  return `
    <article class="col-md-4" data-id="${id}">
      <div class="card h-100">
        <img src="${img}" class="card-img-top" alt="${title}">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${title}</h5>
          <p class="card-text text-muted mb-1"><small>${category} • ${new Date(date).toLocaleDateString()} • ${location}</small></p>
          <p class="card-text flex-grow-1">${description}</p>
          <div class="d-flex gap-2">
            <button class="btn btn-sm btn-outline-primary viewBtn">View</button>
            <button class="btn btn-sm btn-primary registerBtn">Register</button>
          </div>
        </div>
      </div>
    </article>
  `;
};

// Apply filters using array methods
const applyFilters = () => {
  const cat = document.getElementById('categoryFilter').value;
  const dateVal = document.getElementById('dateFilter').value;
  const filtered = eventsData.filter(ev => {
    const byCat = cat ? ev.category === cat : true;
    const byDate = dateVal ? new Date(ev.date) >= new Date(dateVal) : true;
    return byCat && byDate;
  });
  renderEvents(filtered);
  log('Applied filters.');
};

// Clear filters
const clearFilters = () => {
  document.getElementById('categoryFilter').value = '';
  document.getElementById('dateFilter').value = '';
  renderEvents(eventsData);
  log('Cleared filters.');
};

// Simulate a live update — adds a new event to the in-memory array and rerenders
const addSampleEvent = () => {
  const newId = (eventsData.length ? Math.max(...eventsData.map(e => e.id)) : 0) + 1;
  const sample = {
    id: newId,
    title: `Popup Music Night #${newId}`,
    category: 'Music',
    date: new Date(Date.now() + 7 * 24 * 3600 * 1000).toISOString().slice(0,10),
    location: 'PopUp Arena',
    img: 'https://source.unsplash.com/800x500/?music,stage',
    description: 'A surprise popup performance. Limited tickets.'
  };
  eventsData.unshift(sample);
  renderEvents(eventsData);
  log(`Live update: added event "${sample.title}"`);
};

// Event delegation for Register/View buttons
const attachCardHandlers = () => {
  const container = document.getElementById('eventsContainer');
  container.addEventListener('click', (e) => {
    const viewBtn = e.target.closest('.viewBtn');
    const regBtn = e.target.closest('.registerBtn');
    if (viewBtn) {
      const card = viewBtn.closest('[data-id]');
      const id = Number(card.dataset.id);
      const ev = eventsData.find(x => x.id === id);
      alert(`${ev.title}\n\n${ev.description}\n\nDate: ${ev.date}\nLocation: ${ev.location}`);
      log(`Viewed event "${ev.title}"`);
    } else if (regBtn) {
      const card = regBtn.closest('[data-id]');
      const id = Number(card.dataset.id);
      const ev = eventsData.find(x => x.id === id);
      // Simulate registration action
      const email = prompt(`Enter your email to register for "${ev.title}":`);
      if (email && /\S+@\S+\.\S+/.test(email)) {
        log(`Registered ${email} for "${ev.title}"`);
        alert('Registration successful! Check your email for details.');
      } else {
        alert('Invalid or no email provided. Registration cancelled.');
      }
    }
  });
};

// initialize UI wiring
const init = () => {
  document.getElementById('applyFilter').addEventListener('click', applyFilters);
  document.getElementById('clearFilter').addEventListener('click', clearFilters);
  document.getElementById('addSample').addEventListener('click', addSampleEvent);
  document.getElementById('refresh').addEventListener('click', () => fetchEvents());
  attachCardHandlers();
  fetchEvents();
};

// Run init when DOM is loaded
document.addEventListener('DOMContentLoaded', init);
