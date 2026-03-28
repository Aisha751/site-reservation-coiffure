/**
 * API ENDPOINTS DOCUMENTATION
 * BeautyBook - Reservation System
 * 
 * Version: 1.0.0
 * Base URL: http://localhost:3000/api
 */

// ============================================
// AUTHENTIFICATION
// ============================================

/**
 * POST /auth/register
 * Inscription d'un nouvel utilisateur
 * 
 * Body:
 * {
 *   "email": "user@example.com",
 *   "password": "password123",
 *   "phone": "0612345678",
 *   "firstName": "Jean",
 *   "lastName": "Dupont"
 * }
 * 
 * Response: 201
 * {
 *   "id": "user_123",
 *   "email": "user@example.com",
 *   "token": "jwt_token_here"
 * }
 */

/**
 * POST /auth/login
 * Connexion utilisateur
 * 
 * Body:
 * {
 *   "email": "user@example.com",
 *   "password": "password123"
 * }
 * 
 * Response: 200
 * {
 *   "id": "user_123",
 *   "email": "user@example.com",
 *   "token": "jwt_token_here"
 * }
 */

/**
 * POST /auth/logout
 * Déconnexion
 */

// ============================================
// COIFFURES/SERVICES
// ============================================

/**
 * GET /coiffures
 * Récupérer toutes les coiffures
 * 
 * Query Parameters:
 * ?search=coupe
 * ?min_price=20&max_price=80
 * ?barber_id=1
 * 
 * Response: 200
 * [
 *   {
 *     "id": 1,
 *     "name": "Coupe Classique",
 *     "description": "...",
 *     "price": 25,
 *     "duration": 30,
 *     "barber_id": 1,
 *     "image": "url"
 *   }
 * ]
 */

/**
 * GET /coiffures/:id
 * Récupérer les détails d'une coiffure
 * 
 * Response: 200
 * {
 *   "id": 1,
 *   "name": "Coupe Classique",
 *   "description": "...",
 *   "price": 25,
 *   "duration": 30,
 *   "barber": {
 *     "id": 1,
 *     "name": "Jean",
 *     "rating": 4.8
 *   }
 * }
 */

/**
 * POST /coiffures (Admin only)
 * Créer une nouvelle coiffure
 * 
 * Body:
 * {
 *   "name": "Nouvelle Coupe",
 *   "description": "Description",
 *   "price": 50,
 *   "duration": 60,
 *   "barber_id": 1
 * }
 */

/**
 * PUT /coiffures/:id (Admin only)
 * Modifier une coiffure
 */

/**
 * DELETE /coiffures/:id (Admin only)
 * Supprimer une coiffure
 */

// ============================================
// RÉSERVATIONS
// ============================================

/**
 * POST /reservations
 * Créer une nouvelle réservation
 * 
 * Headers:
 * Authorization: Bearer jwt_token
 * 
 * Body:
 * {
 *   "coiffure_id": 1,
 *   "date": "2024-04-15",
 *   "time": "14:30",
 *   "client_name": "Jean Dupont",
 *   "client_phone": "0612345678",
 *   "notes": ""
 * }
 * 
 * Response: 201
 * {
 *   "id": "reservation_123",
 *   "coiffure_id": 1,
 *   "date": "2024-04-15",
 *   "time": "14:30",
 *   "status": "pending",
 *   "created_at": "2024-03-28T10:30:00Z"
 * }
 */

/**
 * GET /reservations
 * Récupérer mes réservations
 * 
 * Headers:
 * Authorization: Bearer jwt_token
 * 
 * Response: 200
 * [
 *   {
 *     "id": "reservation_123",
 *     "coiffure": "Coupe Classique",
 *     "date": "2024-04-15",
 *     "time": "14:30",
 *     "status": "confirmed",
 *     "barber": "Jean"
 *   }
 * ]
 */

/**
 * GET /reservations/:id
 * Récupérer les détails d'une réservation
 * 
 * Response: 200
 * {
 *   "id": "reservation_123",
 *   "coiffure": {...},
 *   "barber": {...},
 *   "date": "2024-04-15",
 *   "time": "14:30",
 *   "duration": 30,
 *   "client_name": "Jean Dupont",
 *   "status": "confirmed",
 *   "payment_status": "paid"
 * }
 */

/**
 * PUT /reservations/:id
 * Modifier une réservation (avant confirmation)
 * 
 * Body:
 * {
 *   "date": "2024-04-16",
 *   "time": "15:00"
 * }
 */

/**
 * DELETE /reservations/:id
 * Annuler une réservation
 * 
 * Response: 200
 * {
 *   "message": "Réservation annulée",
 *   "refund_status": "pending"
 * }
 */

/**
 * GET /reservations/:id/confirm
 * Confirmer une réservation (après paiement)
 */

// ============================================
// DISPONIBILITÉS
// ============================================

/**
 * GET /availability
 * Récupérer les créneaux disponibles
 * 
 * Query Parameters:
 * ?date=2024-04-15
 * ?barber_id=1
 * ?coiffure_id=1
 * 
 * Response: 200
 * {
 *   "date": "2024-04-15",
 *   "slots": [
 *     { "time": "09:00", "available": true },
 *     { "time": "09:30", "available": true },
 *     { "time": "10:00", "available": false },
 *     ...
 *   ]
 * }
 */

/**
 * GET /availability/calendar
 * Récupérer le calendrier avec disponibilités
 * 
 * Query Parameters:
 * ?year=2024&month=4
 * ?barber_id=1
 * 
 * Response: 200
 * {
 *   "month": 4,
 *   "year": 2024,
 *   "days": [
 *     {
 *       "date": "2024-04-15",
 *       "available": true,
 *       "slots_available": 5
 *     }
 *   ]
 * }
 */

