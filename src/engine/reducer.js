import { combineReducers } from 'redux-immutable'
import { createReducer } from 'redux-create-reducer'
import { fromJS } from 'immutable'
import { actions } from './actions'

const initialPlayer = fromJS({
  id: 0,
  movDir: 0,
  movVal: 0.0,
  turretDir: 0,
  x: 3190,
  y: 2540,
  health: 100,
  isFiring: false,
})

const initialOpponents = fromJS({})

const player = createReducer(initialPlayer, {
  [actions.INIT_PLAYER](state, action) {
    return action.payload
  },
  [actions.PLAYER_UPDATE_MOV](state, { payload }) {
    return state.set('movDir', payload.dir).set('movVal', payload.val)
  },
  [actions.PLAYER_UPDATE_POS](state, { payload }) {
    return state.set('x', payload.x).set('y', payload.y)
  },
  [actions.PLAYER_UPDATE_TURRET](state, { payload }) {
    return state.set('turretDir', payload.dir)
  },
})

const opponents = createReducer(initialOpponents, {
  [actions.INIT_OPPONENT](state, action) {
    return state.merge(fromJS({ [action.payload.id]: action.payload }))
  },
})

export default combineReducers({ player, opponents })

// MIN X: 400
// MIN Y: 430
// MAX Y: 2540
// MAX X: 3190
// state:
// {
//    player: {
//      id: 1,
//      movDir: 114 *deg*
//      movVal: 2.3 *range 0:3*
//      posX: 40,
//      posY: 104,
//      health: 100, *range 0:100*
//      turretDir: 12 *deg*
//    }
//    opponents: {
//      1: {
//        ...player
//      }

// shot: {
// x: 3
// y: 234
// direction: 23 *deg*
// }