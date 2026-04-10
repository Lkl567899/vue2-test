import { getActiveIndex, setActiveIndex } from "@/utils/storage"

export default {
    namespaced: true,
    state: {
        activeIndex: getActiveIndex()
    },
    mutations: {
        SET_ACTIVE_INDEX(state, index) {
            state.activeIndex = index
            setActiveIndex(index)
        }
    }
    
}