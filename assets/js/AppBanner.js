import MobileAppManager from './MobileAppManager';

class AppBanner {
  static initialize() {
    window.addEventListener("load", function () {
      const targetElement = document.getElementById("app-banner");
      if (targetElement) {
        MobileAppManager.setClassAndAria(targetElement);
      }
    });

    window.addEventListener("load", function () {
      const targetElement = document.getElementById("app-banner-link");
      if (targetElement) {
        MobileAppManager.setLink(targetElement);
      }
    });

    window.addEventListener("load", function () {
      const targetElement = document.querySelector('body');
      if (targetElement && MobileAppManager.isApp()) {
        targetElement.classList.add('is-app');
      }
    });
  }
}
export default AppBanner;