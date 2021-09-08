const cep = document.querySelector("#cep")
const qs = (el)=> document.querySelector(el);

const showData = (result)=>{
    for(const campo in result){
        let ids = document.getElementById(`${campo}`)
        if(ids){
            ids.value = result[campo]
        }
    }
}

function clearInput(){
    let teste = document.querySelectorAll('input')
    for(let i=0;i<teste.length;i++){
        teste[i].value = ""
    }
}

cep.addEventListener('keyup', (e)=>{
    if(e.key=='Enter'){
        let search = cep.value.replace("-","")
        const options = {
            method: 'GET',
            mode: 'cors',
            cache: 'default'
        }

        fetch(`http://viacep.com.br/ws/${search}/json/`, options)
        .then(response => {response.json()
            .then(data => {
                showData(data);
            })
        })
        .catch(clearInput())
        }
})