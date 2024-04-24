export default function handleResponseFromAPI(promise) {
  //Append a handler for when the promise resolves
  promise
    .then(() => {
      return {
        status: 200,
        body: 'success',
      };
    })
    .then(() => {
      console.log('Got a response from the API');
    })
    .catch(() => {
      return new Error();
    });
}
