import uniqid from 'uniqid'

onmessage = e => {
    const id = uniqid()    

    postMessage(id)
}