import React, { Fragment, useEffect, useState } from 'react'
import GetOne from '../dataAccess/GetOne'
import DeleteOne from '../dataAccess/DeleteOne'
import Update from '../dataAccess/Update'

export default function ViewAPost({ postId }) {

    const endpoint = "posts"
    const defaultPostID = "8"

    const [post, setPost] = useState({
        post_id: defaultPostID,
    })

    const [editing, setEditing] = useState(false)

    useEffect(() => {
        GetOne(endpoint, setPost, postId)
        // console.log(post)
    }, [postId])

    const handleChange = (e) => {
        const { name, value } = e.target
        setPost(prevPost => ({
            ...prevPost,
            [name]: value
        }))
    }

    const handleDelete = () => {
        DeleteOne(endpoint, post.post_id)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        Update(post, endpoint, post.post_id)
    }

    return (
        <Fragment>
            <h2>
                Article by id
            </h2>

            <div key={post.post_id}>
                <p>{post.post_title}</p>
                <p>{post.post_content}</p>
                <p>Written by: {post.user_name}</p>
                <button
                    disabled={post.post_id === defaultPostID ? true : false}
                    onClick={() => handleDelete()}>
                    Delete post
                </button>
                <button onClick={() => setEditing(prevState => !prevState)}>
                    Toggle editor
                </button>
            </div>

            {editing &&
                <form onSubmit={() => handleSubmit()}>
                    <p>Editor</p>
                    <input
                        type="text"
                        onChange={handleChange}
                        name="post_title"
                        value={post.post_title}
                    />
                    <input
                        type="text"
                        onChange={handleChange}
                        name="post_content"
                        value={post.post_content}
                    />
                    <button>Submit</button>
                </form>
            }
        </Fragment>
    )
}