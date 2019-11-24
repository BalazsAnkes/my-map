import state from './state'
import config from '@/lib/config'

describe('State', () => {
  it('has proper properties', () => {
    expect(state).to.have.property('mapOptions').that.eql(config.map)
    expect(state).to.have.property('fromMarker').that.respondTo('remove')
    expect(state).to.have.property('toMarker').that.respondTo('remove')
  })
})
