---
sidebar_position: 4
title: Bonnes pratiques réseau
---

# Bonnes pratiques réseau

Directives pour concevoir et exploiter des réseaux sismiques efficaces avec les capteurs Grillo.

## Principes de conception de réseau

### Compromis couverture vs densité

Considérez vos objectifs :

| Objectif | Stratégie |
|----------|-----------|
| Surveillance large zone | Répartir les capteurs dans la région |
| Localisation précise | Densité de capteurs plus élevée |
| Alerte précoce | Capteurs près des sources potentielles |
| Surveillance de bâtiment | Capteurs dans toute la structure |

### Minimum de capteurs pour la détection

Pour la détection de séismes (avec Événements activés) :

<!-- TODO: Confirm actual requirements -->

| Objectif de détection | Capteurs minimum |
|-----------------------|------------------|
| Détection de base | 3-4 capteurs |
| Précision de localisation | 6+ capteurs |
| Précision de magnitude | 10+ capteurs |
| Haute précision | 20+ capteurs |

## Stratégies de placement des capteurs

### Distribution géographique

**Pour les réseaux régionaux :**
- Espacez les capteurs de 10-50 km selon les objectifs
- Assurez la couverture des zones peuplées
- Placez les capteurs autour des sources potentielles de séismes
- Considérez les barrières géographiques (montagnes, rivières)

**Pour les réseaux urbains :**
- Espacement plus dense dans les centres-villes
- Couverture des infrastructures critiques
- Plusieurs capteurs par quartier pour la redondance

### Emplacements stratégiques

Priorisez les capteurs dans :
- Installations de réponse d'urgence
- Écoles et hôpitaux
- Bâtiments gouvernementaux
- Nœuds de transport
- Infrastructures critiques

### Éviter les emplacements problématiques

- Près des autoroutes principales (bruit de circulation)
- À l'intérieur des installations industrielles (vibrations de machines)
- Sur un sol instable (mauvais couplage)
- Étages supérieurs des bâtiments (mouvement amplifié)

[Plus sur le placement des capteurs →](/concepts/sensor-placement)

## Considérations de qualité des données

### Liste de contrôle de sélection de site

Pour chaque emplacement de capteur :

- [ ] Rez-de-chaussée ou niveau sous-sol
- [ ] Fondation solide (béton préféré)
- [ ] Loin des équipements CVC (>3 mètres)
- [ ] Loin du trafic intense
- [ ] Alimentation électrique stable
- [ ] Connectivité réseau fiable
- [ ] Accessible pour la maintenance

### Sources de bruit à éviter

| Source | Distance minimum |
|--------|------------------|
| Unités CVC | 3 mètres |
| Machines lourdes | 10 mètres |
| Routes principales | 20 mètres |
| Lignes ferroviaires | 50 mètres |

## Redondance et fiabilité

### Redondance du réseau

Planifiez pour les pannes :
- Pas de points de défaillance uniques
- Couverture qui se chevauche si possible
- Mélange de types de connectivité (WiFi + cellulaire)
- Alimentation de secours où c'est critique

### Diversité de connectivité

Pour des réseaux robustes :
- Utilisez le Grillo One avec Ethernet si possible
- Déployez le Grillo Pulse avec cellulaire dans les zones éloignées
- Assurez plusieurs FAI à travers le réseau
- Testez les scénarios de basculement

## Organisation du réseau

### Conventions de nommage

Établissez un nommage cohérent :

**Codes de station :**
- Utilisez le format compatible FDSN si possible
- Exemple : NET.STA.LOC.CHA
- Gardez les codes significatifs mais concis

**Noms de réseau :**
- Géographique : « Réseau Baie de San Francisco »
- Organisationnel : « Réseau Sismique Universitaire »
- Objectif : « Réseau EEW - Phase 1 »

### Documentation

Maintenez des enregistrements de :
- Emplacements des capteurs et détails d'installation
- Conditions du site et photos
- Diagramme de topologie du réseau
- Historique de maintenance
- Informations de contact pour chaque site

## Bonnes pratiques opérationnelles

### Surveillance

Vérifications régulières :
- Quotidien : Examiner le tableau de bord de statut des capteurs
- Hebdomadaire : Vérifier les indicateurs de qualité des données
- Mensuel : Vérifier que tous les capteurs rapportent
- Trimestriel : Inspections physiques des sites

### Maintenance

Activités planifiées :
- Nettoyer les capteurs annuellement
- Vérifier la stabilité du montage
- Mettre à jour le firmware si disponible
- Remplacer les batteries (Pulse) selon les besoins
- Documenter toute la maintenance

### Réponse aux incidents

Quand les capteurs passent hors ligne :
1. Vérifier le tableau de bord pour les indicateurs d'erreur
2. Tenter un redémarrage à distance si disponible
3. Vérifier la connectivité réseau
4. Planifier une visite sur site si nécessaire
5. Documenter le problème et la résolution

## Faire évoluer votre réseau

### Commencer petit

Commencez avec :
- 3-5 capteurs dans des emplacements clés
- Prouvez que le concept fonctionne
- Apprenez les exigences opérationnelles
- Affinez les processus

### Croître stratégiquement

Étendez en :
- Comblant les lacunes de couverture
- Ajoutant de la densité dans les zones prioritaires
- Répondant aux retours des utilisateurs
- Suivant un plan documenté

### Considérations entreprise

Pour les grands déploiements :
- Gestion centralisée
- Surveillance automatisée
- Structure de support par niveaux
- Rapports réguliers

## Erreurs courantes à éviter

### Erreurs de planification

1. **Densité insuffisante** - Trop peu de capteurs pour les objectifs de détection
2. **Mauvaise sélection de site** - Les emplacements bruyants dégradent la qualité des données
3. **Pas de redondance** - Points de défaillance uniques
4. **Objectifs flous** - Ne pas savoir ce que vous voulez détecter

### Erreurs opérationnelles

1. **Négliger la maintenance** - Les capteurs échouent sans attention
2. **Ignorer les alertes** - Manquer des signaux importants
3. **Mauvaise documentation** - Impossible de dépanner sans enregistrements
4. **Pas de tests** - Hypothèses sur le comportement du système

## Exemples de conceptions de réseaux

### Petit réseau communautaire (5 capteurs)

```
Objectif : Sensibilisation communautaire
Couverture : Rayon de 10 km
Capteurs :
- 1x Caserne de pompiers (central)
- 1x École (nord)
- 1x Bibliothèque (sud)
- 1x Centre communautaire (est)
- 1x Résidence privée (ouest)
```

### Réseau de surveillance urbaine (20 capteurs)

```
Objectif : Alerte précoce
Couverture : Centre-ville + banlieues
Capteurs :
- 5x Centre-ville (espacement 1 km)
- 5x District nord
- 5x District sud
- 3x Zone industrielle
- 2x Installations portuaires
```

### Réseau de recherche (50+ capteurs)

```
Objectif : Recherche sismique
Couverture : Surveillance de zone de faille
Capteurs :
- Réseaux denses près de la faille
- Stations régionales de fond
- Stations de référence sur le socle rocheux
- Capteurs en forage (si applicable)
```

## Ressources

- [Guide de placement des capteurs](/concepts/sensor-placement)
- [Concepts de qualité des données](/concepts/data-quality)
- [Réseaux sismiques expliqués](/concepts/seismic-networks)
