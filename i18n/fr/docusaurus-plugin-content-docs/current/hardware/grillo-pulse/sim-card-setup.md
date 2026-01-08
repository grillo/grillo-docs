---
sidebar_position: 5
title: Configuration de la carte SIM
---

# Configuration de la carte SIM - Grillo Pulse

Ce guide explique comment installer et configurer une carte SIM dans votre Grillo Pulse pour la connectivité cellulaire.

## Exigences de la carte SIM

### Types de SIM compatibles

Le Grillo Pulse utilise LTE Cat-4 avec repli automatique vers les réseaux 3G/2G :

| Technologie | Prise en charge | Notes |
|-------------|-----------------|-------|
| LTE Cat-4 | Oui | Principale, recommandée |
| 4G LTE | Oui | Prise en charge |
| WCDMA (3G) | Oui | Repli automatique |
| GSM (2G) | Oui | Repli automatique |

### Taille de la carte SIM

- **Taille requise :** Nano SIM
- Les cartes SIM standard ou Micro ne rentreront pas

### Exigences du forfait de données

- **Minimum :** Faible bande passante (l'option de format binaire réduit encore l'utilisation)
- **Recommandé :** Forfaits de données M2M/IoT
- **Meilleur rapport qualité-prix :** Forfaits avec données illimitées ou plafonds élevés

## Opérateurs pris en charge

Le modem du Grillo Pulse prend en charge une large gamme de bandes de fréquences pour une couverture mondiale. La plupart des opérateurs dans le monde sont compatibles.

### Bandes de fréquences prises en charge

| Technologie | Bandes |
|-------------|--------|
| LTE-FDD | B1, B2, B3, B4, B5, B7, B8, B12, B13, B18, B19, B20, B25, B26, B28, B66 |
| LTE-TDD | B34, B38, B39, B40, B41 |
| WCDMA | B1, B2, B4, B5, B6, B8, B19 |
| GSM | 850, 900, 1800, 1900 MHz |

### Compatibilité des opérateurs

Avec la prise en charge des bandes LTE-FDD, LTE-TDD, WCDMA et GSM, le Grillo Pulse est compatible avec la plupart des opérateurs dans le monde. Vérifiez les bandes prises en charge par votre opérateur pour confirmer la compatibilité.

:::tip
Les cartes SIM M2M/IoT des opérateurs offrent généralement de meilleurs tarifs pour les appareils à faible bande passante comme le Grillo Pulse.
:::

### Starlink Direct to Cell

**Bientôt disponible :** La connectivité Starlink Direct to Cell sera disponible pour le Grillo Pulse dans des régions spécifiques (à déterminer). Cela permettra une connectivité cellulaire par satellite pour les déploiements vraiment à distance où la couverture cellulaire traditionnelle n'est pas disponible.

## Installation de la carte SIM

### Avant de commencer

- Éteignez le capteur
- Travaillez dans un environnement propre et sec
- Ayez une carte Nano SIM prête
- Ayez un petit tournevis cruciforme prêt (si vous utilisez le boîtier IP67)

### Étapes d'installation

1. **Éteignez le capteur**
   - Débranchez le câble d'alimentation
   - Attendez 30 secondes pour un arrêt complet

2. **Accédez à l'emplacement SIM**
   - Si vous utilisez le boîtier IP67 : Ouvrez le boîtier en retirant les vis
   - Si PCB seul : L'emplacement SIM est directement accessible sur la carte

3. **Localisez l'emplacement SIM**
   - Trouvez le support de carte Nano SIM sur la carte de circuit
   - Notez le diagramme d'orientation près de l'emplacement (contacts vers le bas généralement)

4. **Insérez la carte Nano SIM**
   - Orientez la SIM selon le diagramme
   - Faites glisser dans l'emplacement jusqu'à ce qu'elle clique
   - Ne forcez pas - elle doit glisser en douceur

5. **Fermez le boîtier (si applicable)**
   - Alignez les moitiés du boîtier
   - Assurez-vous qu'aucun câble n'est pincé
   - Remettez et serrez toutes les vis
   - Vérifiez que le joint étanche est intact

6. **Rebranchez l'alimentation**
   - Connectez le câble d'alimentation (6-10V CC ou USB)
   - Attendez que la séquence de démarrage soit terminée (2-5 minutes pour la connexion cellulaire)

