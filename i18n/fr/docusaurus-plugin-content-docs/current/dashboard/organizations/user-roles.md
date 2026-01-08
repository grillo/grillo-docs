---
sidebar_position: 4
title: Rôles des utilisateurs
---

# Rôles des utilisateurs

Grillo Cloud utilise le contrôle d'accès basé sur les rôles pour gérer ce que les utilisateurs peuvent faire au sein d'une organisation.

## Rôles disponibles

<!-- TODO: Confirm exact role names and permissions -->

| Rôle | Description |
|------|-------------|
| **Propriétaire** | Contrôle total sur l'organisation |
| **Admin** | Gérer les membres, réseaux et paramètres |
| **Membre** | Travailler avec les capteurs et données |
| **Lecteur** | Accès en lecture seule |

## Hiérarchie des rôles

```
Propriétaire (le plus élevé)
  ↓
Admin
  ↓
Membre
  ↓
Lecteur (le plus bas)
```

Les rôles supérieurs incluent toutes les permissions des rôles inférieurs.

## Propriétaire

Le propriétaire de l'organisation a un contrôle complet.

### Permissions

- Toutes les permissions Admin, plus :
- Transférer la propriété à un autre utilisateur
- Supprimer l'organisation
- Gérer la facturation et les abonnements
- Accéder à tous les paramètres de l'organisation

### Restrictions

