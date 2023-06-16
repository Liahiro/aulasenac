let time = 2000, //tempo do setInterval
    currentImageIndex = 0,
    images = document.querySelectorAll('#slider img'), //retono vetor com as iamgens
    max = images.length; // = 4
    //document.querySelectorAll - devolver o array of images

   console.log(images)

   function nextImage() { 
    images[currentImageIndex].classList.remove('selected');
    currentImageIndex++

    if(currentImageIndex >= images.length) {
        currentImageIndex = 0
    }

    images[currentImageIndex].classList.add('selected')

    }

    function start() {
        console.log('window.loaded')
        setInterval(function() {
            nextImage()
        }, time)
    }
    
    window.addEventListener('load', start) //load (quando a tela carregar)