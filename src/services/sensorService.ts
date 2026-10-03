export type SensorStatusLevel = 'normal' | 'warning' | 'alert';

export interface SensorReading {
  id: string;
  name: string;
  hardwareModel: string;
  currentValue: number;
  unit: string;
  threshold: number;
  minRange: number;
  maxRange: number;
  status: SensorStatusLevel;
  statusLabel: string;
  history: number[]; // historical trend data points
  lastUpdated: string;
  hardwareConnection: 'demo' | 'separate_module' | 'connected';
}

export interface SensorSystemState {
  temperature: SensorReading;
  gasMq2: SensorReading;
  sound: SensorReading;
  isDemoData: boolean;
  activeAlert: {
    hasAlert: boolean;
    sensorName: string;
    message: string;
    value: string;
    timestamp: string;
  } | null;
}

export const INITIAL_SENSOR_STATE: SensorSystemState = {
  isDemoData: true,
  temperature: {
    id: 'temp_ambient',
    name: 'Ambient Temperature',
    hardwareModel: 'DHT22 / DS18B20',
    currentValue: 32.4,
    unit: '°C',
    threshold: 45.0,
    minRange: 0,
    maxRange: 60,
    status: 'normal',
    statusLabel: 'NORMAL',
    history: [30.8, 31.2, 31.5, 31.7, 32.0, 32.2, 32.4],
    lastUpdated: '14:28:15',
    hardwareConnection: 'demo',
  },
  gasMq2: {
    id: 'gas_mq2',
    name: 'MQ-2 Gas / Smoke',
    hardwareModel: 'MQ-2 Analog',
    currentValue: 248,
    unit: 'ppm',
    threshold: 200,
    minRange: 0,
    maxRange: 500,
    status: 'alert',
    statusLabel: 'HIGH',
    history: [120, 145, 175, 195, 210, 235, 248],
    lastUpdated: '14:28:12',
    hardwareConnection: 'demo',
  },
  sound: {
    id: 'sound_ambient',
    name: 'Acoustic Sound Level',
    hardwareModel: 'Analog Mic Module',
    currentValue: 62,
    unit: 'dB',
    threshold: 85,
    minRange: 0,
    maxRange: 120,
    status: 'normal',
    statusLabel: 'NORMAL',
    history: [54, 58, 65, 59, 64, 60, 62],
    lastUpdated: '14:28:14',
    hardwareConnection: 'demo',
  },
  activeAlert: {
    hasAlert: true,
    sensorName: 'MQ-2 Gas Sensor',
    message: 'High Gas Level Detected (Exceeded 200 ppm threshold)',
    value: '248 ppm',
    timestamp: '14:28',
  },
};
