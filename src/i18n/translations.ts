export type SupportedLanguage = 'en' | 'ta' | 'hi';

export interface Translations {
  // Brand & Nav
  appName: string;
  tagline: string;
  searchRescue: string;
  navHome: string;
  navCamera: string;
  navSensors: string;
  navObstacle: string;
  navLogs: string;
  navSettings: string;
  openingScreen: string;

  // Header Telemetry
  bluetoothConnected: string;
  bluetoothDisconnected: string;
  battery: string;
  voltage: string;
  controller: string;

  // Rover Status
  roverTitle: string;
  roverSubtitle: string;
  roverStatus: string;
  roverState: string;
  stateStopped: string;
  stateMoving: string;
  stateStandby: string;
  connection: string;
  signalQuality: string;

  // Quick Controls
  quickControls: string;
  searchlight: string;
  buzzer: string;
  on: string;
  off: string;

  // Alerts
  alert: string;
  activeAlert: string;
  noAlerts: string;
  highGasDetected: string;
  gasSensor: string;
  viewDetails: string;
  critical: string;
  warning: string;
  normal: string;
  safe: string;
  caution: string;
  danger: string;

  // Obstacle Detection
  obstacleDetection: string;
  obstacleSubtitle: string;
  distance: string;
  clear: string;
  obstacleDetected: string;
  frontObstacle: string;
  rangeBumper: string;
  rangeLimit: string;
  pathClear: string;
  objectClose: string;
  immediateRisk: string;

  // Sensors
  sensorsTitle: string;
  sensorsSubtitle: string;
  temperature: string;
  gasLevel: string;
  soundLevel: string;
  threshold: string;
  viewSensors: string;

  // Camera
  cameraTitle: string;
  cameraSubtitle: string;
  cameraStatus: string;
  roverCamera: string;
  deviceCamera: string;
  roverCameraOffline: string;
  roverCameraUnavailable: string;
  retryConnection: string;
  cameraSettings: string;
  openLiveCamera: string;
  live: string;
  snapshot: string;
  fullScreen: string;
  enableCamera: string;
  stopCamera: string;

  // Logs
  logsTitle: string;
  logsSubtitle: string;
  totalEvents: string;
  alertsCount: string;
  warningsCount: string;
  systemEvents: string;
  searchLogs: string;
  downloadLogData: string;
  downloadFiltered: string;
  downloadAll: string;
  clearLogs: string;
  simulateEvent: string;
  time: string;
  type: string;
  event: string;
  source: string;
  status: string;

  // Settings
  settingsTitle: string;
  settingsSubtitle: string;
  connectionSettings: string;
  sensorConfig: string;
  safetyAlerts: string;
  cameraConfig: string;
  displayPreferences: string;
  saveSettings: string;
  resetDefaults: string;
  testConnection: string;
  testCamera: string;
  settingsSaved: string;

  // Additional camera & sensor labels
  mobileCamera: string;
  esp32Cam: string;
  gasMq2: string;
  mq2Sensor: string;
  demoModeBadge: string;
  demoDescription: string;
}

