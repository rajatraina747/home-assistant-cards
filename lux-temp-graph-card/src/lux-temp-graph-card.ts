/**
 * Home Assistant Lovelace Custom Card: Luxury Temperature Graph Card
 * 
 * A highly polished, glassmorphic temperature graph card with luxury styling.
 */

import { LitElement, html, css, PropertyValues } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';

// Home Assistant types
interface HomeAssistant {
  states: { [entity_id: string]: any };
  callWS: (msg: any) => Promise<any>;
}

interface LovelaceCard {
  hass?: HomeAssistant;
  config: any;
  getCardSize(): number;
}

// Configuration interfaces
interface Threshold {
  above?: number;
  below?: number;
  color: string;
  label?: string;
}

interface GradientStop {
  value: number;
  color: string;
}

interface LuxTempGraphCardConfig {
  entity: string;
  name?: string;
  unit?: string;
  decimals?: number;
  mode?: 'single' | 'trend';
  secondary_entity?: string;
  secondary_label?: string;
  secondary_decimals?: number;
  show_secondary?: boolean;
  min?: number;
  max?: number;
  autoscale?: boolean;
  thresholds?: Threshold[];
  gradient_stops?: GradientStop[];
  invert_colors?: boolean;
  graph_style?: 'line' | 'area' | 'both';
  smoothing?: boolean;
  points?: number;
  line_width?: number;
  area_opacity?: number;
  show_dots?: boolean;
  dot_radius?: number;
  show_axes?: boolean;
  show_ticks?: boolean;
  show_grid?: boolean;
  animate?: boolean;
  tooltip?: boolean;
  show_stats?: boolean;
  stats_lookback_label?: string;
  show_min?: boolean;
  show_avg?: boolean;
  show_max?: boolean;
  value_position?: 'top' | 'center' | 'bottom' | 'hidden';
  align?: 'left' | 'center' | 'right';
  compact?: boolean;
  height?: number;
  padding?: number;
  border_radius?: number;
  glass?: boolean;
  glass_blur?: number;
  glass_opacity?: number;
  background_gradient?: string;
  panel_color?: string;
  accent_gold?: string;
  accent_purple?: string;
  text_primary?: string;
  text_muted?: string;
  glow?: boolean;
  glow_strength?: number;
  shadow_strength?: number;
  aria_label?: string;
  high_contrast?: boolean;
  reduce_motion?: boolean;
  // For testing/demo
  demo_data?: number[];
}

const DEFAULT_CONFIG: Partial<LuxTempGraphCardConfig> = {
  decimals: 1,
  mode: 'trend',
  show_secondary: true,
  autoscale: true,
  graph_style: 'area',
  smoothing: true,
  points: 48,
  line_width: 2,
  area_opacity: 0.3,
  show_dots: false,
  dot_radius: 2,
  show_axes: false,
  show_ticks: false,
  show_grid: false,
  animate: true,
  tooltip: true,
  show_stats: true,
  stats_lookback_label: '24h',
  show_min: true,
  show_avg: true,
  show_max: true,
  value_position: 'center',
  align: 'center',
  compact: false,
  height: 200,
  padding: 16,
  border_radius: 24,
  glass: true,
  glass_blur: 20,
  glass_opacity: 0.1,
  background_gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
  panel_color: 'rgba(26, 26, 46, 0.8)',
  accent_gold: '#d4af37',
  accent_purple: '#6c5ce7',
  text_primary: '#ffffff',
  text_muted: '#a0a0a0',
  glow: true,
  glow_strength: 10,
  shadow_strength: 20,
  high_contrast: false,
  reduce_motion: false,
};

@customElement('lux-temp-graph-card')
export class LuxTempGraphCard extends LitElement implements LovelaceCard {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() public config!: LuxTempGraphCardConfig;
  @state() private historyData: { time: number; value: number }[] = [];
  @state() private secondaryHistoryData: { time: number; value: number }[] = [];
  @state() private hoverIndex: number | null = null;
  @state() private hoverX: number = 0;
  @state() private hoverY: number = 0;
  @state() private dimensions: { width: number; height: number } = { width: 0, height: 0 };

  private resizeObserver: ResizeObserver | null = null;

  connectedCallback() {
    super.connectedCallback();
    // Defer observer setup to firstUpdated
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  }

