---
sidebar_position: 3
title: Choisir votre capteur
---

# Choisir votre capteur

Grillo propose deux modèles de capteurs pour s'adapter à différents scénarios de déploiement. Ce guide vous aidera à choisir celui qui convient à vos besoins.

## Comparaison rapide

| Caractéristique | Grillo One | Grillo Pulse |
|-----------------|------------|--------------|
| **Capteurs** | Accéléromètre MEMS (3 canaux) | Accéléromètre MEMS + géophone (4 canaux) |
| **Plage de détection** | Mouvements faibles à forts | Micro-sismique à mouvements forts |
| **Connectivité** | WiFi / Ethernet | WiFi / Cellulaire (LTE) |
| **Alimentation** | USB-C | CC / solaire + batterie de secours |
| **Installation** | Intérieur | Intérieur / Extérieur |
| **Complexité d'installation** | Simple | Modérée |

## Grillo One

<img src="/img/grillo-one-case.jpg" alt="Capteur Grillo One" style={{maxWidth: '800px', width: '100%'}} />

Le Grillo One utilise un accéléromètre MEMS à faible bruit (3 canaux) pour capturer les mouvements du sol, des événements faibles aux événements forts.

### Idéal pour

- **Installations intérieures fixes** - Bâtiments avec alimentation et réseau fiables
- **Surveillance structurelle** - Détection des vibrations de bâtiments et des mouvements du sol
- **Enregistrement des mouvements forts** - Capture des séismes locaux et régionaux

### Options de connectivité

1. **WiFi** - Connectez-vous à votre réseau sans fil existant
2. **Ethernet** - Connexion filaire directe pour une fiabilité maximale

### Prérequis

- Source d'alimentation USB-C
- Réseau WiFi (2,4 GHz) ou connexion Ethernet
- Emplacement d'installation intérieur
- Surface de montage solide (sol ou mur)

### Avantages

- Processus d'installation le plus simple
- Coût inférieur
- Option filaire fiable disponible
- Idéal pour la plupart des cas d'utilisation en intérieur

[Voir le guide d'installation du Grillo One](/hardware/grillo-one)

---

## Grillo Pulse

<img src="/img/grillo-pulse-case.jpg" alt="Capteur Grillo Pulse" style={{maxWidth: '800px', width: '100%'}} />

Le Grillo Pulse combine le même accéléromètre MEMS à faible bruit que le Grillo One avec un géophone vertical, fournissant 4 canaux de données sismiques. Cela lui permet de capturer des événements micro-sismiques jusqu'aux secousses fortes.

### Idéal pour

- **Sites de terrain éloignés** - Zones sans couverture WiFi
- **Recherche sismique** - Surveillance haute sensibilité avec géophone
- **Installations extérieures** - Boîtier résistant aux intempéries
- **Déploiements temporaires** - Événements, campagnes de recherche

### Options de connectivité

1. **WiFi** - Lorsque disponible, consomme moins d'énergie que le cellulaire
2. **Cellulaire (LTE)** - Connectez-vous partout où il y a une couverture réseau

### Options d'alimentation

Le Pulse accepte une alimentation CC via une entrée de câble étanche :

- **Adaptateur secteur** - Alimentation standard avec adaptateur inclus
- **Panneau solaire** - Pour les déploiements hors réseau
- **Batterie de secours** - La batterie interne maintient le fonctionnement pendant les coupures

### Prérequis

- Source d'alimentation CC (adaptateur secteur ou panneau solaire)
- Couverture cellulaire (si utilisation du mode cellulaire)
- Carte SIM avec forfait de données actif (pour le cellulaire)
- Emplacement de montage adapté

### Avantages

- Connectivité cellulaire pour les emplacements éloignés
- Compatible solaire pour les sites hors réseau
- Batterie de secours pour les coupures de courant
- Conception résistante aux intempéries
- Options de déploiement flexibles

<!-- TODO: Add supported carriers/bands -->

[Voir le guide d'installation du Grillo Pulse](/hardware/grillo-pulse)

---

## Guide de décision

### Choisissez le Grillo One si :

- Vous disposez d'un WiFi ou Ethernet fiable à votre emplacement
- Le capteur sera installé en intérieur
- Vous souhaitez l'expérience d'installation la plus simple
- Vous n'avez pas besoin de connectivité cellulaire

### Choisissez le Grillo Pulse si :

- Vous devez déployer dans un endroit sans WiFi
- L'installation peut être en extérieur
- Vous avez besoin d'une batterie de secours pour les coupures de courant
- Vous souhaitez la flexibilité de déplacer le capteur

## Puis-je utiliser les deux ?

Oui ! De nombreux réseaux combinent les deux types de capteurs pour différents usages :

- Les capteurs **Grillo Pulse** sur le terrain pour la détection précoce des séismes (le géophone haute sensibilité capture les événements en premier)
- Les capteurs **Grillo One** dans les centres de population pour enregistrer l'intensité des secousses

Cette combinaison fonctionne bien pour les systèmes d'alerte précoce : les capteurs Pulse détectent les séismes près de la source, tandis que les capteurs One mesurent l'impact là où se trouvent les personnes.

Les deux types de capteurs fonctionnent parfaitement ensemble dans le même réseau sur Grillo Cloud.

## Encore indécis ?

Si vous n'êtes pas sûr du capteur adapté à votre déploiement :

1. Considérez vos **options de connectivité** - Disposez-vous d'un WiFi/Ethernet fiable ?
2. Considérez votre **environnement d'installation** - Intérieur ou extérieur ?
3. Considérez la **fiabilité de votre alimentation** - Avez-vous besoin d'une batterie de secours ?

[Contactez le support Grillo](/support/contact) pour des recommandations personnalisées.