- Un seul propriétaire par organisation
- Ne peut pas être supprimé (doit d'abord transférer la propriété)
- Ne peut pas se rétrograder lui-même sans transférer la propriété

### Quand utiliser

- La personne ultimement responsable de l'organisation
- Généralement le créateur de l'organisation
- Typiquement un responsable ou chef de département

## Admin

Les administrateurs peuvent gérer les opérations quotidiennes de l'organisation.

### Permissions

- Toutes les permissions Membre, plus :
- Inviter et supprimer des membres
- Changer les rôles des membres (sauf Propriétaire)
- Créer et supprimer des réseaux
- Modifier les paramètres des réseaux
- Accéder aux paramètres de l'organisation

### Restrictions

- Ne peut pas transférer la propriété
- Ne peut pas supprimer l'organisation
- Ne peut pas changer le rôle du Propriétaire

### Quand utiliser

- Chefs d'équipe ou responsables
- Administrateurs informatiques
- Membres senior de confiance

## Membre

Les membres peuvent effectuer des tâches opérationnelles avec les capteurs et les données.

### Permissions

- Toutes les permissions Lecteur, plus :
- Ajouter des capteurs aux réseaux
- Configurer les paramètres des capteurs
- Mettre à jour les métadonnées des capteurs
- Exporter les données
- Créer et gérer les alertes (si activé)

### Restrictions

- Ne peut pas gérer les autres utilisateurs
- Ne peut pas créer ou supprimer des réseaux
- Ne peut pas accéder aux paramètres de l'organisation

### Quand utiliser

- Techniciens de terrain
- Personnel opérationnel
- Chercheurs travaillant avec les données
- Membres réguliers de l'équipe

## Lecteur

Les lecteurs ont un accès en lecture seule à l'organisation.

### Permissions

- Voir la liste des capteurs et leur statut
- Voir les données et formes d'onde des capteurs
- Voir les informations du réseau
- Voir les affichages carte et tableau
- Voir les événements (si activé)

### Restrictions

- Ne peut modifier aucun paramètre
- Ne peut pas ajouter ou configurer des capteurs
- Ne peut pas gérer les réseaux
- Ne peut pas exporter les données (généralement)

### Quand utiliser

- Parties prenantes ayant besoin de visibilité
- Partenaires externes
- Auditeurs ou réviseurs
- Nouveaux membres de l'équipe en formation

## Matrice des permissions

### Gestion de l'organisation

| Permission | Propriétaire | Admin | Membre | Lecteur |
|------------|--------------|-------|--------|---------|
| Voir les infos de l'organisation | Oui | Oui | Oui | Oui |
| Modifier les infos de l'organisation | Oui | Oui | Non | Non |
| Supprimer l'organisation | Oui | Non | Non | Non |
| Gérer la facturation | Oui | Non | Non | Non |

### Gestion des membres

| Permission | Propriétaire | Admin | Membre | Lecteur |
|------------|--------------|-------|--------|---------|
| Voir les membres | Oui | Oui | Oui | Oui |
| Inviter des membres | Oui | Oui | Non | Non |
| Supprimer des membres | Oui | Oui | Non | Non |
| Changer en Lecteur | Oui | Oui | Non | Non |
| Changer en Membre | Oui | Oui | Non | Non |
| Changer en Admin | Oui | Non | Non | Non |
| Transférer la propriété | Oui | Non | Non | Non |

### Gestion des réseaux

| Permission | Propriétaire | Admin | Membre | Lecteur |
|------------|--------------|-------|--------|---------|
| Voir les réseaux | Oui | Oui | Oui | Oui |
| Créer des réseaux | Oui | Oui | Non | Non |
| Modifier des réseaux | Oui | Oui | Non | Non |
| Supprimer des réseaux | Oui | Oui | Non | Non |

### Gestion des capteurs

| Permission | Propriétaire | Admin | Membre | Lecteur |
|------------|--------------|-------|--------|---------|
| Voir les capteurs | Oui | Oui | Oui | Oui |
| Voir les données des capteurs | Oui | Oui | Oui | Oui |
| Ajouter des capteurs | Oui | Oui | Oui | Non |
| Configurer les capteurs | Oui | Oui | Oui | Non |
| Supprimer des capteurs | Oui | Oui | Oui | Non |
| Exporter les données | Oui | Oui | Oui | Non |

### Événements et alertes

| Permission | Propriétaire | Admin | Membre | Lecteur |
|------------|--------------|-------|--------|---------|
| Voir les événements | Oui | Oui | Oui | Oui |
| Configurer les alertes | Oui | Oui | Oui | Non |
| Gérer les clés API | Oui | Oui | Non | Non |

## Attribuer des rôles

### Lors de l'invitation

1. Cliquez sur **« Inviter un membre »**
2. Entrez l'adresse email
3. Sélectionnez le rôle dans le menu déroulant
4. Envoyez l'invitation

Le rôle est attribué lorsque l'invitation est acceptée.

### Changer les rôles existants

1. Accédez à la section Membres
2. Trouvez l'utilisateur
3. Cliquez sur son rôle actuel
4. Sélectionnez le nouveau rôle

Les changements prennent effet immédiatement.

## Bonnes pratiques

### Commencer avec un accès minimal

- Par défaut, Lecteur pour les nouveaux utilisateurs
- Promouvoir après formation et vérification
- Documenter les changements de rôle

### Audits réguliers des rôles

- Revoir les rôles trimestriellement
- Supprimer les accès élevés inutiles
- S'aligner sur les changements organisationnels

### Documentation des rôles

Envisagez de créer une documentation interne pour :
- Quels rôles votre équipe utilise
- Critères pour chaque niveau de rôle
- Processus d'approbation pour les changements de rôle

## Flux de travail basés sur les rôles

### Intégration d'un nouvel employé

1. Inviter en tant que Lecteur
2. Permettre la familiarisation avec le tableau de bord
3. Promouvoir en Membre après la formation
4. Promouvoir en Admin uniquement si nécessaire

### Accès d'un collaborateur externe

1. Créer un compte avec le rôle Lecteur
2. Accès limité dans le temps
3. Révision régulière du besoin continu
4. Supprimer l'accès à la fin du projet

### Accès d'un sous-traitant ou temporaire

1. Utiliser le rôle Lecteur ou Membre
2. Définir un rappel de calendrier pour révision
3. Supprimer l'accès à la fin du contrat

## Dépannage

### « Vous n'avez pas la permission »

Le rôle de l'utilisateur ne permet pas l'action. Solutions :
- Contacter un Admin ou Propriétaire pour une mise à niveau du rôle
- Demander à quelqu'un avec le rôle approprié d'effectuer l'action

### Impossible de changer quelqu'un en Propriétaire

- Seul le Propriétaire actuel peut transférer la propriété
- Contactez le Propriétaire pour demander ce changement

### Le changement de rôle ne prend pas effet

- L'utilisateur peut avoir besoin de rafraîchir son navigateur
- L'utilisateur peut avoir besoin de se déconnecter et se reconnecter
- Le cache de session peut avoir besoin d'être vidé

## Étapes suivantes

- [Gérer les membres de l'organisation](/dashboard/organizations/managing-members)
- [Créer votre premier réseau](/dashboard/networks/creating-network)
