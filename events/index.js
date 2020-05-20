  
  var container = document.getElementById('visualization');
  var items = [
      {x: '2020-05-11', y: 20},
      {x: '2020-05-12', y: 30},
      {x: '2020-05-13', y: 40},
      {x: '2020-05-14', y: 50},
      {x: '2020-05-15', y: 60},
      {x: '2020-05-16', y: 70}
  ];
console.log('HELLO, THIS WEBSITE WAS MADE BY A 10 YEAR OLD   ( ͡o ͜ʖ ͡o)')
  var dataset = new vis.DataSet(items);
  var options = {
      start: '2020-05-11',
      end: '2020-05-16'
  };
  var Graph2d = new vis.Graph2d(container, dataset, options);

const action = async () => {
  const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY');
  const myJson = await response.json();
  var image = document.getElementById('picture');
  image.src = myJson.url;
  var title = document.getElementById('title');
  title.innerHTML = myJson.title;
  var text = document.getElementById('text');
  text.innerHTML = myJson.explanation;
}
action();

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDT5U923Rgm8_1es7LMeY9d5QVrq14M8WM",
    authDomain: "scotts-web.firebaseapp.com",
    databaseURL: "https://scotts-web.firebaseio.com",
    projectId: "scotts-web",
    storageBucket: "scotts-web.appspot.com",
    messagingSenderId: "125467102075",
    appId: "1:125467102075:web:2f1557e18575df33b9cbde",
    measurementId: "G-FH7WXJVQ2C"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  var database = firebase.database();

  var bigOne = document.getElementById('bigOne');
  var dbRef = database.ref().child('text');
  dbRef.on('value', snap => bigOne.innerText = snap.val());

