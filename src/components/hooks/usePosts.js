import { useMemo } from "react";

export const usePosts = (posts, query) => 
{
    const posts_ = posts;
    const sortedPosts = useMemo(() => {
        return posts_.filter(post => post.type.toLowerCase().includes(query))
      }, [query, posts_]);

      return sortedPosts;
}