---
sidebar_position: 6
title: Configurer les capteurs
---

# Configurer les capteurs

Apprenez à configurer les paramètres des capteurs à distance depuis le tableau de bord Grillo Cloud.

## Accéder à la configuration

1. Accédez au panneau de détails du capteur
2. Cliquez sur l'onglet **« Configuration »** ou le bouton **« Modifier »**
3. Le formulaire de configuration s'ouvrira

![Configuration du capteur](/img/placeholder-sensor-config.svg)
<!-- TODO: Replace with actual screenshot -->

## Catégories de configuration

### Identification de la station

Configurez comment le capteur est identifié dans la communauté des données sismiques :

| Champ | Description | Exemple |
|-------|-------------|---------|
| Code de station | Identifiant de station FDSN | "GRIL01" |
| Code de réseau | Identifiant de réseau | "GR" |
| Code de localisation | Modificateur de localisation | "00" |

[Guide détaillé du nommage des stations →](/dashboard/sensors/station-naming)

### Informations de localisation

Définissez la position géographique du capteur :

| Champ | Description |
|-------|-------------|
| Latitude | Degrés décimaux (-90 à 90) |
| Longitude | Degrés décimaux (-180 à 180) |
| Altitude | Mètres au-dessus du niveau de la mer |
| Nom du site | Description de l'emplacement |

[Guide détaillé de localisation →](/dashboard/sensors/location-info)

### Paramètres d'affichage

Configurez comment le capteur apparaît dans le tableau de bord :

| Champ | Description |
|-------|-------------|
| Nom d'affichage | Nom convivial pour le capteur |
| Description | Notes sur l'installation |
| Tags | Étiquettes pour l'organisation |

### Paramètres des données

Configurez les paramètres de collecte de données :

<!-- TODO: Confirm available data settings -->

| Paramètre | Options |
|-----------|---------|
| Taux d'échantillonnage | Standard, Élevé, Bas |
| Format des données | Natif, miniSEED |
| Compression | Activée, Désactivée |

## Effectuer des modifications

### Processus de modification

1. Ouvrez le formulaire de configuration
2. Effectuez vos modifications
3. Vérifiez les modifications
4. Cliquez sur **« Enregistrer »**

### Synchronisation de la configuration

Après l'enregistrement :
1. Les modifications sont stockées dans Grillo Cloud
2. La configuration est envoyée au capteur
3. Le capteur accuse réception
4. Le statut se met à jour pour afficher la nouvelle configuration

:::note
La synchronisation de la configuration nécessite que le capteur soit en ligne. Les modifications seront appliquées lorsque les capteurs hors ligne se reconnecteront.
:::

### Modifications en attente

Si le capteur est hors ligne :
- Les modifications sont mises en file d'attente
- Le statut affiche « Configuration en attente »
- Appliquées lorsque le capteur se reconnecte

## Configuration en masse

### Mettre à jour plusieurs capteurs

Pour appliquer la même configuration à plusieurs capteurs :

<!-- TODO: Confirm bulk config process -->

1. Sélectionnez les capteurs dans la vue tableau
2. Cliquez sur **« Modification en masse »**
3. Choisissez les champs à mettre à jour
4. Entrez les nouvelles valeurs
5. Appliquez aux capteurs sélectionnés

### Modèles de configuration

<!-- TODO: Confirm if templates are available -->

Enregistrez les configurations courantes comme modèles :
1. Configurez un capteur comme souhaité
2. Cliquez sur **« Enregistrer comme modèle »**
3. Appliquez le modèle à d'autres capteurs

## Paramètres avancés

### Communication réseau

Paramètres affectant la communication du capteur :

| Paramètre | Description |
|-----------|-------------|
| Intervalle de heartbeat | Fréquence de mise à jour du statut |
| Intervalle d'envoi des données | Fréquence d'envoi des données |
| Comportement de réessai | Gestion des échecs de connexion |

### Mises à jour du firmware

Gérez le firmware du capteur :

1. Vérifiez la version actuelle du firmware
2. Consultez les mises à jour disponibles
3. Planifiez ou appliquez les mises à jour

:::warning
Les mises à jour du firmware peuvent causer une brève déconnexion. Planifiez en conséquence.
:::

### Réinitialisation d'usine

Réinitialisez le capteur à la configuration par défaut :

1. Accédez aux paramètres avancés
2. Cliquez sur **« Réinitialisation d'usine »**
3. Confirmez l'action
4. Le capteur sera réinitialisé et nécessitera une reconfiguration

## Validation de la configuration

### Champs requis

Certains champs sont obligatoires :
- Code de station (pour la conformité FDSN)
- Coordonnées de localisation (pour l'affichage sur la carte)

### Validation du format

Les champs sont validés pour le format correct :
- Les coordonnées doivent être dans des plages valides
- Les codes de station suivent les règles FDSN
- Les noms ont des limites de caractères

### Messages d'erreur

Si la configuration échoue :
- Le message d'erreur explique le problème
- Les champs invalides sont mis en surbrillance
- Corrigez les erreurs et réessayez

## Historique de configuration

### Consulter l'historique

Voir les changements de configuration passés :
1. Ouvrez les détails du capteur
2. Accédez à l'onglet Historique
3. Consultez le journal des modifications de configuration

### Annuler des modifications

Pour annuler un changement de configuration :
1. Trouvez la configuration précédente dans l'historique
2. Cliquez sur **« Restaurer »**
3. Confirmez l'annulation

## Bonnes pratiques

### Avant de configurer

- Assurez-vous que le capteur est en ligne pour une synchronisation immédiate
- Documentez les paramètres actuels avant de les modifier
- Testez les modifications sur un capteur avant l'application en masse

### Conventions de nommage

- Utilisez des formats de code de station cohérents
- Incluez des informations de localisation significatives
- Documentez toute configuration non standard

### Gestion des modifications

- Enregistrez les changements de configuration significatifs
- Coordonnez les modifications avec votre équipe
- Surveillez les capteurs après les modifications

## Dépannage

### Les modifications ne s'appliquent pas

1. Vérifiez que le capteur est en ligne
2. Vérifiez le statut de configuration en attente
3. Rafraîchissez la page
4. Essayez d'enregistrer à nouveau

### Erreurs de validation

1. Vérifiez les messages d'erreur
2. Vérifiez les formats des champs
3. Assurez-vous que les champs requis sont remplis
4. Consultez les conventions FDSN

### Le capteur ne répond pas

1. Vérifiez le statut du capteur
2. Vérifiez la connectivité réseau
3. Essayez de redémarrer le capteur
4. Contactez le support si les problèmes persistent

## Guides connexes

- [Nommage des stations (FDSN)](/dashboard/sensors/station-naming)
- [Informations de localisation](/dashboard/sensors/location-info)
- [Statut du capteur](/dashboard/sensors/sensor-status)
