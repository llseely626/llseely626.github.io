# llseely626.github.io
# Unit #1

# Project #1: Dog Fetcher 
## Description: An application that allows the user to select from a dropdown menu of dog breeds and see a randomly generated image of that breed

Live link: https://llseely626.github.io/Dog_fetcher/index "Dog_fetcher"

## Languages used:

* HTML
* CSS
* javaScript
* jQuery

## AJAX Requests & API

Used AJAX requests to the external API called "Dog API" (https://dog.ceo/dog-api/) and was able to insert the data retrieved into the DOM. 

### Coding Highlights:

* In one AJAX request I wrote a for loop which populated the dropdown menu with data retrieved from the API.

* The other AJAX request involved taking user's input value from the dropdown menu selection and matching it to the API, returning the correct data (in this case the specific breed).

## Complex User Interface Modules:
 * Utilized jQuery to build both the modal and dropdown menus 
 * Utilized javaScript setTimeout() method to open modal 3 seconds after page loads
 * Minimal code was added to HTML.
 * Utilized jQuery event listeners and handlers to open and close the modal
 * Utilized jQuery animate() method to have images slide into the center of the screen
 
## Responsive Design:
* Set @media query settings in CSS that allowed for responsive design
* Text is smaller on narrower media screens
* Text remains aligned most of the time

## Unresolved problems:
* Due to the various sizes of photos returned from the API, it was difficult to keep alignment completely uniform on smaller screens. Perhaps I could find a way to select only photos with maximum dimensions to be displayed. This could be a feature I could add to improve this application in the future.

