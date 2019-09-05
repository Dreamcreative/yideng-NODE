/**
 * @fileoverview 实现Books数据模型
 * @author m543438924@163.com
 */
class Books{
    /**
     * Books类 实现获取后台有关于图书相关的数据累
     * @class
     */
    /**
     * @constructor
     * @param {object} app Koa2的执行上下文
     */
    constructor( app ){
        this.app=app
    }
    /**
     * 获取后台图书的 全部列表
     * @param {*} options 设置访问数据的参数
     */
    getList(options){
        return {
            data:'我是books'
        }
    }
}
module.exports = Books;