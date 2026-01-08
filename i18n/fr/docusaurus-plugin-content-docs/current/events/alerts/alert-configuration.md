---
sidebar_position: 2
title: Configuration des alertes
---

# Configuration des alertes

Guide étape par étape pour configurer les alertes d'événements pour votre réseau sismique.

## Accéder à la configuration des alertes

1. Connectez-vous à [cloud.grillo.io](https://cloud.grillo.io)
2. Sélectionnez votre organisation et votre réseau
3. Accédez à **Paramètres** → **Alertes**

## Créer une règle d'alerte

### Étape 1 : Démarrer une nouvelle règle

1. Cliquez sur **« Créer une règle d'alerte »** ou **« + »**
2. Le formulaire de configuration de la règle s'ouvre

### Étape 2 : Nommer votre règle

Donnez à la règle un nom descriptif :
- « Événements ressentis - Email »
- « Tous les événements - Webhook »
- « Alerte d'urgence - M5+ »

### Étape 3 : Définir les critères de magnitude

Configurez le seuil de magnitude :

1. Activez **« Filtre de magnitude »**
2. Définissez la **magnitude minimale** (ex. 3.0)
3. Définissez optionnellement la **magnitude maximale**

Exemples de configurations :
| Cas d'utilisation | Mag Min | Mag Max |
|-------------------|---------|---------|
| Tous les événements ressentis | 3.0 | - |
| Modérés uniquement | 4.0 | 5.9 |
| Événements majeurs | 6.0 | - |

### Étape 4 : Définir les critères de localisation

Configurez le filtre géographique :

**Option A : Rayon depuis un point**
1. Activez **« Filtre de distance »**
2. Définissez le point central (lat/long ou recherche)
3. Définissez le rayon en km

**Option B : Zone géographique**
1. Activez **« Filtre de zone »**
2. Dessinez un polygone sur la carte
3. Ou entrez les coordonnées

**Option C : Région nommée**
<!-- TODO: Confirm if named regions are available -->
1. Activez **« Filtre de région »**
2. Sélectionnez parmi les régions prédéfinies

### Étape 5 : Définir les critères de qualité

Filtrez optionnellement par qualité de solution :

| Critère | Objectif |
|---------|----------|
| Stations min | Exiger plus de stations pour déclencher |
| Incertitude max | Rejeter les événements mal localisés |
| Statut | Événements révisés uniquement |

### Étape 6 : Configurer les canaux

Choisissez comment les alertes sont livrées :

**Email**
1. Activez **« Email »**
2. Entrez les adresses des destinataires
3. Configurez le modèle d'email (optionnel)

**Webhook**
1. Activez **« Webhook »**
2. Entrez l'URL du webhook
3. Configurez le format de la charge utile
4. Définissez l'authentification (optionnel)

**Tableau de bord**
1. Activez **« Notification du tableau de bord »**
2. Configurez le son (optionnel)

### Étape 7 : Définir la planification

Configurez quand la règle est active :

**Toujours active :**
- Alertes envoyées 24h/24 et 7j/7

**Planifiée :**
- Définissez les heures actives
- Définissez les jours actifs
- Utile pour les heures de bureau uniquement

### Étape 8 : Enregistrer et activer

1. Vérifiez tous les paramètres
2. Cliquez sur **« Enregistrer la règle »**
3. Basculez **« Activé »** pour activer

## Gérer les règles d'alerte

### Consulter les règles

La liste des règles d'alerte affiche :
- Nom de la règle
- Résumé des critères
- Canaux configurés
- Statut (activé/désactivé)
- Dernier déclenchement

### Modifier les règles

1. Cliquez sur une règle
2. Modifiez les paramètres
3. Enregistrez les modifications

Les modifications prennent effet immédiatement.

### Activer/Désactiver

Basculez les règles on/off sans les supprimer :
- Cliquez sur le bouton d'activation/désactivation
- Les règles désactivées ne se déclenchent pas
- La configuration est préservée

### Supprimer des règles

1. Cliquez sur le menu de la règle (⋮)
2. Sélectionnez **« Supprimer »**
3. Confirmez la suppression

:::warning
Les règles supprimées ne peuvent pas être récupérées. Envisagez de désactiver à la place.
:::

## Configuration des alertes par email

### Gestion des destinataires

Ajouter plusieurs destinataires :
1. Entrez l'adresse email
2. Cliquez sur **« Ajouter »**
3. Répétez pour les destinataires supplémentaires

Supprimer des destinataires :
1. Cliquez sur **« X »** à côté de l'adresse
2. Enregistrez les modifications

### Contenu de l'email

L'email par défaut inclut :
- Résumé de l'événement (magnitude, localisation, heure)
- Image de carte
- Lien vers le tableau de bord

Modèle personnalisé (si disponible) :
- Modifier la ligne d'objet
- Personnaliser le contenu du corps
- Ajouter la marque de l'organisation

## Configuration du webhook

### URL du webhook

Entrez le endpoint pour recevoir les événements :
```
https://votre-serveur.com/api/grillo-events
```

Exigences :
- HTTPS recommandé
- Doit répondre dans le délai imparti
- Retourner 2xx pour succès

### Authentification

**Clé API :**
```
Header: X-API-Key: votre-cle
```

**Bearer token :**
```
Header: Authorization: Bearer votre-token
```

### Format de la charge utile

Charge utile JSON par défaut :
```json
{
  "event_id": "evt_123456",
  "time": "2024-01-15T14:32:45Z",
  "latitude": 37.7749,
  "longitude": -122.4194,
  "depth_km": 8.5,
  "magnitude": 4.2,
  "magnitude_type": "ML",
  "location_description": "5 km NE de Ville"
}
```

[Documentation complète du webhook →](/events/alerts/api-integration)

### Comportement de réessai

Échecs de livraison du webhook :
- Réessayer jusqu'à 3 fois
- Backoff exponentiel
- Échecs enregistrés

## Tester votre configuration

### Alerte de test

1. Ouvrez la règle d'alerte
2. Cliquez sur **« Envoyer un test »**
3. Sélectionnez le canal
4. Vérifiez la réception

### Utiliser des événements historiques

1. Trouvez l'événement dans le catalogue
2. Cliquez sur **« Tester les règles d'alerte »**
3. Voyez quelles règles se déclencheraient
4. Envoyez un test aux canaux

### Vérifier le webhook

1. Utilisez un service de test de webhook
2. Ou vérifiez les journaux de votre serveur
3. Vérifiez que la charge utile est reçue correctement

## Bonnes pratiques

### Commencez prudemment

Commencez avec :
- Des seuils de magnitude plus élevés
- Des filtres géographiques plus larges
- Moins de canaux

Puis ajustez en fonction de l'expérience.

### Testez minutieusement

Avant de vous fier aux alertes :
- Testez chaque canal
- Testez avec de vrais événements
- Vérifiez la livraison aux destinataires
- Documentez le comportement attendu

### Ayez de la redondance

Pour les alertes critiques :
- Plusieurs canaux (email + webhook)
- Plusieurs destinataires
- Systèmes de notification de secours

### Surveillez la santé des alertes

Vérifiez régulièrement :
- Les alertes sont-elles reçues ?
- Tous les canaux fonctionnent-ils ?
- Y a-t-il des échecs de livraison ?

## Dépannage

### La règle ne se déclenche pas

1. Vérifiez que la règle est activée
2. Vérifiez que les critères correspondent à l'événement
3. Vérifiez la planification si configurée
4. Consultez l'historique des alertes

### Mauvais événements déclencheurs

1. Examinez les paramètres de critères
2. Vérifiez le seuil de magnitude
3. Vérifiez le filtre géographique
4. Resserrez les critères

### Échecs de livraison

**Email :**
- Vérifiez les dossiers spam
- Vérifiez les adresses email
- Contactez le support

**Webhook :**
- Vérifiez que le endpoint est accessible
- Vérifiez l'authentification
- Vérifiez les journaux du serveur
- Examinez le format de la charge utile

## Guides connexes

- [Intégration API](/events/alerts/api-integration)
- [Paramètres de notification](/dashboard/settings/notifications)
