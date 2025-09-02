import { Common } from './common.js'
import { Converter } from './converter.js'

/**
 * @import { I2CAddressedBus } from '@johntalton/and-other-delights'
 * @import {
 * DeviceStatus,
 * InterruptStatusSticky,
 * InterruptStatusMask,
 * OutputEnableControl,
 * PinEnabledControl,
 * PLLInputSource,
 * ClockControl,
 * ClockDisabledState7_4,
 * ClockDisabledState3_0,
 * MultiSynthParameters,
 * MultiSynthParametersBase,
 * MultiSynthParametersPartial,
 * ClockOutputDivider,
 * ClockInitialPhaseOffset,
 * PLLReset,
 * CrystalInternalLoadCapacitance
 * } from './defs.js'
 */

/**
 * @typedef {Object} SI5351Options
 */

export class SI5351 {
	/** @type {I2CAddressedBus} */
	#aBus

	/**
	 * @param {I2CAddressedBus} aBus
	 * @param {SI5351Options} [options]
	 */
	constructor(aBus, options) {
		this.#aBus = aBus
	}

	/** @returns {Promise<DeviceStatus>} */
	async getDeviceStatus() {
		const ab = await Common.getDeviceStatus(this.#aBus)
		return Converter.decodeDeviceStatus(ab)
	}

	/** @returns {Promise<InterruptStatusSticky>} */
	async getInterruptStatusSticky() {
		const ab = await Common.getInterruptStatusSticky(this.#aBus)
		return Converter.decodeInterruptStatusSticky(ab)
	}

	/**
	 * @param {Partial<InterruptStatusSticky>} param
	 * @returns {Promise<void>}
	*/
	async setInterruptStatusSticky(param) {
		return Common.setInterruptStatusSticky(this.#aBus, Converter.encodeInterruptStatusSticky(param))
	}

	/** @returns {Promise<InterruptStatusMask>} */
	async getInterruptStatusMask() {
		const ab = await Common.getInterruptStatusMask(this.#aBus)
		return Converter.decodeInterruptStatusMask(ab)
	}

	/**
	 * @param {InterruptStatusMask} param
	 * @returns {Promise<void>}
	*/
	async setInterruptStatusMask(param) {
		return Common.setInterruptStatusMask(this.#aBus, Converter.encodeInterruptStatusMask(param))
	}

	/** @returns {Promise<OutputEnableControl>} */
	async getOutputEnableControl() {
		const ab = await Common.getOutputEnableControl(this.#aBus)
		return Converter.decodeOutputEnableControl(ab)
	}

	/**
	 * @param {OutputEnableControl} param
	 * @returns {Promise<void>}
	*/
	async setOutputEnableControl(param) {
		return Common.setOutputEnableControl(this.#aBus, Converter.encodeOutputEnableControl(param))
	}

	/** @returns {Promise<PinEnabledControl>} */
	async getPinEnabledControl() {
		const ab = await Common.getPinEnabledControl(this.#aBus)
		return Converter.decodePinEnabledControl(ab)
	}

	/**
	 * @param {PinEnabledControl} param
	 * @returns {Promise<void>}
	*/
	async setPinEnabledControl(param) {
		return Common.setPinEnabledControl(this.#aBus, Converter.encodePinEnabledControl(param))
	}

	/** @returns {Promise<PLLInputSource>} */
	async getPLLInputSource() {
		const ab = await Common.getPLLInputSource(this.#aBus)
		return Converter.decodePLLInputSource(ab)
	}

	/**
	 * @param {PLLInputSource} param
	 * @returns {Promise<void>}
	*/
	async setPLLInputSource(param) {
		return Common.setPLLInputSource(this.#aBus, Converter.encodePLLInputSource(param))
	}

	/**
	 * @param {number} clock
	 * @returns {Promise<ClockControl>}
	 */
	async getClockControl(clock) {
		switch(clock) {
			case 0: return this.getClockControl0()
			case 1: return this.getClockControl1()
			case 2: return this.getClockControl2()
			case 3: return this.getClockControl3()
			case 4: return this.getClockControl4()
			case 5: return this.getClockControl5()
			case 6: return this.getClockControl6()
			case 7: return this.getClockControl7()
			default:
				throw new RangeError('invalid index for clock control')
		}
	}

	/**
	 * @param {number} clock
	 * @param {ClockControl} param
	 * @returns {Promise<void>}
	 */
	async setClockControl(clock, param) {
		switch(clock) {
			case 0: return this.setClockControl0(param)
			case 1: return this.setClockControl1(param)
			case 2: return this.setClockControl2(param)
			case 3: return this.setClockControl3(param)
			case 4: return this.setClockControl4(param)
			case 5: return this.setClockControl5(param)
			case 6: return this.setClockControl6(param)
			case 7: return this.setClockControl7(param)
			default:
				throw new RangeError('invalid index for clock control')
		}
	}

	/** @returns {Promise<ClockControl>} */
	async getClockControl0() {
		const ab = await Common.getClockControl0(this.#aBus)
		return Converter.decodeClockControl0(ab)
	}

	/**
	 * @param {ClockControl} param
	 * @returns {Promise<void>}
	*/
	async setClockControl0(param) {
		return Common.setClockControl0(this.#aBus, Converter.encodeClockControl0(param))
	}

	/** @returns {Promise<ClockControl>} */
	async getClockControl1() {
		const ab = await Common.getClockControl1(this.#aBus)
		return Converter.decodeClockControl1(ab)
	}

	/**
	 * @param {ClockControl} param
	 * @returns {Promise<void>}
	*/
	async setClockControl1(param) {
		return Common.setClockControl1(this.#aBus, Converter.encodeClockControl1(param))
	}

	/** @returns {Promise<ClockControl>} */
	async getClockControl2() {
		const ab = await Common.getClockControl2(this.#aBus)
		return Converter.decodeClockControl2(ab)
	}

	/**
	 * @param {ClockControl} param
	 * @returns {Promise<void>}
	*/
	async setClockControl2(param) {
		return Common.setClockControl2(this.#aBus, Converter.encodeClockControl2(param))
	}

	/** @returns {Promise<ClockControl>} */
	async getClockControl3() {
		const ab = await Common.getClockControl3(this.#aBus)
		return Converter.decodeClockControl3(ab)
	}

	/**
	 * @param {ClockControl} param
	 * @returns {Promise<void>}
	*/
	async setClockControl3(param) {
		return Common.setClockControl3(this.#aBus, Converter.encodeClockControl3(param))
	}

	/** @returns {Promise<ClockControl>} */
	async getClockControl4() {
		const ab = await Common.getClockControl4(this.#aBus)
		return Converter.decodeClockControl4(ab)
	}

	/**
	 * @param {ClockControl} param
	 * @returns {Promise<void>}
	*/
	async setClockControl4(param) {
		return Common.setClockControl4(this.#aBus, Converter.encodeClockControl4(param))
	}

	/** @returns {Promise<ClockControl>} */
	async getClockControl5() {
		const ab = await Common.getClockControl5(this.#aBus)
		return Converter.decodeClockControl5(ab)
	}

	/**
	 * @param {ClockControl} param
	 * @returns {Promise<void>}
	*/
	async setClockControl5(param) {
		return Common.setClockControl5(this.#aBus, Converter.encodeClockControl5(param))
	}

	/** @returns {Promise<ClockControl>} */
	async getClockControl6() {
		const ab = await Common.getClockControl6(this.#aBus)
		return Converter.decodeClockControl6(ab)
	}

	/**
	 * @param {ClockControl} param
	 * @returns {Promise<void>}
	*/
	async setClockControl6(param) {
		return Common.setClockControl6(this.#aBus, Converter.encodeClockControl6(param))
	}

	/** @returns {Promise<ClockControl>} */
	async getClockControl7() {
		const ab = await Common.getClockControl7(this.#aBus)
		return Converter.decodeClockControl7(ab)
	}

	/**
	 * @param {ClockControl} param
	 * @returns {Promise<void>}
	*/
	async setClockControl7(param) {
		return Common.setClockControl7(this.#aBus, Converter.encodeClockControl7(param))
	}

	/** @returns {Promise<ClockDisabledState3_0>} */
	async getClockDisableState3_0() {
		const ab = await Common.getClockDisableState3_0(this.#aBus)
		return Converter.decodeClockDisableState3_0(ab)
	}

	/**
	 * @param {ClockDisabledState3_0} param
	 * @returns {Promise<void>}
	*/
	async setClockDisableState3_0(param) {
		return Common.setClockDisableState3_0(this.#aBus, Converter.encodeClockDisableState3_0(param))
	}

	/** @returns {Promise<ClockDisabledState7_4>} */
	async getClockDisableState7_4() {
		const ab = await Common.getClockDisableState7_4(this.#aBus)
		return Converter.decodeClockDisableState7_4(ab)
	}

	/**
	 * @param {ClockDisabledState7_4} param
	 * @returns {Promise<void>}
	*/
	async setClockDisableState7_4(param) {
		return Common.setClockDisableState7_4(this.#aBus, Converter.encodeClockDisableState7_4(param))
	}

	/**
	 * @param {number} clock
	 * @returns {Promise<MultiSynthParametersPartial>}
	 */
	async getMultiSynthParameters(clock) {
		switch(clock) {
			case 0: return this.getMultiSynthParameters0()
			case 1: return this.getMultiSynthParameters1()
			case 2: return this.getMultiSynthParameters2()
			case 3: return this.getMultiSynthParameters3()
			case 4: return this.getMultiSynthParameters4()
			case 5: return this.getMultiSynthParameters5()
			case 6: return this.getMultiSynthParameters6()
			case 7: return this.getMultiSynthParameters7()
			default:
				throw new RangeError('invalid index for multi synth parameters')
		}
	}

	/**
	 * @param {number} clock
	 * @param {MultiSynthParameters|MultiSynthParametersPartial} param
	 * @returns {Promise<void>}
	 */
	async setMultiSynthParameters(clock, param) {
		switch(clock) {
			case 0: return this.setMultiSynthParameters0(param)
			case 1: return this.setMultiSynthParameters1(param)
			case 2: return this.setMultiSynthParameters2(param)
			case 3: return this.setMultiSynthParameters3(param)
			case 4: return this.setMultiSynthParameters4(param)
			case 5: return this.setMultiSynthParameters5(param)
			case 6: return this.setMultiSynthParameters6(param)
			case 7: return this.setMultiSynthParameters7(param)
			default:
				throw new RangeError('invalid index for multi synth parameters')
		}
	}


	/** @returns {Promise<MultiSynthParameters>} */
	async getMultiSynthParameters0() {
		const ab = await Common.getMultiSynthParameters0(this.#aBus)
		return Converter.decodeMultiSynthParameters0(ab)
	}

	/**
	 * @param {MultiSynthParameters} param
	 * @returns {Promise<void>}
	*/
	async setMultiSynthParameters0(param) {
		return Common.setMultiSynthParameters0(this.#aBus, Converter.encodeMultiSynthParameters0(param))
	}

	/** @returns {Promise<MultiSynthParameters>} */
	async getMultiSynthParameters1() {
		const ab = await Common.getMultiSynthParameters1(this.#aBus)
		return Converter.decodeMultiSynthParameters1(ab)
	}

	/**
	 * @param {MultiSynthParameters} param
	 * @returns {Promise<void>}
	*/
	async setMultiSynthParameters1(param) {
		return Common.setMultiSynthParameters1(this.#aBus, Converter.encodeMultiSynthParameters1(param))
	}

	/** @returns {Promise<MultiSynthParameters>} */
	async getMultiSynthParameters2() {
		const ab = await Common.getMultiSynthParameters2(this.#aBus)
		return Converter.decodeMultiSynthParameters2(ab)
	}

	/**
	 * @param {MultiSynthParameters} param
	 * @returns {Promise<void>}
	*/
	async setMultiSynthParameters2(param) {
		return Common.setMultiSynthParameters2(this.#aBus, Converter.encodeMultiSynthParameters2(param))
	}

	/** @returns {Promise<MultiSynthParameters>} */
	async getMultiSynthParameters3() {
		const ab = await Common.getMultiSynthParameters3(this.#aBus)
		return Converter.decodeMultiSynthParameters3(ab)
	}

	/**
	 * @param {MultiSynthParameters} param
	 * @returns {Promise<void>}
	*/
	async setMultiSynthParameters3(param) {
		return Common.setMultiSynthParameters3(this.#aBus, Converter.encodeMultiSynthParameters3(param))
	}

	/** @returns {Promise<MultiSynthParameters>} */
	async getMultiSynthParameters4() {
		const ab = await Common.getMultiSynthParameters4(this.#aBus)
		return Converter.decodeMultiSynthParameters4(ab)
	}

	/**
	 * @param {MultiSynthParameters} param
	 * @returns {Promise<void>}
	*/
	async setMultiSynthParameters4(param) {
		return Common.setMultiSynthParameters4(this.#aBus, Converter.encodeMultiSynthParameters4(param))
	}

	/** @returns {Promise<MultiSynthParameters>} */
	async getMultiSynthParameters5() {
		const ab = await Common.getMultiSynthParameters5(this.#aBus)
		return Converter.decodeMultiSynthParameters5(ab)
	}

	/**
	 * @param {MultiSynthParameters} param
	 * @returns {Promise<void>}
	*/
	async setMultiSynthParameters5(param) {
		return Common.setMultiSynthParameters5(this.#aBus, Converter.encodeMultiSynthParameters5(param))
	}

	/** @returns {Promise<MultiSynthParametersBase>} */
	async getMultiSynthParameters6() {
		const ab = await Common.getMultiSynthParameters6(this.#aBus)
		return Converter.decodeMultiSynthParameters6(ab)
	}

	/**
	 * @param {MultiSynthParametersBase} param
	 * @returns {Promise<void>}
	*/
	async setMultiSynthParameters6(param) {
		return Common.setMultiSynthParameters6(this.#aBus, Converter.encodeMultiSynthParameters6(param))
	}

	/** @returns {Promise<MultiSynthParametersBase>} */
	async getMultiSynthParameters7() {
		const ab = await Common.getMultiSynthParameters7(this.#aBus)
		return Converter.decodeMultiSynthParameters7(ab)
	}

	/**
	 * @param {MultiSynthParametersBase} param
	 * @returns {Promise<void>}
	*/
	async setMultiSynthParameters7(param) {
		return Common.setMultiSynthParameters7(this.#aBus, Converter.encodeMultiSynthParameters7(param))
	}

	/** @returns {Promise<ClockOutputDivider>} */
	async getClockOutputDivider6_7() {
		const ab = await Common.getClockOutputDivider6_7(this.#aBus)
		return Converter.decodeClockOutputDivider6_7(ab)
	}

	/**
	 * @param {ClockOutputDivider} param
	 * @returns {Promise<void>}
	*/
	async setClockOutputDivider6_7(param) {
		return Common.setClockOutputDivider6_7(this.#aBus, Converter.encodeClockOutputDivider6_7(param))
	}

	/**
	 * @param {number} clock
	 * @returns {Promise<ClockInitialPhaseOffset>}
	 */
	async getClockInitialPhaseOffset(clock) {
		switch(clock) {
			case 0: return this.getClockInitialPhaseOffset0()
			case 1: return this.getClockInitialPhaseOffset1()
			case 2: return this.getClockInitialPhaseOffset2()
			case 3: return this.getClockInitialPhaseOffset3()
			case 4: return this.getClockInitialPhaseOffset4()
			case 5: return this.getClockInitialPhaseOffset5()
			default:
				throw new RangeError('invalid index for phase offset')
		}
	}

	async setClockInitialPhaseOffset(clock, param) {
		switch(clock) {
			case 0: return this.setClockInitialPhaseOffset0(param)
			case 1: return this.setClockInitialPhaseOffset1(param)
			case 2: return this.setClockInitialPhaseOffset2(param)
			case 3: return this.setClockInitialPhaseOffset3(param)
			case 4: return this.setClockInitialPhaseOffset4(param)
			case 5: return this.setClockInitialPhaseOffset5(param)
			default:
				throw new RangeError('invalid index for phase offset')
		}
	}


	/** @returns {Promise<ClockInitialPhaseOffset>} */
	async getClockInitialPhaseOffset0() {
		const ab = await Common.getClockInitialPhaseOffset0(this.#aBus)
		return Converter.decodeClockInitialPhaseOffset0(ab)
	}

	/**
	 * @param {ClockInitialPhaseOffset} param
	 * @returns {Promise<void>}
	*/
	async setClockInitialPhaseOffset0(param) {
		return Common.setClockInitialPhaseOffset0(this.#aBus, Converter.encodeClockInitialPhaseOffset0(param))
	}

	/** @returns {Promise<ClockInitialPhaseOffset>} */
	async getClockInitialPhaseOffset1() {
		const ab = await Common.getClockInitialPhaseOffset1(this.#aBus)
		return Converter.decodeClockInitialPhaseOffset1(ab)
	}

	/**
	 * @param {ClockInitialPhaseOffset} param
	 * @returns {Promise<void>}
	*/
	async setClockInitialPhaseOffset1(param) {
		return Common.setClockInitialPhaseOffset1(this.#aBus, Converter.encodeClockInitialPhaseOffset1(param))
	}

	/** @returns {Promise<ClockInitialPhaseOffset>} */
	async getClockInitialPhaseOffset2() {
		const ab = await Common.getClockInitialPhaseOffset2(this.#aBus)
		return Converter.decodeClockInitialPhaseOffset2(ab)
	}

	/**
	 * @param {ClockInitialPhaseOffset} param
	 * @returns {Promise<void>}
	*/
	async setClockInitialPhaseOffset2(param) {
		return Common.setClockInitialPhaseOffset2(this.#aBus, Converter.encodeClockInitialPhaseOffset2(param))
	}

	/** @returns {Promise<ClockInitialPhaseOffset>} */
	async getClockInitialPhaseOffset3() {
		const ab = await Common.getClockInitialPhaseOffset3(this.#aBus)
		return Converter.decodeClockInitialPhaseOffset3(ab)
	}

	/**
	 * @param {ClockInitialPhaseOffset} param
	 * @returns {Promise<void>}
	*/
	async setClockInitialPhaseOffset3(param) {
		return Common.setClockInitialPhaseOffset3(this.#aBus, Converter.encodeClockInitialPhaseOffset3(param))
	}

	/** @returns {Promise<ClockInitialPhaseOffset>} */
	async getClockInitialPhaseOffset4() {
		const ab = await Common.getClockInitialPhaseOffset4(this.#aBus)
		return Converter.decodeClockInitialPhaseOffset4(ab)
	}

	/**
	 * @param {ClockInitialPhaseOffset} param
	 * @returns {Promise<void>}
	*/
	async setClockInitialPhaseOffset4(param) {
		return Common.setClockInitialPhaseOffset4(this.#aBus, Converter.encodeClockInitialPhaseOffset4(param))
	}

	/** @returns {Promise<ClockInitialPhaseOffset>} */
	async getClockInitialPhaseOffset5() {
		const ab = await Common.getClockInitialPhaseOffset5(this.#aBus)
		return Converter.decodeClockInitialPhaseOffset5(ab)
	}

	/**
	 * @param {ClockInitialPhaseOffset} param
	 * @returns {Promise<void>}
	*/
	async setClockInitialPhaseOffset5(param) {
		return Common.setClockInitialPhaseOffset5(this.#aBus, Converter.encodeClockInitialPhaseOffset5(param))
	}

	/** @returns {Promise<PLLReset>} */
	async getPLLReset() {
		const ab = await Common.getPLLReset(this.#aBus)
		return Converter.decodePLLReset(ab)
	}

	/**
	 * @param {Partial<PLLReset>} param
	 * @returns {Promise<void>}
	*/
	async setPLLReset(param) {
		return Common.setPLLReset(this.#aBus, Converter.encodePLLReset(param))
	}

	/** @returns {Promise<CrystalInternalLoadCapacitance>} */
	async getCrystalInternalLoadCapacitance() {
		const ab = await Common.getCrystalInternalLoadCapacitance(this.#aBus)
		return Converter.decodeCrystalInternalLoadCapacitance(ab)
	}

	/**
	 * @param {CrystalInternalLoadCapacitance} param
	 * @returns {Promise<void>}
	*/
	async setCrystalInternalLoadCapacitance(param) {
		return Common.setCrystalInternalLoadCapacitance(this.#aBus, Converter.encodeCrystalInternalLoadCapacitance(param))
	}
}