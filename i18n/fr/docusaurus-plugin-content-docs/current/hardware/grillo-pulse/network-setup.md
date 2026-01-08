---
sidebar_position: 4
title: Configuration réseau
---

# Configuration réseau - Grillo Pulse

Le Grillo Pulse prend en charge plusieurs options de connectivité : LTE cellulaire (principale), WiFi et Starlink (bientôt disponible). Ce guide explique comment configurer chaque option.

## Options de connectivité

| Priorité | Méthode | Idéal pour | Prérequis |
|----------|---------|------------|-----------|
| Principale | **LTE Cellulaire** | Emplacements à distance | Carte Nano SIM, forfait de données actif |
| Secondaire | **Starlink** | Extrême distance | Bientôt disponible |
| Tertiaire | **WiFi** | Sites avec sans fil existant | Réseau 2,4 GHz, SSID et mot de passe |
| Supplémentaire | **Série USB** | Débogage/données locales | Câble USB |

:::tip
Lorsque le WiFi est disponible et configuré, le Pulse préférera le WiFi pour économiser les coûts de données cellulaires.
:::

## Option 1 : Configuration cellulaire (Principale)

Le Grillo Pulse utilise LTE Cat-4 avec repli automatique vers les réseaux 3G/2G pour une couverture mondiale.

### Prérequis

- Carte Nano SIM installée ([voir configuration de la carte SIM](/hardware/grillo-pulse/sim-card-setup))
- Forfait de données actif avec votre opérateur
- Antenne LTE connectée
- Couverture cellulaire adéquate à l'emplacement

### Étapes de configuration cellulaire

1. **Installez la carte SIM**
   - Insérez la carte Nano SIM dans l'emplacement sur le PCB
   - Voir [guide de configuration de la carte SIM](/hardware/grillo-pulse/sim-card-setup) pour les détails

2. **Connectez l'antenne LTE**
   - Fixez l'antenne au port SMA
   - Positionnez l'antenne pour une réception optimale (verticale, surélevée)

3. **Mettez le capteur sous tension**
   - Connectez l'alimentation (6-10V CC ou USB)
   - Attendez la connexion cellulaire (peut prendre 2-5 minutes)

4. **Vérifiez la connexion**
   - La LED devrait indiquer une connexion cellulaire
   - Vérifiez le statut en ligne du capteur dans le tableau de bord

### Configuration APN

La plupart des opérateurs fonctionnent avec la détection automatique d'APN. Si une configuration manuelle est nécessaire, contactez votre opérateur pour :

| Paramètre | Description |
|-----------|-------------|
| APN | Nom du point d'accès de l'opérateur |
| Nom d'utilisateur | Si requis par l'opérateur (souvent vide) |
| Mot de passe | Si requis par l'opérateur (souvent vide) |

### Support des technologies réseau

| Technologie | Pris en charge | Notes |
|-------------|----------------|-------|
| LTE Cat-4 | Oui | Principale, 150 Mbps DL / 50 Mbps UL |
| WCDMA (3G) | Oui | Repli automatique |
| GSM (2G) | Oui | Repli automatique |

### Bandes de fréquences prises en charge

Le modem du Grillo Pulse offre une couverture mondiale avec les bandes suivantes :

| Technologie | Bandes |
|-------------|--------|
| LTE-FDD | B1, B2, B3, B4, B5, B7, B8, B12, B13, B18, B19, B20, B25, B26, B28, B66 |
| LTE-TDD | B34, B38, B39, B40, B41 |
| WCDMA | B1, B2, B4, B5, B6, B8, B19 |
| GSM | 850, 900, 1800, 1900 MHz |

### Support GNSS

Le modem inclut un GNSS intégré pour les services de localisation :
- GPS, Beidou, GLONASS, GALILEO, QZSS

:::note
La synchronisation horaire utilise NTP via le serveur de temps Grillo Cloud, pas le GNSS. Le module GNSS est disponible uniquement pour les services de localisation.
:::

## Option 2 : Configuration WiFi

### Prérequis

