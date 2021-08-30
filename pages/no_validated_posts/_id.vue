<template>
  <div>
    <div v-if="$fetchState.pending">
      <p>読込中</p>
    </div>
    <div v-else-if="$fetchState.error">
      <h1>見つかりません</h1>
    </div>
    <div v-else>
      <h1>{{ post.title }}</h1>
      <pre>{{ post.body }}</pre>
      <n-link to="/">戻る</n-link>
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
    const post = ref()

    const { $http, params } = useContext()

    useFetch(async () => {
      post.value = await $http.$get(
        `https://jsonplaceholder.typicode.com/posts/${params.value.id}`
      )
    })

    return { post }
  },
})
</script>

