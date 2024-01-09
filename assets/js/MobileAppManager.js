import AppData from './AppData';

class MobileAppManager {
  static setClassAndAria(element) {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (this.isAndroid(userAgent) || this.isIOS(userAgent)) {
      element.classList.remove("u-display--none");
      element.removeAttribute("aria-hidden");
    }
  }

  static setLink(element) {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (this.isAndroid(userAgent) || this.isIOS(userAgent)) {
      element.setAttribute("href", this.appUrl());
    }
  }

  static isAndroid(userAgent) {
    return /android/i.test(userAgent);
  }

  static isIOS(userAgent) {
    return /iPad|iPhone|iPod/i.test(userAgent);
  }

  static isApp() {
    const queryParams = new URLSearchParams(window.location.search);
    return queryParams.get('app') === '1';
  }

  static appUrl() {
    if (this.isIOS()) {
      return AppData.urls.ios;
    }
    if (this.isAndroid()) {
      return AppData.urls.android;
    }
    return AppData.urls.noLink;
  }

  static formId() {
    return MobileAppManager.isApp() ? AppData.formIds.app : AppData.formIds.web;
  }
}

export default MobileAppManager;
