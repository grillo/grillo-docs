---
sidebar_position: 3
title: Vue carte
---

# Vue carte

La vue carte fournit une visualisation géographique de vos capteurs, montrant leurs emplacements et leur statut en un coup d'œil.

## Accéder à la vue carte

1. Accédez à votre réseau
2. Cliquez sur l'onglet ou l'icône **« Carte »**
3. La carte affichera tous les capteurs du réseau

![Vue carte](/img/placeholder-map-view.svg)
<!-- TODO: Replace with actual screenshot -->

## Interface de la carte

### Marqueurs de capteurs

Les capteurs sont affichés comme marqueurs sur la carte :

| Couleur du marqueur | Statut |
|---------------------|--------|
| Vert | En ligne - connecté et en streaming |
| Gris | Hors ligne - actuellement non connecté |
| Jaune | Avertissement - connecté avec des problèmes |
| Rouge | Erreur - problème nécessitant une attention |

### Contrôles de la carte

| Contrôle | Fonction |
|----------|----------|
| Zoom avant/arrière | Molette de souris ou boutons +/- |
| Déplacer | Cliquer et faire glisser |
| Réinitialiser la vue | Cliquer sur le bouton accueil/réinitialiser |
| Plein écran | Cliquer sur le bouton plein écran |

### Calques

<!-- TODO: Confirm available layers -->

Basculer les calques de la carte :
- **Satellite** - Imagerie satellite
- **Terrain** - Vue topographique
- **Rues** - Vue carte routière
- **Événements** - Afficher les événements détectés (si activé)

## Interagir avec les capteurs

### Popup d'info rapide

Cliquez sur un marqueur de capteur pour voir :
- Nom du capteur/code de station
- Statut actuel
- Horodatage des dernières données
- Liens d'action rapide

### Panneau de détails du capteur

Cliquez sur **« Voir les détails »** dans la popup pour ouvrir le [panneau de détails du capteur](/dashboard/sensors/sensor-details) complet.

### Vue en cluster

Quand vous dézoomez, les capteurs proches peuvent se regrouper :
- Les clusters affichent le nombre de capteurs
- Cliquez sur un cluster pour zoomer
- Les couleurs indiquent le statut global du cluster

## Filtrer les capteurs

### Par statut

Filtrer pour afficher uniquement certains statuts :
1. Cliquez sur le bouton **« Filtrer »**
2. Sélectionnez les types de statut à afficher :
   - En ligne
   - Hors ligne
   - Avertissement
   - Erreur
3. La carte se met à jour pour afficher les capteurs filtrés

### Par type de capteur

Filtrer par type d'appareil :
- Grillo One
- Grillo Pulse

### Par recherche

Rechercher des capteurs spécifiques :
1. Utilisez la zone de recherche
2. Entrez le nom de la station ou le numéro de série
3. Les capteurs correspondants sont mis en évidence

## Fonctionnalités de la carte

### Ajustement automatique

La carte s'ajuste automatiquement pour afficher tous les capteurs au chargement. Pour ré-ajuster :
1. Cliquez sur le bouton « Ajuster aux limites »
2. La carte zoomera pour inclure tous les capteurs

### Emplacement actuel

Si les permissions de localisation sont accordées :
- Votre emplacement apparaît comme un point bleu
- Utile lors des visites sur les sites des capteurs

### Barre d'échelle

La barre d'échelle affiche l'échelle actuelle de la carte :
- S'ajuste quand vous zoomez
- S'affiche en km ou miles selon les préférences

## Événements sur la carte

Si votre réseau a la détection d'événements activée :

### Marqueurs d'événements

- Les événements apparaissent comme des marqueurs en étoile ou en cercle
- La couleur indique la magnitude ou l'ancienneté
- Cliquez pour les détails de l'événement

### Visualisation des événements

- Les cartes de secousses peuvent être affichées
- Animations de formes d'onde disponibles
- L'historique des événements peut être affiché

[En savoir plus sur les événements →](/events)

## Paramètres de la carte

### Configurer la carte

Accédez aux paramètres de la carte via l'icône d'engrenage :

| Paramètre | Description |
|-----------|-------------|
| Zoom par défaut | Niveau de zoom initial |
| Style de carte | Type de calque par défaut |
| Seuil de cluster | Quand regrouper les marqueurs |
| Actualisation auto | Fréquence de mise à jour |

### Enregistrer les vues

<!-- TODO: Confirm if view saving is available -->

Enregistrez des vues de carte personnalisées :
1. Configurez votre vue préférée
2. Cliquez sur **« Enregistrer la vue »**
3. Nommez la vue
4. Accédez aux vues enregistrées depuis le menu déroulant

## Export

### Capture d'écran

Exportez la vue actuelle de la carte comme image :
1. Cliquez sur le bouton export/téléchargement
2. Choisissez le format d'image (PNG, JPG)
3. L'image est téléchargée

### Imprimer

Imprimez la vue actuelle de la carte :
1. Cliquez sur le bouton imprimer
2. Ajustez les paramètres d'impression
3. Imprimez ou enregistrez en PDF

## Conseils pour une utilisation efficace

### Organiser la visibilité des capteurs

- Utilisez des coordonnées de localisation précises pour un placement exact
- Configurez les noms des capteurs pour une identification facile
- Utilisez des conventions de nommage cohérentes

### Performance

Pour les réseaux avec beaucoup de capteurs :
- Utilisez le clustering pour améliorer les performances
- Filtrez pour afficher uniquement les capteurs pertinents
- Envisagez d'utiliser la vue tableau pour les grandes listes

### Utilisation mobile

La carte fonctionne sur les appareils mobiles :
- Pincez pour zoomer
- Faites glisser pour déplacer
- Appuyez pour les infos du capteur

## Dépannage

### Les capteurs n'apparaissent pas sur la carte

1. Vérifiez que les capteurs ont des coordonnées de localisation définies
2. Vérifiez si les capteurs sont filtrés
3. Assurez-vous que la carte est zoomée sur la bonne zone
4. Essayez de rafraîchir la page

### La carte ne se charge pas

1. Vérifiez la connexion Internet
2. Essayez un autre navigateur
3. Videz le cache du navigateur
4. Désactivez les extensions du navigateur

### Mauvais emplacements de capteurs

1. Vérifiez les coordonnées dans les paramètres du capteur
2. Vérifiez le format des coordonnées (degrés décimaux)
3. Mettez à jour les informations de localisation

## Guides connexes

- [Vue tableau](/dashboard/sensors/table-view)
- [Détails du capteur](/dashboard/sensors/sensor-details)
- [Informations de localisation](/dashboard/sensors/location-info)
