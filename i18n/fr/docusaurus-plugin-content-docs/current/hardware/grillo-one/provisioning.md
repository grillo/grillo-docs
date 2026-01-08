---
sidebar_position: 5
title: Provisionnement
---

# Provisionnement - Grillo One

Le provisionnement connecte votre capteur Grillo One à votre compte Grillo Cloud, permettant la surveillance et la configuration à distance.

## Prérequis

Avant le provisionnement, assurez-vous d'avoir :

- [ ] Un compte Grillo Cloud sur [cloud.grillo.io](https://cloud.grillo.io)
- [ ] Une organisation créée dans le tableau de bord
- [ ] Un réseau créé au sein de votre organisation
- [ ] Votre capteur connecté à Internet (WiFi ou Ethernet)
- [ ] L'ID de votre capteur (trouvé sur l'étiquette de l'appareil ou de l'emballage)

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
   - Scannez le code QR au bas de votre capteur

5. **Confirmez l'enregistrement**
   - Vérifiez que l'ID de l'appareil correspond à votre capteur
   - Cliquez sur "Enregistrer" ou "Confirmer"

6. **Attendez la connexion**
   - Le capteur se connectera à votre réseau dans 1-2 minutes
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
   - ID de l'appareil (de l'étiquette sur l'appareil ou l'emballage)
   - Type d'appareil : Grillo One

5. **Terminez l'enregistrement**
   - Cliquez sur "Enregistrer"
   - Attendez que le capteur apparaisse en ligne

## Après le provisionnement

Une fois votre capteur provisionné et en ligne :

### 1. Vérifiez le streaming des données

- Consultez la page de détails du capteur dans le tableau de bord
- Vous devriez voir des indicateurs de données en temps réel ou récentes
- Un aperçu de la forme d'onde peut être disponible

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

## Statut de provisionnement

| Statut | Signification |
|--------|---------------|
| En attente | Capteur enregistré mais pas encore connecté |
| En ligne | Capteur connecté et transmettant des données |
| Hors ligne | Capteur enregistré mais actuellement non connecté |
| Erreur | Problème de configuration ou de connexion |

## Dépannage

### Le capteur reste "En attente"

1. Vérifiez que le capteur est alimenté (LED allumée)
2. Vérifiez la connectivité réseau
3. Assurez-vous que le pare-feu autorise les connexions sortantes
4. Essayez de redémarrer le capteur (débranchez et rebranchez l'alimentation)

### Mauvais réseau

Si vous avez accidentellement ajouté le capteur au mauvais réseau :

1. Retirez le capteur du réseau actuel
2. Ajoutez-le à nouveau au bon réseau en utilisant le même processus

### ID de l'appareil non reconnu

1. Vérifiez que vous entrez le bon ID de l'appareil depuis l'étiquette
2. Vérifiez les fautes de frappe (0 vs O, 1 vs l)
3. Contactez le support si le capteur n'est pas dans le système

## Déprovisionnement

Pour retirer un capteur de votre réseau :

1. Accédez au capteur dans le tableau de bord
2. Ouvrez les paramètres du capteur
3. Cliquez sur "Retirer" ou "Supprimer"
4. Confirmez l'action

:::warning
Le déprovisionnement retire le capteur de votre réseau mais ne réinitialise pas l'appareil aux paramètres d'usine. La configuration réseau du capteur (identifiants WiFi) restera intacte.
:::

## Re-provisionnement WiFi

Si vos identifiants WiFi changent ou deviennent invalides :

- Le capteur détecte automatiquement les identifiants invalides
- Il efface la configuration WiFi stockée
- L'appareil entre à nouveau en mode provisionnement (LED Réseau pulse en bleu)
- Suivez les [étapes de configuration WiFi](/hardware/grillo-one/network-setup#wifi-setup-steps) pour reconfigurer

:::tip Contournement Ethernet
Vous pouvez ignorer le provisionnement WiFi à tout moment en branchant un câble Ethernet. Le capteur utilisera automatiquement la connexion filaire à la place.
:::

## Réinitialisation d'usine

Pour réinitialiser complètement un capteur et effacer toute la configuration :

1. Débranchez l'adaptateur secteur
2. Connectez un câble USB-C au capteur
3. Redémarrez l'appareil en débranchant et rebranchant le câble USB-C
4. Le capteur redémarrera en mode configuration

## Étapes suivantes

Avec votre capteur provisionné :

1. [Configurez les paramètres du capteur](/dashboard/sensors/configuring-sensor)
2. [Surveillez l'état du capteur](/dashboard/sensors/sensor-status)
3. [Configurez des capteurs supplémentaires](/dashboard/sensors/adding-sensor)
