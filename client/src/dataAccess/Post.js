import serverURL from "../utils/serverURL"

export default async function Post(formData, endpoint) {
    console.log('fetch triggered')
    try {
        await fetch(`${serverURL()}${endpoint}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        })

    } catch (err) {
        console.log(err.message)
        console.log('it tried and failed to POST')
    }
}


