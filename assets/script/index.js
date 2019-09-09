import _ from "./util.js";
const init = () => {
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
  $("#js-btn-click").on("click",_.throttle(function(){
    console.log(Math.random())
  }))
};
export default init;
