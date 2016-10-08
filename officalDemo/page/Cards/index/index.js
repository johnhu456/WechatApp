
var card_list_name = require("data/card_list_name.js");
var nameData;
Page({
  data:{
    //  id:0,
    //  count:1,
    //  message:"这是一个页面",
    //  array:[1,2,3,4,5],
    //  view:"fuck",
    //  staffA:{firstName:'AfirstName',lastName:'AlastName'},
    //  staffB:{firstName:'BfirstName',lastName:'BlastName'},
    //  staffC:{firstName:'CfirstName',lastName:'ClastName'},
    //  a:1,
    //  b:2,
    //  c:3,
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
  onLoad:function(){
    // 页面初始化 options为页面跳转所带来的参数
    // 排序字母显示
    console.log(card_list_name)
    var data1 = card_list_name.data.cards
    nameData = []
    for(var k in data1){
      var group = {}
      group.name = k
      group.cards = data1[k]
      for(var i in group.cards){
        group.cards[i]["display"] = "block"
      }
      nameData.push(group)
    }
  this.setData({
        nameData:nameData
  })
  console.log('---------')
  console.log(nameData)
  },
  onReady:function(){
    // 页面渲染完成
    //wx.setNavitionBarTitle('一个测试Titlte')
    console.log('ready')
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  onPullDownRefresh:function(){
    console.log('pulldown')
  }

})