Page({
    data:{
        currentNumber:1
    },
    //删除按钮
    getBackStyle:function(e){

    },

    //banner状态改变
    slideChange:function(e){
        console.log(e)
        var number = e.detail.current;
        this.setData({
            currentNumber:number + 1
        })
        console.log(currentNumber)
    },

    //点击返回原样式
    getBackStyle:function(e){
        this.setData({
            noClickImg:"",
            ClickImg:"",
            getBackStyleDisplay:"none",
            noPhotoTop:"10.64rem",
            scroll:true,
            changeClick:"imgFullScreen",
            photoSwiper:"photoImg"
        })
    }
})