var images = ["url('/img3.jpg')" ,"url('/img1.jpg')","url('/img2.jpg')"]

let count = 0;

function changeBackground(){
    if(count<3){
        document.getElementById('main').style.backgroundImage = images[count]
        count++;
    }else{
        count = 0;
    }
}