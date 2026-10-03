import React, { useState } from 'react';
import { Sidebar, NavPageId } from './Sidebar';
import { DashboardHeader } from './DashboardHeader';
import { RoverOverviewCard } from './RoverOverviewCard';
import { RoverStatusCard } from './RoverStatusCard';
import { QuickControlsCard } from './QuickControlsCard';
import { SensorSummaryCard } from './SensorSummaryCard';
import { ActiveAlertCard } from './ActiveAlertCard';
import { ObstacleDetectionCard } from './ObstacleDetectionCard';
import { CameraStatusCard } from './CameraStatusCard';
import { PagePlaceholder } from './PagePlaceholder';
import { LiveCameraPage } from '../phase3/LiveCameraPage';
import { SensorsPage } from '../phase4/SensorsPage';
import { ObstaclePage } from '../phase5/ObstaclePage';
import { LogsPage } from '../phase6/LogsPage';
import { SettingsPage } from '../phase7/SettingsPage';

interface HomeDashboardProps {
  onReturnToSplash: () => void;
}

export const HomeDashboard: React.FC<HomeDashboardProps> = ({ onReturnToSplash }) => {
  const [activePage, setActivePage] = useState<NavPageId>('home');
  const [hasActiveAlert, setHasActiveAlert] = useState<boolean>(true);
  const [isLightOn, setIsLightOn] = useState<boolean>(true);
  const [isBuzzerOn, setIsBuzzerOn] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  return (
    <div className="w-screen h-screen flex bg-[#07090d] text-slate-100 overflow-hidden font-sans">
      {/* 1. Left Sidebar (Fixed on desktop, drawer on mobile) */}
      <Sidebar
        activePage={activePage}
        onNavigate={(page) => setActivePage(page)}
        onReturnToSplash={onReturnToSplash}
        hasActiveAlert={hasActiveAlert}
        isMobileOpen={isMobileMenuOpen}
        onCloseMobile={() => setIsMobileMenuOpen(false)}
      />

      {/* 2. Main Content Viewport */}
      {activePage === 'home' ? (
        <div className="flex-1 flex flex-col h-full overflow-hidden bg-[#07090d] min-w-0">
          {/* Top Header */}
          <DashboardHeader
            batteryPercent={68}
            batteryVoltage={11.8}
            isBluetoothConnected={true}
            onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
          />

          {/* Clean, Balanced 3-Column Responsive Grid Viewport */}
          <main
            className="flex-1 h-[calc(100vh-3.5rem)] overflow-y-auto lg:overflow-hidden p-3.5 sm:p-4 max-w-[1600px] w-full mx-auto min-w-0 box-border"
            role="main"
            aria-label="RESQ-X Home Dashboard"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)_minmax(280px,0.95fr)] xl:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)_minmax(300px,0.95fr)] gap-3.5 h-full w-full min-w-0">
              {/* LEFT COLUMN: Large Rover Overview card */}
              <div className="md:col-span-2 lg:col-span-1 h-full min-h-[280px] lg:min-h-0 min-w-0 w-full">
                <RoverOverviewCard isLightOn={isLightOn} />
              </div>

              {/* CENTER COLUMN: Rover Status, Quick Controls, Sensor Summary */}
              <div className="md:col-span-1 lg:col-span-1 h-full min-w-0 w-full flex flex-col gap-3.5">
                <div className="flex-1 min-h-[110px] min-w-0 w-full">
                  <RoverStatusCard
                    roverState="Stopped"
                    batteryPercent={68}
                    batteryVoltage={11.8}
                    isRoverConnected={true}
                  />
                </div>

                <div className="flex-1 min-h-[110px] min-w-0 w-full">
                  <QuickControlsCard
                    initialLightState={isLightOn}
                    initialBuzzerState={isBuzzerOn}
                    isCameraActive={false}
                    onLightToggle={(state) => setIsLightOn(state)}
                    onBuzzerToggle={(state) => setIsBuzzerOn(state)}
                  />
                </div>

                <div className="flex-1 min-h-[110px] min-w-0 w-full">
                  <SensorSummaryCard onViewSensors={() => setActivePage('sensors')} />
                </div>
              </div>

              {/* RIGHT COLUMN: Alert, Obstacle Detection, Camera Status */}
              <div className="md:col-span-1 lg:col-span-1 h-full min-w-0 w-full flex flex-col gap-3.5">
                <div className="flex-1 min-h-[110px] min-w-0 w-full">
                  <ActiveAlertCard
                    hasAlert={hasActiveAlert}
                    timestamp="14:28"
                    onViewDetails={() => setActivePage('sensors')}
                  />
                </div>

                <div className="flex-1 min-h-[110px] min-w-0 w-full">
                  <ObstacleDetectionCard
                    distanceCm={42}
                    onViewDetails={() => setActivePage('obstacle')}
                  />
                </div>

                <div className="flex-1 min-h-[110px] min-w-0 w-full">
                  <CameraStatusCard
                    isCameraActive={false}
                    onOpenLiveCamera={() => setActivePage('camera')}
                  />
                </div>
              </div>
            </div>
          </main>
        </div>
      ) : activePage === 'camera' ? (
        /* Phase 3: Dedicated Live Camera Page */
        <LiveCameraPage
          initialLedState={isLightOn}
          onLedChange={(state) => setIsLightOn(state)}
        />
      ) : activePage === 'sensors' ? (
        /* Phase 4: Dedicated Sensors Telemetry Page */
        <SensorsPage
          onReturnToHome={() => setActivePage('home')}
          onNavigateToObstacle={() => setActivePage('obstacle')}
        />
      ) : activePage === 'obstacle' ? (
        /* Phase 5: Dedicated Obstacle Detection Page */
        <ObstaclePage onReturnToHome={() => setActivePage('home')} />
      ) : activePage === 'logs' ? (
        /* Phase 6: Dedicated Logs Event History Page */
        <LogsPage onReturnToHome={() => setActivePage('home')} />
      ) : activePage === 'settings' ? (
        /* Phase 7: Dedicated Settings Page */
        <SettingsPage onReturnToHome={() => setActivePage('home')} />
      ) : (
        /* Standby Placeholders for Future Modules */
        <div className="flex-1 flex flex-col h-full overflow-hidden bg-[#07090d]">
          <DashboardHeader
            batteryPercent={68}
            batteryVoltage={11.8}
            isBluetoothConnected={true}
            onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
          />
          <PagePlaceholder
            pageId={activePage}
            onReturnToHome={() => setActivePage('home')}
          />
        </div>
      )}
    </div>
  );
};
