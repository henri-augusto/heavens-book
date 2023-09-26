const mongoose = require('mongoose');
const app = require('./app');

const DB = process.env.DATA_BASE_URI.replace(
  '<password>',
  encodeURIComponent(process.env.DATA_BASE_PASSWORD)
);

main().catch((err) => console.log('Connection fail: \n', err));

async function main() {
  await mongoose.connect(DB).then(() => {
    console.log('Connetion with DB was a success');
  });
}
app.listen(8000, 'localhost', () => {
  console.log('The app is running on 8000 port');
});
