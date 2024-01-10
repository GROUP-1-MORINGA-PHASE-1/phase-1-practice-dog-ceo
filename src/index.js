console.log('%c HI', 'color: firebrick');

document.addEventListener('DOMContentLoaded', function () {
    
    // Challenge 1
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

    fetch(imgUrl)
        .then(response => response.json())
        .then(data => {
            const dogImagesContainer = document.getElementById('dog-image-container');

            data.message.forEach(imageUrl => {
                const imgElement = document.createElement('img');
                imgElement.src = imageUrl;

                // Applied styles for headshots - blue and yellow square frame
                imgElement.style.width = '150px'; // Set the width
                imgElement.style.height = '150px'; // Set the  height
                imgElement.style.objectFit = 'cover'; // make the image is a headshot
                imgElement.style.border = '5px solid gold';
                imgElement.style.padding = '10px';
                imgElement.style.margin = '10px';
                imgElement.style.backgroundColor = 'blue';
                imgElement.style.borderRadius = '10px'; // Make it square

                dogImagesContainer.appendChild(imgElement);
            });
        });

    // Challenge 2
    const breedUrl = 'https://dog.ceo/api/breeds/list/all';

    fetch(breedUrl)
        .then(response => response.json())
        .then(data => {
            const dogBreedsList = document.getElementById('dog-breeds');

            let row1 = document.createElement('ul');
            let row2 = document.createElement('ul');

            for (const breed in data.message) {
                const breedItem = document.createElement('li');
                breedItem.textContent = breed;

                if (dogBreedsList.childElementCount % 2 === 0) {
                    row1.appendChild(breedItem);
                } else {
                    row2.appendChild(breedItem);
                }
            }

            dogBreedsList.appendChild(row1);
            dogBreedsList.appendChild(row2);
        });

    // Challenge 3
    document.getElementById('dog-breeds').addEventListener('click', function (event) {
        if (event.target.tagName === 'LI') {
            event.target.style.color = 'red'; // we chooe red color
        }
    });

    // Challenge 4
    const filterDropdown = document.getElementById('breed-dropdown');

    filterDropdown.addEventListener('change', function () {
        const selectedLetter = filterDropdown.value.toLowerCase();
        const breedItems = document.querySelectorAll('#dog-breeds li');

        breedItems.forEach(breedItem => {
            const breedName = breedItem.textContent.toLowerCase();
            if (breedName.startsWith(selectedLetter)) {
                breedItem.style.display = 'block';
            } else {
                breedItem.style.display = 'none';
            }
        });
    });

    // Centering the title
    const title = document.querySelector('h1');
    title.style.textAlign = 'center';
});
