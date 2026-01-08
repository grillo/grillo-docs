---
sidebar_position: 3
title: Installation physique
---

# Installation physique - Grillo Pulse

Le Grillo Pulse est conçu pour un déploiement polyvalent, y compris dans des emplacements extérieurs et à distance. Avec son boîtier étanche IP67 en option, sa compatibilité avec l'énergie solaire et sa connectivité LTE mondiale, il est idéal pour les stations de surveillance sismique à distance. Ce guide couvre les meilleures pratiques d'installation.

## Choisir un emplacement

### Emplacements idéaux

- **Niveau du sol** - Meilleur pour détecter les mouvements du sol
- **Fondation solide** - Béton, roche mère ou sol stable
- **Bonne couverture cellulaire** - Pour une connectivité LTE fiable
- **Loin des vibrations** - Éloigné des machines, routes, générateurs
- **Accessible pour la maintenance** - Mais sécurisé contre les manipulations
- **Exposition solaire** - Si vous utilisez l'énergie solaire, assurez un ensoleillement adéquat

### Considérations pour l'extérieur

- **Drainage** - Évitez les zones qui accumulent l'eau
- **Exposition au soleil** - Équilibrez les besoins du panneau solaire avec la prévention de la surchauffe
- **Vent** - Les emplacements abrités réduisent le bruit sismique
- **Sécurité** - Envisagez un montage résistant aux manipulations
- **Signal cellulaire** - Testez la puissance du signal avant l'installation permanente

### Emplacements à éviter

- **Près des machines** - Générateurs, pompes, CVC
- **Sol mou ou instable** - Sable, sol meuble sans fondation
- **Zones inondables** - Même avec la certification IP67
- **Zones à fort passage** - Vibrations des véhicules/personnes
- **Végétation dense** - Peut réduire l'efficacité solaire et bloquer le signal cellulaire
- **Structures métalliques** - Peuvent interférer avec le signal cellulaire

## Orientation

Le Grillo Pulse doit être installé de niveau pour des lectures sismiques précises. Le géophone 4,5 Hz mesure le mouvement vertical, donc un nivellement correct est crucial.

