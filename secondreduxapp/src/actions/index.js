

const URL_ROOT = 'http://localhost:3004'

export function getCars(keyword){

    const request = fetch('${URL_ROOT}/carsIndex?q=${keywords}',
    {method:'GET'})
    .then(response => response.json())

    return{
        type:'SEARCH_CARS',
        payload:request
    }

}