import multiLevelBinaryTransformer from '../../Values/Transformers/multiLevelBinaryTransformer'
import multiLevelTransformer from '../../Values/Transformers/multiLevelTransformer'
import BoundValueStream from '../../Streams/BoundValueStream'
import ManagedDriver from './ManagedDriver'
import { Value } from 'openzwave-shared'

export default class FanMultiLevelDriver extends ManagedDriver {
	addValue(index: number, value: Value) {
		if (index !== 0) {
			return
		}

		const { Service, Characteristic } = this.hap
		const service = this.accessory.getService(Service.Fanv2)
		const valueStream = new BoundValueStream(value, this.valueObservables, this.log)

		// On/Off
		this.registerCharacteristic(index, value, {
			service,
			valueStream,
			characteristic: Characteristic.Active,
			options: {
				transformer: multiLevelBinaryTransformer({
					truthy: (Characteristic.Active as any)?.ACTIVE ?? true,
					falsey: (Characteristic.Active as any)?.INACTIVE ?? false,
				}),
			},
		})

		// Speed
		this.registerCharacteristic(index, value, {
			service,
			valueStream,
			characteristic: Characteristic.RotationSpeed,
			options: {
				transformer: multiLevelTransformer(),
			},
		})
	}
}
