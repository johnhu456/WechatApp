
var card_list_name = require("data/card_list_name.js");
var actionSheetHidden=true;
Page({
  data:{
    nameData:[],
    // indexMenuDisplay:"none",
    // show:true,
    // show_letter:"block",
    // messageInfoDisplay:"block",
    // sort:"ABCDEFGHIJKLMNOPQRSTUVWXYZ#",
    // messageModuleDisplay:"block",
    // messageInfoDisplay:"block",
    actionSheetHidden:actionSheetHidden,
    //Toast展示
    toastDisplay:"",
    htmlWrapDiaplay:""
  },

  bindInputChange:function(e){
      console.log('13234')
  },
  onLoad:function(){
    // 页面初始化 options为页面跳转所带来的参数
    // 排序字母显示
    console.log(card_list_name)
    var data1 = card_list_name.data.cards
    console.log('===='+data1)
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
        nameData:nameData,
        toastDisplay:"block",
        htmlWrapDiaplay:"none"
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
    this.setData({
        toastDisplay:"none",
        htmlWrapDiaplay:"block"
    })
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  onPullDownRefresh:function(){
    console.log('pulldown')
  },
  //PublicMethodethod=======================
    //响应搜索框点击
  bindFocusStyle:function(e){
      console.log('focus')
  },
  //响应按钮点击点击
  bindButtonTapSheet:function(e){
      actionSheetHidden = !actionSheetHidden
      this.setData({
        actionSheetHidden:actionSheetHidden
      });
  },

  //actionSheet状态改变
  actionSheetChange:function(e){
    actionSheetHidden = !actionSheetHidden
    this.setData({
      actionSheetHidden:actionSheetHidden
    });
  },

  //actionaSheet按钮
  ocrTap:function(e){
      console.log("扫一扫")
    wx.chooseImage({
      count:1,
      sizeType:["original","compressed"],
      sourceType:["album","camera"],
      success:function(response){
        console.log(response)
      }
    })
  },

  //
  //分组标签点击
  lettersTap:function(e){
    console.log(e.target.dataset.listName)
  },
  bindDrawerTap:function(e){
    console.log(e.currentTarget.dataset.cardId)
    console.log(e)
  }

})