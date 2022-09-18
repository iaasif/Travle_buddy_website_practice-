var carObject = {
    vehicle: "Car",
    imgUrl: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    farePerKilo: 3,
    capasity: 4,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptatem voluptates eligendi beatae commodi esse harum tempore enim delectus dolorum."
}
var bikeObject = {
    vehicle: "Bike",
    imgUrl: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    farePerKilo: 2,
    capasity: 2,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptatem voluptates eligendi beatae commodi esse harum tempore enim delectus dolorum."
}
var busObject = {
    vehicle: "Bus",
    imgUrl: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    farePerKilo: 3,
    capasity: 30,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptatem voluptates eligendi beatae commodi esse harum tempore enim delectus dolorum."
}



//
const servicesArray = [bikeObject,carObject,busObject];





function displayAllArticles (arr){
    for ( let i=0;i <arr.length;i++){
        const element = arr[i];
        // console.log(element);
        displayService(element)

    }
}

displayAllArticles(servicesArray);



//makeing function for service 

function displayService(service) {
    const mainSection = document.getElementById("main-section");
    const stringifiedObj = JSON.stringify(service);
    const div = document.createElement("div");

    div.innerHTML = `
    <div class="card mt-3 mx-auto" style="max-width: 800px;">
    <div class="row g-0">
        <div class="col-md-4">
            <img src=${service.imgUrl}
                class="img-fluid rounded-start h-100 " alt="...">
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">Transport mood : ${service.vehicle}</h5>
                <p class="card-text">${service.description}</p>
                <p class="card-text"><small class="text-muted">Fare per kilo: ${service.farePerKilo} 
                </small> <small class="text-muted">capasity: ${service.capasity}
                </small></p>
                <!-- Button trigger modal -->
                        <button type="button" class="btn btn-primary"  data-bs-toggle="modal" onclick='handleBooking(${stringifiedObj})' data-bs-target="#exampleModal">
                        Launch demo modal
                        </button>

            </div>
        </div>
        
    </div>
</div>
    `
    mainSection.appendChild(div);


}




// displayService(carObject);
// displayService(bikeObject);
// displayService(busObject);


//handal booking 

function handleBooking(obj) {

    console.log(obj);
    const stringifiedObj = JSON.stringify(obj);
    const modalBody = document.getElementById("modal-body");
    modalBody.innerHTML = `
    <div class="card" style="width: 18rem;">
    <img src=${obj.imgUrl} class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">Vehicle mood : ${obj.vehicle}</h5>
            <p class="card-text">${obj.description}</p>

                <p class="card-text"><small class="text-muted">Fare per kilo: ${obj.farePerKilo} 
                </small> <small class="text-muted">capasity: ${obj.capasity}
                </small></p>
                <div class="d-flex flex-column" role="search">
                <p> Fare: <small class="text-muted" id="fare"  > </small></p>
                <p> Tax: <small class="text-muted" id="tax" > </small></p>
                <p> TotalCost: <small class="text-muted" id="total-cost" > </small></p>


                <input class="form-control me-2" id="distance-input" type="number" placeholder="koto km jaba?" aria-label="Search">
                <input class="form-control me-2" id="quantity-input"  type="number" placeholder="koyta lagbe gari ?" aria-label="Search">
                <button class="btn btn-outline-success" id="searchBtn" onclick='calculateCost(${stringifiedObj})' type="submit" >Submit</button>
                </div>

        </div>
    </div>
    `
}



function calculateCost(obj) {



    const quantity = document.getElementById("quantity-input").value;
    const distance = document.getElementById("distance-input").value;

    // console.log(quantity, distance);
    // console.log(obj.farePerKilo);
    const fareDiv = document.getElementById("fare");

    fareDiv.innerHTML = quantity * distance * obj.farePerKilo;
    console.log(fareDiv);

    
}