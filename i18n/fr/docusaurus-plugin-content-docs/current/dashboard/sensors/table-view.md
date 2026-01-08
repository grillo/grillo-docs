---
sidebar_position: 4
title: Vue tableau
---

# Vue tableau

La vue tableau affiche vos capteurs dans un format de liste triable et filtrable, idéal pour gérer de nombreux capteurs.

## Accéder à la vue tableau

1. Accédez à votre réseau
2. Cliquez sur l'onglet **« Tableau »** ou l'icône de liste
3. Les capteurs sont affichés sous forme de tableau

![Vue tableau](/img/placeholder-table-view.svg)
<!-- TODO: Replace with actual screenshot -->

## Colonnes du tableau

### Colonnes par défaut

| Colonne | Description |
|---------|-------------|
| Statut | Indicateur En ligne/Hors ligne/Avertissement |
| Station | Code de station (format FDSN) |
| Nom | Nom d'affichage du capteur |
| Type | Grillo One ou Grillo Pulse |
| Dernière activité | Horodatage des dernières données reçues |
| Emplacement | Coordonnées ou nom de l'emplacement |

### Colonnes supplémentaires

Cliquez sur « Colonnes » pour afficher/masquer :
- Numéro de série
- Nom du réseau
- Date d'installation
- Version du firmware
- Force du signal
- Niveau de batterie (Pulse uniquement)

## Tri

### Tri par colonne unique

Cliquez sur un en-tête de colonne pour trier :
- Premier clic : Tri croissant (A-Z, plus ancien d'abord)
- Deuxième clic : Tri décroissant (Z-A, plus récent d'abord)
- Troisième clic : Effacer le tri

### Tri multi-colonnes

<!-- TODO: Confirm if multi-sort is available -->

Maintenez Maj et cliquez sur des colonnes supplémentaires pour ajouter des tris secondaires.

## Filtrage

### Filtres rapides

Utilisez les filtres prédéfinis en haut :
- **Tous** - Afficher tous les capteurs
- **En ligne** - Uniquement les capteurs en ligne
- **Hors ligne** - Uniquement les capteurs hors ligne
- **Problèmes** - Capteurs avec avertissements/erreurs

### Filtres de colonnes

Filtrer par valeurs de colonnes spécifiques :
1. Cliquez sur l'icône de filtre dans un en-tête de colonne
2. Sélectionnez ou entrez les critères de filtre
3. Appliquez le filtre

### Recherche

Utilisez la zone de recherche pour trouver des capteurs :
- Recherche par nom de station
- Recherche par numéro de série
- Recherche par emplacement

## Sélectionner des capteurs

### Sélection unique

Cliquez sur une ligne pour sélectionner un capteur :
- Ouvre le panneau de détails du capteur
- Ou le met en surbrillance pour une action

### Sélection multiple

<!-- TODO: Confirm if multi-select is available -->

Sélectionnez plusieurs capteurs pour des opérations en masse :
1. Cliquez sur la case à cocher dans la première colonne
2. Ou utilisez Maj+Clic pour une plage
3. Ou utilisez Ctrl+Clic pour des sélections individuelles

## Opérations en masse

Lorsque plusieurs capteurs sont sélectionnés :

| Action | Description |
|--------|-------------|
| Exporter | Exporter les données des capteurs sélectionnés |
| Mettre à jour | Appliquer des paramètres à plusieurs capteurs |
| Supprimer | Retirer les sélectionnés du réseau |

## Pagination

Pour les réseaux avec de nombreux capteurs :

### Contrôles de page

- Naviguez entre les pages avec les flèches
- Accédez directement à un numéro de page spécifique
- Changez le nombre d'éléments par page (25, 50, 100)

### Affichage du nombre

Le tableau affiche :
- « Affichage de X-Y sur Z capteurs »
- Le total se met à jour avec les filtres

## Exporter les données

### Exporter le tableau

Exporter la vue actuelle du tableau :
1. Appliquez les filtres/tris souhaités
2. Cliquez sur le bouton **« Exporter »**
3. Choisissez le format (CSV, Excel)
4. Téléchargez le fichier

### Contenu de l'export

L'export inclut :
- Toutes les colonnes visibles
- Les filtres appliqués
- L'ordre de tri actuel

## Personnaliser le tableau

### Ordre des colonnes

Faites glisser les en-têtes de colonnes pour réorganiser :
1. Cliquez et maintenez un en-tête de colonne
2. Faites glisser vers la nouvelle position
3. Relâchez pour placer

### Largeur des colonnes

Redimensionnez les colonnes :
1. Survolez la bordure d'une colonne
2. Faites glisser pour redimensionner
3. Double-cliquez sur la bordure pour ajuster automatiquement

### Enregistrer la disposition

<!-- TODO: Confirm if layout saving is available -->

Enregistrez votre configuration de tableau personnalisée :
1. Configurez vos colonnes et ordre préférés
2. Cliquez sur **« Enregistrer la disposition »**
3. La disposition persiste pour les sessions futures

## Indicateurs de statut

### Icônes de la colonne statut

| Icône | Signification |
|-------|---------------|
| Point vert | En ligne et en streaming |
| Point gris | Hors ligne |
| Triangle jaune | Condition d'avertissement |
| Cercle rouge | Condition d'erreur |

### Colonne dernière activité

Affiche quand les données ont été reçues pour la dernière fois :
- « À l'instant » - Dans la dernière minute
- « Il y a 5 min » - Données récentes
- « Il y a 2 heures » - Peut indiquer un problème
- « Il y a 1 jour » - Probablement hors ligne

## Navigation au clavier

| Touche | Action |
|--------|--------|
| Haut/Bas | Naviguer dans les lignes |
| Entrée | Ouvrir le capteur sélectionné |
| Échap | Effacer la sélection |
| Ctrl+F | Mettre le focus sur la recherche |

## Vue mobile

Sur les appareils mobiles :
- Le tableau défile horizontalement
- Moins de colonnes affichées par défaut
- Appuyez sur une ligne pour voir les détails
- Utilisez le menu responsive pour les actions

## Dépannage

### Le tableau ne se charge pas

1. Vérifiez la connexion Internet
2. Rafraîchissez la page
3. Essayez un autre navigateur
4. Videz le cache du navigateur

### Les filtres ne fonctionnent pas

1. Vérifiez la syntaxe du filtre
2. Effacez tous les filtres et réappliquez
3. Rafraîchissez la page

### Colonnes manquantes

1. Vérifiez le menu « Colonnes »
2. Activez les colonnes souhaitées
3. Réinitialisez aux valeurs par défaut si nécessaire

## Guides connexes

- [Vue carte](/dashboard/sensors/map-view)
- [Détails du capteur](/dashboard/sensors/sensor-details)
- [Configurer les capteurs](/dashboard/sensors/configuring-sensor)
