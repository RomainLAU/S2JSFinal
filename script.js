window.addEventListener('DOMContentLoaded', () => {

    let title = document.querySelector('h1')
    let changeTitleButton = document.querySelector('#changeTitleButton')
    let isTitleAwesome = false
    let oldTitle = title.textContent
    
    changeTitleButton.addEventListener('click', () => {
        
        if (isTitleAwesome === false) {

            title.innerHTML = 'Awesome Final JS Project !'
            isTitleAwesome = true

        } else {

            title.innerHTML = oldTitle
            isTitleAwesome = false

        }
    })

    window.addEventListener('scroll', (event) => {

        Swal.fire({
            title: 'Don\'t scroll !!! IT\'S PRIVATE !!!',
            icon: 'error',
            showCancelButton: true,
            cancelButtonText: 'Sorry',
            showConfirmButton: true,
            confirmButtonText: 'Sorry',
            confirmButtonColor: '#d33',
            cancelButtonColor: '#d33',
        })
    })

    setTimeout(() => {
        Swal.fire({
            title: 'Welcome ! Woops, I\'m late... 😅*',
            showCancelButton: false,
            showConfirmButton: false,
            icon: 'info',
            position: 'top',
            timer: 1500,
            timerProgressBar: 'true'
        })
    }, 5000)

    let time = document.querySelector('#time')

    time.innerHTML = moment().format('hh:mm:ss')

    setInterval(() => {
        time.innerHTML = moment().format('hh:mm:ss')
    }, 1000)

    let isChanged = false

    time.addEventListener('click', () => {
        if (isChanged === false) {
            isChanged = true
            time.style.backgroundColor = 'red'
            time.style.color = 'black'
        } else {
            isChanged = false
            time.style.backgroundColor = 'black'
            time.style.color = 'white'
        }
    })

    time.addEventListener('hover', () => {
        time.style.fontSize = '5em'
    })

    document.addEventListener('mousedown', (event) => {
        event.preventDefault
    })

    document.addEventListener('selectstart', (event) => {
        event.preventDefault()
    })

    document.addEventListener('contextmenu', (event) => {
        event.preventDefault()
    })

    let youtubeVideo = document.querySelector('iframe')

    youtubeVideo.addEventListener('play', () => {
        youtubeVideo.requestFullscreen()
    })
})