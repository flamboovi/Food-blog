function getBase64Image(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    var dataURL = canvas.toDataURL("image/png");

    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}

$('button').on("click",function(){
   
    var name=$('#name').val();
    var title=$('#title').val();
    var subtitle=$('#subtitle').val();
    var content=$("#content").val();
    localStorage.setItem("name",name);
//     bannerImage = document.getElementById('bannerImg');
// imgData = getBase64Image(bannerImage);
// localStorage.setItem("imgData", imgData);

document.querySelector('#img').addEventListener("change",function(){
    const reader=new FileReader();
reader.addEventListener("load",()=>{
    localStorage.setItem("image",reader.result);
})
    reader.readAsDataURL(this.files[0]);
})
localStorage.setItem("title",title);
localStorage.setItem("subtitle",subtitle);
localStorage.setItem("content",content);
})

document.getElementById('name1').innerHTML=localStorage.getItem("name");

document.addEventListener("DOMContentLoaded",()=>{
    const recent=localStorage.getItem("image");
    if(recent){
        document.querySelector('#img1').setAttribute("src",recent);
    }
})
// var dataImage = localStorage.getItem('imgData');
// bannerImg = document.getElementById('tableBanner');
// bannerImg.src = "data:image/png;base64," + dataImage;
document.getElementById('title1').innerHTML=localStorage.getItem("title");
document.getElementById('subtitle1').innerHTML=localStorage.getItem("subtitle");
document.getElementById('content1').innerHTML=localStorage.getItem("content");


    
        

