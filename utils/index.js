export const memoizePosts = (fn) => {
  let posts = null
  return async (slug) => {
    if (!posts) posts = await fn()
    return slug ? posts.find((post) => post.slug) : posts
  }
}
