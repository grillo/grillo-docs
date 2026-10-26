---
title: Comment lire une alerte
---

# Comment lire une alerte

Quand un séisme est détecté, Grillo Cloud l’affiche à trois endroits : sur la **carte en direct** au moment où il se produit, dans **Événements** ensuite et, pour les projets qui ont des alertes de déclenchement, par **e-mail**. Cette page explique comment lire chacun, et ce qu’il ne faut pas en conclure.

## Sur la carte en direct

L’état affiché en haut du panneau latéral indique ce qui se passe :

1. **SURVEILLANCE** : les stations transmettent et rien n’a été détecté. C’est l’état normal.
2. **DÉTECTION** : une ou plusieurs stations ont capté des ondes et Grillo Cloud cherche où se trouve le séisme. Ne tirez pas encore de conclusion : une seule station peut être déclenchée par un bruit local.
3. **ÉVÉNEMENT LOCALISÉ** : assez de stations ont détecté le séisme pour le localiser. Le panneau affiche alors :
   - **MAGNITUDE** : la taille estimée du séisme
   - **PROFONDEUR** : la profondeur à laquelle il a commencé, en kilomètres
   - **POSITION** : l’endroit où il a commencé (l’épicentre)
   - Une liste de lieux, chacun avec le nombre de secondes avant l’arrivée des **FORTES SECOUSSES**. **pas d’alerte** signifie que les secousses étaient déjà arrivées à cet endroit quand l’événement a été localisé.
   - Le moment où l’alerte a été émise, en secondes après le début du séisme, par exemple **alerte émise à T+8 s**

Sur la carte, les cercles qui s’éloignent de l’épicentre sont l’**ONDE P** (les premières ondes, plus faibles) et l’**ONDE S** (les secousses plus fortes qui suivent).

:::danger Vérifiez d’abord le mode
Si un bandeau sur la carte indique **SCÉNARIO SIMULÉ · PAS D’ÉVÉNEMENTS RÉELS**, la carte est en mode simulation et le séisme est fictif. Les vraies détections n’apparaissent qu’en mode **DIRECT**.
:::

## Dans Événements

Chaque séisme localisé est ajouté aux [événements](/events/event-catalog). C’est là que vous vérifiez ce qui s’est passé, après coup :

- Le graphique montre les événements selon la date et la magnitude. La ligne en pointillés marque M4, le seuil d’alerte.
- Cliquez sur un événement pour ouvrir son [détail](/events/event-details) : heure d’origine en UTC et à l’heure d’Haïti, magnitude, profondeur, lieu le plus proche, nombre de stations qui l’ont détecté et durée de la détection.

## Par e-mail

Les projets qui ont des alertes de déclenchement envoient un e-mail à leurs destinataires quand les secousses mesurées par un capteur dépassent le seuil d’alerte du projet. Cet e-mail concerne les secousses mesurées **à un seul capteur**, exprimées en accélération maximale du sol (PGA) en mg, et non le séisme dans son ensemble. La page **Alertes** liste toutes les alertes e-mail envoyées ces 90 derniers jours.

## Ce qu’il ne faut pas conclure

- **Les chiffres sont des estimations automatiques.** La magnitude, la position et la profondeur sont calculées en quelques secondes. Elles peuvent changer, ou différer des chiffres publiés plus tard par un organisme sismologique.
- **Le temps d’alerte n’est pas garanti.** Les lieux proches de l’épicentre peuvent recevoir peu ou pas d’alerte.
- **Pas d’alerte ne veut pas dire pas de séisme.** Si des stations proches du séisme sont hors ligne, la détection est plus lente ou peut ne pas se faire. Vérifiez les [capteurs](/dashboard/sensors).
- **Grillo Cloud n’est pas un service d’alerte public.** Il ne remplace pas les consignes de la protection civile, des services d’urgence ou de l’autorité sismologique officielle. Suivez les procédures de votre organisation.

## Ensuite

- [Carte en direct](/events/live-map)
- [Comment fonctionne la détection](/events/how-detection-works) (en anglais)
