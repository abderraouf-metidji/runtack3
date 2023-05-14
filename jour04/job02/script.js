function jsonValueKey(jsonString, key) {
    const jsonObject = JSON.parse(jsonString);
    return jsonObject[key];
  }
  
  const jsonString = `{
    "name": "La Plateforme_",
    "address": "8 rue d'hozier",
    "city": "Paris",
    "nb_staff": "11",
    "creation": "2019"
  }`;
  
  const cityValue = jsonValueKey(jsonString, "city");
  console.log(cityValue);
  