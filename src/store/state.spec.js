import state from './state'
import config from '@/lib/config'

describe('State', () => {
  it('has proper properties', () => {
    expect(state).to.have.property('map').that.eql(config.map)
    expect(state).to.have.property('markers').that.eql([])
  })
})
