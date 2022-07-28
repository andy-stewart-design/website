<script lang="ts">
  interface Frontmatter {
    title: string;
    date: string;
    summary: string;
    image?: string;
    tags?: string[];
  }

  interface Post extends Frontmatter {
    slug: string;
  }

  export let post: Post;

  const { slug, summary, title } = post;
</script>

<a href={slug}>
  <div
    class="bg-white/30 dark:bg-gray-900/40 border border-gray-900/10 dark:border-gray-100/10 p-6 mb-4 rounded-xl"
  >
    <h3 class="font-bold text-2xl mb-3">{title}</h3>
    <p>{summary}</p>
  </div>
</a>