![Diagramme d'installation de la carte SIM](/img/placeholder-sim-install.svg)
<!-- TODO: Replace with actual installation image -->

## Activation de votre SIM

### SIM pré-activée (incluse avec certaines unités)

Si votre Pulse est livré avec une SIM pré-activée :
1. La SIM devrait se connecter automatiquement
2. Vérifiez le statut en ligne dans le tableau de bord
3. Aucune activation supplémentaire nécessaire

### SIM fournie par l'opérateur

Si vous utilisez une SIM de votre opérateur :

1. **Achetez un forfait de données**
   - Contactez l'opérateur pour un forfait de données IoT/M2M
   - SIM compatible LTE Cat-4 (la plupart des SIM modernes)
   - Assurez-vous de la taille Nano SIM

2. **Activez la SIM**
   - Suivez le processus d'activation de l'opérateur
   - Cela peut prendre jusqu'à 24 heures

3. **Notez les paramètres APN (si requis)**
   - Obtenez le nom APN de l'opérateur
   - Nom d'utilisateur/mot de passe si requis (souvent vide)

4. **Installez et configurez**
   - Installez la Nano SIM dans le capteur
   - La plupart des opérateurs configurent automatiquement l'APN
   - La configuration manuelle de l'APN est rarement nécessaire

## Configuration APN

La plupart des opérateurs fonctionnent avec la détection automatique d'APN. Une configuration manuelle peut être nécessaire pour certains opérateurs.

### Accès aux paramètres APN

<!-- TODO: Add actual APN configuration interface -->

1. Connectez-vous à l'interface de configuration du capteur
2. Accédez aux paramètres cellulaires
3. Entrez les informations APN

### Paramètres APN courants

<!-- TODO: Add actual carrier APNs -->

| Opérateur | APN | Nom d'utilisateur | Mot de passe |
|-----------|-----|-------------------|--------------|
| Exemple Opérateur | internet.exemple.com | (vide) | (vide) |

### Dépannage APN

Si le cellulaire ne se connecte pas après la configuration APN :

1. Vérifiez que l'orthographe de l'APN correspond exactement aux informations de l'opérateur
2. Vérifiez si un nom d'utilisateur/mot de passe est requis
3. Redémarrez le capteur après les modifications
4. Contactez l'opérateur pour vérifier l'APN

## Vérification de la connexion cellulaire

Après l'installation de la SIM :

1. **Vérifiez le statut des LED**
   - Devrait afficher un indicateur de connexion cellulaire
   - Peut prendre 2-5 minutes pour la connexion initiale

2. **Vérifiez la puissance du signal**
   - Consultez dans l'interface de configuration ou le tableau de bord
   - Minimum 2 barres recommandé

3. **Vérifiez dans le tableau de bord**
   - Connectez-vous à cloud.grillo.io
   - Vérifiez que le capteur affiche "En ligne"
   - Vérifiez que le type de connexion affiche "Cellulaire"

## Gestion de la carte SIM

### Surveillance de l'utilisation des données

- Vérifiez l'utilisation via le portail de votre opérateur
- Le tableau de bord peut afficher des statistiques de données
- Configurez des alertes pour une utilisation élevée

### Changement de cartes SIM

Pour remplacer ou changer de SIM :

1. Éteignez le capteur
2. Ouvrez le boîtier
3. Retirez l'ancienne SIM (appuyez pour éjecter si à ressort)
4. Insérez la nouvelle SIM
5. Fermez le boîtier
6. Mettez à jour les paramètres APN si nécessaire

### Sécurité de la SIM

- Certains opérateurs prennent en charge la protection par code PIN de la SIM
- À envisager pour les déploiements haute sécurité
- Note : La saisie du PIN peut nécessiter un accès physique

## Dépannage

### SIM non détectée

1. Éteignez et réinstallez la SIM
2. Vérifiez l'orientation de la SIM
3. Vérifiez les broches tordues dans l'emplacement
4. Essayez la SIM dans un téléphone pour vérifier qu'elle fonctionne

### Pas de connexion cellulaire

1. Vérifiez que la SIM est activée auprès de l'opérateur
2. Vérifiez la couverture cellulaire à l'emplacement
3. Vérifiez que l'antenne est connectée
4. Vérifiez les paramètres APN

### Connexion intermittente

1. Vérifiez la puissance du signal
2. Repositionnez l'antenne
3. Vérifiez que le forfait de données est actif
4. Vérifiez les pannes de l'opérateur

[Guide de dépannage complet →](/hardware/grillo-pulse/troubleshooting)

## Étapes suivantes

Après la configuration de la SIM :

1. [Configurez les paramètres réseau](/hardware/grillo-pulse/network-setup)
2. [Provisionnez sur Grillo Cloud](/hardware/grillo-pulse/provisioning)
