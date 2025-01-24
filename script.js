// Example events
const events = [
    { title: "Union Meeting", date: "2025-01-25", time: "10:00 AM" },
    { title: "Protest Rally", date: "2025-02-01", time: "12:00 PM" },
    { title: "Teamsters Workshop", date: "2025-02-10", time: "3:00 PM" },
];

// Populate the event list dynamically
const eventList = document.getElementById("event-list");

events.forEach(event => {
    const li = document.createElement("li");
    li.innerHTML = `<span>${event.title} - ${event.date} at ${event.time}</span>`;
    li.addEventListener("click", () => {
        alert(`Event: ${event.title}\nDate: ${event.date}\nTime: ${event.time}`);
    });
    eventList.appendChild(li);
});

// Search functionality
document.getElementById("event-search").addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase();
    const filteredEvents = events.filter(event => event.title.toLowerCase().includes(query));
    eventList.innerHTML = ""; // Clear current list
    filteredEvents.forEach(event => {
        const li = document.createElement("li");
        li.innerHTML = `<span>${event.title} - ${event.date} at ${event.time}</span>`;
        li.addEventListener("click", () => {
            alert(`Event: ${event.title}\nDate: ${event.date}\nTime: ${event.time}`);
        });
        eventList.appendChild(li);
    });
});
