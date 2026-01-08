---
sidebar_position: 2
title: Créer un réseau
---

# Créer un réseau

Ce guide vous accompagne dans la création d'un nouveau réseau sismique dans Grillo Cloud.

## Prérequis

- Un compte Grillo Cloud
- Une organisation (vous devez être Propriétaire ou Admin)

## Étapes pour créer un réseau

### 1. Accéder aux réseaux

1. Connectez-vous à [cloud.grillo.io](https://cloud.grillo.io)
2. Sélectionnez votre organisation
3. Cliquez sur **« Réseaux »** dans la barre latérale

### 2. Démarrer la création du réseau

1. Cliquez sur **« Créer un réseau »** ou le bouton **« + »**
2. Le formulaire de création de réseau apparaîtra

![Créer un réseau](/img/placeholder-create-network.svg)
<!-- TODO: Replace with actual screenshot -->

### 3. Entrer les détails du réseau

| Champ | Requis | Description |
|-------|--------|-------------|
| Nom du réseau | Oui | Nom d'affichage de votre réseau |
| Description | Non | Objectif, zone de couverture ou notes |
| Emplacement par défaut | Non | Centre géographique pour la vue carte |
| Fuseau horaire | Non | Fuseau horaire par défaut pour l'affichage des données |

#### Conseils pour le nom du réseau

- Utilisez des noms descriptifs
- Incluez l'emplacement ou l'objectif
- Gardez-le concis mais clair

**Bons exemples :**
- « Région Parisienne »
- « Réseau de recherche universitaire »
- « Complexe de bâtiments A »

**À éviter :**
- « Réseau 1 » (pas descriptif)
- « test » (pas significatif)

### 4. Configurer les paramètres optionnels

#### Emplacement par défaut

Définir un emplacement par défaut :
- Centre la vue carte de manière appropriée
- Aide avec le contexte géographique
- Entrez des coordonnées ou recherchez un emplacement

#### Fuseau horaire

Sélectionnez le fuseau horaire pour ce réseau :
- Affecte l'affichage des heures
- Choisissez le fuseau horaire où la plupart des capteurs sont situés
- Peut être remplacé par utilisateur dans les paramètres du profil

### 5. Créer le réseau

1. Vérifiez vos paramètres
2. Cliquez sur **« Créer le réseau »**
3. Vous serez redirigé vers la page de votre nouveau réseau

## Après la création d'un réseau

Votre réseau est maintenant prêt pour les capteurs :

### Étapes suivantes

1. **Ajouter des capteurs** - [Provisionner et ajouter votre premier capteur](/dashboard/sensors/adding-sensor)
2. **Inviter l'équipe** - Assurez-vous que les membres de l'équipe ont accès via [l'adhésion à l'organisation](/dashboard/organizations/managing-members)
3. **Configurer les paramètres** - Affinez les [paramètres du réseau](/dashboard/networks/network-settings)

### Vue réseau vide

Un nouveau réseau affichera :
- Carte vide
- Tableau de capteurs vide
- Compteur de capteurs à zéro

C'est normal - ajoutez des capteurs pour peupler le réseau.

## Types de réseaux

### Réseau standard

Type de réseau par défaut :
- Gestion des capteurs
- Visualisation des données
- Surveillance de base

### Réseau avec événements

Avec l'abonnement événements :
- Toutes les fonctionnalités standard
- Détection automatique des événements
- Catalogue d'événements
- Capacités d'alerte

[En savoir plus sur les événements →](/events)

## Modifier les détails du réseau

Pour modifier un réseau après sa création :

1. Accédez au réseau
2. Cliquez sur **« Paramètres »** ou l'icône d'engrenage
3. Modifiez les champs souhaités
4. Cliquez sur **« Enregistrer »**

## Supprimer un réseau

:::warning
Supprimer un réseau supprime toutes les associations de capteurs et les données du réseau.
:::

Pour supprimer un réseau :

1. Accédez aux paramètres du réseau
2. Faites défiler jusqu'à « Zone de danger »
3. Cliquez sur **« Supprimer le réseau »**
4. Confirmez en tapant le nom du réseau
5. Cliquez sur **« Supprimer définitivement »**

**Ce qui se passe lors de la suppression :**
- Les capteurs sont dissociés (pas supprimés de votre compte)
- Les données historiques peuvent être conservées selon la politique de rétention
- Les événements associés au réseau sont conservés
- L'action ne peut pas être annulée

## Dépannage

### Impossible de créer un réseau

1. Vérifiez que vous avez le rôle Admin ou Propriétaire
2. Vérifiez si vous avez atteint les limites de réseaux
3. Essayez de rafraîchir la page
4. Contactez le support si les problèmes persistent

### Le nom du réseau existe déjà

Les noms de réseau doivent être uniques au sein d'une organisation :
- Ajoutez un emplacement ou un numéro pour différencier
- Exemple : « Réseau Centre-ville » → « Réseau Centre-ville - Phase 2 »

## Étapes suivantes

Après avoir créé votre réseau :

1. [Ajouter votre premier capteur](/dashboard/sensors/adding-sensor)
2. [Configurer les paramètres du réseau](/dashboard/networks/network-settings)
3. [Consulter les bonnes pratiques](/dashboard/networks/network-best-practices)
