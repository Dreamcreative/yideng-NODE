const _ = function(obj) {
  // 处理 _(_) 这样的调用
  if (obj instanceof _) return obj;
  /**
   * 处理 _(["a","b"]).each(function(){}) 这样的调用
   * 如果 _(["a","b"]) 这样调用，判断this的构造函数,
   * 如果是 _ ，则返回 new _(obj)，为了得到一个_的原型链，
   * 最后将 传入的obj放到 _.wrapped 上
   */
  if (!(this instanceof _)) return new _(obj);
  this._wrapped = obj;
};
const push = Array.prototype.push;
//判断是否是一个函数
_.isFunction = function(obj) {
  return typeof obj === "function" || false;
};
_.each = function(obj, iterate) {
  if (Array.isArray(obj)) {
    //循环将obj 的值传入 回调函数中 执行
    for (let item of obj) {
      iterate && iterate(item);
    }
  }
};
//得到 obj上的全部函数，并排序
_.functions = function(obj) {
  let names = [];
  //为了遍历 _ 原型链上挂载的方法
  for (let key in obj) {
    if (_.isFunction(obj[key])) names.push(key);
  }
  return names.sort();
};
// 节流
_.throttle = function(fn, wait = 1000) {
  var timer = null;
  return function() {
    if (!timer) {
      timer = setTimeout(() => (timer = null), wait);
      fn.apply(this, [...arguments]);
    }
  };
};
// 防抖
_.debounce = function(fn, wait = 1000) {
  var pre = 0;
  return function(){
    var now = new Date();
    if( now -pre>=wait){
      fn.apply(this,[... arguments])
      pre = now;
    }
  }
};
_.mixin = function(obj) {
  console.log("_.functions   ", _.functions(obj));
  _.each(_.functions(obj), function(name) {
    let func = (_[name] = obj[name]);
    _.prototype[name] = function() {
      //将 _(["a","b"]).each(function(){}) 这种形式的调用参数合并
      let args = [this._wrapped];
      push.apply(args, arguments);
      //真正的执行
      func.apply(_, args);
    };
  });
  return _;
};
_.mixin(_);
_.VERSION = "1.0.0";
export default _;
