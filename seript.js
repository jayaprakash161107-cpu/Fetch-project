
const container= document.getElementById("contain");
const loading = document.getElementById("load");


async function fech(){
    try {
        const rec = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await rec.json();
    console.log(data);
    display(data)
    } catch (error) {
        console.log("error");
        
    }finally{
        loading.style.display="none";
    }
}
fech();



function display(user){

user.forEach(function (user){
    const card =document.createElement("div");
    card.classList.add("card");

    card.innerHTML=`
    
            <h4>${user.name}</h4>

            <p>
                <strong>Username:</strong> ${user.username}
            </p>

            <p>
                <strong>Email:</strong> ${user.email}
            </p>

            <p>
                <strong>Phone:</strong> ${user.phone}
            </p>

    `

    container.appendChild(card);
})


}