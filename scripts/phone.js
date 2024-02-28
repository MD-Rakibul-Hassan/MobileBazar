
const cardContainer = document.getElementById("cardContainer");
// Send request api for gatting phone imformations 
async function getPhones (rul) {
    const response = await fetch (rul);
    const data = await response.json()
    const phonesArray = data["data"];
    showPhones(phonesArray) 
}

// Show phone information dynamically 
function showPhones (phone) {
    phone.forEach(element => {
        console.log(element)
        const phoneCard = document.createElement('div');
        phoneCard.innerHTML = `<div class="card w-96 bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src=${element.image} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-bodys items-center text-center my-card">
                    <h2 class="card-title ">${element.phone_name}</h2>
                    <p>${element.slug}</p>
                    <p>$ <sapn>999</sapn></p>
                    <div class="card-actions">
                    <button class="btns">Buy Now</button>
                    </div>
                </div>
            </div>`
         cardContainer.appendChild(phoneCard);
    });
}
// Searching functionality
const searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener("click",searchingPhone)
function searchingPhone () {
    const searchInput = document.getElementById("searchInput");
    getPhones(`https://openapi.programming-hero.com/api/phones?search=${searchInput.value ? searchInput.value : `iphone`}`);
    cardContainer.innerHTML = "";
    
}
searchingPhone()