---
sidebar_position: 5
title: Qualité des données
---

# Qualité des données

Comprendre et assurer une bonne qualité des données sismiques de vos capteurs Grillo.

## Qu'est-ce que la qualité des données ?

La qualité des données fait référence à la façon dont vos enregistrements sismiques représentent le mouvement réel du sol, sans bruit ni artefacts.

### Données de bonne qualité

- Signaux sismiques clairs lors des événements
- Faible bruit de fond
- Enregistrement continu et cohérent
- Timing précis

### Données de mauvaise qualité

- Bruit excessif masquant les signaux
- Lacunes dans l'enregistrement
- Erreurs de timing
- Artefacts dus aux problèmes d'installation

## Pourquoi la qualité est importante

### Pour la détection des séismes

| Niveau de qualité | Capacité de détection |
|-------------------|----------------------|
| Haute qualité | Détecter des événements plus petits, paramètres précis |
| Qualité moyenne | Détecter des événements modérés, quelques erreurs |
| Mauvaise qualité | Rater des événements, faux déclenchements, paramètres erronés |

### Pour l'alerte précoce

Une détection rapide et précise nécessite :
- Arrivées d'ondes P claires
- Faible taux de faux déclenchements
- Timing fiable

### Pour la recherche

Les applications scientifiques ont besoin de :
- Caractéristiques de données cohérentes
- Installation documentée
- Réponse instrumentale connue

## Sources de bruit

### Bruit naturel

| Source | Caractéristiques |
|--------|------------------|
| Vent | Variable, affecte les sites exposés |
| Vagues océaniques (microséismes) | Continu, basse fréquence |
| Météo | Pluie, tonnerre |
| Biologique | Animaux près du capteur |

### Bruit anthropique (causé par l'homme)

| Source | Caractéristiques |
|--------|------------------|
| Trafic | Variable selon l'heure |
| Machines | Souvent périodique |
| Construction | Intermittent, intense |
| CVC | Continu en fonctionnement |
| Marche | Impulsif, irrégulier |

### Bruit du capteur/installation

| Source | Caractéristiques |
|--------|------------------|
| Mauvais couplage | Résonances, signal faible |
| Montage lâche | Pics, instabilité |
| Inclinaison | Changements d'offset DC |
| Électronique | Bruit haute fréquence |

## Évaluer la qualité

### Inspection visuelle

Examiner les formes d'onde pour :
- Niveau de bruit de fond
- Motifs inhabituels
- Lacunes ou pics
- Cohérence

### Métriques de qualité

Mesures courantes :

| Métrique | Description |
|----------|-------------|
| Bruit RMS | Moyenne quadratique du fond |
| PSD | Densité spectrale de puissance |
| Complétude des données | Pourcentage des données attendues |
| Qualité du timing | Précision de l'horloge |

### Analyse comparative

Comparer les capteurs :
- Des sites similaires devraient avoir un bruit similaire
- Les valeurs aberrantes indiquent des problèmes
- Caractéristiques cohérentes à travers le réseau

## Améliorer la qualité des données

### Améliorations du site

1. **S'éloigner des sources de bruit**
   - Déplacer le capteur si possible
   - Traiter la source si contrôlable

2. **Meilleur couplage**
   - Contact direct avec une surface solide
   - Retirer les matériaux mous en dessous

3. **Contrôle environnemental**
   - Température stable
   - Protégé des courants d'air
   - Loin de la lumière directe du soleil

### Améliorations de l'installation

1. **Mettre le capteur à niveau**
   - Utiliser un niveau à bulle
   - Ajuster le montage

2. **Montage sécurisé**
   - Pas de vacillement
   - Ne se déplacera pas avec le temps

3. **Gestion des câbles**
   - Pas de tension sur le capteur
   - Protégé des perturbations

### Pratiques opérationnelles

1. **Surveillance régulière**
   - Vérifier les tableaux de bord de qualité
   - Comparer à la référence

2. **Résolution rapide des problèmes**
   - Enquêter sur les anomalies
   - Corriger les problèmes rapidement

3. **Documentation**
   - Enregistrer les détails d'installation
   - Noter tout changement

## Problèmes de qualité courants

### Plancher de bruit élevé

**Symptômes :** Niveau de fond plus élevé que prévu

**Causes possibles :**
- CVC ou machines à proximité
- Vibration du trafic
- Mauvais site d'installation
- Interférence électrique

**Solutions :**
- Déplacer le capteur
- Traiter la source de bruit
- Améliorer l'installation

### Pics/parasites

**Symptômes :** Sauts soudains dans les données

**Causes possibles :**
- Capteur lâche
- Problèmes de câble
- Interférence électrique
- Impacts à proximité

**Solutions :**
- Sécuriser le capteur
- Vérifier les câbles
- Protéger des interférences
- Identifier la source d'impact

### Lacunes de données

**Symptômes :** Périodes de données manquantes

**Causes possibles :**
- Problèmes de connectivité réseau
- Coupures de courant
- Dysfonctionnement du capteur
- Problèmes de serveur

**Solutions :**
- Améliorer la fiabilité du réseau
- Ajouter une alimentation de secours
- Vérifier la santé du capteur
- Contacter le support

### Bruit haute fréquence

**Symptômes :** Bruit excessif aux hautes fréquences

**Causes possibles :**
- Interférence électrique
- Électronique du capteur
- Équipement à proximité

**Solutions :**
- Vérifier la source d'alimentation
- Ajouter un filtrage (si disponible)
- Déplacer le capteur

## Qualité et performances du réseau

### Seuil de détection

Plus de bruit = seuil de détection plus élevé
- Les sites de bonne qualité détectent M2-3
- Les sites bruyants peuvent seulement détecter M4+

### Précision de localisation

La qualité affecte la localisation :
- Arrivées claires = timing précis
- Données bruitées = pointés incertains
- La moyenne du réseau détermine la précision

### Faux déclenchements

Le bruit cause des faux déclenchements :
- Ressemble à un signal sismique
- Gaspille des ressources de traitement
- Peut causer de fausses alertes

## Surveiller la qualité dans le temps

### Établir une référence

Lors de l'installation du capteur :
- Enregistrer les niveaux de bruit typiques
- Documenter les caractéristiques attendues
- Définir des seuils de qualité

### Suivre les changements

Surveiller :
- Augmentation du bruit (nouvelle source ?)
- Changements soudains (problème d'installation ?)
- Variations saisonnières (météo, CVC)

### Révision régulière

Planifier une révision périodique :
- Vérifications ponctuelles hebdomadaires
- Rapports de qualité mensuels
- Revue complète trimestrielle

## Compromis qualité vs quantité

### Réseaux denses

Plus de capteurs peuvent compenser certains problèmes de qualité :
- La redondance couvre les lacunes
- Les mauvais capteurs peuvent être exclus
- Les statistiques s'améliorent avec le nombre

### Standards de qualité minimum

Même dans les réseaux denses, maintenir des minimums :
- Les capteurs doivent détecter les événements cibles
- Le timing doit être précis
- Les données doivent être utilisables

## Guides connexes

- [Placement des capteurs](/concepts/sensor-placement)
- [Installation physique - Grillo One](/hardware/grillo-one/physical-installation)
- [Dépannage](/hardware/grillo-one/troubleshooting)
