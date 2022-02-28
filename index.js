const searchPhone=()=>{
    const searchfield=document.getElementById('search-field')
    const totalsearch=searchfield.value
    searchfield.value='';
    const url=`https://openapi.programming-hero.com/api/phones?search=${totalsearch}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>searchValue(data.data))
}
const searchValue=(phones)=>{
    const phoneList=document.getElementById('phoneList')
 for(const phone of phones){
console.log(phone);
  const div=document.createElement('div')
  div.classList.add('col')
  div.innerHTML=`

 
 
            <div class="card-body shadow-lg alert-danger ">
            <img class='img-fluid' src="${phone.image}" class="card-img-top" alt="..."
 >
              <h5 class="card-title">${phone.phone_name}</h5>
              <h5>${phone.brand}</h5>
            </div>
         
  
  `
  phoneList.appendChild(div)
 }
}