Page({

    data:{
    text: "This is page data",
    city:['广西壮族自治区','广东省'],
    school: [["桂林电子科技大学","广西师范大学"],["华南理工大学","中山大学"]],
    },
  bindchange:function(e){
    const val = e.detail.value;
      this.setData({
         value:val[0],
         value1:val[1]
       
      })
     wx.setStorageSync('school', this.data.school[this.data.value][this.data.value1]);

     console.log(wx.getStorageSync('school'));
  },
  start:function(event){
   wx.switchTab({
     url: '../my/my',
     success: function(res){
       // success
     },
     fail: function(res) {
       // fail
     },
     complete: function(res) {
       // complete
     }
   })

   }
})