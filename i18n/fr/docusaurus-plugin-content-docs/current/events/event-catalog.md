---
sidebar_position: 3
title: Catalogue d'événements
---

# Catalogue d'événements

Le catalogue d'événements est une base de données consultable de tous les séismes détectés par votre réseau.

## Accéder au catalogue

1. Accédez à votre réseau
2. Cliquez sur **« Événements »** dans la barre latérale
3. Le catalogue d'événements s'ouvre

![Catalogue d'événements](/img/placeholder-event-catalog.svg)
<!-- TODO: Replace with actual screenshot -->

## Interface du catalogue

### Liste des événements

Les événements sont affichés dans un tableau avec :

| Colonne | Description |
|---------|-------------|
| Date/Heure | Quand l'événement s'est produit |
| Magnitude | Magnitude de l'événement |
| Localisation | Localisation de l'épicentre |
| Profondeur | Profondeur de l'hypocentre |
| Statut | Confirmé/Préliminaire |

### Tri

Cliquez sur les en-têtes de colonnes pour trier :
- Par date (plus récent/plus ancien)
- Par magnitude (plus grand/plus petit)
- Par localisation (alphabétiquement)

### Filtrage

Filtrer les événements par :
- Plage de dates
- Plage de magnitude
- Zone géographique
- Statut de l'événement

## Rechercher des événements

### Plage de dates

1. Cliquez sur le sélecteur de date
2. Sélectionnez la date de début
3. Sélectionnez la date de fin
4. Appliquez le filtre

### Plage de magnitude

1. Définissez la magnitude minimale
2. Définissez la magnitude maximale (optionnel)
3. Appliquez le filtre

### Zone géographique

1. Cliquez sur « Filtre carte »
2. Dessinez un rectangle ou un polygone
3. Seuls les événements dans la zone sont affichés

### Filtres rapides

Filtres prédéfinis pour les requêtes courantes :
- **Aujourd'hui** - Événements du jour en cours
- **Cette semaine** - 7 derniers jours
- **Ce mois** - 30 derniers jours
- **M3+** - Magnitude 3 et plus
- **M5+** - Magnitude 5 et plus

## Détails des événements

Cliquez sur un événement pour voir les détails :
- Paramètres complets de l'événement
- Données des stations
- Formes d'onde
- Carte de localisation

[Guide des détails des événements →](/events/event-details)

## Paramètres des événements

### Informations d'origine

| Paramètre | Description |
|-----------|-------------|
| Heure d'origine | Quand le séisme s'est produit |
| Latitude | Latitude de l'épicentre |
| Longitude | Longitude de l'épicentre |
| Profondeur | Profondeur sous la surface |
| Nom de localisation | Référence géographique la plus proche |

### Magnitude

| Paramètre | Description |
|-----------|-------------|
| Valeur de magnitude | Taille du séisme |
| Type de magnitude | Méthode de calcul |
| Incertitude | Marge d'erreur |

### Métriques de qualité

| Paramètre | Description |
|-----------|-------------|
| Stations utilisées | Nombre de capteurs dans la solution |
| Écart azimutal | Couverture angulaire autour de l'événement |
| RMS | Qualité de l'ajustement résiduel |
| Statut | Automatique vs révisé |

## Statistiques du catalogue

Voir les statistiques résumées :
- Total des événements sur la période
- Distribution des magnitudes
- Événements dans le temps (histogramme)
- Distribution géographique

## Options d'export

### Formats d'export

| Format | Idéal pour |
|--------|------------|
| CSV | Tableurs, analyse générale |
| JSON | Programmation, APIs |
| QuakeML | Logiciels sismologiques |
| KML | Google Earth, cartographie |

### Exporter les données

1. Définissez vos filtres
2. Cliquez sur **« Exporter »**
3. Choisissez le format
4. Téléchargez le fichier

### Contenu de l'export

Les exports incluent :
- Tous les événements correspondant aux filtres actuels
- Paramètres complets des événements
- Colonnes configurables

## Mises à jour automatiques du catalogue

Le catalogue se met à jour automatiquement :
- Les nouveaux événements apparaissent quand ils sont détectés
- Les événements existants se mettent à jour s'ils sont révisés
- Option de rafraîchissement en temps réel disponible

### Paramètres de rafraîchissement

| Option | Comportement |
|--------|--------------|
| Rafraîchissement auto | Met à jour toutes les N secondes |
| Rafraîchissement manuel | Cliquez pour mettre à jour |
| Notifications | Alerte sur les nouveaux événements |

## Travailler avec le catalogue

### Réviser les événements

Pour le contrôle qualité :
1. Triez par plus récent
2. Révisez chaque nouvel événement
3. Vérifiez la localisation et la magnitude
4. Marquez les événements douteux

### Requêtes de recherche

Pour l'analyse :
1. Définissez la plage de dates pour la période d'étude
2. Filtrez sur la zone d'intérêt
3. Exportez les données
4. Analysez en externe

### Rapports

Pour les rapports réguliers :
1. Configurez des filtres récurrents
2. Exportez à intervalles réguliers
3. Incluez dans les rapports

## Rétention du catalogue

<!-- TODO: Confirm actual retention periods -->

| Niveau | Rétention |
|--------|-----------|
| Standard | 1 an |
| Premium | 5 ans |
| Archive | Disponible sur demande |

## Intégration

### Accès API

Interrogez le catalogue de manière programmatique :
- Points de terminaison API RESTful
- Flux d'événements en temps réel
- Requêtes historiques

[Documentation API →](/api)

### Livraison par webhook

Recevez les événements automatiquement :
- Configurez le point de terminaison webhook
- Les nouveaux événements sont poussés immédiatement
- Données complètes de l'événement dans la charge utile

## Guides connexes

- [Détails des événements](/events/event-details)
- [Export de données](/events/data-export)
- [Intégration API](/events/alerts/api-integration)
