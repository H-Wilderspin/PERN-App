import serverURL from '../utils/serverURL'

export default function GetOne(endpoint, setData, id) {
    console.log('fetch triggered')
    try {
        fetch(`${serverURL()}${endpoint}/${id}`)
            .then(res => res.json())
            .then(data => {
                setData(data)
            })

    } catch (err) {
        console.log(err.message)
        console.log(`it tried and failed to get and item from ${endpoint}`)
    }
}