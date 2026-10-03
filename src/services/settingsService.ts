export interface ResqSettings {
  // Connection
  bluetoothEnabled: boolean;
  roverConnectionState: 'connected' | 'disconnected';
  controllerConnected: boolean;
  connectionMode: 'bluetooth';

  // Sensors
  sensorsEnabled: {
    gasMq2: boolean;
    temperature: boolean;
    sound: boolean;
    obstacleHcSr04: boolean;
  };

  // Obstacle Thresholds
  obstacleCautionCm: number;
  obstacleDangerCm: number;

  // Camera
  cameraEndpoint: string;
  cameraResolution: string;

  // Alerts & Safety
  gasAlertEnabled: boolean;
  gasThresholdPpm: number;
  obstacleWarningEnabled: boolean;
  obstacleDangerAlertEnabled: boolean;
  soundAlertBuzzerEnabled: boolean;

  // Display
  density: 'comfortable' | 'compact';
  showSensorStatus: boolean;
  showBatteryStatus: boolean;
  showConnectionStatus: boolean;
  showDemoIndicator: boolean;

  // Demo Mode
  demoModeEnabled: boolean;
}

export const DEFAULT_SETTINGS: ResqSettings = {
  bluetoothEnabled: true,
  roverConnectionState: 'connected',
  controllerConnected: true,
  connectionMode: 'bluetooth',

  sensorsEnabled: {
    gasMq2: true,
    temperature: true,
    sound: true,
    obstacleHcSr04: true,
  },

  obstacleCautionCm: 30,
  obstacleDangerCm: 15,

  cameraEndpoint: '',
  cameraResolution: '1920x1080',

  gasAlertEnabled: true,
  gasThresholdPpm: 200,
  obstacleWarningEnabled: true,
  obstacleDangerAlertEnabled: true,
  soundAlertBuzzerEnabled: true,

  density: 'comfortable',
  showSensorStatus: true,
  showBatteryStatus: true,
  showConnectionStatus: true,
  showDemoIndicator: true,

  demoModeEnabled: true,
};

const SETTINGS_KEY = 'resq_x_settings_v1';

export function loadSettings(): ResqSettings {
  if (typeof window === 'undefined') return DEFAULT_SETTINGS;
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    if (!raw) return DEFAULT_SETTINGS;
    return { ...DEFAULT_SETTINGS, ...JSON.parse(raw) };
  } catch {
    return DEFAULT_SETTINGS;
  }
}

export function saveSettings(settings: ResqSettings): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  } catch {
    // ignore
  }
}
