// GENEROWANIE WSZYSTKICH DNI OD 26.11.2025 DO 26.07.2026
let start = new Date("2025-11-26");
let end = new Date("2026-07-26");
let container = document.getElementById("plan");

while (start <= end) {
    let d = start.toISOString().split("T")[0];

    let html = `
        <div class="day" data-date="${d}">
            <div class="date">${d}</div>
        </div>
    `;

    container.innerHTML += html;
    start.setDate(start.getDate() + 1);
}

// ⬇️ AUTOMATYCZNE WSTAWIANIE WSZYSTKICH ZAJĘĆ Z events.js
events.forEach(ev => {
    let day = document.querySelector(`.day[data-date="${ev.date}"]`);
    if (!day) return;

    let box = document.createElement("div");
    box.className = "lesson";

    box.innerHTML = `
        <div><b>${ev.subject}</b></div>
        <div>${ev.start}–${ev.end}</div>
        <div>${ev.teacher}</div>
        <div>${ev.room}</div>
        <div style="font-size:11px;opacity:0.7;">${ev.type || ""}</div>
    `;

    day.appendChild(box);
});
