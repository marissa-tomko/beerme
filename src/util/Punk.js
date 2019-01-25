const Punk = {
  search(inputFood) {
    const url = `https://api.punkapi.com/v2/beers?food=${inputFood}`;
    return fetch(url)
    .then(response => {
      return response.json();
    })
    .then(jsonResponse => {
      return jsonResponse;
    })
  }
}

export default Punk;
