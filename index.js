const express = require('express')
const admin = require('firebase-admin');
const serviceAccount = require('location_of_json_file');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/fcm', (req, res) => {
    admin.messaging().send(message)
  .then((response) => {
    console.log('Notification sent:', response);
  })
  .catch((error) => {
    console.error('Error sending notification:', error);
  });
    res.send('Hello World!')
  })
  
const registrationToken = 'device token';
const message = {
  data: {
    title: 'New Notification',
    body: 'Hello, this is a test notification!'
  },
  token: registrationToken
};



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})