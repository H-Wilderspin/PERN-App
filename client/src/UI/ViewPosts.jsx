import React, { Fragment, useEffect, useState } from 'react'
import GetAll from '../dataAccess/GetAll'
import ViewAPost from './ViewAPost'

export default function ViewPosts() {

    const [posts, setPosts] = useState([{
        post_id: 8,
        post_title: 'loading data...',
    }])
    console.log(posts)

    useEffect(() => {
        GetAll('posts', setPosts)
    }, [])

    const [topPostID, setTopPost] = useState(posts[0].post_id)

    let TopPostEl =
        <ViewAPost
            postId={topPostID}
        />

    const handleView = (id) => {
        console.log(id)
        setTopPost(id)
    }

    return (
        <Fragment>
            {TopPostEl}

            <h3>
                All Articles
            </h3>
            {posts.map((p) => (
                <div key={p.post_id}>
                    <p>{p.post_title}</p>
                    <button onClick={() => handleView(p.post_id)}>View</button>
                </div>
            ))}
        </Fragment>
    )
}
