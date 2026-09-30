# TP4 Ekod

## Démarrer l'API

Lancer les conteneurs :

docker compose up -d --build

L'API est disponible sur :

http://localhost:3000

## Utilisation

Les requêtes peuvent être testées avec Bruno.

- GET `/api/tasks` : récupérer les tâches
- POST `/api/tasks` : ajouter une tâche
- PUT `/api/tasks/:id` : modifier une tâche
- PATCH `/api/tasks/:id` : marquer une tâche comme complétée
- DELETE `/api/tasks/:id` : supprimer une tâche

## Arrêter l'application

docker compose down