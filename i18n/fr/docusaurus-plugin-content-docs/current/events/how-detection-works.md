---
sidebar_position: 2
title: Comment fonctionne la détection
---

# Comment fonctionne la détection

Un aperçu du système de détection de séismes de Grillo et comment il identifie les événements sismiques à partir de votre réseau de capteurs.

## Aperçu de la détection

Le système de détection de Grillo utilise les données de plusieurs capteurs pour :
1. Identifier les signaux sismiques potentiels
2. Confirmer les événements sur plusieurs stations
3. Calculer les paramètres des événements
4. Générer des alertes

## Le processus de détection

### Étape 1 : Surveillance continue

Chaque capteur de votre réseau transmet en continu des données à Grillo Cloud :
- Données d'accéléromètre en temps réel
- Généralement 100 échantillons par seconde
- Les données arrivent avec une latence minimale

### Étape 2 : Détection du signal

Les algorithmes analysent les données entrantes pour détecter les signatures sismiques :

**Détection des ondes P :**
- Première onde sismique à arriver
- Plus rapide mais plus faible
- Permet l'alerte précoce

**Détection des ondes S :**
- Deuxième type d'onde
- Plus lente mais plus forte
- Plus dommageable

![Diagramme des ondes P et S](/img/placeholder-waves.svg)
<!-- TODO: Replace with wave propagation diagram -->

### Étape 3 : Confirmation multi-stations

Un déclenchement d'un seul capteur n'est pas suffisant—la confirmation nécessite plusieurs capteurs :

<!-- TODO: Confirm actual thresholds -->

| Capteurs déclenchés | Action |
|---------------------|--------|
| 1 | Surveiller, pas d'événement |
| 2-3 | Événement possible, continuer la surveillance |
| 4+ | Événement probable, commencer la caractérisation |

Cette approche multi-stations :
- Réduit les faux positifs
- Améliore la précision de localisation
- Augmente la confiance

### Étape 4 : Caractérisation de l'événement

Une fois confirmé, le système calcule :

**Localisation (épicentre) :**
- Triangulation à partir de plusieurs stations
- Utilise les différences de temps d'arrivée
- La précision dépend de la géométrie du réseau

**Profondeur :**
- Estimée à partir des modèles d'arrivée
- Peut être contrainte pour les réseaux peu profonds

**Magnitude :**
- Calculée à partir de l'amplitude
- Plusieurs types de magnitude possibles
- Affinée au fur et à mesure que plus de données arrivent

**Heure d'origine :**
- Quand le séisme s'est produit
- Calculée rétroactivement à partir des détections

### Étape 5 : Génération d'alertes

En fonction des paramètres de l'événement :
1. L'événement est comparé aux seuils d'alerte
2. Les notifications sont envoyées aux canaux configurés
3. L'événement est ajouté au catalogue

## Paramètres de détection

### Sensibilité

Quelle est la sensibilité de la détection au mouvement du sol :

| Paramètre | Effet |
|-----------|-------|
| Haute | Plus de détections, plus de faux positifs |
| Moyenne | Approche équilibrée |
| Basse | Moins de détections, moins de faux positifs |

### Seuil de déclenchement

Le niveau de signal minimum à considérer :
- Plus bas = plus sensible
- Plus haut = moins de déclenchements
- Ajusté en fonction du bruit local

### Exigences de confirmation

Combien de capteurs doivent se déclencher :
- Plus de capteurs = confiance plus élevée
- Moins de capteurs = détection plus rapide
- Compromis entre vitesse et précision

## Latence de détection

Temps entre le séisme et la détection :

| Étape | Temps typique |
|-------|---------------|
| Voyage de l'onde jusqu'au premier capteur | Varie selon la distance |
| Premier déclenchement de capteur | Moins d'1 seconde |
| Confirmation multi-stations | 2-5 secondes |
| Caractérisation de l'événement | 5-15 secondes |
| Livraison de l'alerte | Moins d'1 seconde |

**Temps total :** Généralement 5-20 secondes depuis l'origine du séisme

### Temps d'alerte précoce

Le temps d'avertissement avant les secousses fortes :
- Dépend de la distance par rapport à l'épicentre
- L'onde P arrive avant l'onde S dommageable
- De quelques secondes à des dizaines de secondes possibles

## Ce qui affecte la qualité de détection

### Facteurs du réseau

| Facteur | Impact |
|---------|--------|
| Nombre de capteurs | Plus de capteurs = meilleure détection |
| Espacement des capteurs | Affecte la précision de localisation |
| Couverture géographique | Zone plus grande = détecter plus d'événements |
| Pourcentage en ligne | Plus de capteurs en ligne = meilleure couverture |

### Facteurs de qualité des données

| Facteur | Impact |
|---------|--------|
| Qualité d'installation | Mauvais montage = données bruitées |
| Conditions du site | Sol meuble peut amplifier le bruit |
| Vibrations locales | Trafic, machines interfèrent |
| Force du signal | Faible connectivité = lacunes |

### Facteurs de l'événement

| Facteur | Impact |
|---------|--------|
| Magnitude | Les événements plus grands sont détectés plus facilement |
| Distance | Les événements plus proches sont détectés plus rapidement |
| Profondeur | Les événements très profonds sont plus difficiles à localiser |

## Limitations

### Ce que nous pouvons détecter

- Séismes dans/près de votre réseau
- Événements produisant un mouvement du sol au-dessus du bruit
- Événements déclenchant plusieurs capteurs

### Ce que nous ne pouvons pas détecter

- Très petits séismes (sous le seuil du réseau)
- Séismes distants (signal insuffisant)
- Événements pendant les pannes du réseau
- Les événements non sismiques (explosions, etc.) peuvent déclencher

### Faux positifs

Certains événements non sismiques peuvent déclencher :
- Trafic de véhicules lourds
- Activité industrielle
- Météo (vent, tonnerre)
- Dysfonctionnement du capteur

La confirmation multi-stations réduit mais n'élimine pas les faux positifs.

## Améliorer la détection

### Optimiser votre réseau

1. **Ajouter plus de capteurs** - Améliore la détection et la précision
2. **Meilleure distribution** - Un espacement régulier aide la localisation
3. **Installations de qualité** - Réduire le bruit
4. **Maintenir les capteurs** - Garder un pourcentage élevé en ligne

### Affiner les paramètres

1. **Ajuster la sensibilité** - En fonction du taux de faux positifs
2. **Définir des seuils appropriés** - Correspondre à vos besoins
3. **Examiner les détections** - Apprendre ce qui déclenche votre réseau

## Concepts connexes

- [Réseaux sismiques](/concepts/seismic-networks)
- [Alerte précoce aux séismes](/concepts/earthquake-early-warning)
- [Qualité des données](/concepts/data-quality)
