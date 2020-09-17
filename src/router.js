import { currentRoute } from './store.js'

export default {
  init() {
    // Set the active route directly and then listen to onpopstate to
    // make browser back still work
    currentRoute.set(window.location.pathname)
    window.onpopstate = () => {
      currentRoute.set(window.location.pathname)
    }
  },
  push(path) {
    currentRoute.set(path)
    window.history.pushState({ path }, '', path)
  },
  replace(path) {
    currentRoute.set(path)
    window.history.replaceState({ path }, '' , path)
  }
}
