
/*Chuyển ảnh trong trang chủ*/ 
var index=1;
changeImage = function(){
    var imgs = ["/img/anh1.jpg","/img/anh2.jpg","/img/anh3.jpg"];
    document.getElementById('img').src = imgs[index];
    index++;
    if(index==3){
        index=0;
    }
}
setInterval(changeImage,3000);
/**/

/*Modal đăng ký*/
var btnOpen = document.querySelector('.open-modal-btn');
var modal = document.querySelector('.modal');
var iconClose = document.querySelector('.modal_header i');
var btnClose = document.querySelector('.modal_footer button');

function toggleModal() {
    modal.classList.toggle('hide');
}

btnOpen.addEventListener('click', toggleModal);
btnClose.addEventListener('click', toggleModal);
iconClose.addEventListener('click', toggleModal);
modal.addEventListener('click', function(e) {
    if (e.target == modal) { //if (e.target == e.currentTarget) {
        toggleModal();
    }
});
/**/