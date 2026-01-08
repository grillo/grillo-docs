---
sidebar_position: 5
title: Détails du capteur
---

# Détails du capteur

Le panneau de détails du capteur fournit des informations complètes sur un seul capteur, y compris les données en temps réel, la configuration et les métriques de santé.

## Ouvrir les détails du capteur

Accédez aux détails du capteur en :
- Cliquant sur un capteur sur la carte
- Cliquant sur une ligne dans la vue tableau
- Utilisant la recherche pour trouver un capteur

![Panneau de détails du capteur](/img/placeholder-sensor-detail.svg)
<!-- TODO: Replace with actual screenshot -->

## Sections du panneau de détails

### En-tête

Le haut du panneau affiche :
- **Nom de station** - Code de station FDSN
- **Indicateur de statut** - En ligne/Hors ligne/Avertissement
- **Actions rapides** - Modifier, Supprimer, etc.
- **Type de capteur** - Grillo One ou Grillo Pulse

### Section statut

Statut actuel du capteur :

| Champ | Description |
|-------|-------------|
| Connexion | Statut En ligne/Hors ligne |
| Dernière activité | Horodatage des dernières données |
| Temps de fonctionnement | Temps depuis le dernier redémarrage |
| Signal | Force du signal WiFi ou cellulaire |
| Batterie | Niveau de batterie (Pulse uniquement) |

### Section localisation

Informations géographiques :

| Champ | Description |
|-------|-------------|
| Coordonnées | Latitude, longitude |
| Altitude | Hauteur au-dessus du niveau de la mer |
| Adresse | Adresse physique (si renseignée) |
| Site | Description ou notes du site |

### Section configuration

Paramètres actuels :

| Champ | Description |
|-------|-------------|
| Code de station | Identifiant de station FDSN |
| Code de réseau | Identifiant de réseau |
| Code de localisation | Identifiant de localisation |
| Codes de canaux | Canaux de données |
| Taux d'échantillonnage | Fréquence d'échantillonnage des données |

### Section appareil

Informations matérielles :

| Champ | Description |
|-------|-------------|
| Numéro de série | Identifiant unique de l'appareil |
| Type d'appareil | Grillo One / Grillo Pulse |
| Firmware | Version actuelle du firmware |
| Matériel | Révision matérielle |

## Données en temps réel

### Forme d'onde en direct

Si le capteur est en ligne, vous pouvez voir :
- Affichage de la forme d'onde en temps réel
- Données des dernières minutes
- Contrôles de zoom et de déplacement

### Indicateurs de qualité des données

Indicateurs visuels pour la qualité des données :
- Cohérence du taux d'échantillonnage
- Détection des lacunes
- Niveaux de bruit

## Onglets

### Onglet Vue d'ensemble

Résumé du statut du capteur et informations clés (vue par défaut).

### Onglet Données

Vues détaillées des données :
- Historique des formes d'onde
- Téléchargements de données
- Métriques de qualité

### Onglet Configuration

Tous les paramètres configurables :
- Informations de station
- Détails de localisation
- Paramètres avancés

[Configurer les capteurs →](/dashboard/sensors/configuring-sensor)

### Onglet Historique

Informations historiques :
- Changements de statut
- Changements de configuration
- Historique des alertes

## Actions rapides

Actions disponibles depuis le panneau de détails :

| Action | Description |
|--------|-------------|
| Modifier | Ouvrir l'éditeur de configuration |
| Localiser | Centrer la carte sur ce capteur |
| Télécharger | Exporter les données du capteur |
| Redémarrer | Redémarrage à distance du capteur |
| Supprimer | Retirer du réseau |

## Détails du statut

### Statut en ligne

Quand en ligne, vous verrez :
- Indicateur de statut vert
- Horodatage récent
- Flux de données actif
- Force du signal

### Statut hors ligne

Quand hors ligne :
- Indicateur de statut gris
- Horodatage de dernière activité
- Pas de données en direct
- Raisons possibles

### Statut avertissement

L'indicateur jaune signifie :
- Connecté mais avec des problèmes
- Problèmes de qualité des données
- Batterie faible (Pulse)
- Signal faible

### Statut erreur

L'indicateur rouge signifie :
- Problème critique détecté
- Nécessite une attention immédiate
- Vérifiez les détails de l'erreur

## Notifications

### Alertes du capteur

Configurez des alertes pour ce capteur :
- Notifications de changement de statut
- Alertes de qualité des données
- Avertissements de batterie

[Paramètres de notification →](/dashboard/settings/notifications)

## Fermer le panneau

Fermez le panneau de détails en :
- Cliquant sur le bouton X
- Cliquant en dehors du panneau
- Appuyant sur Échap
- Sélectionnant un autre capteur

## Vue mobile

Sur les appareils mobiles :
- Le panneau s'ouvre en plein écran
- Balayez pour naviguer entre les onglets
- Utilisez le bouton retour pour fermer

## Dépannage

### Les détails ne se chargent pas

1. Vérifiez la connexion Internet
2. Rafraîchissez la page
3. Vérifiez que le capteur existe
4. Vérifiez vos permissions

### Les données ne se mettent pas à jour

1. Vérifiez que le capteur est en ligne
2. Vérifiez les problèmes de connectivité
3. Rafraîchissez le panneau
4. Vérifiez la latence des données

### La configuration ne s'enregistre pas

1. Vérifiez la connexion Internet
2. Vérifiez que vous avez les permissions de modification
3. Examinez les messages d'erreur
4. Réessayez ou contactez le support

## Guides connexes

- [Configurer les capteurs](/dashboard/sensors/configuring-sensor)
- [Nommage des stations](/dashboard/sensors/station-naming)
- [Statut du capteur](/dashboard/sensors/sensor-status)
