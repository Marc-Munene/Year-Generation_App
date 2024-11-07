function webApp(event){

    event.preventDefault();

    // const generationMessage = document.getElementById('showGenerationButton');
    const alertMessage = document.getElementById('alert');
    const successMessage = document.getElementById('success');
    const birthYear = document.getElementById('input').value

    const body = document.body;

  

    //validate inputs

    if(isNaN(birthYear) || birthYear < 1900 || birthYear > 2024){
        alertMessage.textContent = 'Please enter a year from 1900 to 2024';
        alertMessage.classList.add('bg-red-500');
        alertMessage.style.display = "block"; 
        successMessage.style.display = "none"; 
        return;

    }

    //determine generations

    let generation;

    if (birthYear >= 2012 && birthYear <= 2024) {
        generation = 'Generation Alpha';
        body.style.backgroundImage = 'url("/build/images/gen-alpa.jpg")'

    } else if (birthYear >= 1997 && birthYear <= 2012) {
        generation = 'Generation Z';
        body.style.backgroundImage = 'url("/build/images/Gen z.jpg")'

        
    } else if (birthYear >= 1981 && birthYear <= 1996) {
        generation = 'Millennials';
        body.style.backgroundImage = 'url("/build/images/Millenials.jpg")'
        
    } else if (birthYear >= 1965 && birthYear <= 1980) {
        generation = 'Generation X';
        body.style.backgroundImage = 'url("/build/images/Gen X.jpg")'
        
    } else if (birthYear >= 1946 && birthYear <= 1964) {
        generation = 'Baby Boomers';
        body.style.backgroundImage = 'url("/build/images/Gen-boomers.jpg")'
        
    } else if (birthYear >= 1900 && birthYear <= 1945) {
        generation = 'Silent Generation';
        body.style.backgroundImage = 'url("/build/images/silent-generation.jpg")'
        
    } 
    
    //Display 

    successMessage.textContent = `You belong to ${generation}`;
    successMessage.classList.add('bg-green-500');
    successMessage.style.display = "block"; // Show success message
    alertMessage.style.display = "none"; //

}