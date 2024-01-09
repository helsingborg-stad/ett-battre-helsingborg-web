(()=>{"use strict";var __webpack_modules__={"./assets/js/AppBanner.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _MobileAppManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MobileAppManager */ "./assets/js/MobileAppManager.js");\n\n\nclass AppBanner {\n  static initialize() {\n    window.addEventListener("load", function () {\n      const targetElement = document.getElementById("app-banner");\n      if (targetElement) {\n        _MobileAppManager__WEBPACK_IMPORTED_MODULE_0__["default"].setClassAndAria(targetElement);\n      }\n    });\n\n    window.addEventListener("load", function () {\n      const targetElement = document.getElementById("app-banner-link");\n      if (targetElement) {\n        _MobileAppManager__WEBPACK_IMPORTED_MODULE_0__["default"].setLink(targetElement);\n      }\n    });\n\n    window.addEventListener("load", function () {\n      const targetElement = document.querySelector(\'body\');\n      if (targetElement && _MobileAppManager__WEBPACK_IMPORTED_MODULE_0__["default"].isApp()) {\n        targetElement.classList.add(\'is-app\');\n      }\n    });\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppBanner);\n\n//# sourceURL=webpack://ett-battre-helsingborg-web/./assets/js/AppBanner.js?')},"./assets/js/AppData.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst AppData = {\n  urls: {\n    ios: "https://apple.com",\n    android: "https://google.com",\n    noLink: "#nolink",\n  },\n  formIds: {\n    app: \'vEKRiB3le1BSsgo18HW2\',\n    web: \'U3X0lhXaQ4B2dBs2rk5K\',\n  },\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppData);\n\n\n//# sourceURL=webpack://ett-battre-helsingborg-web/./assets/js/AppData.js?')},"./assets/js/AppForm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _MobileAppManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MobileAppManager */ "./assets/js/MobileAppManager.js");\n/* harmony import */ var _FormNavigationManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormNavigationManager */ "./assets/js/FormNavigationManager.js");\n\n\n\nclass AppForm {\n\n  static initialize() {\n      const template  = document.getElementById(\'lime-form-template\');\n      const clone     = document.importNode(template.content, true);\n\n      const targetElement = clone.querySelector(\'#lime-form\');\n      if (targetElement) {\n        targetElement.setAttribute(\n          \'form-id\',\n          _MobileAppManager__WEBPACK_IMPORTED_MODULE_0__["default"].formId()\n        );\n      } else {\n        console.error("Error: Could not find form template.");\n      }\n\n      const appElement = document.getElementById(\'app\');\n      if (appElement) {\n        appElement.appendChild(clone);\n\n        _FormNavigationManager__WEBPACK_IMPORTED_MODULE_1__["default"].initialize();\n      } else {\n        console.error("Error: Could not find app container.");\n      }\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppForm);\n\n//# sourceURL=webpack://ett-battre-helsingborg-web/./assets/js/AppForm.js?')},"./assets/js/FormNavigationManager.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Navigation_Scroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navigation/Scroll */ "./assets/js/Navigation/Scroll.js");\n/* harmony import */ var _Navigation_BackButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navigation/BackButton */ "./assets/js/Navigation/BackButton.js");\n/* harmony import */ var _Navigation_StepChange__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navigation/StepChange */ "./assets/js/Navigation/StepChange.js");\n/* harmony import */ var _Navigation_Submitted__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Navigation/Submitted */ "./assets/js/Navigation/Submitted.js");\n/* harmony import */ var _Navigation_CloseCancelButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Navigation/CloseCancelButton */ "./assets/js/Navigation/CloseCancelButton.js");\n\n\n\n\n\n\nclass FormNavigationManager {\n  static initialize() {\n    const formsApi = window.limeForms.getApi();\n\n    _Navigation_Scroll__WEBPACK_IMPORTED_MODULE_0__["default"].setupScroll(formsApi);\n    _Navigation_BackButton__WEBPACK_IMPORTED_MODULE_1__["default"].setupBackButton(formsApi);\n    _Navigation_StepChange__WEBPACK_IMPORTED_MODULE_2__["default"].setupStepChange(formsApi);\n    _Navigation_Submitted__WEBPACK_IMPORTED_MODULE_3__["default"].setupSubmitted(formsApi);\n    _Navigation_CloseCancelButton__WEBPACK_IMPORTED_MODULE_4__["default"].setupCancelAndCloseButtons();\n\n    formsApi.onReady(function() {\n      setTimeout(function() {\n        document.querySelector(".loader").remove(); \n      }, 1000);\n    }); \n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormNavigationManager);\n\n\n//# sourceURL=webpack://ett-battre-helsingborg-web/./assets/js/FormNavigationManager.js?')},"./assets/js/MobileAppManager.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _AppData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppData */ "./assets/js/AppData.js");\n\n\nclass MobileAppManager {\n  static setClassAndAria(element) {\n    const userAgent = navigator.userAgent || navigator.vendor || window.opera;\n    if (this.isAndroid(userAgent) || this.isIOS(userAgent)) {\n      element.classList.remove("u-display--none");\n      element.removeAttribute("aria-hidden");\n    }\n  }\n\n  static setLink(element) {\n    const userAgent = navigator.userAgent || navigator.vendor || window.opera;\n    if (this.isAndroid(userAgent) || this.isIOS(userAgent)) {\n      element.setAttribute("href", this.appUrl());\n    }\n  }\n\n  static isAndroid(userAgent) {\n    return /android/i.test(userAgent);\n  }\n\n  static isIOS(userAgent) {\n    return /iPad|iPhone|iPod/i.test(userAgent);\n  }\n\n  static isApp() {\n    const queryParams = new URLSearchParams(window.location.search);\n    return queryParams.get(\'app\') === \'1\';\n  }\n\n  static appUrl() {\n    if (this.isIOS()) {\n      return _AppData__WEBPACK_IMPORTED_MODULE_0__["default"].urls.ios;\n    }\n    if (this.isAndroid()) {\n      return _AppData__WEBPACK_IMPORTED_MODULE_0__["default"].urls.android;\n    }\n    return _AppData__WEBPACK_IMPORTED_MODULE_0__["default"].urls.noLink;\n  }\n\n  static formId() {\n    return MobileAppManager.isApp() ? _AppData__WEBPACK_IMPORTED_MODULE_0__["default"].formIds.app : _AppData__WEBPACK_IMPORTED_MODULE_0__["default"].formIds.web;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MobileAppManager);\n\n\n//# sourceURL=webpack://ett-battre-helsingborg-web/./assets/js/MobileAppManager.js?')},"./assets/js/Navigation/BackButton.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass FormNavigationBackButton {\n  static setupBackButton(formsApi) {\n    formsApi.onReady(() => {\n      const backButton = document.getElementById("back-button");\n      if (backButton) {\n        backButton.addEventListener("click", function (e) {\n          e.preventDefault();\n          formsApi.goToPrevStep();\n        });\n      }\n    });\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormNavigationBackButton);\n\n\n//# sourceURL=webpack://ett-battre-helsingborg-web/./assets/js/Navigation/BackButton.js?')},"./assets/js/Navigation/CloseCancelButton.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Reload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Reload */ "./assets/js/Navigation/Reload.js");\n\n\nclass FormNavigationButtons {\n  static setupCancelAndCloseButtons() {\n    const cancelButton = document.getElementById("cancel-button");\n    if (cancelButton) {\n      cancelButton.addEventListener("click", function (e) {\n        e.preventDefault();\n        const userConfirmed = window.confirm("Är du säker på att du vill avbryta? All inmatad information förloras.");\n        if (userConfirmed == true) {\n          _Reload__WEBPACK_IMPORTED_MODULE_0__["default"].reloadPage(new URLSearchParams(window.location.search).get("closeUrl") ?? null);\n        }\n      });\n    }\n\n    const closeButton = document.getElementById("close-button");\n    if (closeButton) {\n      closeButton.addEventListener("click", function (e) {\n        e.preventDefault();\n        _Reload__WEBPACK_IMPORTED_MODULE_0__["default"].reloadPage(new URLSearchParams(window.location.search).get("closeUrl") ?? null);\n      });\n    }\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormNavigationButtons);\n\n\n//# sourceURL=webpack://ett-battre-helsingborg-web/./assets/js/Navigation/CloseCancelButton.js?')},"./assets/js/Navigation/Reload.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass FormNavigationReloadFunctions {\n  static isValidUrl = function (url) {\n    const urlRegex = /^(https?:\\/\\/)?([\\da-z.-]+)\\.([a-z.]{2,6})([/\\w.-]*)*\\/?$/;\n    return urlRegex.test(url);\n  };\n\n  static reloadPage = function (url) {\n    if (url && this.isValidUrl(url)) {\n      (opener || parent || window).location.href = url;\n      return;\n    }\n    (opener || parent || window).location.reload();\n  };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormNavigationReloadFunctions);\n\n\n//# sourceURL=webpack://ett-battre-helsingborg-web/./assets/js/Navigation/Reload.js?')},"./assets/js/Navigation/Scroll.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass FormNavigationScroll {\n  static setupScroll(formsApi) {\n    formsApi.onReady(() => {\n      window.scrollTo(0, 0);\n    });\n\n    formsApi.onStepChange((from, to) => {\n      window.scrollTo(0, 0);\n    });\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormNavigationScroll);\n\n\n//# sourceURL=webpack://ett-battre-helsingborg-web/./assets/js/Navigation/Scroll.js?')},"./assets/js/Navigation/StepChange.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass FormNavigationStepChange {\n  static setupStepChange(formsApi) {\n    formsApi.onStepChange((from, to) => {\n      const backButton = document.getElementById("back-button");\n      if (backButton) {\n        if (to.index === 0 || formsApi.steps.length === to.index) {\n          backButton.classList.add("u-display--none");\n          backButton.setAttribute(\'aria-hidden\', "true");\n        } else {\n          backButton.classList.remove("u-display--none");\n          backButton.removeAttribute(\'aria-hidden\');\n        }\n      }\n    });\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormNavigationStepChange);\n\n\n//# sourceURL=webpack://ett-battre-helsingborg-web/./assets/js/Navigation/StepChange.js?')},"./assets/js/Navigation/Submitted.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass FormNavigationSubmitted {\n  static setupSubmitted(formsApi) {\n    formsApi.onSubmitted(() => {\n      window.scrollTo(0, 0);\n\n      const backButton = document.getElementById("back-button");\n      if (backButton) {\n        backButton.classList.add("u-display--none");\n        backButton.setAttribute(\'aria-hidden\', "true");\n      }\n\n      const cancelButton = document.getElementById("cancel-button");\n      if (cancelButton) {\n        cancelButton.classList.add("u-display--none");\n        cancelButton.setAttribute(\'aria-hidden\', "true");\n      }\n\n      const closeButton = document.getElementById("close-button");\n      if (closeButton) {\n        closeButton.classList.remove("u-display--none");\n        closeButton.removeAttribute(\'aria-hidden\');\n      }\n    });\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormNavigationSubmitted);\n\n\n//# sourceURL=webpack://ett-battre-helsingborg-web/./assets/js/Navigation/Submitted.js?')},"./assets/js/app.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _AppBanner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppBanner */ "./assets/js/AppBanner.js");\n/* harmony import */ var _AppForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppForm */ "./assets/js/AppForm.js");\n\n\n\n_AppBanner__WEBPACK_IMPORTED_MODULE_0__["default"].initialize();\nwindow.addEventListener("load", function () {\n  _AppForm__WEBPACK_IMPORTED_MODULE_1__["default"].initialize(); //Inits navigation\n});\n\n\n//# sourceURL=webpack://ett-battre-helsingborg-web/./assets/js/app.js?')}},__webpack_module_cache__={};function __webpack_require__(e){var _=__webpack_module_cache__[e];if(void 0!==_)return _.exports;var n=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](n,n.exports,__webpack_require__),n.exports}__webpack_require__.d=(e,_)=>{for(var n in _)__webpack_require__.o(_,n)&&!__webpack_require__.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:_[n]})},__webpack_require__.o=(e,_)=>Object.prototype.hasOwnProperty.call(e,_),__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var __webpack_exports__=__webpack_require__("./assets/js/app.js")})();