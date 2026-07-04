import './styles.css';
import App from './App.js';
import { initCopyIpButtons } from './utils.js';
import { initToast } from './components/Toast.js';

const app = document.getElementById('app');
app.innerHTML = App();

const toast = initToast();
initCopyIpButtons(toast);
