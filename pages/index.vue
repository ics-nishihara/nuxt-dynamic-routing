<template>
  <div>

    <div v-if="posts">
      <h1>Validationあり</h1>
      <ul>
        <li v-for="post of posts.slice(0,10)" :key="post.id">
          <n-link :to="`/validated_posts/${post.id}`">
            {{ post.title }}
          </n-link>
        </li>
        <li>
          <n-link :to="`/validated_posts/9999`">
            存在しないリンク
          </n-link>
        </li>
      </ul>
      <h1>Validationなし</h1>
      <ul>
        <li v-for="post of posts.slice(11,20)" :key="post.id">
          <n-link :to="`/no_validated_posts/${post.id}`">
            {{ post.title }}
          </n-link>
        </li>
        <n-link :to="`/no_validated_posts/9999`">
          存在しないリンク
        </n-link>
      </ul>
    </div>
  </div>
</template>

<script>
import {
  defineComponent,
  useFetch,
  useContext,
  ref,
} from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const posts = ref(null)

    const { $http } = useContext()

    useFetch(async () => {
      posts.value = await $http
        .$get('https://jsonplaceholder.typicode.com/posts')
        .then((posts) => posts.slice(0, 20))
    })

    return { posts }
  },
})
</script>