// ============================================
// PAIEMENT
// ============================================

/**
 * POST /payments
 * Créer un paiement
 * 
 * Body:
 * {
 *   "reservation_id": "reservation_123",
 *   "amount": 25.00,
 *   "currency": "EUR",
 *   "payment_method": "card",
 *   "card": {
 *     "number": "4111111111111111",
 *     "exp_month": 12,
 *     "exp_year": 2025,
 *     "cvc": "123"
 *   }
 * }
 * 
 * Response: 201
 * {
 *   "id": "payment_123",
 *   "status": "succeeded",
 *   "amount": 25.00,
 *   "currency": "EUR",
 *   "transaction_id": "ch_123456789"
 * }
 */

/**
 * GET /payments/:id
 * Récupérer le statut d'un paiement
 * 
 * Response: 200
 * {
 *   "id": "payment_123",
 *   "status": "succeeded",
 *   "amount": 25.00
 * }
 */

/**
 * POST /payments/:id/refund
 * Remboursement d'un paiement
 * 
 * Response: 200
 * {
 *   "id": "refund_123",
 *   "status": "succeeded",
 *   "amount": 25.00
 * }
 */

// ============================================
// COIFFEURS
// ============================================

/**
 * GET /barbers
 * Récupérer tous les coiffeurs
 * 
 * Response: 200
 * [
 *   {
 *     "id": 1,
 *     "name": "Jean",
 *     "speciality": "Coiffeur Homme",
 *     "rating": 4.8,
 *     "reviews": 42,
 *     "image": "url"
 *   }
 * ]
 */

/**
 * GET /barbers/:id
 * Récupérer les détails d'un coiffeur
 */

/**
 * GET /barbers/:id/reviews
 * Récupérer les avis d'un coiffeur
 */

/**
 * GET /barbers/:id/schedule
 * Récupérer l'emploi du temps d'un coiffeur
 * 
 * Response: 200
 * {
 *   "barber_id": 1,
 *   "schedule": [
 *     {
 *       "day": "Monday",
 *       "start": "09:00",
 *       "end": "17:00",
 *       "break": { "start": "12:00", "end": "14:00" }
 *     }
 *   ]
 * }
 */

// ============================================
// UTILISATEUR PROFIL
// ============================================

/**
 * GET /user/profile
 * Récupérer mon profil
 * 
 * Headers:
 * Authorization: Bearer jwt_token
 * 
 * Response: 200
 * {
 *   "id": "user_123",
 *   "email": "user@example.com",
 *   "first_name": "Jean",
 *   "last_name": "Dupont",
 *   "phone": "0612345678",
 *   "created_at": "2024-01-15T10:30:00Z"
 * }
 */

/**
 * PUT /user/profile
 * Modifier mon profil
 */

/**
 * PUT /user/password
 * Changer le mot de passe
 * 
 * Body:
 * {
 *   "current_password": "old_password",
 *   "new_password": "new_password"
 * }
 */

/**
 * DELETE /user/account
 * Supprimer mon compte
 */

// ============================================
// AVIS ET NOTES
// ============================================

/**
 * POST /reviews
 * Laisser un avis
 * 
 * Body:
 * {
 *   "reservation_id": "reservation_123",
 *   "rating": 5,
 *   "comment": "Très satisfait!"
 * }
 * 
 * Response: 201
 * {
 *   "id": "review_123",
 *   "rating": 5,
 *   "comment": "Très satisfait!"
 * }
 */

/**
 * GET /reviews/barber/:id
 * Récupérer les avis d'un coiffeur
 */

// ============================================
// ADMIN
// ============================================

/**
 * GET /admin/dashboard
 * Tableau de bord administrateur
 * 
 * Headers:
 * Authorization: Bearer admin_token
 * 
 * Response: 200
 * {
 *   "total_reservations": 150,
 *   "total_revenue": 3750.00,
 *   "this_month_reservations": 45,
 *   "active_users": 32
 * }
 */

/**
 * GET /admin/reservations
 * Lister toutes les réservations (pour admin)
 */

/**
 * GET /admin/users
 * Lister tous les utilisateurs
 */

/**
 * GET /admin/statistics
 * Statistiques du salon
 */

// ============================================
// CODES D'ERREUR
// ============================================

/**
 * 400 Bad Request - Données invalides
 * 401 Unauthorized - Authentification requise
 * 403 Forbidden - Accès refusé
 * 404 Not Found - Ressource non trouvée
 * 409 Conflict - Créneau indisponible
 * 422 Unprocessable Entity - Données non valides
 * 500 Internal Server Error - Erreur serveur
 */

// ============================================
// EXEMPLE D'UTILISATION EN JAVASCRIPT
// ============================================

/*

// Créer une réservation
async function createReservation() {
    const response = await fetch('http://localhost:3000/api/reservations', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify({
            coiffure_id: 1,
            date: '2024-04-15',
            time: '14:30',
            client_name: 'Jean Dupont',
            client_phone: '0612345678'
        })
    });
    
    if (response.ok) {
        const reservation = await response.json();
        console.log('Réservation créée:', reservation);
    } else {
        console.error('Erreur:', response.status);
    }
}

// Récupérer les créneaux disponibles
async function getAvailability() {
    const response = await fetch(
        'http://localhost:3000/api/availability?date=2024-04-15&barber_id=1'
    );
    const data = await response.json();
    console.log('Créneaux disponibles:', data.slots);
}

// Effectuer un paiement
async function processPayment(reservationId, card) {
    const response = await fetch('http://localhost:3000/api/payments', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify({
            reservation_id: reservationId,
            amount: 25.00,
            currency: 'EUR',
            payment_method: 'card',
            card: card
        })
    });
    
    const payment = await response.json();
    return payment;
}

*/
