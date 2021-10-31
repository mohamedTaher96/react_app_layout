export default function reduxSetup(axios, _token , lang) {
  if (_token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${_token}`;
  } else {
    axios.defaults.headers.common['Authorization'] = null;
  }
  axios.defaults.headers.common['lang'] = `${lang}`;
  axios.interceptors.response.use(function(response){
    return response
  },
  function(error){
    return Promise.reject(error)
  })
}