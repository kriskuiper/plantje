<script>
  import { onMount } from 'svelte'

  import { savedPlants } from '../store'

  import Link from '../components/Link.svelte'
  import Plant from '../components/Plant.svelte'

  let initialPlantsData = []
  let isLoading = false
  let hasError = false

  const getPlantsData = async (plantIds) => {
    try {
      const body = JSON.stringify(plantIds)
      const response = await fetch('/.netlify/functions/get-plants', {
        method: 'POST',
        body
      })
      const plantsData = await response.json()

      return plantsData
    } catch (error) {
      throw new Error(error)
    }
  }

  onMount(async () => {
    try {
      isLoading = true
      initialPlantsData = await getPlantsData($savedPlants)
    } catch {
      hasError = true
    } finally {
      isLoading = false
    }
  })
</script>

<h1>Your plants will be dropped here</h1>

{#if isLoading}
  <p>Loading plantdata...</p>
{:else}
  {#if hasError}
    <p>Failed to load plants :(</p>
  {:else}
    {#each initialPlantsData as plant}
    <Plant {plant} />
    {/each}
  {/if}
{/if}

<Link href="/">To home page</Link>
