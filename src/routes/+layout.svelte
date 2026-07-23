<script lang="ts">
  import "./layout.css";

  let { children } = $props();
</script>

<svelte:head>
  <title>Luís Silva</title>
  <meta name="title" content="Luís Silva" />
  <meta
    name="description"
    content="Olá, me chamo Luís e este é o meu curriculo." />

  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://luis.lzart.com.br/" />
  <meta property="og:title" content="Luís Silva" />
  <meta
    property="og:description"
    content="Olá, me chamo Luís e este é o meu curriculo." />
  <meta property="og:image" content="https://github.com/yspoof.png" />

  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="https://luis.lzart.com.br/" />
  <meta property="twitter:title" content="Luís Silva" />
  <meta
    property="twitter:description"
    content="Olá, me chamo Luís e este é o meu curriculo." />
  <meta property="twitter:image" content="https://github.com/yspoof.png" />

  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
</svelte:head>

{@render children()}
