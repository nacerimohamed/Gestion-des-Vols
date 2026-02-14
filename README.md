🎬 Movie App React

Movie App هي تطبيق ويب حديث مبني بـ React.js يسمح لك بالبحث عن الأفلام، عرض تفاصيلها، واستكشافها بطريقة احترافية وواجهة مستخدم غامقة وجذابة.

📌 Fonctionnalités

Recherche de films à partir de l'API OMDB

Affichage des résultats sous forme de cards responsives

Détails complets pour chaque film (année, genre, acteurs, résumé, réalisateur, durée, langue)

Navigation fluide entre les pages : Home, Films, À propos

Interface utilisateur moderne avec thème sombre et couleurs accentuées (jaune #ffcc00)

Responsive design pour mobile, tablette et desktop

Hover effects sur boutons et cartes pour expérience utilisateur améliorée

🗂️ Structure du projet
src/
├── components/
│   ├── Navbar.jsx
│   ├── MovieCard.jsx
│   └── SearchForm.jsx
├── pages/
│   ├── Home.jsx
│   ├── Movies.jsx
│   ├── MovieDetails.jsx
│   └── About.jsx
├── App.jsx
└── index.js


Navbar.jsx – barre de navigation avec liens vers toutes les pages et page active highlight

MovieCard.jsx – carte d’affichage des films avec poster, titre, année et bouton détails

SearchForm.jsx – formulaire de recherche stylisé et responsive

Home.jsx – page d’accueil avec présentation et affichage des films recherchés

Movies.jsx – page de recherche avec affichage des résultats

MovieDetails.jsx – page détaillée d’un film sélectionné

About.jsx – page "À propos" avec informations sur l’application

⚡ Installation & Lancement

Cloner le projet :

git clone <URL_DU_PROJET>
cd movie-app


Installer les dépendances :

npm install


Lancer le serveur de développement :

npm start


Ouvrir http://localhost:3000
 pour voir l’application dans le navigateur

La page se rechargera automatiquement lorsque vous modifiez les fichiers

🛠️ Scripts disponibles
Commande	Description
npm start	Démarre l’application en mode développement
npm test	Lance le runner de tests interactif
npm run build	Crée la version de production dans le dossier build
npm run eject	Éjecte Create React App pour contrôler la configuration (opération irréversible)
🎨 Thème & Design

Couleurs principales :

Background : #1c1c1c

Cards : #2a2a2a

Accent / Buttons : #ffcc00

Textes : #fff / #ccc

Effets modernes :

Hover sur cartes et boutons

Shadow et transitions douces

Responsive :

Layout grid pour les films

Flex pour MovieDetails

Mobile-friendly

🔗 API utilisée

OMDB API
 pour récupérer les films et leurs détails

Clé API utilisée : 4a3b711b (pour tests publics)

📚 Ressources

React Documentation

Create React App Documentation

OMDB API

💡 Avenir / Améliorations possibles

Ajouter pagination pour les résultats de recherche

Ajouter favoris / watchlist

Ajouter trending movies ou recommandations

Améliorer animations et transitions

Ajouter authentification utilisateur

💛 Développé avec ❤️ en React.js – interface moderne et agréable pour explorer vos films préférés.