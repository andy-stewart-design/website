<script lang="ts">
  export let title = "Andy Stewart Design";
</script>

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width" />
  <link rel="icon" type="image/x-icon" href="/favicon.ico" />
  <title>{title}</title>
  <link
    rel="preload"
    as="font"
    href="/fonts/AeonikPro-Roman-VF.woff2"
    type="font/woff2"
    crossorigin="anonymous"
  />
  <link
    rel="preload"
    as="font"
    href="/fonts/AeonikFono-Regular.woff2"
    type="font/woff2"
    crossorigin="anonymous"
  />
  <script>
    if (
      localStorage.theme === "dark" ||
      (!localStorage.theme &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  </script>
</head>
