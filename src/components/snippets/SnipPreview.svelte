<script lang="ts">
  import { Snippet } from "src/types/main";
  export let snippet: Snippet;

  const { slug, summary, title, framework } = snippet;
</script>

<a href={slug} rel="prefetch">
  <div
    class="group bg-white/30 dark:bg-gray-800/40 border border-gray-900/10 dark:border-gray-100/10 rounded-xl h-full  overflow-hidden transition-colors duration-300 hover:bg-white/60 hover:dark:bg-gray-800/70 hover:border-gray-900/30 hover:dark:border-gray-100/30"
  >
    <div class="relative w-full">
      <div class="w-full bg-black">
        <img
          class="transition-opacity duration-300 group-hover:opacity-80"
          src="img/fpo-01.webp"
          alt="ojsnf"
        />
      </div>
      <h6
        class="absolute top-4 left-4 font-medium text-sm text-white bg-gray-900/50 py-0.5 px-2 rounded-full"
      >
        {framework}
      </h6>
    </div>
    <div class="p-6">
      <h3 class="font-bold text-2xl mb-3">{title}</h3>
      <p>{summary}</p>
    </div>
  </div>
</a>
