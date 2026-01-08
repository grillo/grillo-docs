---
sidebar_position: 1
title: Réseaux
---

# Réseaux

Un réseau sismique dans Grillo Cloud est une collection de capteurs travaillant ensemble pour surveiller les mouvements du sol dans une zone géographique.

## Qu'est-ce qu'un réseau ?

Un réseau représente :
- Un groupe de capteurs liés
- Une zone de surveillance géographique
- Une unité pour la détection d'événements (si activée)
- Une limite organisationnelle pour les données

## Exemples de réseaux

- **Réseau régional** - Capteurs répartis dans une ville ou une région
- **Réseau de campus** - Capteurs autour d'un campus universitaire ou d'entreprise
- **Réseau de bâtiment** - Capteurs surveillant une structure unique
- **Réseau de recherche** - Capteurs pour une étude ou un projet spécifique

## Hiérarchie du réseau

```
Organisation
└── Réseau
    ├── Capteur 1
    ├── Capteur 2
    ├── Capteur 3
    └── Événements (détectés à partir des données du réseau)
```

Un réseau appartient à une organisation et contient plusieurs capteurs.

## Créer un réseau

Pour créer un nouveau réseau :

1. Accédez à votre organisation
2. Cliquez sur **« Réseaux »** dans la barre latérale
3. Cliquez sur **« Créer un réseau »**
4. Entrez le nom et les détails du réseau
5. Cliquez sur **« Créer »**

[Guide détaillé →](/dashboard/networks/creating-network)

## Fonctionnalités du réseau

### Gestion des capteurs

- Ajouter des capteurs au réseau
- Voir tous les capteurs sur une carte
- Surveiller la santé et le statut des capteurs
- Configurer les paramètres des capteurs

### Visualisation des données

- Vue carte des emplacements des capteurs
- Vue tableau des données des capteurs
- Panneaux de détails individuels des capteurs
- Streaming de données en temps réel

### Détection d'événements (Premium)

Avec l'option événements :
- Détection automatique des séismes
- Génération de catalogue d'événements
- Alertes en temps réel
- Accès API aux événements

[En savoir plus sur les événements →](/events)

## Paramètres du réseau

Configurez votre réseau :

| Paramètre | Description |
|-----------|-------------|
| Nom | Nom d'affichage du réseau |
| Description | Objectif ou zone de couverture |
| Emplacement | Centre géographique (pour la vue carte) |
| Fuseau horaire | Fuseau horaire par défaut du réseau |
| Détection d'événements | Activer/désactiver (si abonné) |

[Guide des paramètres du réseau →](/dashboard/networks/network-settings)

## Limites du réseau

<!-- TODO: Confirm actual limits -->

| Ressource | Limite |
|-----------|--------|
| Capteurs par réseau | À définir |
| Réseaux par organisation | À définir |

## Guides de cette section

- [Créer un réseau](/dashboard/networks/creating-network)
- [Paramètres du réseau](/dashboard/networks/network-settings)
- [Bonnes pratiques réseau](/dashboard/networks/network-best-practices)

## Bonnes pratiques

### Organisation du réseau

**Par géographie :**
- « Réseau Nord Californie »
- « Réseau Mexico »

**Par objectif :**
- « Réseau de recherche - Projet Alpha »
- « Réseau d'alerte précoce »

**Par bâtiment/campus :**
- « Capteurs du campus principal »
- « Surveillance Bâtiment A »

### Un seul réseau vs plusieurs réseaux

**Utilisez un seul réseau quand :**
- Tous les capteurs servent le même objectif
- Vous voulez une détection d'événements unifiée
- Les capteurs sont dans la même zone générale

**Utilisez plusieurs réseaux quand :**
- Les capteurs servent des objectifs différents
- Vous avez besoin d'une détection d'événements séparée
- Vous voulez organiser par emplacement/bâtiment
- Différentes équipes gèrent différents capteurs
