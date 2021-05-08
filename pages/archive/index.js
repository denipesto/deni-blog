import React from 'react'

import Page from '@components/page'
import PostsList from '@components/archive-list'
import getPosts from '@lib/get-archive'

const Archive = ({ posts }) => {
  return (
    <Page title="Blog" description="Writing about design and code.">
      <article>
        <ul>
          <PostsList posts={posts} />
        </ul>
      </article>
    </Page>
  )
}

export const getStaticProps = () => {
  const posts = getPosts()

  return {
    props: {
      posts
    }
  }
}

export default Archive
