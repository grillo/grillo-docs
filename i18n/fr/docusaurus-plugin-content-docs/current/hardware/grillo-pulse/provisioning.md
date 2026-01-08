---
sidebar_position: 6
title: Provisionnement
---

# Provisionnement - Grillo Pulse

Le provisionnement connecte votre capteur Grillo Pulse à votre compte Grillo Cloud, permettant la surveillance et la configuration à distance.

## Prérequis

Avant le provisionnement, assurez-vous d'avoir :

- [ ] Un compte Grillo Cloud sur [cloud.grillo.io](https://cloud.grillo.io)
- [ ] Une organisation créée dans le tableau de bord
- [ ] Un réseau créé au sein de votre organisation
- [ ] Votre capteur connecté à Internet (WiFi ou cellulaire)
- [ ] L'ID de votre capteur (trouvé sur l'étiquette du PCB ou l'emballage)

## Méthodes de provisionnement

### Méthode 1 : Scan du code QR (Recommandé)

La façon la plus rapide de provisionner votre capteur :

1. **Ouvrez le tableau de bord Grillo Cloud**
   - Connectez-vous à [cloud.grillo.io](https://cloud.grillo.io)

2. **Accédez à votre réseau**
   - Sélectionnez votre organisation
   - Sélectionnez le réseau où vous souhaitez ajouter le capteur

3. **Cliquez sur "Ajouter un capteur"**
   - Recherchez le bouton ajouter/plus dans la section des capteurs

4. **Scannez le code QR**
   - Utilisez l'appareil photo de votre téléphone ou le scanner du tableau de bord
   - Scannez le code QR sur le boîtier du Pulse

5. **Sélectionnez le type d'appareil**
   - Choisissez "Grillo Pulse" lorsque demandé

6. **Confirmez l'enregistrement**
   - Vérifiez que l'ID de l'appareil correspond à votre appareil
   - Cliquez sur "Enregistrer" ou "Confirmer"

7. **Attendez la connexion**
   - Le capteur se connectera dans 1-5 minutes
   - Le statut passera de "En attente" à "En ligne"

### Méthode 2 : Saisie manuelle

Si le scan QR n'est pas disponible :

1. **Ouvrez le tableau de bord Grillo Cloud**
   - Connectez-vous à [cloud.grillo.io](https://cloud.grillo.io)

2. **Accédez à votre réseau**
   - Sélectionnez votre organisation et votre réseau

3. **Cliquez sur "Ajouter un capteur"**
   - Choisissez l'option "Saisie manuelle"

4. **Entrez les détails du capteur**
   - ID de l'appareil (trouvé sur l'étiquette du PCB ou l'emballage)
   - Type d'appareil : Grillo Pulse

5. **Terminez l'enregistrement**
   - Cliquez sur "Enregistrer"
   - Attendez que le capteur apparaisse en ligne

## Après le provisionnement

Une fois votre capteur provisionné et en ligne :

### 1. Vérifiez le streaming des données

- Consultez la page de détails du capteur dans le tableau de bord
- Vous devriez voir des indicateurs de données en temps réel ou récentes
- Le type de connexion devrait afficher WiFi ou Cellulaire

### 2. Configurez les paramètres du capteur

Définissez les métadonnées importantes :

- **Nom de la station** - Code de station compatible FDSN
- **Emplacement** - Coordonnées (latitude, longitude)
- **Élévation** - Hauteur au-dessus du niveau de la mer
- **Description du site** - Notes sur l'installation

[En savoir plus sur la configuration du capteur →](/dashboard/sensors/configuring-sensor)

### 3. Vérifiez sur la carte

- Accédez à la vue carte
- Votre capteur devrait apparaître à son emplacement configuré
- Cliquez pour vérifier les détails

### 4. Vérifiez les détails de connectivité

Pour les capteurs Pulse, vérifiez également :
- Type de connexion (WiFi vs Cellulaire)
- Puissance du signal
- État de la batterie (si applicable)

## Statut de provisionnement

| Statut | Signification |
|--------|---------------|
| En attente | Capteur enregistré mais pas encore connecté |
| En ligne | Capteur connecté et transmettant des données |
| Hors ligne | Capteur enregistré mais actuellement non connecté |
| Erreur | Problème de configuration ou de connexion |

## Considérations pour le déploiement à distance

Pour les capteurs déployés dans des emplacements éloignés :

### Pré-provisionnez avant le déploiement

1. Configurez le capteur sur WiFi dans votre bureau/laboratoire
2. Terminez le provisionnement et vérifiez qu'il fonctionne
3. Configurez les paramètres (nom de la station, etc.)
4. Puis déployez à l'emplacement distant avec le cellulaire

### Vérifiez le cellulaire avant de quitter le site

Lors d'un déploiement à distance :
1. Installez et mettez le capteur sous tension
2. Attendez la connexion cellulaire (jusqu'à 5 minutes)
3. Vérifiez le statut "En ligne" dans le tableau de bord avant de partir
4. Vérifiez que la puissance du signal est adéquate

## Dépannage

### Le capteur reste "En attente"

1. Vérifiez que le capteur est alimenté (LED allumée)
2. Vérifiez la connectivité réseau (WiFi ou cellulaire)
3. Pour le cellulaire : vérifiez que la SIM est active et a du signal
4. Essayez de redémarrer le capteur

### Mauvais réseau

Si vous avez accidentellement ajouté le capteur au mauvais réseau :

1. Retirez le capteur du réseau actuel
2. Ajoutez-le à nouveau au bon réseau en utilisant le même processus

### ID de l'appareil non reconnu

1. Vérifiez que vous entrez le bon ID de l'appareil depuis l'étiquette du PCB
2. Vérifiez les fautes de frappe (0 vs O, 1 vs l)
3. Contactez le support si le capteur n'est pas dans le système

### Connexion cellulaire mais pas de provisionnement

1. Vérifiez que le pare-feu/réseau autorise la connexion à grillo.io
2. Vérifiez que le forfait de données cellulaires est actif
3. Vérifiez que les paramètres APN sont corrects

## Déprovisionnement

Pour retirer un capteur de votre réseau :

1. Accédez au capteur dans le tableau de bord
2. Ouvrez les paramètres du capteur
3. Cliquez sur "Retirer" ou "Supprimer"
4. Confirmez l'action

:::warning
Le déprovisionnement retire le capteur de votre réseau mais ne réinitialise pas l'appareil aux paramètres d'usine. La configuration réseau (identifiants WiFi, paramètres cellulaires) restera intacte.
:::

## Réinitialisation d'usine

Pour réinitialiser complètement un Grillo Pulse :

1. Ouvrez le boîtier (voir [guide d'installation](/hardware/grillo-pulse/physical-installation))
2. Localisez le bouton de réinitialisation sur la carte de circuit
3. Maintenez le bouton de réinitialisation pendant 10+ secondes
4. Relâchez lorsque le motif de la LED change
5. Fermez et scellez le boîtier
6. Le capteur redémarrera en mode configuration

## Étapes suivantes

Avec votre capteur provisionné :

1. [Configurez les paramètres du capteur](/dashboard/sensors/configuring-sensor)
2. [Surveillez l'état du capteur](/dashboard/sensors/sensor-status)
3. [Configurez des capteurs supplémentaires](/dashboard/sensors/adding-sensor)
