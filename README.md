# si5351

Clock Generator

[![npm Version](http://img.shields.io/npm/v/@johntalton/si5351.svg)](https://www.npmjs.com/package/@johntalton/si5351)
![GitHub package.json version](https://img.shields.io/github/package-json/v/johntalton/si5351)
![CI](https://github.com/johntalton/si5351/workflows/CI/badge.svg)

# Example

```javascript
import { I2CAddressedBus } from '@johntalton/and-other-delights'
import {
  SI5351,
  DEFAULT_ADDRESS,
  MULTI_SYNTH_SOURCE_SELECT,
  INPUT_SOURCE_SELECT,
  STRENGTH
} from '@johntalton/si5351'

const bus = /* some I2CBus implementation */
const aBus = new I2CAddressedBus(bus, DEFAULT_ADDRESS)
const device = new SI5351(aBus)

// get status
const {
  revisionId,
  systemInitializing,
  lossOfLockPLLB,
  lossOfLockPLLA,
  lossOfSignal
} = await device.getDeviceStatus()

// setup clock 2
await device.setClockControl(2, {
  powerDown: true,
  integerMode: true,
  multiSynthSourceSelect: MULTI_SYNTH_SOURCE_SELECT.PLLA,
  inverted: false,
  inputSourceSelect: INPUT_SOURCE_SELECT.CRYSTAL,
  strength: STRENGTH.DRIVE_4_MA
})

// set clock 2 enabled
await device.setOutputEnableControl({
  // ... other clock values too
  clock2: true
})

```