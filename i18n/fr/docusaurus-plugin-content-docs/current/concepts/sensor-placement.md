---
sidebar_position: 4
title: Placement des capteurs
---

# Bonnes pratiques de placement des capteurs

Un placement approprié des capteurs est crucial pour la qualité des données et l'efficacité du réseau.

## Pourquoi le placement est important

Le placement des capteurs affecte :
- **Qualité du signal** - Un bon placement capture clairement les séismes
- **Niveaux de bruit** - Un mauvais placement ajoute des signaux indésirables
- **Capacité de détection** - La position affecte ce que vous pouvez détecter
- **Utilité des données** - La valeur scientifique dépend de l'installation

## Principes de sélection de site

### Caractéristiques idéales

Les meilleurs emplacements de capteurs ont :

| Caractéristique | Pourquoi c'est important |
|-----------------|--------------------------|
| Fondation solide | Meilleur couplage au mouvement du sol |
| Faible bruit | Signaux sismiques plus clairs |
| Environnement stable | Qualité des données constante |
| Alimentation fiable | Fonctionnement continu |
| Connectivité réseau | Transmission de données en temps réel |

### Hiérarchie des emplacements

Du meilleur à l'acceptable :

1. **Roche mère** - Bruit le plus bas, meilleur couplage
2. **Dalle de béton sur sol** - Très bon
3. **Sol solide (rez-de-chaussée)** - Bon
4. **Étages supérieurs** - Acceptable avec considérations
5. **Surface meuble/souple** - À éviter si possible

## Sélection de l'étage

### Rez-de-chaussée recommandé

Le rez-de-chaussée ou le sous-sol est idéal :
- Le plus proche du mouvement réel du sol
- Moins d'amplification par le bâtiment
- Données plus représentatives

### Considérations pour les étages supérieurs

Si les étages supérieurs sont nécessaires :
- Données affectées par la réponse du bâtiment
- Amplification à certaines fréquences
- Toujours utile pour de nombreuses applications
- Documenter le niveau d'étage dans les métadonnées

## Types de fondation

### Dalle de béton

Meilleure fondation courante :
- Couplage direct au sol
- Plateforme stable
- Faible bruit local

Installation : Placer directement sur le béton propre.

### Plancher surélevé

Courant dans les bureaux/centres de données :
- À éviter si possible
- Si nécessaire, étendre le support jusqu'à la dalle en dessous
- Documenter le type d'installation

### Moquette/revêtement souple

Surface problématique :
- L'amortissement affecte les hautes fréquences
- Le capteur peut se déplacer
- Envisager une plateforme rigide en dessous

## Distance des sources de bruit

### Sources à éviter

| Source | Distance minimale | Notes |
|--------|-------------------|-------|
| Équipement CVC | 3+ mètres | Vibration continue |
| Ascenseurs | 5+ mètres | Bruit intermittent |
| Machines lourdes | 10+ mètres | Dépend de la machine |
| Routes principales | 20+ mètres | Vibration du trafic |
| Lignes ferroviaires | 50+ mètres | Bruit significatif |

### Sources de bruit intérieures

- Unités de traitement d'air
- Générateurs
- Pompes et compresseurs
- Gros moteurs
- Salles de serveurs (ventilateurs)

### Considérations extérieures

- Circulation des véhicules
- Construction
- Activité industrielle
- Chemins de fer
- Aéronefs (près des aéroports)

## Orientation et mise à niveau

### Orientation correcte

Pour des données directionnelles précises :
- Noter le marquage d'orientation du capteur
- Aligner au nord si spécifié
- Documenter l'orientation réelle
- La cohérence à travers le réseau aide

### Mise à niveau

Critique pour la qualité des données :
- Utiliser un niveau à bulle
- Le capteur doit être horizontal
- Ajuster le montage si nécessaire
- Revérifier périodiquement

### Stabilité

Prévenir le mouvement :
- Montage sécurisé
- Surface/patins antidérapants
- Pas de vacillement au toucher
- Ne se déplacera pas avec le temps

## Environnements d'installation

### Immeubles de bureaux

**Bons emplacements :**
- Rez-de-chaussée, loin de la CVC
- Locaux techniques avec sols solides
- Zones de stockage (si stables)

**À éviter :**
- Près des cages d'ascenseur
- Salles mécaniques CVC
- Étages avec beaucoup de passages

### Écoles

**Bons emplacements :**
- Sous-sol si disponible
- Stockage/utilitaire au rez-de-chaussée
- Laboratoires de sciences (tables stables)

**À éviter :**
- Gymnases (activité)
- Salles de musique (vibration)
- Près des équipements de jeux

### Résidentiel

**Bons emplacements :**
- Sol du sous-sol
- Placard au rez-de-chaussée
- Dalle de garage

**À éviter :**
- Près des machines à laver
- Près des équipements CVC
- Étages supérieurs si possible

### Installations industrielles

**Bons emplacements :**
- Zones de bureaux éloignées de la production
- Bâtiments utilitaires
- Emplacements périmétriques

**À éviter :**
- Sols de production
- Près des équipements lourds
- Zones à fortes vibrations

## Installations extérieures (Grillo Pulse)

### Installations au sol

- Dalle de béton ou roche mère
- Loin des arbres (mouvement des racines)
- Bon drainage
- Hors des zones inondables

### Montage sur poteau

- Poteau/piquet robuste
- Flexion minimale au vent
- Aussi bas que possible
- Mise à niveau correcte

### Protection environnementale

- Ombre du soleil direct
- Protection contre les intempéries extrêmes
- Loin des arroseurs
- À l'abri des animaux

## Erreurs courantes

### Mauvaise sélection de site

| Erreur | Problème | Solution |
|--------|----------|----------|
| Près de la CVC | Bruit constant | Déplacer plus loin |
| Sur moquette | Amortissement/instabilité | Utiliser une base rigide |
| Étage supérieur | Effets du bâtiment | Déplacer au rez-de-chaussée |
| Près du trafic | Bruit de circulation | Augmenter la distance |

### Erreurs d'installation

| Erreur | Problème | Solution |
|--------|----------|----------|
| Pas à niveau | Données incorrectes | Remettre à niveau |
| Montage lâche | Le capteur bouge | Sécuriser correctement |
| Câble tendu | Peut déplacer le capteur | Laisser du mou au câble |
| Mauvais couplage | Signaux faibles | Contact direct avec le sol |

## Vérification

### Après l'installation

Vérifier :
- [ ] Le capteur est de niveau
- [ ] Le montage est sécurisé
- [ ] Pas de vacillement ou mouvement
- [ ] Loin des sources de bruit
- [ ] Alimentation et réseau stables
- [ ] La qualité des données semble bonne

### Vérifications périodiques

Examiner régulièrement :
- Stabilité physique
- Sources de bruit modifiées
- Tendances de qualité des données
- Changements environnementaux

## Documentation

Enregistrer pour chaque capteur :
- Emplacement exact (coordonnées)
- Étage/niveau
- Type de surface
- Équipements à proximité
- Date d'installation
- Photos

## Guides connexes

- [Installation physique - Grillo One](/hardware/grillo-one/physical-installation)
- [Installation physique - Grillo Pulse](/hardware/grillo-pulse/physical-installation)
- [Qualité des données](/concepts/data-quality)
