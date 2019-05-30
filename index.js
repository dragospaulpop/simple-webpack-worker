import Worker from './my.worker.js';

const app = document.querySelector('#app')
const btn = document.querySelector('#btn')

const worker = new Worker()

btn.addEventListener('click', e => {
    worker.postMessage('get id')    
})

worker.onmessage = e => {
    app.innerHTML = e.data    
}
