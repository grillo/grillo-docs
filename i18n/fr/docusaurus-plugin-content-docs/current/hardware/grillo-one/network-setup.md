---
sidebar_position: 4
title: Configuration réseau
---

# Configuration réseau - Grillo One

Le Grillo One prend en charge la connectivité WiFi et Ethernet. Ce guide explique comment configurer chaque option.

## Options de connectivité

| Priorité | Méthode | Idéal pour | Prérequis |
|----------|---------|------------|-----------|
| 1ère | **Ethernet** | Fiabilité maximale | Câble réseau, port disponible, DHCP |
| 2ème | **WiFi** | Placement flexible | Réseau 2,4 GHz, SSID et mot de passe |

:::info Priorité de connexion
Le Grillo One donne automatiquement la priorité à l'Ethernet sur le WiFi. Si un câble Ethernet est connecté au démarrage, l'appareil utilisera exclusivement l'Ethernet. Le WiFi n'est utilisé que lorsqu'aucune connexion Ethernet n'est détectée.
:::

## Option 1 : Configuration WiFi

### Prérequis

- Réseau WiFi 2,4 GHz (le 5 GHz n'est **pas** pris en charge)
- Nom du réseau (SSID) et mot de passe
- Smartphone ou ordinateur pour la configuration

### Étapes de configuration WiFi

1. **Mettez le capteur sous tension** (sans Ethernet connecté)
   - Connectez l'adaptateur secteur au capteur
   - L'appareil vérifie la présence d'Ethernet pendant environ 5 secondes
   - Si aucun Ethernet n'est trouvé, il entre en mode provisionnement
   - La LED Réseau pulsera en bleu indiquant le mode configuration

2. **Connectez-vous au point d'accès du capteur**
   - Sur votre téléphone ou ordinateur, recherchez un réseau WiFi nommé `GrilloOne-XXXX`
   - (XXXX = 4 derniers caractères de l'adresse MAC de l'appareil)
   - Connectez-vous à ce réseau (aucun mot de passe requis)

3. **Ouvrez le portail de configuration**
   - Un portail captif devrait s'ouvrir automatiquement
   - Sinon, ouvrez un navigateur et accédez à `http://192.168.4.1`

4. **Sélectionnez votre réseau WiFi**
   - Les réseaux disponibles sont affichés avec des indicateurs de puissance du signal
   - Sélectionnez votre réseau dans la liste
   - Pour les réseaux masqués, vous pouvez entrer le SSID manuellement
   - Entrez votre mot de passe WiFi

5. **Terminez la configuration**
   - Le capteur valide vos identifiants et redémarre
   - Les identifiants sont enregistrés de façon permanente sur l'appareil
   - La LED Réseau devient verte une fois connecté avec succès
   - Le point d'accès du capteur ne sera plus visible

### Dépannage WiFi

| Problème | Solution |
|----------|----------|
| Réseau non listé | Assurez-vous que c'est un réseau 2,4 GHz ; rapprochez-vous du routeur |
| Échec de connexion | Vérifiez le mot de passe ; vérifiez les caractères spéciaux |
| Le capteur n'entre pas en mode configuration | Redémarrez via le câble USB-C |

## Option 2 : Configuration Ethernet

### Prérequis

- Câble Ethernet (inclus dans la boîte)
- Port disponible sur le routeur/commutateur
- DHCP activé sur le réseau (par défaut pour la plupart des réseaux)

### Étapes de configuration Ethernet

1. **Connectez le câble Ethernet**
   - Branchez une extrémité dans le port Ethernet du capteur
   - Branchez l'autre extrémité dans votre routeur ou commutateur réseau

2. **Connectez l'alimentation**
   - Connectez l'adaptateur secteur au capteur
   - Le capteur obtiendra automatiquement une adresse IP via DHCP

3. **Vérifiez la connexion**
   - La LED devrait indiquer une connexion réussie
   - Le capteur apparaîtra sur votre réseau

:::info DHCP requis
Le Grillo One nécessite DHCP pour l'attribution automatique d'IP. La configuration d'IP statique n'est actuellement pas prise en charge. Si votre réseau nécessite des adresses IP statiques, contactez votre administrateur réseau pour configurer une réservation DHCP pour l'adresse MAC du capteur.
:::

## Exigences réseau

### Pare-feu et ports

Le Grillo One a besoin d'un accès Internet sortant :

| Fonction | Protocole | Port | Direction |
|----------|-----------|------|-----------|
| Données et statut du capteur | UDP | 5683, 5684 | Sortant |
| Synchronisation horaire | UDP | 123 (NTP) | Sortant |
| Mises à jour du firmware | TCP | 443 (HTTPS) | Sortant |

:::note
Aucun port entrant n'a besoin d'être ouvert. Toutes les connexions sont initiées par le capteur.
:::

### Exigences de bande passante

- **Minimum :** 100 Kbps en téléversement
- **Recommandé :** 1 Mbps en téléversement
- **Consommation de données :** Environ TBD Go/mois

### Restrictions réseau

Si votre réseau a des restrictions (entreprise, université), fournissez ces exigences à votre service informatique :

- **Ports UDP 5683, 5684** - Sortant pour les données du capteur
- **Port UDP 123** - Sortant pour la synchronisation NTP
- **Port TCP 443** - Sortant pour les mises à jour du firmware
- **DHCP** - Requis pour l'attribution d'IP
- **DNS** - Requis pour résoudre les noms d'hôtes

## Indicateurs LED de statut

La LED Réseau indique l'état de la connexion :

| État de la LED | Signification |
|----------------|---------------|
| Pulsation bleue | Connexion en cours ou mode provisionnement |
| Vert | Connecté au réseau |
| Jaune | Avertissement (vérifiez la connexion) |
| Rouge | Erreur de connexion |

## Vérification de la connectivité

Après la configuration réseau :

1. Vérifiez que la LED indique l'état "connecté"
2. Connectez-vous à [Grillo Cloud](https://cloud.grillo.io)
3. Accédez à la liste des capteurs de votre réseau
4. Recherchez votre capteur (peut prendre quelques minutes pour apparaître)

## Basculer entre WiFi et Ethernet

Pour changer de méthode de connectivité :

1. **WiFi vers Ethernet :** Branchez simplement le câble Ethernet ; le capteur préférera la connexion filaire
2. **Ethernet vers WiFi :** Débranchez le câble Ethernet ; le capteur utilisera le WiFi configuré

## Étapes suivantes

Une fois connecté au réseau :

1. [Provisionnez le capteur sur Grillo Cloud](/hardware/grillo-one/provisioning)
