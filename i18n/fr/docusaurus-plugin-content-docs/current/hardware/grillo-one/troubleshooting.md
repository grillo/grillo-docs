---
sidebar_position: 6
title: Dépannage
---

# Dépannage - Grillo One

Ce guide couvre les problèmes courants et les solutions pour le capteur Grillo One.

## Référence des LEDs de statut

Le Grillo One possède trois LEDs de statut. Voici ce que chacune indique :

### LED Réseau

| Couleur | Signification | Action |
|---------|---------------|--------|
| Pulsation bleue | Connexion en cours ou mode provisionnement | Attendez, ou configurez le WiFi |
| Vert | Connecté au réseau | Fonctionnement normal |
| Jaune | Avertissement de connexion | Vérifiez la stabilité du réseau |
| Rouge | Erreur de connexion | Vérifiez la configuration réseau |

### LED Capteur

| Couleur | Signification | Action |
|---------|---------------|--------|
| Pulsation bleue | Initialisation | Attendez la fin du démarrage |
| Vert | Fonctionne normalement | Fonctionnement normal |
| Rouge | Erreur du capteur | Contactez le support |

### LED Données

| Comportement | Signification |
|--------------|---------------|
| Clignotante | Transmission de données | Fonctionnement normal |
| Éteinte | Pas de transmission | Vérifiez la connexion réseau |

## Référence rapide

| Symptôme | Cause probable | Solution |
|----------|----------------|----------|
| Pulsation bleue (bloqué) | Aucun réseau trouvé | Connectez l'Ethernet OU rejoignez le WiFi `GrilloOne-XXXX` pour provisionner |
| LED Réseau rouge | Identifiants WiFi invalides | L'appareil se réinitialisera automatiquement et entrera en mode provisionnement |
| LED Capteur rouge | L'accéléromètre ne répond pas | Contactez le support (problème matériel) |
| Pas de données vers le serveur | Problème de connectivité Internet | Vérifiez que le pare-feu autorise UDP sortant 5683/5684 |
| Heure non synchronisée | NTP bloqué | Vérifiez que le pare-feu autorise UDP sortant 123 |

## Problèmes courants

### Le capteur ne s'allume pas

**Symptômes :** Aucune activité LED, l'appareil semble mort

**Solutions :**
1. Vérifiez que l'adaptateur secteur est connecté au capteur et à la prise
2. Essayez une autre prise de courant
3. Vérifiez le câble de l'adaptateur pour des dommages
4. Si disponible, testez avec un adaptateur fonctionnel connu
5. Contactez le support si le problème persiste

### Impossible de se connecter au WiFi

**Symptômes :** Le capteur ne se connecte pas à votre réseau sans fil

**Solutions :**

1. **Vérifiez le réseau 2,4 GHz**
   - Le Grillo One ne prend en charge que le 2,4 GHz
   - Les réseaux 5 GHz n'apparaîtront pas dans la liste

2. **Vérifiez le mot de passe**
   - Saisissez à nouveau le mot de passe WiFi soigneusement
   - Faites attention aux caractères spéciaux

3. **Puissance du signal**
   - Rapprochez temporairement le capteur du routeur
   - Envisagez un répéteur WiFi pour une solution permanente

4. **Capacité du réseau**
   - Certains routeurs limitent les appareils connectés
   - Vérifiez les paramètres du routeur

5. **Réinitialisez et réessayez**
   - Redémarrez via le câble USB-C
   - Reconfigurez le WiFi depuis le début

### Le capteur affiche "Hors ligne" dans le tableau de bord

**Symptômes :** Le capteur fonctionnait mais affiche maintenant hors ligne

**Solutions :**

