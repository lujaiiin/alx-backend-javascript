import { uploadPhoto, createUser } from './utils';


export default function handleProfileSignup() {
  const photoUploadPromise = uploadPhoto();
  const userCreationPromise = createUser();
  return Promise.all([photoUploadPromise, userCreationPromise])
    .then((answers) => {
      const photoUploadResult = answers[0].body;
      const userCreationResult = `${answers[1].firstName} ${answers[1].lastName}`;
      console.log(`${photoUploadResult} ${userCreationResult}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
