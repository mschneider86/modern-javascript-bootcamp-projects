const fetchData = async (searchTerm) => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: '12827b40',
      s: searchTerm,
    },
  });

  console.log(response.data);
};

const input = document.querySelector('input');
input.addEventListener('input', (event) => {
  fetchData(event.target.value);
});
