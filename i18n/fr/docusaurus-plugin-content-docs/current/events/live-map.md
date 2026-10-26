---
title: Carte en direct
---

# Carte en direct

La **carte en direct** est la première page affichée après la connexion. Elle montre vos stations sur une carte sombre, et la détection des séismes au moment où elle se produit. Elle a deux modes, à choisir en haut du panneau latéral :

- **DIRECT** suit les stations de votre projet et leurs vraies détections.
- **SIMULATION** rejoue un séisme fictif sur vos vraies stations, pour montrer comment fonctionne la détection.

## Ce que montre la carte

- Vos stations. La légende compte les stations (**STATION**) et celles **HORS LIGNE**
- Les failles (**FAILLE**)
- Pendant un événement : les stations qui ont capté les ondes (**DÉCLENCHÉE**), l’épicentre, les fronts de l’**ONDE P** et de l’**ONDE S** qui s’étendent, et les zones de **SECOUSSES EN COURS**
- Les zones de secousses estimées autour de l’épicentre, des plus faibles aux plus fortes

Les stations sans position enregistrée ne sont pas sur la carte ; une note indique combien.

Le bouton plein écran affiche la carte seule, par exemple sur un écran mural.

## Le panneau latéral

L’état en haut du panneau indique ce que fait la détection :

| État | Signification |
|---|---|
| **SURVEILLANCE** | Les stations transmettent et il n’y a pas d’événement, par exemple **14 stations actives sur 15 · aucun événement** |
| **DÉTECTION** | Une ou plusieurs stations ont capté les ondes et Grillo Cloud localise l’événement |
| **ÉVÉNEMENT LOCALISÉ** | L’événement a une position et une magnitude, et le panneau indique quand l’alerte a été émise, en secondes après l’origine |

Une fois l’événement localisé, le panneau affiche sa **MAGNITUDE**, sa **PROFONDEUR** et sa **POSITION**, et une liste de lieux avec le nombre de secondes avant l’arrivée des **FORTES SECOUSSES**, ou **pas d’alerte** là où les secousses étaient déjà arrivées. Voir [Comment lire une alerte](/events/reading-an-alert).

Le **JOURNAL** liste chaque pointé, la localisation et les arrivées de l’onde S au fur et à mesure.

**FLUX EN DIRECT CONNECTÉ** indique que la carte reçoit les détections. Si elle reste sur **CONNEXION AU FLUX EN DIRECT…**, rechargez la page.

Si des stations sont hors ligne, la barre en bas de la carte indique combien. Cliquez dessus pour ouvrir les [capteurs](/dashboard/sensors) filtrés sur les capteurs hors ligne.

## Mode simulation

Passez en **SIMULATION**. Un bandeau sur la carte indique **SCÉNARIO SIMULÉ · PAS D’ÉVÉNEMENTS RÉELS**. Choisissez une vitesse de 1×, 2× ou 4×.

La simulation utilise la position réelle des stations du projet et nécessite au moins 4 stations actives. Elle joue les pointés, localise l’événement et anime les ondes et les secousses.

:::danger La simulation n’est pas une donnée réelle
Les événements du mode simulation sont fictifs. Vérifiez le mode sélectionné avant d’agir sur quoi que ce soit affiché sur cette page. Les événements simulés ne sont pas ajoutés au [catalogue des événements](/events/event-catalog).
:::

## Limites

La carte en direct est un outil de surveillance pour votre équipe. Elle n’envoie elle-même ni SMS, ni e-mail, ni alerte mobile, et ce n’est pas un service d’alerte public.
