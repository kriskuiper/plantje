<script>
  import router from '../router.js'
  
  export let href
  let props

  $: {
    props = { ...$$props, href }
  }

  const handleLinkClick = (event) => {
    router.push(event.currentTarget.pathname)
  }
</script>

<a href={href} {...props} on:click|preventDefault={handleLinkClick}>
  <slot />
</a>
