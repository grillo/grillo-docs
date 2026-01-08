---
sidebar_position: 2
title: Ajouter un capteur
---

# Ajouter un capteur

Enregistrez un capteur Grillo provisionné dans votre réseau via le tableau de bord.

## Prérequis

Avant d'ajouter un capteur, assurez-vous que :

- [ ] Le capteur est physiquement installé ([Grillo One](/hardware/grillo-one) | [Grillo Pulse](/hardware/grillo-pulse))
- [ ] Le capteur est connecté à Internet
- [ ] Le capteur est provisionné sur Grillo Cloud
- [ ] Vous avez le numéro de série du capteur
- [ ] Vous avez le rôle Membre ou supérieur dans l'organisation

## Ajouter un capteur

### Étape 1 : Accédez à votre réseau

1. Connectez-vous à [cloud.grillo.io](https://cloud.grillo.io)
2. Sélectionnez votre organisation
3. Cliquez sur le réseau où vous souhaitez ajouter le capteur

### Étape 2 : Démarrez le processus d'ajout

1. Cliquez sur le bouton **« Ajouter un capteur »**
2. Ou cliquez sur l'icône **« + »** dans la section capteurs

![Bouton ajouter capteur](/img/placeholder-add-sensor.svg)
<!-- TODO: Replace with actual screenshot -->

### Étape 3 : Identifiez votre capteur

#### Option A : Scanner le code QR (Recommandé)

1. Sélectionnez **« Scanner le code QR »**
2. Utilisez la caméra de votre appareil pour scanner le code QR sur le capteur
3. Le numéro de série sera automatiquement saisi

#### Option B : Entrer le numéro de série manuellement

1. Sélectionnez **« Entrer manuellement »**
2. Tapez le numéro de série du capteur
3. Le numéro de série se trouve sur le dessous/l'étiquette de l'appareil

### Étape 4 : Sélectionnez le type de capteur

Choisissez le bon type d'appareil :
- **Grillo One** - Capteur intérieur avec WiFi/Ethernet
- **Grillo Pulse** - Capteur extérieur avec WiFi/Cellulaire

### Étape 5 : Confirmez et ajoutez

1. Vérifiez que le numéro de série est correct
2. Cliquez sur **« Ajouter au réseau »**
3. Attendez la confirmation

## Après l'ajout

### Statut du capteur

Après l'ajout, le capteur affichera :
- **En attente** - En attente de connexion du capteur
- **En ligne** - Connecté avec succès et en streaming

Si le capteur reste « En attente » :
1. Vérifiez que le capteur est alimenté
2. Vérifiez la connectivité réseau sur l'appareil
3. Attendez quelques minutes pour la connexion
4. Voir les [guides de dépannage](/hardware/grillo-one/troubleshooting)

### Étapes suivantes

Une fois que le capteur affiche « En ligne » :

1. **Définir le nom de station** - [Configurer le code de station FDSN](/dashboard/sensors/station-naming)
2. **Définir l'emplacement** - [Ajouter les coordonnées et métadonnées](/dashboard/sensors/location-info)
3. **Configurer les paramètres** - [Ajuster les paramètres du capteur](/dashboard/sensors/configuring-sensor)

## Ajouter plusieurs capteurs

### Un à la fois

Répétez le processus ci-dessus pour chaque capteur. C'est recommandé pour :
- La première configuration
- Quand les capteurs nécessitent une configuration individuelle
- Quand vous vérifiez que chaque capteur fonctionne

### Import en masse

<!-- TODO: Confirm if bulk import is available -->

Pour ajouter plusieurs capteurs à la fois :

1. Cliquez sur **« Ajouter un capteur »** → **« Import en masse »**
2. Téléchargez un fichier CSV avec les numéros de série
3. Mappez les colonnes aux champs
4. Importez tous les capteurs

Format CSV :
```csv
serial_number,type,name
ABC123,grillo-one,Capteur 1
DEF456,grillo-pulse,Capteur 2
```

## Déplacer des capteurs entre réseaux

Pour déplacer un capteur vers un autre réseau :

1. Supprimez le capteur du réseau actuel
2. Ajoutez-le au nouveau réseau en utilisant le même numéro de série

Le capteur conservera son provisionnement et se connectera au nouveau réseau.

## Remplacer un capteur

Si vous devez remplacer un capteur défaillant :

1. Notez la configuration actuelle du capteur (nom de station, emplacement, etc.)
2. Supprimez l'ancien capteur du réseau
3. Ajoutez le nouveau capteur
4. Appliquez la même configuration au nouveau capteur

## Dépannage

### « Numéro de série non trouvé »

1. Vérifiez que le numéro de série est entré correctement
2. Vérifiez les fautes de frappe (O vs 0, l vs 1)
3. Assurez-vous que le capteur a été provisionné
4. Contactez le support si le capteur devrait exister

### « Capteur déjà utilisé »

Le capteur est enregistré dans un autre réseau :
1. Si c'est votre réseau, supprimez-le d'abord puis ré-ajoutez-le
2. Si c'est une autre organisation, contactez le support

### Le capteur ne passe pas en ligne

1. Vérifiez que le capteur est alimenté (LED allumée)
2. Vérifiez la connectivité réseau (WiFi/Ethernet/Cellulaire)
3. Vérifiez que le pare-feu ne bloque pas les connexions
4. Consultez les guides de dépannage matériel

### Mauvais réseau

Si vous avez ajouté un capteur au mauvais réseau :
1. Allez dans les paramètres du capteur
2. Cliquez sur **« Supprimer du réseau »**
3. Accédez au bon réseau
4. Ajoutez à nouveau le capteur

## Guides connexes

- [Provisionnement Grillo One](/hardware/grillo-one/provisioning)
- [Provisionnement Grillo Pulse](/hardware/grillo-pulse/provisioning)
- [Configurer les capteurs](/dashboard/sensors/configuring-sensor)
