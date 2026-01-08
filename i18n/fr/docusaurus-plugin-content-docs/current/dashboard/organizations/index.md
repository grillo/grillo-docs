---
sidebar_position: 1
title: Organisations
---

# Organisations

Les organisations dans Grillo Cloud vous aident à gérer les équipes, contrôler l'accès et organiser plusieurs réseaux sismiques.

## Qu'est-ce qu'une organisation ?

Une organisation est un conteneur pour :
- **Réseaux** - Vos réseaux de surveillance sismique
- **Membres** - Les utilisateurs qui peuvent accéder à l'organisation
- **Paramètres** - Les configurations à l'échelle de l'organisation

Pensez à une organisation comme votre entreprise, groupe de recherche ou équipe.

## Hiérarchie de l'organisation

```
Organisation
├── Membres (utilisateurs avec différents rôles)
├── Réseaux
│   ├── Réseau A
│   │   ├── Capteur 1
│   │   ├── Capteur 2
│   │   └── ...
│   └── Réseau B
│       └── ...
└── Paramètres
```

## Créer une organisation

Pour créer une nouvelle organisation :

1. Connectez-vous à [cloud.grillo.io](https://cloud.grillo.io)
2. Cliquez sur le menu déroulant de l'organisation dans la navigation
3. Sélectionnez **« Créer une organisation »**
4. Entrez les détails de l'organisation :
   - Nom de l'organisation
   - Description (optionnel)
5. Cliquez sur **« Créer »**

[Guide détaillé →](/dashboard/organizations/creating-org)

## Rejoindre une organisation

Pour rejoindre une organisation existante, vous avez besoin d'une invitation d'un administrateur :

1. Recevez un email d'invitation de l'organisation
2. Cliquez sur le lien d'invitation
3. Connectez-vous ou créez un compte
4. Vous serez ajouté à l'organisation

[En savoir plus sur l'acceptation des invitations →](/dashboard/account/accepting-invites)

## Rôles de l'organisation

Différents rôles ont différentes permissions :

| Rôle | Description |
|------|-------------|
| **Propriétaire** | Contrôle total, facturation, peut supprimer l'organisation |
| **Admin** | Gérer les membres et réseaux, la plupart des paramètres |
| **Membre** | Travailler avec les capteurs et données, paramètres limités |
| **Lecteur** | Accès en lecture seule aux données et capteurs |

[Guide détaillé des rôles →](/dashboard/organizations/user-roles)

## Gérer plusieurs organisations

Vous pouvez appartenir à plusieurs organisations :

### Changer d'organisation

1. Cliquez sur le nom de l'organisation dans la navigation
2. Sélectionnez l'organisation que vous souhaitez voir
3. Le tableau de bord basculera vers le contexte de cette organisation

### Contexte de l'organisation

Quand vous changez d'organisation :
- Vous voyez les réseaux de cette organisation
- Vous voyez les capteurs de cette organisation
- Vos permissions peuvent différer entre les organisations

## Paramètres de l'organisation

Accédez aux paramètres de l'organisation pour :
- Mettre à jour le nom et les détails de l'organisation
- Gérer la facturation (propriétaires uniquement)
- Configurer les préférences à l'échelle de l'organisation
- Voir les journaux d'audit

## Guides de cette section

- [Créer une organisation](/dashboard/organizations/creating-org)
- [Gérer les membres](/dashboard/organizations/managing-members)
- [Rôles des utilisateurs](/dashboard/organizations/user-roles)

## Bonnes pratiques

### Nommage de l'organisation

- Utilisez un nom clair et reconnaissable
- Incluez l'emplacement ou le but si vous en avez plusieurs
- Exemples : « Laboratoire de recherche ACME », « Ville de Lyon - Réseau EEW »

### Organisation unique vs multiples

**Utilisez une seule organisation quand :**
- Tous les réseaux sont gérés par la même équipe
- Les utilisateurs ont besoin d'accéder à tous les réseaux
- Une facturation centralisée est préférée

**Utilisez plusieurs organisations quand :**
- Différentes équipes gèrent différents réseaux
- Vous devez séparer la facturation
- L'accès doit être strictement compartimenté
