export enum CommandClass {
	// Official Zwave Commands
	ALARM = 113,
	ANTITHEFT = 93,
	APPLICATION_STATUS = 34,
	ASSOCIATION = 133,
	ASSOCIATION_COMMAND_CONFIGURATION = 155,
	ASSOCIATION_GRP_INFO = 89,
	ASSOCIATION_V2 = 133,
	AV_CONTENT_DIRECTORY_MD = 149,
	AV_CONTENT_SEARCH_MD = 151,
	AV_RENDERER_STATUS = 150,
	AV_TAGGING_MD = 153,
	BARRIER_OPERATOR = 102,
	BASIC = 32,
	BASIC_WINDOW_COVERING = 80,
	BATTERY = 128,
	CENTRAL_SCENE = 91,
	CHIMNEY_FAN = 42,
	CLIMATE_CONTROL_SCHEDULE = 70,
	CLOCK = 129,
	COMPOSITE = 141,
	CONFIGURATION = 112,
	CONFIGURATION_V2 = 112,
	CONTROLLER_REPLICATION = 33,
	DEVICE_RESET_LOCALLY = 90,
	DOOR_LOCK = 98,
	DOOR_LOCK_LOGGING = 76,
	ENERGY_PRODUCTION = 144,
	FIRMWARE_UPDATE_MD = 122,
	GEOGRAPHIC_LOCATION = 140,
	GROUPING_NAME = 123,
	HAIL = 130,
	INDICATOR = 135,
	IP_ASSOCIATION = 92,
	IP_CONFIGURATION = 154,
	LANGUAGE = 137,
	LOCK = 118,
	MANUFACTURER_PROPRIETARY = 145,
	MANUFACTURER_SPECIFIC = 114,
	MARK = 239,
	METER = 50,
	METER_PULSE = 53,
	METER_TBL_CONFIG = 60,
	METER_TBL_MONITOR = 61,
	METER_TBL_PUSH = 62,
	MTP_WINDOW_COVERING = 81,
	MULTI_CHANNEL_ASSOCIATION_V2 = 142,
	MULTI_CHANNEL_V2 = 96,
	MULTI_CMD = 143,
	MULTI_INSTANCE = 96,
	MULTI_INSTANCE_ASSOCIATION = 142,
	NO_OPERATION = 0,
	NODE_NAMING = 119,
	NON_INTEROPERABLE = 240,
	POWERLEVEL = 115,
	PROPRIETARY = 136,
	PROTECTION = 117,
	PROTECTION_V2 = 117,
	REMOTE_ASSOCIATION = 125,
	REMOTE_ASSOCIATION_ACTIVATE = 124,
	SCENE_ACTIVATION = 43,
	SCENE_ACTUATOR_CONF = 44,
	SCENE_CONTROLLER_CONF = 45,
	SCHEDULE_ENTRY_LOCK = 78,
	SCREEN_ATTRIBUTES = 147,
	SCREEN_ATTRIBUTES_V2 = 147,
	SCREEN_MD = 146,
	SCREEN_MD_V2 = 146,
	SECURITY = 152,
	SENSOR_ALARM = 156,
	SENSOR_BINARY = 48,
	SENSOR_CONFIGURATION = 158,
	SENSOR_MULTILEVEL = 49,
	SENSOR_MULTILEVEL_V2 = 49,
	SILENCE_ALARM = 157,
	SIMPLE_AV_CONTROL = 148,
	SWITCH_ALL = 39,
	SWITCH_BINARY = 37,
	SWITCH_MULTILEVEL = 38,
	SWITCH_MULTILEVEL_V2 = 38,
	SWITCH_TOGGLE_BINARY = 40,
	SWITCH_TOGGLE_MULTILEVEL = 41,
	THERMOSTAT_FAN_MODE = 68,
	THERMOSTAT_FAN_STATE = 69,
	THERMOSTAT_HEATING = 56,
	THERMOSTAT_MODE = 64,
	THERMOSTAT_OPERATING_STATE = 66,
	THERMOSTAT_SETBACK = 71,
	THERMOSTAT_SETPOINT = 67,
	TIME = 138,
	TIME_PARAMETERS = 139,
	USER_CODE = 99,
	VERSION = 134,
	WAKE_UP = 132,
	WAKE_UP_V2 = 132,
	ZIP_ADV_CLIENT = 52,
	ZIP_ADV_SERVER = 51,
	ZIP_ADV_SERVICES = 47,
	ZIP_CLIENT = 46,
	ZIP_SERVER = 36,
	ZIP_SERVICES = 35,
	ZWAVEPLUS_INFO = 94,

	// Virtual Platform Commands
	VIRTUAL_PLATFORM = 999_000,
	VIRTUAL_FAN_MULTILEVEL = 999_001,
	VIRTUAL_PRESENCE_BINARY = 999_002,
}
