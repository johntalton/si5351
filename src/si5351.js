import { Common } from './common.js'
import { Converter } from './converter.js'

export class SI5351 {
	#abus

	constructor(abus, options) {
		this.#abus = abus
	}

	async getDeviceStatus() {
		const ab = await Common.getDeviceStatus(this.#abus)
		return Converter.decodeDeviceStatus(ab)
	}

	async getInterruptStatusSticky() {
		const ab = await Common.getInterruptStatusSticky(this.#abus)
		return Converter.decodeInterruptStatusSticky(ab)
	}
	async setInterruptStatusSticky(param) { return Common.setInterruptStatusSticky(this.#abus, Converter.encodeInterruptStatusSticky(param)) }

	async getInterruptStatusMask() {
		const ab = await Common.getInterruptStatusMask(this.#abus)
		return Converter.decodeInterruptStatusMask(ab)
	}
	async setInterruptStatusMask(param) { return Common.setInterruptStatusMask(this.#abus, Converter.encodeInterruptStatusMask(param)) }

	async getOutputEnableControl() {
		const ab = await Common.getOutputEnableControl(this.#abus)
		return Converter.decodeOutputEnableControl(ab)
	}
	async setOutputEnableControl(param) { return Common.setOutputEnableControl(this.#abus, Converter.encodeOutputEnableControl(param)) }

	async getPinEnabledControl() {
		const ab = await Common.getPinEnabledControl(this.#abus)
		return Converter.decodePinEnabledControl(ab)
	}
	async setPinEnabledControl(param) { return Common.setPinEnabledControl(this.#abus, Converter.encodePinEnabledControl(param)) }

	async getPLLInputSource() {
		const ab = await Common.getPLLInputSource(this.#abus)
		return Converter.decodePLLInputSource(ab)
	}
	async setPLLInputSource(param) { return Common.setPLLInputSource(this.#abus, Converter.encodePLLInputSource(param)) }

	async getClockControl0() {
		const ab = await Common.getClockControl0(this.#abus)
		return Converter.decodeClockControl0(ab)
	}
	async setClockControl0(param) { return Common.setClockControl0(this.#abus, Converter.encodeClockControl0(param)) }
	async getClockControl1() {
		const ab = await Common.getClockControl1(this.#abus)
		return Converter.decodeClockControl1(ab)
	}
	async setClockControl1(param) { return Common.setClockControl1(this.#abus, Converter.encodeClockControl1(param)) }
	async getClockControl2() {
		const ab = await Common.getClockControl2(this.#abus)
		return Converter.decodeClockControl2(ab)
	}
	async setClockControl2(param) { return Common.setClockControl2(this.#abus, Converter.encodeClockControl2(param)) }
	async getClockControl3() {
		const ab = await Common.getClockControl3(this.#abus)
		return Converter.decodeClockControl3(ab)
	}
	async setClockControl3(param) { return Common.setClockControl3(this.#abus, Converter.encodeClockControl3(param)) }
	async getClockControl4() {
		const ab = await Common.getClockControl4(this.#abus)
		return Converter.decodeClockControl4(ab)
	}
	async setClockControl4(param) { return Common.setClockControl4(this.#abus, Converter.encodeClockControl4(param)) }
	async getClockControl5() {
		const ab = await Common.getClockControl5(this.#abus)
		return Converter.decodeClockControl5(ab)
	}
	async setClockControl5(param) { return Common.setClockControl5(this.#abus, Converter.encodeClockControl5(param)) }
	async getClockControl6() {
		const ab = await Common.getClockControl6(this.#abus)
		return Converter.decodeClockControl6(ab)
	}
	async setClockControl6(param) { return Common.setClockControl6(this.#abus, Converter.encodeClockControl6(param)) }
	async getClockControl7() {
		const ab = await Common.getClockControl7(this.#abus)
		return Converter.decodeClockControl7(ab)
	}
	async setClockControl7(param) { return Common.setClockControl7(this.#abus, Converter.encodeClockControl7(param)) }

	async getClockDisableState3_0() {
		const ab = await Common.getClockDisableState3_0(this.#abus)
		return Converter.decodeClockDisableState3_0(ab)
	}
	async setClockDisableState3_0(param) { return Common.setClockDisableState3_0(this.#abus, Converter.encodeClockDisableState3_0(param)) }
	async getClockDisableState7_4() {
		const ab = await Common.getClockDisableState7_4(this.#abus)
		return Converter.decodeClockDisableState7_4(ab)
	}
	async setClockDisableState7_4(param) { return Common.setClockDisableState7_4(this.#abus, Converter.encodeClockDisableState7_4(param)) }

	async getMultiSynthParameters0() {
		const ab = await Common.getMultiSynthParameters0(this.#abus)
		return Converter.decodeMultiSynthParameters0(ab)
	}
	async setMultiSynthParameters0(param) { return Common.setMultiSynthParameters0(this.#abus, Converter.encodeMultiSynthParameters0(param)) }
	async getMultiSynthParameters1() {
		const ab = await Common.getMultiSynthParameters1(this.#abus)
		return Converter.decodeMultiSynthParameters1(ab)
	}
	async setMultiSynthParameters1(param) { return Common.setMultiSynthParameters1(this.#abus, Converter.encodeMultiSynthParameters1(param)) }
	async getMultiSynthParameters2() {
		const ab = await Common.getMultiSynthParameters2(this.#abus)
		return Converter.decodeMultiSynthParameters2(ab)
	}
	async setMultiSynthParameters2(param) { return Common.setMultiSynthParameters2(this.#abus, Converter.encodeMultiSynthParameters2(param)) }
	async getMultiSynthParameters3() {
		const ab = await Common.getMultiSynthParameters3(this.#abus)
		return Converter.decodeMultiSynthParameters3(ab)
	}
	async setMultiSynthParameters3(param) { return Common.setMultiSynthParameters3(this.#abus, Converter.encodeMultiSynthParameters3(param)) }
	async getMultiSynthParameters4() {
		const ab = await Common.getMultiSynthParameters4(this.#abus)
		return Converter.decodeMultiSynthParameters4(ab)
	}
	async setMultiSynthParameters4(param) { return Common.setMultiSynthParameters4(this.#abus, Converter.encodeMultiSynthParameters4(param)) }
	async getMultiSynthParameters5() {
		const ab = await Common.getMultiSynthParameters5(this.#abus)
		return Converter.decodeMultiSynthParameters5(ab)
	}
	async setMultiSynthParameters5(param) { return Common.setMultiSynthParameters5(this.#abus, Converter.encodeMultiSynthParameters5(param)) }
	async getMultiSynthParameters6() {
		const ab = await Common.getMultiSynthParameters6(this.#abus)
		return Converter.decodeMultiSynthParameters6(ab)
	}
	async setMultiSynthParameters6(param) { return Common.setMultiSynthParameters6(this.#abus, Converter.encodeMultiSynthParameters6(param)) }
	async getMultiSynthParameters7() {
		const ab = await Common.getMultiSynthParameters7(this.#abus)
		return Converter.decodeMultiSynthParameters7(ab)
	}
	async setMultiSynthParameters7(param) { return Common.setMultiSynthParameters7(this.#abus, Converter.encodeMultiSynthParameters7(param)) }

	async getClockOutputDivider6_7() {
		const ab = await Common.getClockOutputDivider6_7(this.#abus)
		return Converter.decodeClockOutputDivider6_7(ab)
	}
	async setClockOutputDivider6_7(param) { return Common.setClockOutputDivider6_7(this.#abus, Converter.encodeClockOutputDivider6_7(param)) }

	async getClockInitialPhaseOffset0() {
		const ab = await Common.getClockInitialPhaseOffset0(this.#abus)
		return Converter.decodeClockInitialPhaseOffset0(ab)
	}
	async setClockInitialPhaseOffset0(param) { return Common.setClockInitialPhaseOffset0(this.#abus, Converter.encodeClockInitialPhaseOffset0(param)) }
	async getClockInitialPhaseOffset1() {
		const ab = await Common.getClockInitialPhaseOffset1(this.#abus)
		return Converter.decodeClockInitialPhaseOffset1(ab)
	}
	async setClockInitialPhaseOffset1(param) { return Common.setClockInitialPhaseOffset1(this.#abus, Converter.encodeClockInitialPhaseOffset1(param)) }
	async getClockInitialPhaseOffset2() {
		const ab = await Common.getClockInitialPhaseOffset2(this.#abus)
		return Converter.decodeClockInitialPhaseOffset2(ab)
	}
	async setClockInitialPhaseOffset2(param) { return Common.setClockInitialPhaseOffset2(this.#abus, Converter.encodeClockInitialPhaseOffset2(param)) }
	async getClockInitialPhaseOffset3() {
		const ab = await Common.getClockInitialPhaseOffset3(this.#abus)
		return Converter.decodeClockInitialPhaseOffset3(ab)
	}
	async setClockInitialPhaseOffset3(param) { return Common.setClockInitialPhaseOffset3(this.#abus, Converter.encodeClockInitialPhaseOffset3(param)) }
	async getClockInitialPhaseOffset4() {
		const ab = await Common.getClockInitialPhaseOffset4(this.#abus)
		return Converter.decodeClockInitialPhaseOffset4(ab)
	}
	async setClockInitialPhaseOffset4(param) { return Common.setClockInitialPhaseOffset4(this.#abus, Converter.encodeClockInitialPhaseOffset4(param)) }
	async getClockInitialPhaseOffset5() {
		const ab = await Common.getClockInitialPhaseOffset5(this.#abus)
		return Converter.decodeClockInitialPhaseOffset5(ab)
	}
	async setClockInitialPhaseOffset5(param) { return Common.setClockInitialPhaseOffset5(this.#abus, Converter.encodeClockInitialPhaseOffset5(param)) }

	async getPLLReset() {
		const ab = await Common.getPLLReset(this.#abus)
		return Converter.decodePLLReset(ab)
	}
	async setPLLReset(param) { return Common.setPLLReset(this.#abus, Converter.encodePLLReset(param)) }

	async getCrystalInternalLoadCapacitance() {
		const ab = await Common.getCrystalInternalLoadCapacitance(this.#abus)
		return Converter.decodeCrystalInternalLoadCapacitance(ab)
	}
	async setCrystalInternalLoadCapacitance(param) { return Common.setCrystalInternalLoadCapacitance(this.#abus, Converter.encodeCrystalInternalLoadCapacitance(param)) }
}