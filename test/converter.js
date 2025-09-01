import { describe, it } from 'node:test'
import assert from 'node:assert/strict'

import {
	Converter,
	CRYSTAL_CAPACITANCE,
	DISABLED_STATE,
	INPUT_SOURCE_SELECT,
	MULTI_SYNTH_SOURCE_SELECT,
	OUTPUT_DIVIDER,
	PLL_SOURCE,
	STRENGTH
} from '@johntalton/si5351'

describe('Converter', () => {
	describe('decodeDeviceStatus', () => {
		it('should decode', () => {
			const u8 = Uint8Array.from([ 0b0000_0000 ])
			const result = Converter.decodeDeviceStatus(u8)
			assert.deepEqual(result, {
				systemInitializing: false,
				lossOfLockPLLB: false,
				lossOfLockPLLA: false,
				lossOfSignal: false,
				revisionId: 0
			})
		})

		it('should decode with unique value', () => {
			const u8 = Uint8Array.from([ 0b1010_0001 ])
			const result = Converter.decodeDeviceStatus(u8)
			assert.deepEqual(result, {
				systemInitializing: true,
				lossOfLockPLLB: false,
				lossOfLockPLLA: true,
				lossOfSignal: false,
				revisionId: 1
			})
		})
	})

	describe('decodeInterruptStatusSticky', () => {
		it('should decode', () => {
			const u8 = Uint8Array.from([ 0b0000_0000 ])
			const result = Converter.decodeInterruptStatusSticky(u8)
			assert.deepEqual(result, {
				systemCalibrationStatus: false,
				lossOfLockPLLB: false,
				lossOfLockPLLA: false,
				lossOfSignal: false
			})
		})

		it('should decode with unique value', () => {
			const u8 = Uint8Array.from([ 0b0110_0000 ])
			const result = Converter.decodeInterruptStatusSticky(u8)
			assert.deepEqual(result, {
				systemCalibrationStatus: false,
				lossOfLockPLLB: true,
				lossOfLockPLLA: true,
				lossOfSignal: false
			})
		})
	})

	describe('decodeInterruptStatusMask', () => {
		it('should decode', () => {
			const u8 = Uint8Array.from([ 0b0000_0000 ])
			const result = Converter.decodeInterruptStatusMask(u8)
			assert.deepEqual(result, {
				systemInitializing: false,
				lossOfLockPLLB: false,
				lossOfLockPLLA: false,
				lossOfSignal: false
			})
		})

		it('should decode with unique values', () => {
			const u8 = Uint8Array.from([ 0b0011_0101 ])
			const result = Converter.decodeInterruptStatusMask(u8)
			assert.deepEqual(result, {
				systemInitializing: false,
				lossOfLockPLLB: false,
				lossOfLockPLLA: true,
				lossOfSignal: true
			})
		})
	})

	describe('decodeOutputEnableControl', () => {
		it('should decode', () => {
			const u8 = Uint8Array.from([ 0b0000_0000 ])
			const result = Converter.decodeOutputEnableControl(u8)
			assert.deepEqual(result, {
				clock7: true,
				clock6: true,
				clock5: true,
				clock4: true,
				clock3: true,
				clock2: true,
				clock1: true,
				clock0: true
			})
		})

		it('should decode with unique value', () => {
			const u8 = Uint8Array.from([ 0b1010_0001 ])
			const result = Converter.decodeOutputEnableControl(u8)
			assert.deepEqual(result, {
				clock7: false,
				clock6: true,
				clock5: false,
				clock4: true,
				clock3: true,
				clock2: true,
				clock1: true,
				clock0: false
			})
		})
	})

	describe('decodePinEnabledControl', () => {
		it('should decode', () => {
			const u8 = Uint8Array.from([ 0b0000_0000 ])
			const result = Converter.decodePinEnabledControl(u8)
			assert.deepEqual(result, {
				clock7: true,
				clock6: true,
				clock5: true,
				clock4: true,
				clock3: true,
				clock2: true,
				clock1: true,
				clock0: true
			})
		})

		it('should decode with unique value', () => {
			const u8 = Uint8Array.from([ 0b0100_1000 ])
			const result = Converter.decodePinEnabledControl(u8)
			assert.deepEqual(result, {
				clock7: true,
				clock6: false,
				clock5: true,
				clock4: true,
				clock3: false,
				clock2: true,
				clock1: true,
				clock0: true
			})
		})
	})

	describe('decodePLLInputSource', () => {
		it('should decode', () => {
			const u8 = Uint8Array.from([ 0b0000_0000 ])
			const result = Converter.decodePLLInputSource(u8)
			assert.deepEqual(result, {
				sourcePLLB: PLL_SOURCE.XTAL,
				sourcePLLA: PLL_SOURCE.XTAL
			})
		})

		it('should decode', () => {
			const u8 = Uint8Array.from([ 0b1111_1000 ])
			const result = Converter.decodePLLInputSource(u8)
			assert.deepEqual(result, {
				sourcePLLB: PLL_SOURCE.CLKIN,
				sourcePLLA: PLL_SOURCE.XTAL
			})
		})
	})

	describe('decodeClockControl0', () => {
		it('should decode', () => {
			const u8 = Uint8Array.from([ 0b0000_0000 ])
			const result = Converter.decodeClockControl0(u8)
			assert.deepEqual(result, {
				poweredDown: false,
				integerMode: false,
				multiSynthSourceSelect: MULTI_SYNTH_SOURCE_SELECT.PLLA,
				inverted: false,
				inputSourceSelect: INPUT_SOURCE_SELECT.XTAL,
				strength: STRENGTH.DRIVE_2_MA
			})
		})

		it('should decode with unique value', () => {
			const u8 = Uint8Array.from([ 0b1100_0000 ])
			const result = Converter.decodeClockControl0(u8)
			assert.deepEqual(result, {
				poweredDown: true,
				integerMode: true,
				multiSynthSourceSelect: MULTI_SYNTH_SOURCE_SELECT.PLLA,
				inverted: false,
				inputSourceSelect: INPUT_SOURCE_SELECT.XTAL,
				strength: STRENGTH.DRIVE_2_MA
			})
		})
	})

	describe('decodeClockControl1', () => {
		it('should decode', () => {
			const u8 = Uint8Array.from([ 0b0000_0000 ])
			const result = Converter.decodeClockControl1(u8)
			assert.deepEqual(result, {
				poweredDown: false,
				integerMode: false,
				multiSynthSourceSelect: MULTI_SYNTH_SOURCE_SELECT.PLLA,
				inverted: false,
				inputSourceSelect: INPUT_SOURCE_SELECT.XTAL,
				strength: STRENGTH.DRIVE_2_MA
			})
		})

		it('should decode with unique value', () => {
			const u8 = Uint8Array.from([ 0b1010_0000 ])
			const result = Converter.decodeClockControl1(u8)
			assert.deepEqual(result, {
				poweredDown: true,
				integerMode: false,
				multiSynthSourceSelect: MULTI_SYNTH_SOURCE_SELECT.PLLB_OR_VCXO,
				inverted: false,
				inputSourceSelect: INPUT_SOURCE_SELECT.XTAL,
				strength: STRENGTH.DRIVE_2_MA
			})
		})
	})

	describe('decodeClockControl2', () => {
		it('should decode', () => {
			const u8 = Uint8Array.from([ 0b0000_0000 ])
			const result = Converter.decodeClockControl2(u8)
			assert.deepEqual(result, {
				poweredDown: false,
				integerMode: false,
				multiSynthSourceSelect: MULTI_SYNTH_SOURCE_SELECT.PLLA,
				inverted: false,
				inputSourceSelect: INPUT_SOURCE_SELECT.XTAL,
				strength: STRENGTH.DRIVE_2_MA
			})
		})

		it('should decode with unique value', () => {
			const u8 = Uint8Array.from([ 0b1000_1101 ])
			const result = Converter.decodeClockControl2(u8)
			assert.deepEqual(result, {
				poweredDown: true,
				integerMode: false,
				multiSynthSourceSelect: MULTI_SYNTH_SOURCE_SELECT.PLLA,
				inverted: false,
				inputSourceSelect: INPUT_SOURCE_SELECT.MULTI_SYNTH,
				strength: STRENGTH.DRIVE_4_MA
			})
		})
	})

	describe('decodeClockControl3', () => {
		it('should decode', () => {
			const u8 = Uint8Array.from([ 0b0000_0000 ])
			const result = Converter.decodeClockControl3(u8)
			assert.deepEqual(result, {
				poweredDown: false,
				integerMode: false,
				multiSynthSourceSelect: MULTI_SYNTH_SOURCE_SELECT.PLLA,
				inverted: false,
				inputSourceSelect: INPUT_SOURCE_SELECT.XTAL,
				strength: STRENGTH.DRIVE_2_MA
			})
		})

		it('should decode with unique value', () => {
			const u8 = Uint8Array.from([ 0b0001_0011 ])
			const result = Converter.decodeClockControl3(u8)
			assert.deepEqual(result, {
				poweredDown: false,
				integerMode: false,
				multiSynthSourceSelect: MULTI_SYNTH_SOURCE_SELECT.PLLA,
				inverted: true,
				inputSourceSelect: INPUT_SOURCE_SELECT.XTAL,
				strength: STRENGTH.DRIVE_8_MA
			})
		})
	})

	describe('decodeClockControl4', () => {
		it('should decode', () => {
			const u8 = Uint8Array.from([ 0b0000_0000 ])
			const result = Converter.decodeClockControl4(u8)
			assert.deepEqual(result, {
				poweredDown: false,
				integerMode: false,
				multiSynthSourceSelect: MULTI_SYNTH_SOURCE_SELECT.PLLA,
				inverted: false,
				inputSourceSelect: INPUT_SOURCE_SELECT.XTAL,
				strength: STRENGTH.DRIVE_2_MA
			})
		})

		it('should decode with unique value', () => {
			const u8 = Uint8Array.from([ 0b1111_1111 ])
			const result = Converter.decodeClockControl4(u8)
			assert.deepEqual(result, {
				poweredDown: true,
				integerMode: true,
				multiSynthSourceSelect: MULTI_SYNTH_SOURCE_SELECT.PLLB_OR_VCXO,
				inverted: true,
				inputSourceSelect: INPUT_SOURCE_SELECT.MULTI_SYNTH,
				strength: STRENGTH.DRIVE_8_MA
			})
		})
	})

	describe('decodeClockControl5', () => {
		it('should decode', () => {
			const u8 = Uint8Array.from([ 0b0000_0000 ])
			const result = Converter.decodeClockControl5(u8)
			assert.deepEqual(result, {
				poweredDown: false,
				integerMode: false,
				multiSynthSourceSelect: MULTI_SYNTH_SOURCE_SELECT.PLLA,
				inverted: false,
				inputSourceSelect: INPUT_SOURCE_SELECT.XTAL,
				strength: STRENGTH.DRIVE_2_MA
			})
		})
	})

	describe('decodeClockControl6', () => {
		it('should decode', () => {
			const u8 = Uint8Array.from([ 0b0000_0000 ])
			const result = Converter.decodeClockControl6(u8)
			assert.deepEqual(result, {
				poweredDown: false,
				integerMode: false,
				multiSynthSourceSelect: MULTI_SYNTH_SOURCE_SELECT.PLLA,
				inverted: false,
				inputSourceSelect: INPUT_SOURCE_SELECT.XTAL,
				strength: STRENGTH.DRIVE_2_MA
			})
		})
	})

	describe('decodeClockControl7', () => {
		it('should decode', () => {
			const u8 = Uint8Array.from([ 0b0000_0000 ])
			const result = Converter.decodeClockControl7(u8)
			assert.deepEqual(result, {
				poweredDown: false,
				integerMode: false,
				multiSynthSourceSelect: MULTI_SYNTH_SOURCE_SELECT.PLLA,
				inverted: false,
				inputSourceSelect: INPUT_SOURCE_SELECT.XTAL,
				strength: STRENGTH.DRIVE_2_MA
			})
		})
	})

	describe('decodeClockDisableState3_0', () => {
		it('should decode', () => {
			const u8 = Uint8Array.from([ 0b0000_0000 ])
			const result = Converter.decodeClockDisableState3_0(u8)
			assert.deepEqual(result, {
				clock3: DISABLED_STATE.LOW,
				clock2: DISABLED_STATE.LOW,
				clock1: DISABLED_STATE.LOW,
				clock0: DISABLED_STATE.LOW
			})
		})

		it('should decode with unique value', () => {
			const u8 = Uint8Array.from([ 0b1100_1000 ])
			const result = Converter.decodeClockDisableState3_0(u8)
			assert.deepEqual(result, {
				clock3: DISABLED_STATE.NEVER,
				clock2: DISABLED_STATE.LOW,
				clock1: DISABLED_STATE.HIGH_IMPEDANCE,
				clock0: DISABLED_STATE.LOW
			})
		})
	})

	describe('decodeClockDisableState7_4', () => {
		it('should decode', () => {
			const u8 = Uint8Array.from([ 0b0000_0000 ])
			const result = Converter.decodeClockDisableState7_4(u8)
			assert.deepEqual(result, {
				clock7: DISABLED_STATE.LOW,
				clock6: DISABLED_STATE.LOW,
				clock5: DISABLED_STATE.LOW,
				clock4: DISABLED_STATE.LOW
			})
		})

		it('should decode with unique value', () => {
			const u8 = Uint8Array.from([ 0b0001_1000 ])
			const result = Converter.decodeClockDisableState7_4(u8)
			assert.deepEqual(result, {
				clock7: DISABLED_STATE.LOW,
				clock6: DISABLED_STATE.HIGH,
				clock5: DISABLED_STATE.HIGH_IMPEDANCE,
				clock4: DISABLED_STATE.LOW
			})
		})
	})

	describe('decodeMultiSynthParameters0', { skip: true }, () => {
		it('should decode', () => {
			const u8 = Uint8Array.from([ 0b0000_0000 ])
			const result = Converter.decodeMultiSynthParameters0(u8)
			assert.equal(result, {})
		})
	})

	describe('decodeMultiSynthParameters1', { skip: true }, () => {
		it('should decode', () => {
			const u8 = Uint8Array.from([ 0b0000_0000 ])
			const result = Converter.decodeMultiSynthParameters1(u8)
			assert.equal(result, {})
		})
	})

	describe('decodeMultiSynthParameters2', { skip: true }, () => {
		it('should decode', () => {
			const u8 = Uint8Array.from([ 0b0000_0000 ])
			const result = Converter.decodeMultiSynthParameters2(u8)
			assert.equal(result, {})
		})
	})

	describe('decodeMultiSynthParameters3', { skip: true }, () => {
		it('should decode', () => {
			const u8 = Uint8Array.from([ 0b0000_0000 ])
			const result = Converter.decodeMultiSynthParameters3(u8)
			assert.equal(result, {})
		})
	})

	describe('decodeMultiSynthParameters4', { skip: true }, () => {
		it('should decode', () => {
			const u8 = Uint8Array.from([ 0b0000_0000 ])
			const result = Converter.decodeMultiSynthParameters4(u8)
			assert.equal(result, {})
		})
	})

	describe('decodeMultiSynthParameters5', { skip: true }, () => {
		it('should decode', () => {
			const u8 = Uint8Array.from([ 0b0000_0000 ])
			const result = Converter.decodeMultiSynthParameters5(u8)
			assert.equal(result, {})
		})
	})

	describe('decodeMultiSynthParameters6', { skip: true }, () => {
		it('should decode', () => {
			const u8 = Uint8Array.from([ 0b0000_0000 ])
			const result = Converter.decodeMultiSynthParameters6(u8)
			assert.equal(result, {})
		})
	})

	describe('decodeMultiSynthParameters7', { skip: true }, () => {
		it('should decode', () => {
			const u8 = Uint8Array.from([ 0b0000_0000 ])
			const result = Converter.decodeMultiSynthParameters7(u8)
			assert.equal(result, {})
		})
	})

	describe('decodeClockOutputDivider6_7', () => {
		it('should decode', () => {
			const u8 = Uint8Array.from([ 0b0000_0000 ])
			const result = Converter.decodeClockOutputDivider6_7(u8)
			assert.deepEqual(result, {
				dividerR7: OUTPUT_DIVIDER.DIVIDE_BY_1,
				dividerR6: OUTPUT_DIVIDER.DIVIDE_BY_1
			})
		})

		it('should decode with unique value', () => {
			const u8 = Uint8Array.from([ 0b0100_0011 ])
			const result = Converter.decodeClockOutputDivider6_7(u8)
			assert.deepEqual(result, {
				dividerR7: OUTPUT_DIVIDER.DIVIDE_BY_16,
				dividerR6: OUTPUT_DIVIDER.DIVIDE_BY_8
			})
		})
	})

	describe('decodeClockInitialPhaseOffset0', () => {
		it('should decode', () => {
			const u8 = Uint8Array.from([ 0b0000_0000 ])
			const result = Converter.decodeClockInitialPhaseOffset0(u8)
			assert.equal(result, 0)
		})

		it('should decode with unique value', () => {
			const u8 = Uint8Array.from([ 42 ])
			const result = Converter.decodeClockInitialPhaseOffset0(u8)
			assert.equal(result, 42)
		})
	})

	describe('decodeClockInitialPhaseOffset1', () => {
		it('should decode', () => {
			const u8 = Uint8Array.from([ 0b0000_0000 ])
			const result = Converter.decodeClockInitialPhaseOffset1(u8)
			assert.equal(result, 0)
		})

		it('should decode with unique value', () => {
			const u8 = Uint8Array.from([ 120 ])
			const result = Converter.decodeClockInitialPhaseOffset1(u8)
			assert.equal(result, 120)
		})
	})

	describe('decodeClockInitialPhaseOffset2', () => {
		it('should decode', () => {
			const u8 = Uint8Array.from([ 0b0000_0000 ])
			const result = Converter.decodeClockInitialPhaseOffset2(u8)
			assert.equal(result, 0)
		})

		it('should decode with unique value', () => {
			const u8 = Uint8Array.from([ 1 ])
			const result = Converter.decodeClockInitialPhaseOffset2(u8)
			assert.equal(result, 1)
		})
	})

	describe('decodeClockInitialPhaseOffset3', () => {
		it('should decode', () => {
			const u8 = Uint8Array.from([ 0b0000_0000 ])
			const result = Converter.decodeClockInitialPhaseOffset3(u8)
			assert.equal(result, 0)
		})

		it('should decode truncate with overflow value', () => {
			const u8 = Uint8Array.from([ 130 ])
			const result = Converter.decodeClockInitialPhaseOffset2(u8)
			assert.equal(result, 2)
		})
	})

	describe('decodeClockInitialPhaseOffset4', () => {
		it('should decode', () => {
			const u8 = Uint8Array.from([ 0b0000_0000 ])
			const result = Converter.decodeClockInitialPhaseOffset4(u8)
			assert.equal(result, 0)
		})
	})

	describe('decodeClockInitialPhaseOffset5', () => {
		it('should decode', () => {
			const u8 = Uint8Array.from([ 0b0000_0000 ])
			const result = Converter.decodeClockInitialPhaseOffset5(u8)
			assert.equal(result, 0)
		})
	})

	describe('decodePLLReset', () => {
		it('should decode', () => {
			const u8 = Uint8Array.from([ 0b0000_0000 ])
			const result = Converter.decodePLLReset(u8)
			assert.deepEqual(result, {
				resetPLLB: false,
				resetPLLA: false
			})
		})

		it('should decode with B reset', () => {
			const u8 = Uint8Array.from([ 0b1000_0000 ])
			const result = Converter.decodePLLReset(u8)
			assert.deepEqual(result, {
				resetPLLB: true,
				resetPLLA: false
			})
		})

		it('should decode with A reset', () => {
			const u8 = Uint8Array.from([ 0b0010_0000 ])
			const result = Converter.decodePLLReset(u8)
			assert.deepEqual(result, {
				resetPLLB: false,
				resetPLLA: true
			})
		})

		it('should decode ignore the values', () => {
			const u8 = Uint8Array.from([ 0b0101_1111 ])
			const result = Converter.decodePLLReset(u8)
			assert.deepEqual(result, {
				resetPLLB: false,
				resetPLLA: false
			})
		})
	})

	describe('decodeCrystalInternalLoadCapacitance', () => {
		it('should decode', () => {
			const u8 = Uint8Array.from([ 0b0000_0000 ])
			const result = Converter.decodeCrystalInternalLoadCapacitance(u8)
			assert.deepEqual(result, {
				capacitance: CRYSTAL_CAPACITANCE.RESERVED
			})
		})

		it('should decode with unique value', () => {
			const u8 = Uint8Array.from([ 0b1000_0000 ])
			const result = Converter.decodeCrystalInternalLoadCapacitance(u8)
			assert.deepEqual(result, {
				capacitance: CRYSTAL_CAPACITANCE.INTERNAL_8_PF
			})
		})
	})










	describe('encodeInterruptStatusSticky', () => {
		it('should encode', () => {
			const ab = Converter.encodeInterruptStatusSticky({
				systemCalibrationStatus: false,
				lossOfLockPLLB: false,
				lossOfLockPLLA: false,
				lossOfSignal: false
			})
			const u8 = ArrayBuffer.isView(ab) ?
				new Uint8Array(ab.buffer, ab.byteOffset, ab.byteLength) :
				new Uint8Array(ab)
			const [ data ] = u8

			assert.equal(data, 0b0000_0000)
		})
	})

	describe('encodeInterruptStatusMask', () => {
		it('should encode', () => {
			const ab = Converter.encodeInterruptStatusMask({
				systemInitializing: false,
				lossOfLockPLLA: false,
				lossOfLockPLLB: false,
				lossOfSignal: false
			})
			const u8 = ArrayBuffer.isView(ab) ?
				new Uint8Array(ab.buffer, ab.byteOffset, ab.byteLength) :
				new Uint8Array(ab)
			const [ data ] = u8

			assert.equal(data, 0b0000_0000)
		})
	})

	describe('encodeOutputEnableControl', () => {
		it('should encode', () => {
			const ab = Converter.encodeOutputEnableControl({
				clock7: false,
				clock6: false,
				clock5: false,
				clock4: false,
				clock3: false,
				clock2: false,
				clock1: false,
				clock0: false
			})
			const u8 = ArrayBuffer.isView(ab) ?
				new Uint8Array(ab.buffer, ab.byteOffset, ab.byteLength) :
				new Uint8Array(ab)
			const [ data ] = u8

			assert.equal(data, 0b1111_1111)
		})
	})

	describe('encodePinEnabledControl', () => {
		it('should encode', () => {
			const ab = Converter.encodePinEnabledControl({
				clock7: false,
				clock6: false,
				clock5: false,
				clock4: false,
				clock3: false,
				clock2: false,
				clock1: false,
				clock0: false
			})
			const u8 = ArrayBuffer.isView(ab) ?
				new Uint8Array(ab.buffer, ab.byteOffset, ab.byteLength) :
				new Uint8Array(ab)
			const [ data ] = u8

			assert.equal(data, 0b1111_1111)
		})
	})

	describe('encodePLLInputSource', () => {
		it('should encode', () => {
			const ab = Converter.encodePLLInputSource({
				sourcePLLA: PLL_SOURCE.XTAL,
				sourcePLLB: PLL_SOURCE.XTAL
			})
			const u8 = ArrayBuffer.isView(ab) ?
				new Uint8Array(ab.buffer, ab.byteOffset, ab.byteLength) :
				new Uint8Array(ab)
			const [ data ] = u8

			assert.equal(data, 0b0000_0000)
		})
	})

	describe('encodeClockControl0', () => {
		it('should encode', () => {
			const ab = Converter.encodeClockControl0({
				poweredDown: false,
				integerMode: false,
				multiSynthSourceSelect: MULTI_SYNTH_SOURCE_SELECT.PLLA,
				inverted: false,
				inputSourceSelect: INPUT_SOURCE_SELECT.XTAL,
				strength: STRENGTH.DRIVE_2_MA
			})
			const u8 = ArrayBuffer.isView(ab) ?
				new Uint8Array(ab.buffer, ab.byteOffset, ab.byteLength) :
				new Uint8Array(ab)
			const [ data ] = u8

			assert.equal(data, 0b0000_0000)
		})
	})

	describe('encodeClockControl1', () => {
		it('should encode', () => {
			const ab = Converter.encodeClockControl1({
				poweredDown: false,
				integerMode: false,
				multiSynthSourceSelect: MULTI_SYNTH_SOURCE_SELECT.PLLA,
				inverted: false,
				inputSourceSelect: INPUT_SOURCE_SELECT.XTAL,
				strength: STRENGTH.DRIVE_2_MA
			})
			const u8 = ArrayBuffer.isView(ab) ?
				new Uint8Array(ab.buffer, ab.byteOffset, ab.byteLength) :
				new Uint8Array(ab)
			const [ data ] = u8

			assert.equal(data, 0b0000_0000)
		})
	})

	describe('encodeClockControl2', () => {
		it('should encode', () => {
			const ab = Converter.encodeClockControl2({
				poweredDown: false,
				integerMode: false,
				multiSynthSourceSelect: MULTI_SYNTH_SOURCE_SELECT.PLLA,
				inverted: false,
				inputSourceSelect: INPUT_SOURCE_SELECT.XTAL,
				strength: STRENGTH.DRIVE_2_MA
			})
			const u8 = ArrayBuffer.isView(ab) ?
				new Uint8Array(ab.buffer, ab.byteOffset, ab.byteLength) :
				new Uint8Array(ab)
			const [ data ] = u8

			assert.equal(data, 0b0000_0000)
		})
	})

	describe('encodeClockControl3', () => {
		it('should encode', () => {
			const ab = Converter.encodeClockControl3({
				poweredDown: false,
				integerMode: false,
				multiSynthSourceSelect: MULTI_SYNTH_SOURCE_SELECT.PLLA,
				inverted: false,
				inputSourceSelect: INPUT_SOURCE_SELECT.XTAL,
				strength: STRENGTH.DRIVE_2_MA
			})
			const u8 = ArrayBuffer.isView(ab) ?
				new Uint8Array(ab.buffer, ab.byteOffset, ab.byteLength) :
				new Uint8Array(ab)
			const [ data ] = u8

			assert.equal(data, 0b0000_0000)
		})
	})

	describe('encodeClockControl4', () => {
		it('should encode', () => {
			const ab = Converter.encodeClockControl4({
				poweredDown: false,
				integerMode: false,
				multiSynthSourceSelect: MULTI_SYNTH_SOURCE_SELECT.PLLA,
				inverted: false,
				inputSourceSelect: INPUT_SOURCE_SELECT.XTAL,
				strength: STRENGTH.DRIVE_2_MA
			})
			const u8 = ArrayBuffer.isView(ab) ?
				new Uint8Array(ab.buffer, ab.byteOffset, ab.byteLength) :
				new Uint8Array(ab)
			const [ data ] = u8

			assert.equal(data, 0b0000_0000)
		})
	})

	describe('encodeClockControl5', () => {
		it('should encode', () => {
			const ab = Converter.encodeClockControl5({
				poweredDown: false,
				integerMode: false,
				multiSynthSourceSelect: MULTI_SYNTH_SOURCE_SELECT.PLLA,
				inverted: false,
				inputSourceSelect: INPUT_SOURCE_SELECT.XTAL,
				strength: STRENGTH.DRIVE_2_MA
			})
			const u8 = ArrayBuffer.isView(ab) ?
				new Uint8Array(ab.buffer, ab.byteOffset, ab.byteLength) :
				new Uint8Array(ab)
			const [ data ] = u8

			assert.equal(data, 0b0000_0000)
		})
	})

	describe('encodeClockControl6', () => {
		it('should encode', () => {
			const ab = Converter.encodeClockControl6({
				poweredDown: false,
				integerMode: false,
				multiSynthSourceSelect: MULTI_SYNTH_SOURCE_SELECT.PLLA,
				inverted: false,
				inputSourceSelect: INPUT_SOURCE_SELECT.XTAL,
				strength: STRENGTH.DRIVE_2_MA
			})
			const u8 = ArrayBuffer.isView(ab) ?
				new Uint8Array(ab.buffer, ab.byteOffset, ab.byteLength) :
				new Uint8Array(ab)
			const [ data ] = u8

			assert.equal(data, 0b0000_0000)
		})
	})

	describe('encodeClockControl7', () => {
		it('should encode', () => {
			const ab = Converter.encodeClockControl7({
				poweredDown: false,
				integerMode: false,
				multiSynthSourceSelect: MULTI_SYNTH_SOURCE_SELECT.PLLA,
				inverted: false,
				inputSourceSelect: INPUT_SOURCE_SELECT.XTAL,
				strength: STRENGTH.DRIVE_2_MA
			})
			const u8 = ArrayBuffer.isView(ab) ?
				new Uint8Array(ab.buffer, ab.byteOffset, ab.byteLength) :
				new Uint8Array(ab)
			const [ data ] = u8

			assert.equal(data, 0b0000_0000)
		})
	})

	describe('encodeClockDisableState3_0', () => {
		it('should encode', () => {
			const ab = Converter.encodeClockDisableState3_0({
				clock3: DISABLED_STATE.LOW,
				clock2: DISABLED_STATE.LOW,
				clock1: DISABLED_STATE.LOW,
				clock0: DISABLED_STATE.LOW
			})
			const u8 = ArrayBuffer.isView(ab) ?
				new Uint8Array(ab.buffer, ab.byteOffset, ab.byteLength) :
				new Uint8Array(ab)
			const [ data ] = u8

			assert.equal(data, 0b0000_0000)
		})
	})

	describe('encodeClockDisableState7_4', () => {
		it('should encode', () => {
			const ab = Converter.encodeClockDisableState7_4({
				clock7: DISABLED_STATE.LOW,
				clock6: DISABLED_STATE.LOW,
				clock5: DISABLED_STATE.LOW,
				clock4: DISABLED_STATE.LOW
			})
			const u8 = ArrayBuffer.isView(ab) ?
				new Uint8Array(ab.buffer, ab.byteOffset, ab.byteLength) :
				new Uint8Array(ab)
			const [ data ] = u8

			assert.equal(data, 0b0000_0000)
		})
	})

	describe('encodeMultiSynthParameters0', { skip: true}, () => {
		it('should encode', () => {
			const ab = Converter.encodeMultiSynthParameters0({

			})
			const u8 = ArrayBuffer.isView(ab) ?
				new Uint8Array(ab.buffer, ab.byteOffset, ab.byteLength) :
				new Uint8Array(ab)
			const [ data ] = u8

			assert.equal(data, 0)
		})
	})

	describe('encodeMultiSynthParameters1', { skip: true}, () => {
		it('should encode', () => {
			const ab = Converter.encodeMultiSynthParameters1({

			})
			const u8 = ArrayBuffer.isView(ab) ?
				new Uint8Array(ab.buffer, ab.byteOffset, ab.byteLength) :
				new Uint8Array(ab)
			const [ data ] = u8

			assert.equal(data, 0)
		})
	})

	describe('encodeMultiSynthParameters2', { skip: true}, () => {
		it('should encode', () => {
			const ab = Converter.encodeMultiSynthParameters2({

			})
			const u8 = ArrayBuffer.isView(ab) ?
				new Uint8Array(ab.buffer, ab.byteOffset, ab.byteLength) :
				new Uint8Array(ab)
			const [ data ] = u8

			assert.equal(data, 0)
		})
	})

	describe('encodeMultiSynthParameters3', { skip: true}, () => {
		it('should encode', () => {
			const ab = Converter.encodeMultiSynthParameters3({

			})
			const u8 = ArrayBuffer.isView(ab) ?
				new Uint8Array(ab.buffer, ab.byteOffset, ab.byteLength) :
				new Uint8Array(ab)
			const [ data ] = u8

			assert.equal(data, 0)
		})
	})

	describe('encodeMultiSynthParameters4', { skip: true}, () => {
		it('should encode', () => {
			const ab = Converter.encodeMultiSynthParameters4({

			})
			const u8 = ArrayBuffer.isView(ab) ?
				new Uint8Array(ab.buffer, ab.byteOffset, ab.byteLength) :
				new Uint8Array(ab)
			const [ data ] = u8

			assert.equal(data, 0)
		})
	})

	describe('encodeMultiSynthParameters5', { skip: true}, () => {
		it('should encode', () => {
			const ab = Converter.encodeMultiSynthParameters5({

			})
			const u8 = ArrayBuffer.isView(ab) ?
				new Uint8Array(ab.buffer, ab.byteOffset, ab.byteLength) :
				new Uint8Array(ab)
			const [ data ] = u8

			assert.equal(data, 0)
		})
	})

	describe('encodeMultiSynthParameters6', { skip: true}, () => {
		it('should encode', () => {
			const ab = Converter.encodeMultiSynthParameters6({

			})
			const u8 = ArrayBuffer.isView(ab) ?
				new Uint8Array(ab.buffer, ab.byteOffset, ab.byteLength) :
				new Uint8Array(ab)
			const [ data ] = u8

			assert.equal(data, 0)
		})
	})

	describe('encodeMultiSynthParameters7', { skip: true}, () => {
		it('should encode', () => {
			const ab = Converter.encodeMultiSynthParameters7({

			})
			const u8 = ArrayBuffer.isView(ab) ?
				new Uint8Array(ab.buffer, ab.byteOffset, ab.byteLength) :
				new Uint8Array(ab)
			const [ data ] = u8

			assert.equal(data, 0)
		})
	})

	describe('encodeClockOutputDivider6_7', () => {
		it('should encode', () => {
			const ab = Converter.encodeClockOutputDivider6_7({
				dividerR7: OUTPUT_DIVIDER.DIVIDE_BY_1,
				dividerR6: OUTPUT_DIVIDER.DIVIDE_BY_1
			})
			const u8 = ArrayBuffer.isView(ab) ?
				new Uint8Array(ab.buffer, ab.byteOffset, ab.byteLength) :
				new Uint8Array(ab)
			const [ data ] = u8

			assert.equal(data, 0b0000_0000)
		})
	})

	describe('encodeClockInitialPhaseOffset0', () => {
		it('should encode', () => {
			const ab = Converter.encodeClockInitialPhaseOffset0(0)
			const u8 = ArrayBuffer.isView(ab) ?
				new Uint8Array(ab.buffer, ab.byteOffset, ab.byteLength) :
				new Uint8Array(ab)
			const [ data ] = u8

			assert.equal(data, 0)
		})
	})

	describe('encodeClockInitialPhaseOffset1', () => {
		it('should encode', () => {
			const ab = Converter.encodeClockInitialPhaseOffset1(0)
			const u8 = ArrayBuffer.isView(ab) ?
				new Uint8Array(ab.buffer, ab.byteOffset, ab.byteLength) :
				new Uint8Array(ab)
			const [ data ] = u8

			assert.equal(data, 0)
		})
	})

	describe('encodeClockInitialPhaseOffset2', () => {
		it('should encode', () => {
			const ab = Converter.encodeClockInitialPhaseOffset2(0)
			const u8 = ArrayBuffer.isView(ab) ?
				new Uint8Array(ab.buffer, ab.byteOffset, ab.byteLength) :
				new Uint8Array(ab)
			const [ data ] = u8

			assert.equal(data, 0)
		})
	})

	describe('encodeClockInitialPhaseOffset3', () => {
		it('should encode', () => {
			const ab = Converter.encodeClockInitialPhaseOffset3(0)
			const u8 = ArrayBuffer.isView(ab) ?
				new Uint8Array(ab.buffer, ab.byteOffset, ab.byteLength) :
				new Uint8Array(ab)
			const [ data ] = u8

			assert.equal(data, 0)
		})
	})

	describe('encodeClockInitialPhaseOffset4', () => {
		it('should encode', () => {
			const ab = Converter.encodeClockInitialPhaseOffset4(0)
			const u8 = ArrayBuffer.isView(ab) ?
				new Uint8Array(ab.buffer, ab.byteOffset, ab.byteLength) :
				new Uint8Array(ab)
			const [ data ] = u8

			assert.equal(data, 0)
		})
	})

	describe('encodeClockInitialPhaseOffset5', () => {
		it('should encode', () => {
			const ab = Converter.encodeClockInitialPhaseOffset5(0)
			const u8 = ArrayBuffer.isView(ab) ?
				new Uint8Array(ab.buffer, ab.byteOffset, ab.byteLength) :
				new Uint8Array(ab)
			const [ data ] = u8

			assert.equal(data, 0)
		})
	})

	describe('encodePLLReset', () => {
		it('should encode', () => {
			const ab = Converter.encodePLLReset({
				resetPLLA: false,
				resetPLLB: false
			})
			const u8 = ArrayBuffer.isView(ab) ?
				new Uint8Array(ab.buffer, ab.byteOffset, ab.byteLength) :
				new Uint8Array(ab)
			const [ data ] = u8

			assert.equal(data, 0b0000_0000)
		})

		it('should encode reset A', () => {
			const ab = Converter.encodePLLReset({
				resetPLLA: true,
				resetPLLB: false
			})
			const u8 = ArrayBuffer.isView(ab) ?
				new Uint8Array(ab.buffer, ab.byteOffset, ab.byteLength) :
				new Uint8Array(ab)
			const [ data ] = u8

			assert.equal(data, 0b0010_0000)
		})

		it('should encode reset B', () => {
			const ab = Converter.encodePLLReset({
				resetPLLA: false,
				resetPLLB: true
			})
			const u8 = ArrayBuffer.isView(ab) ?
				new Uint8Array(ab.buffer, ab.byteOffset, ab.byteLength) :
				new Uint8Array(ab)
			const [ data ] = u8

			assert.equal(data, 0b1000_0000)
		})

		it('should encode reset A B', () => {
			const ab = Converter.encodePLLReset({
				resetPLLA: true,
				resetPLLB: true
			})
			const u8 = ArrayBuffer.isView(ab) ?
				new Uint8Array(ab.buffer, ab.byteOffset, ab.byteLength) :
				new Uint8Array(ab)
			const [ data ] = u8

			assert.equal(data, 0b1010_0000)
		})
	})

	describe('encodeCrystalInternalLoadCapacitance', () => {
		it('should encode', () => {
			const ab = Converter.encodeCrystalInternalLoadCapacitance({
				capacitance: CRYSTAL_CAPACITANCE.RESERVED
			})
			const u8 = ArrayBuffer.isView(ab) ?
				new Uint8Array(ab.buffer, ab.byteOffset, ab.byteLength) :
				new Uint8Array(ab)
			const [ data ] = u8

			assert.equal(data, 0b0000_0000)
		})
	})

	//
	//
	//

	describe('identity', () => {
		it('should identity', () => {
			const u8 = Uint8Array.from([ 0b0000_0000 ])
			const result = Converter.encodeInterruptStatusSticky(Converter.decodeInterruptStatusSticky(u8))
			const resultU8 = ArrayBuffer.isView(result) ?
				new Uint8Array(result.buffer, result.byteOffset, result.byteLength) :
				new Uint8Array(result)

			assert.equal(resultU8[0], u8[0])
		})

		it('should identity', () => {
			const u8 = Uint8Array.from([ 0b0000_0000 ])
			const result = Converter.encodeInterruptStatusMask(Converter.decodeInterruptStatusMask(u8))
			const resultU8 = ArrayBuffer.isView(result) ?
				new Uint8Array(result.buffer, result.byteOffset, result.byteLength) :
				new Uint8Array(result)

			assert.equal(resultU8[0], u8[0])
		})

		it('should identity', () => {
			const u8 = Uint8Array.from([ 0b0000_0000 ])
			const result = Converter.encodeOutputEnableControl(Converter.decodeOutputEnableControl(u8))
			const resultU8 = ArrayBuffer.isView(result) ?
				new Uint8Array(result.buffer, result.byteOffset, result.byteLength) :
				new Uint8Array(result)

			assert.equal(resultU8[0], u8[0])
		})

		it('should identity', () => {
			const u8 = Uint8Array.from([ 0b0000_0000 ])
			const result = Converter.encodePinEnabledControl(Converter.decodePinEnabledControl(u8))
			const resultU8 = ArrayBuffer.isView(result) ?
				new Uint8Array(result.buffer, result.byteOffset, result.byteLength) :
				new Uint8Array(result)

			assert.equal(resultU8[0], u8[0])
		})

		it('should identity', () => {
			const u8 = Uint8Array.from([ 0b0000_0000 ])
			const result = Converter.encodePLLInputSource(Converter.decodePLLInputSource(u8))
			const resultU8 = ArrayBuffer.isView(result) ?
				new Uint8Array(result.buffer, result.byteOffset, result.byteLength) :
				new Uint8Array(result)

			assert.equal(resultU8[0], u8[0])
		})

		it('should identity', () => {
			const u8 = Uint8Array.from([ 0b0000_0000 ])
			const result = Converter.encodeClockControl0(Converter.decodeClockControl0(u8))
			const resultU8 = ArrayBuffer.isView(result) ?
				new Uint8Array(result.buffer, result.byteOffset, result.byteLength) :
				new Uint8Array(result)

			assert.equal(resultU8[0], u8[0])
		})

		it('should identity', () => {
			const u8 = Uint8Array.from([ 0b0000_0000 ])
			const result = Converter.encodeClockControl1(Converter.decodeClockControl1(u8))
			const resultU8 = ArrayBuffer.isView(result) ?
				new Uint8Array(result.buffer, result.byteOffset, result.byteLength) :
				new Uint8Array(result)

			assert.equal(resultU8[0], u8[0])
		})

		it('should identity', () => {
			const u8 = Uint8Array.from([ 0b0000_0000 ])
			const result = Converter.encodeClockControl2(Converter.decodeClockControl2(u8))
			const resultU8 = ArrayBuffer.isView(result) ?
				new Uint8Array(result.buffer, result.byteOffset, result.byteLength) :
				new Uint8Array(result)

			assert.equal(resultU8[0], u8[0])
		})

		it('should identity', () => {
			const u8 = Uint8Array.from([ 0b0000_0000 ])
			const result = Converter.encodeClockControl3(Converter.decodeClockControl3(u8))
			const resultU8 = ArrayBuffer.isView(result) ?
				new Uint8Array(result.buffer, result.byteOffset, result.byteLength) :
				new Uint8Array(result)

			assert.equal(resultU8[0], u8[0])
		})

		it('should identity', () => {
			const u8 = Uint8Array.from([ 0b0000_0000 ])
			const result = Converter.encodeClockControl4(Converter.decodeClockControl4(u8))
			const resultU8 = ArrayBuffer.isView(result) ?
				new Uint8Array(result.buffer, result.byteOffset, result.byteLength) :
				new Uint8Array(result)

			assert.equal(resultU8[0], u8[0])
		})

		it('should identity', () => {
			const u8 = Uint8Array.from([ 0b0000_0000 ])
			const result = Converter.encodeClockControl5(Converter.decodeClockControl5(u8))
			const resultU8 = ArrayBuffer.isView(result) ?
				new Uint8Array(result.buffer, result.byteOffset, result.byteLength) :
				new Uint8Array(result)

			assert.equal(resultU8[0], u8[0])
		})

		it('should identity', () => {
			const u8 = Uint8Array.from([ 0b0000_0000 ])
			const result = Converter.encodeClockControl6(Converter.decodeClockControl6(u8))
			const resultU8 = ArrayBuffer.isView(result) ?
				new Uint8Array(result.buffer, result.byteOffset, result.byteLength) :
				new Uint8Array(result)

			assert.equal(resultU8[0], u8[0])
		})

		it('should identity', () => {
			const u8 = Uint8Array.from([ 0b0000_0000 ])
			const result = Converter.encodeClockControl7(Converter.decodeClockControl7(u8))
			const resultU8 = ArrayBuffer.isView(result) ?
				new Uint8Array(result.buffer, result.byteOffset, result.byteLength) :
				new Uint8Array(result)

			assert.equal(resultU8[0], u8[0])
		})

		it('should identity', () => {
			const u8 = Uint8Array.from([ 0b0000_0000 ])
			const result = Converter.encodeClockDisableState3_0(Converter.decodeClockDisableState3_0(u8))
			const resultU8 = ArrayBuffer.isView(result) ?
				new Uint8Array(result.buffer, result.byteOffset, result.byteLength) :
				new Uint8Array(result)

			assert.equal(resultU8[0], u8[0])
		})

		it('should identity', () => {
			const u8 = Uint8Array.from([ 0b0000_0000 ])
			const result = Converter.encodeClockDisableState7_4(Converter.decodeClockDisableState7_4(u8))
			const resultU8 = ArrayBuffer.isView(result) ?
				new Uint8Array(result.buffer, result.byteOffset, result.byteLength) :
				new Uint8Array(result)

			assert.equal(resultU8[0], u8[0])
		})

		it('should identity', { skip: true }, () => {
			const u8 = Uint8Array.from([ 0b0000_0000 ])
			const result = Converter.encodeMultiSynthParameters0(Converter.decodeMultiSynthParameters0(u8))
			const resultU8 = ArrayBuffer.isView(result) ?
				new Uint8Array(result.buffer, result.byteOffset, result.byteLength) :
				new Uint8Array(result)

			assert.equal(resultU8[0], u8[0])
		})

		it('should identity', { skip: true }, () => {
			const u8 = Uint8Array.from([ 0b0000_0000 ])
			const result = Converter.encodeMultiSynthParameters1(Converter.decodeMultiSynthParameters1(u8))
			const resultU8 = ArrayBuffer.isView(result) ?
				new Uint8Array(result.buffer, result.byteOffset, result.byteLength) :
				new Uint8Array(result)

			assert.equal(resultU8[0], u8[0])
		})

		it('should identity', { skip: true }, () => {
			const u8 = Uint8Array.from([ 0b0000_0000 ])
			const result = Converter.encodeMultiSynthParameters2(Converter.decodeMultiSynthParameters2(u8))
			const resultU8 = ArrayBuffer.isView(result) ?
				new Uint8Array(result.buffer, result.byteOffset, result.byteLength) :
				new Uint8Array(result)

			assert.equal(resultU8[0], u8[0])
		})

		it('should identity', { skip: true }, () => {
			const u8 = Uint8Array.from([ 0b0000_0000 ])
			const result = Converter.encodeMultiSynthParameters3(Converter.decodeMultiSynthParameters3(u8))
			const resultU8 = ArrayBuffer.isView(result) ?
				new Uint8Array(result.buffer, result.byteOffset, result.byteLength) :
				new Uint8Array(result)

			assert.equal(resultU8[0], u8[0])
		})

		it('should identity', { skip: true }, () => {
			const u8 = Uint8Array.from([ 0b0000_0000 ])
			const result = Converter.encodeMultiSynthParameters4(Converter.decodeMultiSynthParameters4(u8))
			const resultU8 = ArrayBuffer.isView(result) ?
				new Uint8Array(result.buffer, result.byteOffset, result.byteLength) :
				new Uint8Array(result)

			assert.equal(resultU8[0], u8[0])
		})

		it('should identity', { skip: true }, () => {
			const u8 = Uint8Array.from([ 0b0000_0000 ])
			const result = Converter.encodeMultiSynthParameters5(Converter.decodeMultiSynthParameters5(u8))
			const resultU8 = ArrayBuffer.isView(result) ?
				new Uint8Array(result.buffer, result.byteOffset, result.byteLength) :
				new Uint8Array(result)

			assert.equal(resultU8[0], u8[0])
		})

		it('should identity', { skip: true }, () => {
			const u8 = Uint8Array.from([ 0b0000_0000 ])
			const result = Converter.encodeMultiSynthParameters6(Converter.decodeMultiSynthParameters6(u8))
			const resultU8 = ArrayBuffer.isView(result) ?
				new Uint8Array(result.buffer, result.byteOffset, result.byteLength) :
				new Uint8Array(result)

			assert.equal(resultU8[0], u8[0])
		})

		it('should identity', { skip: true }, () => {
			const u8 = Uint8Array.from([ 0b0000_0000 ])
			const result = Converter.encodeMultiSynthParameters7(Converter.decodeMultiSynthParameters7(u8))
			const resultU8 = ArrayBuffer.isView(result) ?
				new Uint8Array(result.buffer, result.byteOffset, result.byteLength) :
				new Uint8Array(result)

			assert.equal(resultU8[0], u8[0])
		})

		it('should identity', () => {
			const u8 = Uint8Array.from([ 0b0000_0000 ])
			const result = Converter.encodeClockOutputDivider6_7(Converter.decodeClockOutputDivider6_7(u8))
			const resultU8 = ArrayBuffer.isView(result) ?
				new Uint8Array(result.buffer, result.byteOffset, result.byteLength) :
				new Uint8Array(result)

			assert.equal(resultU8[0], u8[0])
		})

		it('should identity', () => {
			const u8 = Uint8Array.from([ 0b0000_0000 ])
			const result = Converter.encodeClockInitialPhaseOffset0(Converter.decodeClockInitialPhaseOffset0(u8))
			const resultU8 = ArrayBuffer.isView(result) ?
				new Uint8Array(result.buffer, result.byteOffset, result.byteLength) :
				new Uint8Array(result)

			assert.equal(resultU8[0], u8[0])
		})

		it('should identity', () => {
			const u8 = Uint8Array.from([ 0b0000_0000 ])
			const result = Converter.encodeClockInitialPhaseOffset1(Converter.decodeClockInitialPhaseOffset1(u8))
			const resultU8 = ArrayBuffer.isView(result) ?
				new Uint8Array(result.buffer, result.byteOffset, result.byteLength) :
				new Uint8Array(result)

			assert.equal(resultU8[0], u8[0])
		})

		it('should identity', () => {
			const u8 = Uint8Array.from([ 0b0000_0000 ])
			const result = Converter.encodeClockInitialPhaseOffset2(Converter.decodeClockInitialPhaseOffset2(u8))
			const resultU8 = ArrayBuffer.isView(result) ?
				new Uint8Array(result.buffer, result.byteOffset, result.byteLength) :
				new Uint8Array(result)

			assert.equal(resultU8[0], u8[0])
		})

		it('should identity', () => {
			const u8 = Uint8Array.from([ 0b0000_0000 ])
			const result = Converter.encodeClockInitialPhaseOffset3(Converter.decodeClockInitialPhaseOffset3(u8))
			const resultU8 = ArrayBuffer.isView(result) ?
				new Uint8Array(result.buffer, result.byteOffset, result.byteLength) :
				new Uint8Array(result)

			assert.equal(resultU8[0], u8[0])
		})

		it('should identity', () => {
			const u8 = Uint8Array.from([ 0b0000_0000 ])
			const result = Converter.encodeClockInitialPhaseOffset4(Converter.decodeClockInitialPhaseOffset4(u8))
			const resultU8 = ArrayBuffer.isView(result) ?
				new Uint8Array(result.buffer, result.byteOffset, result.byteLength) :
				new Uint8Array(result)

			assert.equal(resultU8[0], u8[0])
		})

		it('should identity', () => {
			const u8 = Uint8Array.from([ 0b0000_0000 ])
			const result = Converter.encodeClockInitialPhaseOffset5(Converter.decodeClockInitialPhaseOffset5(u8))
			const resultU8 = ArrayBuffer.isView(result) ?
				new Uint8Array(result.buffer, result.byteOffset, result.byteLength) :
				new Uint8Array(result)

			assert.equal(resultU8[0], u8[0])
		})

		it('should identity', () => {
			const u8 = Uint8Array.from([ 0b0000_0000 ])
			const result = Converter.encodePLLReset(Converter.decodePLLReset(u8))
			const resultU8 = ArrayBuffer.isView(result) ?
				new Uint8Array(result.buffer, result.byteOffset, result.byteLength) :
				new Uint8Array(result)

			assert.equal(resultU8[0], u8[0])
		})

		it('should identity', () => {
			const u8 = Uint8Array.from([ 0b0000_0000 ])
			const result = Converter.encodeCrystalInternalLoadCapacitance(Converter.decodeCrystalInternalLoadCapacitance(u8))
			const resultU8 = ArrayBuffer.isView(result) ?
				new Uint8Array(result.buffer, result.byteOffset, result.byteLength) :
				new Uint8Array(result)

			assert.equal(resultU8[0], u8[0])
		})
	})
})


