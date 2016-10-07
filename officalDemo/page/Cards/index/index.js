Page({
  data:{
    // text:"这是一个页面"
  },

  bindInputChange:function(e){
      console.log('13234')
  },
  //响应搜索框点击
  bindFocusStyle:function(e){
      console.log('focus')
  },
  //响应按钮点击点击
  bindButtonTapSheet:function(e){
      console.log('tap')
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }

})