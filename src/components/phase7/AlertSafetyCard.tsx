import React from 'react';
import { ShieldAlert, Wind, Radar, Volume2, AlertCircle } from 'lucide-react';
import { ResqSettings } from '../../services/settingsService';

interface AlertSafetyCardProps {
  settings: ResqSettings;
  onChange: (updated: Partial<ResqSettings>) => void;
}

export const AlertSafetyCard: React.FC<AlertSafetyCardProps> = ({
  settings,
  onChange,
}) => {
  return (
    <div className="bg-[#0e121a]/95 border border-slate-800/80 rounded-xl p-4 sm:p-5 shadow-lg flex flex-col justify-between h-full w-full max-w-full min-w-0 box-border select-none">
      {/* Header */}
      <div>
        <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-800/80">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-red-950/40 border border-red-800/50 text-red-400">
              <ShieldAlert className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-xs font-mono-tech tracking-wider uppercase text-slate-300 font-semibold">
                Alert & Safety
              </h3>
              <span className="text-[10px] font-mono-tech text-slate-500">
                Safety Limits & Notification Triggers
              </span>
            </div>
          </div>

          <span className="text-[10px] font-mono-tech px-2 py-0.5 rounded bg-red-950/40 border border-red-800/50 text-red-300 font-bold">
            Safety Enforced
          </span>
        </div>

        {/* Toggle Items */}
        <div className="space-y-2.5">
          {/* 1. Gas Alert */}
          <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80 flex items-center justify-between gap-3 text-xs font-mono-tech">
            <div className="flex items-center gap-2 min-w-0">
              <Wind className="w-3.5 h-3.5 text-red-400 shrink-0" />
              <div className="min-w-0">
                <span className="text-slate-200 font-semibold block truncate">
                  Gas Alert (MQ-2)
                </span>
                <span className="text-[10px] text-slate-400">
                  Threshold: <strong className="text-amber-400">{settings.gasThresholdPpm} ppm</strong>
                </span>
              </div>
            </div>

            <button
              onClick={() => onChange({ gasAlertEnabled: !settings.gasAlertEnabled })}
              className={`px-2.5 py-1 rounded text-[11px] font-mono-tech font-bold transition-colors cursor-pointer border shrink-0 ${
                settings.gasAlertEnabled
                  ? 'bg-red-950/60 text-red-300 border-red-500/50'
                  : 'bg-slate-800 text-slate-500 border-slate-700'
              }`}
            >
              {settings.gasAlertEnabled ? 'ON' : 'OFF'}
            </button>
          </div>

          {/* 2. Obstacle Warning */}
          <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80 flex items-center justify-between gap-3 text-xs font-mono-tech">
            <div className="flex items-center gap-2 min-w-0">
              <Radar className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <div className="min-w-0">
                <span className="text-slate-200 font-semibold block truncate">
                  Obstacle Caution Warning
                </span>
                <span className="text-[10px] text-slate-400">
                  Trigger caution at {settings.obstacleCautionCm} cm
                </span>
              </div>
            </div>

            <button
              onClick={() =>
                onChange({
                  obstacleWarningEnabled: !settings.obstacleWarningEnabled,
                })
              }
              className={`px-2.5 py-1 rounded text-[11px] font-mono-tech font-bold transition-colors cursor-pointer border shrink-0 ${
                settings.obstacleWarningEnabled
                  ? 'bg-amber-950/60 text-amber-300 border-amber-500/40'
                  : 'bg-slate-800 text-slate-500 border-slate-700'
              }`}
            >
              {settings.obstacleWarningEnabled ? 'ON' : 'OFF'}
            </button>
          </div>

          {/* 3. Obstacle Danger Alert */}
          <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80 flex items-center justify-between gap-3 text-xs font-mono-tech">
            <div className="flex items-center gap-2 min-w-0">
              <AlertCircle className="w-3.5 h-3.5 text-red-400 shrink-0" />
              <div className="min-w-0">
                <span className="text-slate-200 font-semibold block truncate">
                  Obstacle Danger Alert
                </span>
                <span className="text-[10px] text-slate-400">
                  Critical collision trigger at {settings.obstacleDangerCm} cm
                </span>
              </div>
            </div>

            <button
              onClick={() =>
                onChange({
                  obstacleDangerAlertEnabled: !settings.obstacleDangerAlertEnabled,
                })
              }
              className={`px-2.5 py-1 rounded text-[11px] font-mono-tech font-bold transition-colors cursor-pointer border shrink-0 ${
                settings.obstacleDangerAlertEnabled
                  ? 'bg-red-950/60 text-red-300 border-red-500/50'
                  : 'bg-slate-800 text-slate-500 border-slate-700'
              }`}
            >
              {settings.obstacleDangerAlertEnabled ? 'ON' : 'OFF'}
            </button>
          </div>

          {/* 4. Sound Alert / Buzzer */}
          <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80 flex items-center justify-between gap-3 text-xs font-mono-tech">
            <div className="flex items-center gap-2 min-w-0">
              <Volume2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <div className="min-w-0">
                <span className="text-slate-200 font-semibold block truncate">
                  Acoustic Buzzer Alarm
                </span>
                <span className="text-[10px] text-slate-400">
                  Chassis piezo sounder for warnings
                </span>
              </div>
            </div>

            <button
              onClick={() =>
                onChange({
                  soundAlertBuzzerEnabled: !settings.soundAlertBuzzerEnabled,
                })
              }
              className={`px-2.5 py-1 rounded text-[11px] font-mono-tech font-bold transition-colors cursor-pointer border shrink-0 ${
                settings.soundAlertBuzzerEnabled
                  ? 'bg-cyan-950/60 text-cyan-300 border-cyan-500/40'
                  : 'bg-slate-800 text-slate-500 border-slate-700'
              }`}
            >
              {settings.soundAlertBuzzerEnabled ? 'ON' : 'OFF'}
            </button>
          </div>
        </div>
      </div>

      <div className="pt-3 text-[10px] font-mono-tech text-slate-500 border-t border-slate-800/60 shrink-0">
        Active alarms trigger dashboard banners and event entries in the Logs.
      </div>
    </div>
  );
};
