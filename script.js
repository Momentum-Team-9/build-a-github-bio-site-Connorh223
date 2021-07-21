const root = document.getElementById('root')

fetch('https://api.github.com/users/Connorh223')
    .then(response => response.json())
    .then(data => {
        console.log(data)
            const name = document.createElement('h3')
            name.innerText = data.name
            // innerText.appendChild(name)
        
    })