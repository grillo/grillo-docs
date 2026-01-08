---
sidebar_position: 1
title: Paramètres
---

# Paramètres du tableau de bord

Configurez vos préférences du tableau de bord Grillo Cloud, notifications et intégrations.

## Accéder aux paramètres

1. Cliquez sur l'icône d'engrenage dans la navigation
2. Ou accédez à Profil → Paramètres
3. Choisissez la catégorie de paramètres

## Catégories de paramètres

### Notifications

Configurez comment et quand vous recevez des alertes :
- Notifications par email
- Notifications du tableau de bord
- Seuils d'alerte
- Calendriers de notification

[Guide des notifications →](/dashboard/settings/notifications)

### Clés API

Gérez l'accès API pour les intégrations :
- Générer des clés API
- Voir les clés existantes
- Révoquer l'accès
- Définir les permissions

[Guide des clés API →](/dashboard/settings/api-keys)

### Préférences

Préférences personnelles du tableau de bord :
- Fuseau horaire
- Langue
- Unités (métrique/impérial)
- Vues par défaut

### Intégrations

<!-- TODO: Confirm available integrations -->

Connectez-vous à des services externes :
- Points de terminaison webhook
- Surveillance tierce
- Destinations d'export de données

## Paramètres d'organisation vs personnels

| Type de paramètre | Portée | Qui peut modifier |
|-------------------|--------|-------------------|
| Personnel | Votre compte uniquement | Vous |
| Organisation | Tous les membres de l'org | Admin/Propriétaire |
| Réseau | Réseau spécifique | Admin/Propriétaire |

### Paramètres personnels

Affectent uniquement votre expérience :
- Affichage du fuseau horaire
- Préférences de notification
- Disposition du tableau de bord
- Langue

### Paramètres d'organisation

Affectent tous les membres de l'organisation :
- Configurations par défaut
- Politiques d'accès API
- Informations de facturation
- Politiques de sécurité

### Paramètres de réseau

Spécifiques aux réseaux individuels :
- Paramètres de détection d'événements
- Règles d'alerte
- Rétention des données
- Contrôles d'accès

## Tâches de paramétrage courantes

| Tâche | Emplacement |
|-------|-------------|
| Changer le fuseau horaire | Profil → Préférences |
| Activer les alertes email | Paramètres → Notifications |
| Générer une clé API | Paramètres → Clés API |
| Mettre à jour la facturation | Organisation → Facturation |
