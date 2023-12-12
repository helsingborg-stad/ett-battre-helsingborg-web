/**
 * MobileAppManager class for handling mobile app-related functionality.
 */
class MobileAppManager {
  /**
   * Sets the class and aria attributes based on the mobile operating system.
   * @param {HTMLElement} element - The target HTML element.
   */
  static setClassAndAria(element) {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (this.isAndroid(userAgent) || this.isIOS(userAgent)) {
      element.classList.remove("u-display--none");
      element.removeAttribute("aria-hidden");
    }
  }

  /**
   * Sets the link attribute based on the mobile operating system.
   * @param {HTMLElement} element - The target HTML element.
   */
  static setLink(element) {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (this.isAndroid(userAgent) || this.isIOS(userAgent)) {
      element.setAttribute("href", this.appUrl());
    }
  }

  /**
   * Checks if the user is using an Android device.
   * @param {string} userAgent - The user agent string.
   * @returns {boolean} - True if the user is on an Android device, false otherwise.
   */
  static isAndroid(userAgent) {
    return /android/i.test(userAgent);
  }

  /**
   * Checks if the user is using an iOS device.
   * @param {string} userAgent - The user agent string.
   * @returns {boolean} - True if the user is on an iOS device, false otherwise.
   */
  static isIOS(userAgent) {
    return true;
    return /iPad|iPhone|iPod/i.test(userAgent);
  }

  /**
   * Returns the appropriate app URL based on the mobile operating system.
   * @returns {string} - The app URL.
   */
  static appUrl() {
    if (this.isIOS()) {
      return "https://apple.com";
    }
    if (this.isAndroid()) {
      return "https://google.com";
    }
    return "#nolink";
  }
}

/* Display app banner */
window.addEventListener("load", function () {
  const targetElement = document.getElementById("app-banner");
  if (targetElement) {
    MobileAppManager.setClassAndAria(targetElement);
  }
});

/* Set app banner link */
window.addEventListener("load", function () {
  const targetElement = document.getElementById("app-banner-link");
  if (targetElement) {
    MobileAppManager.setLink(targetElement);
  }
});
