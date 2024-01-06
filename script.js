const input = document.querySelector('#task')
const btn = document.querySelector('#add')
const list = document.querySelector('#addedTask')

btn.addEventListener('click', function (e) {
   
    if (input.value) {
        
        const task = document.createElement('div')
        const inputSpan = document.createElement('span')
        const done = document.createElement('button')
    
        task.classList.add('todo')
        inputSpan.innerText = input.value
        done.classList.add('donebtn')
        done.innerText = 'Done'
        task.appendChild(inputSpan)
        task.appendChild(done)
        list.appendChild(task)

        input.value = null

        done.addEventListener('click', function(e) {
            task.remove()
        })
    }
})