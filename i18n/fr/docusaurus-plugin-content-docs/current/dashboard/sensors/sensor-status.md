---
title: Vérifier l’état des capteurs
---

# Vérifier l’état des capteurs

La page **Capteurs** et le détail de chaque capteur permettent de vérifier que Grillo Cloud reçoit bien ses données.

## Statuts

| Statut | Signification |
|---|---|
| **En ligne** | Un rapport d’état est arrivé dans les 2,5 dernières minutes et tous les contrôles sont bons |
| **Dégradé** | Le capteur transmet, mais quelque chose demande attention : **Signal faible** (sous -95 dBm), **Décalage d’horloge de … ms** (plus de 50 ms) ou **Données reçues avec … s de retard** (plus de 2 secondes) |
| **Hors ligne** | Aucun rapport d’état depuis 2,5 minutes. La raison indique depuis quand, par exemple **Aucune donnée depuis 14:05** ou **Aucune donnée depuis 3 j** |
| **Désactivé** | Réservé aux capteurs mis hors service volontairement |

Un capteur qui n’a jamais transmis s’affiche **Hors ligne** avec **Aucune donnée reçue**.

Si Grillo Cloud lui-même ne parvient pas à récupérer les nouvelles données des capteurs, un avertissement en haut de la page indique depuis quand, et les statuts restent tels quels au lieu de passer hors ligne.

## Pourquoi c’est important

La détection des séismes a besoin de stations en ligne autour de la zone surveillée. Quand des stations proches d’un séisme sont hors ligne, la détection est plus lente ou peut ne pas se faire. La barre en bas de la [carte en direct](/events/live-map) indique combien de stations sont hors ligne.

## Si un capteur est hors ligne ou dégradé

En tant que lecteur ou membre, vous n’avez rien à régler dans le tableau de bord. Prévenez l’administrateur de votre projet avec :

- le code de station
- le statut et la raison affichés
- l’heure du **Dernier contact**
- tout ce que vous savez du site : coupure de courant, travaux, problème de réseau mobile

Si une station reste hors ligne plus de quelques heures, signalez-le, même si d’autres stations fonctionnent.

Les administrateurs trouveront les étapes de dépannage dans la [version anglaise de cette page](pathname:///dashboard/sensors/sensor-status) et dans le guide [Grillo Pulse](/hardware/grillo-pulse/troubleshooting) (en anglais).
