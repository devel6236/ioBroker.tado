// VE.Direct Protocol Version 3.26 from 27 November 2018
// Classification of all state attributes possible
const state_attrb = {
	'awayModeReminder' : {
		name: 'Away Mode Reminder',
		type: 'boolean',
		role: 'state',
		unit: ''
	},
	'Actual_Humidity' : {
		name: 'Actual Humidity',
		type: 'number',
		role: 'value.humidity',
		unit: '%'
	},
	'Actual_Temperature' : {
		name: 'Actual Temperature',
		type: 'number',
		role: 'value.temperature',
		unit: '°C'
	},
	'atHome' : {
		name: 'atHome',
		type: 'boolean',
		role: 'state',
		unit: ''
	},
	'batteryState' : {
		name: 'Battery State',
		type: 'mixed',
		role: 'indicator.lowbat ',
		unit: ''
	},
	'boilerId' : {
		name: 'Boiler ID',
		type: 'number',
		role: 'value',
		unit: ''
	}, 
	'celsius' : {
		name: 'Temperature',
		type: 'number',
		role: 'value.temperature',
		unit: '°C'
	},
	'clearZoneOverlay' : {
		name: 'Clear Zone Overlay',
		role: 'button',
		type: 'mixed',
		write: true,
		unit: ''
	},
	'connectionState' : {
		name: 'Connection State',
		type: 'boolean',
		role: 'indicator.connected',
		unit: ''
	}, 
	'currentFwVersion' : {
		name: 'Current Fw Version',
		type: 'string',
		role: 'state',
		unit: ''
	}, 
	'dazzleEnabled' : {
		name: 'Dazzle Enabled',
		type: 'boolean',
		role: 'state',
		unit: ''
	},
	'dateCreated' : {
		name: 'date Created',
		type: 'mixed',
		role: 'state',
		unit: ''
	}, 
	'dazzleMode' : {
		name: 'Dazzle Mode',
		type: 'boolean',
		role: 'state',
		unit: ''
	},
	'deviceType' : {
		name: 'Device Type',
		type: 'mixed',
		role: 'info.name',
		unit: ''
	}, 
	'duties' : {
		name: 'Duties',
		type: 'mixed',
		role: 'state',
		unit: ''
	}, 
	'energySavingsReportReminder' : {
		name: 'Energy Savings Report Reminder',
		type: 'boolean',
		role: 'state',
		unit: ''
	},
	'heatingPower' : {
		name: 'Heating Power',
		type: 'number',
		role: 'value.valve',
		unit: '%'
	},
	'id' : {
		name: 'id',
		type: 'mixed',
		role: 'state',
		unit: ''
	},
	'geolocationOverride' : {
		name: 'Geolocation Override',
		type: 'mixed',
		role: 'state',
		unit: ''
	}, 
	'geolocationOverrideDisableTime' : {
		name: 'Geolocation Override Disable Time',
		type: 'mixed',
		role: 'state',
		unit: ''
	}, 
	'geoTrackingEnabled' : {
		name: 'Geo Tracking Enabled',
		type: 'boolean',
		role: 'state',
		unit: ''
	},
	'homeModeReminder' : {
		name: 'Home Mode Reminder',
		type: 'boolean',
		role: 'state',
		unit: ''
	},
	'installationCompleted' : {
		name: 'Installation Completed',
		type: 'boolean',
		role: 'state',
		unit: ''
	},
	'isDriverConfigured' : {
		name: 'Driver Configured',
		role: 'button',
		type: 'boolean',
		write: true,
		unit: ''
	},
	'latitude' : {
		name: 'Latitude',
		type: 'number',
		role: 'value.gps.latitude',
		unit: ''
	},
	'longtitude' : {
		name: 'Longtitude',
		type: 'number',
		role: 'value.gps.longitude',
		unit: ''
	},
	'link' : {
		name: 'Link',
		type: 'mixed',
		role: 'value',
		unit: ''
	},
	'lowBatteryReminder' : {
		name: 'lowBatteryReminder',
		type: 'boolean',
		role: 'state',
		unit: ''
	},
	'minimumAwayTemperature' : {
		name: 'MinimumAway Temperature',
		type: 'number',
		role: 'value.temperature',
		unit: '°C'
	},
	'mountingState' : {
		name: 'Sensor Data Points',
		type: 'mixed',
		role: 'state',
		unit: ''
	}, 
	'nextScheduleChange' : {
		name: 'Next Schedule Change',
		type: 'array',
		role: 'state',
		unit: ''
	}, 
	'nextTimeBlock' : {
		name: 'Next Time Block',
		type: 'array',
		role: 'state',
		unit: ''
	},
	'onDemandLogRetrievalEnabled' : {
		name: 'Log retrieval on Demand Enabled',
		type: 'boolean',
		role: 'value',
		unit: ''
	},
	'openWindowDetected' : {
		name: 'Open Window detected',
		type: 'boolean',
		role: 'sensor.window',
		unit: ''
	},
	'openWindow' : {
		name: 'Open Windows',
		type: 'boolean',
		role: 'sensor.window',
		unit: ''
	},
	'openWindowReminder' : {
		name: 'supports Dazzle',
		type: 'boolean',
		role: 'state',
		unit: ''
	},
	'outsideTemperature' : {
		name: 'Outside Temperature',
		type: 'number',
		role: 'value.temperature',
		unit: '°C'
	},
	'overlay' : {
		name: 'Overlay',
		type: 'mixed',
		role: 'state',
		unit: ''
	}, 
	'overlayType' : {
		name: 'Overlay Type',
		type: 'mixed',
		role: 'state',
		unit: ''
	},
	'partner' : {
		name: 'Dazzle Mode',
		type: 'mixed',
		role: 'state',
		unit: ''
	}, 
	'power' : {
		name: 'Power',
		type: 'mixed',
		role: 'switch.power',
		unit: '',
		write: true, 
		states: {
			on: 'on',
			off: 'off'
		}
	}, 	
	'preparation' : {
		name: 'Preparation',
		type: 'mixed',
		role: 'state',
		unit: ''
	},
	'preventFromSubscribing' : {
		name: 'preventFromSubscribing',
		type: 'boolean',
		role: 'state',
		unit: ''
	}, 
	'reportAvailable' : {
		name: 'Report Available',
		type: 'boolean',
		role: 'state',
		unit: ''
	},	
	'serialNo' : {
		name: 'Serial Number',
		type: 'string',
		role: 'state',
		unit: ''
	},
	'sensorDataPoints' : {
		name: 'Sensor Data Points',
		type: 'mixed',
		role: 'state',
		unit: ''
	}, 
	'shortSerialNo' : {
		name: 'Serial Number short',
		type: 'mixed',
		role: 'state',
		unit: ''
	}, 
	'supported' : {
		name: 'Supported',
		type: 'boolean',
		role: 'state',
		unit: ''
	},
	'supportsDazzle' : {
		name: 'supports Dazzle',
		type: 'boolean',
		role: 'state',
		unit: ''
	},
	'tadoMode' : {
		name: 'Tado Mode',
		type: 'mixed',
		role: 'state',
		unit: ''
	},
	'temperature' : {
		name: 'Temperature',
		type: 'number',
		role: 'value.temperature',
		unit: '°C',
		write: true
	},    
	'temperatureUnit' : {
		name: 'temperature Unit',
		type: 'mixed',
		role: 'state',
		unit: ''
	}, 
	'timeoutInSeconds' : {
		name: 'TimeoutInSeconds',
		type: 'number',
		role: 'state',
		unit: 's'
	}, 
	'type' : {
		name: 'Type',
		type: 'mixed',
		role: 'state',
		unit: ''
	},
	'usePreSkillsApps' : {
		name: 'Use pre skills Apps',
		type: 'boolean',
		role: 'info',
		unit: ''
	},
	'enabled' : {
		name: 'enabled',
		type: 'boolean',
		role: 'indicator.alarm',
		unit: ''
	},
	'typeSkillBasedApp' : {
		name: 'Type Skill Based App',
		role: 'state',
		type: 'mixed',
		write: true,
		unit: '',
		states: {
			'MANUAL': 'Permanent',
			'NEXT_TIME_BLOCK': 'Nächster Block',
			'TIMER': 'Countdown',
			'null': 'Zeitplan'
		}
	},
	'autoAssistFreeTrialEnabled' : {
		name: 'Auto Assist Free Trial Enabled',
		type: 'boolean',
		role: 'state',
		unit: ''
	},
	'durationInSeconds' : {
		name: 'Duration In Seconds',
		role: 'value',
		type: 'number',
		write: true,
		unit: ''		
	},
	'childLockEnabled' : {
		name: 'Child-Lock enabled',
		type: 'boolean',
		role: 'state',
		unit:  ''
	},
	'quickActionsEnabled': {
		name: 'Qucik actions enabled',
		type: 'boolean',
		role: 'state',
		unit: ''
	},
	'enabledFeatures': {
		name: 'Enabled features',
		type: 'string',
		role: 'info',
		unit: ''
	},
	'scheduleIsDefault': {
		name: 'Schedule is default',
		role: 'info',
		type: 'boolean',
		unit: ''
	},
	'showScheduleSetup': {
		name: 'Show Schedule Setup',
		role: 'info',
		type: 'boolean',
		unit: ''
	},
	'mountingStateWithError': {
		name: 'Mounting State with Error',
		role: 'info',
		type: 'string',
		unit: ''
	},
	'isAirComfortEligible': {
		name: 'Air Comfort',
		role: 'info',
		type: 'mixed',
		unit: ''
	},
	'isBalanceAcEligible': {
		name: 'Balance Air Comfort Eligible',
		role: 'info',
		type: 'mixed',
		unit: ''
	},
	'isEnergyIqEligible': {
		name: 'Energy Eligible',
		role: 'info',
		type: 'mixed',
		unit: ''
	},
	'generation': {
		name: 'Generation',
		type: 'string',
		role: 'info',
		unit: ''
	},
	'isBalanceHpEligible': {
		name: 'Balance Eligible',
		type: 'mixed',
		role: 'info',
		unit: ''
	},
	'zonesCount': {
		name: 'zonesCount',
		type: 'mixed',
		role: 'info',
		unit: ''
	},
	'isHeatSourceInstalled': {
		name: 'HeatSource Installed',
		type: 'mixed',
		role: 'info',
		unit: ''
	},
	'runningOfflineSchedule': {
		name: 'OfflineSchedule running',
		type: 'string',
		role: 'info',
		unit: ''
	},
	'skills': {
		name: 'Activated Tado Skills',
		type: 'object',
		role: 'info',
		unit: ''
	},
	'isHeatPumpInstalled': {
		name: 'HeatPump Installed',
		type: 'mixed',
		role: 'info',
		unit: ''
	},
	'language': {
		name: 'Language',
		type: 'string',
		role: 'info',
		unit: ''
	},
	'supportsFlowTemperatureOptimization': {
		name: 'Flow Temperature Optimization support',
		type: 'mixed',
		role: 'info',
		unit: ''
	}
};

module.exports = state_attrb;
