
export default async function Post(formData, endpoint) {

    try {
        console.log(formData, endpoint)

    } catch (err) {
        console.log(err.message)
    }
}





    // const submitForm = async e => {
    //     e.preventDefault()

    //     try {
    //         const body = {content}

    //         const res = await fetch("http://localhost:4000/cats",{
    //             method: "POST",
    //             headers: {"Content-Type": "application/json"},
    //             body: JSON.stringify(body)
    //         })
    //         window.location = "/"
    //     } catch (err) {
    //         console.log(err.message)
    //     }
    // }
