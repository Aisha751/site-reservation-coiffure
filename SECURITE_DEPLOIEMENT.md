# 🔒 Guide de Déploiement et Sécurité

## ⚠️ IMPORTANT - Avant la Production

Cet application de démonstration nécessite plusieurs modifications avant d'être mise en production.

---

## 🚀 Déploiement

### Option 1 : Hébergement Statique

#### Netlify (Recommandé - Gratuit)
```bash
# Déployer directement depuis GitHub
1. Pusher le code sur GitHub
2. Se connecter à netlify.com
3. Connecter le repo GitHub
4. Cliquer sur "Deploy"
```

#### Vercel
```bash
npm install -g vercel
vercel
```

#### GitHub Pages
```bash
# Pusher simplement tous les fichiers
# Le site sera accessible à: username.github.io/Réservation_coiffures
```

### Option 2 : Hébergement avec Backend

#### Heroku
```bash
npm install -g heroku
heroku login
heroku create nom-app
git push heroku main
```

#### DigitalOcean / Linode / AWS
1. Créer une instance (Ubuntu 20.04+)
2. Installer Node.js et npm
3. Configurer SSL avec Let's Encrypt
4. Utiliser PM2 pour gérer le serveur

```bash
# Installation PM2
npm install -g pm2
pm2 start server.js
pm2 startup
pm2 save
```

---

## 🔐 Sécurité - À FAIRE

### 1. ⚠️ PAIEMENT - INTÉGRER UNE VRAIE API

**NE JAMAIS EXPOSER LES NUMÉROS DE CARTE !**

Choisir une des API sécurisées :

#### Option A : Stripe (Recommandé)
```javascript
// Installation
npm install stripe

// Dans script.js
const stripe = Stripe('pk_live_YOUR_KEY');
const payment = await stripe.createPaymentIntent(...);
```

#### Option B : PayPal
```javascript
// Intégrer PayPal SDK
<script src="https://www.paypal.com/sdk/js?client-id=YOUR_CLIENT_ID"></script>
```

#### Option C : Mollie (Europe)
```bash
npm install @mollie/api-client
```

### 2. 🔑 Authentification - Ajouter JWT

```bash
npm install jsonwebtoken bcryptjs
```

```javascript
// Générer token
const jwt = require('jsonwebtoken');
const token = jwt.sign({ userId: user.id }, 'secret_key', { expiresIn: '24h' });

// Vérifier token
function verifyToken(req, res, next) {
    const token = req.headers['authorization'];
    if (!token) return res.status(403).json({ error: 'Token manquant' });
    
    try {
        const decoded = jwt.verify(token, 'secret_key');
        req.userId = decoded.userId;
        next();
    } catch (err) {
        res.status(401).json({ error: 'Token invalide' });
    }
}
```

### 3. 🚨 Variables d'Environnement

Créer un fichier `.env`:
```
DB_HOST=localhost
DB_USER=admin
DB_PASS=secure_password
STRIPE_KEY=sk_live_xxx
STRIPE_PUBLIC=pk_live_xxx
JWT_SECRET=your_secret_key_here
EMAIL_API_KEY=your_email_service_key
NODE_ENV=production
```

Jamais de hardcode des clés !

### 4. 📧 Email - Ajouter Notifications

```bash
npm install nodemailer
```

```javascript
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Envoyer confirmation
await transporter.sendMail({
    to: client.email,
    subject: 'Réservation confirmée',
    html: `<h1>Votre réservation est confirmée</h1>...`
});
```

### 5. 🛡️ Valider les Données

```bash
npm install joi express-validator
```

```javascript
const { body, validationResult } = require('express-validator');

app.post('/reservations', [
    body('date').isDate().notEmpty(),
    body('time').matches(/^\d{2}:\d{2}$/),
    body('clientName').trim().notEmpty().isLength({ min: 3 }),
    body('clientPhone').matches(/^[\d\s\-\+\(\)]+$/),
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    // Continuer...
});
```

### 6. 🔒 HTTPS - Certificat SSL

```bash
# Avec Let's Encrypt
sudo apt-get install certbot python3-certbot-nginx
sudo certbot certonly --standalone -d www.example.com
```

### 7. 🚫 Protection DDoS

