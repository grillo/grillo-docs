---
sidebar_position: 5
title: Export de données
---

# Export de données

Exportez les données d'événements et les enregistrements de capteurs depuis Grillo Cloud pour l'analyse, l'archivage ou l'intégration.

## Options d'export

### Export du catalogue d'événements

Exportez les informations sur les séismes détectés :
- Paramètres des événements (localisation, magnitude, heure)
- Métriques de qualité
- Données des stations

### Export des formes d'onde

Exportez les enregistrements bruts des capteurs :
- Données de séries temporelles
- Plusieurs formats disponibles
- Fenêtres temporelles sélectionnées

## Exporter depuis le catalogue d'événements

### Étape 1 : Filtrer les événements

1. Accédez au catalogue d'événements
2. Appliquez des filtres :
   - Plage de dates
   - Plage de magnitude
   - Zone géographique
3. Examinez les événements filtrés

### Étape 2 : Démarrer l'export

1. Cliquez sur le bouton **« Exporter »**
2. Choisissez la portée de l'export :
   - Tous les événements filtrés
   - Événements sélectionnés uniquement

### Étape 3 : Configurer l'export

| Option | Description |
|--------|-------------|
| Format | Format de fichier (CSV, JSON, QuakeML) |
| Champs | Quels paramètres inclure |
| Inclure les formes d'onde | Ajouter les données de forme d'onde |
| Compression | Compresser la sortie en ZIP |

### Étape 4 : Télécharger

1. Cliquez sur **« Exporter »**
2. Attendez le traitement
3. Téléchargez le fichier

Pour les exports volumineux, vous pouvez recevoir un email avec le lien de téléchargement.

## Formats d'export

### CSV (Valeurs séparées par des virgules)

Idéal pour : Tableurs, analyse simple

```csv
event_id,time,latitude,longitude,depth_km,magnitude,magnitude_type
evt_001,2024-01-15T14:32:45Z,37.7749,-122.4194,8.5,4.2,ML
evt_002,2024-01-16T08:15:22Z,37.8044,-122.2712,5.2,3.8,ML
```

### JSON (JavaScript Object Notation)

Idéal pour : Programmation, APIs, données structurées

```json
{
  "events": [
    {
      "event_id": "evt_001",
      "origin": {
        "time": "2024-01-15T14:32:45Z",
        "latitude": 37.7749,
        "longitude": -122.4194,
        "depth_km": 8.5
      },
      "magnitude": {
        "value": 4.2,
        "type": "ML"
      }
    }
  ]
}
```

### QuakeML

Idéal pour : Logiciels sismologiques, compatibilité FDSN

```xml
<?xml version="1.0" encoding="UTF-8"?>
<q:quakeml xmlns="http://quakeml.org/xmlns/bed/1.2"
           xmlns:q="http://quakeml.org/xmlns/quakeml/1.2">
  <eventParameters>
    <event publicID="smi:grillo.io/event/evt_001">
      <origin publicID="smi:grillo.io/origin/orig_001">
        <time><value>2024-01-15T14:32:45Z</value></time>
        <latitude><value>37.7749</value></latitude>
        <longitude><value>-122.4194</value></longitude>
        <depth><value>8500</value></depth>
      </origin>
      <magnitude publicID="smi:grillo.io/magnitude/mag_001">
        <mag><value>4.2</value></mag>
        <type>ML</type>
      </magnitude>
    </event>
  </eventParameters>
</q:quakeml>
```

### KML (Keyhole Markup Language)

Idéal pour : Google Earth, applications de cartographie

## Export des formes d'onde

### Sélectionner les formes d'onde

1. Allez dans Détails de l'événement
2. Cliquez sur **« Exporter les formes d'onde »**
3. Sélectionnez les stations à inclure
4. Définissez la fenêtre temporelle

### Options de fenêtre temporelle

| Option | Description |
|--------|-------------|
| Auto | Fenêtre automatique autour de l'événement |
| Personnalisée | Spécifier les heures de début/fin |
| Fixe | Durée fixe (ex. 60 secondes) |

### Formats des formes d'onde

**miniSEED**
- Format sismologique standard
- Compatible avec la plupart des logiciels sismiques
- Format binaire compressé

**SAC (Seismic Analysis Code)**
- Format d'analyse courant
- En-tête avec métadonnées
- Binaire ou ASCII

**ASCII**
- Format texte brut
- Un échantillon par ligne
- Facile à lire, grande taille de fichier

## Exports automatisés

### Exports planifiés

Configurez des exports récurrents :

1. Allez dans Paramètres → Export de données
2. Cliquez sur **« Créer une planification »**
3. Configurez :
   - Fréquence (quotidien, hebdomadaire, mensuel)
   - Critères de filtre
   - Format d'export
   - Méthode de livraison

### Options de livraison

| Méthode | Description |
|---------|-------------|
| Email | Lien de téléchargement envoyé par email |
| Stockage cloud | Upload vers S3, GCS, Azure |
| SFTP | Push vers votre serveur |
| API | Récupérer via un endpoint API |

## Export API

### Endpoint de requête

```http
GET /api/v1/events/export
```

### Paramètres

| Paramètre | Description |
|-----------|-------------|
| start | Date de début (ISO 8601) |
| end | Date de fin (ISO 8601) |
| min_magnitude | Magnitude minimale |
| format | csv, json, quakeml |

### Exemple de requête

```bash
curl -H "Authorization: Bearer VOTRE_CLE_API" \
  "https://api.grillo.io/v1/events/export?start=2024-01-01&end=2024-01-31&format=csv"
```

[Documentation API complète →](/api)

## Rétention des données

<!-- TODO: Confirm actual retention -->

| Type de données | Rétention |
|-----------------|-----------|
| Catalogue d'événements | Indéfinie |
| Détails des événements | Indéfinie |
| Formes d'onde | 90 jours standard |
| Formes d'onde étendues | Fonctionnalité Premium |

## Limites d'utilisation

<!-- TODO: Confirm actual limits -->

| Niveau | Limites d'export |
|--------|------------------|
| Standard | 1000 événements/export |
| Premium | 10 000 événements/export |
| Enterprise | Illimité |

## Bonnes pratiques

### Exports efficaces

- Filtrez uniquement les événements nécessaires
- Demandez uniquement les champs nécessaires
- Utilisez des formats compressés
- Planifiez les gros exports aux heures creuses

### Gestion des données

- Documentez vos exports
- Maintenez des sauvegardes locales
- Vérifiez l'intégrité des données
- Suivez les politiques de rétention des données

### Intégration

- Utilisez l'API pour l'automatisation
- Configurez des exports planifiés
- Implémentez la gestion des erreurs
- Surveillez les tâches d'export

## Dépannage

### L'export prend trop de temps

1. Réduisez le nombre d'événements
2. Réduisez la plage de dates
3. Excluez les formes d'onde
4. Essayez aux heures creuses

### Le téléchargement échoue

1. Vérifiez la connexion Internet
2. Essayez un export plus petit
3. Utilisez l'option de livraison par email
4. Contactez le support

### Les données semblent incorrectes

1. Vérifiez les paramètres de filtre
2. Vérifiez les paramètres de fuseau horaire
3. Vérifiez la sélection du format
4. Examinez l'aperçu de l'export

## Guides connexes

- [Catalogue d'événements](/events/event-catalog)
- [Documentation API](/api)
