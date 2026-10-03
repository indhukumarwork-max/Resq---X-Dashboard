import React, { useState, useEffect } from 'react';
import {
  Bluetooth,
  BatteryMedium,
  Clock,
  User,
  Zap,
  Activity,
  AlertTriangle,
  ArrowLeft,
} from 'lucide-react';
import { TemperatureCard } from './TemperatureCard';
import { GasSensorCard } from './GasSensorCard';
import { SoundSensorCard } from './SoundSensorCard';
import { SensorHardwareStatus } from './SensorHardwareStatus';
import { INITIAL_SENSOR_STATE, SensorSystemState } from '../../services/sensorService';
import { LanguageSelector } from '../common/LanguageSelector';
import { useLanguage } from '../../i18n/LanguageContext';

interface SensorsPageProps {
  onReturnToHome: () => void;
  onNavigateToObstacle?: () => void;
}

export const SensorsPage: React.FC<SensorsPageProps> = ({
  onReturnToHome,
  onNavigateToObstacle,
}) => {
  const { t } = useLanguage();
  const [sensorState, setSensorState] = useState<SensorSystemState>(INITIAL_SENSOR_STATE);
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString('en-US', {
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleToggleGasSimulation = () => {
    setSensorState((prev) => {
      const isCurrentlyHigh = prev.gasMq2.currentValue >= prev.gasMq2.threshold;
      if (isCurrentlyHigh) {
        return {
          ...prev,
          gasMq2: {
            ...prev.gasMq2,
            currentValue: 145,
            status: 'normal',
            statusLabel: 'NORMAL',
            history: [180, 165, 155, 150, 148, 146, 145],
          },
          activeAlert: null,
        };
      } else {
        return {
          ...prev,
          gasMq2: {
            ...prev.gasMq2,
            currentValue: 248,
            status: 'alert',
            statusLabel: 'HIGH',
            history: [120, 145, 175, 195, 210, 235, 248],
          },
          activeAlert: {
            hasAlert: true,
            sensorName: 'MQ-2 Gas Sensor',
            message: 'High Gas Level Detected (Exceeded 200 ppm threshold)',
            value: '248 ppm',
            timestamp: '14:28',
          },
        };
      }
    });
  };

  const isGasHigh = sensorState.gasMq2.currentValue >= sensorState.gasMq2.threshold;

  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden bg-[#07090d]">
      {/* 1. Header */}
      <header className="h-14 px-4 sm:px-6 border-b border-slate-800/80 bg-[#080b11]/95 backdrop-blur-md flex items-center justify-between select-none shrink-0 z-20">
        <div className="flex items-center gap-3">
          <button
            onClick={onReturnToHome}
            className="p-1.5 -ml-1 text-slate-400 hover:text-white rounded-lg hover:bg-slate-900 transition-colors cursor-pointer"
            title="Return to Home Dashboard"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>

          <div className="font-brand text-lg font-bold tracking-wider text-white flex items-center">
            <span>RESQ</span>
            <span className="text-slate-500 font-light mx-0.5">-</span>
            <span className="text-red-500">X</span>
          </div>

          <span className="text-slate-700 hidden sm:inline">|</span>

          <div className="hidden sm:flex items-center gap-2">
            <span className="text-xs font-mono-tech text-white font-semibold uppercase tracking-wider">
              {t.sensorsTitle}
            </span>
            <span className="text-slate-600">·</span>
            <span className="text-xs font-mono-tech text-slate-400">
              {t.sensorsSubtitle}
            </span>
          </div>
        </div>

        {/* Right Header Readouts */}
        <div className="flex items-center gap-2.5 sm:gap-3.5 text-xs font-mono-tech text-slate-400">
          <LanguageSelector />

          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900/60 border border-slate-800">
            <Bluetooth className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-slate-300 font-medium hidden md:inline">
              {t.bluetoothConnected}
            </span>
          </div>

          <div className="flex items-center gap-2 px-2.5 py-1 rounded bg-slate-900/60 border border-slate-800">
            <BatteryMedium className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-slate-200 font-semibold">68%</span>
            <span className="text-slate-600 font-normal">·</span>
            <span className="text-slate-400 flex items-center gap-0.5">
              <Zap className="w-3 h-3 text-amber-400" />
              11.8 V
            </span>
          </div>

          <div className="hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900/60 border border-slate-800 text-slate-300">
            <Clock className="w-3.5 h-3.5 text-slate-500" />
            <span className="tabular-nums tracking-wider">{currentTime || '14:28:00'}</span>
          </div>

          <div
            className="w-7 h-7 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300"
            title="Operator Profile"
          >
            <User className="w-3.5 h-3.5" />
          </div>
        </div>
      </header>

      {/* 2. Main Content Viewport */}
      <main
        className="flex-1 overflow-y-auto p-3.5 sm:p-5 max-w-7xl w-full mx-auto space-y-4"
        role="main"
        aria-label="Sensors Telemetry"
      >
        {/* Sub-Header Banner */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-[#0e121a] p-3 sm:px-4 rounded-xl border border-slate-800/80 gap-2">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-cyan-950/40 border border-cyan-800/40 text-cyan-400">
              <Activity className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-mono-tech font-bold uppercase tracking-wider text-slate-200 flex items-center gap-2">
                <span>{t.sensorsTitle}</span>
                <span className="text-slate-600">·</span>
                <span className="text-amber-400 font-semibold text-[11px] px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30">
                  {t.demoModeBadge}
                </span>
              </div>
              <p className="text-[11px] font-mono-tech text-slate-400 mt-0.5">
                {t.demoDescription}
              </p>
            </div>
          </div>

          <div className="text-[11px] font-mono-tech text-slate-400 flex items-center gap-2">
            <span>Sampling: 1.0 Hz</span>
            <span className="text-slate-600">·</span>
            <span className="text-cyan-400">Atmospheric Bus Active</span>
          </div>
        </div>

        {/* Active Alert Banner */}
        {isGasHigh && (
          <div className="p-3 sm:p-4 rounded-xl bg-red-950/30 border border-red-500/50 shadow-lg shadow-red-950/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-red-900/50 border border-red-700/60 flex items-center justify-center text-red-400 shrink-0">
                <AlertTriangle className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono-tech font-bold uppercase tracking-wider text-red-400">
                    {t.highGasDetected}
                  </span>
                  <span className="text-[10px] font-mono-tech px-1.5 py-0.2 rounded bg-red-950 border border-red-800 text-red-300">
                    {t.critical}
                  </span>
                </div>
                <p className="text-xs font-mono-tech text-red-200/90 mt-0.5">
                  {t.mq2Sensor}: {sensorState.gasMq2.currentValue} ppm ({t.threshold}: {sensorState.gasMq2.threshold} ppm)
                </p>
              </div>
            </div>

            <div className="text-right text-[11px] font-mono-tech text-red-300 shrink-0">
              Trip: 14:28:12
            </div>
          </div>
        )}

        {/* 3 Dedicated Active Sensor Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
          <TemperatureCard data={sensorState.temperature} />
          <GasSensorCard data={sensorState.gasMq2} />
          <SoundSensorCard data={sensorState.sound} />
        </div>

        {/* Bottom Hardware Status */}
        <SensorHardwareStatus
          onNavigateToObstacle={onNavigateToObstacle}
          isGasHigh={isGasHigh}
          onToggleGasSimulation={handleToggleGasSimulation}
        />
      </main>
    </div>
  );
};
