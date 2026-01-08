---
sidebar_position: 4
title: Sécurité
---

# Paramètres de sécurité

Protégez votre compte Grillo Cloud avec des paramètres de sécurité solides.

## Accéder aux paramètres de sécurité

1. Connectez-vous à [cloud.grillo.io](https://cloud.grillo.io)
2. Cliquez sur votre icône de profil en haut à droite
3. Sélectionnez **« Sécurité »** ou accédez à Profil > Sécurité

## Gestion du mot de passe

### Changer votre mot de passe

Si vous vous êtes inscrit par email (pas Google/Microsoft) :

1. Accédez aux paramètres de sécurité
2. Cliquez sur **« Changer le mot de passe »**
3. Entrez votre mot de passe actuel
4. Entrez votre nouveau mot de passe
5. Confirmez votre nouveau mot de passe
6. Cliquez sur **« Mettre à jour le mot de passe »**

### Exigences du mot de passe

<!-- TODO: Confirm actual requirements -->

Votre mot de passe doit avoir :
- Au moins 8 caractères
- Une lettre majuscule (A-Z)
- Une lettre minuscule (a-z)
- Un chiffre (0-9)
- Un caractère spécial (!@#$%^&*)

### Conseils pour le mot de passe

- Utilisez un mot de passe unique non utilisé sur d'autres sites
- Envisagez d'utiliser un gestionnaire de mots de passe
- Ne partagez pas votre mot de passe avec d'autres
- Changez-le si vous soupçonnez qu'il a été compromis

### Mot de passe oublié ?

1. Allez sur [cloud.grillo.io](https://cloud.grillo.io)
2. Cliquez sur **« Se connecter »**
3. Cliquez sur **« Mot de passe oublié ? »**
4. Entrez votre adresse email
5. Vérifiez votre email pour le lien de réinitialisation
6. Cliquez sur le lien et créez un nouveau mot de passe

## Authentification à deux facteurs (2FA)

<!-- TODO: Confirm if 2FA is available -->

Ajoutez une couche de sécurité supplémentaire à votre compte.

### Qu'est-ce que le 2FA ?

L'authentification à deux facteurs nécessite :
1. Votre mot de passe (quelque chose que vous connaissez)
2. Un code de votre téléphone (quelque chose que vous possédez)

Même si quelqu'un obtient votre mot de passe, il ne peut pas accéder à votre compte sans votre téléphone.

### Configurer le 2FA

1. Accédez aux paramètres de sécurité
2. Trouvez la section « Authentification à deux facteurs »
3. Cliquez sur **« Activer le 2FA »**
4. Choisissez votre méthode :
   - Application d'authentification (recommandé)
   - SMS (si disponible)
5. Suivez les instructions de configuration

### Utiliser une application d'authentification

Applications recommandées :
- Google Authenticator
- Microsoft Authenticator
- Authy
- 1Password

Étapes de configuration :
1. Installez l'application sur votre téléphone
2. Scannez le code QR affiché dans le tableau de bord Grillo
3. Entrez le code à 6 chiffres de l'application
4. Enregistrez vos codes de secours en lieu sûr

### Codes de secours

Quand vous activez le 2FA, vous recevrez des codes de secours :
- Enregistrez-les dans un endroit sécurisé
- Utilisez-les si vous perdez l'accès à votre téléphone
- Chaque code ne peut être utilisé qu'une seule fois
- Générez de nouveaux codes si vous n'en avez plus

### Désactiver le 2FA

1. Accédez aux paramètres de sécurité
2. Trouvez la section « Authentification à deux facteurs »
3. Cliquez sur **« Désactiver le 2FA »**
4. Entrez votre mot de passe pour confirmer
5. Entrez un code 2FA ou un code de secours
6. Le 2FA sera retiré de votre compte

:::warning
Désactiver le 2FA réduit la sécurité de votre compte. Ne le faites que si nécessaire.
:::

## Sessions actives

Surveillez et gérez où vous êtes connecté.

### Voir les sessions

1. Accédez aux paramètres de sécurité
2. Trouvez la section « Sessions actives »
3. Voir toutes les sessions en cours :
   - Type d'appareil et navigateur
   - Localisation approximative
   - Adresse IP
   - Dernière activité

### Session suspecte ?

Si vous voyez une session que vous ne reconnaissez pas :

1. Cliquez sur **« Se déconnecter »** à côté de cette session
2. Changez votre mot de passe immédiatement
3. Activez le 2FA si ce n'est pas déjà fait
4. Vérifiez l'activité de votre compte

### Se déconnecter partout

Pour terminer toutes les sessions :

1. Cliquez sur **« Se déconnecter de tous les appareils »**
2. Confirmez l'action
3. Vous serez déconnecté partout
4. Reconnectez-vous avec votre mot de passe

## Historique de connexion

<!-- TODO: Confirm if login history is available -->

Consultez l'activité de connexion récente :

1. Accédez aux paramètres de sécurité
2. Trouvez la section « Historique de connexion »
3. Voir les connexions récentes :
   - Date et heure
   - Localisation
   - Appareil/navigateur
   - Succès ou échec

### Indicateurs d'activité suspecte

Surveillez :
- Connexions depuis des lieux inconnus
- Connexions depuis des appareils inconnus
- Plusieurs tentatives de connexion échouées
- Connexions à des heures inhabituelles

## Notifications de sécurité

Soyez alerté des événements de sécurité :

| Événement | Notification |
|-----------|--------------|
| Nouvelle connexion | Email quand vous vous connectez depuis un nouvel appareil |
| Changement de mot de passe | Email de confirmation |
| Changements 2FA | Email de confirmation |
| Tentatives de connexion échouées | Alerte après plusieurs échecs |

Pour configurer :
1. Accédez aux paramètres de sécurité
2. Ajustez les préférences de notification
3. Enregistrez les modifications

## Récupération de compte

### Email de récupération

Configurez un email de récupération au cas où vous perdriez l'accès :

1. Accédez aux paramètres de sécurité
2. Trouvez la section « Options de récupération »
3. Ajoutez une adresse email secondaire
4. Vérifiez l'email

### Comptes connectés

Avoir plusieurs méthodes de connexion offre des options de récupération :

- Si vous oubliez votre mot de passe, utilisez Google/Microsoft
- Si vous perdez l'accès à Google/Microsoft, utilisez email/mot de passe

## Bonnes pratiques

### À faire

- Utilisez un mot de passe fort et unique
- Activez l'authentification à deux facteurs
- Vérifiez régulièrement les sessions actives
- Gardez les options de récupération à jour
- Déconnectez-vous des ordinateurs partagés/publics

### À ne pas faire

- Partager votre mot de passe avec qui que ce soit
- Utiliser le même mot de passe sur plusieurs sites
- Laisser des sessions actives sur des appareils non fiables
- Ignorer les alertes de sécurité
- Cliquer sur des liens dans des emails suspects

## Si votre compte est compromis

Si vous soupçonnez un accès non autorisé :

1. **Changez votre mot de passe immédiatement**
2. **Déconnectez-vous de toutes les sessions**
3. **Activez le 2FA** si ce n'est pas déjà fait
4. **Vérifiez l'activité du compte** pour des modifications non autorisées
5. **Vérifiez les services connectés** pour des accès non autorisés
6. **Contactez le support** si vous avez besoin d'aide

## Étapes suivantes

- [Configurer les paramètres du profil](/dashboard/account/profile-settings)
- [Configurer les notifications](/dashboard/settings/notifications)
