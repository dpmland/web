<script lang="ts">
  import { fade } from 'svelte/transition'

  import getTopContributorsFromOwnApi from '@utils/getTopContributorsFromOwnApi'
</script>

{#await getTopContributorsFromOwnApi()}
  <p class="items" aria-label="Loading...">
    {#each Array(30) as _}
      <span class="loading-item" aria-hidden="true" />
    {/each}
  </p>
{:then contributors}
  <ul class="items">
    {#each contributors as { name, avatar, url }}
      <li transition:fade={{ duration: 1000 }}>
        <a href={url} target="_blank" rel="noopener noreferrer" title={name}>
          <img class="avatar" src={avatar} alt={name} />
        </a>
      </li>
    {/each}
  </ul>
{:catch}
  <p>Oops! Something went wrong.</p>
{/await}

<style lang="scss">
  $item-size: 5rem;

  .items {
    display: grid;
    grid-template-columns: repeat(auto-fit, $item-size);
    gap: 1rem;
  }

  @keyframes loading {
    from {
      opacity: 0.75;
    }
    to {
      opacity: 1;
      filter: contrast(0.8);
    }
  }

  .loading-item,
  .avatar {
    background-color: var(--tertiary-color);
    width: $item-size;
    height: $item-size;
    border-radius: 50%;
  }

  .loading-item {
    animation: loading 0.5s ease-in-out infinite alternate;

    &:nth-child(3n) {
      animation-delay: 0.25s;
    }
  }

  .avatar {
    transition: transform 0.25s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
  }
</style>
