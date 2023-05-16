const firebaseConfig = {
    apiKey: "AIzaSyBKa2t60KsT0mD1H8nrqThxdiXz5G2jLmw",
    authDomain: "dent-lab-19cf6.firebaseapp.com",
    projectId: "dent-lab-19cf6",
    storageBucket: "dent-lab-19cf6.appspot.com",
    messagingSenderId: "22258469566",
    appId: "1:22258469566:web:5480a117cfe5b6694c2cef",
    measurementId: "G-VG4XG01RWN"
  };

  //inicializa o site com o firebase
  firebase.initializeApp(firebaseConfig);

  //cria o objeto de autenticação para que possa usar os métodos
  const auth = firebase.auth();
  //cria o objeto do DB Firestore para que possa usar métodos
  const db = firebase.firestore