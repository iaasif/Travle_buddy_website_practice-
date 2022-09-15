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





//makeing function for service 

function displayService(service) {
    const mainSection = document.getElementById("main-section");
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
                capasity: ${service.capasity}</small></p>
            </div>
        </div>
        
    </div>
</div>
    `
    mainSection.appendChild(div);

}




displayService(carObject);
displayService(busObject);