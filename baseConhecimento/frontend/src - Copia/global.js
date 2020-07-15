import Vue from 'vue'
export const baseApiUrl = 'http://localhost:3000'

export const userKey = '__knowledge_user'
export function showError(e) {
    if(e && e.response && e.response.data) { 
        Vue.toasted.global.defaultError({msg : e.respnse.data})
    } else if (typeof e === 'string') { 
        Vue.toasted.global.defaultError({ msg : e })
    } else { 
        Vue.toasted.global.defaultError()
    }
}

export default { baseApiUrl, showError, userKey}
