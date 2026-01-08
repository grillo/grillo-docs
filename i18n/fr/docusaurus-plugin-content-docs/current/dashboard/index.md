---
sidebar_position: 3
title: Tableau de bord
sidebar_label: Tableau de bord
description: Centre de controle pour gerer les capteurs, les reseaux et visualiser les donnees sismiques
---

# Tableau de bord Grillo Cloud

Le tableau de bord Grillo Cloud sur [cloud.grillo.io](https://cloud.grillo.io) est votre centre de controle pour gerer les capteurs, les reseaux et visualiser les donnees sismiques.

![Apercu du tableau de bord](/img/placeholder-dashboard.svg)
<!-- TODO: Replace with actual dashboard screenshot -->

## Fonctionnalites principales

- **Gestion de compte** - Inscription, gestion du profil, parametres de securite
- **Organisations** - Creer et gerer des equipes
- **Reseaux** - Construire et configurer des reseaux sismiques
- **Capteurs** - Surveiller et configurer vos appareils
- **Evenements** - Visualiser les seismes detectes et les alertes (fonctionnalite premium)

## Hierarchie du tableau de bord

Comprendre l'organisation de Grillo Cloud :

```
Compte
└── Organisations (vous pouvez appartenir a plusieurs)
    └── Reseaux (reseaux sismiques au sein d'une organisation)
        └── Capteurs (appareils au sein d'un reseau)
            └── Evenements (detectes a partir des donnees du reseau)
```

## Premiers pas

### 1. Creer un compte

Inscrivez-vous avec Google, Microsoft ou par email sur [cloud.grillo.io](https://cloud.grillo.io).

[Guide de configuration du compte →](/dashboard/account/creating-account)

### 2. Configurer votre organisation

Creez une organisation ou rejoignez-en une existante via une invitation.

[Guide des organisations →](/dashboard/organizations)

### 3. Creer un reseau

Configurez votre premier reseau sismique pour commencer a ajouter des capteurs.

[Creer un reseau →](/dashboard/networks/creating-network)

### 4. Ajouter vos capteurs

Enregistrez vos appareils Grillo et commencez a collecter des donnees.

[Ajouter des capteurs →](/dashboard/sensors/adding-sensor)

## Sections du tableau de bord

### Compte
Gerez les parametres de votre compte personnel, la securite et les preferences.
- [Creer un compte](/dashboard/account/creating-account)
- [Accepter les invitations](/dashboard/account/accepting-invites)
- [Parametres du profil](/dashboard/account/profile-settings)
- [Securite](/dashboard/account/security)

### Organisations
Gerez les equipes et l'acces aux reseaux sismiques.
- [Apercu](/dashboard/organizations)
- [Creer une organisation](/dashboard/organizations/creating-org)
- [Gerer les membres](/dashboard/organizations/managing-members)
- [Roles utilisateur](/dashboard/organizations/user-roles)

### Reseaux
Configurez et surveillez vos reseaux sismiques.
- [Apercu](/dashboard/networks)
- [Creer un reseau](/dashboard/networks/creating-network)
- [Parametres du reseau](/dashboard/networks/network-settings)
- [Bonnes pratiques](/dashboard/networks/network-best-practices)

### Capteurs
Visualisez, configurez et surveillez vos appareils Grillo.
- [Apercu](/dashboard/sensors)
- [Ajouter un capteur](/dashboard/sensors/adding-sensor)
- [Vue carte](/dashboard/sensors/map-view)
- [Vue tableau](/dashboard/sensors/table-view)
- [Details du capteur](/dashboard/sensors/sensor-details)
- [Configurer les capteurs](/dashboard/sensors/configuring-sensor)
- [Denomination des stations (FDSN)](/dashboard/sensors/station-naming)
- [Informations de localisation](/dashboard/sensors/location-info)
- [Etat du capteur](/dashboard/sensors/sensor-status)

### Parametres
Configurez les preferences et les integrations du tableau de bord.
- [Apercu](/dashboard/settings)
- [Notifications](/dashboard/settings/notifications)
- [Cles API](/dashboard/settings/api-keys)

## Compatibilite des navigateurs

Le tableau de bord Grillo Cloud fonctionne de maniere optimale sur les navigateurs modernes :

| Navigateur | Version minimale |
|---------|----------------|
| Chrome | 90+ |
| Firefox | 90+ |
| Safari | 14+ |
| Edge | 90+ |

## Acces mobile

Le tableau de bord est responsive et fonctionne sur les appareils mobiles. Pour une meilleure experience sur telephones et tablettes :
- Utilisez le mode paysage pour les vues cartographiques
- Utilisez le mode portrait pour les tableaux et listes
- Pincez pour zoomer sur les cartes

## Besoin d'aide ?

- [FAQ](/support/faq)
- [Contacter le support](/support/contact)
