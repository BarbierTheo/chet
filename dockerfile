# Utiliser l'image Node.js officielle
FROM node:18

# Créer et définir le répertoire de travail
WORKDIR /app

# Copier le package.json et package-lock.json (si présent)
COPY package*.json ./

# Installer les dépendances du projet
RUN npm install

# Copier tous les fichiers du projet dans le conteneur
COPY . .

# Exposer le port utilisé par Vite
EXPOSE 5173

# Commande pour démarrer le serveur Vite
CMD ["npm", "run", "dev"]