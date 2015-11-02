'use strict'

import SecuritySystem from './security_system'


let system = new SecuritySystem()
system.initialize()

system.onDoorOpen()
system.armChirp()
system.onDoorOpen()
system.disarm()
