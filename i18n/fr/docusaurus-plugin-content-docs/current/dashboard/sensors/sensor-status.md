---
sidebar_position: 9
title: Statut du capteur
---

# Statut du capteur

Surveillez la santé et la connectivité de vos capteurs Grillo via le tableau de bord.

## Aperçu des statuts

Chaque capteur affiche un statut indiquant sa condition actuelle :

| Statut | Icône | Description |
|--------|-------|-------------|
| **En ligne** | Vert | Connecté et diffusant des données normalement |
| **Hors ligne** | Gris | Actuellement non connecté au cloud |
| **Avertissement** | Jaune | Connecté mais avec des problèmes potentiels |
| **Erreur** | Rouge | Problème nécessitant une attention immédiate |

## Détails des statuts

### En ligne

Quand un capteur est en ligne :
- Connecté à Grillo Cloud
- Diffuse activement des données
- Dernières données reçues dans le délai prévu
- Aucun problème significatif détecté

**Indicateurs :**
- Point de statut vert
- Horodatage « Dernière activité » récent
- Données en direct disponibles

### Hors ligne

Quand un capteur est hors ligne :
- Non connecté à Grillo Cloud
- Aucune donnée récente reçue
- Connexion perdue ou capteur éteint

**Causes possibles :**
- Coupure de courant
- Perte de connectivité réseau
- Problème matériel du capteur
- Pare-feu bloquant la connexion

**Indicateurs :**
- Point de statut gris
- « Dernière activité » affiche un horodatage passé
- Pas de données en direct

### Avertissement

Quand un capteur affiche un statut d'avertissement :
- Connecté mais avec des problèmes
- Préoccupations de qualité des données
- Avertissements de ressources

**Causes possibles :**
- Signal faible (WiFi ou cellulaire)
- Batterie faible (Pulse uniquement)
- Connectivité intermittente
- Problèmes de qualité des données

**Indicateurs :**
- Point de statut jaune/ambre
- Message d'avertissement dans les détails
- Peut avoir des données intermittentes

### Erreur

Quand un capteur affiche un statut d'erreur :
- Problème critique détecté
- Nécessite une attention immédiate
- Peut ne pas fonctionner correctement

**Causes possibles :**
- Défaillance matérielle
- Erreur de configuration
- Problème d'authentification
- Problème de connectivité grave

**Indicateurs :**
- Point de statut rouge
- Message d'erreur dans les détails
- Action requise

## Surveiller la santé des capteurs

### Aperçu du tableau de bord

Voir tous les statuts des capteurs en un coup d'œil :
1. Accédez à votre réseau
2. Consultez le résumé des statuts en haut
3. Voyez les comptages pour chaque type de statut

### Colonne de statut

Dans la vue tableau :
- La colonne de statut affiche l'icône
- Triez par statut pour regrouper les problèmes
- Filtrez pour afficher uniquement hors ligne/avertissement

### Notifications de statut

Configurez des alertes pour les changements de statut :
1. Allez dans Paramètres → Notifications
2. Activez les alertes de changement de statut
3. Choisissez les méthodes de notification

[Paramètres de notification →](/dashboard/settings/notifications)

## Métriques de santé

### Connectivité

| Métrique | Description |
|----------|-------------|
| Force du signal | Niveau du signal WiFi/cellulaire |
| Type de connexion | WiFi ou cellulaire |
| Latence | Délai vers les serveurs cloud |
| Temps de fonctionnement | Temps depuis le dernier redémarrage |

### Alimentation (Pulse uniquement)

| Métrique | Description |
|----------|-------------|
| Niveau de batterie | Pourcentage de charge actuel |
| Source d'alimentation | Secteur ou batterie |
| État de charge | En charge/pas en charge |

### Qualité des données

| Métrique | Description |
|----------|-------------|
| Taux d'échantillonnage | Fréquence d'échantillonnage actuelle |
| Lacunes de données | Périodes de données manquantes |
| Niveau de bruit | Indicateur de bruit de fond |

## Problèmes de statut courants

### Le capteur passe fréquemment hors ligne

