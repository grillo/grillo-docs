---
sidebar_position: 1
title: FAQ
---

# Questions fréquemment posées

Questions courantes sur les capteurs Grillo et la plateforme Grillo Cloud.

## Général

### Qu'est-ce que Grillo ?

Grillo est une entreprise de technologie sismique qui fournit des capteurs sismiques IoT abordables et une plateforme cloud pour la surveillance des séismes et l'alerte précoce.

### Que puis-je faire avec les capteurs Grillo ?

- Surveiller les séismes dans votre région
- Construire des réseaux sismiques pour votre organisation
- Recevoir des alertes précoces aux séismes
- Contribuer à la recherche sismologique
- Protéger les infrastructures critiques

### Ai-je besoin d'une expertise technique ?

Non. Les capteurs Grillo sont conçus pour une installation facile et le tableau de bord est convivial. Une aisance technique de base est utile mais pas requise.

## Matériel

### Quelle est la différence entre Grillo One et Grillo Pulse ?

| Fonctionnalité | Grillo One | Grillo Pulse |
|----------------|------------|--------------|
| Connectivité | WiFi / Ethernet | WiFi / Cellulaire |
| Cas d'usage | Intérieur, emplacements fixes | Distant / extérieur |
| Batterie de secours | Non | Oui |
| Idéal pour | Bureaux, écoles, maisons | Déploiements sur le terrain |

[Comparaison détaillée →](/getting-started/choosing-your-sensor)

### De quoi ai-je besoin pour installer un capteur ?

- Prise électrique à proximité
- Réseau WiFi (2,4 GHz) ou connexion Ethernet
- Surface stable et solide pour le montage
- Compte Grillo Cloud

### Où dois-je placer mon capteur ?

Pour une meilleure qualité des données :
- Rez-de-chaussée ou sous-sol
- Sur une surface solide (béton idéal)
- Loin de la CVC, des appareils, du trafic
- À niveau et stable

[Guide de placement détaillé →](/concepts/sensor-placement)

### Puis-je utiliser mon capteur à l'extérieur ?

- **Grillo One :** Usage intérieur uniquement
- **Grillo Pulse :** Conçu pour un usage extérieur avec boîtier étanche

### Le capteur fonctionne-t-il sans internet ?

Non. Les capteurs ont besoin d'une connexion internet pour transmettre les données à Grillo Cloud. Si la connexion est perdue, le capteur se reconnectera quand internet sera rétabli, mais les données pendant la coupure ne sont pas enregistrées.

## Tableau de bord et compte

### Comment créer un compte ?

