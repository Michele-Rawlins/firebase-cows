
import firebase from 'firebase/app';
import 'firebase/auth';
import utils from '../../helpers/utils';

const signMeIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
firebase.auth().signInWithPopup(provider);
};

const loginButton = () => {
  const domString = '<button '
utils.printToDom;
$('#google-auth').click
};

export default { loginButton };