import React from 'react';
import { useLanguage } from '../../i18n/LanguageContext';

interface RoverStatusCardProps {
  roverState?: string;
  batteryPercent?: number;
  batteryVoltage?: number;
  isRoverConnected?: boolean;
}

export const RoverStatusCard: React.FC<RoverStatusCardProps> = ({
  roverState = 'Stopped',
  batteryPercent = 68,
  batteryVoltage = 11.8,
  isRoverConnected = true,
}) => {
  const { t } = useLanguage();

  const getTranslatedState = (state: string) => {
    if (state.toLowerCase().includes('stop')) return t.stateStopped;
    if (state.toLowerCase().includes('mov')) return t.stateMoving;
    return t.stateStandby;
  };

  return (
    <div className="bg-[#0e121a]/95 border border-slate-800/80 rounded-xl p-4 shadow-lg flex flex-col justify-between h-full w-full max-w-full min-w-0 box-border select-none">
      {/* Header */}
      <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800/80 shrink-0 min-w-0">
        <h2 className="text-xs font-mono-tech tracking-wider uppercase text-slate-300 font-semibold truncate">
          {t.roverStatus}
        </h2>
        <div className="flex items-center gap-1.5 text-xs font-mono-tech text-emerald-400 font-medium shrink-0 ml-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>{isRoverConnected ? t.bluetoothConnected : t.bluetoothDisconnected}</span>
        </div>
      </div>

      {/* Clean Data Rows */}
      <div className="space-y-1.5 sm:space-y-2 text-xs font-mono-tech my-auto min-w-0">
        {/* Connection */}
        <div className="flex items-center justify-between py-0.5 min-w-0">
          <span className="text-slate-400 truncate">{t.connection}</span>
          <span className="text-slate-200 font-medium shrink-0 ml-2">Bluetooth LE</span>
        </div>

        {/* Controller */}
        <div className="flex items-center justify-between py-0.5 min-w-0">
          <span className="text-slate-400 truncate">{t.controller}</span>
          <span className="text-emerald-400 font-medium shrink-0 ml-2">{t.bluetoothConnected}</span>
        </div>

        {/* State */}
        <div className="flex items-center justify-between py-0.5 min-w-0">
          <span className="text-slate-400 truncate">{t.roverState}</span>
          <span className="text-slate-200 font-semibold shrink-0 ml-2">
            {getTranslatedState(roverState)}
          </span>
        </div>

        {/* Battery with contained progress bar */}
        <div className="py-0.5 min-w-0">
          <div className="flex items-center justify-between mb-1 min-w-0">
            <span className="text-slate-400 truncate">{t.battery}</span>
            <span className="text-slate-200 font-bold tabular-nums shrink-0 ml-2">{batteryPercent}%</span>
          </div>
          <div className="w-full h-1.5 bg-slate-800/90 rounded-full overflow-hidden">
            <div
              className="h-full bg-emerald-500 rounded-full transition-all duration-300"
              style={{ width: `${batteryPercent}%` }}
            />
          </div>
        </div>

        {/* Voltage */}
        <div className="flex items-center justify-between py-0.5 min-w-0">
          <span className="text-slate-400 truncate">{t.voltage}</span>
          <span className="text-slate-200 font-semibold tabular-nums shrink-0 ml-2">{batteryVoltage} V</span>
        </div>
      </div>
    </div>
  );
};
