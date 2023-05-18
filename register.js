//função para registro
async function registerUser(email, password, event){
    event.preventDefault(); //-evita eventos padrões; 
    try{ //
        //faz o processo de autenticação passando email e senha 
        const userCredential = await auth.createUserWithEmailAndPassword(email, password); 
        const user = userCredential.user;
        
        //insere os dados no banco de dados acessando  coleção users
        await db.collection("users").doc(user.uid).set(
            {
                emaiL: email,
                uid: user.uid
            }
        );      
    } catch(error){ //cath- "pega" o erro
        console.log(error);
    }
}
//pegar dados do formulário e inserir na função
  document.getElementById("registerButton").addEventListener("click", async (event)=>{   
       
    //pega ps dados do formulário
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        //valida se são iguais
        if(password !== confirmPassword){
            alert("Senhas não são iguais");
        }
        //insere os dados na função
        registerUser(email,password, event);
} );



/*ANOTAÇÔES
o "." é usado para acessar o metodo;
event- são ações que acontecem no navegador;
auth- é um obj do firebase, dentro dele tem um metodo;
await -espera o obj chamar a função p executar o código;
cath- "pega" o erro
collection- função que cria uma coleção de dados (acessa o doc e insere o uid do user)
document- percorre todo o doc do html (desde a raiz); 
getElementyById- pega os elementos id do html(ele pega as tags- div, body, head);
addEventListener- permite que configure funções a serem chamadas quando um evento específico acontece;
async- facilita o fluxo de escrita e leitura do código;
const- variável de valor fixo, é uma constante somente leitura;
registerUser-
*/
