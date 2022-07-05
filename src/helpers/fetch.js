const baseURL = process.env.REACT_APP_API_URL

//axios tb ayuda a manejar esto
export const fetch = ( endpoint, data, method = 'GET' ) => {

    const url = `${ baseURL }/${ endpoint }`; //localhost:4000/api/auth

    if( method === 'GET'){
        return fetch( url );
    } else {
        //enviamos la url y luego configuramos el objeto
        return fetch( url, {
            method,
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify( data )
        });
    }
}