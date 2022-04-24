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

    let textarea = document.querySelector('#textarea')

    textarea.addEventListener('scroll', () => {
        textarea.setAttribute('rows', 5)
    })

    textarea.addEventListener('paste', () => {
        textarea.style.backgroundColor = "red"
        textarea.style.color = "white"
    })

    textarea.addEventListener('mouseenter', () => {
        textarea.setAttribute('cols', 15)
    })

    textarea.addEventListener('mouseleave', () => {
        textarea.setAttribute('cols', 0)
    })

    setTimeout(() => {
        window.addEventListener('scroll', (event) => {

            window.setTimeout(() => {
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
            }, 500)
        })
    }, 8000)


    setTimeout(() => {
        Swal.fire({
            title: 'Welcome ! Woops, I\'m early... 😅*',
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
    
    time.addEventListener('mouseover', () => {
        time.style.fontSize = '5em'
    })

    time.addEventListener('mouseleave', () => {
        time.style.fontSize = '2em'
        window.scrollTo(0, 0)
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

    let videoPlayer = document.querySelector('video')

    videoPlayer.addEventListener('play', () => {
        document.body.style.backgroundColor = "grey"
    })

    videoPlayer.addEventListener('pause', () => {
        document.body.style.backgroundColor = "white"
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
            Swal.fire({
                title: 'No need to press enter :)',
                showCancelButton: false,
                showConfirmButton: false,
                icon: 'info',
                position: 'top',
                timer: 1500,
                timerProgressBar: 'true'
            })
        }
    })

    passwordInput.addEventListener('paste', (event) => {
        event.preventDefault()
        Swal.fire({
            title: 'Don\'t try this please...',
            showCancelButton: false,
            showConfirmButton: false,
            icon: 'info',
            position: 'top',
            timer: 1500,
            timerProgressBar: 'true'
        })
    })

    document.addEventListener('copy', (event) => {
        event.preventDefault()
        Swal.fire({
            title: 'Nope, what is here, stay here :D',
            showCancelButton: false,
            showConfirmButton: false,
            icon: 'info',
            position: 'top',
            timer: 1500,
            timerProgressBar: 'true'
        })
    })

    if (localStorage.getItem('password')) {
        displayPassword.innerHTML = 'Your password is : ' + localStorage.getItem('password')
    }

    let [red1, green1, blue1] = [0, 0, 0]

    musicPlayer.addEventListener('mouseover', () => {
        document.body.style.backgroundColor = "rgb(" + red1 + "," + green1 + "," + blue1 + ")"
        red1 += 5
        green1 += 4
        blue1 += 5
    })

    let chessplate = document.querySelector('#chessplate')
    let chessplateChilds = document.querySelectorAll('#chessplate>div')

    let [red2, green2, blue2] = [15, 5, 20]

    chessplateChilds.forEach(child => {
        child.style.backgroundColor = "rgb(" + red2 + "," + green2 + "," + blue2 + ")"
        red2 += 1
        green2 += 1
        blue2 += 1
    })

    let [red3, green3, blue3] = [15, 5, 20]
    let borderSize = 0.1

    chessplateChilds.forEach(child => {
        child.addEventListener('mouseenter', () => {
            child.style.borderWidth = borderSize + "px"
            child.style.borderColor = "rgb(" + red3 + "," + green3 + "," + blue3 + ")"
            red3 += 1
            green3 += 1
            blue3 += 5
            borderSize += 0.1
        })
    })

    let loaderDiv = document.querySelector('#loader')
    let loader = document.querySelector('#white')

    loader.addEventListener('animationstart', () => {
        title.style.display = "none"
        changeTitleButton.style.display = "none"
        time.style.display = "none"
        passwordInput.style.display = "none"
        displayPassword.style.display = "none"
        musicPlayer.style.display = "none"
        chessplate.style.display = "none"
        textarea.style.display = "none"
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
        textarea.style.display = "block"
        chessplate.style.display = "grid"
        document.body.style.backgroundColor = "white"
    })

    window.addEventListener('resize', () => {
        Swal.fire({
            title: 'I just lost 2 kilos ! Stop resizing me please...',
            showCancelButton: false,
            showConfirmButton: false,
            icon: 'info',
            position: 'top',
            timer: 1500,
            timerProgressBar: 'true'
        })
    })
})