<nav class="font-sans absolute top-0 left-0 w-screen py-4 px-4">
  <div class="flex justify-between items-center max-w-4xl mx-auto">
    <a href="/" class="font-bold p-0.5">Andy Stewart</a>
    <div class="flex gap-x-4">
      <a href="/about" class="font-medium text-sm" rel="prefetch">About</a>
      <a href="/posts" class="font-medium text-sm" rel="prefetch">Posts</a>
      <a href="/snippets" class="font-medium text-sm" rel="prefetch">
        Snippets
      </a>
    </div>
    <div class="flex justify-center items-center w-10 h-10">
      <slot />
    </div>
  </div>
</nav>
