---
sidebar_position: 2
title: Créer une organisation
---

# Créer une organisation

Ce guide vous accompagne dans la création d'une nouvelle organisation dans Grillo Cloud.

## Prérequis

- Un compte Grillo Cloud ([créez-en un ici](/dashboard/account/creating-account))

## Étapes pour créer une organisation

### 1. Accéder au menu organisation

1. Connectez-vous à [cloud.grillo.io](https://cloud.grillo.io)
2. Cliquez sur le menu déroulant de l'organisation dans la navigation supérieure
3. Sélectionnez **« Créer une nouvelle organisation »** 

![Créer une organisation](/img/placeholder-create-org.svg)
<!-- TODO: Replace with actual screenshot -->

### 2. Entrer les détails de l'organisation

Remplissez les informations requises :

| Champ | Requis | Description |
|-------|--------|-------------|
| Nom de l'organisation | Oui | Nom d'affichage de votre organisation |
| Description | Non | Brève description de l'objectif de l'organisation |
| Site web | Non | URL du site web de votre organisation |

#### Conseils pour le nom de l'organisation

- Gardez-le court mais descriptif
- Utilisez le nom de votre entreprise ou équipe
- Incluez l'emplacement si vous avez plusieurs branches
- Exemples :
  - « Recherche Grillo »
  - « Laboratoire Sismique Université de Paris »
  - « Réseau EEW Ville de Mexico »

### 3. Confirmer la création

1. Vérifiez les informations saisies
2. Cliquez sur **« Créer l'organisation »**
3. Vous serez redirigé vers votre nouvelle organisation

## Après la création

Vous êtes automatiquement le **Propriétaire** des organisations que vous créez. En tant que propriétaire, vous pouvez :

### Actions immédiates

1. **Inviter des membres d'équipe** - [Ajouter des membres à votre organisation](/dashboard/organizations/managing-members)
2. **Créer des réseaux** - [Configurer votre premier réseau sismique](/dashboard/networks/creating-network)
3. **Configurer les paramètres** - Ajuster les préférences de l'organisation

### Vos permissions de propriétaire

En tant que propriétaire de l'organisation, vous avez un accès complet à :

- Tous les paramètres de l'organisation
- Gestion des membres (inviter, supprimer, changer les rôles)
- Création et suppression de réseaux
- Facturation et abonnement (si applicable)
- Suppression de l'organisation

## Limites de l'organisation

<!-- TODO: Confirm actual limits -->

| Ressource | Offre gratuite | Offres payantes |
|-----------|----------------|-----------------|
| Réseaux par org | À définir | À définir |
| Membres par org | À définir | À définir |
| Capteurs par réseau | À définir | À définir |

## Transférer la propriété

Si vous devez transférer la propriété de l'organisation :

1. Assurez-vous que le nouveau propriétaire est déjà membre
2. Accédez aux paramètres de l'organisation
3. Trouvez l'option « Transférer la propriété »
4. Sélectionnez le nouveau propriétaire
5. Confirmez le transfert

:::warning
Le transfert de propriété ne peut pas être annulé. Assurez-vous de sélectionner la bonne personne.
:::

## Supprimer une organisation

Seuls les propriétaires peuvent supprimer une organisation :

1. Accédez aux paramètres de l'organisation
2. Faites défiler jusqu'à « Zone de danger »
3. Cliquez sur **« Supprimer l'organisation »**
4. Confirmez en tapant le nom de l'organisation
5. Cliquez sur **« Supprimer définitivement »**

:::danger
Supprimer une organisation :
- Supprime tous les réseaux au sein de l'organisation
- Supprime toutes les données des capteurs
- Supprime l'accès de tous les membres
- **Ne peut pas être annulé**
:::

## Dépannage

### « Nom d'organisation déjà pris »

Les noms d'organisation doivent être uniques. Essayez :
- D'ajouter votre emplacement (ex : « Laboratoire de recherche - Paris »)
- D'ajouter un descripteur (ex : « Division Sismique ACME »)

### Impossible de créer une organisation

1. Vérifiez que vous êtes connecté
2. Vérifiez si vous avez atteint les limites d'organisation
3. Essayez de rafraîchir la page
4. Contactez le support si les problèmes persistent

## Étapes suivantes

Après avoir créé votre organisation :

1. [Inviter des membres d'équipe](/dashboard/organizations/managing-members)
2. [Créer votre premier réseau](/dashboard/networks/creating-network)
3. [Ajouter vos capteurs](/dashboard/sensors/adding-sensor)
