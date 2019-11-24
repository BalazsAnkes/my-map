import state from './state'
import config from '@/lib/config'

describe('State', () => {
  it('has proper properties', () => {
    expect(state).to.have.property('mapOptions').that.eql(config.map)
    expect(state).to.have.property('fromMarker').that.eql({})
    expect(state).to.have.property('toMarker').that.eql({})
  })
})
