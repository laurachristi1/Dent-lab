//função para registro
async function registerUser(emaiL, senha, event){
    event.preventDefault(); //evita eventos padrões //event- são ações que acontecem no site
    try{
        //faz o processo de autenticação passando email e senha 
        const userCredential = await auth.createUserWithEmailAndPassword(email, password)
        const user = userCredential.user;
        
        //insere os dados no banco de dados acessando  coleção users
        await db.collection("users").doc(user.uid).set(
            {
                emaiL: emaiL,
                uid: user.uid
            }
        );      
    } catch(error){
        console.log(error);
    }
}

//pegar dados do formulário e inserir na função
  document.getElementById("registerButton");addEventListener("click", async (event)=>{
       
    //pega ps dados do formulário
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        //valida se são iguais
        if(password !== confirmPassword){
            alert("Senhas não são iguais");
        }

        registerUser(email,password);
} );