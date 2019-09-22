System.register(["./util.js"], function (_export, _context) {
  "use strict";

  var _, init;

  return {
    setters: [function (_utilJs) {
      _ = _utilJs.default;
    }],
    execute: function () {
      init = function init() {
        // _(["a","b"]).each(function(item){
        //   console.log("item+++   " ,item)
        // })
        // _.each(["a","b"],function(item){
        //   console.log("item 22222   " ,item)
        // })
        // const data = {
        //   message: "hello world"
        // };
        // var vm = new Vue({
        //   el: "#example",
        //   data: data
        // });
        $("#js-btn-click").on("click", _.throttle(function () {
          console.log(Math.random());
        }));
      };

      _export("default", init);
    }
  };
});
