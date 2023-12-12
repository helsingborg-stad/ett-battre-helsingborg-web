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

    // NodeList containing all elements with the ID "back-button"
    const backButtons = document.querySelectorAll("#back-button");

    // Adds a click event listener to each "back-button" element
    [...backButtons].forEach(button => {
      button.addEventListener("click", function () {
        formsApi.goToPrevStep();
      });
    });

    // Wait until ".step.step-1" is available in the DOM
    this.waitForStepElement(".step.step-1").then(targetNode => {
      this.observeStepVisibility(targetNode);
    });

    // Add click event listener to #cancel-button
    const cancelButton = document.getElementById("cancel-button");
    if (cancelButton) {
      cancelButton.addEventListener("click", function () {
        // Ask for confirmation before reloading the page
        const userConfirmed = window.confirm("Är du säker på att du vill avbryta? All inmatad information förloras.");

        if (userConfirmed) {
          // Reload the current page
          window.location.reload();
        }
      });
    }

  }

  /**
   * Waits until the specified target element is available in the DOM.
   *
   * @param {string} selector - The CSS selector for the target element.
   * @returns {Promise} A promise that resolves with the target element when it becomes available.
   */
  static waitForStepElement(selector) {
    return new Promise(resolve => {
      const observer = new MutationObserver(() => {
        const targetNode = document.querySelector(selector);
        if (targetNode) {
          observer.disconnect();
          resolve(targetNode);
        }
      });

      observer.observe(document.body, { childList: true, subtree: true });
    });
  }

  /**
   * Observes changes in the visibility of ".step.step-1" and updates "u-display--none" class on "#back-button".
   *
   * @param {HTMLElement} targetNode - The target element to observe.
   */
  static observeStepVisibility(targetNode) {
    // Callback function to handle mutations
    const mutationCallback = function (mutationsList, observer) {
      const toolbar = document.getElementById("toolbar");

      mutationsList.forEach(mutation => {
        if (mutation.target.style.display !== "none") {
          toolbar.classList.add("u-display--none");
        } else {
          toolbar.classList.remove("u-display--none");
        }
      });
    };

    // Configuration for the Mutation Observer
    const observerConfig = {
      attributes: true
    };

    // Create a Mutation Observer with the callback and configuration
    const observer = new MutationObserver(mutationCallback);

    // Observe changes in the style attribute of ".step.step-1"
    if (targetNode) {
      observer.observe(targetNode, observerConfig);
    }
  }
}

/* Initialize FormNavigationManager on window load */
window.addEventListener("load", function () {
  FormNavigationManager.initialize();
});
