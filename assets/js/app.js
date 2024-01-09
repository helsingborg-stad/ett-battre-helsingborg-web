import AppBanner from './AppBanner';
import AppForm from './AppForm';

AppBanner.initialize();
window.addEventListener("load", function () {
  AppForm.initialize(); //Inits navigation
});
