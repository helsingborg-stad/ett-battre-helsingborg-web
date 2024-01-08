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
    
    /* Load simpliforms */
    const formsApi = window.limeForms.getApi();

    /* Always start scoll 0 */
    formsApi.onReady(() => {
      window.scrollTo(0, 0);
    });

    /* Back button */
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
        if(to.index === 0 || (formsApi.steps.length) == to.index) {
          backButton.classList.add("u-display--none");
          backButton.setAttribute('aria-hidden', "true");
        } else {
          backButton.classList.remove("u-display--none"); 
          backButton.removeAttribute('aria-hidden'); 
        }
      }
    })

    /* Form complete - Hide back button */ 
    formsApi.onSubmitted(() => {

      //Scroll to top
      window.scrollTo(0, 0);
      
      // Hide back button
      const backButton = document.getElementById("back-button");
      if(backButton) {
        backButton.classList.add("u-display--none");
        backButton.setAttribute('aria-hidden', "true");
      }

      //Hide cancel button
      const cancelButton = document.getElementById("cancel-button");
      if (cancelButton) {
        cancelButton.classList.add("u-display--none");
        cancelButton.setAttribute('aria-hidden', "true");
      }

      //Show close button
      const closeButton = document.getElementById("close-button");
      if (closeButton) {
        closeButton.classList.remove("u-display--none"); 
        closeButton.removeAttribute('aria-hidden'); 
      }

    })

    /* Scroll up on step change */
    formsApi.onStepChange((from,to) => {
      window.scrollTo(0, 0);
    })

    /* Validate URL function */
    const isValidUrl = function (url) {
      const urlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w.-]*)*\/?$/;
      return urlRegex.test(url);
    };

    /* Reload function */
    const reloadPage = function (url) {
      if (url && isValidUrl(url)) {
        window.location.href = url;
        return;
      }

      if (opener) {
        opener.location.reload();
        return;
      }
      
      if(parent) {
        parent.location.reload();
        return;
      }
    };

    /* Cancel button */
    const cancelButton = document.getElementById("cancel-button");
    if (cancelButton) {
      cancelButton.addEventListener("click", function () {
        const userConfirmed = window.confirm("Är du säker på att du vill avbryta? All inmatad information förloras.");
        if (userConfirmed == true) {
          reloadPage(
            new URLSearchParams(window.location.search).get("closeUrl") ?? null
          );
        }
      });
    }

    /* Close button */ 
    const closeButton = document.getElementById("close-button");
    if (closeButton) {
      closeButton.addEventListener("click", function () {
        reloadPage(
          new URLSearchParams(window.location.search).get("closeUrl") ?? null
        );
      });
    }
  }
}

/* Initialize FormNavigationManager on window load */
window.addEventListener("load", function () {
  FormNavigationManager.initialize();
});
