<script>
  import { savedPlants } from '../store'
  export let plant

  const defaultPlantId = plant.main_species_id || plant.id

  $: isSaved = $savedPlants.includes(defaultPlantId)
  $: buttonText = isSaved ? 'Remove' : 'Add'

  const addPlant = (plantId) => {
    $savedPlants = [
      ...$savedPlants,
      plantId
    ]
  }

  const removePlant = (plantId) => {
    $savedPlants = $savedPlants
      .filter(savedPlant => savedPlant !== plantId)
  }

  const handleClick = (plantId) => {
    return isSaved ? removePlant(plantId) : addPlant(plantId)
  }
</script>

<article data-test="plants-result">
  <img
    src={plant.image_url}
    alt="Plant"
    height="400"
    width="400"
    loading="lazy"
  >
  <h2>{plant.scientific_name}</h2>
  <button on:click={() => handleClick(defaultPlantId)}>
    {buttonText}
  </button>
</article>
