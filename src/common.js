import {
	MULTI_SYNTH_PARAMETER_0_SIZE,
	MULTI_SYNTH_PARAMETER_1_SIZE,
	MULTI_SYNTH_PARAMETER_2_SIZE,
	MULTI_SYNTH_PARAMETER_3_SIZE,
	MULTI_SYNTH_PARAMETER_4_SIZE,
	MULTI_SYNTH_PARAMETER_5_SIZE,
	MULTI_SYNTH_PARAMETER_6_SIZE,
	MULTI_SYNTH_PARAMETER_7_SIZE,
	REGISTER,
	SINGLE_BYTE
} from './defs.js'

/**
 * @import { I2CAddressedBus, I2CBufferSource } from '@johntalton/and-other-delights'
 */

export class Common {
	/**
	 * @param {I2CAddressedBus} bus
	 * @returns {Promise<I2CBufferSource>}
	*/
	static async getDeviceStatus(bus) { return bus.readI2cBlock(REGISTER.DEVICE_STATUS, SINGLE_BYTE) }

	/**
	 * @param {I2CAddressedBus} bus
	 * @returns {Promise<I2CBufferSource>}
	*/
	static async getInterruptStatusSticky(bus) { return bus.readI2cBlock(REGISTER.INTERRUPT_STATUS_STICKY, SINGLE_BYTE) }
	/**
	 * @param {I2CAddressedBus} bus
	 * @returns {Promise<I2CBufferSource>}
	*/
	static async getInterruptStatusMask(bus) { return bus.readI2cBlock(REGISTER.INTERRUPT_STATUS_MASK, SINGLE_BYTE) }
	/**
	 * @param {I2CAddressedBus} bus
	 * @returns {Promise<I2CBufferSource>}
	*/
	static async getOutputEnableControl(bus) { return bus.readI2cBlock(REGISTER.OUTPUT_ENABLE_CONTROL, SINGLE_BYTE) }

	/**
	 * @param {I2CAddressedBus} bus
	 * @returns {Promise<I2CBufferSource>}
	*/
	static async getPinEnabledControl(bus) { return bus.readI2cBlock(REGISTER.OEB_PIN_ENABLED_CONTROL, SINGLE_BYTE) }

	/**
	 * @param {I2CAddressedBus} bus
	 * @returns {Promise<I2CBufferSource>}
	*/
	static async getPLLInputSource(bus) { return bus.readI2cBlock(REGISTER.PLL_INPUT_SOURCE, SINGLE_BYTE) }

	/**
	 * @param {I2CAddressedBus} bus
	 * @returns {Promise<I2CBufferSource>}
	*/
	static async getClockControl0(bus) { return bus.readI2cBlock(REGISTER.CLK0_CONTROL, SINGLE_BYTE) }
	/**
	 * @param {I2CAddressedBus} bus
	 * @returns {Promise<I2CBufferSource>}
	*/
	static async getClockControl1(bus) { return bus.readI2cBlock(REGISTER.CLK1_CONTROL, SINGLE_BYTE) }
	/**
	 * @param {I2CAddressedBus} bus
	 * @returns {Promise<I2CBufferSource>}
	*/
	static async getClockControl2(bus) { return bus.readI2cBlock(REGISTER.CLK2_CONTROL, SINGLE_BYTE) }
	/**
	 * @param {I2CAddressedBus} bus
	 * @returns {Promise<I2CBufferSource>}
	*/
	static async getClockControl3(bus) { return bus.readI2cBlock(REGISTER.CLK3_CONTROL, SINGLE_BYTE) }
	/**
	 * @param {I2CAddressedBus} bus
	 * @returns {Promise<I2CBufferSource>}
	*/
	static async getClockControl4(bus) { return bus.readI2cBlock(REGISTER.CLK4_CONTROL, SINGLE_BYTE) }
	/**
	 * @param {I2CAddressedBus} bus
	 * @returns {Promise<I2CBufferSource>}
	*/
	static async getClockControl5(bus) { return bus.readI2cBlock(REGISTER.CLK5_CONTROL, SINGLE_BYTE) }
	/**
	 * @param {I2CAddressedBus} bus
	 * @returns {Promise<I2CBufferSource>}
	*/
	static async getClockControl6(bus) { return bus.readI2cBlock(REGISTER.CLK6_CONTROL, SINGLE_BYTE) }
	/**
	 * @param {I2CAddressedBus} bus
	 * @returns {Promise<I2CBufferSource>}
	*/
	static async getClockControl7(bus) { return bus.readI2cBlock(REGISTER.CLK7_CONTROL, SINGLE_BYTE) }

