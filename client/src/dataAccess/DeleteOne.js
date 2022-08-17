import serverURL from '../utils/serverURL'

export default function DeleteOne(endpoint, id) {
    console.log('fetch triggered')
    try {
        fetch(`${serverURL()}${endpoint}/${id}`, {
            method: "DELETE"
        })

    } catch (err) {
        console.log(err.message)
        console.log("it tried and failed to delete something")
    }
}
