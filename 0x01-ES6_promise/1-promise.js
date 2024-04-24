export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
  // Check the success parameter
    if (success) {
    // If success is true, resolve the promise with a specific object
      resolve({ status: 200, body: 'Success' });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}
