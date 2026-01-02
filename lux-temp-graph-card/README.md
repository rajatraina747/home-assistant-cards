# Luxury Temperature Graph Card

A highly polished, glassmorphic temperature graph card with luxury styling for Home Assistant Lovelace dashboards.

## Installation

### Manual Installation
1. Copy `dist/lux-temp-graph-card.js` to your Home Assistant `config/www/` directory.
2. Add the resource in **Settings > Dashboards > Resources**:
   - URL: `/local/lux-temp-graph-card.js`
   - Type: JavaScript Module

### Usage

**Simple Example:**
```yaml
type: custom:lux-temp-graph-card
entity: sensor.living_room_temperature
```

**Full Customization:**
```yaml
type: custom:lux-temp-graph-card
entity: sensor.living_room_temperature
name: Living Room
mode: trend
secondary_entity: sensor.living_room_humidity
secondary_label: Humidity
graph_style: both
smoothing: true
points: 72
show_stats: true
stats_lookback_label: 24h
thresholds:
  - above: 25
    color: "#ff6b6b"
    label: Hot
  - below: 18
    color: "#4dabf7"
    label: Cold
height: 300
glass: true
glow: true
```

## Development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Build the project:
   ```bash
   npm run build
   ```
3. Watch for changes:
   ```bash
   npm run watch
   ```
