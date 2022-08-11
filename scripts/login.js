let buttonLogIn = document.getElementById("login");
buttonLogIn.addEventListener("click", ()=>{
    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;
    login(email, pass);
})

const login = async (email, pass) =>
{
    try
    {
        const data = await fetch("https://fakestoreapi.com/users/");
        const users = await data.json();
        let found = false;
        for (const user of users) {
            if(email.toLowerCase() === user.email && pass === user.password)
            {
                alert("¡Genial, iniciaste sesión!");
                found = true;
                window.location.href = "./views/prestamos.html";
            }
        }
        if(!found)
        {
            alert("ups, copiaste mal el usuario");
            window.location.href = "./views/prestamos.html";
        }
    }
    catch(error)
    {
        console.log(error);
    }
}