const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static(path.join(__dirname)));
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// API pour récupérer les données
app.get('/api/coiffures', (req, res) => {
    res.json([
        {
            id: 1,
            name: "Coupe Classique",
            description: "Une coupe nette et intemporelle pour un look professionnel",
            price: 25,
            duration: 30,
            barber: "Jean"
        },
        {
            id: 2,
            name: "Coupe Dégradée Homme",
            description: "Dégradé moderne avec finition parfaite des contours",
            price: 35,
            duration: 45,
            barber: "Marc"
        },
        {
            id: 3,
            name: "Coupe Femme Courte",
            description: "Coupe moderne et pratique pour les cheveux courts",
            price: 40,
            duration: 45,
            barber: "Sophie"
        },
        {
            id: 4,
            name: "Coupe Femme Mi-Longue",
            description: "Style élégant avec mise en forme professionnelle",
            price: 50,
            duration: 60,
            barber: "Sophie"
        },
        {
            id: 5,
            name: "Coupe Femme Longue",
            description: "Soins et coupe pour cheveux longs avec finitions",
            price: 60,
            duration: 75,
            barber: "Marie"
        },
        {
            id: 6,
            name: "Coloration Complète",
            description: "Coloration complète avec produits de qualité premium",
            price: 95,
            duration: 120,
            barber: "Marie"
        },
        {
            id: 7,
            name: "Balayage/Mèches",
            description: "Balayage ou mèches pour un effet naturel et lumineux",
            price: 75,
            duration: 90,
            barber: "Sophie"
        },
        {
            id: 8,
            name: "Traitement Cheveux",
            description: "Soin profond pour cheveux abîmés ou secs",
            price: 45,
            duration: 45,
            barber: "Jean"
        }
    ]);
});

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`
    ╔════════════════════════════════════════╗
    ║        BeautyBook - Réservation        ║
    ║           Serveur démarré !            ║
    ╠════════════════════════════════════════╣
    ║  📱 Accédez à: http://localhost:${PORT}        ║
    ║  🔧 Node.js server actif               ║
    ║  💾 LocalStorage pour les réservations ║
    ╚════════════════════════════════════════╝
    `);
});
