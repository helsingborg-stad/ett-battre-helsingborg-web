class FormNavigationReloadFunctions {
  static isValidUrl = function (url) {
    const urlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w.-]*)*\/?$/;
    return urlRegex.test(url);
  };

  static reloadPage = function (url) {
    if (url && this.isValidUrl(url)) {
      (opener || parent || window).location.href = url;
      return;
    }
    (opener || parent || window).location.reload();
  };
}

export default FormNavigationReloadFunctions;
