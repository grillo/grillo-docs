---
sidebar_position: 1
title: Aperçu des alertes
---

# Alertes d'événements

Configurez des notifications en temps réel lorsque des séismes sont détectés par votre réseau.

## Aperçu des alertes

Le système d'alertes :
- Surveille en continu les nouveaux événements
- Évalue les événements selon vos critères
- Envoie des notifications via les canaux configurés
- Fonctionne automatiquement 24h/24 et 7j/7

## Flux d'alerte

```
Événement détecté → Vérification des critères → Alerte déclenchée → Livraison
```

1. **Détection** - Le système détecte un séisme
2. **Évaluation** - L'événement est vérifié selon vos règles d'alerte
3. **Déclenchement** - Si les critères sont remplis, une alerte est générée
4. **Livraison** - Les notifications sont envoyées aux canaux configurés

## Canaux d'alerte

### Email

Recevez des alertes d'événements par email :
- Livraison immédiate
- Détails complets de l'événement
- Liens vers le tableau de bord

### Webhook

Recevez les événements via HTTP POST :
- Livraison en temps réel
- Format lisible par machine
- Intégration avec vos systèmes

[Configuration du webhook →](/events/alerts/api-integration)

### Tableau de bord

Notifications dans l'application :
- Alertes par icône de cloche
- Bannières d'événements
- Notifications sonores (optionnel)

### SMS

<!-- TODO: Confirm if SMS is available -->

Alertes par message texte :
- Résumé bref de l'événement
- Livraison immédiate
- Numéro de téléphone requis

## Configurer les alertes

### Accéder aux paramètres d'alerte

1. Accédez à votre réseau
2. Cliquez sur **« Paramètres »** → **« Alertes »**
3. Ou **« Événements »** → **« Configuration des alertes »**

### Configuration de base

1. **Activer les alertes** - Basculez l'alerte sur activé
2. **Définir les canaux** - Choisissez comment recevoir les alertes
3. **Définir les critères** - Définissez ce qui déclenche les alertes
4. **Enregistrer** - Activez votre configuration

## Critères d'alerte

### Seuil de magnitude

N'alerter que pour les événements au-dessus d'une certaine taille :

| Seuil | Utilisation typique |
|-------|---------------------|
| M2.0+ | Recherche, catalogue complet |
| M3.0+ | Événements ressentis, surveillance générale |
| M4.0+ | Événements significatifs |
| M5.0+ | Événements potentiellement dommageables |

### Filtre géographique

N'alerter que pour les événements dans des zones spécifiques :
- Dessiner un polygone sur la carte
- Définir par coordonnées
- Régions nommées

### Filtre de distance

Alerter selon la distance d'un point :
- Distance du centre-ville
- Distance d'une installation
- Point de référence personnalisé

### Seuil de confiance

Alerter selon la qualité de la solution :
- Nombre minimum de stations requis
- Incertitude maximale autorisée
- Événements révisés uniquement

## Règles d'alerte

Créez plusieurs règles pour différents scénarios :

**Exemples de règles :**

| Règle | Critères | Canal |
|-------|----------|-------|
| Tous les événements | M2.0+, Toute localisation | Tableau de bord |
| Événements ressentis | M3.5+, Dans 100km | Email |
| Significatifs | M5.0+, Toute localisation | Webhook, Email, SMS |

### Priorité des règles

Les règles sont évaluées dans l'ordre :
- La première règle correspondante se déclenche
- Ou toutes les règles correspondantes se déclenchent (configurable)

## Tester les alertes

### Bouton d'alerte de test

Envoyez une notification de test :
1. Allez dans Configuration des alertes
2. Cliquez sur **« Envoyer une alerte de test »**
3. Sélectionnez le canal
4. Vérifiez la livraison

### Utiliser des événements historiques

Testez avec des événements passés :
1. Trouvez l'événement dans le catalogue
2. Cliquez sur **« Simuler l'alerte »**
3. Vérifiez que la notification est reçue

## Modèles d'alerte

Personnalisez le contenu des alertes :

### Modèle d'email

- Format de la ligne d'objet
- Contenu du corps
- Paramètres inclus
- Pied de page/signature

### Charge utile du webhook

- Structure JSON
- Champs inclus
- En-têtes personnalisés

## Historique des alertes

Consultez les alertes passées :
- Quand les alertes ont été envoyées
- Ce qui les a déclenchées
- Statut de livraison
- Cliquez pour voir l'événement

## Bonnes pratiques

### Éviter la fatigue d'alerte

- Définissez des seuils appropriés
- Commencez avec des seuils plus élevés, ajustez vers le bas
- Utilisez différents canaux pour différentes gravités

### Assurer la livraison

- Testez tous les canaux périodiquement
- Ayez des canaux de secours
- Surveillez les échecs

### Répondre de manière appropriée

- Définissez des procédures de réponse
- Formez les destinataires
- Documentez les actions entreprises

## Dépannage

### Alertes non reçues

1. Vérifiez que la configuration des alertes est activée
2. Vérifiez les paramètres de canal (email, URL webhook)
3. Vérifiez les dossiers spam (email)
4. Vérifiez que l'événement correspond aux critères
5. Consultez l'historique des alertes

### Trop d'alertes

1. Augmentez le seuil de magnitude
2. Réduisez le filtre géographique
3. Exigez plus de stations
4. Utilisez le mode résumé

### Alertes retardées

1. Vérifiez la connectivité réseau
2. Vérifiez que le endpoint webhook répond
3. Consultez le statut du système
4. Contactez le support si persistant

## Guides connexes

- [Configuration des alertes](/events/alerts/alert-configuration)
- [Intégration API](/events/alerts/api-integration)
- [Paramètres de notification](/dashboard/settings/notifications)
