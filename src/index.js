
const init = () => {
    const inputForm = document.querySelector("form");
  
    
    inputForm.addEventListener("submit", (event) => {
      event.preventDefault(); 
  
      const input = document.querySelector("#searchByID"); 
      const movieDetails = document.querySelector("#movieDetails"); 
      
      
      fetch(`http://localhost:3000/movies/${input.value}`)
        .then((response) => response.json())
        .then((data) => {
          
          movieDetails.innerHTML = `
            <h4>${data.title}</h4>
            <p>${data.summary}</p>
          `;
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          movieDetails.innerHTML = "<p>Movie not found!</p>"; 
        });
    });
  };
  
  // Event listener for DOM content loaded
  document.addEventListener("DOMContentLoaded", init);
  