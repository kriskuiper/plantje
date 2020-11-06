<script>
  import router from '../router.js'
  import Route from './Route.svelte'
  
  import HomePage from '../pages/HomePage.svelte'
  import PlantsPage from '../pages/PlantsPage.svelte'

  router.init()
</script>

<main>
	<Route path="/" component={HomePage} />
  <Route path="/plants" component={PlantsPage} />
</main>
