---
sidebar_position: 5
title: Carte en direct
---

# Carte en direct

La Carte en direct offre une visualisation en temps réel de l'activité sismique sur votre réseau, montrant les détections des stations et la propagation des ondes sismiques au moment où elles se produisent.

![Carte en direct](/img/screenshots/11-live-map.png)

## Aperçu

La Carte en direct est votre fenêtre sur ce qui se passe en ce moment :
- **Détections des stations** - Voyez quels capteurs détectent des mouvements du sol
- **Visualisation des séismes** - Observez les ondes P et S se propager depuis l'épicentre
- **Mises à jour en temps réel** - Les données se rafraîchissent continuellement

## Accéder à la Carte en direct

1. Naviguez vers votre réseau
2. Cliquez sur **« Carte en direct »** dans la barre latérale ou la navigation
3. La visualisation en direct commencera

## Comprendre l'affichage

### Indicateurs des stations

Les stations changent d'apparence selon l'activité en cours :

| Indicateur | Signification |
|------------|---------------|
| Inactif (gris/vert) | Aucun mouvement significatif détecté |
| Déclenché (jaune) | Mouvement du sol élevé détecté |
| Alerte (rouge) | Mouvement fort / détection d'événement |
| Clignotant | Réception de données en cours |

### Cercles de propagation des ondes

Lorsqu'un séisme est détecté, des cercles en expansion montrent la propagation des ondes :

| Cercle | Couleur | Description |
|--------|---------|-------------|
| Onde P | Bleu | Onde primaire - la plus rapide, arrive en premier |
| Onde S | Rouge/Orange | Onde secondaire - plus lente, plus destructrice |

Les cercles s'étendent depuis l'épicentre à la vitesse approximative des ondes sismiques, montrant :
- Quelles stations ont déjà été atteintes
- Quelles stations seront affectées ensuite
- Temps d'arrivée estimés à chaque emplacement

### Marqueur de l'épicentre

La source du séisme est indiquée par :
- Une étoile ou un cercle à l'emplacement de l'épicentre
- La magnitude affichée à proximité
- Cliquez pour les détails de l'événement

## Fonctionnalités en temps réel

### Chronologie de détection

Au fur et à mesure qu'un événement se déroule :

1. **Première détection** - La station initiale se déclenche, affichée sur la carte
2. **Événement localisé** - L'épicentre est calculé, les ondes commencent à s'étendre
3. **Propagation des ondes** - Les cercles s'étendent montrant les fronts d'onde P et S
4. **Alertes des stations** - Chaque station s'illumine à l'arrivée des ondes
5. **Événement terminé** - Les ondes traversent le réseau, l'événement est catalogué

### Déclenchement des stations

Observez les stations réagir en temps réel :
- Les stations clignotent lors de la détection de mouvement
- L'intensité de la couleur indique l'amplitude du mouvement
- Le schéma de déclenchement aide à confirmer les vrais événements

## Contrôles de la carte

### Contrôles de lecture

| Contrôle | Fonction |
|----------|----------|
| Lecture/Pause | Démarrer ou arrêter les mises à jour |
| Vitesse | Ajuster la vitesse de visualisation (1x, 2x, 5x) |
| Retour | Rejouer les événements récents |

### Contrôles de vue

| Contrôle | Fonction |
|----------|----------|
| Zoom | Molette de souris ou boutons +/- |
| Déplacer | Cliquer et glisser |
| Centrer | Revenir au centre du réseau |
| Plein écran | Agrandir en plein écran |

### Basculer les couches

Afficher ou masquer les éléments de la carte :
- Marqueurs des stations
- Cercles de propagation des ondes
- Marqueurs des épicentres
- Étiquettes des stations
- Imagerie terrain/satellite

## Panneau d'information de l'événement

Lorsqu'un événement est actif ou sélectionné :

- **Magnitude** - Estimation actuelle (peut être mise à jour)
- **Localisation** - Coordonnées et description de l'épicentre
- **Profondeur** - Profondeur estimée
- **Heure** - Heure d'origine
- **Statut** - Détection / Localisé / Terminé
- **Stations déclenchées** - Nombre et liste

## Utiliser efficacement la Carte en direct

### Pendant un séisme

1. Observez le schéma de détection se propager sur votre réseau
2. Notez quelles stations se déclenchent en premier (les plus proches de l'épicentre)
3. Observez la propagation des ondes pour estimer la localisation
4. Surveillez les estimations de magnitude à mesure que les données arrivent

### Pour la surveillance

- Gardez la Carte en direct ouverte sur un écran dédié
- Activez les alertes sonores pour les événements significatifs
- Utilisez la chronologie pour revoir l'activité récente

### Pour les présentations

- Rejouez les événements passés pour démontrer les capacités de détection
- Ajustez la vitesse de lecture pour montrer clairement la propagation
- Utilisez le mode plein écran pour une meilleure visibilité

## Paramètres

### Seuils d'alerte

Configurez quand les alertes visuelles apparaissent :
- Magnitude minimale à afficher
- Seuil de confiance de détection
- Couleurs et sons d'alerte

### Préférences d'affichage

| Paramètre | Options |
|-----------|---------|
| Vitesse des ondes | Temps réel, accéléré |
| Opacité des cercles | Solide à transparent |
| Taille des stations | Petit, moyen, grand |
| Auto-centrer | Sur nouveaux événements, jamais |

## Guides connexes

- [Catalogue des événements](/events/event-catalog)
- [Détails des événements](/events/event-details)
- [Vue carte](/dashboard/sensors/map-view)
- [Fonctionnement de la détection](/events/how-detection-works)
