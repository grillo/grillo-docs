---
sidebar_position: 3
title: Gérer les membres
---

# Gérer les membres

Apprenez à inviter des utilisateurs, gérer les rôles et contrôler l'accès à votre organisation.

## Voir les membres

Pour voir les membres actuels de l'organisation :

1. Accédez à votre organisation
2. Cliquez sur **« Membres »** ou **« Équipe »** dans la barre latérale
3. Voir la liste des membres avec :
   - Nom et email
   - Rôle
   - Date d'adhésion
   - Statut (actif/en attente)

![Liste des membres](/img/placeholder-member-list.svg)
<!-- TODO: Replace with actual screenshot -->

## Inviter des membres

### Envoyer une invitation

1. Accédez à la section Membres
2. Cliquez sur **« Inviter un membre »** ou **« Ajouter un membre »**
3. Entrez l'adresse email de la personne
4. Sélectionnez son rôle (voir [Rôles des utilisateurs](/dashboard/organizations/user-roles))
5. Cliquez sur **« Envoyer l'invitation »**

![Inviter un membre](/img/placeholder-invite-member.svg)
<!-- TODO: Replace with actual screenshot -->

### Processus d'invitation

1. L'invité reçoit un email avec un lien d'invitation
2. Il clique sur le lien et se connecte (ou crée un compte)
3. Il est automatiquement ajouté à votre organisation
4. Son statut passe de « En attente » à « Actif »

### Expiration des invitations

<!-- TODO: Confirm expiration time -->
- Les invitations expirent après 7 jours
- Vous pouvez renvoyer les invitations expirées
- L'invité peut demander une nouvelle invitation

### Invitations groupées

Pour inviter plusieurs personnes à la fois :

1. Cliquez sur **« Inviter un membre »**
2. Recherchez l'option **« Invitation groupée »** ou **« Importer »**
3. Entrez plusieurs adresses email (une par ligne)
4. Sélectionnez le rôle pour tous les invités
5. Envoyez les invitations

## Changer les rôles des membres

### Qui peut changer les rôles ?

- Les **Propriétaires** peuvent changer le rôle de n'importe qui
- Les **Admins** peuvent changer les Utilisateurs en Admin (et vice versa)
- Les Utilisateurs ne peuvent pas changer les rôles

### Comment changer un rôle

1. Accédez à la section Membres
2. Trouvez le membre que vous souhaitez mettre à jour
3. Cliquez sur son rôle actuel
4. Sélectionnez le nouveau rôle dans le menu déroulant
5. Confirmez le changement

### Considérations sur le changement de rôle

| Changement | Notes |
|------------|-------|
| Promouvoir en Admin | Donne des permissions significatives |
| Rétrograder d'Admin | L'utilisateur perd les capacités de gestion |
| Promouvoir en Propriétaire | Nécessite l'action du propriétaire actuel |
| Tout changement | Prend effet immédiatement |

## Supprimer des membres

### Comment supprimer un membre

1. Accédez à la section Membres
2. Trouvez le membre à supprimer
3. Cliquez sur le menu (⋮) ou le bouton **« Supprimer »**
4. Confirmez la suppression

### Ce qui se passe après la suppression

- L'utilisateur perd immédiatement l'accès à l'organisation
- Il est retiré de tous les réseaux de l'organisation
- Ses actions passées restent dans les journaux d'audit
- Il peut être réinvité plus tard si nécessaire

### Impossible de vous supprimer vous-même

Si vous êtes le seul propriétaire :
- Vous ne pouvez pas vous supprimer vous-même
- Transférez d'abord la propriété, ou
- Supprimez l'organisation

## Invitations en attente

### Voir les invitations en attente

1. Accédez à la section Membres
2. Recherchez le filtre ou l'onglet « En attente »
3. Voir toutes les invitations en cours

### Renvoyer des invitations

1. Trouvez l'invitation en attente
2. Cliquez sur **« Renvoyer »**
3. Un nouvel email sera envoyé

### Annuler des invitations

1. Trouvez l'invitation en attente
2. Cliquez sur **« Annuler »** ou **« Révoquer »**
3. Le lien d'invitation ne fonctionnera plus

## Résumé des permissions des membres

| Action | Propriétaire | Admin | Utilisateur |
|--------|--------------|-------|-------------|
| Voir les membres | Oui | Oui | Oui |
| Inviter des membres | Oui | Oui | Non |
| Changer les rôles | Oui | Limité | Non |
| Supprimer des membres | Oui | Oui | Non |
| Transférer la propriété | Oui | Non | Non |

[Guide détaillé des rôles →](/dashboard/organizations/user-roles)

## Bonnes pratiques

### Principe du moindre privilège

- Donnez aux utilisateurs le rôle minimum dont ils ont besoin
- Utilisateurs pour le travail quotidien avec les capteurs
- Admins pour la gestion de l'équipe et des réseaux

### Audits réguliers

- Révisez la liste des membres périodiquement
- Supprimez les utilisateurs inactifs
- Vérifiez que les rôles sont appropriés
- Vérifiez les invitations en attente

### Intégration des nouveaux membres

Lors de l'ajout de nouveaux membres d'équipe :

1. Envoyez une invitation avec le rôle approprié
2. Partagez les liens de documentation pertinents
3. Informez-les des réseaux auxquels ils auront accès

## Dépannage

### Invitation non reçue

1. Vérifiez le dossier spam/indésirables
2. Vérifiez que l'adresse email est correcte
3. Renvoyez l'invitation
4. Essayez une adresse email différente

### Impossible de changer le rôle de quelqu'un

1. Vérifiez que vous avez la permission (Propriétaire ou Admin)
2. Vous ne pouvez pas changer les rôles égaux ou supérieurs au vôtre
3. Contactez un Propriétaire si vous avez besoin de changer des permissions plus élevées

### Un membre supprimé a encore accès

1. Videz le cache/cookies de son navigateur
2. Sa session peut avoir besoin d'expirer
3. Vérifiez s'il a plusieurs comptes
4. Contactez le support si le problème persiste

## Étapes suivantes

- [Comprendre les rôles des utilisateurs en détail](/dashboard/organizations/user-roles)
- [Créer des réseaux pour votre équipe](/dashboard/networks/creating-network)
