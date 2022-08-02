<nav class="font-sans absolute top-0 left-0 w-screen py-4 px-4">
  <div class="flex justify-between items-center max-w-4xl mx-auto">
    <a href="/" class="font-bold w-10 p-0.5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 40 40"
        xml:space="preserve"
        ><path
          d="M20 1C9.507 1 1 9.507 1 20s8.507 19 19 19h5v-8H10c-.552 0-1-.448-1-1V10c0-.552.448-1 1-1h20c.552 0 1 .448 1 1v29h8V20C39 9.507 30.493 1 20 1z"
          fill="currentColor"
        />
      </svg>
    </a>
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
