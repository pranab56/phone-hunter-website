const searchPhone=()=>{
    const searchfield=document.getElementById('search-field')
    const totalsearch=searchfield.value
    searchfield.value='';
    if(totalsearch==''){
      const error=document.getElementById('error')
     error.style.display='block'
    }
   else{
    const url=`https://openapi.programming-hero.com/api/phones?search=${totalsearch}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>searchValue(data.data))
   }
}
const searchValue=(phones)=>{
    const phoneList=document.getElementById('phoneList')
    phoneList.textContent='';
    if(phones.length==0){
     const error=document.getElementById('error')
     error.style.display='block'
    }
else{
  for(const phone of phones){
    // console.log(phone);
      const div=document.createElement('div')
      div.classList.add('col')
      div.innerHTML=`
                <div style="width:90%; border-radius:15px;" class="card-body shadow-lg alert-danger mx-auto mb-5  ">
                <img class='img-fluid' src="${phone.image}" class="card-img-top" alt="..."
                >
                  <h5 class="card-title mt-2">${phone.phone_name}</h5>
                  <h5>Brand : ${phone.brand}</h5>
                  <button onclick="phoneDetails('${phone.slug}')" class="border-0 bg-danger rounded text-white p-2">MORE DETAILS</button>
                </div>
             
      `
      phoneList.appendChild(div)
     }
}
}




const phoneDetails=phoneId=>{
  const url=`https://openapi.programming-hero.com/api/phone/${phoneId}`
  fetch(url)
  .then(res=>res.json())
  .then(data=>displayPhoneDetail(data.data))
}
const displayPhoneDetail=mobiles=>{
  // console.log(mobiles);
  if(mobiles.releaseDate != 0){
  
    const phoneDetails=document.getElementById('phone-Details')
    phoneDetails.textContent='';
    
      const div=document.createElement('div')
      div.classList.add('p')
        div.innerHTML=`
                <div style="border-radius:15px;" class="card-body alert-warning text-center ">
                <img class='img-fluid' src="${mobiles.image}" class="card-img-top" alt="..."
                >
                  <h5 class="card-title mt-2">Device Name : ${mobiles.name}</h5>
                    <h5>Release date : ${mobiles.releaseDate}</h5>
                    <p>storage : ${mobiles.mainFeatures.storage}</p>
                    <p>Display Size : ${mobiles.mainFeatures.displaySize}</p>
                    <p>ChipSet : ${mobiles.mainFeatures.chipSet}</p> 
                  
                   
                  }
                </div>         
      `
      phoneDetails.appendChild(div)

  }
  else{
    const phoneDetails=document.getElementById('phone-Details')
    phoneDetails.textContent='';
    
      const div=document.createElement('div')
      div.classList.add('p')
        div.innerHTML=`
                <div style="border-radius:15px;" class="card-body alert-warning text-center ">
                <img class='img-fluid' src="${mobiles.image}" class="card-img-top" alt="..."
                >
                  <h5 class="card-title mt-2">Device Name : ${mobiles.name}</h5>
                    <h5>Release date :Upcoming</h5>
                    <p>storage : ${mobiles.mainFeatures.storage}</p>
                    <p>Display Size : ${mobiles.mainFeatures.displaySize}</p>
                    <p>ChipSet : ${mobiles.mainFeatures.chipSet}</p> 
                  
                  }
                </div>         
      `
      phoneDetails.appendChild(div)
      
  
  }

    }
    
  


    
     
      