# 🎯 Guide Complet d'Utilisation - BeautyBook

## Table des Matières

1. [Installation](#-installation)
2. [Interface Principale](#-interface-principale)
3. [Faire une Réservation](#-faire-une-réservation)
4. [Gérer vos Réservations](#-gérer-vos-réservations)
5. [Autres Fonctionnalités](#-autres-fonctionnalités)
6. [Dépannage](#-dépannage)

---

## 🔧 Installation

### Méthode 1 : Double-cliquer sur le fichier
```
1. Naviguez vers le dossier Réservation_coiffures
2. Double-cliquez sur index.html
3. Le site s'ouvre dans votre navigateur
```

### Méthode 2 : Avec Python
```bash
cd Réservation_coiffures
python -m http.server 8000
# Puis ouvrez http://localhost:8000
```

### Méthode 3 : Avec Node.js
```bash
cd Réservation_coiffures
npm install
node server.js
# Puis ouvrez http://localhost:3000
```

### Méthode 4 : Ouvrir le fichier de démarrage
```
Ouvrez le fichier DEMARRAGE.html pour les instructions pas à pas
```

---

## 🎨 Interface Principale

### Composition du Site

```
┌─────────────────────────────────────────┐
│  ✨ BeautyBook - Réservation           │  ← En-tête
│  Réservez votre coiffure en ligne      │
├─────────────────────────────────────────┤
│ [Coiffures] [Réservations] [Calendrier]│  ← Navigation
├─────────────────────────────────────────┤
│                                         │
│  [Rechercher...] [Tous les prix ▼]     │  ← Filtres
│                                         │
│  ┌──────────┐  ┌──────────┐             │
│  │Coupe 1   │  │Coupe 2   │  ...        │  ← Services
│  │25€       │  │35€       │             │
│  │[Réserver]│  │[Réserver]│             │
│  └──────────┘  └──────────┘             │
│                                         │
└─────────────────────────────────────────┘
```

### Boutons de Navigation

- **Coiffures** : Affiche tous les services disponibles
- **Mes Réservations** : Voir vos réservations confirmées
- **Calendrier** : Consulter les disponibilités

---

## ✨ Faire une Réservation

### Étape 1 : Parcourir les Services

**🔍 Filtrer les coiffures :**

- **Par recherche** : Tapez un mot-clé (ex: "coupe", "coloration")
- **Par prix** :
  - Moins de 30€ : Coupes basiques
  - 30€ - 60€ : Services standard
  - Plus de 60€ : Services premium

**Exemple :**
```
Vous cherchez une "Coupe Femme"
→ Tapez "femme" dans la recherche
→ Les cartes s'affichent automatiquement
```

### Étape 2 : Sélectionner un Service

1. Cliquez sur **[Réserver]** sur une coiffure
2. Une fenêtre s'ouvre avec les détails :
   - Photo du service
   - Nom et description
   - Prix exact
   - Durée (en minutes)
   - Nom du coiffeur

**Exemple : Coupe Classique**
```
Coupe Classique
Une coupe nette et intemporelle
Prix: 25€
Durée: 30 min
Coiffeur: Jean
```

### Étape 3 : Choisir Date et Heure

**📅 Sélectionner la Date :**
- Un calendrier s'affiche
- Vous pouvez réserver à partir d'aujourd'hui
- Jusqu'à 3 mois à l'avance

**⏰ Choisir l'Heure :**
- Heures disponibles : **9h à 17h**
- Par créneaux de 30 minutes
- Exemples : 09:00, 09:30, 10:00, etc.

**Menu déroulant :**
```
09:00 ← Matin
09:30
10:00
...
14:00 ← Après déjeuner
14:30
...
17:00 ← Fin de journée
```

### Étape 4 : Remplir vos Coordonnées

**Informations requises :**

| Champ | Exemple | Règles |
|-------|---------|--------|
| **Nom** | Jean Dupont | Minimum 3 caractères |
| **Téléphone** | 06 12 34 56 78 | Numéro valide |

**Conseil :** Utilisez vos vraies coordonnées pour recevoir les confirmations

### Étape 5 : Cliquer sur [Réserver et Payer]

- Vérifiez vos informations
- Cliquez sur le bouton **Réserver et Payer**
- La fenêtre de paiement s'ouvre

---

## 💳 Effectuer le Paiement

### Formulaire de Paiement

**Champs à remplir :**

```
┌────────────────────────────────────────┐
│ Paiement Sécurisé                      │
├────────────────────────────────────────┤
│ Service: Coupe Classique               │
│ Montant: 25€                           │
│ Date/Heure: 2024-04-15 à 14:30        │
├────────────────────────────────────────┤
│ Titulaire de la carte: [____________]  │
│ Numéro de carte:       [____ ____ ____│
│ Expiration: [__/__]    CVV: [___]      │
├────────────────────────────────────────┤
│       [Confirmer le Paiement]           │
└────────────────────────────────────────┘
```

### Données de Test (Mode Démo)

Pour tester sans argent réel :

```
💳 Numéro de carte: 4111 1111 1111 1111
📅 Expiration:      12/25
🔐 CVV:             123
👤 Nom:             Votre nom
```

**Autres cartes de test valides :**
```
Visa standard:   4242 4242 4242 4242
Visa débit:      4000 0566 5566 5556
Mastercard:      5555 5555 5555 4444
```

### Validation du Paiement

- ✅ Avant d'appuyer sur **Confirmer** :
  - Vérifiez le montant
  - Vérifiez la date/heure
  - Vérifiez les infos de carte

- ✅ Après confirmation :
  - Message de succès s'affiche
  - Vous êtes redirigé vers "Mes Réservations"
  - Un email de confirmation est envoyé (en production)

---

## 📅 Gérer vos Réservations

### Voir vos Réservations

**Onglet "Mes Réservations" :**

1. Cliquez sur **[Mes Réservations]** en haut
2. Toutes vos réservations s'affichent en cartes

**Chaque carte affiche :**
```
┌─────────────────────────────────────┐
│ Coupe Classique                     │
│                                     │
│ Coiffeur: Jean                      │
│ Date: lundi 15 avril 2024           │
│ Heure: 14:30                        │
│ Client: Jean Dupont                 │
│ Téléphone: 06 12 34 56 78          │
│ Montant payé: 25€                  │
│                                     │
│ ✓ Confirmée                         │
│ [Modifier]  [Annuler]               │
└─────────────────────────────────────┘
```

### Modifier une Réservation

1. Cliquez sur **[Modifier]** sur la réservation
2. Une fenêtre s'ouvre (comme lors de la création)
3. Modifiez la date et/ou l'heure
4. Cliquez **[Mettre à jour]**

**Limitations :**
- Vous pouvez modifier 48h avant l'heure
- Modifications sans frais additionnels

### Annuler une Réservation

1. Cliquez sur **[Annuler]** sur la réservation
2. Confirmez l'annulation
3. La réservation disparaît

**Remboursement :**
- Annulation > 24h : Remboursement complet
- Annulation < 24h : Frais de 10%
- À jour de RDV : Aucun remboursement

---

## 📆 Autre Fonctionnalité

### Calendrier des Disponibilités

**Onglet "Calendrier" :**

1. Cliquez sur **[Calendrier]**
2. Le mois actuel s'affiche avec :
   - **Jours en couleur** = Disponibilités
   - **Sombre** = Pas de disponibilités
   - **Surlignée** = Jour d'aujourd'hui

**Navigation :**
- Cliquez **←Précédent** pour les mois passés
- Cliquez **Suivant→** pour les futurs mois

**Interactivité :**
- Cliquez sur un jour = Affiche les créneaux libres
- Voix les heures disponibles pour ce jour

---

## 🔍 Autres Fonctionnalités

### Recherche Avancée

**Rechercher par :**
- Nom du service : "coupe", "couleur", "traitement"
- Type de client : "femme", "homme"
- Coiffeur : "Jean", "Sophie", etc.

**Exemple d'utilisation :**
```
Vous voulez une coiffure avec Marie
→ Tapez "marie" dans la recherche
→ Ses services s'affichent
```

### Filtrage par Prix

**3 catégories :**

🟢 **Moins de 30€**
- Coupe Classique (25€)
- Parfait pour les budgets serrés

🟡 **30€ - 60€**
- Coupe Dégradée (35€)
- Coupe Femme Courte (40€)
- Traitement Cheveux (45€)
- Standard et qualité

🔴 **Plus de 60€**
- Coupe Femme Longue (60€)
- Balayage/Mèches (75€)
- Coloration Complète (95€)
- Services premium

### Notifications

**Messages de confirmation :**

```
✓ Succès (Vert)
  ├─ Paiement réussi
  ├─ Réservation confirmée
  └─ Modifications enregistrées

⚠️ Avertissement (Orange)
  ├─ Réservation annulée
  └─ Champ requis manquant

❌ Erreur (Rouge)
  ├─ Données invalides
  └─ Paiement échoué
```

Les notifications disparaissent automatiquement après 4 secondes.

---

## 🆘 Dépannage

### Problème : "Le site ne s'ouvre pas"

**Solution 1 :**
- Vérifiez que index.html est dans le même dossier
- Double-cliquez sur index.html

**Solution 2 :**
- Ouvrez votre navigateur
- Allez à : `Fichier → Ouvrir`
- Sélectionnez index.html

**Solution 3 :**
- Utilisez Python : `python -m http.server 8000`
- Allez à : http://localhost:8000

### Problème : "Mes réservations disparaissent"

**Cause :** Le cache du navigateur est vidé

**Solution :**
1. Appuyez sur `Ctrl + Shift + Suppr` (Windows)
2. Ou `Cmd + Shift + Suppr` (Mac)
3. Sélectionnez "Tout effacer"
4. Rechargez la page

**Alternative :**
- Utilisez une fenêtre de navigation privée
- Ou un autre navigateur

### Problème : "Le formulaire ne s'envoie pas"

**Causes possibles :**
- Un champ est vide
- Le téléphone n'est pas valide (ex: lettres dedans)
- La date n'est pas sélectionnée
- L'heure n'est pas sélectionnée

**Solution :**
- Vérifiez tous les champs
- Téléphone = chiffres seulement (06-...-)
- Remplissez tout et réessayez

### Problème : "Le paiement ne fonctionne pas"

**Pour la démo :**
- Utilisez les données de test (voir section Paiement)
- Nom : N'importe quel nom
- Numéro : 4111 1111 1111 1111
- Expiration : 12/25
- CVV : 123

### Problème : "Comment imprimer ma réservation?"

1. Allez dans "Mes Réservations"
2. Appuyez sur `Ctrl + P` (Windows) ou `Cmd + P` (Mac)
3. Sélectionnez "Imprimer en PDF"
4. Enregistrez le fichier

### Problème : J'ai oublié ma réservation

**Vérifiez :**
1. Onglet "Mes Réservations"
2. Filtrez la recherche par date ou nom du service
3. Ou consultez le Calendrier

---

## 💡 Conseils et Astuces

### ⏰ Meilleurs Moments pour Réserver

- **Avant 10h** : Créneaux les moins chargés
- **Midi** : Pause déjeuner, moins de demandes
- **Fin d'après-midi** : Plus de disponibilités

### 💰 Économiser de l'Argent

- Réserver 1-2 mois à l'avance
- Cumuler services (coupe + traitement)
- Demander des forfaits
- Suivre les promotions

### 👥 Choisir le Bon Coiffeur

- **Jean** : Expert hommes, coupes classiques
- **Marc** : Dégradés modernes hommes
- **Sophie** : Femmes, mises en forme
- **Marie** : Coloriste experte (20 ans)

### 📞 Communiquer sur Place

- Montrez la photo de la coiffure
- Décrivez vos préférences
- Posez des questions
- Demandez des conseils

---

## 🌟 FAQ - Questions Fréquemment Posées

**Q: Puis-je modifier ma réservation après paiement?**
R: Oui, 48h avant l'heure en changeant date/heure.

**Q: Puis-je annuler et me faire rembourser?**
R: Oui, 24h avant. Sinon frais de 10%.

**Q: Le paiement est-il sécurisé?**
R: En démo, c'est fictif. En production, j'utiliserai Stripe/PayPal.

**Q: Quels navigateurs sont supportés?**
R: Chrome, Firefox, Safari, Edge (tous modernes).

**Q: Puis-je voir mes réservations passées?**
R: Actuellement non, mais c'est prévain pour la production.

**Q: Y a-t-il une limite de réservations?**
R: Non, autant que vous voulez !

**Q: Quand dois-je arriver?**
R: 5-10 min avant l'heure réservée.

**Q: Comment annuler via téléphone?**
R: Appelez-nous à +33 1 23 45 67 89

---

## 📱 Utilisation Mobile

Le site fonctionne parfaitement sur :
- 📱 Téléphones (360px+)
- 📱 Tablettes (768px+)
- 💻 Ordinateurs (1024px+)

**Conseil mobile :**
- Le tap est plus facile que le clic
- Utilisez les filtres pour affiner
- Le calendrier est tactile

---

**Version:** 1.0.0  
**Dernière mise à jour:** 28 Mars 2024  
**Créé avec ❤️ - BeautyBook** ✨
