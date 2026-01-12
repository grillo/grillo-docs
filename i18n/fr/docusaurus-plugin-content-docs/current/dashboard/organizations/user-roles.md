---
sidebar_position: 4
title: Rôles des utilisateurs
---

# Rôles des utilisateurs

Grillo Cloud utilise trois rôles pour gérer l'accès au sein d'une organisation.

## Rôles disponibles

| Rôle | Description |
|------|-------------|
| **Propriétaire** | Contrôle total, y compris facturation et suppression |
| **Admin** | Gérer les membres, réseaux et paramètres |
| **Utilisateur** | Travailler avec les capteurs et voir les données |

## Propriétaire

Le propriétaire de l'organisation a un contrôle complet.

**Permissions :**
- Toutes les permissions Admin
- Transférer la propriété à un autre utilisateur
- Supprimer l'organisation
- Gérer la facturation et les abonnements

**Notes :**
- Un seul propriétaire par organisation
- Généralement la personne qui a créé l'organisation
- Doit transférer la propriété avant de partir

## Admin

Les administrateurs gèrent les opérations quotidiennes.

**Permissions :**
- Toutes les permissions Utilisateur
- Inviter et supprimer des membres
- Changer les rôles des membres (sauf Propriétaire)
- Créer et supprimer des réseaux
- Modifier les paramètres de l'organisation et des réseaux

## Utilisateur

Les utilisateurs réguliers travaillent avec les capteurs et les données.

**Permissions :**
- Voir tous les capteurs et réseaux
- Ajouter et configurer des capteurs
- Voir et exporter les données
- Voir les événements (si activé)

**Restrictions :**
- Ne peut pas gérer les autres utilisateurs
- Ne peut pas créer ou supprimer des réseaux

## Matrice des permissions

| Permission | Propriétaire | Admin | Utilisateur |
|------------|--------------|-------|-------------|
| Voir les capteurs et données | Oui | Oui | Oui |
| Ajouter/configurer capteurs | Oui | Oui | Oui |
| Exporter les données | Oui | Oui | Oui |
| Créer des réseaux | Oui | Oui | Non |
| Supprimer des réseaux | Oui | Oui | Non |
| Inviter des membres | Oui | Oui | Non |
| Supprimer des membres | Oui | Oui | Non |
| Changer les rôles | Oui | Oui | Non |
| Paramètres organisation | Oui | Oui | Non |
| Transférer propriété | Oui | Non | Non |
| Supprimer organisation | Oui | Non | Non |
| Gérer facturation | Oui | Non | Non |

## Attribuer des rôles

### Lors de l'invitation

1. Cliquez sur **« Inviter un membre »**
2. Entrez l'adresse email
3. Sélectionnez le rôle (Admin ou Utilisateur)
4. Envoyez l'invitation

### Changer les rôles

1. Accédez à la section Membres
2. Trouvez l'utilisateur
3. Cliquez sur son rôle actuel
4. Sélectionnez le nouveau rôle

Les changements prennent effet immédiatement.

## Guides connexes

- [Gérer les membres](/dashboard/organizations/managing-members)
- [Créer une organisation](/dashboard/organizations/creating-org)
