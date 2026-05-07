class Service {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class SpecialtyService extends Service {
    constructor(name, price, extraTime) {
        super(name, price);
        this.extraTime = extraTime; 
    }
}

const menu = [
    new Service("Classic Manicure", 30),
    new Service("Gel Polish", 45),
    new SpecialtyService("Full Acrylic Set", 65, "30 mins extra"),
    new SpecialtyService("Nail Art Design", 20, "15 mins extra")
];

const serviceList = document.getElementById('service-list');

function renderMenu() {
    menu.forEach((item) => {
        const card = document.createElement('div');
        card.className = 'service-card';
        card.innerHTML = `
            <h3>${item.name}</h3>
            <p>$${item.price}</p>
            <button onclick="selectService('${item.name}')">Select</button>
        `;
        serviceList.appendChild(card);
    });
}

function selectService(name) {
    document.getElementById('service-select').value = name;
}

window.onload = () => {
    renderMenu();
    const savedName = localStorage.getItem('clientName');
    if (savedName) {
        document.getElementById('client-name').value = savedName;
    }
};

const bookingForm = document.getElementById('booking-form');

bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const clientName = document.getElementById('client-name').value;
    
    localStorage.setItem('clientName', clientName);

    const formData = {
        name: clientName,
        email: document.getElementById('client-email').value,
        service: document.getElementById('service-select').value,
        date: document.getElementById('appt-date').value
    };

    fetch('https://script.google.com/macros/s/AKfycbzpw7y69v5ZaGk8cr2r3TwAhdz2O2CShsH4D0jP81-AeNWA6zuCzlxlNjDOepTlzbIfqg/exec', {
        method: 'POST',
        mode: 'no-cors', // Helps avoid "CORS" errors with Google Scripts
        body: JSON.stringify(formData)
    })
    .then(() => {
        document.getElementById('confirmation-msg').innerText = "Booking successfully sent to the technician!";
        bookingForm.reset(); 
    })
    .catch(err => {
        console.error("Error!", err);
        document.getElementById('confirmation-msg').innerText = "Something went wrong. Please try again.";
    });
});