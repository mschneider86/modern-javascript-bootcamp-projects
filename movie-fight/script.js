const fetchData = async () => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: '12827b40',
      s: 'avengers',
    },
  });

  console.log(response.data);
};

fetchData();