1. **Vérifiez l'installation physique**
   - Vérifiez la connexion d'alimentation
   - Vérifiez le statut des LED sur l'appareil
   - Vérifiez le câble réseau (si vous utilisez l'Ethernet)

2. **Vérifiez le réseau**
   - Vérifiez que votre connexion Internet fonctionne
   - Vérifiez si le mot de passe WiFi a changé
   - Recherchez les pannes réseau

3. **Redémarrez le capteur**
   - Débranchez l'alimentation pendant 30 secondes
   - Rebranchez et attendez 2-3 minutes

4. **Vérifiez les changements de pare-feu/réseau**
   - Assurez-vous que les ports UDP 5683, 5684 et 123 ne sont pas bloqués
   - Vérifiez qu'il n'y a pas de nouvelles restrictions réseau

### Le capteur n'apparaît pas après le provisionnement

**Symptômes :** Capteur ajouté au tableau de bord mais n'apparaît pas

**Solutions :**

1. **Attendez plus longtemps**
   - La connexion initiale peut prendre jusqu'à 5 minutes
   - Actualisez la page du tableau de bord

2. **Vérifiez la configuration réseau**
   - Assurez-vous que le capteur a terminé la configuration WiFi/Ethernet
   - Vérifiez que la LED indique une connexion réseau

3. **Vérifiez l'ID de l'appareil**
   - Vérifiez que le bon ID a été entré
   - Faites attention aux fautes de frappe (0 vs O, 1 vs l)

4. **Vérifiez la sélection du réseau**
   - Assurez-vous que le capteur a été ajouté au bon réseau
   - Vérifiez que vous visualisez le bon réseau dans le tableau de bord

### Mauvaise qualité des données

**Symptômes :** Formes d'onde bruitées, déclenchements faux excessifs

**Solutions :**

1. **Vérifiez le montage**
   - Assurez-vous que le capteur est de niveau
   - Vérifiez que le capteur est stable et ne bouge pas
   - Resserrez le matériel de montage

2. **Évaluez l'emplacement**
   - Éloignez-vous des équipements CVC
   - Éloignez-vous des routes avec trafic lourd
   - Évitez les étages supérieurs si possible

3. **Vérifiez les sources de vibration locales**
   - Machines à laver, sèche-linge
   - Compresseurs, pompes
   - Activité de construction

4. **Facteurs environnementaux**
   - Le vent fort peut affecter les bâtiments
   - Les changements de température peuvent causer du bruit

### Le WiFi se déconnecte constamment

**Symptômes :** Le capteur passe fréquemment hors ligne et se reconnecte

**Solutions :**

1. **Puissance du signal**
   - Vérifiez la distance au routeur
   - Recherchez les sources d'interférence
   - Envisagez un répéteur WiFi

2. **Problèmes de routeur**
   - Redémarrez votre routeur
   - Vérifiez les mises à jour du firmware
   - Vérifiez que le routeur n'est pas surchargé

3. **Utilisez l'Ethernet à la place**
   - Plus fiable que le WiFi
   - Élimine les interférences sans fil

4. **Congestion des canaux**
   - Changez le canal WiFi sur le routeur
   - Utilisez une application d'analyse WiFi pour trouver le meilleur canal

## Réinitialisation d'usine

Pour réinitialiser complètement votre Grillo One :

1. Débranchez l'adaptateur secteur
2. Connectez un câble USB-C au capteur
3. Redémarrez en débranchant et rebranchant le câble USB-C
4. Le capteur redémarrera en mode configuration
5. Reconfigurez le WiFi et re-provisionnez

:::warning
La réinitialisation d'usine efface tous les paramètres, y compris la configuration WiFi. Vous devrez configurer le capteur depuis le début.
:::

## Récupération automatique

Le Grillo One dispose de mécanismes de récupération intégrés :

| Situation | Réponse automatique |
|-----------|---------------------|
| Identifiants WiFi invalides | Efface automatiquement les identifiants, redémarre en mode provisionnement |
| Perte de réseau | Réessaie la connexion (3 tentatives avec délai d'1 seconde) |
| Mauvaise mise à jour du firmware | Retour automatique à la version précédente fonctionnelle |
| Délai d'attente du capteur | Vérification de santé chaque seconde, LED indique l'erreur |

## Informations de diagnostic

L'appareil signale automatiquement des diagnostics à Grillo Cloud toutes les 60 secondes, incluant :
- Type de connexion (WiFi ou Ethernet)
- Puissance du signal WiFi (si applicable)
- Utilisation de la mémoire
- État de synchronisation horaire
- Temps de fonctionnement
- Utilisation du tampon de données
- Température

Lors du contact avec le support, rassemblez ces informations :

1. **ID de l'appareil** - Trouvé sur l'étiquette de l'appareil ou de l'emballage
2. **Statut des LED** - Couleur/motif actuel des trois LEDs
3. **Type de réseau** - WiFi ou Ethernet
4. **Statut du tableau de bord** - Ce que le tableau de bord affiche
5. **Changements récents** - Tout changement au réseau ou à l'installation
6. **Messages d'erreur** - Captures d'écran si disponibles

## Contacter le support

Si vous avez essayé les solutions ci-dessus sans succès :

1. Visitez [Contact support](/support/contact)
2. Incluez les informations de diagnostic listées ci-dessus
3. Décrivez le problème et les étapes déjà essayées

## Guides connexes

- [Configuration réseau](/hardware/grillo-one/network-setup)
- [Provisionnement](/hardware/grillo-one/provisioning)
- [Installation physique](/hardware/grillo-one/physical-installation)