![Diagramme d'orientation du capteur](/img/placeholder-pulse-orientation.svg)
<!-- TODO: Replace with actual orientation diagram -->

- **Niveau** - Utilisez un niveau à bulle pour assurer un placement horizontal
- **Stable** - Ne doit pas bouger ou osciller au toucher
- **Orientation du géophone** - Le géophone mesure le mouvement vertical (axe Z)
- **Orientation MEMS** - L'accéléromètre mesure le mouvement sur 3 axes (X, Y, Z)

## Options de montage

### Option 1 : Montage au sol (Recommandé pour les meilleures données)

Le capteur doit être monté sur un **élément structurel rigide** :

- Dalle de béton au sol (préféré)
- Roche mère ou sol compacté stable
- Base de poutre ou colonne en acier

**Étapes d'installation :**

1. Nettoyez soigneusement la surface de montage
2. Retirez toute poussière, débris et matériaux détachés
3. Placez le capteur sur la surface préparée
4. Utilisez un niveau à bulle pour vous assurer que le capteur est horizontal
5. Marquez les positions des trous de vis à travers les trous de montage
6. Percez les trous et insérez les chevilles appropriées
7. Positionnez le capteur et insérez les vis à travers les trous de montage
8. Serrez fermement les vis — **le capteur ne doit pas bouger**
9. Connectez l'alimentation et l'antenne

:::warning Montage sécurisé requis
Un capteur mal fixé produira des données peu fiables. Assurez-vous que toutes les vis sont serrées et que l'appareil ne peut pas bouger au toucher.
:::

### Option 2 : Montage mural

Si vous montez sur un mur structurel :

1. Sélectionnez un mur structurel solide (béton ou maçonnerie — évitez les structures creuses)
2. Positionnez au niveau du sol si possible
3. Nettoyez la surface de montage
4. Placez le capteur avec le **port USB vers le bas**
5. Utilisez un niveau à bulle pour assurer l'alignement horizontal
6. Marquez et percez les trous de montage
7. Installez les chevilles appropriées
8. Fixez le capteur — il ne doit pas bouger
9. Connectez l'alimentation et l'antenne

:::warning Métadonnées de montage mural
Lorsqu'un capteur est monté au mur, vous devez mettre à jour sa configuration dans Grillo Cloud pour indiquer l'orientation de montage. Cela garantit une interprétation correcte des données.
:::

## Placement de l'antenne LTE

Pour la connectivité cellulaire, le placement de l'antenne affecte significativement la qualité du signal :

### Meilleures pratiques

- **Hauteur** - Un placement plus élevé améliore généralement la réception
- **Orientation** - L'orientation verticale est typiquement la meilleure
- **Obstructions** - Gardez dégagé des objets métalliques et de la végétation dense
- **Séparation** - Maintenez une distance avec les câbles d'alimentation

### Options de montage de l'antenne

1. **Fixation directe** - Vissez directement dans le port SMA du capteur
2. **Montage à distance** - Utilisez un câble d'extension SMA pour positionner l'antenne de manière optimale

## Étanchéité

Le Grillo Pulse est conçu pour une utilisation extérieure, mais une installation correcte assure la longévité :

### Entrée des câbles

- Utilisez les presse-étoupes fournis pour toutes les connexions
- Assurez-vous que les presse-étoupes sont serrés mais pas trop
- Appliquez un scellant adapté à l'extérieur si nécessaire

### Drainage

- Montez avec une légère inclinaison pour permettre l'écoulement de l'eau
- Assurez-vous qu'aucune eau ne peut s'accumuler sur ou autour de l'appareil
- Gardez les trous de drainage dégagés

### Protection UV

- Le boîtier de l'appareil est résistant aux UV
- Évitez une exposition directe au soleil inutile
- Envisagez un pare-soleil pour les climats extrêmes

## Considérations d'alimentation

Le Grillo Pulse accepte une entrée 6-10V CC via son connecteur de câble étanche, ce qui le rend idéal pour les installations à énergie solaire et à distance.

### Entrée d'alimentation CC

Pour les installations permanentes :
- **Tension** - Entrée 6-10V CC
- **Connecteur** - Connecteur de câble étanche (même port utilisé pour l'alimentation solaire)
- **Consommation d'énergie** - 1,32W (400mA à 3,3V)

### Configuration de l'alimentation solaire

- **Panneau solaire** - Sortie 6-10V, dimensionné selon la disponibilité de l'ensoleillement de votre emplacement
- **Batterie** - Batterie LiPo externe pour le fonctionnement nocturne et par temps nuageux
- **Port batterie** - Connecteur étanche dédié pour la batterie LiPo (même type de connecteur que l'entrée d'alimentation CC)
- **Contrôleur de charge** - Recommandé pour une gestion optimale de la batterie
- L'entrée solaire utilise le même connecteur étanche que l'entrée d'alimentation CC

### Alimentation USB

Le port USB est principalement destiné aux mises à jour du firmware :
- Peut être utilisé pour alimenter l'appareil pendant les tests ou le travail sur banc
- Non recommandé pour les installations extérieures permanentes

:::caution Évitez les sources d'alimentation doubles
Bien que le Grillo Pulse ait des diodes de protection pour éviter les problèmes liés à plusieurs entrées d'alimentation, il n'est pas conseillé d'alimenter l'appareil simultanément via USB et alimentation CC. Utilisez une seule source d'alimentation à la fois.
:::

### Routage du câble d'alimentation

- Utilisez des connecteurs étanches
- Faites passer les câbles loin des points de collecte d'eau
- Fixez les câbles pour éviter les dommages dus au vent
- Protégez les connexions avec des boîtiers étanches

## Liste de vérification de l'installation

Avant de finaliser l'installation :

- [ ] L'emplacement offre une surface de montage solide et stable
- [ ] Le capteur est de niveau (vérifié avec un outil de niveau)
- [ ] Le matériel de montage est sécurisé
- [ ] À l'écart des sources de vibration (>5 mètres des machines)
- [ ] Antenne LTE positionnée pour une bonne réception
- [ ] Câble d'alimentation correctement acheminé et protégé
- [ ] Tous les presse-étoupes scellés (si vous utilisez le boîtier IP67)
- [ ] Le capteur est sécurisé contre les manipulations/vols
- [ ] Puissance du signal cellulaire vérifiée

## Spécifications environnementales

| Facteur | Spécification |
|---------|---------------|
| Température de fonctionnement | -20°C à +60°C |
| Protection contre les intrusions | IP67 (avec boîtier étanche) |
| Entrée d'alimentation | 6-10V CC |
| Consommation d'énergie | 1,32W (400mA à 3,3V) |

## Erreurs d'installation courantes

1. **Mauvais placement de l'antenne cellulaire** - Entraîne des problèmes de connectivité
2. **Montage sur surface instable** - Introduit du bruit dans les données
3. **Ignorer le drainage** - Peut endommager l'électronique au fil du temps
4. **Montage desserré** - Le mouvement du capteur affecte les lectures
5. **Presse-étoupes non scellés** - Risque d'infiltration d'eau

## Étapes suivantes

Une fois physiquement installé :

1. [Installez la carte SIM](/hardware/grillo-pulse/sim-card-setup) (si vous utilisez le cellulaire)
2. [Configurez la connectivité réseau](/hardware/grillo-pulse/network-setup)
3. [Provisionnez le capteur](/hardware/grillo-pulse/provisioning)
