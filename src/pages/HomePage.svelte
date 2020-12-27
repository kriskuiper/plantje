<script>
  import Link from '../components/Link.svelte'
  import Plant from '../components/Plant.svelte'

  let input
  let isPending
  let plants = []

  $: hasPlants = plants.length > 0
  $: buttonText = isPending ? 'Hold on...' : 'Search'

  async function handleSubmit(event) {
    const form = event.target

    if (!input.value) {
      plants.length = 0
      return
    }

    try {
      isPending = true

      const response = await fetch(`${form.action}?q=${input.value}`)
      const data = await response.json()

      plants = data
    } catch {

    } finally {
      isPending = false
    }
  }
</script>

<h1>Welcome to Plantje!</h1>
<form
  method="GET"
  action="/.netlify/functions/search"
  on:submit|preventDefault={handleSubmit}
>
  <label>
    <span>Search for a plant</span>
    <input
      type="search"
      name="q"
      data-test="plants-search-field"
      bind:this={input}
    >
    <button
      type="submit"
      disabled={isPending}
      data-test="plants-submit-button"
    >
      {buttonText}
    </button>
  </label>
</form>

{#if hasPlants}
   <section>
    {#each plants as plant}
      <Plant {plant} />
    {/each}
   </section>
{/if}

<Link href="/plants">To plants page</Link>
