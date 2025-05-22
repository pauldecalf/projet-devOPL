FROM node:20-alpine

WORKDIR /app

# Installation des dépendances
COPY package*.json ./
RUN npm install

# Copie des fichiers du projet
COPY . .

# Exposition du port
EXPOSE 3001

# Commande de démarrage
CMD ["npm", "run", "dev"]
