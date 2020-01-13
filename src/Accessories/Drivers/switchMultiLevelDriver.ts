import registerCharacteristic from './Support/registerCharacteristic'

import { IDriverParams } from './Driver'
import MultiLevelBinaryTransformer from '../../Values/Transformers/MultiLevelBinaryTransformer'
import MultiLevelTransformer from '../../Values/Transformers/MultiLevelTransformer'
import fanMultiLevelDriver from './fanMultiLevelDriver'

export default function switchMultiLevelDriver(params: IDriverParams) {
	if (params.hints.has('fan')) {
		return fanMultiLevelDriver(params)
	}

	const value = params.values.get(0)

	if (!value) {
		return
	}

	const { Service, Characteristic } = params.hap
	const service = params.accessory.getService(Service.Lightbulb)

	if (!service) {
		return
	}

	// On/Off
	registerCharacteristic({
		service,
		params,
		value,
		characteristic: Characteristic.On,
		options: {
			transformer: MultiLevelBinaryTransformer,
		},
	})

	// Brightness
	registerCharacteristic({
		service,
		params,
		value: value,
		characteristic: Characteristic.Brightness,
		options: {
			transformer: MultiLevelTransformer,
		},
	})
}
