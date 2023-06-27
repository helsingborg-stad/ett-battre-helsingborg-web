window.onload = function () {
  var formsApi = window.limeForms.getApi();

  formsApi.onReady(function () {
    var nextTick = this._formsEl.getVueInstance().$nextTick;
    var formEl = this._formsEl;

    this.onStepChange(function (from, to) {
      nextTick().then(function () {
        addClassesToBtns();
      });
    });

    function addClassesToBtns() {
      var btnClassesPrimary = 'c-button c-button__filled c-button__filled--primary c-button--md';
      var btnClassesDefault = 'c-button c-button__filled c-button__filled--default c-button--md';

      var next = formEl.querySelector('.step.active .next-btn');
      var prev = formEl.querySelector('.step.active .prev-btn, #confirmation .prev-btn');

      if (next) {
        removeClasses(next);
        next.classList.add(...btnClassesPrimary.split(' '));
      }

      if (prev) {
        removeClasses(prev);
        prev.classList.add(...btnClassesDefault.split(' '));
      }
    }

    function removeClasses(element) {
      element.classList.remove('btn', 'btn-primary');
    }

    nextTick().then(function () {
      addClassesToBtns();
    });
  });
};
