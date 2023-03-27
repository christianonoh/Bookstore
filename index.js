/* eslint-disable no-unused-vars */
import { setupNavigation } from './modules/navbar.js';
import BookShelf from './modules/bookshelf.js';
import { DateTime } from './node_modules/luxon/src/luxon.js';

// Nav Bar
setupNavigation();

// Create new Bookshelf instance
const bookShelf = new BookShelf();

// Time and Date
function updateDateTime() {
  const now = DateTime.local();
  const currentDate = now.toFormat('EEE, yyyy-MM-dd hh:mm:ss');
  document.querySelector('.current-date').innerHTML = `${currentDate}`;
}

// Update time every 1 sec
setInterval(updateDateTime, 1000);
