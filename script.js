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

    // document.addEventListener('click', () => {
    //     Swal.fire({
    //         title: 'Stop clicking me like this !',
    //         showCancelButton: true,
    //         position: 'top-end',
    //         showConfirmButton: false,
    //         timer: 1500
    //     })
    // })

    window.addEventListener('scroll', () => {
        Swal.fire({
            title: 'Don\'t look at this please',
            showCancelButton: true,
            icon: 'warning',
            position: 'top-start',
            showConfirmButton: false,
            timer: 1500
        })
    })

    setTimeout(() => {
        Swal.fire({
            title: 'Welcome ! Woops, I\'m late... 😅*',
            showCancelButton: true,
            icon: 'info',
            position: 'top',
            showConfirmButton: false,
            timer: 1500
        })
    }, 10000)

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
})