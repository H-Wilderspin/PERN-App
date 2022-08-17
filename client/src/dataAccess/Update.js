import serverURL from "../utils/serverURL";

export default async function Update(formData, endpoint, id) {
    
    endpoint.preventDefault()
    try {
        await fetch(`${serverURL}${endpoint}/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ formData })
        })

    } catch (err) {
        console.error(err.message)
    }
}
