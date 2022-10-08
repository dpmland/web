<script lang="ts">
  import { scale, fly } from 'svelte/transition'

  import CopyIcon from '@components/icons/Copy.svelte'
  import CheckIcon from '@components/icons/Check.svelte'

  import copyToClipboard from '@utils/copyToClipboard'
  import sleep from '@utils/sleep'

  export let text: string
  export let isSnippet = false

  let isCopied = false

  const handleCopy = async () => {
    await copyToClipboard(text)
    isCopied = true
    await sleep(2000)
    isCopied = false
  }
</script>

<button
  class="button"
  class:button--copied={isCopied}
  class:button--snippet={isSnippet}
  aria-label="Copy to Clipboard"
  on:click={handleCopy}
>
  {#if isCopied}
    <span in:scale>
      <CheckIcon width="1.5rem" height="1.5rem" />
    </span>
  {:else}
    <span in:scale>
      <CopyIcon width="1.5rem" height="1.5rem" />
    </span>
  {/if}
</button>

{#if isCopied}
  <p class="alert" role="alert" transition:fly={{ y: -20 }}>
    <CheckIcon width="1.5rem" height="1.5rem" />
    Copied to clipboard
  </p>
{/if}

<style lang="scss">
  .button {
    position: relative;
    display: grid;
    place-items: center;
    width: 1.75rem;
    height: 1.75rem;
    color: var(--primary-color);

    &--snippet {
      color: var(--code-primary-color);

      &::before {
        background-color: var(--code-secondary-color);
        color: var(--code-primary-color);
      }
    }
  }

  .alert {
    position: fixed;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background-color: var(--primary-color);
    color: var(--secondary-color);
    padding: 0.5rem 1rem;
    margin: 1rem;
    box-shadow: 0 0 0.75rem rgba(#000, 0.25);
  }
</style>
