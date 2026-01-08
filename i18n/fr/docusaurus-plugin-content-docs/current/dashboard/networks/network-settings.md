---
sidebar_position: 3
title: Paramètres du réseau
---

# Paramètres du réseau

Configurez les paramètres et préférences de votre réseau sismique.

## Accéder aux paramètres du réseau

1. Accédez à votre réseau
2. Cliquez sur **« Paramètres »** dans la barre latérale ou la barre d'outils
3. Ou cliquez sur l'icône d'engrenage à côté du nom du réseau

![Paramètres du réseau](/img/placeholder-network-settings.svg)
<!-- TODO: Replace with actual screenshot -->

## Paramètres généraux

### Nom du réseau

Changez l'affichage du réseau :

1. Trouvez le champ « Nom du réseau »
2. Entrez le nouveau nom
3. Cliquez sur **« Enregistrer »**

### Description

Ajoutez ou mettez à jour la description du réseau :

- Objectif du réseau
- Couverture géographique
- Notes pour les membres de l'équipe

### Emplacement par défaut

Définissez le centre géographique pour la vue carte :

1. Entrez des coordonnées (latitude, longitude), ou
2. Recherchez un emplacement par nom
3. La carte se centrera ici lors de la visualisation du réseau

### Fuseau horaire

Définissez le fuseau horaire par défaut :

- Affecte l'affichage des heures dans le tableau de bord
- Sélectionnez dans la liste déroulante
- Les utilisateurs peuvent remplacer dans leurs paramètres de profil

## Paramètres des données

<!-- TODO: Confirm available data settings -->

### Taux d'échantillonnage

Si configurable au niveau du réseau :

| Option | Cas d'utilisation |
|--------|-------------------|
| Standard | Surveillance normale |
| Haute fréquence | Analyse détaillée |
| Basse fréquence | Situations à faible bande passante |

### Rétention des données

Durée de stockage des données des capteurs :

| Niveau | Rétention |
|--------|-----------|
| Gratuit | À définir jours |
| Standard | À définir jours |
| Premium | À définir jours |

## Paramètres de détection d'événements

Si votre réseau a la détection d'événements activée :

### Paramètres de détection

<!-- TODO: Confirm detection settings -->

| Paramètre | Description |
|-----------|-------------|
| Sensibilité | Seuil de détection |
| Stations minimum | Capteurs requis pour déclencher |
| Zone de couverture | Limites géographiques pour la détection |

### Paramètres d'alerte

Configurez comment les événements déclenchent des alertes :

1. Accédez aux paramètres d'alerte
2. Définissez les seuils de magnitude
3. Configurez les canaux de notification
4. Enregistrez les paramètres

[En savoir plus sur les alertes →](/events/alerts)

## Paramètres d'accès

### Visibilité du réseau

<!-- TODO: Confirm visibility options -->

| Paramètre | Description |
|-----------|-------------|
| Privé | Seuls les membres de l'organisation peuvent voir |
| Public | Données visibles par tous (lecture seule) |

### Accès API

Activez ou désactivez l'accès API aux données du réseau :

1. Basculez l'accès API
2. Générez des clés API si nécessaire
3. Définissez les limites de débit

[Documentation API →](/api)

## Paramètres avancés

### Export de données

Configurez les exports automatiques de données :

1. Activez les exports programmés
2. Définissez la fréquence d'export
3. Choisissez le format (CSV, JSON, etc.)
4. Configurez la destination

### Intégrations

Connectez-vous à des services externes :

<!-- TODO: Confirm available integrations -->

- Points de terminaison webhook
- Systèmes de surveillance tiers
- Intégrations personnalisées via API

## Zone de danger

Actions critiques qui ne peuvent pas être annulées :

### Archiver le réseau

Désactivez temporairement un réseau :
- Les capteurs arrêtent de rapporter
- Les données sont préservées
- Peut être réactivé plus tard

### Supprimer le réseau

Supprimez définitivement le réseau :

1. Cliquez sur **« Supprimer le réseau »**
2. Tapez le nom du réseau pour confirmer
3. Cliquez sur **« Supprimer définitivement »**

:::danger
Supprimer un réseau :
- Supprime toutes les associations de capteurs
- Supprime la configuration du réseau
- Peut affecter l'historique des événements
- **Ne peut pas être annulé**
:::

## Paramètres par rôle

| Paramètre | Propriétaire | Admin | Membre | Lecteur |
|-----------|--------------|-------|--------|---------|
| Voir les paramètres | Oui | Oui | Oui | Oui |
| Modifier les paramètres généraux | Oui | Oui | Non | Non |
| Modifier les paramètres de données | Oui | Oui | Non | Non |
| Modifier les paramètres d'événements | Oui | Oui | Non | Non |
| Supprimer le réseau | Oui | Oui | Non | Non |

## Dépannage

### Les paramètres ne s'enregistrent pas

1. Vérifiez votre connexion Internet
2. Vérifiez que vous avez le rôle Admin ou Propriétaire
3. Rafraîchissez la page et réessayez
4. Vérifiez les erreurs de validation

### Impossible de trouver un paramètre

Certains paramètres peuvent être :
- Disponibles uniquement sur certains niveaux d'abonnement
- Situés dans les paramètres de l'organisation à la place
- Accessibles uniquement à certains rôles

## Étapes suivantes

- [Consulter les bonnes pratiques réseau](/dashboard/networks/network-best-practices)
- [Ajouter des capteurs à votre réseau](/dashboard/sensors/adding-sensor)
- [Configurer la détection d'événements](/events)