	/**
	 * @param {I2CAddressedBus} bus
	 * @returns {Promise<I2CBufferSource>}
	*/
	static async getClockDisableState3_0(bus) { return bus.readI2cBlock(REGISTER.CLK_3_0_DISABLE_STATE, SINGLE_BYTE) }
	/**
	 * @param {I2CAddressedBus} bus
	 * @returns {Promise<I2CBufferSource>}
	*/
	static async getClockDisableState7_4(bus) { return bus.readI2cBlock(REGISTER.CLK_7_4_DISABLE_STATE, SINGLE_BYTE) }

	/**
	 * @param {I2CAddressedBus} bus
	 * @returns {Promise<I2CBufferSource>}
	*/
	static async getMultiSynthParameters0(bus) { return bus.readI2cBlock(REGISTER.MULTI_SYNTH_0_PARAMETERS, MULTI_SYNTH_PARAMETER_0_SIZE) }
	/**
	 * @param {I2CAddressedBus} bus
	 * @returns {Promise<I2CBufferSource>}
	*/
	static async getMultiSynthParameters1(bus) { return bus.readI2cBlock(REGISTER.MULTI_SYNTH_1_PARAMETERS, MULTI_SYNTH_PARAMETER_1_SIZE) }
	/**
	 * @param {I2CAddressedBus} bus
	 * @returns {Promise<I2CBufferSource>}
	*/
	static async getMultiSynthParameters2(bus) { return bus.readI2cBlock(REGISTER.MULTI_SYNTH_2_PARAMETERS, MULTI_SYNTH_PARAMETER_2_SIZE) }
	/**
	 * @param {I2CAddressedBus} bus
	 * @returns {Promise<I2CBufferSource>}
	*/
	static async getMultiSynthParameters3(bus) { return bus.readI2cBlock(REGISTER.MULTI_SYNTH_3_PARAMETERS, MULTI_SYNTH_PARAMETER_3_SIZE) }
	/**
	 * @param {I2CAddressedBus} bus
	 * @returns {Promise<I2CBufferSource>}
	*/
	static async getMultiSynthParameters4(bus) { return bus.readI2cBlock(REGISTER.MULTI_SYNTH_4_PARAMETERS, MULTI_SYNTH_PARAMETER_4_SIZE) }
	/**
	 * @param {I2CAddressedBus} bus
	 * @returns {Promise<I2CBufferSource>}
	*/
	static async getMultiSynthParameters5(bus) { return bus.readI2cBlock(REGISTER.MULTI_SYNTH_5_PARAMETERS, MULTI_SYNTH_PARAMETER_5_SIZE) }
	/**
	 * @param {I2CAddressedBus} bus
	 * @returns {Promise<I2CBufferSource>}
	*/
	static async getMultiSynthParameters6(bus) { return bus.readI2cBlock(REGISTER.MULTI_SYNTH_6_PARAMETERS, MULTI_SYNTH_PARAMETER_6_SIZE) }
	/**
	 * @param {I2CAddressedBus} bus
	 * @returns {Promise<I2CBufferSource>}
	*/
	static async getMultiSynthParameters7(bus) { return bus.readI2cBlock(REGISTER.MULTI_SYNTH_7_PARAMETERS, MULTI_SYNTH_PARAMETER_7_SIZE) }

	/**
	 * @param {I2CAddressedBus} bus
	 * @returns {Promise<I2CBufferSource>}
	*/
	static async getClockOutputDivider6_7(bus) { return bus.readI2cBlock(REGISTER.CLOCK_6_AND_7_OUTPUT_DIVIDER, SINGLE_BYTE) }

