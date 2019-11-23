import createStore from '@/store'

export default ({ state, mutations, actions }) => {
  return createStore({
    state,
    mutations,
    actions
  })
}