Visitez [cloud.grillo.io](https://cloud.grillo.io) et inscrivez-vous avec Google, Microsoft ou email.

[Guide de création de compte →](/dashboard/account/creating-account)

### Puis-je appartenir à plusieurs organisations ?

Oui. Vous pouvez être membre de plusieurs organisations et basculer entre elles dans le tableau de bord.

### Quels sont les rôles utilisateur ?

| Rôle | Peut faire |
|------|------------|
| Utilisateur | Voir les données, ajouter et configurer des capteurs |
| Admin | Gérer les membres et réseaux |
| Propriétaire | Contrôle total, facturation, supprimer l'org |

[Guide des rôles →](/dashboard/organizations/user-roles)

### Comment ajouter quelqu'un à mon organisation ?

1. Aller à la section Membres
2. Cliquer sur "Inviter un membre"
3. Entrer leur email
4. Sélectionner leur rôle
5. Envoyer l'invitation

[Gestion des membres →](/dashboard/organizations/managing-members)

## Capteurs et réseaux

### Comment ajouter un capteur à mon réseau ?

1. S'assurer que le capteur est installé et alimenté
2. Aller à votre réseau dans le tableau de bord
3. Cliquer sur "Ajouter un capteur"
4. Scanner le code QR ou entrer le numéro de série

[Ajouter des capteurs →](/dashboard/sensors/adding-sensor)

### Pourquoi mon capteur apparaît-il hors ligne ?

Causes courantes :
- Coupure de courant à l'emplacement du capteur
- Connectivité internet/WiFi perdue
- Configuration réseau modifiée
- Problème matériel du capteur

[Dépannage →](/hardware/grillo-one/troubleshooting)

### De combien de capteurs ai-je besoin ?

Cela dépend de vos objectifs :
- Surveillance de base : 1+ capteurs
- Détection d'événements : 4+ capteurs minimum
- Localisation précise : 6-10+ capteurs
- Alerte précoce : Réseau dense

[Conception de réseau →](/dashboard/networks/network-best-practices)

### Puis-je déplacer un capteur vers un autre réseau ?

Oui. Retirez le capteur de son réseau actuel, puis ajoutez-le au nouveau réseau.

## Événements et détection

### Qu'est-ce que la fonctionnalité Événements ?

Événements est une fonctionnalité additionnelle qui fournit la détection automatique des séismes, le catalogage des événements et les alertes à partir des données de votre réseau.

[Aperçu des événements →](/events)

### Comment fonctionne la détection des séismes ?

Le système analyse les données de plusieurs capteurs, détecte les signaux sismiques, confirme entre les stations, calcule la localisation et la magnitude, et génère des alertes.

[Comment fonctionne la détection →](/events/how-detection-works)

### Quelle est la rapidité des alertes ?

Typiquement 5-20 secondes de l'origine du séisme à la livraison de l'alerte, selon :
- La distance du séisme au capteur le plus proche
- La densité du réseau
- Le temps de traitement

### Recevrai-je un avertissement avant le séisme ?

L'avertissement arrive après le début du séisme mais avant que les fortes secousses n'atteignent votre emplacement (si vous êtes assez loin de l'épicentre). C'est l'alerte précoce aux séismes, pas de la prédiction.

[À propos de l'EEW →](/concepts/earthquake-early-warning)

## Données et confidentialité

### À qui appartiennent les données de mes capteurs ?

Vous conservez la propriété des données de vos capteurs. Voir les conditions de service pour les détails.

### Puis-je exporter mes données ?

Oui. Vous pouvez exporter les catalogues d'événements et les données des capteurs dans divers formats (CSV, JSON, etc.).

[Export de données →](/events/data-export)

### Combien de temps les données sont-elles conservées ?

<!-- TODO: Confirm actual retention -->
- Données des capteurs : Varie selon le niveau d'abonnement
- Catalogue d'événements : Conservation à long terme
- Contactez le support pour les politiques de conservation spécifiques

### Mes données sont-elles sécurisées ?

Oui. Grillo utilise le chiffrement en transit et au repos, et suit les meilleures pratiques de sécurité. Voir la politique de confidentialité pour les détails.

## Facturation et abonnements

### Combien coûte Grillo ?

Contactez [les ventes Grillo](https://grillo.io) pour les tarifs actuels sur le matériel et les plans d'abonnement.

### Qu'est-ce qui est inclus dans l'abonnement de base ?

- Connectivité et gestion des capteurs
- Accès au tableau de bord
- Fonctionnalités de surveillance de base

### Qu'est-ce que l'option Événements ?

Événements est une fonctionnalité premium ajoutant :
- Détection automatique des séismes
- Catalogue d'événements
- Alertes en temps réel
- Accès API

## Technique

### Quel accès API est disponible ?

L'API Grillo fournit un accès aux données des capteurs, aux événements et aux fonctionnalités de la plateforme.

[Documentation API →](/api)

### Puis-je intégrer avec d'autres systèmes ?

Oui, via :
- API REST
- Webhooks pour les événements en temps réel
- Export de données

### Quels navigateurs sont supportés ?

Versions modernes de :
- Chrome
- Firefox
- Safari
- Edge

### Y a-t-il une application mobile ?

Le tableau de bord est responsive mobile. Des applications dédiées peuvent être disponibles — consultez grillo.io pour les offres actuelles.

## Obtenir de l'aide

### Où puis-je obtenir du support ?

- Cette documentation
- [Contacter le support](/support/contact)
- Email : support@grillo.io

### J'ai trouvé un bug. Comment le signaler ?

[Contacter le support](/support/contact) avec :
- Description du problème
- Étapes pour reproduire
- Captures d'écran si applicable
- Informations sur le navigateur/appareil
