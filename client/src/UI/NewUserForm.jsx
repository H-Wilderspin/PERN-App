import React, { Fragment, useState } from 'react'
import Post from '../dataAccess/Post'

export default function NewUserForm() {

    const [formData, setFormData] = useState({
        user_name: "",
        user_email: "",
        user_password: ""
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
        const endpoint = "users"
        Post(formData, endpoint)
    }

    return (
        <Fragment>
            <h2>
                Register A User
            </h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='Your Name'
                    onChange={handleChange}
                    name="user_name"
                    value={formData.user_name}
                />
                <input
                    type="email"
                    placeholder='Your Email'
                    onChange={handleChange}
                    name="user_email"
                    value={formData.user_email}
                />
                <input
                    type="password"
                    placeholder='Create a password'
                    onChange={handleChange}
                    name="user_password"
                    value={formData.user_password}
                />

                <button>Submit</button>
            </form>
        </Fragment>
    )
}
