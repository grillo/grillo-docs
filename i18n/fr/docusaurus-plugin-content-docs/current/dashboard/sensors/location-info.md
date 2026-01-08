---
sidebar_position: 8
title: Informations de localisation
---

# Informations de localisation

Configurez des informations de localisation précises pour vos capteurs afin de permettre un affichage correct sur la carte et des calculs de localisation des séismes.

## Pourquoi la localisation est importante

Des emplacements de capteurs précis sont essentiels pour :
- **Affichage sur la carte** - Les capteurs apparaissent aux positions correctes
- **Localisation des événements** - Les localisations des séismes dépendent des positions des stations
- **Qualité des données** - Métadonnées appropriées pour l'analyse des données
- **Conformité** - Les normes FDSN exigent des métadonnées de localisation

## Champs de localisation

### Coordonnées

#### Latitude

- Plage : -90° à +90°
- Format : Degrés décimaux
- Positif : Nord de l'équateur
- Négatif : Sud de l'équateur
- Exemple : 37.7749 (San Francisco)

#### Longitude

- Plage : -180° à +180°
- Format : Degrés décimaux
- Positif : Est du méridien de Greenwich
- Négatif : Ouest du méridien de Greenwich
- Exemple : -122.4194 (San Francisco)

### Altitude

Hauteur au-dessus du niveau de la mer :
- Unité : Mètres
- Peut être négative (sous le niveau de la mer)
- Important pour certains calculs
- Obtenir par GPS, cartes ou relevés

### Profondeur

Distance de la surface au capteur :
- Unité : Mètres
- Généralement 0 pour les installations en surface
- Non nulle pour les capteurs en forage

## Définir la localisation

### Saisie manuelle

1. Ouvrez la configuration du capteur
2. Trouvez la section « Localisation »
3. Entrez les coordonnées :
   - Latitude (degrés décimaux)
   - Longitude (degrés décimaux)
   - Altitude (mètres)
4. Ajoutez les champs optionnels :
   - Nom du site
   - Adresse
   - Notes
5. Enregistrez les modifications

### Utiliser la carte

1. Ouvrez la configuration du capteur
2. Cliquez sur « Définir sur la carte »
3. Naviguez jusqu'à l'emplacement du capteur
4. Cliquez pour placer le marqueur
5. Affinez si nécessaire
6. Confirmez l'emplacement

