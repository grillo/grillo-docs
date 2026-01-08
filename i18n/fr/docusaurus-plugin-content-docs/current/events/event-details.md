---
sidebar_position: 4
title: Détails des événements
---

# Détails des événements

Comprendre les informations détaillées disponibles pour chaque événement sismique détecté.

## Accéder aux détails des événements

1. Ouvrez le catalogue d'événements
2. Cliquez sur une ligne d'événement
3. La vue détaillée de l'événement s'ouvre

![Détails de l'événement](/img/placeholder-event-details.svg)
<!-- TODO: Replace with actual screenshot -->

## Sections des détails de l'événement

### En-tête

La section supérieure affiche :
- ID de l'événement
- Date et heure
- Magnitude (affichage proéminent)
- Résumé de la localisation
- Statut de l'événement

### Carte de localisation

Carte interactive affichant :
- Localisation de l'épicentre (étoile/cercle)
- Positions des stations (triangles)
- Ellipse d'incertitude
- Contexte régional

Contrôles de la carte :
- Zoom avant/arrière
- Déplacer pour explorer
- Basculer les calques

### Informations d'origine

Paramètres détaillés de la source :

| Paramètre | Exemple | Description |
|-----------|---------|-------------|
| Heure d'origine | 2024-01-15 14:32:45 UTC | Quand le séisme s'est produit |
| Latitude | 37.7749° N | Latitude de l'épicentre |
| Longitude | 122.4194° O | Longitude de l'épicentre |
| Profondeur | 8.5 km | Profondeur sous la surface |
| Localisation | 5 km NE de Ville | Référence géographique |

### Informations de magnitude

| Paramètre | Exemple | Description |
|-----------|---------|-------------|
| Magnitude | 4.2 | Taille de l'événement |
| Type de magnitude | ML (locale) | Méthode de calcul |
| Incertitude | ±0.2 | Marge d'erreur |

### Métriques de qualité

Indicateurs de qualité de la solution :

| Métrique | Bon | Mauvais | Description |
|----------|-----|---------|-------------|
| Stations utilisées | 10+ | Moins de 4 | Capteurs dans la solution |
| Écart azimutal | Moins de 90° | Plus de 180° | Couverture angulaire |
| Résidu RMS | Moins de 0.5s | Plus de 2.0s | Qualité de l'ajustement |
| Erreur horizontale | Moins de 5km | Plus de 20km | Incertitude de localisation |
| Erreur de profondeur | Moins de 5km | Plus de 20km | Incertitude de profondeur |

## Données des stations

### Stations contributrices

Liste des capteurs qui ont détecté l'événement :

| Colonne | Description |
|---------|-------------|
| Station | Code de station |
| Distance | Depuis l'épicentre |
| Arrivée P | Heure d'arrivée de l'onde P |
| Arrivée S | Heure d'arrivée de l'onde S |
| Amplitude | Mouvement du sol maximal |
| Résidu | Résidu temporel |

### Carte des stations

Carte affichant :
- Localisations des stations
- Cercles de distance depuis l'épicentre
- Codé par couleur selon l'amplitude/arrivée

## Formes d'onde

### Affichage des formes d'onde

Voir les enregistrements sismiques de chaque station :
- Alignés temporellement sur l'événement
- Options d'affichage filtré
- Pointés P et S marqués

### Contrôles des formes d'onde

| Contrôle | Fonction |
|----------|----------|
| Zoom | Étendre le temps/amplitude |
| Déplacer | Défiler dans le temps |
| Filtre | Appliquer un filtre de fréquence |
| Empiler | Superposer plusieurs traces |

### Informations d'amplitude

Valeurs de mouvement du sol maximal :
- PGA (Accélération maximale du sol)
- PGV (Vitesse maximale du sol)
- Spectres de réponse (si disponibles)

## Chronologie de l'événement

Pour les événements à mise à jour rapide :
- Heure de détection initiale
- Mises à jour des paramètres
- Heure de la solution finale
- Heures de livraison des alertes

## Comparer les événements

Voir cet événement en contexte :
- Événements passés similaires
- Sismicité régionale
- Analyse de séquence (répliques)

## Statut de l'événement

### Automatique

Solution automatique initiale :
- Générée par l'algorithme
- Peut être révisée
- Étiquette « Préliminaire »

### Révisé

Après révision humaine :
- Qualité vérifiée
- Paramètres vérifiés
- Étiquette « Révisé »

### Final

Solution faisant autorité :
- Aucun changement ultérieur attendu
- Publié dans le catalogue
- Étiquette « Final »

## Actions

Actions disponibles pour les événements :

| Action | Description |
|--------|-------------|
| Exporter | Télécharger les données de l'événement |
| Partager | Obtenir un lien partageable |
| Signaler | Signaler un problème avec l'événement |
| Imprimer | Vue prête à imprimer |

## Options d'export

Exporter un événement individuel :
- Fichier de paramètres complet
- Données de forme d'onde
- Données des stations
- Cartes et images

Formats :
- QuakeML (format standard)
- JSON
- CSV
- Rapport PDF

## Comprendre les incertitudes

### Incertitude de localisation

Affichée comme une ellipse d'erreur sur la carte :
- Longueur du demi-grand axe
- Longueur du demi-petit axe
- Orientation

Ellipse plus petite = localisation plus certaine.

### Incertitude de magnitude

Exprimée en valeur ± :
- M 4.2 ±0.2 signifie probablement entre 4.0-4.4
- L'incertitude diminue avec plus de stations

### Pourquoi les incertitudes varient

| Facteur | Effet sur l'incertitude |
|---------|-------------------------|
| Plus de stations | Incertitude plus basse |
| Meilleure distribution | Incertitude plus basse |
| Magnitude plus élevée | Incertitude plus basse |
| Bruit des stations | Incertitude plus élevée |

## Guides connexes

- [Catalogue d'événements](/events/event-catalog)
- [Comment fonctionne la détection](/events/how-detection-works)
- [Export de données](/events/data-export)
