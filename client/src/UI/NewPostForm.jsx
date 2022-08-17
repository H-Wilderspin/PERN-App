import React, { Fragment, useState } from 'react'
import Post from '../dataAccess/Post'

export default function NewPostForm() {

    const [formData, setFormData] = useState({
        post_title: "",
        post_content: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const endpoint = "posts"
        Post(formData, endpoint)

    }

    return (
        <Fragment>
            <h2>
                Create a Post
            </h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='Title'
                    onChange={handleChange}
                    name="post_title"
                    value={formData.post_title}
                />
                <input
                    type="text"
                    placeholder='Article content'
                    onChange={handleChange}
                    name="post_content"
                    value={formData.post_content}
                />
                {/* add context then add author and timestamp */}

                <button>Submit</button>
            </form>
        </Fragment>
    )
}