```bash
npm install helmet express-rate-limit
```

```javascript
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

app.use(helmet());

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // Limiter à 100 requêtes par windowMs
});

app.use('/api/', limiter);
```

### 8. 🔄 CORS - Configurer Correctement

```javascript
const cors = require('cors');

app.use(cors({
    origin: 'https://www.example.com',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}));
```

### 9. 💾 Base de Données - Utiliser une vraie DB

#### MongoDB
```bash
npm install mongoose
```

#### PostgreSQL  
```bash
npm install pg sequelize
```

#### MySQL
```bash
npm install mysql2
```

### 10. 📊 Logging et Monitoring

```bash
npm install winston pino
```

```javascript
const logger = require('winston');

logger.info('Réservation créée', { reservationId: res_001 });
logger.error('Erreur de paiement', { error, userId });
```

---

## 🏗️ Architecture Recommandée pour la Production

```
backend/
├── config/
│   ├── database.js
│   ├── stripe.js
│   └── email.js
├── middleware/
│   ├── auth.js
│   ├── validation.js
│   └── errorHandler.js
├── routes/
│   ├── auth.js
│   ├── reservations.js
│   ├── payments.js
│   └── admin.js
├── models/
│   ├── User.js
│   ├── Reservation.js
│   ├── Payment.js
│   └── Barber.js
├── controllers/
│   ├── authController.js
│   ├── reservationController.js
│   └── paymentController.js
├── services/
│   ├── emailService.js
│   ├── paymentService.js
│   └── calendarService.js
├── .env
├── .env.example
├── server.js
└── package.json

frontend/
├── index.html
├── style.css
├── script.js
├── config.js
├── assets/
│   ├── images/
│   └── icons/
├── pages/
│   ├── admin.html
│   └── dashboard.html
└── package.json
```

---

## 🧪 Checklist de Sécurité

- [ ] Intégrer Stripe/PayPal pour les paiements
- [ ] Ajouter JWT pour l'authentification
- [ ] Créer fichier .env avec variables sécurisées
- [ ] Valider toutes les entrées utilisateur
- [ ] Ajouter HTTPS/SSL
- [ ] Configurer CORS correctement
- [ ] Ajouter helmet.js pour les headers
- [ ] Implémenter rate limiting
- [ ] Ajouter logging et monitoring
- [ ] Utiliser une base de données sécurisée
- [ ] Faire un test de pénétration
- [ ] Ajouter CAPTCHA pour les formulaires
- [ ] Chiffrer les données sensibles
- [ ] Faire des backups réguliers
- [ ] Implémenter un WAF (Web Application Firewall)

---

## 📋 Checklist de Performance

- [ ] Minifier CSS/JS
- [ ] Optimiser les images
- [ ] Ajouter un cache
- [ ] Utiliser CDN
- [ ] Activer la compression GZIP
- [ ] Ajouter service worker (PWA)
- [ ] Tester la vitesse avec Lighthouse
- [ ] Implémenter lazy loading

---

## 🚨 Erreurs Courantes à Éviter

❌ **NE PAS FAIRE :**
- Exposer les clés API en front-end
- Stocker les données sensibles en localStorage
- Accepter les numéros de carte sans API sécurisée
- Faire confiance aux données du client
- Oublier de valider côté serveur
- Laisser le mode debug activé
- Utiliser des hashs faibles pour les mots de passe
- Oublier de configurer CORS
- Exposer les erreurs détaillées au client
- Stocker des mots de passe en clair

✅ **À FAIRE :**
- Utiliser des services tiers de paiement
- Valider TOUJOURS côté serveur
- Utiliser des tokens sécurisés
- Chiffrer les données sensibles
- Configurer HTTPS partout
- Faire des tests réguliers
- Utiliser des libraires de sécurité
- Mettre à jour dépendances
- Faire un audit de sécurité

---

## 📞 Ressources Utiles

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Stripe Documentation](https://stripe.com/docs)
- [Node.js Security](https://nodejs.org/en/docs/guides/security/)
- [Express.js Best Practices](https://expressjs.com/)
- [MDN Web Security](https://developer.mozilla.org/en-US/docs/Web/Security)

---

**Mise à jour: 28 Mars 2024** ✨
