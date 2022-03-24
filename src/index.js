// Your code here

//creating a header in film-info HTML
//

const request = async() => {
    let req = await fetch ("http://localhost:3000/films")
     let res = await req.json()
     console.log("Response", res)
     res.forEach ((element) => {
     let films = document.getElementById('films')
    let runTime= document.getElementById('runtime')
    runTime.textContent = `Runtime: ${element.runtime} minutes`
    let ticketNum= document.getElementById('ticket-num')
    let title = document.getElementById('title')
    title.textContent = `${element.title}`
    let movieMenu= document.getElementById('movie-menu')
    movieMenu.textContent = 
    movieSideMenu.textContent = `${res.title}`
    let buyBttn = document.getElementById('buy-ticket')
    let filmInfo = document.getElementById('film-info')
        filmInfo.textContent= `${element.description}`
        let poster = document.createElement()
        let img= document.getElementById('poster')
        let imgSrc = img.setAttribute('src', `${element.poster}`)
        let imgAlt =img.setAttribute('alt', `${element.title}`)
        img.appendChild(imgSrc, imgAlt)
        
        //showTime.appendChild(p)
      //  buyBttn.addEventListener('click', () => {


       // })

        
        
        //buyBttn.addEventListener('click', () => {


       // })
     })
}
request()

///let image=  document.createElement('img')
///let h3 = document.createElement('h3')
///let 

//

///appendChild(image)

/*See the first movie's details, including its poster, title, runtime, showtime, and available tickets when the page loads. The number of available tickets will need to be derived by subtracting 
the number of tickets_sold from the theater's capacity. You will need to make a GET request to the following endpoint to retrieve the film data:*/

//movie's poster 
//movies's title 
//movies run time 