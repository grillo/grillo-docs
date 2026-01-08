---
sidebar_position: 1
title: Présentation du Grillo Pulse
---

# Grillo Pulse

Le Grillo Pulse est le capteur sismique de qualité professionnelle de Grillo, conçu pour les déploiements extérieurs et à distance. Doté d'une connectivité cellulaire mondiale, d'une compatibilité avec l'énergie solaire et d'une synchronisation temporelle GPS, il est conçu pour les emplacements où l'infrastructure est limitée ou peu fiable.

Il combine un accéléromètre MEMS à très faible bruit avec un géophone sensible de 4,5 Hz, fournissant 4 canaux de données sismiques capables de capturer tout, des événements microsismiques aux séismes locaux forts.

<img src="/img/grillo-pulse-case.jpg" alt="Grillo Pulse" style={{maxWidth: '800px', width: '100%'}} />

## Caractéristiques principales

- **Système de double capteur** - Géophone 4,5 Hz + accéléromètre MEMS à très faible bruit
- **Large plage de détection** - Capture des événements microsismiques aux séismes locaux forts
- **Connectivité mondiale** - LTE Cat-4 avec repli 2G/3G/4G, WiFi et Starlink (bientôt disponible)
- **Alimentation solaire** - Entrée 6-10V avec batterie LiPo externe de secours
- **Synchronisation NTP** - Synchronisation temporelle précise via le serveur de temps Grillo Cloud
- **Résistant aux intempéries** - Boîtier étanche IP67 disponible
- **Compatible avec l'industrie** - Sortie compatible DataLink/SeedLink

## Spécifications

### Physiques

| Spécification | Valeur |
|---------------|--------|
| Dimensions | 98,5 x 70mm (PCB) |
| Poids | 50g |
| Boîtier | Étanche IP67 (optionnel) |
| Température de fonctionnement | -20°C à +60°C |

### Alimentation

| Spécification | Valeur |
|---------------|--------|
| Source d'alimentation | Solaire 6-10V |
| Batterie | LiPo externe |
| Consommation d'énergie | 1,32W (400mA à 3,3V) |
| USB | Alimentation et mises à jour du firmware |

### Connectivité

| Spécification | Valeur |
|---------------|--------|
| Connexion principale | LTE Cat-4 (support mondial 2G/3G/4G) |
| Connexion secondaire | Starlink Direct to Cell (bientôt disponible, régions sélectionnées) |
| Connexion tertiaire | WiFi 802.11 b/g/n (2,4 GHz) |
| Méthode supplémentaire | Données série USB |
| Synchronisation horaire | NTP (via serveur de temps Grillo Cloud) |
| Transmission des données | UDP sur CoAP |
| Format des données | JSON (option binaire disponible) |
| Logiciel d'ingestion | Compatible DataLink/SeedLink |

### Capteurs

| Spécification | Valeur |
|---------------|--------|
| Capteur principal | Géophone 4,5 Hz avec ADC 32 bits |
| Capteur secondaire | Accéléromètre MEMS à très faible bruit avec ADC 20 bits |
| Canaux | 4 (1 géophone + 3 accéléromètre) |
| Fréquence d'échantillonnage | 125Hz (accéléromètre), 100Hz (géophone) |
| Plage de détection | Microsismique aux séismes locaux forts |

## Contenu de la boîte

- Unité capteur Grillo Pulse (PCB avec capteurs intégrés)
- Boîtier étanche IP67 (si commandé)
- Antenne LTE
- Antenne GPS
- Câble d'alimentation (pour connexion solaire/batterie)
- Guide de démarrage rapide
- Matériel de montage

[Voir le guide de déballage complet →](/hardware/grillo-pulse/whats-in-the-box)

## Aperçu de l'installation

1. **Déballage** - Vérifier que tous les composants sont présents
2. **Assemblage** - Installer le PCB dans le boîtier, connecter les antennes
3. **Installation de la SIM** - Insérer la carte SIM pour la connectivité cellulaire
4. **Installation** - Monter le capteur dans un emplacement approprié
5. **Connexion de l'alimentation** - Câbler au panneau solaire et/ou à la batterie
6. **Provisionnement** - Enregistrer le capteur sur Grillo Cloud
7. **Configuration** - Définir le nom de la station et l'emplacement dans le tableau de bord

**Temps d'installation estimé :** 30-45 minutes

## Guides de cette section

- [Contenu de la boîte](/hardware/grillo-pulse/whats-in-the-box) - Composants et accessoires
- [Installation physique](/hardware/grillo-pulse/physical-installation) - Montage et placement
- [Configuration réseau](/hardware/grillo-pulse/network-setup) - Configuration WiFi et cellulaire
- [Configuration de la carte SIM](/hardware/grillo-pulse/sim-card-setup) - Activation cellulaire
- [Provisionnement](/hardware/grillo-pulse/provisioning) - Connexion à Grillo Cloud
- [Dépannage](/hardware/grillo-pulse/troubleshooting) - Problèmes courants et solutions

## Prérequis

Avant de commencer, assurez-vous d'avoir :

- [ ] Un compte Grillo Cloud ([créez-en un ici](https://cloud.grillo.io))
- [ ] Une organisation et un réseau configurés dans le tableau de bord
- [ ] Une carte SIM avec forfait de données actif (pour le cellulaire) OU des identifiants WiFi
- [ ] Un panneau solaire (6-10V) et/ou une batterie LiPo externe
- [ ] Un emplacement de montage approprié (niveau du sol, surface stable)

## Comparaison des connectivités

| Facteur | LTE Cellulaire | WiFi | Starlink Direct to Cell |
|---------|----------------|------|-------------------------|
| Disponibilité | Principale | Tertiaire | Bientôt disponible (régions sélectionnées) |
| Coût mensuel | Forfait de données requis | Gratuit (réseau existant) | À déterminer |
| Complexité d'installation | Modérée | Simple | À déterminer |
| Consommation d'énergie | Modérée | Inférieure | À déterminer |
| Couverture | Mondiale (2G/3G/4G) | Limitée à la portée WiFi | Mondiale par satellite |
| Idéal pour | Déploiements à distance | Sites avec WiFi existant | Zones sans couverture cellulaire |

:::tip
Le Pulse prend en charge plusieurs options de connectivité simultanément. Lorsque le WiFi est disponible, il sera préféré pour économiser les données cellulaires.
:::

## Besoin d'aide ?

Si vous rencontrez des problèmes pendant l'installation, consultez notre [guide de dépannage](/hardware/grillo-pulse/troubleshooting) ou [contactez le support](/support/contact).
