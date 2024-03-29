import React, { Fragment, useState } from 'react'
import Post from '../dataAccess/Post'

export default function NewCatForm() {

    const [formData, setFormData] = useState({ cat_name: "" })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const endpoint = "cats"
        Post(formData, endpoint)
    }

    return (
        <Fragment>
            <h2>
                Add A Category
            </h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='Enter new category'
                    onChange={handleChange}
                    name="cat_name"
                    value={formData.cat_name}
                />
                <button>Submit</button>
            </form>
        </Fragment>
    )
}
