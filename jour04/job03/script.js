function filterPokemon() {
    const id = document.getElementById("id").value;
    const name = document.getElementById("name").value;
    const type = document.getElementById("type").value;
    
    fetch('pokemon.json')
      .then(response => response.json())
      .then(data => {
        let results = data.filter(pokemon => {
          if (id && pokemon.id !== parseInt(id)) {
            return false;
          }
          if (name && !Object.values(pokemon.name).some(n => n.includes(name))) {
            return false;
          }
          if (type && !pokemon.type.includes(type)) {
            return false;
          }
          return true;
        });
        
        displayResults(results);
      });
  }
  
  function displayResults(results) {
    let html = "";
    
    results.forEach(pokemon => {
      html += `<div>${pokemon.name.english} (${pokemon.id}) - ${pokemon.type.join("/")}</div>`;
    });
    
    document.getElementById("results").innerHTML = html;
  }
  