import axios  from 'axios';

axios.defaults.baseURL = 'https://api.fantasydata.net/v3/nfl/';
axios.defaults.headers.common['Ocp-Apim-Subscription-Key'] = 'bf9ec657f29548d7b320f75c8e972e48';

var ApiHelper = {
  getNflTeams: function(){
    return axios.get('https://api.fantasydata.net/v3/nfl/scores/json/Teams')
  },

  getAllNflTeams: function(){
    return axios.get('https://api.fantasydata.net/v3/nfl/scores/json/Teams')
      .then(function(response){
        console.log(response.data);
        return {
          teams: response.data
        }
      })
      .catch(function(error){
      	console.log(error);
      })
  }
}

export default ApiHelper