![Définir l'emplacement sur la carte](/img/placeholder-location-map.svg)
<!-- TODO: Replace with actual screenshot -->

### Utiliser la position actuelle

Si vous configurez depuis le site du capteur :
1. Cliquez sur « Utiliser la position actuelle »
2. Autorisez l'accès à la localisation du navigateur
3. Les coordonnées sont remplies
4. Vérifiez la précision et enregistrez

## Obtenir des coordonnées précises

### Par GPS

Avec un smartphone :
1. Ouvrez une application GPS ou de cartographie
2. Obtenez les coordonnées à l'emplacement du capteur
3. Copiez les valeurs en degrés décimaux
4. Entrez dans le tableau de bord

### Par cartes en ligne

Avec Google Maps :
1. Naviguez jusqu'à l'emplacement du capteur
2. Faites un clic droit sur l'endroit exact
3. Cliquez sur les coordonnées pour les copier
4. Collez dans le tableau de bord

Avec d'autres services de cartographie :
- Apple Plans : Appui long pour déposer un repère
- OpenStreetMap : Cliquez pour voir les coordonnées
- Bing Maps : Clic droit pour les coordonnées

### Par relevés

Pour les exigences de haute précision :
- Équipement de relevé professionnel
- GPS différentiel
- Référence à des repères connus

## Formats de coordonnées

### Degrés décimaux (préféré)

Le tableau de bord utilise les degrés décimaux :
- Latitude : 37.7749
- Longitude : -122.4194

### Conversion depuis DMS

Si vous avez des Degrés-Minutes-Secondes :

**DMS :** 37° 46' 29.64" N, 122° 25' 9.84" O

**En décimal :**
- Latitude : 37 + (46/60) + (29.64/3600) = 37.7749
- Longitude : -(122 + (25/60) + (9.84/3600)) = -122.4194

### Convertisseurs en ligne

Utilisez des outils en ligne pour convertir :
- Recherchez « convertisseur DMS en décimal »
- Entrez les valeurs DMS
- Copiez le résultat décimal

## Métadonnées du site

### Nom du site

Un nom descriptif pour l'emplacement :
- Nom du bâtiment
- Résumé de l'adresse
- Référence à un point de repère

Exemples :
- « Hôtel de ville - Sous-sol »
- « 123 Rue Principale, Bureau 100 »
- « Bâtiment des Sciences de l'Université »

### Description du site

Notes supplémentaires sur l'installation :
- Étage/numéro de pièce
- Détails de montage
- Instructions d'accès
- Coordonnées de contact

### Classification du site

<!-- TODO: Confirm if site classification is available -->

Classification géologique du site :
- Roche
- Sol ferme
- Sol meuble
- Remblai

Cela affecte l'interprétation des mouvements du sol.

## Exigences de précision

### Précision minimale

Pour les fonctionnalités de base :
- Dans les ~100 mètres est acceptable
- Le capteur apparaît correctement sur la carte
- Adéquat pour la visualisation

### Précision recommandée

Pour les réseaux de détection de séismes :
- Dans les ~10 mètres préférable
- Meilleure précision de localisation des événements
- Approprié pour une utilisation scientifique

### Exigences de haute précision

Pour la recherche ou la conformité réglementaire :
- Précision submétrique
- Relevé professionnel recommandé
- Documentez la méthode de mesure

## Mettre à jour la localisation

### Quand mettre à jour

Mettez à jour la localisation si :
- Le capteur est physiquement déplacé
- Les coordonnées originales étaient inexactes
- Des mesures plus précises sont obtenues

### Impact des changements

Changer la localisation :
- Met à jour l'affichage sur la carte immédiatement
- Les données historiques conservent l'ancienne localisation
- Peut affecter les calculs d'événements

### Documenter les changements

Conservez des enregistrements de :
- Localisation précédente
- Nouvelle localisation
- Date du changement
- Raison du changement

## Dépannage

### Le capteur apparaît au mauvais endroit

1. Vérifiez que les coordonnées sont correctes
2. Vérifiez si lat/long sont inversées
3. Vérifiez les erreurs de signe (+/-)
4. Vérifiez le placement de la virgule décimale

### Erreurs de coordonnées courantes

| Erreur | Exemple | Devrait être |
|--------|---------|--------------|
| Inversées | Long : 37.77, Lat : -122.41 | Lat : 37.77, Long : -122.41 |
| Mauvais signe | Lat : -37.77 (SF) | Lat : 37.77 |
| Mauvais format | 37° 46' N | 37.7749 |

### La localisation ne s'enregistre pas

1. Vérifiez le format des coordonnées
2. Vérifiez que les valeurs sont dans la plage valide
3. Vérifiez les erreurs de validation
4. Assurez-vous d'avoir les permissions de modification

## Bonnes pratiques

### Documentez votre méthode

Enregistrez comment les coordonnées ont été obtenues :
- Application GPS smartphone
- Carte en ligne
- Relevé professionnel
- Estimé

### Vérifiez visuellement

Après avoir défini la localisation :
1. Affichez le capteur sur la carte
2. Comparez à la position réelle
3. Vérifiez par rapport à l'imagerie satellite
4. Corrigez si nécessaire

### Révision périodique

- Révisez les localisations périodiquement
- Vérifiez que les capteurs n'ont pas été déplacés
- Mettez à jour les corrections nécessaires

## Guides connexes

- [Configurer les capteurs](/dashboard/sensors/configuring-sensor)
- [Nommage des stations](/dashboard/sensors/station-naming)
- [Vue carte](/dashboard/sensors/map-view)
