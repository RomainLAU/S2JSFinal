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

        // Swal.fire({
        //     title: 'Don\'t scroll !!! IT\'S PRIVATE !!!',
        //     icon: 'error',
        //     showCancelButton: true,
        //     cancelButtonText: 'Sorry',
        //     showConfirmButton: true,
        //     confirmButtonText: 'Sorry',
        //     confirmButtonColor: '#d33',
        //     cancelButtonColor: '#d33',
        // })

        alert('don\'t scroll !!')
    })

    setTimeout(() => {
        // Swal.fire({
        //     title: 'Welcome ! Woops, I\'m early... 😅*',
        //     showCancelButton: false,
        //     showConfirmButton: false,
        //     icon: 'info',
        //     position: 'top',
        //     timer: 1500,
        //     timerProgressBar: 'true'
        // })

        alert('woops I\'m early 😅')
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
    
    time.addEventListener('mouseover', () => {
        time.style.fontSize = '5em'
    })

    time.addEventListener('mouseleave', () => {
        time.style.fontSize = '2em'
        window.scrollTo(1,document.body.scrollHeight)
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

    const youtubeVideo = document.querySelector('#youtubeVideo')

    youtubeVideo.addEventListener('volumechange', (event) => {
        alert('aaa')
    })

    let musicPlayer = document.querySelector('#audio')

    musicPlayer.addEventListener('timeupdate', () => {
        document.body.style.backgroundColor = "blue"
    })

    musicPlayer.addEventListener('play', () => {
        document.body.style.backgroundColor = "grey"
    })

    musicPlayer.addEventListener('pause', () => {
        document.body.style.backgroundColor = "white"
    })


    musicPlayer.addEventListener('volumechange', () => {
        document.body.style.backgroundColor = "lightpink"
    })

    musicPlayer.addEventListener('durationchange', () => {
        document.body.style.backgroundColor = "lightgreen"
    })

    musicPlayer.addEventListener('ended', () => {
        document.body.style.backgroundColor = "darkgrey"
    })

    let passwordInput = document.querySelector('#password')
    let displayPassword = document.querySelector('#displayPassword')

    passwordInput.addEventListener('keydown', () => {
        localStorage.setItem('password', passwordInput.value)
        displayPassword.innerHTML = localStorage.getItem('password')
    })

    passwordInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            alert('No need to press enter :)')
        }
    })

    passwordInput.addEventListener('paste', (event) => {
        event.preventDefault()
        alert('Don\'t try this please...')
    })

    passwordInput.addEventListener('cut', (event) => {
        event.preventDefault()
        alert('Nope, what is here, stay here :D')
    })

    if (localStorage.getItem('password')) {
        displayPassword.innerHTML = 'Your password is : ' + localStorage.getItem('password')
    }

    let loaderDiv = document.querySelector('#loader')
    let loader = document.querySelector('#white')

    loader.addEventListener('animationstart', () => {
        title.style.display = "none"
        changeTitleButton.style.display = "none"
        time.style.display = "none"
        passwordInput.style.display = "none"
        displayPassword.style.display = "none"
        musicPlayer.style.display = "none"
        youtubeVideo.style.display = "none"
        document.body.style.backgroundColor = "black"
    })

    loader.addEventListener('animationend', () => {
        loaderDiv.style.display = "none"
        title.style.display = "block"
        changeTitleButton.style.display = "block"
        time.style.display = "block"
        passwordInput.style.display = "block"
        displayPassword.style.display = "block"
        musicPlayer.style.display = "block"
        youtubeVideo.style.display = "block"
        document.body.style.backgroundColor = "white"
    })

    window.addEventListener('resize', () => {
        alert('I just lost 2 kilos ! Stop resizing me please...')
    })

    window.addEventListener('offline', () => {
        alert('You\'re offline !')
    })

    let [red, green, blue] = [15, 25, 250]

    youtubeVideo.addEventListener('mouseover', () => {
        document.body.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")"
        red += 2
        green += 1
        blue -= 2
    })
})