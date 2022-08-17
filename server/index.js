const express = require("express")
const app = express()
const cors = require("cors")
const pool = require("./db")

//middleware
app.use(cors());
app.use(express.json());

//ROUTES USER
//create user 
app.post("/users", async (req, res) => {
    try {
        const { user_name, user_email, user_password } = req.body
        const newUser = await pool.query(
            `INSERT INTO users (user_uid, user_name, user_email, user_password, user_status, user_joined) 
            VALUES (uuid_generate_v4(), $1, $2, crypt('${user_password}', gen_salt('bf')), FALSE, CURRENT_DATE)
            RETURNING *`,
            [user_name, user_email]
        )
        res.json(user_name, 'has been added')
    } catch (err) {
        console.error(err.message)
    }
})
app.get("/users", async (req, res) => {
    try {
        const allUsers = await pool.query(
            "SELECT * FROM users"
        )
        res.json(allUsers.rows)
    } catch (err) {
        console.error(err.message)
    }
})

//get user by uid
app.get("/users/:uid", async (req, res) => {
    try {
        const { uid } = req.params
        const user = await pool.query(
            "SELECT * FROM users WHERE user_uid = $1",
            [uid]
        )

        res.json(user.rows[0])
    } catch (err) {
        console.error(err.message)
    }
})

//update user by uid
app.put("/users/:uid", async (req, res) => {
    try {
        const { uid } = req.params
        const { user_name, user_email, user_status } = req.body
        const updateUser = await pool.query(
            `UPDATE users SET user_name = $1, user_email = $2, user_status = $3 WHERE user_uid = $4`,
            [user_name, user_email, user_status, uid]
        )
        res.json(`User has been updated`)
    } catch (err) {
        console.error(err.message)
    }
})

// delete user
app.delete("/users/:id", async (req, res) => {
    try {
        const { id } = req.params
        const deleteUser = await pool.query(
            `DELETE FROM users WHERE user_uid = $1`,
            [id]
        )
        res.json('User deleted')
    } catch (err) {
        console.error(err.message)
    }
})

// ROUTES POST
// create post
app.post("/posts", async (req, res) => {
    try {
        const { post_title, post_content, post_author } = req.body
        const newPost = await pool.query(
            `INSERT INTO posts (post_title, post_content, post_author, post_date) 
            VALUES ($1, $2, $3, CURRENT_DATE)
            RETURNING *`,
            [post_title, post_content, post_author]
        )
        res.json(`New post added`)
    } catch (err) {
        console.error(err.message)
    }
})
// get post
app.get("/posts/:id", async (req, res) => {
    try {
        const { id } = req.params
        const post = await pool.query(
            `SELECT post_id, post_title, post_content, post_date, user_name from posts
            JOIN users ON post_author = user_uid
            WHERE post_id = $1`,
            [id]
        )
        res.json(post.rows[0])
    } catch (err) {
        res.json(err.message)
    }
})
// get all posts
app.get("/posts", async (req, res) => {
    try {
        const allPosts = await pool.query(
            'SELECT * FROM posts'
        )
        res.json(allPosts.rows)
    } catch (err) {
        res.json(err.message)
    }
})
// update post by id
app.put("/posts/:id", async (req, res) => {
    try {
        const { id } = req.params
        const { post_title, post_content } = req.body
        const updatePost = await pool.query(
            'UPDATE posts SET post_title = $1, post_content = $2 WHERE post_id = $3',
            [post_title, post_content, id]
        )
        res.json('Post updated')
    } catch (err) {
        res.json(err.message)
    }
})
// delete post 
app.delete("/posts/:id", async (req, res) => {
    try {
        const { id } = req.params
        const deletePost = await pool.query(
            "DELETE FROM posts WHERE post_id = $1",
            [id]
        )
        res.json("post deleted")
    } catch (err) {
        res.json(err.message)
    }
})

//ROUTES CATEGORIES
// create cat
app.post("/cats", async (req, res) => {
    try {
        const { cat_name } = req.body
        const newCat = await pool.query(
            "INSERT INTO cats (cat_name) VALUES ($1) RETURNING *",
            [cat_name]
        )
        res.json(`New category created: ${cat_name}`)
    } catch (err) {
        console.error(err.message)
    }
})
// get all cats
app.get("/cats", async (req, res) => {
    try {
        const allCats = await pool.query(
            "SELECT * FROM cats"
        )
        res.json(allCats.rows)
    } catch (err) {
        console.error(err.message)
    }
})

// get cat by id
app.get("/cats/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const cat = await pool.query(
            "SELECT * FROM cats WHERE cat_id = $1",
            [id]
        )
        res.json(cat.rows[0])
    } catch (err) {
        console.error(err.message)
    }
})
// update cat by id
app.put("/cats/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { cat_name } = req.body;
        const updateCat = await pool.query(
            "UPDATE cats SET cat_name = $1 WHERE cat_id = $2",
            [cat_name, id]
        )
        res.json(`Category ${id} was updated to ${cat_name}`)
    } catch (err) {
        console.error(err.message)
    }
})
// delete cat
app.delete("/cats/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteCat = await pool.query(
            "DELETE FROM cats WHERE cat_id = $1",
            [id]
        )
        res.json(`Category ${id} has been deleted`)
    } catch (err) {
        console.error(err.message)
    }
})



app.listen(4000, () => {
    console.log("Server running on port 4000")
});