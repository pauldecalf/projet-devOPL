<!-- INSTALLATION.md -->

# Guide d'Installation et de Déploiement

## 1. Prérequis

Avant de commencer, assure-toi que tu as installé les éléments suivants :

- **Node.js** version >= 16.x
- **Docker**
- **Docker Compose**
- **SonarCube / SonarCloud**

## 2. Installation

### Cloner le repository

Commence par cloner ce repository sur ta machine locale :

```bash
git clone https://github.com/LorisPlante/projet-devOPL
cd projet-devOPL
```

### Installer les Dépendances

Une fois dans le dossier du projet, tu dois installer les dépendances nécessaires pour faire fonctionner l'application. Utilise l'une des commandes suivantes,  :

```bash
npm install
# ou
npm i
```


## 3. Pour lancer l'application en local

Pour exécuter les tests:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

L'application sera alors accessible à l'adresse suivante : http://localhost:3000


## 4. Exécuter les Tests
Pour exécuter les tests unitaires de l'application avec Vitest, utilise la commande suivante :


```bash
npm run test
```



## 5. Lancer le serveur Dockeur

Pour lancer le serveur:

```bash
docker compose up --build
```

Pour retourner sur le README du projet : [`README du projet`](README.md)