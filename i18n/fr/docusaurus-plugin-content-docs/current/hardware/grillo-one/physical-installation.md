---
sidebar_position: 3
title: Installation physique
---

# Installation physique - Grillo One

Un placement correct du capteur est crucial pour la qualité des données. Suivez ce guide étape par étape pour installer votre capteur Grillo One.

:::warning Usage intérieur uniquement
Le Grillo One est conçu pour une installation intérieure uniquement. Pour les déploiements extérieurs, consultez le [Grillo Pulse](/hardware/grillo-pulse/) avec son boîtier étanche.
:::

## Avant de commencer

### Outils nécessaires

- Crayon ou marqueur
- Perceuse avec foret à maçonnerie (dimensionné pour les chevilles incluses)
- Tournevis
- Niveau à bulle
- Chiffon de nettoyage

### Matériel inclus

- Vis de montage
- Chevilles murales

## Étape 1 : Choisissez votre emplacement

Sélectionnez un emplacement qui répond à **tous** les critères suivants :

### Niveau du bâtiment

- **Rez-de-chaussée ou sous-sol uniquement** — les étages supérieurs amplifient le balancement du bâtiment et réduisent la qualité des données

### Type de surface

Le capteur doit être monté sur un **élément structurel rigide** :

- Dalle de béton au sol (préféré)
- Base de poutre ou colonne en acier
- Mur en béton ou maçonnerie structurel (au niveau du sol)

:::caution Surfaces inadaptées
Ne pas monter sur :
- Planchers en bois ou planchers surélevés
- Cloisons sèches ou plaques de plâtre
- Milieu de murs (entre les supports structurels)
- Moquette (sauf si une base solide est placée en dessous)
:::

### Environnement

| ✓ Requis | ✗ À éviter |
|----------|------------|
| Près d'une prise de courant | Étages supérieurs |
| Près du routeur WiFi ou d'une prise Ethernet | Unités CVC, générateurs, moteurs |
| À l'écart du passage | Couloirs, entrées, escaliers |
| Emplacement calme | Routes avec trafic de véhicules lourds |
| | Murs extérieurs |

:::caution Montage au sol : risques liés à l'eau
Si vous montez au sol, évitez les emplacements à risque de :
- **Inondation** — sous-sols sujets aux infiltrations d'eau
- **Nettoyage du sol** — zones régulièrement lavées
- **Déversements** — près des éviers, tuyaux ou chauffe-eau
:::

## Étape 2 : Préparez la surface

1. Nettoyez soigneusement la surface de montage
2. Retirez toute poussière, débris et matériaux détachés
3. Assurez-vous que la surface est complètement sèche

## Étape 3 : Marquez et percez les trous de montage

1. Placez le capteur sur la surface préparée
2. Utilisez un niveau à bulle pour vous assurer que le capteur est horizontal
3. Pour le montage mural : positionnez avec le port USB vers le bas
4. Marquez les positions des trous de vis à travers les trous de montage avec un crayon
5. Retirez le capteur
6. Percez les trous aux positions marquées avec le foret à maçonnerie
7. Éliminez la poussière des trous
8. Insérez les chevilles

## Étape 4 : Montez le capteur

1. Positionnez le capteur sur les chevilles
2. Insérez les vis à travers les trous de montage
3. Serrez fermement les vis — **le capteur ne doit pas bouger**
4. Vérifiez que le capteur est de niveau avec un niveau à bulle
5. Confirmez que le capteur ne peut pas se déplacer ou osciller

:::warning Montage sécurisé requis
Un capteur mal fixé produira des données peu fiables. Assurez-vous que toutes les vis sont serrées et que l'appareil ne peut pas bouger lorsqu'on le touche.
:::

## Étape 5 : Connectez les câbles

### Câble d'alimentation

- Faites passer le câble le long des murs ou des plinthes
- Utilisez des attache-câbles pour le fixer
- Évitez de créer des risques de trébuchement
- Laissez un peu de mou pour les ajustements

### Câble Ethernet (si utilisé)

- Faites-le passer jusqu'au commutateur ou routeur réseau le plus proche
- Gardez-le éloigné des câbles d'alimentation pour réduire les interférences
- Utilisez des attache-câbles ou une gaine pour une installation propre

## Étape 6 : Vérifiez l'installation

Avant de mettre sous tension, confirmez :

- [ ] Le capteur est à l'intérieur au rez-de-chaussée ou au sous-sol
- [ ] Monté sur un élément structurel (béton/acier)
- [ ] Toutes les vis sont serrées — le capteur ne peut pas bouger
- [ ] Le capteur est de niveau
- [ ] À l'écart du passage (>3 mètres)
- [ ] À l'écart des machines et sources de vibration (>3 mètres)
- [ ] Prise de courant à portée
- [ ] Accès réseau disponible (signal WiFi ou Ethernet)

## Calibration automatique

À la mise sous tension, le Grillo One se calibre automatiquement :

- La calibration prend quelques secondes
- Le capteur **doit rester complètement immobile** pendant ce processus
- La LED du capteur indique quand la calibration est terminée

:::warning
Ne déplacez pas et ne perturbez pas le capteur pendant la séquence de mise sous tension initiale. Tout mouvement pendant la calibration affecte la qualité des données.
:::

## Orientation du capteur

Le capteur mesure les mouvements du sol sur trois axes. Une orientation précise à la boussole n'est pas requise, mais tous les capteurs de votre réseau doivent avoir un axe vertical cohérent.

### Montage au sol (standard)

- Montez le capteur à plat sur le sol
- Assurez-vous que le capteur est de niveau
- Aucune orientation spéciale requise

### Montage mural

Si vous montez sur un mur structurel :

1. Positionnez le capteur avec le **port USB vers le bas**
2. Cela maintient l'axe Y cohérent avec les capteurs montés au sol
3. **Enregistrez l'orientation de montage** dans les métadonnées du capteur dans le tableau de bord Grillo Cloud

:::warning Métadonnées de montage mural
Lorsqu'un capteur est monté au mur, vous devez mettre à jour sa configuration dans Grillo Cloud pour indiquer l'orientation de montage. Cela garantit une interprétation correcte des données.
:::

## Environnement de fonctionnement

| Spécification | Limite |
|---------------|--------|
| Température | -20°C à +60°C |
| Humidité | 10% à 90% sans condensation |
| Lumière directe du soleil | À éviter — peut causer une surchauffe |

## Étapes suivantes

Une fois physiquement installé :

1. [Configurez la connectivité réseau](/hardware/grillo-one/network-setup)
2. [Provisionnez le capteur sur Grillo Cloud](/hardware/grillo-one/provisioning)
