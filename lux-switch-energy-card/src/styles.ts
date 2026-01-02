import { css } from 'lit';

export const styles = css`
  :host {
    display: block;
    --glass-blur: 14px;
    --glass-opacity: 0.08;
    /* Default theme variables if not overridden */
    --ha-card-background: rgba(255, 255, 255, 0.06); 
    --primary-text-color: rgba(255, 255, 255, 0.92);
    --secondary-text-color: rgba(255, 255, 255, 0.62);
    
    --lux-panel-color: var(--ha-card-background);
    --lux-accent-gold: #d6b25e;
    --lux-accent-purple: #6b21a8;
    --lux-text-primary: var(--primary-text-color);
    --lux-text-muted: var(--secondary-text-color);
    --lux-shadow-strength: 0.35;
    --lux-glow-strength: 0.65;
    --lux-border-radius: 24px;
  }

  .card {
    position: relative;
    background: var(--lux-panel-color);
    border-radius: var(--lux-border-radius);
    padding: 24px;
    cursor: pointer;
    transition: all 0.3s ease;
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 
      0 8px 32px rgba(0, 0, 0, calc(var(--lux-shadow-strength) * 0.5)),
      inset 0 1px 0 rgba(255, 255, 255, 0.1);
  }

  .card:hover {
    transform: translateY(-2px);
    box-shadow: 
      0 12px 40px rgba(0, 0, 0, calc(var(--lux-shadow-strength) * 0.6)),
      0 0 30px rgba(var(--accent-gold-rgb), calc(var(--lux-glow-strength) * 0.3)),
      inset 0 1px 0 rgba(255, 255, 255, 0.15);
  }

  .card.on {
    box-shadow: 
      0 8px 32px rgba(0, 0, 0, calc(var(--lux-shadow-strength) * 0.5)),
      0 0 40px rgba(var(--accent-gold-rgb), calc(var(--lux-glow-strength) * 0.4)),
      inset 0 1px 0 rgba(255, 255, 255, 0.15);
  }

  .card.off {
    opacity: 0.85;
    transform: scale(0.98);
  }

  .card.off:hover {
    opacity: 0.95;
    transform: scale(1);
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .title-section {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .icon-container {
    position: relative;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .light-icon {
    width: 32px;
    height: 32px;
    fill: var(--lux-text-muted);
    transition: all 0.3s ease;
  }

  .card.on .light-icon {
    fill: var(--lux-accent-gold);
    filter: drop-shadow(0 0 8px rgba(var(--accent-gold-rgb), 0.6));
  }

  @media (prefers-reduced-motion: no-preference) {
    .card.on .light-icon {
      animation: breathe 3s ease-in-out infinite;
    }
  }

  @keyframes breathe {
    0%, 100% { transform: scale(1); opacity: 0.9; }
    50% { transform: scale(1.05); opacity: 1; }
  }

  .name {
    font-size: 18px;
    font-weight: 600;
    color: var(--lux-text-primary);
    margin: 0;
  }

  .status-chip {
    padding: 4px 12px;
    border-radius: 16px;
    font-size: 12px;
    font-weight: 500;
    background: rgba(255, 255, 255, 0.1);
    color: var(--lux-text-muted);
  }

  .status-chip.on {
    background: rgba(var(--accent-gold-rgb), 0.2);
    color: var(--lux-accent-gold);
  }

  .status-chip.unavailable {
    background: rgba(239, 68, 68, 0.2);
    color: #ef4444;
  }

  .status-chip.stale {
    background: rgba(245, 158, 11, 0.2);
    color: #f59e0b;
  }

  .status-chip.anomaly {
    background: rgba(239, 68, 68, 0.2);
    color: #ef4444;
  }

  .energy-section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 16px;
    margin-bottom: 20px;
  }

  .energy-item {
    text-align: center;
    padding: 16px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.05);
  }

  .energy-value {
    font-size: 24px;
    font-weight: 700;
    color: var(--lux-text-primary);
    margin-bottom: 4px;
  }

  .energy-label {
    font-size: 12px;
    color: var(--lux-text-muted);
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .time-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 16px;
    background: rgba(255, 255, 255, 0.03);
    border-radius: 12px;
    margin-bottom: 16px;
  }

  .time-info {
    font-size: 14px;
    color: var(--lux-text-muted);
  }

  .time-info strong {
    color: var(--lux-text-primary);
  }

  .sparkline-container {
    height: 40px;
    margin: 16px 0;
    opacity: 0.7;
  }

  .controls-section {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
  }

  .control-button {
    padding: 8px 16px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.05);
    color: var(--lux-text-muted);
    font-size: 12px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .control-button:hover {
    background: rgba(255, 255, 255, 0.1);
    color: var(--lux-text-primary);
  }

  .control-button.active {
    background: rgba(var(--accent-gold-rgb), 0.2);
    color: var(--lux-accent-gold);
    border-color: rgba(var(--accent-gold-rgb), 0.3);
  }

  .timer-display {
    padding: 12px 16px;
    background: rgba(var(--accent-gold-rgb), 0.1);
    border-radius: 12px;
    margin: 16px 0;
    text-align: center;
  }

  .timer-text {
    font-size: 16px;
    font-weight: 600;
    color: var(--lux-accent-gold);
  }

  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    opacity: 0;
    animation: fadeIn 0.3s ease forwards;
  }

  .modal-content {
    background: var(--lux-panel-color);
    border-radius: var(--lux-border-radius);
    padding: 32px;
    max-width: 500px;
    width: 90%;
    max-height: 80vh;
    overflow-y: auto;
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    border: 1px solid rgba(255, 255, 255, 0.1);
    transform: scale(0.9);
    animation: modalIn 0.3s ease forwards;
    box-shadow: 0 20px 60px rgba(0,0,0,0.5);
  }

  @keyframes fadeIn {
    to { opacity: 1; }
  }

  @keyframes modalIn {
    to { transform: scale(1); }
  }

  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
  }

  .modal-title {
    font-size: 20px;
    font-weight: 600;
    color: var(--lux-text-primary);
    margin: 0;
  }

  .close-button {
    width: 32px;
    height: 32px;
    border: none;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    color: var(--lux-text-muted);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
  }

  .close-button:hover {
    background: rgba(255, 255, 255, 0.2);
    color: var(--lux-text-primary);
  }

  .expanded-stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 16px;
    margin-bottom: 24px;
  }

  .stat-item {
    padding: 16px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 12px;
    text-align: center;
  }

  .stat-value {
    font-size: 20px;
    font-weight: 700;
    color: var(--lux-text-primary);
    margin-bottom: 4px;
  }

  .stat-label {
    font-size: 12px;
    color: var(--lux-text-muted);
  }

  .toast {
    position: fixed;
    bottom: 24px;
    left: 50%;
    transform: translateX(-50%) translateY(100px);
    background: rgba(0, 0, 0, 0.9);
    color: white;
    padding: 16px 24px;
    border-radius: 12px;
    font-size: 14px;
    z-index: 1001;
    opacity: 0;
    animation: toastIn 0.3s ease forwards;
    pointer-events: none;
  }

  @keyframes toastIn {
    to {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
  }

  @media (max-width: 600px) {
    .card {
      padding: 16px;
    }

    .energy-section {
      grid-template-columns: repeat(2, 1fr);
    }

    .controls-section {
      justify-content: center;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .card,
    .card:hover,
    .light-icon {
      animation: none;
      transition: none;
    }
  }
`;
