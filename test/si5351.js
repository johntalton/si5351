import { describe, it, beforeEach } from 'node:test'
import assert from 'node:assert/strict'

import { I2CAddressedBus } from '@johntalton/and-other-delights'

import {
	SI5351,
	REGISTER,
	PLL_SOURCE
} from '@johntalton/si5351'

/** @import { I2CBus } from '@johntalton/and-other-delights' */

/** @implements {I2CBus} */
class MockBus {
	readList = []
	writeList = []

	name = 'mock'
	supportsScan = false
	supportsMultiByteDataAddress = true

	async readI2cBlock(address, cmd, length, target) {

		this.readList.push({ address, cmd, byteLength: length })

		return {
			bytesRead: length,
			buffer: new ArrayBuffer(length)
		}
	}

	async writeI2cBlock(address, cmd, length, buffer) {

		this.writeList.push({ address, cmd, byteLength: length })

		return {
			bytesWritten: length,
			buffer
		}
	}
}


describe('SI5351', () => {
	const context = {}

	beforeEach(() => {
		context.bus = new MockBus()
		context.abus = new I2CAddressedBus(context.bus, 0x60)
		context.device = new SI5351(context.abus)
	})

	describe('getDeviceStatus', () => {
		it('should get', async () => {
			const result = await context.device.getDeviceStatus()
			assert.equal(context.bus.readList.length, 1)
			assert.equal(context.bus.readList[0].cmd, REGISTER.DEVICE_STATUS)
			assert.equal(context.bus.readList[0].byteLength, 1)
		})
	})

	describe('getInterruptStatusSticky', () => {
		it('should get', async () => {
			const result = await context.device.getInterruptStatusSticky()
			assert.equal(context.bus.readList.length, 1)
			assert.equal(context.bus.readList[0].cmd, REGISTER.INTERRUPT_STATUS_STICKY)
			assert.equal(context.bus.readList[0].byteLength, 1)
		})
	})

	describe('getInterruptStatusMask', () => {
		it('should get', async () => {
			const result = await context.device.getInterruptStatusMask()
			assert.equal(context.bus.readList.length, 1)
			assert.equal(context.bus.readList[0].cmd, REGISTER.INTERRUPT_STATUS_MASK)
			assert.equal(context.bus.readList[0].byteLength, 1)
		})
	})

	describe('getOutputEnableControl', () => {
		it('should get', async () => {
			const result = await context.device.getOutputEnableControl()
			assert.equal(context.bus.readList.length, 1)
			assert.equal(context.bus.readList[0].cmd, REGISTER.OUTPUT_ENABLE_CONTROL)
			assert.equal(context.bus.readList[0].byteLength, 1)
		})
	})

	describe('getPinEnabledControl', () => {
		it('should get', async () => {
			const result = await context.device.getPinEnabledControl()
			assert.equal(context.bus.readList.length, 1)
			assert.equal(context.bus.readList[0].cmd, REGISTER.OEB_PIN_ENABLED_CONTROL)
			assert.equal(context.bus.readList[0].byteLength, 1)
		})
	})

	describe('getPLLInputSource', () => {
		it('should get', async () => {
			const result = await context.device.getPLLInputSource()
			assert.equal(context.bus.readList.length, 1)
			assert.equal(context.bus.readList[0].cmd, REGISTER.PLL_INPUT_SOURCE)
			assert.equal(context.bus.readList[0].byteLength, 1)
		})
	})

	describe('getClockControl0', () => {
		it('should get', async () => {
			const result = await context.device.getClockControl0()
			assert.equal(context.bus.readList.length, 1)
			assert.equal(context.bus.readList[0].cmd, REGISTER.CLK0_CONTROL)
			assert.equal(context.bus.readList[0].byteLength, 1)
		})
	})

	describe('getClockControl1', () => {
		it('should get', async () => {
			const result = await context.device.getClockControl1()
			assert.equal(context.bus.readList.length, 1)
			assert.equal(context.bus.readList[0].cmd, REGISTER.CLK1_CONTROL)
			assert.equal(context.bus.readList[0].byteLength, 1)
		})
	})

	describe('getClockControl2', () => {
		it('should get', async () => {
			const result = await context.device.getClockControl2()
			assert.equal(context.bus.readList.length, 1)
			assert.equal(context.bus.readList[0].cmd, REGISTER.CLK2_CONTROL)
			assert.equal(context.bus.readList[0].byteLength, 1)
		})
	})

	describe('getClockControl3', () => {
		it('should get', async () => {
			const result = await context.device.getClockControl3()
			assert.equal(context.bus.readList.length, 1)
			assert.equal(context.bus.readList[0].cmd, REGISTER.CLK3_CONTROL)
			assert.equal(context.bus.readList[0].byteLength, 1)
		})
	})

	describe('getClockControl4', () => {
		it('should get', async () => {
			const result = await context.device.getClockControl4()
			assert.equal(context.bus.readList.length, 1)
			assert.equal(context.bus.readList[0].cmd, REGISTER.CLK4_CONTROL)
			assert.equal(context.bus.readList[0].byteLength, 1)
		})
	})

	describe('getClockControl5', () => {
		it('should get', async () => {
			const result = await context.device.getClockControl5()
			assert.equal(context.bus.readList.length, 1)
			assert.equal(context.bus.readList[0].cmd, REGISTER.CLK5_CONTROL)
			assert.equal(context.bus.readList[0].byteLength, 1)
		})
	})

	describe('getClockControl6', () => {
		it('should get', async () => {
			const result = await context.device.getClockControl6()
			assert.equal(context.bus.readList.length, 1)
			assert.equal(context.bus.readList[0].cmd, REGISTER.CLK6_CONTROL)
			assert.equal(context.bus.readList[0].byteLength, 1)
		})
	})

	describe('getClockControl7', () => {
		it('should get', async () => {
			const result = await context.device.getClockControl7()
			assert.equal(context.bus.readList.length, 1)
			assert.equal(context.bus.readList[0].cmd, REGISTER.CLK7_CONTROL)
			assert.equal(context.bus.readList[0].byteLength, 1)
		})
	})

	describe('getClockDisableState3_0', () => {
		it('should get', async () => {
			const result = await context.device.getClockDisableState3_0()
			assert.equal(context.bus.readList.length, 1)
			assert.equal(context.bus.readList[0].cmd, REGISTER.CLK_3_0_DISABLE_STATE)
			assert.equal(context.bus.readList[0].byteLength, 1)
		})
	})

	describe('getClockDisableState7_4', () => {
		it('should get', async () => {
			const result = await context.device.getClockDisableState7_4()
			assert.equal(context.bus.readList.length, 1)
			assert.equal(context.bus.readList[0].cmd, REGISTER.CLK_7_4_DISABLE_STATE)
			assert.equal(context.bus.readList[0].byteLength, 1)
		})
	})

	describe('getMultiSynthParameters0', () => {
		it('should get', async () => {
			const result = await context.device.getMultiSynthParameters0()
			assert.equal(context.bus.readList.length, 1)
			assert.equal(context.bus.readList[0].cmd, REGISTER.MULTI_SYNTH_0_PARAMETERS)
			assert.equal(context.bus.readList[0].byteLength, 8)
		})
	})

	describe('getMultiSynthParameters1', () => {
		it('should get', async () => {
			const result = await context.device.getMultiSynthParameters1()
			assert.equal(context.bus.readList.length, 1)
			assert.equal(context.bus.readList[0].cmd, REGISTER.MULTI_SYNTH_1_PARAMETERS)
			assert.equal(context.bus.readList[0].byteLength, 8)
		})
	})

	describe('getMultiSynthParameters2', () => {
		it('should get', async () => {
			const result = await context.device.getMultiSynthParameters2()
			assert.equal(context.bus.readList.length, 1)
			assert.equal(context.bus.readList[0].cmd, REGISTER.MULTI_SYNTH_2_PARAMETERS)
			assert.equal(context.bus.readList[0].byteLength, 8)
		})
	})

	describe('getMultiSynthParameters3', () => {
		it('should get', async () => {
			const result = await context.device.getMultiSynthParameters3()
			assert.equal(context.bus.readList.length, 1)
			assert.equal(context.bus.readList[0].cmd, REGISTER.MULTI_SYNTH_3_PARAMETERS)
			assert.equal(context.bus.readList[0].byteLength, 8)
		})
	})

	describe('getMultiSynthParameters4', () => {
		it('should get', async () => {
			const result = await context.device.getMultiSynthParameters4()
			assert.equal(context.bus.readList.length, 1)
			assert.equal(context.bus.readList[0].cmd, REGISTER.MULTI_SYNTH_4_PARAMETERS)
			assert.equal(context.bus.readList[0].byteLength, 8)
		})
	})

	describe('getMultiSynthParameters5', () => {
		it('should get', async () => {
			const result = await context.device.getMultiSynthParameters5()
			assert.equal(context.bus.readList.length, 1)
			assert.equal(context.bus.readList[0].cmd, REGISTER.MULTI_SYNTH_5_PARAMETERS)
			assert.equal(context.bus.readList[0].byteLength, 8)
		})
	})

	describe('getMultiSynthParameters6', () => {
		it('should get', async () => {
			const result = await context.device.getMultiSynthParameters6()
			assert.equal(context.bus.readList.length, 1)
			assert.equal(context.bus.readList[0].cmd, REGISTER.MULTI_SYNTH_6_PARAMETERS)
			assert.equal(context.bus.readList[0].byteLength, 1)
		})
	})

	describe('getMultiSynthParameters7', () => {
		it('should get', async () => {
			const result = await context.device.getMultiSynthParameters7()
			assert.equal(context.bus.readList.length, 1)
			assert.equal(context.bus.readList[0].cmd, REGISTER.MULTI_SYNTH_7_PARAMETERS)
			assert.equal(context.bus.readList[0].byteLength, 1)
		})
	})

	describe('getClockOutputDivider6_7', () => {
		it('should get', async () => {
			const result = await context.device.getClockOutputDivider6_7()
			assert.equal(context.bus.readList.length, 1)
			assert.equal(context.bus.readList[0].cmd, REGISTER.CLOCK_6_AND_7_OUTPUT_DIVIDER)
			assert.equal(context.bus.readList[0].byteLength, 1)
		})
	})

	describe('getClockInitialPhaseOffset0', () => {
		it('should get', async () => {
			const result = await context.device.getClockInitialPhaseOffset0()
			assert.equal(context.bus.readList.length, 1)
			assert.equal(context.bus.readList[0].cmd, REGISTER.CLK0_INITIAL_PHASE_OFFSET)
			assert.equal(context.bus.readList[0].byteLength, 1)
		})
	})

	describe('getClockInitialPhaseOffset1', () => {
		it('should get', async () => {
			const result = await context.device.getClockInitialPhaseOffset1()
			assert.equal(context.bus.readList.length, 1)
			assert.equal(context.bus.readList[0].cmd, REGISTER.CLK1_INITIAL_PHASE_OFFSET)
			assert.equal(context.bus.readList[0].byteLength, 1)
		})
	})

	describe('getClockInitialPhaseOffset2', () => {
		it('should get', async () => {
			const result = await context.device.getClockInitialPhaseOffset2()
			assert.equal(context.bus.readList.length, 1)
			assert.equal(context.bus.readList[0].cmd, REGISTER.CLK2_INITIAL_PHASE_OFFSET)
			assert.equal(context.bus.readList[0].byteLength, 1)
		})
	})

	describe('getClockInitialPhaseOffset3', () => {
		it('should get', async () => {
			const result = await context.device.getClockInitialPhaseOffset3()
			assert.equal(context.bus.readList.length, 1)
			assert.equal(context.bus.readList[0].cmd, REGISTER.CLK3_INITIAL_PHASE_OFFSET)
			assert.equal(context.bus.readList[0].byteLength, 1)
		})
	})

	describe('getClockInitialPhaseOffset4', () => {
		it('should get', async () => {
			const result = await context.device.getClockInitialPhaseOffset4()
			assert.equal(context.bus.readList.length, 1)
			assert.equal(context.bus.readList[0].cmd, REGISTER.CLK4_INITIAL_PHASE_OFFSET)
			assert.equal(context.bus.readList[0].byteLength, 1)
		})
	})

	describe('getClockInitialPhaseOffset5', () => {
		it('should get', async () => {
			const result = await context.device.getClockInitialPhaseOffset5()
			assert.equal(context.bus.readList.length, 1)
			assert.equal(context.bus.readList[0].cmd, REGISTER.CLK5_INITIAL_PHASE_OFFSET)
			assert.equal(context.bus.readList[0].byteLength, 1)
		})
	})

	describe('getPLLReset', () => {
		it('should get', async () => {
			const result = await context.device.getPLLReset()
			assert.equal(context.bus.readList.length, 1)
			assert.equal(context.bus.readList[0].cmd, REGISTER.PLL_RESET)
			assert.equal(context.bus.readList[0].byteLength, 1)
		})
	})

	describe('getCrystalInternalLoadCapacitance', () => {
		it('should get', async () => {
			const result = await context.device.getCrystalInternalLoadCapacitance()
			assert.equal(context.bus.readList.length, 1)
			assert.equal(context.bus.readList[0].cmd, REGISTER.CRYSTAL_INTERNAL_LOAD_CAPACITANCE)
			assert.equal(context.bus.readList[0].byteLength, 1)
		})
	})




	//
	//
	//



	describe('setInterruptStatusSticky', () => {
		it('should set', async () => {
			await context.device.setInterruptStatusSticky({

			})

			assert.equal(context.bus.writeList.length, 1)
			assert.equal(context.bus.writeList[0].byteLength, 1)
		})
	})

	describe('setInterruptStatusMask', () => {
		it('should set', async () => {
			await context.device.setInterruptStatusMask({

			})

			assert.equal(context.bus.writeList.length, 1)
			assert.equal(context.bus.writeList[0].byteLength, 1)
		})
	})

	describe('setOutputEnableControl', () => {
		it('should set', async () => {
			await context.device.setOutputEnableControl({

			})

			assert.equal(context.bus.writeList.length, 1)
			assert.equal(context.bus.writeList[0].byteLength, 1)
		})
	})

	describe('setPinEnabledControl', () => {
		it('should set', async () => {
			await context.device.setPinEnabledControl({

			})

			assert.equal(context.bus.writeList.length, 1)
			assert.equal(context.bus.writeList[0].byteLength, 1)
		})
	})

	describe('setPLLInputSource', () => {
		it('should set', async () => {
			await context.device.setPLLInputSource({
				sourcePLLA: PLL_SOURCE.CLOCK_IN,
				sourcePLLB: PLL_SOURCE.CLOCK_IN
			})

			assert.equal(context.bus.writeList.length, 1)
			assert.equal(context.bus.writeList[0].byteLength, 1)
		})
	})

	describe('setClockControl0', () => {
		it('should set', async () => {
			await context.device.setClockControl0({

			})

			assert.equal(context.bus.writeList.length, 1)
			assert.equal(context.bus.writeList[0].byteLength, 1)
		})
	})

	describe('setClockControl1', () => {
		it('should set', async () => {
			await context.device.setClockControl1({

			})

			assert.equal(context.bus.writeList.length, 1)
			assert.equal(context.bus.writeList[0].byteLength, 1)
		})
	})

	describe('setClockControl2', () => {
		it('should set', async () => {
			await context.device.setClockControl2({

			})

			assert.equal(context.bus.writeList.length, 1)
			assert.equal(context.bus.writeList[0].byteLength, 1)
		})
	})

	describe('setClockControl3', () => {
		it('should set', async () => {
			await context.device.setClockControl3({

			})

			assert.equal(context.bus.writeList.length, 1)
			assert.equal(context.bus.writeList[0].byteLength, 1)
		})
	})

	describe('setClockControl4', () => {
		it('should set', async () => {
			await context.device.setClockControl4({

			})

			assert.equal(context.bus.writeList.length, 1)
			assert.equal(context.bus.writeList[0].byteLength, 1)
		})
	})

	describe('setClockControl5', () => {
		it('should set', async () => {
			await context.device.setClockControl5({

			})

			assert.equal(context.bus.writeList.length, 1)
			assert.equal(context.bus.writeList[0].byteLength, 1)
		})
	})

	describe('setClockControl6', () => {
		it('should set', async () => {
			await context.device.setClockControl6({

			})

			assert.equal(context.bus.writeList.length, 1)
			assert.equal(context.bus.writeList[0].byteLength, 1)
		})
	})

	describe('setClockControl7', () => {
		it('should set', async () => {
			await context.device.setClockControl7({

			})

			assert.equal(context.bus.writeList.length, 1)
			assert.equal(context.bus.writeList[0].byteLength, 1)
		})
	})

	describe('setClockDisableState3_0', () => {
		it('should set', async () => {
			await context.device.setClockDisableState3_0({

			})

			assert.equal(context.bus.writeList.length, 1)
			assert.equal(context.bus.writeList[0].byteLength, 1)
		})
	})

	describe('setClockDisableState7_4', () => {
		it('should set', async () => {
			await context.device.setClockDisableState7_4({

			})

			assert.equal(context.bus.writeList.length, 1)
			assert.equal(context.bus.writeList[0].byteLength, 1)
		})
	})

	describe('setMultiSynthParameters0', () => {
		it('should set', async () => {
			await context.device.setMultiSynthParameters0({
				p1: 0, p2: 0, p3: 0, div: 0
			})

			assert.equal(context.bus.writeList.length, 1)
			assert.equal(context.bus.writeList[0].byteLength, 8)
		})
	})

	describe('setMultiSynthParameters1', () => {
		it('should set', async () => {
			await context.device.setMultiSynthParameters1({
				p1: 0, p2: 0, p3: 0, div: 0
			})

			assert.equal(context.bus.writeList.length, 1)
			assert.equal(context.bus.writeList[0].byteLength, 8)
		})
	})

	describe('setMultiSynthParameters2', () => {
		it('should set', async () => {
			await context.device.setMultiSynthParameters2({
				p1: 0, p2: 0, p3: 0, div: 0
			})

			assert.equal(context.bus.writeList.length, 1)
			assert.equal(context.bus.writeList[0].byteLength, 8)
		})
	})

	describe('setMultiSynthParameters3', () => {
		it('should set', async () => {
			await context.device.setMultiSynthParameters3({
				p1: 0, p2: 0, p3: 0, div: 0
			})

			assert.equal(context.bus.writeList.length, 1)
			assert.equal(context.bus.writeList[0].byteLength, 8)
		})
	})

	describe('setMultiSynthParameters4', () => {
		it('should set', async () => {
			await context.device.setMultiSynthParameters4({
				p1: 0, p2: 0, p3: 0, div: 0
			})

			assert.equal(context.bus.writeList.length, 1)
			assert.equal(context.bus.writeList[0].byteLength, 8)
		})
	})

	describe('setMultiSynthParameters5', () => {
		it('should set', async () => {
			await context.device.setMultiSynthParameters5({
				p1: 0, p2: 0, p3: 0, div: 0
			})

			assert.equal(context.bus.writeList.length, 1)
			assert.equal(context.bus.writeList[0].byteLength, 8)
		})
	})

	describe('setMultiSynthParameters6', () => {
		it('should set', async () => {
			await context.device.setMultiSynthParameters6({

			})

			assert.equal(context.bus.writeList.length, 1)
			assert.equal(context.bus.writeList[0].byteLength, 1)
		})
	})

	describe('setMultiSynthParameters7', () => {
		it('should set', async () => {
			await context.device.setMultiSynthParameters7({

			})

			assert.equal(context.bus.writeList.length, 1)
			assert.equal(context.bus.writeList[0].byteLength, 1)
		})
	})

	describe('setClockOutputDivider6_7', () => {
		it('should set', async () => {
			await context.device.setClockOutputDivider6_7({

			})

			assert.equal(context.bus.writeList.length, 1)
			assert.equal(context.bus.writeList[0].byteLength, 1)
		})
	})

	describe('setClockInitialPhaseOffset0', () => {
		it('should set', async () => {
			await context.device.setClockInitialPhaseOffset0(0)

			assert.equal(context.bus.writeList.length, 1)
			assert.equal(context.bus.writeList[0].byteLength, 1)
		})
	})

	describe('setClockInitialPhaseOffset1', () => {
		it('should set', async () => {
			await context.device.setClockInitialPhaseOffset1(0)

			assert.equal(context.bus.writeList.length, 1)
			assert.equal(context.bus.writeList[0].byteLength, 1)
		})
	})

	describe('setClockInitialPhaseOffset2', () => {
		it('should set', async () => {
			await context.device.setClockInitialPhaseOffset2(0)

			assert.equal(context.bus.writeList.length, 1)
			assert.equal(context.bus.writeList[0].byteLength, 1)
		})
	})

	describe('setClockInitialPhaseOffset3', () => {
		it('should set', async () => {
			await context.device.setClockInitialPhaseOffset3(0)

			assert.equal(context.bus.writeList.length, 1)
			assert.equal(context.bus.writeList[0].byteLength, 1)
		})
	})

	describe('setClockInitialPhaseOffset4', () => {
		it('should set', async () => {
			await context.device.setClockInitialPhaseOffset4(0)

			assert.equal(context.bus.writeList.length, 1)
			assert.equal(context.bus.writeList[0].byteLength, 1)
		})
	})

	describe('setClockInitialPhaseOffset5', () => {
		it('should set', async () => {
			await context.device.setClockInitialPhaseOffset5(0)

			assert.equal(context.bus.writeList.length, 1)
			assert.equal(context.bus.writeList[0].byteLength, 1)
		})
	})

	describe('setPLLReset', () => {
		it('should set', async () => {
			await context.device.setPLLReset({

			})

			assert.equal(context.bus.writeList.length, 1)
			assert.equal(context.bus.writeList[0].cmd, REGISTER.PLL_RESET)
			assert.equal(context.bus.writeList[0].byteLength, 1)
		})
	})

	describe('setCrystalInternalLoadCapacitance', () => {
		it('should set', async () => {
			await context.device.setCrystalInternalLoadCapacitance({

			})

			assert.equal(context.bus.writeList.length, 1)
			assert.equal(context.bus.writeList[0].cmd, REGISTER.CRYSTAL_INTERNAL_LOAD_CAPACITANCE)
			assert.equal(context.bus.writeList[0].byteLength, 1)
		})
	})

	//
	//
	//

	describe('getClockInitialPhaseOffset', () => {
		it('should get 0', async () => {
			const result = await context.device.getClockInitialPhaseOffset(0)
			assert.equal(context.bus.readList.length, 1)
			assert.equal(context.bus.readList[0].cmd, REGISTER.CLK0_INITIAL_PHASE_OFFSET)
			assert.equal(context.bus.readList[0].byteLength, 1)
		})

		it('should get 1', async () => {
			const result = await context.device.getClockInitialPhaseOffset(1)
			assert.equal(context.bus.readList.length, 1)
			assert.equal(context.bus.readList[0].cmd, REGISTER.CLK1_INITIAL_PHASE_OFFSET)
			assert.equal(context.bus.readList[0].byteLength, 1)
		})

		it('should get 2', async () => {
			const result = await context.device.getClockInitialPhaseOffset(2)
			assert.equal(context.bus.readList.length, 1)
			assert.equal(context.bus.readList[0].cmd, REGISTER.CLK2_INITIAL_PHASE_OFFSET)
			assert.equal(context.bus.readList[0].byteLength, 1)
		})

		it('should get 3', async () => {
			const result = await context.device.getClockInitialPhaseOffset(3)
			assert.equal(context.bus.readList.length, 1)
			assert.equal(context.bus.readList[0].cmd, REGISTER.CLK3_INITIAL_PHASE_OFFSET)
			assert.equal(context.bus.readList[0].byteLength, 1)
		})

		it('should get 4', async () => {
			const result = await context.device.getClockInitialPhaseOffset(4)
			assert.equal(context.bus.readList.length, 1)
			assert.equal(context.bus.readList[0].cmd, REGISTER.CLK4_INITIAL_PHASE_OFFSET)
			assert.equal(context.bus.readList[0].byteLength, 1)
		})

		it('should get 5', async () => {
			const result = await context.device.getClockInitialPhaseOffset(5)
			assert.equal(context.bus.readList.length, 1)
			assert.equal(context.bus.readList[0].cmd, REGISTER.CLK5_INITIAL_PHASE_OFFSET)
			assert.equal(context.bus.readList[0].byteLength, 1)
		})

		it('should reject when index out of bounds', async () => {
			await assert.rejects(async () => await context.device.getClockInitialPhaseOffset(42))
		})
	})

	describe('setClockInitialPhaseOffset', () => {
		it('should set 0', async () => {
			const result = await context.device.setClockInitialPhaseOffset(0, 0)
			assert.equal(context.bus.writeList.length, 1)
			assert.equal(context.bus.writeList[0].cmd, REGISTER.CLK0_INITIAL_PHASE_OFFSET)
			assert.equal(context.bus.writeList[0].byteLength, 1)
		})

		it('should set 1', async () => {
			const result = await context.device.setClockInitialPhaseOffset(1, 0)
			assert.equal(context.bus.writeList.length, 1)
			assert.equal(context.bus.writeList[0].cmd, REGISTER.CLK1_INITIAL_PHASE_OFFSET)
			assert.equal(context.bus.writeList[0].byteLength, 1)
		})

		it('should set 2', async () => {
			const result = await context.device.setClockInitialPhaseOffset(2, 0)
			assert.equal(context.bus.writeList.length, 1)
			assert.equal(context.bus.writeList[0].cmd, REGISTER.CLK2_INITIAL_PHASE_OFFSET)
			assert.equal(context.bus.writeList[0].byteLength, 1)
		})

		it('should set 3', async () => {
			const result = await context.device.setClockInitialPhaseOffset(3, 0)
			assert.equal(context.bus.writeList.length, 1)
			assert.equal(context.bus.writeList[0].cmd, REGISTER.CLK3_INITIAL_PHASE_OFFSET)
			assert.equal(context.bus.writeList[0].byteLength, 1)
		})

		it('should set 4', async () => {
			const result = await context.device.setClockInitialPhaseOffset(4, 0)
			assert.equal(context.bus.writeList.length, 1)
			assert.equal(context.bus.writeList[0].cmd, REGISTER.CLK4_INITIAL_PHASE_OFFSET)
			assert.equal(context.bus.writeList[0].byteLength, 1)
		})

		it('should set 5', async () => {
			const result = await context.device.setClockInitialPhaseOffset(5, 0)
			assert.equal(context.bus.writeList.length, 1)
			assert.equal(context.bus.writeList[0].cmd, REGISTER.CLK5_INITIAL_PHASE_OFFSET)
			assert.equal(context.bus.writeList[0].byteLength, 1)
		})

		it('should reject when index out of bounds', async () => {
			await assert.rejects(async () => await context.device.setClockInitialPhaseOffset(42, 0))
		})
	})

	describe('getClockControl', () => {
		it('should get 0', async () => {
			const result = await context.device.getClockControl(0)
			assert.equal(context.bus.readList.length, 1)
			assert.equal(context.bus.readList[0].byteLength, 1)
			assert.equal(context.bus.readList[0].cmd, REGISTER.CLK0_CONTROL)
		})

		it('should get 1', async () => {
			const result = await context.device.getClockControl(1)
			assert.equal(context.bus.readList.length, 1)
			assert.equal(context.bus.readList[0].byteLength, 1)
			assert.equal(context.bus.readList[0].cmd, REGISTER.CLK1_CONTROL)
		})

		it('should get 2', async () => {
			const result = await context.device.getClockControl(2)
			assert.equal(context.bus.readList.length, 1)
			assert.equal(context.bus.readList[0].byteLength, 1)
			assert.equal(context.bus.readList[0].cmd, REGISTER.CLK2_CONTROL)
		})

		it('should get 3', async () => {
			const result = await context.device.getClockControl(3)
			assert.equal(context.bus.readList.length, 1)
			assert.equal(context.bus.readList[0].byteLength, 1)
			assert.equal(context.bus.readList[0].cmd, REGISTER.CLK3_CONTROL)
		})

		it('should get 4', async () => {
			const result = await context.device.getClockControl(4)
			assert.equal(context.bus.readList.length, 1)
			assert.equal(context.bus.readList[0].byteLength, 1)
			assert.equal(context.bus.readList[0].cmd, REGISTER.CLK4_CONTROL)
		})

		it('should get 5', async () => {
			const result = await context.device.getClockControl(5)
			assert.equal(context.bus.readList.length, 1)
			assert.equal(context.bus.readList[0].byteLength, 1)
			assert.equal(context.bus.readList[0].cmd, REGISTER.CLK5_CONTROL)
		})

		it('should get 6', async () => {
			const result = await context.device.getClockControl(6)
			assert.equal(context.bus.readList.length, 1)
			assert.equal(context.bus.readList[0].byteLength, 1)
			assert.equal(context.bus.readList[0].cmd, REGISTER.CLK6_CONTROL)
		})

		it('should get 7', async () => {
			const result = await context.device.getClockControl(7)
			assert.equal(context.bus.readList.length, 1)
			assert.equal(context.bus.readList[0].byteLength, 1)
			assert.equal(context.bus.readList[0].cmd, REGISTER.CLK7_CONTROL)
		})

		it('should reject when index ouf or bounds', async () => {
			await assert.rejects(async () => await context.device.getClockControl(42))
		})
	})

	describe('setClockControl', () => {
		it('should set 0', async () => {
			await context.device.setClockControl(0, {})
			assert.equal(context.bus.writeList.length, 1)
			assert.equal(context.bus.writeList[0].byteLength, 1)
			assert.equal(context.bus.writeList[0].cmd, REGISTER.CLK0_CONTROL)
		})

		it('should set 1', async () => {
			await context.device.setClockControl(1, {})
			assert.equal(context.bus.writeList.length, 1)
			assert.equal(context.bus.writeList[0].byteLength, 1)
			assert.equal(context.bus.writeList[0].cmd, REGISTER.CLK1_CONTROL)
		})

		it('should set 2', async () => {
			await context.device.setClockControl(2, {})
			assert.equal(context.bus.writeList.length, 1)
			assert.equal(context.bus.writeList[0].byteLength, 1)
			assert.equal(context.bus.writeList[0].cmd, REGISTER.CLK2_CONTROL)
		})

		it('should set 3', async () => {
			await context.device.setClockControl(3, {})
			assert.equal(context.bus.writeList.length, 1)
			assert.equal(context.bus.writeList[0].byteLength, 1)
			assert.equal(context.bus.writeList[0].cmd, REGISTER.CLK3_CONTROL)
		})

		it('should set 4', async () => {
			await context.device.setClockControl(4, {})
			assert.equal(context.bus.writeList.length, 1)
			assert.equal(context.bus.writeList[0].byteLength, 1)
			assert.equal(context.bus.writeList[0].cmd, REGISTER.CLK4_CONTROL)
		})

		it('should set 5', async () => {
			await context.device.setClockControl(5, {})
			assert.equal(context.bus.writeList.length, 1)
			assert.equal(context.bus.writeList[0].byteLength, 1)
			assert.equal(context.bus.writeList[0].cmd, REGISTER.CLK5_CONTROL)
		})

		it('should set 6', async () => {
			await context.device.setClockControl(6, {})
			assert.equal(context.bus.writeList.length, 1)
			assert.equal(context.bus.writeList[0].byteLength, 1)
			assert.equal(context.bus.writeList[0].cmd, REGISTER.CLK6_CONTROL)
		})

		it('should set 7', async () => {
			await context.device.setClockControl(7, {})
			assert.equal(context.bus.writeList.length, 1)
			assert.equal(context.bus.writeList[0].byteLength, 1)
			assert.equal(context.bus.writeList[0].cmd, REGISTER.CLK7_CONTROL)
		})

		it('should reject when index ouf or bounds', async () => {
			await assert.rejects(async () => await context.device.setClockControl(42, {}))
		})
	})
})