<script>
  import { currentRoute } from '../store.js'

  export let path = ''
  export let component = null
</script>

{#if $currentRoute === path}
  {#if component}
    <svelte:component this={component} />
  {:else}
    <slot />
  {/if}
{/if}
