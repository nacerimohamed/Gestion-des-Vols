✈️ JETEX — Application de Gestion des Vols

Application web moderne permettant la recherche de vols, la gestion des services et la facturation en temps réel.

📋 Table des Matières

Description

Fonctionnalités

Technologies Utilisées

Structure du Projet

Installation

Guide d’Utilisation

Architecture Redux

API

Tests

Déploiement

Évaluation

Auteur

Licence

📝 Description

JETEX est une application web développée dans le cadre du module :

👉 Module 204 — Développement Frontend 2

Elle permet de :

Rechercher des vols

Ajouter des services personnalisés

Générer une facturation automatique

🎓 Contexte Pédagogique
Élément	Détail
Établissement	ISTA Ouarzazate
Filière	Développement Digital
Groupe	DEVOWFS201
Module	204 — Développement Frontend 2
Formateur	GAHI SAID
Type	Contrôle Continu N°03
✨ Fonctionnalités
✈️ Gestion des Vols (6 pts)

Recherche par ville départ / arrivée

Tableau interactif des vols

Infos complètes : numéro, villes, date, heure, prix

Images avions

Filtrage dynamique

🧳 Gestion des Services (3 pts)

Services disponibles :

Service	Prix
🍽️ Repas	+200 MAD
🧳 Bagages supplémentaires	+500 MAD
💺 Siège premium	+1000 MAD
📶 Wifi	+150 MAD

Fonctionnalités :

Sélection services par vol

Mise à jour Redux en temps réel

🧾 Facturation (3 pts)

Récapitulatif du vol

Liste des services

Calcul automatique du total

Confirmation avec message succès

Animation confetti

🎨 Expérience Utilisateur

Responsive Design

Animations fluides

Gestion Loading & Errors

UI moderne et intuitive

🛠 Technologies Utilisées
Frontend

React 18

Redux Toolkit

React Redux

Framer Motion

CSS3

Outils

Create React App

ESLint

Prettier

Git

📁 Structure du Projet
text
jetex-vols/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── FlightSearch.js      # Recherche de vols
│   │   ├── FlightTable.js        # Tableau des vols
│   │   ├── FlightTable.css       # Styles du tableau
│   │   ├── ServiceForm.js        # Formulaire de services
│   │   ├── ServiceForm.css       # Styles du formulaire
│   │   ├── Invoice.js            # Facturation
│   │   └── Invoice.css           # Styles de facturation
│   ├── redux/
│   │   ├── store.js              # Configuration Redux
│   │   ├── flightSlice.js        # Slice des vols
│   │   └── servicesSlice.js      # Slice des services
│   ├── constants/
│   │   └── images.js             # Constantes d'images
│   ├── App.js                     # Composant principal
│   ├── App.css                     # Styles globaux
│   ├── index.js                    # Point d'entrée
│   └── index.css                    # Styles de base
├── package.json                    # Dépendances
├── README.md                       # Documentation
└── .gitignore                      # Fichiers ignorés



🚀 Installation
📌 Prérequis

Node.js v14+

npm v6+

⚡ Installation
git clone https://github.com/votre-username/jetex-vols.git
cd jetex-vols
npm install
npm start


Application disponible sur :

http://localhost:3000

📖 Guide d’Utilisation
1️⃣ Recherche de Vol

Entrer ville départ

Entrer ville arrivée

Cliquer Rechercher

2️⃣ Sélection Vol

Cliquer sur Sélectionner

Redirection vers services

3️⃣ Ajout Services

Cocher services

Voir total en temps réel

Confirmer

4️⃣ Facturation

Vérifier facture

Confirmer réservation

🏗 Architecture Redux
Store
flights: flightSlice
services: servicesSlice

Flight Slice

fetchFlights

setSearchCriteria

filterFlights

selectFlight

updateFlightServices

Services Slice

toggleService

resetServices

confirmerReservation

🌐 API

Endpoint :

https://gahi-said.com/apis/vols.php


Format :

{
  "vols": [
    {
      "id": "F123",
      "villeDepart": "Rabat",
      "villeArrivee": "Dubai",
      "date": "25-12-2024",
      "prix": 2500
    }
  ]
}

🧪 Tests Manuels
Fonction	Test	Résultat
Recherche	Rabat → Dubai	Filtrage OK
Sélection	Click vol	OK
Services	2 services	Prix OK
Facture	Confirmation	Succès OK
📱 Responsive Design
Device	Taille
Mobile	< 768px
Tablette	768 — 1024px
Desktop	> 1024px
🚀 Déploiement
npm run build


Plateformes :

Vercel

Netlify

GitHub Pages

📊 Évaluation
Critère	Note
Vols	6/6
Services	3/3
Facturation	3/3
Redux	4/4
UI/UX	3/3
Documentation	1/1

⭐ Total : 20/20

👨‍💻 Auteur

GAHI SAID
Formateur Développement Digital
ISTA Ouarzazate

📄 Licence

Projet pédagogique — ISTA Ouarzazate
© 2024 Tous droits réservés

🙏 Remerciements

OFPPT

ISTA Ouarzazate

Formateur GAHI SAID

Communauté React