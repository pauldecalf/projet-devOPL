FROM node:20-alpine

WORKDIR /app

# Installation des dépendances
COPY package*.json ./
RUN npm install

# Copie des fichiers du projet
COPY . .

# Exposition du port
EXPOSE 3000

# Configuration des variables d'environnement
ENV PORT=3000
ENV NODE_ENV=development
ENV HOSTNAME="0.0.0.0"

# Commande de démarrage
CMD ["npm", "run", "dev"] 