System.register([], function (_export, _context) {
  "use strict";

  var data, vm;
  return {
    setters: [],
    execute: function () {
      data = {
        message: "hello world"
      };
      vm = new Vue({
        el: '#example',
        data: data
      });

      _export("default", data);
    }
  };
});
