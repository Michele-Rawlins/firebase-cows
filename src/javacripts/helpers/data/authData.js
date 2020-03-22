import firebase from 'firebase/app';
import 'firebase/auth';

const checkLoginStatus = () => {
firebase.auth().onAuthStateChanged((user))

}
export default { checkLoginStatus };