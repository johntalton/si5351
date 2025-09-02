import {
	EIGHT_BIT_MASK,
	EIGHTEEN_BIT_MASK,
	FOUR_BIT_MASK,
	MULTI_SYNTH_PARAMETER_0_5_SIZE,
	SEVEN_BIT_MASK,
	SINGLE_BIT_MASK,
	THREE_BIT_MASK,
	TWENTY_BIT_MASK,
	TWO_BIT_MASK
} from './defs.js'

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
 * MultiSynthParameters,
 * MultiSynthParametersBase,
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
			systemCalibrationStatus: SYS_INIT_STKY === 1 ,
			lossOfLockPLLB: LOL_B_STKY === 1,
			lossOfLockPLLA: LOL_A_STKY === 1,
			lossOfSignal: LOS_STKY === 1
		}
	}

	/**
	 * @param {Partial<InterruptStatusSticky>} param
	 * @returns {I2CBufferSource}
	 */
	static encodeInterruptStatusSticky(param) {
		const systemCalibrationStatus = param.systemCalibrationStatus ?? true
		const lossOfLockPLLB = param.lossOfLockPLLB ?? true
		const lossOfLockPLLA = param.lossOfLockPLLA ?? true
		const lossOfSignal = param.lossOfSignal ?? true

		const SYS_INIT_STKY = (systemCalibrationStatus ? 1 : 0) << 7
		const LOL_B_STKY = (lossOfLockPLLB ? 1 : 0) << 6
		const LOL_A_STKY = (lossOfLockPLLA ? 1 : 0) << 5
		const LOS_STKY = (lossOfSignal ? 1 : 0) << 4

		const data = 0
			| SYS_INIT_STKY
			| LOL_B_STKY
			| LOL_A_STKY
			| LOS_STKY

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
		const SYS_INIT_MASK = (param.systemInitializing ? 1 : 0) << 7
		const LOL_B_MASK = (param.lossOfLockPLLB ? 1 : 0) << 6
		const LOL_A_MASK = (param.lossOfLockPLLA ? 1 : 0) << 5
		const LOS_MASK = (param.lossOfSignal ? 1 : 0) << 4

		const data = SYS_INIT_MASK | LOL_B_MASK | LOL_A_MASK | LOS_MASK
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
		const CLK7_OEB = (param.clock7 ? 0 : 1) << 7
		const CLK6_OEB = (param.clock6 ? 0 : 1) << 6
		const CLK5_OEB = (param.clock5 ? 0 : 1) << 5
		const CLK4_OEB = (param.clock4 ? 0 : 1) << 4
		const CLK3_OEB = (param.clock3 ? 0 : 1) << 3
		const CLK2_OEB = (param.clock2 ? 0 : 1) << 2
		const CLK1_OEB = (param.clock1 ? 0 : 1) << 1
		const CLK0_OEB = (param.clock0 ? 0 : 1) << 0

		const data = 0
			| CLK7_OEB
			| CLK6_OEB
			| CLK5_OEB
			| CLK4_OEB
			| CLK3_OEB
			| CLK2_OEB
			| CLK1_OEB
			| CLK0_OEB

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
		const OEB_CLK7 = (param.clock7 ? 0 : 1) << 7
		const OEB_CLK6 = (param.clock6 ? 0 : 1) << 6
		const OEB_CLK5 = (param.clock5 ? 0 : 1) << 5
		const OEB_CLK4 = (param.clock4 ? 0 : 1) << 4
		const OEB_CLK3 = (param.clock3 ? 0 : 1) << 3
		const OEB_CLK2 = (param.clock2 ? 0 : 1) << 2
		const OEB_CLK1 = (param.clock1 ? 0 : 1) << 1
		const OEB_CLK0 = (param.clock0 ? 0 : 1) << 0

		const data = 0
			| OEB_CLK7
			| OEB_CLK6
			| OEB_CLK5
			| OEB_CLK4
			| OEB_CLK3
			| OEB_CLK2
			| OEB_CLK1
			| OEB_CLK0

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
			sourcePLLB: PLLB_SRC,
			sourcePLLA: PLLA_SRC
		}
	}

	/**
	 * @param {PLLInputSource} param
	 * @returns {I2CBufferSource}
	 */
	static encodePLLInputSource(param) {
		const PLLB_SRC = (param.sourcePLLB)
		const PLLA_SRC = (param.sourcePLLA)

		if((PLLB_SRC & SINGLE_BIT_MASK) !== PLLB_SRC) { throw new Error('invalid PLL Source') }
		if((PLLA_SRC & SINGLE_BIT_MASK) !== PLLA_SRC) { throw new Error('invalid PLL Source') }

		const data = 0 | (PLLB_SRC << 3) | (PLLA_SRC << 2)

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
	 * @param {ClockControl} param
	 * @returns {I2CBufferSource}
	 */
	static #encodeClockControl(param) {
		const CLKX_PDN = (param.poweredDown ? 1 : 0) << 7
		const MSX_INT = (param.integerMode ? 1 : 0) << 6
		const MSX_SRC = (param.multiSynthSourceSelect) << 5
		const CLKX_INV = (param.inverted ? 1 : 0) << 4
		const CLKX_SRC = (param.inputSourceSelect) << 2
		const CLKX_IDRV = (param.strength) << 0

		const data = 0
			| CLKX_PDN
			| MSX_INT
			| MSX_SRC
			| CLKX_INV
			| CLKX_SRC
			| CLKX_IDRV

		return Uint8Array.from([ data ])
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
		const CLK3_DIS_STATE = (param.clock3) >> 6
		const CLK2_DIS_STATE = (param.clock2) >> 4
		const CLK1_DIS_STATE = (param.clock1) >> 2
		const CLK0_DIS_STATE = (param.clock0) >> 0

		const data = 0
			| CLK3_DIS_STATE
			| CLK2_DIS_STATE
			| CLK1_DIS_STATE
			| CLK0_DIS_STATE

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
		const CLK7_DIS_STATE = (param.clock7) >> 6
		const CLK6_DIS_STATE = (param.clock6) >> 4
		const CLK5_DIS_STATE = (param.clock5) >> 2
		const CLK4_DIS_STATE = (param.clock4) >> 0

		const data = 0
			| CLK7_DIS_STATE
			| CLK6_DIS_STATE
			| CLK5_DIS_STATE
			| CLK4_DIS_STATE

		return Uint8Array.from([ data ])
	}

	/**
	 * @param {I2CBufferSource} buffer
	 * @returns {MultiSynthParameters}
	*/
	static #decodeMultiSynthParameters(buffer) {
		const u8 = ArrayBuffer.isView(buffer) ?
			new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength) :
			new Uint8Array(buffer, 0, buffer.byteLength)

		if(u8.byteLength !== MULTI_SYNTH_PARAMETER_0_5_SIZE) { throw new Error('byteLength invalid') }

		const [
			p3_msb,
			p3_lsb,
			div_p1_xsb,
			p1_msb,
			p1_lsb,
			p3_xsb_p2_xsb,
			p2_msb,
			p2_lsb
		] = u8

		const div = (div_p1_xsb >> 4) & THREE_BIT_MASK
		const p1_xsb = (div_p1_xsb >> 0) & TWO_BIT_MASK
		const p2_xsb = (p3_xsb_p2_xsb >> 0) & FOUR_BIT_MASK
		const p3_xsb = (p3_xsb_p2_xsb >> 4) & FOUR_BIT_MASK

		const p1 = (p1_xsb << 16) | (p1_msb << 8) | (p1_lsb)
		const p2 = (p2_xsb << 16) | (p2_msb << 8) | (p2_lsb)
		const p3 = (p3_xsb << 16) | (p3_msb << 8) | (p3_lsb)

		return {
			p1, p2, p3, div
		}
	}

	/**
	 * @param {MultiSynthParameters} param
	 * @returns {I2CBufferSource}
	 */
	static #encodeMultiSynthParameters(param) {
		const { p1, p2, p3, div } = param

		if((p1 & EIGHTEEN_BIT_MASK) !== p1) { throw new Error('p1 out of bounds') }
		if((p2 & TWENTY_BIT_MASK) !== p2) { throw new Error('p2 out of bounds') }
		if((p3 & TWENTY_BIT_MASK) !== p3) { throw new Error('p3 out of bounds') }
		if((div & THREE_BIT_MASK) !== div) { throw new Error('div out of bounds') }

		const p1_xsb = (p1 >> 16) & TWO_BIT_MASK
		const p1_msb = (p1 >> 8) & EIGHT_BIT_MASK
		const p1_lsb = (p1 >> 0) & EIGHT_BIT_MASK

		const p2_xsb = (p2 >> 16) & FOUR_BIT_MASK
		const p2_msb = (p2 >> 8) & EIGHT_BIT_MASK
		const p2_lsb = (p2 >> 0) & EIGHT_BIT_MASK

		const p3_xsb = (p3 >> 16) & FOUR_BIT_MASK
		const p3_msb = (p3 >> 8) & EIGHT_BIT_MASK
		const p3_lsb = (p3 >> 0) & EIGHT_BIT_MASK

		const div_p1_xsb = ((div & THREE_BIT_MASK) << 4) | (p1_xsb)
		const p3_xsb_p2_xsb = (p3_xsb << 4) | (p2_xsb)

		return Uint8Array.from([
			p3_msb,
			p3_lsb,
			div_p1_xsb,
			p1_msb,
			p1_lsb,
			p3_xsb_p2_xsb,
			p2_msb,
			p2_lsb
		])
	}

	/**
	 * @param {I2CBufferSource} buffer
	 * @returns {MultiSynthParameters}
	*/
	static decodeMultiSynthParameters0(buffer) {
		return Converter.#decodeMultiSynthParameters(buffer)
	}

	/**
	 * @param {MultiSynthParameters} param
	 * @returns {I2CBufferSource}
	 */
	static encodeMultiSynthParameters0(param) {
		return Converter.#encodeMultiSynthParameters(param)
	}

	/**
	 * @param {I2CBufferSource} buffer
	 * @returns {MultiSynthParameters}
	*/
	static decodeMultiSynthParameters1(buffer) {
		return Converter.#decodeMultiSynthParameters(buffer)
	}

	/**
	 * @param {MultiSynthParameters} param
	 * @returns {I2CBufferSource}
	 */
	static encodeMultiSynthParameters1(param) {
		return Converter.#encodeMultiSynthParameters(param)
	}

	/**
	 * @param {I2CBufferSource} buffer
	 * @returns {MultiSynthParameters}
	*/
	static decodeMultiSynthParameters2(buffer) {
		return Converter.#decodeMultiSynthParameters(buffer)
	}

	/**
	 * @param {MultiSynthParameters} param
	 * @returns {I2CBufferSource}
	 */
	static encodeMultiSynthParameters2(param) {
		return Converter.#encodeMultiSynthParameters(param)
	}

	/**
	 * @param {I2CBufferSource} buffer
	 * @returns {MultiSynthParameters}
	*/
	static decodeMultiSynthParameters3(buffer) {
		return Converter.#decodeMultiSynthParameters(buffer)
	}

	/**
	 * @param {MultiSynthParameters} param
	 * @returns {I2CBufferSource}
	 */
	static encodeMultiSynthParameters3(param) {
		return Converter.#encodeMultiSynthParameters(param)
	}

	/**
	 * @param {I2CBufferSource} buffer
	 * @returns {MultiSynthParameters}
	*/
	static decodeMultiSynthParameters4(buffer) {
		return Converter.#decodeMultiSynthParameters(buffer)
	}

	/**
	 * @param {MultiSynthParameters} param
	 * @returns {I2CBufferSource}
	 */
	static encodeMultiSynthParameters4(param) {
		return Converter.#encodeMultiSynthParameters(param)
	}

	/**
	 * @param {I2CBufferSource} buffer
	 * @returns {MultiSynthParameters}
	*/
	static decodeMultiSynthParameters5(buffer) {
		return Converter.#decodeMultiSynthParameters(buffer)
	}

	/**
	 * @param {MultiSynthParameters} param
	 * @returns {I2CBufferSource}
	 */
	static encodeMultiSynthParameters5(param) {
		return Converter.#encodeMultiSynthParameters(param)
	}

	/**
	 * @param {I2CBufferSource} buffer
	 * @returns {MultiSynthParametersBase}
	*/
	static decodeMultiSynthParameters6(buffer) {
		const u8 = ArrayBuffer.isView(buffer) ?
			new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength) :
			new Uint8Array(buffer, 0, buffer.byteLength)

		const [ p1 ] = u8
		return {
			p1
		}
	}

	/**
	 * @param {MultiSynthParametersBase} param
	 * @returns {I2CBufferSource}
	 */
	static encodeMultiSynthParameters6(param) {
		return Uint8Array.from([ param.p1 ])
	}

	/**
	 * @param {I2CBufferSource} buffer
	 * @returns {MultiSynthParametersBase}
	*/
	static decodeMultiSynthParameters7(buffer) {
		const u8 = ArrayBuffer.isView(buffer) ?
			new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength) :
			new Uint8Array(buffer, 0, buffer.byteLength)

		const [ p1 ] = u8
		return {
			p1
		}
	}

	/**
	 * @param {MultiSynthParametersBase} param
	 * @returns {I2CBufferSource}
	 */
	static encodeMultiSynthParameters7(param) {
		return Uint8Array.from([ param.p1 ])
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
		const R7_DIV = (param.dividerR7) >> 4
		const R6_DIV = (param.dividerR6) >> 0

		const data = 0 | R7_DIV | R6_DIV

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

		const CLKX_PHOFF = data & SEVEN_BIT_MASK

		return CLKX_PHOFF
	}

	/**
	 * @param {ClockInitialPhaseOffset} param
	 * @returns {I2CBufferSource}
	 */
	static #encodeClockInitialPhaseOffset(param) {
		if((param & SEVEN_BIT_MASK) !== param) { throw new RangeError('invalid phase offset')}
		const data = param

		return Uint8Array.from([ data ])
	}

	/**
	 * @param {I2CBufferSource} buffer
	 * @returns {ClockInitialPhaseOffset}
	 */
	static decodeClockInitialPhaseOffset0(buffer) {
		return this.#decodeClockInitialPhaseOffset(buffer)
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

		const PLLB_RST = (data >> 7) & SINGLE_BIT_MASK
		const PLLA_RST = (data >> 5) & SINGLE_BIT_MASK

		return {
			resetPLLB: PLLB_RST === 1,
			resetPLLA: PLLA_RST === 1
		}
	}

	/**
	 * @param {Partial<PLLReset>} param
	 * @returns {I2CBufferSource}
	 */
	static encodePLLReset(param) {
		const resetPLLA = param.resetPLLA ?? false
		const resetPLLB = param.resetPLLB ?? false

		const PLLA_RST = resetPLLA ? 1 : 0
		const PLLB_RST = resetPLLB ? 1 : 0

		const data = 0
			| (PLLB_RST << 7)
			| (PLLA_RST << 5)

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
		const XTAL_CL = (param.capacitance) << 6

		const data = 0 | XTAL_CL

		return Uint8Array.from([ data ])
	}

}