	/**
	 * @param {I2CAddressedBus} bus
	 * @returns {Promise<I2CBufferSource>}
	*/
	static async getClockInitialPhaseOffset0(bus) { return bus.readI2cBlock(REGISTER.CLK0_INITIAL_PHASE_OFFSET, SINGLE_BYTE) }
	/**
	 * @param {I2CAddressedBus} bus
	 * @returns {Promise<I2CBufferSource>}
	*/
	static async getClockInitialPhaseOffset1(bus) { return bus.readI2cBlock(REGISTER.CLK1_INITIAL_PHASE_OFFSET, SINGLE_BYTE) }
	/**
	 * @param {I2CAddressedBus} bus
	 * @returns {Promise<I2CBufferSource>}
	*/
	static async getClockInitialPhaseOffset2(bus) { return bus.readI2cBlock(REGISTER.CLK2_INITIAL_PHASE_OFFSET, SINGLE_BYTE) }
	/**
	 * @param {I2CAddressedBus} bus
	 * @returns {Promise<I2CBufferSource>}
	*/
	static async getClockInitialPhaseOffset3(bus) { return bus.readI2cBlock(REGISTER.CLK3_INITIAL_PHASE_OFFSET, SINGLE_BYTE) }
	/**
	 * @param {I2CAddressedBus} bus
	 * @returns {Promise<I2CBufferSource>}
	*/
	static async getClockInitialPhaseOffset4(bus) { return bus.readI2cBlock(REGISTER.CLK4_INITIAL_PHASE_OFFSET, SINGLE_BYTE) }
	/**
	 * @param {I2CAddressedBus} bus
	 * @returns {Promise<I2CBufferSource>}
	*/
	static async getClockInitialPhaseOffset5(bus) { return bus.readI2cBlock(REGISTER.CLK5_INITIAL_PHASE_OFFSET, SINGLE_BYTE) }

	/**
	 * @param {I2CAddressedBus} bus
	 * @returns {Promise<I2CBufferSource>}
	*/
	static async getPLLReset(bus) { return bus.readI2cBlock(REGISTER.PLL_RESET, SINGLE_BYTE) }
	/**
	 * @param {I2CAddressedBus} bus
	 * @returns {Promise<I2CBufferSource>}
	*/
	static async getCrystalInternalLoadCapacitance(bus) { return bus.readI2cBlock(REGISTER.CRYSTAL_INTERNAL_LOAD_CAPACITANCE, SINGLE_BYTE) }


	//
	//
	//

	/**
	 * @param {I2CAddressedBus} bus
	 * @param {I2CBufferSource} buffer
	 */
	static async setInterruptStatusSticky(bus, buffer) {}
	/**
	 * @param {I2CAddressedBus} bus
	 * @param {I2CBufferSource} buffer
	 */
	static async setInterruptStatusMask(bus, buffer) {}
	/**
	 * @param {I2CAddressedBus} bus
	 * @param {I2CBufferSource} buffer
	 */
	static async setOutputEnableControl(bus, buffer) {}

	/**
	 * @param {I2CAddressedBus} bus
	 * @param {I2CBufferSource} buffer
	 */
	static async setPinEnabledControl(bus, buffer) {}

	/**
	 * @param {I2CAddressedBus} bus
	 * @param {I2CBufferSource} buffer
	 */
	static async setPLLInputSource(bus, buffer) {}

	/**
	 * @param {I2CAddressedBus} bus
	 * @param {I2CBufferSource} buffer
	 */
	static async setClockControl0(bus, buffer) {}
	/**
	 * @param {I2CAddressedBus} bus
	 * @param {I2CBufferSource} buffer
	 */
	static async setClockControl1(bus, buffer) {}
	/**
	 * @param {I2CAddressedBus} bus
	 * @param {I2CBufferSource} buffer
	 */
	static async setClockControl2(bus, buffer) {}
	/**
	 * @param {I2CAddressedBus} bus
	 * @param {I2CBufferSource} buffer
	 */
	static async setClockControl3(bus, buffer) {}
	/**
	 * @param {I2CAddressedBus} bus
	 * @param {I2CBufferSource} buffer
	 */
	static async setClockControl4(bus, buffer) {}
	/**
	 * @param {I2CAddressedBus} bus
	 * @param {I2CBufferSource} buffer
	 */
	static async setClockControl5(bus, buffer) {}
	/**
	 * @param {I2CAddressedBus} bus
	 * @param {I2CBufferSource} buffer
	 */
	static async setClockControl6(bus, buffer) {}
	/**
	 * @param {I2CAddressedBus} bus
	 * @param {I2CBufferSource} buffer
	 */
	static async setClockControl7(bus, buffer) {}

