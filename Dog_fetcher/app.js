$(() => {
    let titleQuery;
    let endpoint = `https://dog.ceo/api/breed/${titleQuery}/images/random`
    const allBreeds = "https://dog.ceo/api/breeds/list/all";

    $.ajax({
        url: allBreeds
    }).then((data) => {
        const breeds = Object.keys(data.message)
        for (let i = 0; i <= breeds.length; i++) {
            const $option = $('<option>')
            $option.text(breeds[i])
            $option.attr('value', breeds[i])
            $('#dropdown').append($option)
        }
    })

    $('#dropdown').change(() => {
        titleQuery = $('#dropdown').val()
        $('.image').remove();
        $('.breed').remove();
        requestData();
    })


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


    // Set Modal to open 4 seconds after page loads
    setTimeout(openModal, 4000);

    // Event handler to close the modal
    const closeModal = () => {
        $modal.css('display', 'none');
    }

    //Add event listener to Close button
    $closeBtn.on('click', closeModal);
    //Add event listener to Open button
    $openBtn.on('click', openModal)


    const handleData = (data) => {

        const $breed = $('<h1>').text(titleQuery) //create h1 and put title inside
        $breed.addClass('breed');
        const $img = $('<img>')
        $img.addClass('image')
        $img.attr("src", data.message)
        $body = $('body')
        $body.append($img)
        $body.append($breed)
        const $container = $('.container')
        $body.append($container);
        const $imgDiv = $('<div>');
        $('.image').animate({
            left: '0'
        }, 'slow')

    }



    const requestData = () => {
        endpoint = `https://dog.ceo/api/breed/${titleQuery}/images/random`
        $.ajax({
            url: endpoint
        }).then((handleData))
    }
    //get data asynchronously, when the data gets back, handle it



})