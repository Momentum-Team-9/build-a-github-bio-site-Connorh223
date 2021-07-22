const root = document.getElementById('root')

fetch('https://api.github.com/users/Connorh223')
    .then(response => response.json())
    .then(data => {

        //name
        const name = document.createElement('h1')
        name.classList.add('name-box')
        name.innerText = data.name
        root.appendChild(name)


        //basics box
        const basicsBox = document.createElement('div')
        basicsBox.classList.add('basics-box')
        root.appendChild(basicsBox)

        //basics title
        const basicsTitle = document.createElement('h2')
        basicsTitle.innerText = "The Basics"
        basicsBox.appendChild(basicsTitle)

        //basics name
        const basicsName = document.createElement('p')
        basicsName.innerText = "Name " + "Connor Hickman"
        basicsBox.appendChild(basicsName)

        //the story box
        const storyBox = document.createElement('div')
        storyBox.classList.add('story-box')
        root.appendChild(storyBox)

        //the story title
        const storyTitle = document.createElement('h3')
        storyTitle.innerText = "The Story"
        storyBox.appendChild(storyTitle)


         //bio
         const bio = document.createElement('p')
         bio.innerText = data.bio
         storyBox.appendChild(bio)
 
         //location
         const location = document.createElement('p')
         location.innerText = data.location
          storyBox.appendChild(location)

        //pic box
        const picBox = document.createElement('div')
        picBox.classList.add('pic-box')
        root.appendChild(picBox)

        //pic
        const avatar = document.createElement('img')
        avatar.src = data.avatar_url
        picBox.appendChild(avatar)


    

    
        
      }  )













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
