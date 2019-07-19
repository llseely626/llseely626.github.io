# llseely626.github.io
Unit #1 Project #1

Project #1: Perfect_dog 
Live link: https://llseely626.github.io/Perfect_dog/

This project utilizes HTML, CSS, JavaScript, and jQuery.

I used AJAX requests to the external API called "Dog API" (https://dog.ceo/dog-api/) and was able to insert the data retrieved into the DOM. 

In one AJAX request I wrote a for loop which populated the dropdown menu with data retrieved from the API.

The other AJAX request involved taking input value from the dropdown menu selection and matching it to the API, returning the correct data (in this case the specific breed).

With the data retrieved, I created an application that allows the user to select from a dropdown menu of dog breeds and see a randomly generated image of that breed.

To create the complex user interface modules, I utilized mainly jQuery to build both the modal and dropdown menu (minimal code was added to HTML in the process). I used the jQuery animate() method to have the images slide from offscreen onto the center of the screen, as well as jQuery event listeners and handlers to open and close the modal.

I was able to set @media query settings in CSS that allow for responsive design. It looks mostly well centered/aligned on tablet and mobile media, however due to the various sizes of the photos, it was difficult to keep it completely uniform on smaller screens. Perhaps that is a future feature I could add in (perhaps finding a way to select only photos with certain maximum dimensions to display)
