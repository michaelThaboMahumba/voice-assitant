//spinner  setup
var loader=document.getElementById("preloader");
window.addEventListener("load",function(){
    setTimeout(() => {
        loader.style.display="none";
           },3000);
 });
const subMenu=document.getElementById("subMenu");

function toggleMenu(){
    subMenu.classList.toggle("open-menu");
}
//nav sidebar setup
let sidebar = document.querySelector(".sidebar");
  let closeBtn = document.querySelector("#btn");
  

  closeBtn.addEventListener("click", ()=>{
    sidebar.classList.toggle("open");
    menuBtnChange();//calling the function(optional)
  });

  // following are the code to change sidebar button(optional)
  function menuBtnChange() {
   if(sidebar.classList.contains("open")){
     closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
   }else {
     closeBtn.classList.replace("bx-menu-alt-right","bx-menu");//replacing the iocns class
   }
  }
  // show a notificaions setup.
  const showNotificationButton = document.getElementById('showNotificationButton');
const notificationContainer = document.getElementById('notificationContainer');
showNotificationButton.addEventListener('click', showNotification);
function showNotification() {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = 'to check for the commands speak what are your commands';

    notificationContainer.appendChild(notification);

    setTimeout(() => {
        notificationContainer.removeChild(notification);
    }, 5000);
}
//chane the gif  for 6s.
const changeGif=document.getElementById("change");
window.addEventListener("load",function(){
    setTimeout(() => {
        changeGif.style.backgroundImage="url(sphere-animated-gif-3.gif)";
           },600)
 });