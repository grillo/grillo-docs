---
sidebar_position: 2
title: Contenu de la boîte
---

# Contenu de la boîte - Grillo Pulse

Cette page décrit tous les composants inclus avec votre capteur Grillo Pulse.

## Contenu du colis

<img src="/img/grillo-pulse-contents1.jpg" alt="Contenu du colis Grillo Pulse" style={{maxWidth: '800px', width: '100%'}} />

### 1. Unité capteur Grillo Pulse (PCB)

La carte capteur principale (98,5 x 70mm, 50g) contenant :
- Géophone 4,5 Hz avec ADC 32 bits
- Accéléromètre triaxial MEMS à très faible bruit avec ADC 20 bits
- Modem cellulaire LTE Cat-4 (support mondial 2G/3G/4G)
- WiFi 802.11 b/g/n (2,4 GHz)
- Microcontrôleur double cœur
- Indicateurs LED de statut
- Emplacement pour carte SIM
- Port USB (alimentation et mises à jour du firmware)

### 2. Boîtier étanche IP67 (optionnel)

Si commandé avec le boîtier :
- Boîtier étanche certifié IP67
- Points d'entrée de câbles pré-percés
- Presse-étoupes étanches
- Sachet de déshydratant pour le contrôle de l'humidité

*Note : La couleur du boîtier peut varier par rapport à l'image.*

### 3. Antenne LTE

Antenne interne pour la connectivité cellulaire (intégrée au boîtier).

### 4. Câble d'alimentation

Câble connecteur DC barrel mâle vers femelle SP13 :
- Se connecte au port femelle WEIPU SP13 sur le boîtier
- Compatible avec les panneaux solaires (entrée 6-10V)
- Compatible avec les alimentations externes

### 5. Guide de démarrage rapide

Carte imprimée avec les instructions de base et un code QR vers la documentation en ligne.

### 6. Matériel de montage

- Support de montage
- Vis et chevilles en acier inoxydable
- Attaches de câbles pour le routage des antennes

## Détails de l'unité capteur

<img src="/img/grillo-pulse-sensor.jpg" alt="Unité capteur Grillo Pulse" style={{maxWidth: '800px', width: '100%'}} />

### Disposition du PCB

Le PCB du Grillo Pulse comprend :

| Composant | Description |
|-----------|-------------|
| Géophone | Capteur vertical 4,5 Hz avec ADC 32 bits |
| Accéléromètre MEMS | Triaxial à très faible bruit avec ADC 20 bits |
| Modem LTE | Cat-4 avec repli 2G/3G/4G |
| Module WiFi | 802.11 b/g/n (2,4 GHz) |
| Microcontrôleur | Processeur double cœur |

### Connexions externes

- **Entrée d'alimentation** - 6-10V CC (compatible solaire/batterie)
- **Port antenne LTE** - Connecteur SMA pour antenne cellulaire
- **Port USB** - Pour l'alimentation et les mises à jour du firmware
- **LEDs de statut** - Indicateurs sur la carte (non visibles à travers le boîtier standard)

:::note LEDs non visibles dans le boîtier
Les LEDs de statut sont situées sur le PCB et ne sont **pas visibles** à travers le boîtier IP67 standard. Elles sont principalement destinées au débogage et aux tests avant l'assemblage final. Pour les capteurs déployés, utilisez le [tableau de bord Grillo Cloud](https://cloud.grillo.io) pour surveiller l'état et la connectivité du capteur. Si vous avez besoin d'indicateurs LED visibles, envisagez d'utiliser un boîtier personnalisé avec un couvercle transparent.
:::

### Composants internes

- **Emplacement SIM** - Support pour carte Nano SIM
- **Bouton de réinitialisation** - Pour la réinitialisation d'usine
- **Port de débogage** - Sortie de données série USB

### Étiquettes et identifiants

- **ID de l'appareil** - Identifiant unique sur l'étiquette du PCB
- **Code QR** - Pour un provisionnement rapide
- **Adresse MAC** - Pour l'identification réseau

## Vérifiez votre colis

Avant de commencer l'installation, vérifiez que tous les composants sont présents et en bon état :

- [ ] Le PCB du capteur est intact sans dommage visible
- [ ] Le boîtier est intact (si commandé)
- [ ] L'antenne LTE est incluse
- [ ] Le câble d'alimentation est présent
- [ ] Le guide de démarrage rapide est présent
- [ ] Le matériel de montage est complet

:::warning Composants manquants ou endommagés ?
Si des composants sont manquants ou endommagés, [contactez le support Grillo](/support/contact) avant de procéder à l'installation.
:::

## Emplacement de l'ID de l'appareil

Vous aurez besoin de l'ID de votre capteur pendant le provisionnement. Il peut être trouvé :

1. **Sur le PCB** - Étiquette imprimée sur la carte de circuit
2. **Code QR** - Code scannable sur le PCB
3. **Emballage** - Étiquette sur la boîte extérieure

:::tip
Prenez une photo de l'ID de l'appareil et du code QR avant d'installer le PCB dans le boîtier. Vous en aurez besoin lors de l'ajout du capteur à votre tableau de bord Grillo Cloud.
:::

## Informations sur la carte SIM

Le Grillo Pulse utilise une carte **Nano SIM** pour la connectivité cellulaire.

### Exigences de la carte SIM

| Exigence | Spécification |
|----------|---------------|
| Taille SIM | Nano SIM |
| Technologie réseau | LTE Cat-4 (repli 2G/3G/4G pris en charge) |
| Forfait de données | Forfait de données actif requis |
| Recommandé | Forfaits de données M2M/IoT |

### SIM pré-installée

Certaines unités Pulse sont livrées avec une carte SIM pré-installée et pré-activée :
- Prête à l'emploi immédiatement
- Le forfait de données peut être inclus pour une période initiale
- Consultez les détails de votre commande pour les spécificités

### SIM fournie par l'utilisateur

Si vous fournissez votre propre carte SIM :
- Doit être de taille Nano SIM
- Compatible LTE Cat-4 (la plupart des SIM modernes fonctionnent)
- Forfait de données actif requis
- Voir [guide de configuration de la carte SIM](/hardware/grillo-pulse/sim-card-setup)

## Étapes suivantes

Une fois que vous avez vérifié tous les composants :

1. [Planifiez l'emplacement d'installation](/hardware/grillo-pulse/physical-installation)
2. [Installez la carte SIM si nécessaire](/hardware/grillo-pulse/sim-card-setup)
3. [Configurez la connectivité réseau](/hardware/grillo-pulse/network-setup)
