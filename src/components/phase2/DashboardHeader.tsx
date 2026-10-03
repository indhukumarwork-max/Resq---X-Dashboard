import React, { useState, useEffect } from 'react';
import { Bluetooth, BatteryMedium, Clock, User, Zap, Menu } from 'lucide-react';
import { LanguageSelector } from '../common/LanguageSelector';
import { useLanguage } from '../../i18n/LanguageContext';

interface DashboardHeaderProps {
  batteryPercent?: number;
  batteryVoltage?: number;
  isBluetoothConnected?: boolean;
  onOpenMobileMenu?: () => void;
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  batteryPercent = 68,
  batteryVoltage = 11.8,
  isBluetoothConnected = true,
  onOpenMobileMenu,
}) => {
  const { t } = useLanguage();
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

  return (
    <header className="h-14 px-4 sm:px-6 border-b border-slate-800/60 bg-[#080b11]/90 backdrop-blur-md flex items-center justify-between select-none shrink-0 z-20">
      {/* Left: Mobile Menu + RESQ-X Brand */}
      <div className="flex items-center gap-3">
        {onOpenMobileMenu && (
          <button
            onClick={onOpenMobileMenu}
            className="p-1.5 -ml-1 text-slate-400 hover:text-white rounded-lg md:hidden cursor-pointer"
            aria-label="Open navigation menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        )}

        <div className="font-brand text-lg font-bold tracking-wider text-white flex items-center">
          <span>RESQ</span>
          <span className="text-slate-500 font-light mx-0.5">-</span>
          <span className="text-red-500">X</span>
        </div>

        <span className="text-slate-700 hidden sm:inline">|</span>

        <span className="text-xs font-mono-tech text-slate-400 hidden sm:inline">
          {t.searchRescue}
        </span>
      </div>

      {/* Right: Language Selector, Bluetooth, Battery, Voltage, Time, Profile */}
      <div className="flex items-center gap-2.5 sm:gap-3.5 text-xs font-mono-tech text-slate-400">
        {/* Language Selector */}
        <LanguageSelector />

        {/* Bluetooth status */}
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900/60 border border-slate-800/80">
          <Bluetooth className="w-3.5 h-3.5 text-cyan-400" />
          <span className="text-slate-300 font-medium hidden lg:inline">
            {isBluetoothConnected ? t.bluetoothConnected : t.bluetoothDisconnected}
          </span>
        </div>

        {/* Battery & Voltage */}
        <div className="flex items-center gap-2 px-2.5 py-1 rounded-md bg-slate-900/60 border border-slate-800/80">
          <BatteryMedium className="w-3.5 h-3.5 text-emerald-400" />
          <span className="text-slate-200 font-semibold">{batteryPercent}%</span>
          <span className="text-slate-600 font-normal">·</span>
          <span className="text-slate-400 flex items-center gap-0.5">
            <Zap className="w-3 h-3 text-amber-400" />
            {batteryVoltage} V
          </span>
        </div>

        {/* Live Clock */}
        <div className="hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900/60 border border-slate-800/80 text-slate-300">
          <Clock className="w-3.5 h-3.5 text-slate-500" />
          <span className="tabular-nums tracking-wider">{currentTime || '14:28:00'}</span>
        </div>

        {/* Profile */}
        <div
          className="w-7 h-7 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300"
          title="Operator Profile"
        >
          <User className="w-3.5 h-3.5" />
        </div>
      </div>
    </header>
  );
};
