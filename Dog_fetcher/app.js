$(() => {
  let titleQuery;
  let endpoint = `https://dog.ceo/api/breed/${titleQuery}/images/random`;
  const allBreeds = 'https://dog.ceo/api/breeds/list/all';

  //AJAX request to retrieve data from API
  //For loop to populate dropdown menu
  $.ajax({
    url: allBreeds
  }).then(data => {
    const breeds = Object.keys(data.message);
    for (let i = 0; i <= breeds.length; i++) {
      const $option = $('<option>');
      $option.text(breeds[i]);
      $option.attr('value', breeds[i]);
      $('#dropdown').append($option);
    }
  });

  $('#dropdown').change(() => {
    titleQuery = $('#dropdown').val();
    $('.image').remove();
    $('.breed').remove();
    requestData();
  });

  // jQuery to grab How to use this app button
  const $openBtn = $('#openModal');

  // jQuery to grab modal element
  const $modal = $('#modal');
  $($modal).css('display', 'none');

  // jQuery to close button
  const $closeBtn = $('#close');

  // jQuery Event handler to open the modal
  const openModal = () => {
    $modal.css('display', 'block');
  };

  // javaScript timeOut() method to set Modal to open 3 seconds after page loads
  setTimeout(openModal, 3000);

  // jQuery event handler to close the modal
  const closeModal = () => {
    $modal.css('display', 'none');
  };

  //Add jQuery event listener to Close button
  $closeBtn.on('click', closeModal);
  //Add jQuery event listener to Open button
  $openBtn.on('click', openModal);

  //Function that adds data to the DOM
  const handleData = data => {
    const $breed = $('<h1>').text(titleQuery);
    $breed.addClass('breed');
    const $img = $('<img>');
    $img.addClass('image');
    $img.attr('src', data.message);
    $body = $('body');
    $body.append($img);
    $body.append($breed);
    const $container = $('.container');
    $body.append($container);
    // jQuery animate method to move img onto screen
    const $imgDiv = $('<div>');
    $('.image').animate(
      {
        left: '0'
      },
      'slow'
    );
  };

  //AJAX request to retrieve data from API
  const requestData = () => {
    endpoint = `https://dog.ceo/api/breed/${titleQuery}/images/random`;
    $.ajax({
      url: endpoint
    }).then(handleData);
  };
  //get data asynchronously, when the data gets back, handle it
});
