---
sidebar_position: 7
title: Dépannage
---

# Dépannage - Grillo Pulse

Ce guide couvre les problèmes courants et les solutions pour le capteur Grillo Pulse.

:::info Surveillance des capteurs déployés
Les LEDs de statut sur le PCB du Grillo Pulse ne sont **pas visibles** à travers le boîtier IP67 standard. Pour les capteurs déployés, utilisez le [tableau de bord Grillo Cloud](https://cloud.grillo.io) pour surveiller l'état du capteur, la connectivité et le streaming des données. La référence des LEDs ci-dessous est utile pour le débogage et les tests avant l'assemblage final, ou si vous utilisez un boîtier personnalisé avec un couvercle transparent.
:::

## Vérification du statut du capteur via le tableau de bord

Pour les capteurs déployés, le tableau de bord Grillo Cloud est votre outil principal de surveillance :

1. **Connectez-vous** à [cloud.grillo.io](https://cloud.grillo.io)
2. **Accédez** à votre réseau et capteur
3. **Vérifiez les indicateurs de statut :**
   - **En ligne** - Le capteur est connecté et transmet des données
   - **Hors ligne** - Le capteur n'est actuellement pas connecté
   - **En attente** - Le capteur est enregistré mais ne s'est pas encore connecté
4. **Consultez les détails** pour le type de connexion (WiFi/Cellulaire), la puissance du signal et les dernières données reçues

## Référence des LEDs de statut (débogage/test uniquement)

Le Grillo Pulse a deux LEDs RGB de statut sur le PCB :

### LED Réseau

| Couleur | Signification | Action |
|---------|---------------|--------|
| Pulsation bleue | Connexion en cours ou mode provisionnement | Attendez, ou configurez WiFi/APN |
| Vert | Connecté au réseau | Fonctionnement normal |
| Rouge | Échec de connexion | Vérifiez la configuration réseau |

### LED Capteur

| Couleur | Signification | Action |
|---------|---------------|--------|
| Vert | Capteurs opérationnels | Fonctionnement normal |
| Jaune | Capteur dégradé | Vérifiez le statut du capteur dans le tableau de bord |
| Rouge | Capteur en panne | Contactez le support |

### Les deux LEDs

| Couleur | Signification | Action |
|---------|---------------|--------|
| Clignotement violet | Mise à jour du firmware OTA en cours | Attendez la fin de la mise à jour |
| Éteintes | Pas d'alimentation | Vérifiez la connexion d'alimentation |

## Problèmes courants

### Le capteur ne s'allume pas

**Symptômes :** Aucune activité LED, l'appareil semble mort

**Solutions :**
1. Vérifiez que l'adaptateur d'alimentation est correctement connecté
2. Vérifiez que le connecteur étanche est bien enfoncé
3. Essayez une autre prise de courant
4. Vérifiez le câble de l'adaptateur pour des dommages
5. Vérifiez que la batterie n'est pas complètement déchargée
6. Contactez le support si le problème persiste

### Impossible de se connecter au WiFi

**Symptômes :** Le capteur ne se connecte pas au réseau sans fil

**Solutions :**

1. **Vérifiez le réseau 2,4 GHz**
   - Le Grillo Pulse ne prend en charge que le 2,4 GHz
   - Les réseaux 5 GHz ne fonctionneront pas

2. **Vérifiez la puissance du signal**
   - Rapprochez temporairement le capteur du routeur
   - Utilisez un répéteur WiFi pour une solution permanente

3. **Vérifiez les identifiants**
   - Saisissez à nouveau le mot de passe WiFi soigneusement
   - Vérifiez les caractères spéciaux

4. **Réinitialisez et réessayez**
   - Réinitialisez le capteur aux paramètres d'usine
   - Reconfigurez depuis le début

### Le cellulaire ne se connecte pas

**Symptômes :** Le capteur est alimenté mais le cellulaire ne se connecte pas

**Solutions :**

1. **Vérifiez la carte SIM**
   - Vérifiez que la SIM est correctement installée
   - Assurez-vous que la SIM est activée auprès de l'opérateur
   - Essayez la SIM dans un téléphone pour vérifier qu'elle fonctionne

2. **Vérifiez l'antenne**
   - Vérifiez que l'antenne est connectée de manière sécurisée
   - Essayez de repositionner l'antenne
   - Vérifiez le câble de l'antenne pour des dommages

3. **Vérifiez la couverture**
   - Vérifiez la couverture cellulaire à l'emplacement
   - Consultez la carte de couverture de l'opérateur
   - Essayez de déplacer le capteur à une position différente

4. **Vérifiez les paramètres APN**
   - Confirmez que l'APN correspond aux exigences de l'opérateur
   - Vérifiez le nom d'utilisateur/mot de passe si requis

5. **Contactez l'opérateur**
   - Vérifiez que le compte est actif
   - Vérifiez les pannes réseau
   - Confirmez que le service M2M/IoT est activé

### Le capteur affiche "Hors ligne" dans le tableau de bord

**Symptômes :** Le capteur fonctionnait mais affiche maintenant hors ligne

**Solutions :**

1. **Vérifiez l'installation physique**
   - Vérifiez la connexion d'alimentation
   - Vérifiez le statut des LED sur l'appareil
   - Vérifiez la connexion de l'antenne (cellulaire)

2. **Vérifiez le réseau**
   - Pour le WiFi : vérifiez que le réseau fonctionne
   - Pour le cellulaire : vérifiez le statut de l'opérateur

3. **Vérifiez l'environnement**
   - Coupure de courant sur le site ?
   - Dommages dus aux intempéries ?
   - Antenne déplacée ?

4. **Redémarrez le capteur**
   - Débranchez l'alimentation pendant 30 secondes
   - Rebranchez et attendez 5 minutes

5. **Vérifiez le forfait de données**
   - Pour le cellulaire : vérifiez que le forfait de données est actif
   - Vérifiez si les limites d'utilisation sont dépassées

### Mauvais signal cellulaire

**Symptômes :** Connectivité intermittente, données lentes

**Solutions :**

1. **Repositionnez l'antenne**
   - Déplacez vers un emplacement plus élevé
   - Orientez loin des obstructions
   - Essayez différentes orientations

2. **Vérifiez les interférences**
   - Éloignez-vous des structures métalliques
   - Éloignez-vous des lignes électriques
   - Vérifiez les sources d'interférences RF

3. **Envisagez une antenne externe**
   - Une antenne à gain plus élevé peut aider
   - Antenne directionnelle si l'emplacement de la tour est connu

4. **Contactez l'opérateur**
   - Vérifiez les problèmes réseau
   - Vérifiez la couverture à l'emplacement exact

### La batterie se décharge rapidement

**Symptômes :** La batterie de secours ne dure pas comme prévu

**Solutions :**

1. **Vérifiez l'utilisation cellulaire**
   - Le cellulaire consomme plus d'énergie que le WiFi
   - Un mauvais signal augmente la consommation d'énergie

2. **Vérifiez la configuration**
   - Des taux d'échantillonnage plus élevés consomment plus d'énergie
   - Réduisez la fréquence de rapport si possible

3. **Vérifiez l'alimentation secteur**
   - Assurez-vous que l'alimentation principale est connectée
   - Vérifiez les connexions desserrées

4. **Âge de la batterie**
   - Les batteries se dégradent avec le temps
   - Peut nécessiter un remplacement après plusieurs années

### Problèmes de qualité des données

**Symptômes :** Données bruitées, faux déclenchements

**Solutions :**

1. **Vérifiez le montage**
   - Vérifiez que le capteur est de niveau
   - Assurez un montage stable
   - Resserrez tout le matériel

2. **Évaluez l'emplacement**
   - Distance des sources de vibration
   - Vérifiez l'exposition au vent
   - Vérifiez la stabilité du sol

3. **Vérifiez le boîtier**
   - Assurez-vous qu'il est correctement scellé
   - Recherchez les infiltrations d'eau
   - Vérifiez qu'il n'y a rien de desserré à l'intérieur

### Problèmes liés aux intempéries

**Symptômes :** Problèmes après la pluie, changements de température

**Solutions :**

1. **Vérifiez les joints**
   - Vérifiez que le boîtier est correctement scellé
   - Vérifiez le serrage des presse-étoupes
   - Recherchez les dommages visibles

2. **Vérifiez la présence d'eau**
   - Si de l'eau est suspectée, ouvrez et séchez
   - Ne mettez pas sous tension tant que ce n'est pas sec
   - Remplacez le déshydratant si présent

3. **Températures extrêmes**
   - Vérifiez que le fonctionnement est dans les spécifications
   - Envisagez un abri/ombrage
   - Vérifiez les performances de la batterie par temps froid

## Réinitialisation d'usine

Pour réinitialiser complètement votre Grillo Pulse :

1. Éteignez le capteur
2. Ouvrez le boîtier
3. Localisez le bouton de réinitialisation sur la carte
4. Appuyez et maintenez pendant **10 secondes**
5. Relâchez lorsque le motif de la LED change
6. Fermez et scellez le boîtier
7. Le capteur redémarrera en mode configuration

:::warning
La réinitialisation d'usine efface tous les paramètres, y compris la configuration WiFi, l'APN cellulaire et le provisionnement. Vous devrez configurer le capteur depuis le début.
:::

## Mises à jour du firmware (OTA)

Le Grillo Pulse prend en charge les mises à jour du firmware over-the-air :

- **Indicateur de mise à jour** - Les deux LEDs clignotent en violet pendant la mise à jour
- **Retour automatique** - Si la mise à jour échoue à la vérification, l'appareil revient automatiquement au firmware précédent
- **Ne pas éteindre** - Attendez la fin de la mise à jour (les LEDs reviennent à la normale)
- **Vérification de checksum** - Les mises à jour sont vérifiées avant application

## Récupération automatique

Le Grillo Pulse dispose de mécanismes de récupération intégrés :

| Situation | Réponse automatique |
|-----------|---------------------|
| Identifiants WiFi invalides | Efface automatiquement les identifiants, redémarre en mode provisionnement |
| Perte de réseau | Réessaie la connexion automatiquement |
| Mauvaise mise à jour du firmware | Retour automatique à la version précédente fonctionnelle |
| Erreur du capteur | Signale un statut dégradé au tableau de bord |

## Informations de diagnostic

L'appareil signale automatiquement son statut à Grillo Cloud toutes les 30 secondes, incluant :
- Type de connexion et puissance du signal
- Tension de la batterie et statut de charge
- Utilisation de la mémoire et temps de fonctionnement
- État de synchronisation horaire
- Localisation GPS (si disponible)
- Température

Lors du contact avec le support, rassemblez ces informations :

1. **ID de l'appareil** - Trouvé sur l'étiquette du PCB ou l'emballage
2. **Statut des LED** - Motif et couleur actuels des lumières
3. **Type de connexion** - WiFi ou cellulaire (LTE/3G/2G)
4. **Puissance du signal** - Si disponible
5. **Détails d'installation** - Type d'emplacement, méthode de montage
6. **Conditions environnementales** - Météo, température
7. **Source d'alimentation** - Tension du panneau solaire, statut de la batterie
8. **Changements récents** - Tout changement à l'installation ou à l'environnement
9. **Messages d'erreur** - Captures d'écran du tableau de bord

## Contacter le support

Si vous avez essayé les solutions ci-dessus sans succès :

1. Visitez [Contact support](/support/contact)
2. Incluez les informations de diagnostic listées ci-dessus
3. Décrivez le problème et les étapes déjà essayées
4. Incluez des photos si pertinent (installation, statut des LED, etc.)

## Guides connexes

- [Installation physique](/hardware/grillo-pulse/physical-installation)
- [Configuration réseau](/hardware/grillo-pulse/network-setup)
- [Configuration de la carte SIM](/hardware/grillo-pulse/sim-card-setup)
- [Provisionnement](/hardware/grillo-pulse/provisioning)
