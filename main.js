const tabItems =document.querySelectorAll('.tab-item');
const tabContentItems =document.querySelectorAll('.tab-content-item');

function selectItem(e){
    removeBorder();
    removeShow();
    this.classList.add("tab-border");
    const tabContent =  document.querySelector(`#${this.id}-content`);
    tabContent.classList.add("show");
} 
function removeShow(){
    tabContentItems.forEach(item => item.classList.remove("show"));
}
function removeBorder(e){
    tabItems.forEach(items => items.classList.remove("tab-border"));
}



tabItems.forEach(item =>item.addEventListener("click", selectItem));



