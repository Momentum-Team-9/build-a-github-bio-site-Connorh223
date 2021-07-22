const root = document.getElementById('root')

fetch('https://api.github.com/users/Connorh223')
    .then(response => response.json())
    .then(data => {

        //name
        const name = document.createElement('h1')
        name.classList.add('name-box')
        name.innerText = data.name
        root.appendChild(name)

        //bio
        const bio = document.createElement('p')
        bio.innerText = data.bio
        root.appendChild(bio)

        //location
        const location = document.createElement('p')
        location.innerText = data.location
        root.appendChild(location)




    }
        
        )













// const outputDiv = document.getElementById('root')

// fetch('https://api.github.com/users/Connorh223')
//     .then(response => response.json())
//     .then(data =>  {
//         const nameBox = document.createElement("div")
//         nameBox.classList.add("name-Box")
//         outputDiv.appendChild(nameBox)

//         const header = document.createElement('h1')
//         header.classList.add("name");
//         header.innerText = data.name;
//         outputDiv.appendChild(header)

        // name.innerText = data.name
        // root.appendChild(name)
    
    // }
    // )
