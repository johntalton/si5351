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
 * ClockDisabledState,
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

		const SYS_INIT =
		const LOL_B =
		const LOL_A =
		const LOS =
		const REVID =

		return {

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

		const SYS_INIT_STKY =
		const LOL_B_STKY =
		const LOL_A_STKY =
		const LOS_STKY =

		return {

		}
	}

	/**
	 * @param {InterruptStatusSticky} param
	 * @returns {I2CBufferSource}
	 */
	static encodeInterruptStatusSticky(param) {

	}

	/**
	 * @param {I2CBufferSource} buffer
	 * @returns {InterruptStatusMask}
	*/
	static decodeInterruptStatusMask(buffer) {
		const u8 = ArrayBuffer.isView(buffer) ?
			new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength) :
			new Uint8Array(buffer, 0, buffer.byteLength)

		const SYS_INIT_MASK =
		const LOL_B_MASK =
		const LOL_A_MASK =
		const LOS_MASK =

		return {

		}
	}

	/**
	 * @param {InterruptStatusMask} param
	 * @returns {I2CBufferSource}
	 */
	static encodeInterruptStatusMask(param) {

	}

	/**
	 * @param {I2CBufferSource} buffer
	 * @returns {OutputEnableControl}
	*/
	static decodeOutputEnableControl(buffer) {
		const u8 = ArrayBuffer.isView(buffer) ?
			new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength) :
			new Uint8Array(buffer, 0, buffer.byteLength)

		const CLK7_OEB =
		const CLK6_OEB =
		const CLK5_OEB =
		const CLK4_OEB =
		const CLK3_OEB =
		const CLK2_OEB =
		const CLK1_OEB =
		const CLK0_OEB =

		return {

		}
	}

	/**
	 * @param {OutputEnableControl} param
	 * @returns {I2CBufferSource}
	 */
	static encodeOutputEnableControl(param) {

	}

	/**
	 * @param {I2CBufferSource} buffer
	 * @returns {PinEnabledControl}
	*/
	static decodePinEnabledControl(buffer) {
		const u8 = ArrayBuffer.isView(buffer) ?
			new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength) :
			new Uint8Array(buffer, 0, buffer.byteLength)

		const OEB_CLK7 =
		const OEB_CLK6 =
		const OEB_CLK5 =
		const OEB_CLK4 =
		const OEB_CLK3 =
		const OEB_CLK2 =
		const OEB_CLK1 =
		const OEB_CLK0 =

		return {

		}
	}

	/**
	 * @param {PinEnabledControl} param
	 * @returns {I2CBufferSource}
	 */
	static encodePinEnabledControl(param) {

	}

	/**
	 * @param {I2CBufferSource} buffer
	 * @returns {PLLInputSource}
	*/
	static decodePLLInputSource(buffer) {
		const u8 = ArrayBuffer.isView(buffer) ?
			new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength) :
			new Uint8Array(buffer, 0, buffer.byteLength)

		const PLLB_SRC =
		const PLLA_SRC =

		return {

		}
	}

	/**
	 * @param {PLLInputSource} param
	 * @returns {I2CBufferSource}
	 */
	static encodePLLInputSource(param) {

	}

	/**
	 * @param {I2CBufferSource} buffer
	 * @returns {ClockControl}
	 */
	static #decodeClockControl(buffer) {
		const u8 = ArrayBuffer.isView(buffer) ?
			new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength) :
			new Uint8Array(buffer, 0, buffer.byteLength)

		const CLK0_PDN =
		const MS0_INT =
		const MS0_SRC =
		const CLK0_INV =
		const CLK0_SRC =
		const CLK0_IDRV =

		return {

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
	static encodeClockControl0(param) {

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

	}

	/**
	 * @param {I2CBufferSource} buffer
	 * @returns {ClockDisabledState}
	*/
	static decodeClockDisableState3_0(buffer) {
		const u8 = ArrayBuffer.isView(buffer) ?
			new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength) :
			new Uint8Array(buffer, 0, buffer.byteLength)

		const CLK3_DIS_STATE =
		const CLK2_DIS_STATE =
		const CLK1_DIS_STATE =
		const CLK0_DIS_STATE =

		return {

		}
	}

	/**
	 * @param {ClockDisabledState} param
	 * @returns {I2CBufferSource}
	 */
	static encodeClockDisableState3_0(param) {

	}

	/**
	 * @param {I2CBufferSource} buffer
	 * @returns {ClockDisabledState}
	*/
	static decodeClockDisableState7_4(buffer) {
		const u8 = ArrayBuffer.isView(buffer) ?
			new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength) :
			new Uint8Array(buffer, 0, buffer.byteLength)

		const CLK7_DIS_STATE =
		const CLK6_DIS_STATE =
		const CLK5_DIS_STATE =
		const CLK4_DIS_STATE =

		return {

		}
	}

	/**
	 * @param {ClockDisabledState} param
	 * @returns {I2CBufferSource}
	 */
	static encodeClockDisableState7_4(param) {

	}

	/**
	 * @param {I2CBufferSource} buffer
	 * @returns {MultiSynthParameters0}
	*/
	static decodeMultiSynthParameters0(buffer) {
		const u8 = ArrayBuffer.isView(buffer) ?
			new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength) :
			new Uint8Array(buffer, 0, buffer.byteLength)

		return {

		}
	}

	/**
	 * @param {MultiSynthParameters0} param
	 * @returns {I2CBufferSource}
	 */
	static encodeMultiSynthParameters0(param) {

	}

	/**
	 * @param {I2CBufferSource} buffer
	 * @returns {MultiSynthParameters1}
	*/
	static decodeMultiSynthParameters1(buffer) {
		const u8 = ArrayBuffer.isView(buffer) ?
			new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength) :
			new Uint8Array(buffer, 0, buffer.byteLength)

		return {

		}
	}

	/**
	 * @param {MultiSynthParameters1} param
	 * @returns {I2CBufferSource}
	 */
	static encodeMultiSynthParameters1(param) {

	}

	/**
	 * @param {I2CBufferSource} buffer
	 * @returns {MultiSynthParameters2}
	*/
	static decodeMultiSynthParameters2(buffer) {
		const u8 = ArrayBuffer.isView(buffer) ?
			new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength) :
			new Uint8Array(buffer, 0, buffer.byteLength)

		return {

		}
	}

	/**
	 * @param {MultiSynthParameters2} param
	 * @returns {I2CBufferSource}
	 */
	static encodeMultiSynthParameters2(param) {

	}

	/**
	 * @param {I2CBufferSource} buffer
	 * @returns {MultiSynthParameters3}
	*/
	static decodeMultiSynthParameters3(buffer) {
		const u8 = ArrayBuffer.isView(buffer) ?
			new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength) :
			new Uint8Array(buffer, 0, buffer.byteLength)

		return {

		}
	}

	/**
	 * @param {MultiSynthParameters3} param
	 * @returns {I2CBufferSource}
	 */
	static encodeMultiSynthParameters3(param) {

	}

	/**
	 * @param {I2CBufferSource} buffer
	 * @returns {MultiSynthParameters4}
	*/
	static decodeMultiSynthParameters4(buffer) {
		const u8 = ArrayBuffer.isView(buffer) ?
			new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength) :
			new Uint8Array(buffer, 0, buffer.byteLength)

		return {

		}
	}

	/**
	 * @param {MultiSynthParameters4} param
	 * @returns {I2CBufferSource}
	 */
	static encodeMultiSynthParameters4(param) {

	}

	/**
	 * @param {I2CBufferSource} buffer
	 * @returns {MultiSynthParameters5}
	*/
	static decodeMultiSynthParameters5(buffer) {
		const u8 = ArrayBuffer.isView(buffer) ?
			new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength) :
			new Uint8Array(buffer, 0, buffer.byteLength)

		return {

		}
	}

	/**
	 * @param {MultiSynthParameters5} param
	 * @returns {I2CBufferSource}
	 */
	static encodeMultiSynthParameters5(param) {

	}

	/**
	 * @param {I2CBufferSource} buffer
	 * @returns {MultiSynthParameters6}
	*/
	static decodeMultiSynthParameters6(buffer) {
		const u8 = ArrayBuffer.isView(buffer) ?
			new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength) :
			new Uint8Array(buffer, 0, buffer.byteLength)

		return {

		}
	}

	/**
	 * @param {MultiSynthParameters6} param
	 * @returns {I2CBufferSource}
	 */
	static encodeMultiSynthParameters6(param) {

	}

	/**
	 * @param {I2CBufferSource} buffer
	 * @returns {MultiSynthParameters7}
	*/
	static decodeMultiSynthParameters7(buffer) {
		const u8 = ArrayBuffer.isView(buffer) ?
			new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength) :
			new Uint8Array(buffer, 0, buffer.byteLength)

		return {

		}
	}

	/**
	 * @param {MultiSynthParameters7} param
	 * @returns {I2CBufferSource}
	 */
	static encodeMultiSynthParameters7(param) {

	}

	/**
	 * @param {I2CBufferSource} buffer
	 * @returns {ClockOutputDivider}
	 */
	static decodeClockOutputDivider6_7(buffer) {
		const u8 = ArrayBuffer.isView(buffer) ?
			new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength) :
			new Uint8Array(buffer, 0, buffer.byteLength)

		const R7_DIV =
		const R6_DIV =

		return {

		}
	}

	/**
	 * @param {ClockOutputDivider} param
	 * @returns {I2CBufferSource}
	 */
	static encodeClockOutputDivider6_7(param) {

	}

	/**
	 * @param {I2CBufferSource} buffer
	 * @returns {ClockInitialPhaseOffset}
	 */
	static #decodeClockInitialPhaseOffset(buffer) {
		const u8 = ArrayBuffer.isView(buffer) ?
			new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength) :
			new Uint8Array(buffer, 0, buffer.byteLength)

		const CLKX_PHOFF =

		return {

		}
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

	}

	/**
	 * @param {I2CBufferSource} buffer
	 * @returns {PLLReset}
	 */
	static decodePLLReset(buffer) {
		const u8 = ArrayBuffer.isView(buffer) ?
			new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength) :
			new Uint8Array(buffer, 0, buffer.byteLength)

		const PLLA_RST =
		const PLLB_RST =

		return {

		}
	}

	/**
	 * @param {PLLReset} param
	 * @returns {I2CBufferSource}
	 */
	static encodePLLReset(param) {

	}

	/**
	 * @param {I2CBufferSource} buffer
	 * @returns {CrystalInternalLoadCapacitance}
	 */
	static decodeCrystalInternalLoadCapacitance(buffer) {
		const u8 = ArrayBuffer.isView(buffer) ?
			new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength) :
			new Uint8Array(buffer, 0, buffer.byteLength)

		const XTAL_CL =

		return {

		}
	}

	/**
	 * @param {CrystalInternalLoadCapacitance} param
	 * @returns {I2CBufferSource}
	 */
	static encodeCrystalInternalLoadCapacitance(param) {

	}

}