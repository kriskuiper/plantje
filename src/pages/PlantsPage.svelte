<script>
  import { onMount } from 'svelte'

  import { savedPlants } from '../store'

  import Link from '../components/Link.svelte'
  import Plant from '../components/Plant.svelte'

  let initialPlantsData = []

  const getPlantsData = async (plantIds) => {
    const body = JSON.stringify(plantIds)
    const response = await fetch('/.netlify/functions/get-plants', {
      method: 'POST',
      body
    })
    const plantsData = await response.json()

    return plantsData
  }

  onMount(async () => {
    initialPlantsData = await getPlantsData($savedPlants)
  })
</script>

<h1>Your plants will be dropped here</h1>

{#each initialPlantsData as plant}
  <Plant {plant} />
{/each}

<Link href="/">To home page</Link>
