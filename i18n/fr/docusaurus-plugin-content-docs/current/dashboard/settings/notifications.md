---
sidebar_position: 2
title: Notifications
---

# Paramètres de notification

Configurez les alertes et notifications pour rester informé sur vos capteurs et les événements détectés.

## Types de notifications

### Notifications de statut des capteurs

Alertes sur la santé des capteurs :

| Alerte | Description |
|--------|-------------|
| Capteur hors ligne | Quand un capteur perd la connexion |
| Capteur en ligne | Quand un capteur se reconnecte |
| Avertissement capteur | Quand des problèmes sont détectés |
| Erreur capteur | Problèmes critiques |

### Notifications d'événements

Alertes sur les séismes détectés (nécessite un abonnement Événements) :

| Alerte | Description |
|--------|-------------|
| Nouvel événement | Quand un séisme est détecté |
| Événement important | Événements au-dessus du seuil de magnitude |
| Événement proche | Événements dans le seuil de distance |

### Notifications système

Alertes de plateforme et de compte :

| Alerte | Description |
|--------|-------------|
| Alertes de sécurité | Tentatives de connexion, changements de mot de passe |
| Maintenance | Avis de maintenance programmée |
| Mises à jour des fonctionnalités | Nouvelles fonctionnalités et changements |

## Canaux de notification

### Email

Recevez des notifications par email :

1. Allez dans Paramètres → Notifications
2. Trouvez la section « Notifications par email »
3. Activez/désactivez les types de notification
4. Vérifiez votre adresse email

**Paramètres email :**
- Livraison immédiate ou résumé
- Par réseau ou tous les réseaux
- Filtrage par gravité

### Tableau de bord

Notifications dans l'application :

- L'icône de cloche affiche le nombre de notifications
- Cliquez pour voir les notifications récentes
- Marquez comme lu ou ignorez

### Webhook

Pour l'intégration avec des systèmes externes :

1. Allez dans Paramètres → Notifications → Webhooks
2. Ajoutez l'URL du webhook
3. Sélectionnez les événements à envoyer
4. Testez le webhook

[Guide d'intégration API →](/events/alerts/api-integration)

## Configurer les notifications

### Configuration de base

1. Accédez à Paramètres → Notifications
2. Choisissez la catégorie de notification
3. Activez/désactivez les alertes individuelles
4. Configurez les seuils
5. Enregistrez les modifications

### Paramètres par réseau

Configurez différentes alertes pour différents réseaux :

1. Sélectionnez le réseau
2. Accédez à Paramètres du réseau → Notifications
3. Remplacez les paramètres de notification par défaut
4. Enregistrez les modifications

### Seuils d'alerte

Pour les notifications d'événements, définissez des seuils :

| Seuil | Description |
|-------|-------------|
| Magnitude minimale | Alerter uniquement au-dessus de cette magnitude |
| Distance maximale | Alerter uniquement dans cette distance |
| Niveau de confiance | Alerter uniquement au-dessus de cette confiance |

## Calendriers de notification

### Heures de silence

Supprimez les notifications non critiques pendant certaines heures :

1. Allez dans les paramètres de notification
2. Activez « Heures de silence »
3. Définissez les heures de début et de fin
4. Choisissez quelles alertes sont supprimées

:::note
Les alertes critiques (erreurs, événements importants) peuvent contourner les heures de silence.
:::

### Mode résumé

Recevez des notifications groupées au lieu d'alertes individuelles :

1. Activez le « Mode résumé »
2. Choisissez la fréquence (horaire, quotidien)
3. Sélectionnez ce qu'il faut inclure
4. Enregistrez les préférences

## Gérer les notifications

### Consulter les notifications

1. Cliquez sur l'icône de cloche dans la navigation
2. Consultez les notifications récentes
3. Cliquez pour voir les détails
4. Marquez comme lu

### Effacer les notifications

- Cliquez sur « Tout marquer comme lu »
- Ou ignorez les notifications individuelles
- Ou effacez toutes les notifications

### Historique des notifications

Consultez les notifications passées :

1. Allez dans Paramètres → Historique des notifications
2. Filtrez par type, date ou statut
3. Recherchez des notifications spécifiques

## Dépannage

### Pas de réception des notifications par email

1. Vérifiez le dossier spam/courrier indésirable
2. Vérifiez l'adresse email dans le profil
3. Vérifiez que les paramètres de notification sont activés
4. Ajoutez Grillo à la liste blanche des emails

### Trop de notifications

1. Ajustez les seuils d'alerte
2. Activez le mode résumé
3. Configurez les heures de silence
4. Réduisez les types de notification activés

### Webhook ne fonctionne pas

1. Vérifiez que l'URL est correcte
2. Vérifiez que le point de terminaison est accessible
3. Examinez les journaux du webhook
4. Testez d'abord avec un point de terminaison simple

## Bonnes pratiques

### Fatigue d'alerte

Évitez la surcharge de notifications :
- Commencez avec moins de notifications
- Ajustez les seuils au fil du temps
- Utilisez le mode résumé pour les non critiques
- Réservez les alertes immédiates pour les événements critiques

### Coordination d'équipe

Pour les organisations :
- Coordonnez qui reçoit quelles alertes
- Évitez les notifications en double pour l'équipe
- Mettez en place des rotations d'astreinte
- Documentez les procédures de notification

### Tests

Lors de la configuration des notifications :
1. Activez une notification de test
2. Vérifiez que la livraison fonctionne
3. Testez chaque canal
4. Documentez la configuration

## Guides connexes

- [Surveillance du statut des capteurs](/dashboard/sensors/sensor-status)
- [Alertes d'événements](/events/alerts)
- [Intégration API](/events/alerts/api-integration)
