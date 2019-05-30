
import * as types from './mutation-type'
import { stat } from 'fs';
const mutations = {
    [types.SET_LIST](state, list) {
        state.list[list.pageName] = {
            list: list.list,
            page: list.page,
            count: list.count
        }
    },
    [types.SET_TITLE](state, tit) {
        state.title = tit
    },
    [types.SCREEN_RESULT](state, screen) {
        state.screen = screen
    },
    [types.HOUSE_MENU](state, menu) {
        state.house_menu = menu
    },
    [types.IMMIG_MENU](state, menu) {
        state.immig_menu = menu
    }

}


export default mutations