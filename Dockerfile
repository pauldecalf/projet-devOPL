FROM node:20-alpine

WORKDIR /app

# Installation des dépendances
COPY package*.json ./
RUN npm install

# Copie des fichiers du projet
COPY . .

# Exposition du port
EXPOSE 3000

# Variables d'environnement
ENV NODE_ENV=development
ENV HOST=0.0.0.0
ENV PORT=3000

# Commande de démarrage
CMD ["npm", "run", "dev"]
