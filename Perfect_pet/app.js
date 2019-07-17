$(() => {
    let titleQuery;
    let endpoint = `https://dog.ceo/api/breed/${titleQuery}/images/random`
    console.log(endpoint);



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
    // console.log(data.resp)

    const $button = $('button');
    $button.on('click', (event) => {
        event.preventDefault();
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