class FormNavigationSubmitted {
  static setupSubmitted(formsApi) {
    formsApi.onSubmitted(() => {
      window.scrollTo(0, 0);

      const backButton = document.getElementById("back-button");
      if (backButton) {
        backButton.classList.add("u-display--none");
        backButton.setAttribute('aria-hidden', "true");
      }

      const cancelButton = document.getElementById("cancel-button");
      if (cancelButton) {
        cancelButton.classList.add("u-display--none");
        cancelButton.setAttribute('aria-hidden', "true");
      }

      const closeButton = document.getElementById("close-button");
      if (closeButton) {
        closeButton.classList.remove("u-display--none");
        closeButton.removeAttribute('aria-hidden');
      }
    });
  }
}

export default FormNavigationSubmitted;
