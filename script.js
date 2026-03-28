// Données des coiffures
const coiffuresData = [
    {
        id: 1,
        name: "Tresses Classiques",
        description: "Tresses intemporelles pour un look sophistiqué et soigné",
        price: 55,
        duration: 120,
        barber: "Marie",
        image: "images/braids.jpg"
    },
    {
        id: 2,
        name: "Cornrows",
        description: "Cornrows modernes et élégantes, parfaites pour tous les styles",
        price: 65,
        duration: 150,
        barber: "Sophie",
        image: "images/cornrow.wep.webp"
    },
    {
        id: 3,
        name: "Dreadlocks",
        description: "Dreadlocks stylisées pour un look unique et tendance",
        price: 80,
        duration: 180,
        barber: "Aissa",
        image: "images/dred.jpg"
    },
    {
        id: 4,
        name: "Locks Courtes",
        description: "Locks courtes élégantes pour un style moderne et facile d'entretien",
        price: 70,
        duration: 160,
        barber: "Assya",
        image: "images/locks.jpg"
    },
    {
        id: 5,
        name: "Twists",
        description: "Twists stylisés pour un look chic et contemporain",
        price: 60,
        duration: 130,
        barber: "Haby",
        image: "images/twist.jpg"
    },
    {
        id: 6,
        name: "Coupe Crépue",
        description: "Coupe crépue moderne avec finitions impeccables",
        price: 45,
        duration: 75,
        barber: "Khaly",
        image: "images/crepu.webp"
    },
    {
        id: 7,
        name: "Carré Long",
        description: "Carré long élégant pour un style feminin et intemporel",
        price: 50,
        duration: 90,
        barber: "Aissa",
        image: "images/carrelong.jpg"
    },
    {
        id: 8,
        name: "Queue de Cheval Voluptueuse",
        description: "Queue de cheval volumineuse et élégante pour toutes les occasions",
        price: 40,
        duration: 60,
        barber: "Assya",
        image: "images/queuecheval.jpg"
    },
    {
        id: 9,
        name: "Coupe Boule",
        description: "Coupe boule stylisée pour un look rond et moderne",
        price: 35,
        duration: 60,
        barber: "Haby",
        image: "images/coupe-boule.jpg"
    },
    {
        id: 10,
        name: "Coupe Enveloppante",
        description: "Coupe enveloppante élégante pour un effet sophistiqué",
        price: 55,
        duration: 90,
        barber: "Khaly",
        image: "images/coupeenv.webp"
    },
    {
        id: 11,
        name: "Crépus",
        description: "Cheveux crépus sublimés avec soin et expertise",
        price: 50,
        duration: 100,
        barber: "Aissa",
        image: "images/crepus.jpg"
    },
    {
        id: 12,
        name: "Dégradé Long",
        description: "Dégradé long moderne pour un style élégant et léger",
        price: 60,
        duration: 110,
        barber: "Assya",
        image: "images/degradelong.webp"
    },
    {
        id: 13,
        name: "Frange Effilée",
        description: "Frange effilée tendance pour sublimer votre visage",
        price: 30,
        duration: 45,
        barber: "Haby",
        image: "images/frangeefillé.jpg"
    },
    {
        id: 14,
        name: "Frange Rideau",
        description: "Frange rideau élégante pour un look rétro-moderne",
        price: 32,
        duration: 50,
        barber: "Khaly",
        image: "images/frangerideau.jpg"
    },
    {
        id: 15,
        name: "Ponytail Chic",
        description: "Ponytail élégant et stylisé pour toutes les occasions",
        price: 38,
        duration: 55,
        barber: "Aissa",
        image: "images/ponytail.jpg"
    },
    {
        id: 16,
        name: "Box Braids",
        description: "Box braids volumineuses et robustes pour un look tendance",
        price: 75,
        duration: 180,
        barber: "Assya",
        image: "images/Box braids.jpg"
    },
    {
        id: 17,
        name: "Chignon",
        description: "Chignon sophistiqué pour un style élégant et intemporel",
        price: 45,
        duration: 75,
        barber: "Haby",
        image: "images/chignon.jpg"
    },
    {
        id: 18,
        name: "Coupe Shag",
        description: "Coupe shag texturée pour un look rock et moderne",
        price: 55,
        duration: 90,
        barber: "Khaly",
        image: "images/coupe-shag.jpg"
    },
    {
        id: 19,
        name: "Wolf Cut",
        description: "Wolf cut tendance pour un style audacieux et dynamique",
        price: 65,
        duration: 100,
        barber: "Aissa",
        image: "images/Coupe-wolf-cut.jpg"
    },
    {
        id: 20,
        name: "Knotless Braids",
        description: "Knotless braids délicates pour plus de confort et de légèreté",
        price: 70,
        duration: 160,
        barber: "Assya",
        image: "images/Knotless braids.webp"
    },
    {
        id: 21,
        name: "Postiche Queue de Cheval",
        description: "Postiche queue de cheval pour transformer votre look facilement",
        price: 50,
        duration: 45,
        barber: "Haby",
        image: "images/Postiche-queue-de-cheval.jpeg"
    },
    {
        id: 22,
        name: "Vanilles",
        description: "Vanilles classiques pour un style doux et afro-chic",
        price: 65,
        duration: 140,
        barber: "Khaly",
        image: "images/Vanilles.jpeg"
    }
];