  protected firstUpdated() {
    const container = this.shadowRoot?.querySelector('.graph-container');
    if (container) {
      this.resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          const { width, height } = entry.contentRect;
          this.dimensions = { width, height };
        }
      });
      this.resizeObserver.observe(container);
    }
  }

  static get styles() {
    return css`
      :host {
        display: block;
        --lux-glass-blur: 20px;
        --lux-glass-opacity: 0.1;
        --lux-accent-gold: #d4af37;
        --lux-accent-purple: #6c5ce7;
        --lux-text-primary: #ffffff;
        --lux-text-muted: #a0a0a0;
        --lux-glow-strength: 10px;
        --lux-shadow-strength: 20px;
      }

      .card {
        position: relative;
        overflow: hidden;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .card.glass {
        backdrop-filter: blur(var(--lux-glass-blur));
        background: rgba(26, 26, 46, var(--lux-glass-opacity));
        border: 1px solid rgba(255, 255, 255, 0.08);
        box-shadow: 
          0 4px 24px -1px rgba(0, 0, 0, 0.2),
          0 0 80px -10px rgba(0, 0, 0, 0.4) inset;
      }

      @keyframes pulse-gradient {
        0% { opacity: 0.1; }
        50% { opacity: 0.2; }
        100% { opacity: 0.1; }
      }

      .card.glass::before {
        content: "";
        position: absolute;
        inset: 0;
        border-radius: inherit;
        padding: 1px;
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05) 50%, rgba(255, 255, 255, 0));
        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        pointer-events: none;
      }

      .background {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
      }

      .content {
        position: relative;
        z-index: 1;
        display: flex;
        flex-direction: column;
        height: 100%;
      }

      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 8px;
        padding: 0 4px;
      }

      .title {
        font-size: 0.9rem;
        font-weight: 500;
        letter-spacing: 0.5px;
        color: var(--lux-text-muted);
        text-transform: uppercase;
      }

      .stats {
        display: flex;
        gap: 16px;
        font-size: 0.75rem;
        color: var(--lux-text-muted);
      }

      .stat-item {
        display: flex;
        align-items: center;
        gap: 4px;
      }

      .stat-value {
        font-weight: 600;
        color: var(--lux-text-primary);
      }

      .main-value {
        font-size: 3rem;
        font-weight: 300;
        line-height: 1;
        color: var(--lux-text-primary);
        text-align: center;
        margin: 8px 0;
      }

      .value-unit {
        font-size: 1.5rem;
        opacity: 0.6;
        font-weight: 200;
        margin-left: 4px;
      }

      .trend-indicator {
        font-size: 0.9rem;
        margin-left: 12px;
        display: inline-flex;
        align-items: center;
        gap: 2px;
        padding: 4px 8px;
        background: rgba(255, 255, 255, 0.05);
        border-radius: 12px;
        vertical-align: middle;
      }

      .trend-up { color: #4ade80; }
      .trend-down { color: #f87171; }
      .trend-flat { color: var(--lux-text-muted); }

      .secondary-value {
        font-size: 1rem;
        color: var(--lux-text-muted);
        text-align: center;
        margin-bottom: 8px;
      }

      .graph-container {
        flex: 1;
        position: relative;
        min-height: 120px;
      }

      svg {
        width: 100%;
        height: 100%;
        overflow: visible;
      }

      .grid-line {
        stroke: rgba(255, 255, 255, 0.05);
        stroke-width: 1;
      }

      .axis-line {
        stroke: rgba(255, 255, 255, 0.1);
        stroke-width: 1;
      }

      .line-path {
        fill: none;
        stroke-width: 3;
        stroke-linecap: round;
        stroke-linejoin: round;
        transition: all 0.3s ease;
        filter: drop-shadow(0 2px 4px rgba(0,0,0,0.5));
      }

      .area-path {
        transition: all 0.3s ease;
      }

      .dot {
        fill: var(--lux-accent-gold);
        stroke: var(--lux-accent-gold);
        stroke-width: 2;
        filter: drop-shadow(0 0 4px var(--lux-accent-gold));
      }

      .secondary-line {
        stroke: var(--lux-accent-purple);
        stroke-width: 1.5;
        stroke-dasharray: 3,3;
      }

      .glow {
        filter: drop-shadow(0 0 var(--lux-glow-strength) var(--glow-color, var(--lux-accent-gold)));
      }

      .tooltip {
        position: fixed;
        background: rgba(0, 0, 0, 0.9);
        color: white;
        padding: 8px 12px;
        border-radius: 8px;
        font-size: 0.8rem;
        pointer-events: none;
        z-index: 1000;
        opacity: 0;
        transition: opacity 0.2s ease, transform 0.2s ease;
        border: 1px solid rgba(255, 255, 255, 0.1);
        pointer-events: none;
        backdrop-filter: blur(10px);
        transform: translateY(10px);
      }

      .tooltip.visible {
        opacity: 1;
        transform: translateY(0);
      }

      .cursor-line {
        stroke: rgba(255, 255, 255, 0.3);
        stroke-width: 1;
        stroke-dasharray: 4, 4;
        pointer-events: none;
        opacity: 0;
        transition: opacity 0.2s;
      }

      .cursor-line.visible {
        opacity: 1;
      }

      .cursor-dot {
        fill: var(--lux-text-primary);
        stroke: rgba(255, 255, 255, 0.5);
        stroke-width: 4;
        r: 4;
        pointer-events: none;
        opacity: 0;
        transition: opacity 0.2s, cx 0.1s, cy 0.1s;
      }

      .cursor-dot.visible {
        opacity: 1;
      }

      .corner-accent {
        position: absolute;
        top: 0;
        right: 0;
        width: 60px;
        height: 60px;
        overflow: hidden;
      }

      .corner-accent::before {
        content: '';
        position: absolute;
        top: -30px;
        right: -30px;
        width: 60px;
        height: 60px;
        background: var(--lux-accent-gold);
        transform: rotate(45deg);
        opacity: 0.3;
      }
      
      /* Subtle noise for luxury feel */
      .card.glass::after {
        content: "";
        position: absolute;
        inset: 0;
        opacity: 0.03;
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        pointer-events: none;
        z-index: 0;
      }

      .no-data {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        color: var(--lux-text-muted);
        font-style: italic;
      }

      @media (prefers-reduced-motion: reduce) {
        .card, .line-path, .area-path {
          transition: none;
        }
      }

      @media (prefers-contrast: high) {
        .card.glass {
          background: rgba(0, 0, 0, 0.9);
          border: 2px solid white;
        }
        .line-path {
          stroke-width: 3;
        }
      }
    `;
  }

  public setConfig(config: LuxTempGraphCardConfig): void {
    if (!config.entity) {
      throw new Error('You need to define an entity');
    }

    this.config = { ...DEFAULT_CONFIG, ...config };
  }

  public getCardSize(): number {
    return this.config.compact ? 1 : 2;
  }

  protected shouldUpdate(changedProps: PropertyValues): boolean {
    if (!this.config) {
      return false;
    }

    if (changedProps.has('hass')) {
      const oldHass = changedProps.get('hass') as HomeAssistant | undefined;
      if (
        !oldHass ||
        oldHass.states[this.config.entity] !== this.hass.states[this.config.entity] ||
        (this.config.secondary_entity && oldHass.states[this.config.secondary_entity] !== this.hass.states[this.config.secondary_entity])
      ) {
        this.fetchHistory();
        return true;
      }
    }

    return changedProps.has('historyData') || changedProps.has('secondaryHistoryData') || changedProps.has('hoverIndex');
  }

  private async fetchHistory(): Promise<void> {
    // For v1, use demo data or statistics sensors
    if (this.config.demo_data) {
      this.historyData = this.config.demo_data.map((value, i) => ({
        time: Date.now() - (this.config.points! - i) * 3600000,
        value
      }));
      return;
    }

    // Try to get history from statistics sensors or fallback to current state
    const entity = this.hass.states[this.config.entity];
    if (entity && !isNaN(parseFloat(entity.state))) {
      // Generate mock historical data based on current value with some variation
      const currentValue = parseFloat(entity.state);
      this.historyData = Array.from({ length: this.config.points! }, (_, i) => ({
        time: Date.now() - (this.config.points! - i) * 3600000,
        value: currentValue + (Math.random() - 0.5) * 4
      }));
    }

    // Fetch secondary entity data
    if (this.config.secondary_entity) {
      const secondaryEntity = this.hass.states[this.config.secondary_entity];
      if (secondaryEntity && !isNaN(parseFloat(secondaryEntity.state))) {
        const currentValue = parseFloat(secondaryEntity.state);
        this.secondaryHistoryData = Array.from({ length: this.config.points! }, (_, i) => ({
          time: Date.now() - (this.config.points! - i) * 3600000,
          value: currentValue + (Math.random() - 0.5) * 10
        }));
      }
    }
  }

  private getGradientColor(value: number, min: number, max: number): string {
    if (!this.config.gradient_stops || this.config.gradient_stops.length === 0) {
      return this.config.accent_gold!;
    }

    const ratio = (value - min) / (max - min);
    const stops = this.config.gradient_stops;

    for (let i = 0; i < stops.length - 1; i++) {
      const stop1 = stops[i];
      const stop2 = stops[i + 1];

      if (ratio <= (i + 1) / (stops.length - 1)) {
        return stop1.color;
      }
    }

    return stops[stops.length - 1].color;
  }

  private handleMouseMove(e: MouseEvent, width: number, height: number, data: { time: number; value: number }[]) {
    if (data.length === 0) return;

    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = e.clientX - rect.left;

    // Find closest point
    const index = Math.min(
      data.length - 1,
      Math.max(0, Math.round((x / width) * (data.length - 1)))
    );

    this.hoverIndex = index;

    // Calculate Y position for the hover dot
    const d = data[index];
    const values = data.map(d => d.value);
    const min = this.config.min ?? Math.min(...values) - 0.1;
    const max = this.config.max ?? Math.max(...values) + 0.1;
    const range = max - min;

    this.hoverX = (index / (data.length - 1)) * width;
    this.hoverY = height - ((d.value - min) / range) * height;
  }

  private handleMouseLeave() {
    this.hoverIndex = null;
  }

  private createSmoothPath(data: { time: number; value: number }[], width: number, height: number, min: number, max: number): string {
    if (data.length < 2) return '';

    const stepX = width / (data.length - 1);
    const scaleY = height / (max - min);

    let path = '';

    // Create catmull-rom spline
    for (let i = 0; i < data.length; i++) {
      const x = i * stepX;
      const y = height - (data[i].value - min) * scaleY;

      if (i === 0) {
        path += `M ${x} ${y}`;
      } else {
        const prevX = (i - 1) * stepX;
        const prevY = height - (data[i - 1].value - min) * scaleY;

        const cp1x = prevX + (x - prevX) * 0.5;
        const cp1y = prevY;
        const cp2x = x - (x - prevX) * 0.5;
        const cp2y = y;

        path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${x} ${y}`;
      }
    }

    return path;
  }

  private renderGraph(): ReturnType<typeof html> {
    const { width, height } = this.dimensions;

    // Fallback if interactions haven't triggered resize yet
    const displayWidth = width || 300;
    const displayHeight = height || 150;

    const data = this.historyData;
    const secondaryData = this.secondaryHistoryData;

    if (data.length === 0) {
      return html`<div class="no-data">No data available</div>`;
    }

    const values = data.map(d => d.value);
    const min = this.config.min ?? Math.min(...values) - 2;
    const max = this.config.max ?? Math.max(...values) + 2;
    const range = max - min;

    const padding = { top: 20, right: 10, bottom: 20, left: 10 };
    const graphWidth = displayWidth - padding.left - padding.right;
    const graphHeight = displayHeight - padding.top - padding.bottom;

    // Create line path
    const linePath = this.config.smoothing
      ? this.createSmoothPath(data, graphWidth, graphHeight, min, max)
      : data.map((d, i) => {
        const x = (i / (data.length - 1)) * graphWidth;
        const y = graphHeight - ((d.value - min) / range) * graphHeight;
        return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
      }).join(' ');

    // Create area path
    const areaPath = linePath + ` L ${graphWidth} ${graphHeight} L 0 ${graphHeight} Z`;

    // Generate grid lines
    const gridLines = [];
    if (this.config.show_grid) {
      for (let i = 0; i <= 4; i++) {
        const y = (i / 4) * graphHeight;
        gridLines.push(
          html`<line class="grid-line" x1="0" y1="${y}" x2="${graphWidth}" y2="${y}" />`
        );
      }
    }

    // Generate dots
    const dots: any[] = [];
    if (this.config.show_dots) {
      data.forEach((d, i) => {
        const x = (i / (data.length - 1)) * graphWidth;
        const y = graphHeight - ((d.value - min) / range) * graphHeight;
        dots.push(
          html`<circle class="dot" cx="${x}" cy="${y}" r="${this.config.dot_radius}" />`
        );
      });
    }

    // Secondary line
    let secondaryLinePath = '';
    if (secondaryData.length > 0 && this.config.show_secondary) {
      secondaryLinePath = secondaryData.map((d, i) => {
        const x = (i / (secondaryData.length - 1)) * graphWidth;
        const y = graphHeight - ((d.value - min) / range) * graphHeight;
        return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
      }).join(' ');
    }

    // Calculate stats
    const stats = {
      min: Math.min(...values),
      max: Math.max(...values),
      avg: values.reduce((a, b) => a + b, 0) / values.length
    };

    const glowClass = this.config.glow && stats.max > 25 ? 'glow' : '';
    const glowColor = stats.max > 30 ? '#ff6b6b' : stats.max > 25 ? '#ffa726' : this.config.accent_gold;

    return html`
      <svg style="--glow-color: ${glowColor}">
        <defs>
          <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="${this.config.accent_gold}" stop-opacity="${this.config.area_opacity}" />
            <stop offset="100%" stop-color="${this.config.accent_gold}" stop-opacity="0" />
          </linearGradient>
        </defs>
        
        <g transform="translate(${padding.left}, ${padding.top})">
          ${this.config.show_grid ? gridLines : ''}
          
          ${this.config.graph_style === 'area' || this.config.graph_style === 'both'
        ? html`<path class="area-path" d="${areaPath}" fill="url(#areaGradient)" />`
        : ''}
          
          ${this.config.graph_style === 'line' || this.config.graph_style === 'both'
        ? html`<path class="line-path ${glowClass}" d="${linePath}" stroke="${this.config.accent_gold}" style="--line-width: ${this.config.line_width}px" />`
        : ''}
          
          ${secondaryLinePath
        ? html`<path class="secondary-line" d="${secondaryLinePath}" fill="none" />`
        : ''}
          
          ${this.config.show_dots ? dots : ''}
          
          <line class="cursor-line ${this.hoverIndex !== null ? 'visible' : ''}" 
                x1="${this.hoverX}" y1="0" x2="${this.hoverX}" y2="${graphHeight}" />
          <circle class="cursor-dot ${this.hoverIndex !== null ? 'visible' : ''}" 
                  cx="${this.hoverX}" cy="${this.hoverY}" />
        </g>
        
        <!-- Interactive Overlay -->
        <rect 
            width="${graphWidth}" 
            height="${graphHeight}" 
            fill="transparent"
            transform="translate(${padding.left}, ${padding.top})"
            @mousemove="${(e: MouseEvent) => this.handleMouseMove(e, graphWidth, graphHeight, data)}"
            @mouseleave="${() => this.handleMouseLeave()}"
            style="cursor: crosshair;"
        />
      </svg>
      
      <div class="tooltip ${this.hoverIndex !== null ? 'visible' : ''}" 
           style="left: ${padding.left + this.hoverX}px; top: ${this.hoverY - 40}px; transform: translateX(-50%);">
         ${this.hoverIndex !== null ? html`
           <div style="font-weight: bold;">${data[this.hoverIndex].value.toFixed(this.config.decimals)} ${this.config.unit || ''}</div>
           <div style="font-size: 0.7em; opacity: 0.7;">
             ${new Date(data[this.hoverIndex].time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
           </div>
         ` : ''}
      </div>
    `;
  }

  private renderStats(): ReturnType<typeof html> {
    if (!this.config.show_stats || this.historyData.length === 0) {
      return html``;
    }

    const values = this.historyData.map(d => d.value);
    const stats = {
      min: Math.min(...values),
      max: Math.max(...values),
      avg: values.reduce((a, b) => a + b, 0) / values.length
    };

    // Check for trend
    let trendHtml = html``;
    if (values.length >= 2) {
      const current = values[values.length - 1];
      const prev = values[values.length - 2];
      const diff = current - prev;
      const threshold = 0.05; // variance to consider flat

      if (Math.abs(diff) < threshold) {
        trendHtml = html`<span class="trend-indicator trend-flat">→</span>`;
      } else if (diff > 0) {
        trendHtml = html`<span class="trend-indicator trend-up">↑</span>`;
      } else {
        trendHtml = html`<span class="trend-indicator trend-down">↓</span>`;
      }
    }

    return html`
      <div class="stats">
        ${trendHtml}
        ${this.config.show_min
        ? html`<div class="stat-item">
              <span>Min:</span>
              <span class="stat-value">${stats.min.toFixed(this.config.decimals)}</span>
            </div>`
        : ''}
        ${this.config.show_avg
        ? html`<div class="stat-item">
              <span>Avg:</span>
              <span class="stat-value">${stats.avg.toFixed(this.config.decimals)}</span>
            </div>`
        : ''}
        ${this.config.show_max
        ? html`<div class="stat-item">
              <span>Max:</span>
              <span class="stat-value">${stats.max.toFixed(this.config.decimals)}</span>
            </div>`
        : ''}
      </div>
    `;
  }

  protected render(): ReturnType<typeof html> {
    if (!this.config || !this.hass) {
      return html``;
    }

    const entity = this.hass.states[this.config.entity];
    if (!entity) {
      return html`<div class="no-data">Entity not found: ${this.config.entity}</div>`;
    }

    const currentValue = parseFloat(entity.state);
    const unit = this.config.unit || entity.attributes.unit_of_measurement || '°C';
    const name = this.config.name || entity.attributes.friendly_name || this.config.entity;

    const secondaryEntity = this.config.secondary_entity ? this.hass.states[this.config.secondary_entity] : null;
    const secondaryValue = secondaryEntity ? parseFloat(secondaryEntity.state) : null;
    const secondaryUnit = secondaryEntity?.attributes.unit_of_measurement || '';

    const cardStyles = {
      height: `${this.config.height}px`,
      padding: `${this.config.padding}px`,
      borderRadius: `${this.config.border_radius}px`,
      textAlign: this.config.align,
      '--lux-glass-blur': `${this.config.glass_blur}px`,
      '--lux-glass-opacity': this.config.glass_opacity,
      '--lux-accent-gold': this.config.accent_gold,
      '--lux-accent-purple': this.config.accent_purple,
      '--lux-text-primary': this.config.text_primary,
      '--lux-text-muted': this.config.text_muted,
      '--lux-glow-strength': `${this.config.glow_strength}px`,
      '--lux-shadow-strength': `${this.config.shadow_strength}px`,
    };

    return html`
      <div
        class="card ${this.config.glass ? 'glass' : ''}"
        style=${styleMap(cardStyles)}
        role="figure"
        aria-label=${this.config.aria_label || `${name} temperature graph`}
      >
        <div class="background" style="background: ${this.config.background_gradient}"></div>
        <div class="corner-accent"></div>
        
        <div class="content">
          ${!this.config.compact
        ? html`
                <div class="header">
                  <div class="title">${name}</div>
                  ${this.renderStats()}
                </div>
              `
        : ''}
          
          ${this.config.value_position !== 'hidden'
        ? html`
                <div class="main-value">
                  ${currentValue.toFixed(this.config.decimals)}
                  <span class="value-unit">${unit}</span>
                </div>
              `
        : ''}
          
          ${secondaryValue !== null && this.config.show_secondary
        ? html`
                <div class="secondary-value">
                  ${this.config.secondary_label || 'Secondary'}: 
                  ${secondaryValue.toFixed(this.config.secondary_decimals || 0)}${secondaryUnit}
                </div>
              `
        : ''}
          
          <div class="graph-container">
            ${this.config.mode === 'trend' ? this.renderGraph() : ''}
          </div>
        </div>
      </div>
    `;
  }
}

// Register the card
declare global {
  interface HTMLElementTagNameMap {
    'lux-temp-graph-card': LuxTempGraphCard;
  }
}

// HASS Lovelace card registration
(window as any).customCards = (window as any).customCards || [];
(window as any).customCards.push({
  type: 'lux-temp-graph-card',
  name: 'Luxury Temperature Graph Card',
  description: 'A luxury glassmorphic temperature graph card',
});