**Symptômes :** Le capteur passe hors ligne de manière répétée

**Solutions :**
1. Vérifiez la stabilité du réseau
2. Vérifiez que l'alimentation est constante
3. Vérifiez la force du signal
4. Examinez les paramètres du pare-feu
5. Envisagez Ethernet (One) ou cellulaire (Pulse)

### Avertissement de signal faible

**Symptômes :** Avertissement concernant une faible force du signal

**Solutions :**
1. Rapprochez le capteur du routeur
2. Ajoutez un répéteur WiFi
3. Utilisez plutôt Ethernet
4. Pour Pulse : repositionnez l'antenne
5. Envisagez la connectivité cellulaire

### Avertissement de batterie faible (Pulse)

**Symptômes :** Niveau de batterie sous le seuil

**Solutions :**
1. Vérifiez que l'alimentation secteur est connectée
2. Vérifiez la connexion de l'adaptateur secteur
3. Inspectez le câble d'alimentation pour des dommages
4. La batterie peut nécessiter un remplacement (anciennes unités)

### Avertissement de qualité des données

**Symptômes :** Alerte concernant des problèmes de qualité des données

**Solutions :**
1. Vérifiez le montage du capteur
2. Vérifiez que le capteur est de niveau
3. Enquêtez sur les sources de vibration
4. Examinez l'emplacement d'installation

## Répondre aux problèmes

### Capteurs hors ligne

1. **Vérifiez immédiatement** - Alimentation et réseau sur site
2. **Redémarrage à distance** - Si disponible dans le tableau de bord
3. **Visite sur site** - Inspection physique si nécessaire
4. **Documentez** - Enregistrez le problème et la résolution

### Conditions d'avertissement

1. **Examinez les détails** - Vérifiez le message d'avertissement
2. **Évaluez l'urgence** - Certains avertissements sont informatifs
3. **Agissez** - Traitez la cause sous-jacente
4. **Surveillez** - Vérifiez que l'avertissement disparaît

### Conditions d'erreur

1. **Attention immédiate** - Les erreurs nécessitent une action rapide
2. **Examinez l'erreur** - Comprenez le problème spécifique
3. **Dépannez** - Suivez les conseils spécifiques à l'erreur
4. **Contactez le support** - Si vous ne pouvez pas résoudre

## Historique des statuts

### Consulter l'historique

1. Ouvrez les détails du capteur
2. Accédez à l'onglet Historique
3. Consultez la chronologie des changements de statut

### Comprendre les modèles

Recherchez :
- Périodes hors ligne récurrentes
- Modèles selon l'heure de la journée
- Corrélation avec des événements externes
- Dégradation progressive

## Surveillance automatisée

### Règles d'alerte

Configurez une surveillance automatisée :

| Règle | Déclencheur | Action |
|-------|-------------|--------|
| Alerte hors ligne | Hors ligne > 5 minutes | Notification par email |
| Alerte avertissement | Statut avertissement | Notification tableau de bord |
| Alerte erreur | Statut erreur | Email immédiat |

### Options d'intégration

Connectez-vous à une surveillance externe :
- Notifications webhook
- Points de terminaison API de statut
- Outils de surveillance tiers

## Bonnes pratiques

### Surveillance régulière

- Vérifiez le tableau de bord quotidiennement
- Examinez les capteurs hors ligne rapidement
- Traitez les avertissements avant qu'ils ne deviennent des erreurs
- Documentez les problèmes récurrents

### Maintenance proactive

- Surveillez les tendances de force du signal
- Surveillez les niveaux de batterie (Pulse)
- Traitez les problèmes tôt
- Planifiez des visites de maintenance

### Documentation

- Conservez les enregistrements d'installation
- Documentez les étapes de dépannage
- Suivez les problèmes répétés
- Enregistrez les résolutions

## Guides connexes

- [Dépannage - Grillo One](/hardware/grillo-one/troubleshooting)
- [Dépannage - Grillo Pulse](/hardware/grillo-pulse/troubleshooting)
- [Paramètres de notification](/dashboard/settings/notifications)