// Variables globales
let reservations = [];
let selectedCoiffure = null;
let currentTab = 'coiffures';

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    loadReservations();
    renderCoiffures();
    setupEventListeners();
    setupPagination();
});

// Event listeners
function setupEventListeners() {
    // Navigation tabs
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            switchTab(this.dataset.tab);
        });
    });

    // Filtres
    document.getElementById('searchInput').addEventListener('input', filterCoiffures);
    document.getElementById('priceFilter').addEventListener('change', filterCoiffures);

    // Modal
    const modal = document.getElementById('detailsModal');
    const closeBtn = document.querySelector('.close');
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    window.addEventListener('click', (e) => {
        const detailsModal = document.getElementById('detailsModal');
        const paymentModal = document.getElementById('paymentModal');
        if (e.target === detailsModal) {
            detailsModal.classList.remove('active');
        }
        if (e.target === paymentModal) {
            paymentModal.classList.remove('active');
        }
    });

    // Payment modal
    const paymentModal = document.getElementById('paymentModal');
    const closePaymentBtn = document.querySelector('.close-payment');
    closePaymentBtn.addEventListener('click', () => {
        paymentModal.classList.remove('active');
    });

    // Form de paiement
    document.getElementById('confirmPaymentBtn').addEventListener('click', processPayment);

    // Bouton réserver
    document.getElementById('reserveBtn').addEventListener('click', () => {
        const date = document.getElementById('dateInput').value;
        const time = document.getElementById('timeInput').value;
        const name = document.getElementById('clientName').value;
        const phone = document.getElementById('clientPhone').value;

        if (!date || !time || !name || !phone) {
            showNotification('Veuillez remplir tous les champs', 'error');
            return;
        }

        if (!phone.match(/^[\d\s\-\+\(\)]+$/)) {
            showNotification('Veuillez entrer un numéro de téléphone valide', 'error');
            return;
        }

        // Afficher modal de paiement
        showPaymentModal();
        document.getElementById('detailsModal').classList.remove('active');
    });

    // Format card number
    document.getElementById('cardNumber').addEventListener('input', function() {
        let value = this.value.replace(/\s/g, '');
        let formatted = value.replace(/(\d{4})/g, '$1 ').trim();
        this.value = formatted;
    });

    // Format expiry
    document.getElementById('cardExpiry').addEventListener('input', function() {
        let value = this.value.replace(/\D/g, '');
        if (value.length >= 2) {
            value = value.slice(0, 2) + '/' + value.slice(2, 4);
        }
        this.value = value;
    });

    // Format CVV
    document.getElementById('cardCVV').addEventListener('input', function() {
        this.value = this.value.replace(/\D/g, '');
    });
}

