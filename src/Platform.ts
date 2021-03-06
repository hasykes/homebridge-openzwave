import { Notification } from 'openzwave-shared'
import { Homebridge } from '../types/homebridge'
import AccessoryManager from './Accessories/AccessoryManager'
import { IDriverRegistry } from './Accessories/Registries/IDriverRegistry'
import { populateDriverRegistry } from './Accessories/Registries/populateDriverRegistry'
import SimpleDriverRegistry from './Accessories/Registries/SimpleDriverRegistry'
import { IConfig } from './IConfig'
import Zwave from './Zwave/Zwave'

export default class Platform implements Homebridge.Platform {
	log: Homebridge.Logger
	config?: IConfig
	api: Homebridge.Api
	zwave: Zwave
	accessoryManager: AccessoryManager
	readonly driverRegistry: IDriverRegistry

	constructor(log: Homebridge.Logger, config: IConfig | undefined, api: Homebridge.Api) {
		this.log = log
		this.config = config
		this.api = api
		this.driverRegistry = populateDriverRegistry(new SimpleDriverRegistry())
		this.zwave = new Zwave(this.log, {
			ConsoleOutput: false,
			Logging: false,
			SaveConfiguration: false,
			NotifyTransactions: true,
		})
		this.accessoryManager = new AccessoryManager(this)

		if (!config) {
			this.log.warn('A config.json entry is required. Aborting.')
		} else {
			this.api.on('didFinishLaunching', this.didFinishLaunching.bind(this))
		}
	}

	private didFinishLaunching() {
		const devicePath = this.config?.zwave?.devicePath

		if (typeof devicePath !== 'string' || devicePath.length === 0) {
			this.log.error('Platform unavailable, missing zwave.devicePath in config.')
			return
		}

		this.zwave.ozw.on('connected', this.onConnected.bind(this))
		this.zwave.ozw.on('driver ready', this.onDriverReady.bind(this))
		this.zwave.ozw.on('driver failed', this.onDriverFailed.bind(this))
		this.zwave.ozw.on('scan complete', this.onScanComplete.bind(this))
		this.zwave.ozw.on('notification', this.onNotification.bind(this))
		this.zwave.ozw.connect(devicePath)
	}

	configureAccessory(accessory: Homebridge.PlatformAccessory): void {
		this.accessoryManager.restoreAccessory(accessory)
	}

	// OpenZwave

	onConnected(version: string) {
		this.log.debug('onConnected', version)
	}

	onDriverReady(homeId: number) {
		this.log.debug('onDriverReady', homeId)
	}

	onDriverFailed() {
		this.log.error('Unable to connect to device.')
	}

	onScanComplete() {
		this.log.info('Finished Scanning')
		this.accessoryManager.purge()
	}

	onNotification(nodeId: number, notification: Notification, help: string) {
		if (notification === Notification.Nop) {
			return
		}

		this.log.debug('onNotification', { nodeId, notification, help })
	}
}
