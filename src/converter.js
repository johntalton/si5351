import { SINGLE_BIT_MASK, THREE_BIT_MASK, TWO_BIT_MASK } from './defs.js'

/**
 * @import { I2CBufferSource } from '@johntalton/and-other-delights'
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
 * MultiSynthParameters0,
 * MultiSynthParameters1,
 * MultiSynthParameters2,
 * MultiSynthParameters3,
 * MultiSynthParameters4,
 * MultiSynthParameters5,
 * MultiSynthParameters6,
 * MultiSynthParameters7,
 * ClockOutputDivider,
 * ClockInitialPhaseOffset,
 * PLLReset,
 * CrystalInternalLoadCapacitance
 * } from './defs.js'
 */

export class Converter {
	/**
	 * @param {I2CBufferSource} buffer
	 * @returns {DeviceStatus}
	*/
	static decodeDeviceStatus(buffer) {
		const u8 = ArrayBuffer.isView(buffer) ?
			new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength) :
			new Uint8Array(buffer, 0, buffer.byteLength)

		const [ data ] = u8

		const SYS_INIT = (data >> 7) & SINGLE_BIT_MASK
		const LOL_B = (data >> 6) & SINGLE_BIT_MASK
		const LOL_A = (data >> 5) & SINGLE_BIT_MASK
		const LOS = (data >> 4) & SINGLE_BIT_MASK
		const REVID = data & TWO_BIT_MASK

