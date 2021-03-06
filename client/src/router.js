import VueRouter from 'vue-router'
import Home from './pages/Home'
import About from './pages/About'
import Search from './pages/Search'
import Signup from './pages/Signup'
import TVShowDetails from './pages/TVShowDetails'
import ReviewCard from './pages/ReviewCard'
import AddShow from './components/AddShow'
import AddReview from './components/AddReview'
import UpdateReview from './pages/UpdateReview'
import DeleteReview from './pages/DeleteReview'

const routes = [
  { path: '/', component: Home, name: 'Home' },
  { path: '/about', component: About, name: 'About' },
  { path: '/search', component: Search, name: 'Search' },
  { path: '/signup', component: Signup, name: 'Signup' },
  {
    path: '/details/:show_id',
    component: TVShowDetails,
    name: 'TVShowDetails'
  },
  { path: '/reviews', component: ReviewCard, name: 'ReviewCard' },
  { path: '/addshow', component: AddShow, name: 'AddShow' },
  { path: '/addreview', component: AddReview, name: 'AddReview' },
  { path: '/updatereview', component: UpdateReview, name: 'UpdateReview' },
  { path: '/deletereview', component: DeleteReview, name: 'DeleteReview' }
]

export default new VueRouter({ routes, mode: 'history' })
