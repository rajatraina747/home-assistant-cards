A highly polished, glassmorphic temperature graph card with luxury styling for Home Assistant Lovelace dashboards.

✨ **Luxury Features:**
- **Advanced Glassmorphism**: Stunning blur effects, noise textures, and gradient border accents.
- **Interactive Graph**: Vertical crosshair and dynamic tooltips that follow your mouse/touch.
- **Robust Rendering**: Powered by `ResizeObserver` to ensure perfect scaling in any layout or browser.
- **Trend Indicators**: Smart visual cues showing temperature rise/fall.
- **Premium Animations**: Pulsing glows and smooth transition effects.
- **Fully Customizable**: Control everything from accent colors to number of data points.
- **Secondary Entity Support**: Display humidity or other related sensors alongside the temperature.

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

### Local Preview Tool
This project includes an `index.html` file that allows you to preview and debug the card's visual design locally without needing to restart Home Assistant. Simply open it in a browser and use the provided controls to simulate different states.

## Support
This is a community-driven project. If you find it useful, feel free to contribute or report issues on GitHub!

## License
MIT License. See [LICENSE](LICENSE) for details.
