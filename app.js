const Koa = require("koa");
const app = new Koa();
const config = require("./config/index")
const controllersInit = require("./controllers");
const render = require("koa-swig")
const co = require('co');
const serve = require('koa-static');
app.use(serve(config.staticDir));
app.context.render = co.wrap(render({
  root:config.viewDir,
  autoescape: true,
  cache: false, // disable, set to false
  ext: 'html',
  varControls:["[[","]]"],
  // ...your setting
  writeBody: false
}));
 
controllersInit(app);
app.listen(config.port,()=>{
    console.log("服务启动成功，端口号为 ",config.port)
})