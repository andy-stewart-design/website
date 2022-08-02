<script lang="ts">
  import { onMount } from "svelte";

  let isDark = false;

  function toggleDarkMode() {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      isDark = false;
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      isDark = true;
    }
  }

  onMount(() => {
    if (typeof localStorage !== "undefined") {
      if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        isDark = true;
      }
    }
  });
</script>

<button
  aria-label="Toggle Dark Mode"
  class="flex items-center justify-center bg-gray-200 dark:bg-gray-800 ring-blue-500
			transition-all hover:ring-2 h-9 w-9 p-2 rounded-lg"
  on:click={toggleDarkMode}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    role="img"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2S2 6.48 2 12s4.48 10 10 10zm1-17.93c3.94.49 7 3.85 7 7.93s-3.05 7.44-7 7.93V4.07z"
    />
  </svg>
</button>
