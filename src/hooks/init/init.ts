import {Hook} from '@oclif/core'

const hook: Hook.Init = async function () {
  console.log('Greetings! from plugin-test-core-v3 init hook')
}

export default hook
