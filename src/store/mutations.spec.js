import mutations from './mutations'

describe('mutations', () => {
  describe('setFromMarker', () => {
    it('sets the from marker', () => {
      const marker = 'from marker'
      const state = {}

      mutations.setFromMarker(state, marker)

      expect(state.fromMarker).to.eql(marker)
    })
  })

  describe('setToMarker', () => {
    it('sets the to marker', () => {
      const marker = 'to marker'
      const state = {}

      mutations.setToMarker(state, marker)

      expect(state.toMarker).to.eql(marker)
    })
  })
})
