import FormNavigationReloadFunctions from './Reload';

class FormNavigationButtons {
  static setupCancelAndCloseButtons() {
    const cancelButton = document.getElementById("cancel-button");
    if (cancelButton) {
      cancelButton.addEventListener("click", function (e) {
        e.preventDefault();
        const userConfirmed = window.confirm("Är du säker på att du vill avbryta? All inmatad information förloras.");
        if (userConfirmed == true) {
          FormNavigationReloadFunctions.reloadPage(new URLSearchParams(window.location.search).get("closeUrl") ?? null);
        }
      });
    }

    const closeButton = document.getElementById("close-button");
    if (closeButton) {
      closeButton.addEventListener("click", function (e) {
        e.preventDefault();
        FormNavigationReloadFunctions.reloadPage(new URLSearchParams(window.location.search).get("closeUrl") ?? null);
      });
    }
  }
}

export default FormNavigationButtons;
