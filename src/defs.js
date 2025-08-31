
/**
 * @typedef {Object} DeviceStatus
 */

/**
 * @typedef {Object} InterruptStatusSticky
 */

/**
 * @typedef {Object} InterruptStatusMask
 */

/**
 * @typedef {Object} OutputEnableControl
 */

/**
 * @typedef {Object} PinEnabledControl
 */

/**
 * @typedef {Object} PLLInputSource
 */

/**
 * @typedef {Object} ClockControl
 */

/**
 * @typedef {Object} ClockDisabledState
 */

/**
 * @typedef {Object} MultiSynthParameters0
 */

/**
 * @typedef {Object} MultiSynthParameters1
 */

/**
 * @typedef {Object} MultiSynthParameters2
 */

/**
 * @typedef {Object} MultiSynthParameters3
 */

/**
 * @typedef {Object} MultiSynthParameters4
 */

/**
 * @typedef {Object} MultiSynthParameters5
 */

/**
 * @typedef {Object} MultiSynthParameters6
 */

/**
 * @typedef {Object} MultiSynthParameters7
 */

/**
 * @typedef {Object} ClockOutputDivider
 */

/**
 * @typedef {Object} ClockInitialPhaseOffset
 */

/**
 * @typedef {Object} PLLReset
 */

/**
 * @typedef {Object} CrystalInternalLoadCapacitance
 */






export const DEFAULT_ADDRESS = 0x60

export const SINGLE_BYTE = 1
export const MULTI_SYNTH_PARAMETER_0_SIZE = 8
export const MULTI_SYNTH_PARAMETER_1_SIZE = 10
export const MULTI_SYNTH_PARAMETER_2_SIZE = 6
export const MULTI_SYNTH_PARAMETER_3_SIZE = 8
export const MULTI_SYNTH_PARAMETER_4_SIZE = 8
export const MULTI_SYNTH_PARAMETER_5_SIZE = 8
export const MULTI_SYNTH_PARAMETER_6_SIZE = 1
export const MULTI_SYNTH_PARAMETER_7_SIZE = 1


export const REGISTER = {
  DEVICE_STATUS: 0,
  INTERRUPT_STATUS_STICKY: 1,
  INTERRUPT_STATUS_MASK: 2,
  OUTPUT_ENABLE_CONTROL: 3,
  // 4 - 8 Reserved
  OEB_PIN_ENABLED_CONTROL: 9,
  // 10 - 14 Reserved
  PLL_INPUT_SOURCE: 15,
  CLK0_CONTROL: 16,
  CLK1_CONTROL: 17,
  CLK2_CONTROL: 18,
  CLK3_CONTROL: 19,
  CLK4_CONTROL: 20,
  CLK5_CONTROL: 21,
  CLK6_CONTROL: 22,
  CLK7_CONTROL: 23,
  //
  CLK_3_0_DISABLE_STATE : 24,
  CLK_7_4_DISABLE_STATE : 25,
  // 26 - 41 PLL, MultiSynth, and output clock delay offset Configuration Registers.
  // MultiSynth 0
  MULTI_SYNTH_0_PARAMETERS: 42,
  // MULTI_SYNTH_0_PARAMETERS: 43,
  // MULTI_SYNTH_0_PARAMETERS: 44,
  // MULTI_SYNTH_0_PARAMETERS: 45,
  // MULTI_SYNTH_0_PARAMETERS: 46,
  // MULTI_SYNTH_0_PARAMETERS: 47,
  // MULTI_SYNTH_0_PARAMETERS: 48,
  // MULTI_SYNTH_0_PARAMETERS: 49,
  // MultiSynth 1
  MULTI_SYNTH_1_PARAMETERS: 50,
  // MULTI_SYNTH_1_PARAMETERS: 51,
  // MULTI_SYNTH_1_PARAMETERS: 52,
  // MULTI_SYNTH_1_PARAMETERS: 53,
  // MULTI_SYNTH_1_PARAMETERS: 54,
  // MULTI_SYNTH_1_PARAMETERS: 55,
  // MULTI_SYNTH_1_PARAMETERS: 56,
  // MULTI_SYNTH_1_PARAMETERS: 57,
  // MULTI_SYNTH_1_PARAMETERS: 58,
  // MULTI_SYNTH_1_PARAMETERS: 59,
  // MultiSynth 2
  MULTI_SYNTH_2_PARAMETERS: 60,
  // MULTI_SYNTH_2_PARAMETERS: 61,
  // MULTI_SYNTH_2_PARAMETERS: 62,
  // MULTI_SYNTH_2_PARAMETERS: 63,
  // MULTI_SYNTH_2_PARAMETERS: 64,
  // MULTI_SYNTH_2_PARAMETERS: 65,
  // MultiSynth 3
  MULTI_SYNTH_3_PARAMETERS: 66,
  // MULTI_SYNTH_3_PARAMETERS: 67,
  // MULTI_SYNTH_3_PARAMETERS: 68,
  // MULTI_SYNTH_3_PARAMETERS: 69,
  // MULTI_SYNTH_3_PARAMETERS: 70,
  // MULTI_SYNTH_3_PARAMETERS: 71,
  // MULTI_SYNTH_3_PARAMETERS: 72,
  // MULTI_SYNTH_3_PARAMETERS: 73,
  // MultiSynth 4
  MULTI_SYNTH_4_PARAMETERS: 74,
  // MULTI_SYNTH_4_PARAMETERS: 75,
  // MULTI_SYNTH_4_PARAMETERS: 76,
  // MULTI_SYNTH_4_PARAMETERS: 77,
  // MULTI_SYNTH_4_PARAMETERS: 78,
  // MULTI_SYNTH_4_PARAMETERS: 79,
  // MULTI_SYNTH_4_PARAMETERS: 80,
  // MULTI_SYNTH_4_PARAMETERS: 81,
  // MultiSynth 5
  MULTI_SYNTH_5_PARAMETERS: 82,
  // MULTI_SYNTH_5_PARAMETERS: 83,
  // MULTI_SYNTH_5_PARAMETERS: 84,
  // MULTI_SYNTH_5_PARAMETERS: 85,
  // MULTI_SYNTH_5_PARAMETERS: 86,
  // MULTI_SYNTH_5_PARAMETERS: 87,
  // MULTI_SYNTH_5_PARAMETERS: 88,
  // MULTI_SYNTH_5_PARAMETERS: 89,
  // MultiSynth 6
  MULTI_SYNTH_6_PARAMETERS: 90,
  // MultiSynth 7
  MULTI_SYNTH_7_PARAMETERS: 91,
  //
  CLOCK_6_AND_7_OUTPUT_DIVIDER: 92,
  // 93 - 164 PLL, MultiSynth, and output clock delay offset Configuration Registers
  CLK0_INITIAL_PHASE_OFFSET: 165,
  CLK1_INITIAL_PHASE_OFFSET: 166,
  CLK2_INITIAL_PHASE_OFFSET: 167,
  CLK3_INITIAL_PHASE_OFFSET: 168,
  CLK4_INITIAL_PHASE_OFFSET: 169,
  CLK5_INITIAL_PHASE_OFFSET: 170,
  // 171
  // 172
  // 173 - 176 Reserved
  PLL_RESET: 177,
  // 178 – 182 Reserved
  CRYSTAL_INTERNAL_LOAD_CAPACITANCE: 183,
  // 184 – 255 Reserved
}