		return {
			systemInitializing: SYS_INIT === 1,
			lossOfLockPLLB: LOL_B === 1,
			lossOfLockPLLA: LOL_A === 1,
			lossOfSignal: LOS === 1,
			revisionId: REVID
		}
	}

	/**
	 * @param {I2CBufferSource} buffer
	 * @returns {InterruptStatusSticky}
	*/
	static decodeInterruptStatusSticky(buffer) {
		const u8 = ArrayBuffer.isView(buffer) ?
			new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength) :
			new Uint8Array(buffer, 0, buffer.byteLength)

		const [ data ] = u8

		const SYS_INIT_STKY = (data >> 7) & SINGLE_BIT_MASK
		const LOL_B_STKY = (data >> 6) & SINGLE_BIT_MASK
		const LOL_A_STKY = (data >> 5) & SINGLE_BIT_MASK
		const LOS_STKY = (data >> 4) & SINGLE_BIT_MASK

		return {
			systemCalibrationStatus :SYS_INIT_STKY === 1 ,
			lossOfLockPLLB: LOL_B_STKY === 1,
			lossOfLockPLLA: LOL_A_STKY === 1,
			lossOfSignal: LOS_STKY === 1
		}
	}

	/**
	 * @param {InterruptStatusSticky} param
	 * @returns {I2CBufferSource}
	 */
	static encodeInterruptStatusSticky(param) {
		const data = 0
		// todo
		throw new Error('todo')
		return Uint8Array.from([ data ])
	}

	/**
	 * @param {I2CBufferSource} buffer
	 * @returns {InterruptStatusMask}
	*/
	static decodeInterruptStatusMask(buffer) {
		const u8 = ArrayBuffer.isView(buffer) ?
			new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength) :
			new Uint8Array(buffer, 0, buffer.byteLength)

		const [ data ] = u8

		const SYS_INIT_MASK = (data >> 7) & SINGLE_BIT_MASK
		const LOL_B_MASK = (data >> 6) & SINGLE_BIT_MASK
		const LOL_A_MASK = (data >> 5) & SINGLE_BIT_MASK
		const LOS_MASK = (data >> 4) & SINGLE_BIT_MASK

		return {
			systemInitializing: SYS_INIT_MASK === 1,
			lossOfLockPLLB: LOL_B_MASK === 1,
			lossOfLockPLLA: LOL_A_MASK === 1,
			lossOfSignal: LOS_MASK === 1
		}
	}

	/**
	 * @param {InterruptStatusMask} param
	 * @returns {I2CBufferSource}
	 */
	static encodeInterruptStatusMask(param) {
		const data = 0
		// todo
		throw new Error('todo')
		return Uint8Array.from([ data ])
	}

	/**
	 * @param {I2CBufferSource} buffer
	 * @returns {OutputEnableControl}
	*/
	static decodeOutputEnableControl(buffer) {
		const u8 = ArrayBuffer.isView(buffer) ?
			new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength) :
			new Uint8Array(buffer, 0, buffer.byteLength)

		const [ data ] = u8

		const CLK7_OEB = (data >> 7) & SINGLE_BIT_MASK
		const CLK6_OEB = (data >> 6) & SINGLE_BIT_MASK
		const CLK5_OEB = (data >> 5) & SINGLE_BIT_MASK
		const CLK4_OEB = (data >> 4) & SINGLE_BIT_MASK
		const CLK3_OEB = (data >> 3) & SINGLE_BIT_MASK
		const CLK2_OEB = (data >> 2) & SINGLE_BIT_MASK
		const CLK1_OEB = (data >> 1) & SINGLE_BIT_MASK
		const CLK0_OEB = (data >> 0) & SINGLE_BIT_MASK

		return {
			clock7: CLK7_OEB === 0,
			clock6: CLK6_OEB === 0,
			clock5: CLK5_OEB === 0,
			clock4: CLK4_OEB === 0,
			clock3: CLK3_OEB === 0,
			clock2: CLK2_OEB === 0,
			clock1: CLK1_OEB === 0,
			clock0: CLK0_OEB === 0
		}
	}

	/**
	 * @param {OutputEnableControl} param
	 * @returns {I2CBufferSource}
	 */
	static encodeOutputEnableControl(param) {
		const data = 0
		// todo
		throw new Error('todo')
		return Uint8Array.from([ data ])
	}

	/**
	 * @param {I2CBufferSource} buffer
	 * @returns {PinEnabledControl}
	*/
	static decodePinEnabledControl(buffer) {
		const u8 = ArrayBuffer.isView(buffer) ?
			new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength) :
			new Uint8Array(buffer, 0, buffer.byteLength)

		const [ data ] = u8

		const OEB_CLK7 = (data >> 7) & SINGLE_BIT_MASK
		const OEB_CLK6 = (data >> 6) & SINGLE_BIT_MASK
		const OEB_CLK5 = (data >> 5) & SINGLE_BIT_MASK
		const OEB_CLK4 = (data >> 4) & SINGLE_BIT_MASK
		const OEB_CLK3 = (data >> 3) & SINGLE_BIT_MASK
		const OEB_CLK2 = (data >> 2) & SINGLE_BIT_MASK
		const OEB_CLK1 = (data >> 1) & SINGLE_BIT_MASK
		const OEB_CLK0 = (data >> 0) & SINGLE_BIT_MASK

		return {
			clock7: OEB_CLK7 === 0,
			clock6: OEB_CLK6 === 0,
			clock5: OEB_CLK5 === 0,
			clock4: OEB_CLK4 === 0,
			clock3: OEB_CLK3 === 0,
			clock2: OEB_CLK2 === 0,
			clock1: OEB_CLK1 === 0,
			clock0: OEB_CLK0 === 0
		}
	}

	/**
	 * @param {PinEnabledControl} param
	 * @returns {I2CBufferSource}
	 */
	static encodePinEnabledControl(param) {
		const data = 0
		// todo
		throw new Error('todo')
		return Uint8Array.from([ data ])
	}

	/**
	 * @param {I2CBufferSource} buffer
	 * @returns {PLLInputSource}
	*/
	static decodePLLInputSource(buffer) {
		const u8 = ArrayBuffer.isView(buffer) ?
			new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength) :
			new Uint8Array(buffer, 0, buffer.byteLength)

		const [ data ] = u8

		const PLLB_SRC = (data >> 3) & SINGLE_BIT_MASK
		const PLLA_SRC = (data >> 2) & SINGLE_BIT_MASK

		return {
			sourcePPLB: PLLB_SRC,
			sourcePPLA: PLLA_SRC
		}
	}

	/**
	 * @param {PLLInputSource} param
	 * @returns {I2CBufferSource}
	 */
	static encodePLLInputSource(param) {
		const data = 0
		// todo
		throw new Error('todo')
		return Uint8Array.from([ data ])
	}

	/**
	 * @param {I2CBufferSource} buffer
	 * @returns {ClockControl}
	 */
	static #decodeClockControl(buffer) {
		const u8 = ArrayBuffer.isView(buffer) ?
			new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength) :
			new Uint8Array(buffer, 0, buffer.byteLength)

		const [ data ] = u8

		const CLKX_PDN = (data >> 7) & SINGLE_BIT_MASK
		const MSX_INT = (data >> 6) & SINGLE_BIT_MASK
		const MSX_SRC = (data >> 5) & SINGLE_BIT_MASK
		const CLKX_INV = (data >> 4) & SINGLE_BIT_MASK
		const CLKX_SRC = (data >> 2) & TWO_BIT_MASK
		const CLKX_IDRV = (data >> 0) & TWO_BIT_MASK

		return {
			poweredDown: CLKX_PDN === 1,
			integerMode: MSX_INT === 1,
			multiSynthSourceSelect: MSX_SRC, // for 6 and 7 this is FBA and FBB
			inverted: CLKX_INV === 1,
			inputSourceSelect: CLKX_SRC,
			strength: CLKX_IDRV
		}
	}

	/**
	 * @param {I2CBufferSource} buffer
	 * @returns {ClockControl}
	*/
	static decodeClockControl0(buffer) {
		return Converter.#decodeClockControl(buffer)
	}

	/**
	 * @param {ClockControl} param
	 * @returns {I2CBufferSource}
	 */
	static #encodeClockControl(param) {
		const data = 0
		// todo
		throw new Error('todo')
		return Uint8Array.from([ data ])
	}


	/**
	 * @param {ClockControl} param
	 * @returns {I2CBufferSource}
	 */
	static encodeClockControl0(param) {
		return Converter.#encodeClockControl(param)
	}

	/**
	 * @param {I2CBufferSource} buffer
	 * @returns {ClockControl}
	*/
	static decodeClockControl1(buffer) {
		return Converter.#decodeClockControl(buffer)
	}

	/**
	 * @param {ClockControl} param
	 * @returns {I2CBufferSource}
	 */
	static encodeClockControl1(param) {
		return Converter.#encodeClockControl(param)
	}

	/**
	 * @param {I2CBufferSource} buffer
	 * @returns {ClockControl}
	*/
	static decodeClockControl2(buffer) {
		return Converter.#decodeClockControl(buffer)
	}

	/**
	 * @param {ClockControl} param
	 * @returns {I2CBufferSource}
	 */
	static encodeClockControl2(param) {
		return Converter.#encodeClockControl(param)
	}

	/**
	 * @param {I2CBufferSource} buffer
	 * @returns {ClockControl}
	*/
	static decodeClockControl3(buffer) {
		return Converter.#decodeClockControl(buffer)
	}

	/**
	 * @param {ClockControl} param
	 * @returns {I2CBufferSource}
	 */
	static encodeClockControl3(param) {
		return Converter.#encodeClockControl(param)
	}

	/**
	 * @param {I2CBufferSource} buffer
	 * @returns {ClockControl}
	*/
	static decodeClockControl4(buffer) {
		return Converter.#decodeClockControl(buffer)
	}

	/**
	 * @param {ClockControl} param
	 * @returns {I2CBufferSource}
	 */
	static encodeClockControl4(param) {
		return Converter.#encodeClockControl(param)
	}

	/**
	 * @param {I2CBufferSource} buffer
	 * @returns {ClockControl}
	*/
	static decodeClockControl5(buffer) {
		return Converter.#decodeClockControl(buffer)
	}

	/**
	 * @param {ClockControl} param
	 * @returns {I2CBufferSource}
	 */
	static encodeClockControl5(param) {
		return Converter.#encodeClockControl(param)
	}

	/**
	 * @param {I2CBufferSource} buffer
	 * @returns {ClockControl}
	*/
	static decodeClockControl6(buffer) {
		return Converter.#decodeClockControl(buffer)
	}

	/**
	 * @param {ClockControl} param
	 * @returns {I2CBufferSource}
	 */
	static encodeClockControl6(param) {
		return Converter.#encodeClockControl(param)
	}

	/**
	 * @param {I2CBufferSource} buffer
	 * @returns {ClockControl}
	*/
	static decodeClockControl7(buffer) {
		return Converter.#decodeClockControl(buffer)
	}

	/**
	 * @param {ClockControl} param
	 * @returns {I2CBufferSource}
	 */
	static encodeClockControl7(param) {
		return Converter.#encodeClockControl(param)
	}

	/**
	 * @param {I2CBufferSource} buffer
	 * @returns {ClockDisabledState3_0}
	*/
	static decodeClockDisableState3_0(buffer) {
		const u8 = ArrayBuffer.isView(buffer) ?
			new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength) :
			new Uint8Array(buffer, 0, buffer.byteLength)

		const [ data ] = u8

		const CLK3_DIS_STATE = (data >> 6) & TWO_BIT_MASK
		const CLK2_DIS_STATE = (data >> 4) & TWO_BIT_MASK
		const CLK1_DIS_STATE = (data >> 2) & TWO_BIT_MASK
		const CLK0_DIS_STATE = (data >> 0) & TWO_BIT_MASK

		return {
			clock3: CLK3_DIS_STATE,
			clock2: CLK2_DIS_STATE,
			clock1: CLK1_DIS_STATE,
			clock0: CLK0_DIS_STATE
		}
	}

	/**
	 * @param {ClockDisabledState3_0} param
	 * @returns {I2CBufferSource}
	 */
	static encodeClockDisableState3_0(param) {
		const data = 0
		// todo
		throw new Error('todo')
		return Uint8Array.from([ data ])
	}

	/**
	 * @param {I2CBufferSource} buffer
	 * @returns {ClockDisabledState7_4}
	*/
	static decodeClockDisableState7_4(buffer) {
		const u8 = ArrayBuffer.isView(buffer) ?
			new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength) :
			new Uint8Array(buffer, 0, buffer.byteLength)

		const [ data ] = u8

		const CLK7_DIS_STATE = (data >> 6) & TWO_BIT_MASK
		const CLK6_DIS_STATE = (data >> 4) & TWO_BIT_MASK
		const CLK5_DIS_STATE = (data >> 2) & TWO_BIT_MASK
		const CLK4_DIS_STATE = (data >> 0) & TWO_BIT_MASK

		return {
			clock7: CLK7_DIS_STATE,
			clock6: CLK6_DIS_STATE,
			clock5: CLK5_DIS_STATE,
			clock4: CLK4_DIS_STATE
		}
	}

	/**
	 * @param {ClockDisabledState7_4} param
	 * @returns {I2CBufferSource}
	 */
	static encodeClockDisableState7_4(param) {
		const data = 0
		// todo
		throw new Error('todo')
		return Uint8Array.from([ data ])
	}

	/**
	 * @param {I2CBufferSource} buffer
	 * @returns {MultiSynthParameters0}
	*/
	static decodeMultiSynthParameters0(buffer) {
		const u8 = ArrayBuffer.isView(buffer) ?
			new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength) :
			new Uint8Array(buffer, 0, buffer.byteLength)

		// todo
		throw new Error('todo')
		return {

		}
	}

	/**
	 * @param {MultiSynthParameters0} param
	 * @returns {I2CBufferSource}
	 */
	static encodeMultiSynthParameters0(param) {
		// todo
		throw new Error('todo')
	}

	/**
	 * @param {I2CBufferSource} buffer
	 * @returns {MultiSynthParameters1}
	*/
	static decodeMultiSynthParameters1(buffer) {
		const u8 = ArrayBuffer.isView(buffer) ?
			new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength) :
			new Uint8Array(buffer, 0, buffer.byteLength)

		// todo
		throw new Error('todo')
		return {

		}
	}

	/**
	 * @param {MultiSynthParameters1} param
	 * @returns {I2CBufferSource}
	 */
	static encodeMultiSynthParameters1(param) {
		// todo
		throw new Error('todo')
	}

	/**
	 * @param {I2CBufferSource} buffer
	 * @returns {MultiSynthParameters2}
	*/
	static decodeMultiSynthParameters2(buffer) {
		const u8 = ArrayBuffer.isView(buffer) ?
			new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength) :
			new Uint8Array(buffer, 0, buffer.byteLength)

		// todo
		throw new Error('todo')
		return {

		}
	}

	/**
	 * @param {MultiSynthParameters2} param
	 * @returns {I2CBufferSource}
	 */
	static encodeMultiSynthParameters2(param) {
		// todo
		throw new Error('todo')
	}

	/**
	 * @param {I2CBufferSource} buffer
	 * @returns {MultiSynthParameters3}
	*/
	static decodeMultiSynthParameters3(buffer) {
		const u8 = ArrayBuffer.isView(buffer) ?
			new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength) :
			new Uint8Array(buffer, 0, buffer.byteLength)

		// todo
		throw new Error('todo')
		return {

		}
	}

	/**
	 * @param {MultiSynthParameters3} param
	 * @returns {I2CBufferSource}
	 */
	static encodeMultiSynthParameters3(param) {
		// todo
		throw new Error('todo')
	}

	/**
	 * @param {I2CBufferSource} buffer
	 * @returns {MultiSynthParameters4}
	*/
	static decodeMultiSynthParameters4(buffer) {
		const u8 = ArrayBuffer.isView(buffer) ?
			new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength) :
			new Uint8Array(buffer, 0, buffer.byteLength)

		// todo
		throw new Error('todo')
		return {

		}
	}

	/**
	 * @param {MultiSynthParameters4} param
	 * @returns {I2CBufferSource}
	 */
	static encodeMultiSynthParameters4(param) {
		// todo
		throw new Error('todo')
	}

	/**
	 * @param {I2CBufferSource} buffer
	 * @returns {MultiSynthParameters5}
	*/
	static decodeMultiSynthParameters5(buffer) {
		const u8 = ArrayBuffer.isView(buffer) ?
			new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength) :
			new Uint8Array(buffer, 0, buffer.byteLength)

		// todo
		throw new Error('todo')
		return {

		}
	}

	/**
	 * @param {MultiSynthParameters5} param
	 * @returns {I2CBufferSource}
	 */
	static encodeMultiSynthParameters5(param) {
		// todo
		throw new Error('todo')
	}

	/**
	 * @param {I2CBufferSource} buffer
	 * @returns {MultiSynthParameters6}
	*/
	static decodeMultiSynthParameters6(buffer) {
		const u8 = ArrayBuffer.isView(buffer) ?
			new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength) :
			new Uint8Array(buffer, 0, buffer.byteLength)

		// todo
		throw new Error('todo')
		return {

		}
	}

	/**
	 * @param {MultiSynthParameters6} param
	 * @returns {I2CBufferSource}
	 */
	static encodeMultiSynthParameters6(param) {
		// todo
		throw new Error('todo')
	}

	/**
	 * @param {I2CBufferSource} buffer
	 * @returns {MultiSynthParameters7}
	*/
	static decodeMultiSynthParameters7(buffer) {
		const u8 = ArrayBuffer.isView(buffer) ?
			new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength) :
			new Uint8Array(buffer, 0, buffer.byteLength)

		// todo
		throw new Error('todo')
		return {

		}
	}

	/**
	 * @param {MultiSynthParameters7} param
	 * @returns {I2CBufferSource}
	 */
	static encodeMultiSynthParameters7(param) {
		// todo
		throw new Error('todo')
	}

	/**
	 * @param {I2CBufferSource} buffer
	 * @returns {ClockOutputDivider}
	 */
	static decodeClockOutputDivider6_7(buffer) {
		const u8 = ArrayBuffer.isView(buffer) ?
			new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength) :
			new Uint8Array(buffer, 0, buffer.byteLength)

		const [ data ] = u8

		const R7_DIV = (data >> 4) & THREE_BIT_MASK
		const R6_DIV = (data >> 0) & THREE_BIT_MASK

		return {
			dividerR7: R7_DIV,
			dividerR6: R6_DIV
		}
	}

	/**
	 * @param {ClockOutputDivider} param
	 * @returns {I2CBufferSource}
	 */
	static encodeClockOutputDivider6_7(param) {
		const data = 0
		// todo
		throw new Error('todo')
		return Uint8Array.from([ data ])
	}

	/**
	 * @param {I2CBufferSource} buffer
	 * @returns {ClockInitialPhaseOffset}
	 */
	static #decodeClockInitialPhaseOffset(buffer) {
		const u8 = ArrayBuffer.isView(buffer) ?
			new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength) :
			new Uint8Array(buffer, 0, buffer.byteLength)

		const [ data ] = u8

		const CLKX_PHOFF = data & 0b0111_1111

		return CLKX_PHOFF
	}

	/**
	 * @param {I2CBufferSource} buffer
	 * @returns {ClockInitialPhaseOffset}
	 */
	static decodeClockInitialPhaseOffset0(buffer) {
		return this.#decodeClockInitialPhaseOffset(buffer)
	}

	/**
	 * @param {ClockInitialPhaseOffset} buffer
	 * @returns {I2CBufferSource}
	 */
	static #encodeClockInitialPhaseOffset(buffer) {
		const data = 0
		// todo
		throw new Error('todo')
		return Uint8Array.from([ data ])
	}

	/**
	 * @param {ClockInitialPhaseOffset} param
	 * @returns {I2CBufferSource}
	 */
	static encodeClockInitialPhaseOffset0(param) {
		return Converter.#encodeClockInitialPhaseOffset(param)
	}

	/**
	 * @param {I2CBufferSource} buffer
	 * @returns {ClockInitialPhaseOffset}
	 */
	static decodeClockInitialPhaseOffset1(buffer) {
		return this.#decodeClockInitialPhaseOffset(buffer)
	}

	/**
	 * @param {ClockInitialPhaseOffset} param
	 * @returns {I2CBufferSource}
	 */
	static encodeClockInitialPhaseOffset1(param) {
		return Converter.#encodeClockInitialPhaseOffset(param)
	}

	/**
	 * @param {I2CBufferSource} buffer
	 * @returns {ClockInitialPhaseOffset}
	 */
	static decodeClockInitialPhaseOffset2(buffer) {
		return this.#decodeClockInitialPhaseOffset(buffer)
	}

	/**
	 * @param {ClockInitialPhaseOffset} param
	 * @returns {I2CBufferSource}
	 */
	static encodeClockInitialPhaseOffset2(param) {
		return Converter.#encodeClockInitialPhaseOffset(param)
	}

	/**
	 * @param {I2CBufferSource} buffer
	 * @returns {ClockInitialPhaseOffset}
	 */
	static decodeClockInitialPhaseOffset3(buffer) {
		return this.#decodeClockInitialPhaseOffset(buffer)
	}

	/**
	 * @param {ClockInitialPhaseOffset} param
	 * @returns {I2CBufferSource}
	 */
	static encodeClockInitialPhaseOffset3(param) {
		return Converter.#encodeClockInitialPhaseOffset(param)
	}

	/**
	 * @param {I2CBufferSource} buffer
	 * @returns {ClockInitialPhaseOffset}
	 */
	static decodeClockInitialPhaseOffset4(buffer) {
		return this.#decodeClockInitialPhaseOffset(buffer)
	}

	/**
	 * @param {ClockInitialPhaseOffset} param
	 * @returns {I2CBufferSource}
	 */
	static encodeClockInitialPhaseOffset4(param) {
		return Converter.#encodeClockInitialPhaseOffset(param)
	}

	/**
	 * @param {I2CBufferSource} buffer
	 * @returns {ClockInitialPhaseOffset}
	 */
	static decodeClockInitialPhaseOffset5(buffer) {
		return this.#decodeClockInitialPhaseOffset(buffer)
	}

	/**
	 * @param {ClockInitialPhaseOffset} param
	 * @returns {I2CBufferSource}
	 */
	static encodeClockInitialPhaseOffset5(param) {
		return Converter.#encodeClockInitialPhaseOffset(param)
	}

	/**
	 * @param {I2CBufferSource} buffer
	 * @returns {PLLReset}
	 */
	static decodePLLReset(buffer) {
		const u8 = ArrayBuffer.isView(buffer) ?
			new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength) :
			new Uint8Array(buffer, 0, buffer.byteLength)

		const [ data ] = u8

		const PLLA_RST = (data >> 7) & SINGLE_BIT_MASK
		const PLLB_RST = (data >> 5) & SINGLE_BIT_MASK

		return {
			resetPLLB: PLLB_RST === 1,
			resetPLLA: PLLA_RST === 1
		}
	}

	/**
	 * @param {PLLReset} param
	 * @returns {I2CBufferSource}
	 */
	static encodePLLReset(param) {
		const data = 0
		// todo
		throw new Error('todo')
		return Uint8Array.from([ data ])
	}

	/**
	 * @param {I2CBufferSource} buffer
	 * @returns {CrystalInternalLoadCapacitance}
	 */
	static decodeCrystalInternalLoadCapacitance(buffer) {
		const u8 = ArrayBuffer.isView(buffer) ?
			new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength) :
			new Uint8Array(buffer, 0, buffer.byteLength)

		const [ data ] = u8

		const XTAL_CL = (data >> 6) & TWO_BIT_MASK

		return {
			capacitance: XTAL_CL
		}
	}

	/**
	 * @param {CrystalInternalLoadCapacitance} param
	 * @returns {I2CBufferSource}
	 */
	static encodeCrystalInternalLoadCapacitance(param) {
		const data = 0
		// todo
		throw new Error('todo')
		return Uint8Array.from([ data ])
	}

}