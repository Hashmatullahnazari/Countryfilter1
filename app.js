// Select the search bar and columns
const searchBar = document.querySelector('.search-bar');
const columns = document.querySelectorAll('.column');
const container = document.querySelector('.container');
// Add an event listener to the search bar to search the API when the value changes
searchBar.addEventListener('input', event => {
  // Get the search term from the search bar
  const searchTerm = event.target.value;

  // Send a request to the API to search for countries
  fetch(`https://restcountries.com/v2/name/${searchTerm}`)
    .then(response => response.json())
    .then(data => {
    // Clear the columns
    columns.forEach(column => {
      column.innerHTML = '';
    });

    // Add the countries to the columns
    data.forEach((country, index) => {
      const column = columns[index % columns.length];
      const flag = document.createElement('img');
      flag.src = country.flag;
      flag.alt = `Flag of ${country.name}`;
      column.appendChild(flag);
      const name = document.createElement('div');
      name.textContent = 'Country:' + ' ' + country.name;
      column.appendChild(name);
      const capital = document.createElement('div');
      capital.textContent = 'Capital:' + ' ' + country.capital;
      column.appendChild(capital);
      const population = document.createElement('div');
      population.textContent ='Population:' + ' ' + country.population.toLocaleString();
      column.appendChild(population);


    });
  });
});

