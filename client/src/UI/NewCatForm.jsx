import React, { Fragment, useState } from 'react'
import Post from '../DA/Post'

export default function NewCatForm() {

    const [formData, setFormData] = useState("")

    const submit = (e) => {
        e.preventDefault()
        const endpoint = "cats"
        Post(formData, endpoint)
    }

    return (
        <Fragment>
            <h1>
                Add A Category
            </h1>

            <form onSubmit={submit}>
                <input
                    type="text"
                    value={formData}
                    onChange={e => setFormData(e.target.value)}
                />
                <button>Submit</button>
            </form>
        </Fragment>
    )
}
