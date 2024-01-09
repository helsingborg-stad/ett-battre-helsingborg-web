class FormNavigationBackButton {
  static setupBackButton(formsApi) {
    formsApi.onReady(() => {
      const backButton = document.getElementById("back-button");
      if (backButton) {
        backButton.addEventListener("click", function (e) {
          e.preventDefault();
          formsApi.goToPrevStep();
        });
      }
    });
  }
}

export default FormNavigationBackButton;
