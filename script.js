function fetchRandomDogImage() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(response => response.json())
      .then(data => {
        const dogImage = document.getElementById("dogImage");
        dogImage.src = data.message;
      })
      .catch(error => console.log(error));
  }
  
  // Attach event listener to the fetch button
  const fetchButton = document.getElementById("fetchButton");
  fetchButton.addEventListener("click", fetchRandomDogImage);
  
  // Fetch initial random dog image when the page loads
  fetchRandomDogImage();