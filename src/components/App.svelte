<script>
  import router from '../router.js'
  import Route from './Route.svelte'
  import HomePage from './HomePage.svelte'
  import PlantsPage from './PlantsPage.svelte'

  router.init()
</script>

<main>
	<Route path="/" component={HomePage} />
  <Route path="/plants" component={PlantsPage} />
</main>
