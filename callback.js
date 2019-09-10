//Pemangilan library axios
const axios = require('axios');

//URL api
const url = 'https://rickandmortyapi.com/api/character';

//Action GET METHOD
axios.get(url).then(res => {
    //Jika success akan tampil disini
    console.log(res);
}).catch(err => {
    //Jika error akan tampil disini
    console.log(err);
})