// Afficher les coiffures
function renderCoiffures(coiffures = coiffuresData) {
    const grid = document.getElementById('coiffuresGrid');
    grid.innerHTML = '';

    if (coiffures.length === 0) {
        grid.innerHTML = '<div class="empty-state" style="grid-column: 1/-1;"><h3>Aucune coiffure trouvée</h3></div>';
        return;
    }

    coiffures.forEach(coiffure => {
        const card = document.createElement('div');
        card.className = 'coiffure-card';
        card.innerHTML = `
            <img src="${coiffure.image}" alt="${coiffure.name}" class="coiffure-image">
            <div class="coiffure-info">
                <h3 class="coiffure-name">${coiffure.name}</h3>
                <p class="coiffure-description">${coiffure.description}</p>
                <div class="coiffure-meta">
                    <span class="coiffure-price">${coiffure.price}€</span>
                    <span class="coiffure-duration">${coiffure.duration} min</span>
                </div>
                <button class="coiffure-btn" onclick="showDetails(${coiffure.id})">Réserver</button>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Afficher détails
function showDetails(id) {
    selectedCoiffure = coiffuresData.find(c => c.id === id);
    const modal = document.getElementById('detailsModal');
    
    document.getElementById('modalTitle').textContent = selectedCoiffure.name;
    document.getElementById('modalDescription').textContent = selectedCoiffure.description;
    document.getElementById('modalPrice').textContent = selectedCoiffure.price;
    document.getElementById('modalDuration').textContent = selectedCoiffure.duration;
    document.getElementById('modalBarber').textContent = selectedCoiffure.barber;
    document.getElementById('modalImage').src = selectedCoiffure.image;

    // Set minimum date to today
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('dateInput').min = today;
    document.getElementById('dateInput').value = '';
    
    // Reset form
    document.getElementById('timeInput').value = '';
    document.getElementById('clientName').value = '';
    document.getElementById('clientPhone').value = '';

    modal.classList.add('active');
}

// Filtre les coiffures
function filterCoiffures() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const priceFilter = document.getElementById('priceFilter').value;

    let filtered = coiffuresData.filter(coiffure => {
        const matchesSearch = coiffure.name.toLowerCase().includes(searchTerm) ||
                             coiffure.description.toLowerCase().includes(searchTerm);
        
        let matchesPrice = true;
        if (priceFilter === 'low') matchesPrice = coiffure.price < 30;
        if (priceFilter === 'medium') matchesPrice = coiffure.price >= 30 && coiffure.price <= 60;
        if (priceFilter === 'high') matchesPrice = coiffure.price > 60;

        return matchesSearch && matchesPrice;
    });

    renderCoiffures(filtered);
}

// Afficher modal de paiement
function showPaymentModal() {
    const date = document.getElementById('dateInput').value;
    const time = document.getElementById('timeInput').value;
    const name = document.getElementById('clientName').value;

    document.getElementById('paymentService').textContent = selectedCoiffure.name;
    document.getElementById('paymentAmount').textContent = selectedCoiffure.price;
    document.getElementById('paymentDateTime').textContent = `${date} à ${time}`;

    // Reset form paiement
    document.getElementById('cardName').value = '';
    document.getElementById('cardNumber').value = '';
    document.getElementById('cardExpiry').value = '';
    document.getElementById('cardCVV').value = '';

    document.getElementById('paymentModal').classList.add('active');
}

// Traiter le paiement
function processPayment() {
    const cardName = document.getElementById('cardName').value;
    const cardNumber = document.getElementById('cardNumber').value.replace(/\s/g, '');
    const cardExpiry = document.getElementById('cardExpiry').value;
    const cardCVV = document.getElementById('cardCVV').value;

    if (!cardName || !cardNumber || !cardExpiry || !cardCVV) {
        showNotification('Veuillez remplir tous les champs de paiement', 'error');
        return;
    }

    if (cardNumber.length !== 16) {
        showNotification('Numéro de carte invalide', 'error');
        return;
    }

    if (cardExpiry.length !== 5) {
        showNotification('Date d\'expiration invalide (MM/YY)', 'error');
        return;
    }

    if (cardCVV.length !== 3) {
        showNotification('CVV invalide', 'error');
        return;
    }

    // Simuler traitement du paiement
    const confirmation = confirm('Confirmer le paiement de ' + selectedCoiffure.price + '€ ?');
    if (!confirmation) return;

    // Créer la réservation
    const reservation = {
        id: Date.now(),
        coiffure: selectedCoiffure.name,
        price: selectedCoiffure.price,
        date: document.getElementById('dateInput').value,
        time: document.getElementById('timeInput').value,
        clientName: document.getElementById('clientName').value,
        clientPhone: document.getElementById('clientPhone').value,
        barber: selectedCoiffure.barber,
        status: 'confirmed',
        createdAt: new Date().toLocaleString('fr-FR')
    };

    reservations.push(reservation);
    saveReservations();

    // Fermer modals
    document.getElementById('paymentModal').classList.remove('active');
    
    showNotification('✓ Paiement réussi! Votre réservation est confirmée.', 'success');
    
    // Réinitialiser
    selectedCoiffure = null;
    
    // Afficher les réservations
    setTimeout(() => {
        switchTab('reservations');
    }, 1500);
}

// Changer d'onglet
function switchTab(tabName) {
    // Masquer tous les onglets
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });

    // Désactiver tous les boutons
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // Afficher le nouvel onglet et activer le bouton
    document.getElementById(tabName).classList.add('active');
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');

    currentTab = tabName;

    if (tabName === 'reservations') {
        renderReservations();
    } else if (tabName === 'calendar') {
        renderCalendar();
    }
}

// Afficher les réservations
function renderReservations() {
    const listContainer = document.getElementById('reservationsList');
    listContainer.innerHTML = '';

    if (reservations.length === 0) {
        listContainer.innerHTML = `
            <div class="empty-state" style="grid-column: 1/-1;">
                <h3>Aucune réservation</h3>
                <p>Vous n'avez pas encore de réservation. Explorez nos services!</p>
            </div>
        `;
        return;
    }

    reservations.forEach(res => {
        const card = document.createElement('div');
        card.className = 'reservation-card';
        card.innerHTML = `
            <h3>${res.coiffure}</h3>
            <p><strong>Coiffeur:</strong> ${res.barber}</p>
            <p><strong>Date:</strong> ${new Date(res.date).toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
            <p><strong>Heure:</strong> ${res.time}</p>
            <p><strong>Client:</strong> ${res.clientName}</p>
            <p><strong>Téléphone:</strong> ${res.clientPhone}</p>
            <p><strong>Montant payé:</strong> ${res.price}€</p>
            <span class="reservation-status status-${res.status}">✓ ${res.status === 'confirmed' ? 'Confirmée' : res.status}</span>
            <div style="margin-top: 15px; display: flex; gap: 10px;">
                <button class="btn btn-primary" style="flex: 1;" onclick="editReservation(${res.id})">Modifier</button>
                <button class="btn" style="flex: 1; background: #e74c3c; color: white;" onclick="cancelReservation(${res.id})">Annuler</button>
            </div>
        `;
        listContainer.appendChild(card);
    });
}

// Modifier réservation
function editReservation(id) {
    const reservation = reservations.find(r => r.id === id);
    if (!reservation) return;

    alert(`Modification de la réservation:\n${reservation.coiffure} - ${reservation.date} ${reservation.time}`);
}

// Annuler réservation
function cancelReservation(id) {
    if (confirm('Êtes-vous sûr de vouloir annuler cette réservation?')) {
        reservations = reservations.filter(r => r.id !== id);
        saveReservations();
        renderReservations();
        showNotification('Réservation annulée', 'warning');
    }
}

// Calendrier
function renderCalendar() {
    const container = document.getElementById('calendarContainer');
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();

    container.innerHTML = `
        <div class="calendar-header">
            <button onclick="previousMonth()">← Précédent</button>
            <h2 id="monthYear">${new Date(year, month, 1).toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })}</h2>
            <button onclick="nextMonth()">Suivant →</button>
        </div>
        <div class="calendar-days" id="calendarDays"></div>
    `;

    generateCalendarDays(year, month);
}

function generateCalendarDays(year, month) {
    const calendarDays = document.getElementById('calendarDays');
    calendarDays.innerHTML = '';

    const daysOfWeek = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];
    daysOfWeek.forEach(day => {
        const header = document.createElement('div');
        header.className = 'calendar-day-header';
        header.textContent = day;
        calendarDays.appendChild(header);
    });

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysInPrevMonth = new Date(year, month, 0).getDate();

    // Jours du mois précédent
    for (let i = firstDay === 0 ? 6 : firstDay - 1; i > 0; i--) {
        const day = document.createElement('div');
        day.className = 'calendar-day other-month';
        day.textContent = daysInPrevMonth - i + 1;
        calendarDays.appendChild(day);
    }

    // Jours du mois actuel
    const today = new Date();
    for (let i = 1; i <= daysInMonth; i++) {
        const day = document.createElement('div');
        day.className = 'calendar-day';
        
        if (year === today.getFullYear() && month === today.getMonth() && i === today.getDate()) {
            day.classList.add('today');
        }
        
        day.textContent = i;
        day.style.cursor = 'pointer';
        day.addEventListener('click', () => {
            showNotification(`Sélectionné: ${i} ${new Date(year, month, 1).toLocaleDateString('fr-FR', { month: 'long' })}`, 'success');
        });
        calendarDays.appendChild(day);
    }

    // Jours du mois suivant
    const totalCells = calendarDays.children.length - 7; // -7 pour les headers
    const remainingCells = 42 - totalCells; // 6 rows * 7 days
    for (let i = 1; i <= remainingCells; i++) {
        const day = document.createElement('div');
        day.className = 'calendar-day other-month';
        day.textContent = i;
        calendarDays.appendChild(day);
    }
}

function previousMonth() {
    const monthYear = document.getElementById('monthYear').textContent;
    const date = new Date(monthYear);
    date.setMonth(date.getMonth() - 1);
    generateCalendarDays(date.getFullYear(), date.getMonth());
    document.getElementById('monthYear').textContent = date.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' });
}

function nextMonth() {
    const monthYear = document.getElementById('monthYear').textContent;
    const date = new Date(monthYear);
    date.setMonth(date.getMonth() + 1);
    generateCalendarDays(date.getFullYear(), date.getMonth());
    document.getElementById('monthYear').textContent = date.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' });
}

// Notifications
function showNotification(message, type = 'info') {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.className = `notification show ${type}`;
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 4000);
}

// Local Storage
function saveReservations() {
    localStorage.setItem('reservations', JSON.stringify(reservations));
}

function loadReservations() {
    const saved = localStorage.getItem('reservations');
    if (saved) {
        reservations = JSON.parse(saved);
    }
}

// Pagination
function setupPagination() {
    // La pagination est déjà gérée par CSS Grid responsive
}
