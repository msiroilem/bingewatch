import VueRouter from 'vue-router'
import Home from './pages/Home'
import About from './pages/About'
import Search from './pages/Search'
import Signup from './pages/Signup'

const routes = [
  { path: '/', component: Home, name: 'Home' },
  { path: '/about', component: About, name: 'About' },
  { path: '/search', component: Search, name: 'Search' },
  { path: 'signup', component: Signup, name: 'Signup' }
]

export default new VueRouter({ routes, mode: 'history' })
