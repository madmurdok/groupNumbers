const parsedData = {
  getData: () => {
    const url = `/parseFile/start`;
    const options = {'method': 'GET'};
    return fetch(url,options);
  }
};
$(document).ready(function() {
  $('#start').on('click', (event) => {
    parsedData.getData()
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        $('#container').text(JSON.stringify(data));
      })
      .catch((e) => {console.log(e);})
  });
});