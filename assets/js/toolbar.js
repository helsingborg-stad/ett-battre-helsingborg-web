/**
 * FormNavigationManager class for handling form navigation and visibility.
 */
class FormNavigationManager {
  /**
   * Executes the specified actions when the window has fully loaded.
   * Initializes the LimeForms API and adds click event listeners to back buttons.
   *
   * @listens window#load
   */
  static initialize() {
    // LimeForms API instance
    const formsApi = window.limeForms.getApi();

    /** Back button */
    formsApi.onReady(() => {
      const backButton = document.getElementById("back-button");
      if(backButton) {
        backButton.addEventListener("click", function (e) {
          e.preventDefault();
          formsApi.goToPrevStep();
        });
      }
    });

    /* Hide back button */
    formsApi.onStepChange((from,to) => {
      const backButton = document.getElementById("back-button");
      if(backButton) {
        if(to.index === 0){
          backButton.classList.add("u-display--none");
          backButton.setAttribute('aria-hidden', "true");
        } else {
          backButton.classList.remove("u-display--none"); 
          backButton.removeAttribute('aria-hidden'); 
        }
      }
    })

    /* Cancel button */
    const cancelButton = document.getElementById("cancel-button");
    if (cancelButton) {
      cancelButton.addEventListener("click", function () {
        const userConfirmed = window.confirm("Är du säker på att du vill avbryta? All inmatad information förloras.");
        if (userConfirmed) {
          window.location.reload();
        }
      });
    }
  }
}

/* Initialize FormNavigationManager on window load */
window.addEventListener("load", function () {
  FormNavigationManager.initialize();
});
