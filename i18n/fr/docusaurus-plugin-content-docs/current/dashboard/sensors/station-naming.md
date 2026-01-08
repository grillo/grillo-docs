---
sidebar_position: 7
title: Nommage des stations (FDSN)
---

# Nommage des stations (FDSN)

Configurez vos capteurs avec des codes de station conformes au FDSN pour la compatibilité avec la communauté sismologique mondiale.

## Qu'est-ce que le FDSN ?

La **Fédération des Réseaux Sismographiques Numériques (FDSN)** établit des normes pour l'échange de données sismiques. L'utilisation d'un nommage conforme au FDSN garantit que vos données sont compatibles avec les outils et bases de données sismologiques standard.

## Format de nommage FDSN

Un identifiant FDSN complet se compose de :

```
Réseau.Station.Localisation.Canal
```

Exemple : `GR.GRIL01.00.HNZ`

| Composant | Longueur | Description |
|-----------|----------|-------------|
| Réseau | 1-2 car. | Identifiant de réseau |
| Station | 1-5 car. | Identifiant de station |
| Localisation | 2 car. | Code de localisation |
| Canal | 3 car. | Code de canal |

## Code de réseau

### Ce qu'il représente

Le code de réseau identifie l'organisation ou le réseau qui exploite le capteur.

### Directives

- 1-2 lettres majuscules ou chiffres
- Doit être unique dans le système FDSN
- Les réseaux enregistrés ont des codes officiels

### Exemples

| Code | Réseau |
|------|--------|
| US | Réseau Sismique National US |
| IU | Réseau Sismographique Global |
| GR | Exemple de réseau Grillo |

### Pour les utilisateurs Grillo

<!-- TODO: Confirm Grillo network code policy -->

- Utilisez le code enregistré de votre organisation si disponible
- Contactez le support Grillo pour des conseils sur le code de réseau
- Des codes temporaires peuvent être attribués pour les tests

## Code de station

### Ce qu'il représente

Le code de station identifie de manière unique un capteur au sein d'un réseau.

### Directives

- 1-5 lettres majuscules et chiffres
- Doit être unique au sein du réseau
- Devrait être significatif et mémorable

### Stratégies de nommage

**Géographique :**
- "SFDT" - San Francisco Downtown
- "LAX01" - Capteur Los Angeles 1

**Organisationnel :**
- "MAIN" - Bâtiment principal
- "LAB3" - Laboratoire 3

**Séquentiel :**
- "STA01", "STA02", etc.
- "GRL001", "GRL002", etc.

### Bonnes pratiques

- Gardez les codes courts mais significatifs
- Utilisez des modèles cohérents dans votre réseau
- Documentez votre schéma de nommage
- Évitez les caractères confus (O/0, I/1/l)

## Code de localisation

### Ce qu'il représente

Le code de localisation différencie plusieurs capteurs au même site ou des capteurs avec des configurations différentes.

### Directives

- Exactement 2 caractères
- Généralement des chiffres (00, 01, 02)
- Peut être des lettres pour des fins spécifiques

### Valeurs courantes

| Code | Signification |
|------|---------------|
| 00 | Localisation principale/par défaut |
| 01 | Localisation secondaire |
| 10 | Instrument différent |
| -- | Vide/non spécifié |

### Quand utiliser différents codes de localisation

- Plusieurs capteurs au même site
- Configurations de capteurs différentes
- Chaînes de traitement de données différentes

## Codes de canaux

### Ce qu'ils représentent

Les codes de canaux décrivent le type de données enregistrées.

### Format

3 caractères : Bande + Instrument + Orientation

| Position | Signification |
|----------|---------------|
| 1ère | Code de bande (taux d'échantillonnage) |
| 2ème | Code d'instrument |
| 3ème | Orientation |

### Canaux Grillo courants

<!-- TODO: Confirm actual channel codes used -->

| Canal | Description |
|-------|-------------|
| HNZ | Accéléromètre haute fréquence, vertical |
| HNE | Accéléromètre haute fréquence, est |
| HNN | Accéléromètre haute fréquence, nord |
| BHZ | Large bande, vertical |

### Codes de bande

| Code | Taux d'échantillonnage |
|------|------------------------|
| H | Haut (80-250 Hz) |
| B | Large bande (10-80 Hz) |
| L | Bas (1 Hz) |

### Codes d'instrument

| Code | Type d'instrument |
|------|-------------------|
| N | Accéléromètre |
| H | Sismomètre à haut gain |

### Codes d'orientation

| Code | Direction |
|------|-----------|
| Z | Vertical (haut) |
| N | Nord |
| E | Est |

## Configurer les codes de station

### Dans le tableau de bord

1. Ouvrez la configuration du capteur
2. Trouvez la section « Identification de la station »
3. Entrez :
   - Code de réseau
   - Code de station
   - Code de localisation
4. Enregistrez les modifications

### Exemple de configuration

```
Réseau : GR
Station : GRIL01
Localisation : 00
```

Résulte en identifiants de canaux comme :
- GR.GRIL01.00.HNZ
- GR.GRIL01.00.HNE
- GR.GRIL01.00.HNN

## Règles de validation

Le tableau de bord valide les codes de station :

| Règle | Exemple valide | Exemple invalide |
|-------|----------------|------------------|
| Réseau 1-2 car. | GR, US | GRILLO |
| Station 1-5 car. | STA01 | STATION01 |
| Localisation 2 car. | 00, AB | 0, 000 |
| Majuscules uniquement | ABC123 | abc123 |

## Changer les codes de station

### Considérations

- Changer les codes affecte la continuité des données
- Les données historiques conservent les anciens codes
- Mettez à jour la documentation lors des changements
- Informez les utilisateurs des données des changements

### Processus

1. Documentez la raison du changement
2. Mettez à jour la configuration dans le tableau de bord
3. Vérifiez que le changement s'est propagé au capteur
4. Mettez à jour les références externes

## Ressources

- [Site web FDSN](https://www.fdsn.org/)
- [Conventions de nommage des stations FDSN](https://www.fdsn.org/networks/)
- [Documentation StationXML](https://www.fdsn.org/xml/station/)

## Prochaines étapes

- [Configurer les informations de localisation](/dashboard/sensors/location-info)
- [Compléter la configuration du capteur](/dashboard/sensors/configuring-sensor)
