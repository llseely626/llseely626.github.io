$(() => {
    let titleQuery;
    let endpoint = `https://dog.ceo/api/breed/${titleQuery}/images/random`
    console.log(endpoint);

    //Does Modal code go here?
    // Grabbing How to use this app button
    const $openBtn = $('#openModal');

    // Grabbing modal element
    const $modal = $('#modal');
    $($modal).css('display', 'none');

    // Grabbing close button
    const $closeBtn = $('#close');

    // Event handler to open the modal
    const openModal = () => {
        $modal.css('display', 'block');
    }


    // $(openModal).hide();
    setTimeout(openModal, 2000);

    // Event handler to close the modal
    const closeModal = () => {
        $modal.css('display', 'none');
    }

    //Add event listener to Close button
    $closeBtn.on('click', closeModal);

    $openBtn.on('click', openModal)
    $closeBtn.on('click', closeModal);

    const handleData = (data) => {
        console.log(data.message)

        const $breed = $('<h1>').text(titleQuery) //create h1 and put title inside
        $breed.addClass('breed');
        console.log('breed:', titleQuery)
        const $img = $('<img>')
        $img.addClass('image')
        $img.attr("src", data.message)
        $body = $('body')
        $body.append($img)
        $body.append($breed)
        const $container = $('.container')
        $body.append($container);
        const $imgDiv = $('<div>');
        //     $imgDiv.addClass('image-div');
        //     $img.append($imgDiv); 
        //not working
    }


    // attribute examples: <div id="" class="" onclick="" src="" href="" type="" alt="">HI</div>

    const requestData = () => {
        endpoint = `https://dog.ceo/api/breed/${titleQuery}/images/random`
        console.log(endpoint)
        $.ajax({
            url: endpoint
        }).then((handleData))
    }
    //get data asynchronously, when the data gets back, handle it


    const $button = $('button');
    $button.on('click', (event) => {
        event.preventDefault(); //prevents page from reloading
        $('.image').remove();
        $('.breed').remove();
        //clear input field?
        titleQuery = $('.input').val()
        $('.input').val('');
        // Get value by targeting class
        // get value of input field ex: titleQuery = $('.input').val()

        requestData();
    });
})