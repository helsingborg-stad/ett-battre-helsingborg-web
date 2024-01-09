class FormNavigationScroll {
  static setupScroll(formsApi) {
    formsApi.onReady(() => {
      window.scrollTo(0, 0);
    });

    formsApi.onStepChange((from, to) => {
      window.scrollTo(0, 0);
    });
  }
}

export default FormNavigationScroll;
