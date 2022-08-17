import serverURL from '../utils/serverURL'

export default function GetAll(endpoint, setData) {
    console.log('fetch triggered')
    try {
        fetch(`${serverURL()}${endpoint}`)
            .then(res => res.json())
            .then(data => {
                setData(data)
            })

    } catch (err) {
        console.log(err.message)
        console.log('it tried and failed to get an array')
    }
}
