// Configuration du site BeautyBook
// Modifiez ces paramètres pour personnaliser le site

const CONFIG = {
    // Informations du salon
    salon: {
        name: "BeautyBook",
        slogan: "Réservez votre coiffure en ligne",
        email: "contact@beautybook.fr",
        phone: "+33 1 23 45 67 89",
        address: "123 Rue de la Beauté, 75000 Paris"
    },

    // Horaires de travail
    working_hours: {
        start: "09:00",
        end: "17:00",
        break_start: "12:00",
        break_end: "14:00",
        closed_days: [0, 6] // 0 = Dimanche, 6 = Samedi
    },

    // Configuration des coiffeurs
    barbers: [
        { id: 1, name: "Jean", specialite: "Coiffeur Homme", color: "#667eea" },
        { id: 2, name: "Marc", specialite: "Coiffeur Homme", color: "#764ba2" },
        { id: 3, name: "Sophie", specialite: "Coiffeuse Femme", color: "#11998e" },
        { id: 4, name: "Marie", specialite: "Coloriste", color: "#f39c12" }
    ],

    // Configuration du paiement
    payment: {
        currency: "EUR",
        symbol: "€",
        methods: ["carte", "virement", "espece"],
        enable_online: true,
        test_mode: true // Mode test pour la démo
    },

    // Paramètres de sécurité
    security: {
        min_password_length: 6,
        session_timeout: 30, // minutes
        require_email_verification: false
    },

    // Notifications
    notifications: {
        enable_email: false,
        enable_sms: false,
        reminder_hours: 24 // Rappeler 24h avant
    },

    // Design - Couleurs
    theme: {
        primary: "#667eea",
        secondary: "#764ba2",
        success: "#11998e",
        warning: "#f39c12",
        danger: "#e74c3c",
        light: "#f8f9fa",
        dark: "#333333"
    },

    // Textes personnalisés
    translations: {
        welcome: "Bienvenue sur BeautyBook",
        booking_confirm: "Réservation confirmée !",
        payment_success: "Paiement accepté",
        error_message: "Une erreur s'est produite",
        cancel_booking: "Réservation annulée"
    },

    // Délais
    timing: {
        min_advance_booking: 2, // jours
        max_advance_booking: 90, // jours
        cancellation_deadline: 24 // heures
    }
};

// Fonction pour obtenir les paramètres
function getConfig(path) {
    const keys = path.split('.');
    let value = CONFIG;
    for (let key of keys) {
        value = value[key];
    }
    return value;
}

// Fonction pour modifier les paramètres
function setConfig(path, value) {
    const keys = path.split('.');
    let obj = CONFIG;
    for (let i = 0; i < keys.length - 1; i++) {
        obj = obj[keys[i]];
    }
    obj[keys[keys.length - 1]] = value;
}

// Export pour Node.js si nécessaire
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
