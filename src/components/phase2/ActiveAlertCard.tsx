import React from 'react';
import { ArrowRight, ShieldCheck, AlertTriangle } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';

interface ActiveAlertCardProps {
  hasAlert?: boolean;
  alertTitle?: string;
  sensorSource?: string;
  timestamp?: string;
  onViewDetails?: () => void;
}

export const ActiveAlertCard: React.FC<ActiveAlertCardProps> = ({
  hasAlert = true,
  alertTitle,
  sensorSource,
  timestamp = '14:28',
  onViewDetails,
}) => {
  const { t } = useLanguage();

  const title = alertTitle || t.highGasDetected;
  const source = sensorSource || t.gasSensor;

  if (!hasAlert) {
    return (
      <div className="bg-[#0e121a]/95 border border-slate-800/80 rounded-xl p-4 shadow-lg flex flex-col justify-between h-full w-full max-w-full min-w-0 box-border select-none">
        <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800/80 shrink-0 min-w-0">
          <h2 className="text-xs font-mono-tech tracking-wider uppercase text-slate-300 font-semibold truncate">
            {t.alert}
          </h2>
          <span className="text-[10px] font-mono-tech text-emerald-400 font-medium shrink-0">
            {t.normal}
          </span>
        </div>
        <div className="flex items-center gap-2.5 my-auto min-w-0">
          <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
          <span className="text-xs text-slate-300 font-medium truncate">{t.noAlerts}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-red-950/20 border border-red-500/40 rounded-xl p-4 shadow-md shadow-red-950/20 flex flex-col justify-between h-full w-full max-w-full min-w-0 box-border select-none">
      {/* Header */}
      <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-red-900/30 shrink-0 min-w-0">
        <div className="flex items-center gap-1.5 min-w-0">
          <AlertTriangle className="w-3.5 h-3.5 text-red-400 shrink-0" />
          <h2 className="text-xs font-mono-tech tracking-wider uppercase text-red-400 font-bold truncate">
            {t.activeAlert}
          </h2>
        </div>
        <div className="flex items-center gap-1.5 shrink-0 ml-2">
          <span className="text-[10px] font-mono-tech text-red-400/80">{timestamp}</span>
          <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
        </div>
      </div>

      {/* Alert Content: Operator-friendly */}
      <div className="my-auto py-1 min-w-0">
        <h3 className="text-sm font-bold text-white tracking-wide truncate">
          {title}
        </h3>
        <p className="text-xs font-mono-tech text-red-300/80 mt-0.5 truncate">
          {source} · <span className="text-red-400 font-semibold">{t.danger}</span>
        </p>
      </div>

      {/* Button: View Details → */}
      <div className="pt-2 shrink-0 min-w-0">
        <button
          onClick={onViewDetails}
          className="w-full py-1.5 px-3 text-xs font-mono-tech tracking-wider uppercase font-semibold text-white bg-red-600 hover:bg-red-500 rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-1.5"
        >
          <span>{t.viewDetails}</span>
          <ArrowRight className="w-3.5 h-3.5 shrink-0" />
        </button>
      </div>
    </div>
  );
};
