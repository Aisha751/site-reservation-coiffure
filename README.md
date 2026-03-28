# 🎨 BeautyBook - Site de Réservation de Coiffures

Un site web moderne et complet pour réserver des services de coiffure en ligne.

## ✨ Fonctionnalités

✅ **Catalogue de Services**
- 8 services de coiffure différents
- Images, descriptions et tarifs
- Filtrage par recherche et prix

✅ **Système de Réservation**
- Sélection de date et d'heure
- Formulaire client (nom, téléphone)
- Calendrier de disponibilités

✅ **Paiement Sécurisé**
- Formulaire de carte bancaire
- Validation des données
- Confirmation de paiement

✅ **Gestion des Réservations**
- Affichage de toutes les réservations
- Modification et annulation possibles
- Sauvegarde locale (localStorage)

✅ **Interface Responsive**
- Design mobile-first
- Compatible tous appareils
- Animations fluides

## 📁 Structure du Projet

```
Réservation_coiffures/
├── index.html          # Page principale
├── style.css           # Feuille de styles
├── script.js           # Logique JavaScript
├── README.md           # Documentation
└── package.json        # Configuration npm (optionnel)
```

## 🚀 Comment Utiliser

### Option 1 : Ouverture simple
1. Ouvrez simplement le fichier `index.html` dans votre navigateur
2. Le site fonctionne immédiatement !

### Option 2 : Avec un serveur local (recommandé)

#### Avec Python 3:
```bash
python -m http.server 8000
```
Puis allez à: `http://localhost:8000`

#### Avec Python 2:
```bash
python -m SimpleHTTPServer 8000
```

#### Avec Node.js:
```bash
npx http-server
```

#### Avec PHP:
```bash
php -S localhost:8000
```

## 📋 Services Disponibles

| Service | Prix | Durée | Coiffeur |
|---------|------|-------|----------|
| Coupe Classique | 25€ | 30 min | Jean |
| Coupe Dégradée | 35€ | 45 min | Marc |
| Coupe Femme Courte | 40€ | 45 min | Sophie |
| Coupe Femme Mi-Longue | 50€ | 60 min | Sophie |
| Coupe Femme Longue | 60€ | 75 min | Marie |
| Coloration Complète | 95€ | 120 min | Marie |
| Balayage/Mèches | 75€ | 90 min | Sophie |
| Traitement Cheveux | 45€ | 45 min | Jean |

## 🎯 Guide d'Utilisation

### 1. Parcourir les Services
- Consultez la grille des coiffures disponibles
- Utilisez la barre de recherche pour filtrer par nom
- Utilisez le filtre de prix pour affiner votre recherche

### 2. Faire une Réservation
- Cliquez sur "Réserver" sur la coiffure désirée
- Sélectionnez une date (à partir d'aujourd'hui)
- Choisissez une heure (9h à 17h)
- Entrez vos coordonnées (nom et téléphone)
- Cliquez sur "Réserver et Payer"

### 3. Effectuer le Paiement
- Entrez les détails de votre carte bancaire
- Vérifiez le montant
- Confirmez le paiement
- Reçu de confirmation automatique

### 4. Gérer vos Réservations
- Allez dans "Mes Réservations"
- Consultez toutes vos réservations confirmées
- Modifiez ou annulez une réservation

### 5. Consulter le Calendrier
- Cliquez sur "Calendrier"
- Naviguez entre les mois
- Sélectionnez une date pour voir les disponibilités

## 🛠️ Technologie Utilisée

- **HTML5** : Structure sémantique
- **CSS3** : Design moderne avec gradients et animations
- **JavaScript Vanilla** : Aucune dépendance externe
- **LocalStorage** : Sauvegarde des réservations

## 💳 Format de Test pour le Paiement

Vous pouvez utiliser ces données fictives pour tester :
- **Carte**: 4111 1111 1111 1111
- **Expiration**: 12/25
- **CVV**: 123
- **Nom**: Votre nom

## 📱 Responsive Design

Le site s'adapte parfaitement à :
- 📱 Téléphones (320px+)
- 📱 Tablettes (768px+)
- 💻 Ordinateurs de bureau (1024px+)

## 🎨 Personnalisation

### Changer la couleur de thème
Dans `style.css`, modifiez:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Ajouter des services
Dans `script.js`, modifiez le tableau `coiffuresData`:
```javascript
{
    id: 9,
    name: "Votre service",
    description: "Description",
    price: 50,
    duration: 60,
    barber: "Nom du coiffeur",
    image: "url_de_l_image"
}
```

### Modifier les horaires
Dans `script.js`, modifiez les options de temps en HTML:
```html
<option value="09:00">09:00</option>
```

## 🔒 Sécurité

⚠️ **Important**: Ceci est une application de démonstration. 
- Les paiements ne sont pas réellement traités
- Les données sont stockées localement (pas de serveur)
- Pour une utilisation en production, intégrez une vraie API de paiement (Stripe, PayPal, etc.)

## 📞 Support

Po des questions ou des suggestions, vous pouvez:
- Modifier directement les fichiers
- Consulter les commentaires dans le code
- Tester les différentes fonctionnalités

## 📄 Licence

Libre d'utilisation et de modification.

---

**Créé avec ❤️ pour BeautyBook** - Réservez votre beauté en ligne ! ✨