	/**
	 * @param {I2CAddressedBus} bus
	 * @param {I2CBufferSource} buffer
	 */
	static async setClockDisableState3_0(bus, buffer) {}
	/**
	 * @param {I2CAddressedBus} bus
	 * @param {I2CBufferSource} buffer
	 */
	static async setClockDisableState7_4(bus, buffer) {}

	/**
	 * @param {I2CAddressedBus} bus
	 * @param {I2CBufferSource} buffer
	 */
	static async setMultiSynthParameters0(bus, buffer) {}
	/**
	 * @param {I2CAddressedBus} bus
	 * @param {I2CBufferSource} buffer
	 */
	static async setMultiSynthParameters1(bus, buffer) {}
	/**
	 * @param {I2CAddressedBus} bus
	 * @param {I2CBufferSource} buffer
	 */
	static async setMultiSynthParameters2(bus, buffer) {}
	/**
	 * @param {I2CAddressedBus} bus
	 * @param {I2CBufferSource} buffer
	 */
	static async setMultiSynthParameters3(bus, buffer) {}
	/**
	 * @param {I2CAddressedBus} bus
	 * @param {I2CBufferSource} buffer
	 */
	static async setMultiSynthParameters4(bus, buffer) {}
	/**
	 * @param {I2CAddressedBus} bus
	 * @param {I2CBufferSource} buffer
	 */
	static async setMultiSynthParameters5(bus, buffer) {}
	/**
	 * @param {I2CAddressedBus} bus
	 * @param {I2CBufferSource} buffer
	 */
	static async setMultiSynthParameters6(bus, buffer) {}
	/**
	 * @param {I2CAddressedBus} bus
	 * @param {I2CBufferSource} buffer
	 */
	static async setMultiSynthParameters7(bus, buffer) {}

	/**
	 * @param {I2CAddressedBus} bus
	 * @param {I2CBufferSource} buffer
	 */
	static async setClockOutputDivider6_7(bus, buffer) {}

	/**
	 * @param {I2CAddressedBus} bus
	 * @param {I2CBufferSource} buffer
	 */
	static async setClockInitialPhaseOffset0(bus, buffer) {}
	/**
	 * @param {I2CAddressedBus} bus
	 * @param {I2CBufferSource} buffer
	 */
	static async setClockInitialPhaseOffset1(bus, buffer) {}
	/**
	 * @param {I2CAddressedBus} bus
	 * @param {I2CBufferSource} buffer
	 */
	static async setClockInitialPhaseOffset2(bus, buffer) {}
	/**
	 * @param {I2CAddressedBus} bus
	 * @param {I2CBufferSource} buffer
	 */
	static async setClockInitialPhaseOffset3(bus, buffer) {}
	/**
	 * @param {I2CAddressedBus} bus
	 * @param {I2CBufferSource} buffer
	 */
	static async setClockInitialPhaseOffset4(bus, buffer) {}
	/**
	 * @param {I2CAddressedBus} bus
	 * @param {I2CBufferSource} buffer
	 */
	static async setClockInitialPhaseOffset5(bus, buffer) {}

	/**
	 * @param {I2CAddressedBus} bus
	 * @param {I2CBufferSource} buffer
	 */
	static async setPLLReset(bus, buffer) {}
	/**
	 * @param {I2CAddressedBus} bus
	 * @param {I2CBufferSource} buffer
	 */
	static async setCrystalInternalLoadCapacitance(bus, buffer) {}
}