    const phoneDetail=document.getElementById('phone-Details')
    // input peramiter
    const searchPhone=()=>{
    const searchfield=document.getElementById('search-field')
    const totalsearch=searchfield.value
    searchfield.value='';
    // api data 
    if(totalsearch==''){
      const error=document.getElementById('error')
     error.style.display='block'
     
     
    }
    else{
    const url=`https://openapi.programming-hero.com/api/phones?search=${totalsearch}`
   
    fetch(url)
    .then(res=>res.json())
    .then(data=>searchValue(data.data))
    phoneDetail.textContent='';
    
   }
}
// api total phone 
    const searchValue=(phones)=>{
    const phoneList=document.getElementById('phoneList')
    phoneList.textContent='';
    phoneDetail.textContent = '';
    // phones.slice(3.20)
    
   
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



// api phone details
   const phoneDetails=phoneId=>{
   const url=`https://openapi.programming-hero.com/api/phone/${phoneId}`
  fetch(url)
  .then(res=>res.json())
  .then(data=>displayPhoneDetail(data.data))
}
       const displayPhoneDetail=mobiles=>{
      //  console.log(mobiles);
       if(mobiles.releaseDate != 0 && mobiles.slug !='apple_iphone_13_mini-11104'){
  
        const phoneDetails=document.getElementById('phone-Details')
        phoneDetails.textContent='';
    
         const div=document.createElement('div')
     
         div.classList.add('p')
         div.innerHTML=`
              <div style="border-radius:15px;" class="card-body alert-warning text-center ">
              <img class='img-fluid' src="${mobiles.image}" class="card-img-top" alt="..."
              >
                <h5 class="card-title mt-2">Device Name : ${mobiles.name}</h5>
                  <h5>Release date : ${mobiles.releaseDate}</h5><hr>
                  <p style=" text-align: left;"><span style="font-weight:bold;">storage</span> : ${mobiles.mainFeatures.storage}</p><hr>
                  <p style=" text-align: left;"><span style="font-weight:bold">Display Size</span> : ${mobiles.mainFeatures.displaySize}</p><hr>
                  <p style=" text-align: left;"><span style="font-weight:bold; margin:0">ChipSet</span> : ${mobiles.mainFeatures.chipSet}</p><hr>
                  <p style=" text-align: left;"><span style="font-weight:bold">Bluetooth</span> :${mobiles.others.Bluetooth}</p><hr>
                  <p style=" text-align: left;"><span style="font-weight:bold">GPS</span> : ${mobiles.others.GPS}</p><hr>
                  <p style=" text-align: left;"><span style="font-weight:bold">NFC</span> : ${mobiles.others.NFC}</p><hr>
                  <p style=" text-align: left;"><span style="font-weight:bold">Radio</span> : ${mobiles.others.Radio}</p><hr>
                  <p style=" text-align: left;"><span style="font-weight:bold">USB</span> : ${mobiles.others.USB}</p><hr>
                  <p style=" text-align: left;"><span style="font-weight:bold">WLAN</span> : ${mobiles.others.WLAN}</p><hr>
                  <h5 style='font-weight:bold; text-align: left;'>SENSOR</h5>
                  <p style=" text-align: left;">1. ${mobiles.mainFeatures.sensors[0]}</p>
                  <p style=" text-align: left;">2. ${mobiles.mainFeatures.sensors[1]}</p>
                  <p style=" text-align: left;">3. ${mobiles.mainFeatures.sensors[2]}</p>
                  <p style=" text-align: left;">4. ${mobiles.mainFeatures.sensors[3]}</p>
                  <p style=" text-align: left;">5. ${mobiles.mainFeatures.sensors[4]}</p>
                  <p style=" text-align: left;">6. ${mobiles.mainFeatures.sensors[5]}</p><hr>
                  
                 
                
              </div>         
    `
    phoneDetails.appendChild(div)

}

      
    
 // console.log(mobiles);
       else if (mobiles.slug !='apple_iphone_13_mini-11104' && mobiles.others !=0  ){
  
       const phoneDetails=document.getElementById('phone-Details')
       phoneDetails.textContent='';
  
       const div=document.createElement('div')
       div.classList.add('p')
       div.innerHTML=`
            <div style="border-radius:15px;" class="card-body alert-warning text-center ">
            <img class='img-fluid' src="${mobiles.image}" class="card-img-top" alt="..."
            >
              <h5 class="card-title mt-2">Device Name : ${mobiles.name}</h5>
                <h5>Release date : Not published </h5>
                <p style=" text-align: left;"><span style="font-weight:bold">storage</span> : ${mobiles.mainFeatures.storage}</p><hr>
                  <p style=" text-align: left;"><span style="font-weight:bold">Display Size</span> : ${mobiles.mainFeatures.displaySize}</p><hr>
                  <p style=" text-align: left;"><span style="font-weight:bold">ChipSet</span> : ${mobiles.mainFeatures.chipSet}</p><hr>
                  <p style=" text-align: left;"><span style="font-weight:bold">Bluetooth</span> :${mobiles.others.Bluetooth}</p><hr>
                  <p style=" text-align: left;"><span style="font-weight:bold">GPS</span> : ${mobiles.others.GPS}</p><hr>
                  <p style=" text-align: left;"><span style="font-weight:bold">NFC</span> : ${mobiles.others.NFC}</p><hr>
                  <p style=" text-align: left;"><span style="font-weight:bold">Radio</span> : ${mobiles.others.Radio}</p><hr>
                  <p style=" text-align: left;"><span style="font-weight:bold">USB</span> : ${mobiles.others.USB}</p><hr>
                  <p style=" text-align: left;"><span style="font-weight:bold">WLAN</span> : ${mobiles.others.WLAN}</p><hr>
                  <h5 style='font-weight:bold; text-align: left;'>SENSOR</h5>
                  <p style=" text-align: left;">1. ${mobiles.mainFeatures.sensors[0]}</p>
                  <p style=" text-align: left;">2. ${mobiles.mainFeatures.sensors[1]}</p>
                  <p style=" text-align: left;">3. ${mobiles.mainFeatures.sensors[2]}</p>
                  <p style=" text-align: left;">4. ${mobiles.mainFeatures.sensors[3]}</p>
                  <p style=" text-align: left;">5. ${mobiles.mainFeatures.sensors[4]}</p>
                  <p style=" text-align: left;">6. ${mobiles.mainFeatures.sensors[5]}</p><hr>
                  
                 
                
              </div>         
            `
           phoneDetails.appendChild(div)

}

    
  
  else if(mobiles.releaseDate !=0 && mobiles.others != 0){
    const phoneDetails=document.getElementById('phone-Details')
    phoneDetails.textContent='';
    
      const div=document.createElement('div')
      div.classList.add('p')
        div.innerHTML=`
                  <div style="border-radius:15px;" class="card-body alert-warning text-center ">
                  <img class='img-fluid' src="${mobiles.image}" class="card-img-top" alt="..."
                  >
                  <h5 class="card-title mt-2">Device Name : ${mobiles.name}</h5>
                    <h5>Release date :Upcoming</h5><hr>
                    <p style=" text-align: left;"><span style="font-weight:bold">storage</span> ${mobiles.mainFeatures.storage}</p><hr>
                    <p style=" text-align: left;"><span style="font-weight:bold">Display Size</span> : ${mobiles.mainFeatures.displaySize}</p><hr>
                    <p style=" text-align: left;"><span style="font-weight:bold">ChipSet</span> : ${mobiles.mainFeatures.chipSet}</p><hr> 
                    <p style=" text-align: left;"><span style="font-weight:bold">Bluetooth</span> : Not Available</p><hr> 
                    <p style=" text-align: left;"><span style="font-weight:bold">GPS</span> : Not Available</p><hr> 
                    <p style=" text-align: left;"><span style="font-weight:bold">NFC</span> : Not Available</p><hr> 
                    <p style=" text-align: left;"><span style="font-weight:bold">Radio</span> : Not Available</p><hr> 
                    <p style=" text-align: left;"><span style="font-weight:bold">USB</span> : Not Available</p><hr> 
                    <p style=" text-align: left;"><span style="font-weight:bold">WLAN</span>: Not Available</p><hr> 
                    <h5 style='font-weight:bold; text-align: left;'>SENSOR</h5>
                    <p style=" text-align: left;">1. ${mobiles.mainFeatures.sensors[0]}</p>
                    <p style=" text-align: left;">2. ${mobiles.mainFeatures.sensors[1]}</p>
                    <p style=" text-align: left;">3. ${mobiles.mainFeatures.sensors[2]}</p>
                    <p style=" text-align: left;">4. ${mobiles.mainFeatures.sensors[3]}</p>
                    <p style=" text-align: left;">5. ${mobiles.mainFeatures.sensors[4]}</p>
                    <p style=" text-align: left;">6. ${mobiles.mainFeatures.sensors[5]}</p><hr>

                  
                </div>         
      `
      phoneDetails.appendChild(div)
      
  
    }
    }
    
    