export const translations: Record<SupportedLanguage, Translations> = {
  en: {
    appName: 'RESQ-X',
    tagline: 'SEARCH & RESCUE ROVER',
    searchRescue: 'SEARCH & RESCUE',
    navHome: 'Home',
    navCamera: 'Live Camera',
    navSensors: 'Sensors',
    navObstacle: 'Obstacle Detection',
    navLogs: 'Logs',
    navSettings: 'Settings',
    openingScreen: 'Opening Screen',

    bluetoothConnected: 'Connected',
    bluetoothDisconnected: 'Disconnected',
    battery: 'Battery',
    voltage: 'Voltage',
    controller: 'Controller',

    roverTitle: 'RESQ-X',
    roverSubtitle: '4WD Search & Rescue Rover',
    roverStatus: 'Rover Status',
    roverState: 'Rover State',
    stateStopped: 'Stopped',
    stateMoving: 'Moving',
    stateStandby: 'Standby',
    connection: 'Connection',
    signalQuality: 'Signal',

    quickControls: 'Quick Controls',
    searchlight: 'Searchlight',
    buzzer: 'Alarm Buzzer',
    on: 'ON',
    off: 'OFF',

    alert: 'Alert',
    activeAlert: 'Active Alert',
    noAlerts: 'No Active Alerts',
    highGasDetected: 'High Gas Level Detected',
    gasSensor: 'Gas Sensor',
    viewDetails: 'View Details',
    critical: 'DANGER',
    warning: 'WARNING',
    normal: 'NORMAL',
    safe: 'CLEAR',
    caution: 'CAUTION',
    danger: 'DANGER',

    obstacleDetection: 'Obstacle Detection',
    obstacleSubtitle: 'Front proximity monitoring',
    distance: 'Distance',
    clear: 'CLEAR',
    obstacleDetected: 'DANGER',
    frontObstacle: 'The path ahead is clear.',
    rangeBumper: '0 cm',
    rangeLimit: '80 cm',
    pathClear: 'Safe distance.',
    objectClose: 'Object getting close.',
    immediateRisk: 'Immediate obstacle risk.',

    sensorsTitle: 'Sensors',
    sensorsSubtitle: 'Live rover environment monitoring',
    temperature: 'Temperature',
    gasLevel: 'Gas Level',
    soundLevel: 'Sound Level',
    threshold: 'Limit',
    viewSensors: 'View Sensors',

    cameraTitle: 'Live Camera',
    cameraSubtitle: 'Real-time video feed',
    cameraStatus: 'Camera Status',
    roverCamera: 'Rover Camera',
    deviceCamera: 'Device Camera',
    roverCameraOffline: 'Rover Camera Offline',
    roverCameraUnavailable: 'The rover camera is currently unavailable.',
    retryConnection: 'Retry Connection',
    cameraSettings: 'Camera Settings',
    openLiveCamera: 'Open Live Camera',
    live: 'LIVE',
    snapshot: 'Snapshot',
    fullScreen: 'Full Screen',
    enableCamera: 'Enable Camera',
    stopCamera: 'Stop Camera',

    logsTitle: 'Logs',
    logsSubtitle: 'Rover activity and safety event record',
    totalEvents: 'Total Events',
    alertsCount: 'Alerts',
    warningsCount: 'Warnings',
    systemEvents: 'System',
    searchLogs: 'Search logs...',
    downloadLogData: 'Download Log Data',
    downloadFiltered: 'Filtered Logs (CSV)',
    downloadAll: 'All Logs (CSV)',
    clearLogs: 'Clear Logs',
    simulateEvent: 'Simulate Event',
    time: 'Time',
    type: 'Type',
    event: 'Event',
    source: 'Source',
    status: 'Status',

    settingsTitle: 'Settings',
    settingsSubtitle: 'Configure rover connection, sensors, and safety alerts',
    connectionSettings: 'Connection',
    sensorConfig: 'Sensors',
    safetyAlerts: 'Safety & Alerts',
    cameraConfig: 'Camera',
    displayPreferences: 'Display',
    saveSettings: 'Save Settings',
    resetDefaults: 'Reset to Defaults',
    testConnection: 'Test Connection',
    testCamera: 'Test Camera',
    settingsSaved: 'Settings saved successfully.',
    mobileCamera: 'Mobile Camera',
    esp32Cam: 'ESP32-CAM',
    gasMq2: 'MQ-2 Gas Sensor',
    mq2Sensor: 'MQ-2 Gas Sensor',
    demoModeBadge: 'Simulation Active',
    demoDescription: 'Simulated atmospheric telemetry streaming to dashboard',
  },

  ta: {
    appName: 'RESQ-X',
    tagline: 'மீட்பு மற்றும் தேடல் ரோவர்',
    searchRescue: 'மீட்பு பணி',
    navHome: 'முகப்பு',
    navCamera: 'நேரடி கேமரா',
    navSensors: 'சென்சார்கள்',
    navObstacle: 'தடையறிதல்',
    navLogs: 'பதிவுகள்',
    navSettings: 'அமைப்புகள்',
    openingScreen: 'தொடக்க திரை',

    bluetoothConnected: 'இணைக்கப்பட்டது',
    bluetoothDisconnected: 'துண்டிக்கப்பட்டது',
    battery: 'பேட்டரி',
    voltage: 'மின்னழுத்தம்',
    controller: 'கன்ட்ரோலர்',

    roverTitle: 'RESQ-X',
    roverSubtitle: '4WD தேடல் & மீட்பு ரோவர்',
    roverStatus: 'ரோவர் நிலை',
    roverState: 'இயக்க நிலை',
    stateStopped: 'நிறுத்தப்பட்டது',
    stateMoving: 'நகர்கிறது',
    stateStandby: 'தயார் நிலை',
    connection: 'இணைப்பு',
    signalQuality: 'சமிக்ஞை',

    quickControls: 'விரைவு கட்டுப்பாடுகள்',
    searchlight: 'தேடல் விளக்கு',
    buzzer: 'ஒலிப்பான்',
    on: 'இயக்கு',
    off: 'அணை',

    alert: 'எச்சரிக்கை',
    activeAlert: 'செயலில் உள்ள எச்சரிக்கை',
    noAlerts: 'எச்சரிக்கைகள் இல்லை',
    highGasDetected: 'அதிக வாயு கசிவு கண்டறியப்பட்டது',
    gasSensor: 'வாயு சென்சார்',
    viewDetails: 'விவரங்களை காண்க',
    critical: 'ஆபத்து',
    warning: 'எச்சரிக்கை',
    normal: 'இயல்பு',
    safe: 'தடை இல்லை',
    caution: 'கவனம்',
    danger: 'ஆபத்து',

    obstacleDetection: 'தடையறிதல்',
    obstacleSubtitle: 'முன்பக்க தடை கண்காணிப்பு',
    distance: 'தூரம்',
    clear: 'தடை இல்லை',
    obstacleDetected: 'ஆபத்து',
    frontObstacle: 'முன்பக்கம் பாதை தெளிவாக உள்ளது.',
    rangeBumper: '0 செ.மீ',
    rangeLimit: '80 செ.மீ',
    pathClear: 'பாதுகாப்பான தூரம்.',
    objectClose: 'பொருள் அருகில் வருகிறது.',
    immediateRisk: 'உடனடி மோதல் ஆபத்து.',

    sensorsTitle: 'சென்சார்கள்',
    sensorsSubtitle: 'நேரடி ரோவர் சென்சார் கண்காணிப்பு',
    temperature: 'வெப்பநிலை',
    gasLevel: 'வாயு அளவு',
    soundLevel: 'ஒலி அளவு',
    threshold: 'வரம்பு',
    viewSensors: 'சென்சார்களை காண்க',

    cameraTitle: 'நேரடி கேமரா',
    cameraSubtitle: 'நேரடி வீடியோ காட்சி',
    cameraStatus: 'கேமரா நிலை',
    roverCamera: 'ரோவர் கேமரா',
    deviceCamera: 'சாதன கேமரா',
    roverCameraOffline: 'ரோவர் கேமரா ஆஃப்லைன்',
    roverCameraUnavailable: 'ரோவர் கேமரா தற்போது கிடைக்கவில்லை.',
    retryConnection: 'மீண்டும் இணை',
    cameraSettings: 'கேமரா அமைப்புகள்',
    openLiveCamera: 'கேமராவை திறக்கவும்',
    live: 'நேரலை',
    snapshot: 'புகைப்படம்',
    fullScreen: 'முழுத்திரை',
    enableCamera: 'கேமராவை இயக்கு',
    stopCamera: 'கேமராவை நிறுத்து',

    logsTitle: 'பதிவுகள்',
    logsSubtitle: 'ரோவர் இயக்க மற்றும் பாதுகாப்பு நிகழ்வு பதிவுகள்',
    totalEvents: 'மொத்த நிகழ்வுகள்',
    alertsCount: 'எச்சரிக்கைகள்',
    warningsCount: 'கவனக்குறிப்புகள்',
    systemEvents: 'கணினி',
    searchLogs: 'பதிவுகளை தேட...',
    downloadLogData: 'பதிவுகளை பதிவிறக்கு',
    downloadFiltered: 'வடிகட்டப்பட்ட பதிவுகள் (CSV)',
    downloadAll: 'அனைத்து பதிவுகள் (CSV)',
    clearLogs: 'பதிவுகளை அழி',
    simulateEvent: 'நிகழ்வை உருவகப்படுத்து',
    time: 'நேரம்',
    type: 'வகை',
    event: 'நிகழ்வு',
    source: 'மூலம்',
    status: 'நிலை',

    settingsTitle: 'அமைப்புகள்',
    settingsSubtitle: 'ரோவர் இணைப்பு, சென்சார்கள் மற்றும் எச்சரிக்கைகளை கட்டமைக்கவும்',
    connectionSettings: 'இணைப்பு',
    sensorConfig: 'சென்சார்கள்',
    safetyAlerts: 'பாதுகாப்பு & எச்சரிக்கைகள்',
    cameraConfig: 'கேமரா',
    displayPreferences: 'திரை அமைப்புகள்',
    saveSettings: 'அமைப்புகளை சேமி',
    resetDefaults: 'மீட்டமை',
    testConnection: 'இணைப்பை சோதி',
    testCamera: 'கேமராவை சோதிக்கவும்',
    settingsSaved: 'அமைப்புகள் வெற்றிகரமாக சேமிக்கப்பட்டன.',
    mobileCamera: 'மொபைல் கேமரா',
    esp32Cam: 'ESP32-CAM',
    gasMq2: 'MQ-2 எரிவாயு சென்சார்',
    mq2Sensor: 'MQ-2 எரிவாயு சென்சார்',
    demoModeBadge: 'மாதிரி நேரலை',
    demoDescription: 'மாதிரி சுற்றுச்சூழல் அளவீடுகள் பெறப்படுகின்றன',
  },

  hi: {
    appName: 'RESQ-X',
    tagline: 'खोज एवं बचाव रोवर',
    searchRescue: 'खोज एवं बचाव',
    navHome: 'होम',
    navCamera: 'लाइव कैमरा',
    navSensors: 'सेंसर',
    navObstacle: 'बाधा पहचान',
    navLogs: 'लॉग्स',
    navSettings: 'सेटिंग्स',
    openingScreen: 'प्रारंभिक स्क्रीन',

    bluetoothConnected: 'कनेक्टेड',
    bluetoothDisconnected: 'डिस्कनेक्टेड',
    battery: 'बैटरी',
    voltage: 'वोल्टेज',
    controller: 'कंट्रोलर',

    roverTitle: 'RESQ-X',
    roverSubtitle: '4WD खोज एवं बचाव रोवर',
    roverStatus: 'रोवर स्थिति',
    roverState: 'सक्रिय स्थिति',
    stateStopped: 'रुका हुआ',
    stateMoving: 'गतिमान',
    stateStandby: 'स्टैंडबाय',
    connection: 'कनेक्शन',
    signalQuality: 'सिग्नल',

    quickControls: 'त्वरित नियंत्रण',
    searchlight: 'सर्चलाइट',
    buzzer: 'अलार्म बज़र',
    on: 'चालू',
    off: 'बंद',

    alert: 'चेतावनी',
    activeAlert: 'सक्रिय चेतावनी',
    noAlerts: 'कोई सक्रिय चेतावनी नहीं',
    highGasDetected: 'अत्यधिक गैस स्तर का पता चला',
    gasSensor: 'गैस सेंसर',
    viewDetails: 'विवरण देखें',
    critical: 'खतरा',
    warning: 'चेतावनी',
    normal: 'सामान्य',
    safe: 'साफ',
    caution: 'सावधानी',
    danger: 'खतरा',

    obstacleDetection: 'बाधा पहचान',
    obstacleSubtitle: 'अग्र निकटता निगरानी',
    distance: 'दूरी',
    clear: 'रास्ता साफ है',
    obstacleDetected: 'खतरा',
    frontObstacle: 'सामने का रास्ता साफ है।',
    rangeBumper: '0 सेमी',
    rangeLimit: '80 सेमी',
    pathClear: 'सुरक्षित दूरी।',
    objectClose: 'वस्तु नजदीक आ रही है।',
    immediateRisk: 'टकराव का तात्कालिक खतरा।',

    sensorsTitle: 'सेंसर',
    sensorsSubtitle: 'रीयल-टाइम रोवर पर्यावरण निगरानी',
    temperature: 'तापमान',
    gasLevel: 'गैस स्तर',
    soundLevel: 'ध्वनि स्तर',
    threshold: 'सीमा',
    viewSensors: 'सेंसर देखें',

    cameraTitle: 'लाइव कैमरा',
    cameraSubtitle: 'रीयल-टाइम वीडियो फीड',
    cameraStatus: 'कैमरा स्थिति',
    roverCamera: 'रोवर कैमरा',
    deviceCamera: 'डिवाइस कैमरा',
    roverCameraOffline: 'रोवर कैमरा ऑफलाइन',
    roverCameraUnavailable: 'रोवर कैमरा वर्तमान में उपलब्ध नहीं है।',
    retryConnection: 'पुनः कनेक्ट करें',
    cameraSettings: 'कैमरा सेटिंग्स',
    openLiveCamera: 'लाइव कैमरा खोलें',
    live: 'लाइव',
    snapshot: 'फोटो लें',
    fullScreen: 'फुल स्क्रीन',
    enableCamera: 'कैमरा चालू करें',
    stopCamera: 'कैमरा बंद करें',

    logsTitle: 'लॉग्स',
    logsSubtitle: 'रोवर गतिविधि और सुरक्षा रिकॉर्ड',
    totalEvents: 'कुल इवेंट्स',
    alertsCount: 'अलर्ट्स',
    warningsCount: 'चेतावनियां',
    systemEvents: 'सिस्टम',
    searchLogs: 'लॉग्स खोजें...',
    downloadLogData: 'लॉग डेटा डाउनलोड करें',
    downloadFiltered: 'फ़िल्टर किए गए लॉग्स (CSV)',
    downloadAll: 'सभी लॉग्स (CSV)',
    clearLogs: 'लॉग्स साफ़ करें',
    simulateEvent: 'इवेंट सिमुलेट करें',
    time: 'समय',
    type: 'प्रकार',
    event: 'इवेंट',
    source: 'स्रोत',
    status: 'स्थिति',

    settingsTitle: 'सेटिंग्स',
    settingsSubtitle: 'रोवर कनेक्शन, सेंसर और सुरक्षा अलर्ट कॉन्फ़िगर करें',
    connectionSettings: 'कनेक्शन',
    sensorConfig: 'सेंसर',
    safetyAlerts: 'सुरक्षा एवं अलर्ट',
    cameraConfig: 'कैमरा',
    displayPreferences: 'डिस्प्ले',
    saveSettings: 'सेटिंग्स सहेजें',
    resetDefaults: 'रीसेट करें',
    testConnection: 'कनेक्शन जांचें',
    testCamera: 'कैमरा जांचें',
    settingsSaved: 'सेटिंग्स सफलतापूर्वक सहेजी गईं।',
    mobileCamera: 'मोबाइल कैमरा',
    esp32Cam: 'ESP32-CAM',
    gasMq2: 'MQ-2 गैस सेंसर',
    mq2Sensor: 'MQ-2 गैस सेंसर',
    demoModeBadge: 'सिमुलेशन सक्रिय',
    demoDescription: 'सिम्युलेटेड वायुमंडलीय डेटा डैशबोर्ड पर प्रदर्शित हो रहा है',
  },
};