- Réseau WiFi 2,4 GHz (le 5 GHz n'est **pas** pris en charge)
- Nom du réseau (SSID) et mot de passe
- Smartphone ou ordinateur pour la configuration

### Étapes de configuration WiFi

1. **Mettez le capteur sous tension**
   - Connectez l'alimentation (6-10V CC ou USB) au capteur
   - Attendez que la LED indique le mode configuration

2. **Connectez-vous au point d'accès du capteur**
   - Sur votre téléphone/ordinateur, recherchez un réseau WiFi nommé `GrilloPulse-XXXX`
   - (XXXX = 4 derniers caractères de l'adresse MAC de l'appareil)
   - Connectez-vous à ce réseau (aucun mot de passe requis)

3. **Ouvrez le portail de configuration**
   - Un portail captif devrait s'ouvrir automatiquement
   - Sinon, ouvrez un navigateur et accédez à `http://192.168.4.1`

4. **Sélectionnez votre réseau WiFi**
   - Choisissez votre réseau 2,4 GHz dans la liste
   - Entrez votre mot de passe WiFi
   - Cliquez sur "Connecter"

5. **Vérifiez la connexion**
   - Le capteur redémarrera et se connectera à votre réseau
   - La LED devrait indiquer une connexion réussie

## Option 3 : WiFi et cellulaire ensemble

Pour une fiabilité maximale, configurez les deux méthodes de connexion :

1. Terminez d'abord la configuration WiFi
2. Installez et configurez la carte SIM
3. Vérifiez que les deux connexions fonctionnent indépendamment
4. Le capteur basculera automatiquement :
   - Utilise le WiFi lorsqu'il est disponible
   - Bascule vers le cellulaire si le WiFi échoue
   - Revient au WiFi lorsqu'il devient disponible

## Exigences réseau

### Transmission des données

Le Grillo Pulse transmet les données sismiques en utilisant :

| Paramètre | Valeur |
|-----------|--------|
| Protocole | UDP sur CoAP |
| Format des données | JSON (option binaire disponible) |
| Synchronisation horaire | NTP (via serveur de temps Grillo Cloud) |
| Compatibilité | Compatible DataLink/SeedLink |

### Pare-feu et ports

Le Grillo Pulse a besoin d'un accès sortant vers les serveurs Grillo Cloud :

| Protocole | Port | Fonction |
|-----------|------|----------|
| UDP | 5683, 5684 | Données du capteur (CoAP) |
| UDP | 123 | Synchronisation horaire (NTP) |
| TCP | 443 | Mises à jour du firmware (HTTPS) |

:::note
Aucun port entrant n'a besoin d'être ouvert. Toutes les connexions sont initiées par le capteur.
:::

### Exigences de bande passante

- **Minimum :** 100 Kbps en téléversement
- **Recommandé :** 500 Kbps en téléversement
- **Utilisation des données cellulaires :** Faible bande passante (l'option de format binaire réduit encore l'utilisation des données)

### Considérations sur les données cellulaires

Utilisation mensuelle estimée des données :

| Format des données | Bande passante | Utilisation mensuelle |
|--------------------|----------------|----------------------|
| JSON (par défaut) | ~3,2 Ko/s | ~8 Go/mois |
| Binaire/MiniSEED | ~0,6 Ko/s | ~1,5 Go/mois |

- Le format binaire réduit significativement l'utilisation des données
- Envisagez des forfaits de données M2M/IoT pour le meilleur rapport qualité-prix
- Surveillez l'utilisation via le portail de votre opérateur

## Indicateurs LED de statut (débogage/test uniquement)

:::note
Les LEDs sont sur le PCB et **ne sont pas visibles** à travers le boîtier IP67 standard. Utilisez le [tableau de bord Grillo Cloud](https://cloud.grillo.io) pour vérifier la connectivité des capteurs déployés.
:::

Le Grillo Pulse a deux LEDs RGB de statut :

**LED Réseau :**
| Couleur | Signification |
|---------|---------------|
| Pulsation bleue | Connexion en cours ou mode provisionnement |
| Vert | Connecté au réseau |
| Rouge | Échec de connexion |

**LED Capteur :**
| Couleur | Signification |
|---------|---------------|
| Vert | Capteurs opérationnels |
| Jaune | Capteur dégradé |
| Rouge | Capteur en panne |

## Puissance du signal

### Vérification du signal WiFi

- Utilisez une application d'analyse WiFi sur smartphone à l'emplacement du capteur
- Minimum recommandé : -70 dBm
- Idéal : -60 dBm ou mieux

### Vérification du signal cellulaire

- Utilisez votre smartphone à l'emplacement du capteur comme référence
- Consultez les cartes de couverture de l'opérateur
- La LED ou le tableau de bord peut afficher la puissance du signal

### Améliorer la réception cellulaire

1. **Repositionnez l'antenne** - Plus haut est généralement mieux
2. **Utilisez une antenne externe** - Envisagez une antenne à gain plus élevé
3. **Vérifiez l'orientation** - La position verticale est typiquement la meilleure
4. **Dégagez les obstructions** - Le métal et les matériaux denses bloquent le signal

## Basculer entre les modes

### Forcer le WiFi uniquement

<!-- TODO: Add process to disable cellular -->

Utile pour :
- Économiser les données cellulaires
- Tester la fiabilité du WiFi

### Forcer le cellulaire uniquement

<!-- TODO: Add process to disable WiFi -->

Utile pour :
- Tester la connectivité cellulaire
- Lorsque le WiFi n'est pas fiable

### Automatique (recommandé)

Comportement par défaut :
1. Le capteur essaie d'abord le WiFi
2. Bascule vers le cellulaire si le WiFi n'est pas disponible
3. Revient au WiFi lorsqu'il devient disponible

## Dépannage de la connectivité

### Problèmes WiFi

| Problème | Solution |
|----------|----------|
| Réseau non trouvé | Vérifiez le 2,4 GHz ; vérifiez la portée |
| Mauvais mot de passe | Saisissez à nouveau soigneusement |
| Connexion intermittente | Vérifiez la puissance du signal ; rapprochez-vous |

### Problèmes cellulaires

| Problème | Solution |
|----------|----------|
| Pas de connexion | Vérifiez la SIM ; vérifiez la couverture ; vérifiez l'antenne |
| Connexion lente | Vérifiez la puissance du signal ; repositionnez l'antenne |
| Latence élevée | Normal pour le cellulaire ; généralement acceptable |

[Guide de dépannage complet →](/hardware/grillo-pulse/troubleshooting)

## Étapes suivantes

Une fois le réseau configuré :

1. [Provisionnez le capteur sur Grillo Cloud](/hardware/grillo-pulse/provisioning)
