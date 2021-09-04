let btn1 = document.querySelector(".btn1");

let retornos1 = [];

btn1.addEventListener("click", ()=>{
    
    let tabela3 = document.querySelector(".tabela3");
    console.log(tabela3)
  
    tabela3.style.display = "none";

    let tabela2 = document.querySelector(".tabela2");
    console.log(tabela2)
  
    tabela2.style.display = "none";

    let tabela1 = document.querySelector(".tabela1");
    console.log(tabela1)
  
    tabela1.style.display = "table";
    

    fetch("https://jsonplaceholder.typicode.com/posts").then((response) => {
        if (response.status == 200) {
          return response.json();
        }
        else {
          document.querySelector("#erro").setAttribute('style', 'display:block')
          console.log(response.status)
        }
    
      }).then((result) => {
        retornos1 = result;
        console.log(retornos1)

        retornos1.forEach(retorno1 => {
            adicionaDadosNaTabela(retorno1);
        });

     });
});


let btn2 = document.querySelector(".btn2");

let retornos2 = [];

btn2.addEventListener("click", ()=>{

    let tabela1 = document.querySelector(".tabela1");
    console.log(tabela1)
   
    tabela1.style.display = "none";

    let tabela3 = document.querySelector(".tabela3");
    console.log(tabela3)
   
    tabela3.style.display = "none";

    let tabela2 = document.querySelector(".tabela2");
    console.log(tabela2)
  
    tabela2.style.display = "table";

    fetch("https://jsonplaceholder.typicode.com/albums").then((response) => {
        if (response.status == 200) {
          return response.json();
        }
        else {
          document.querySelector("#erro").setAttribute('style', 'display:block')
          console.log(response.status)
        }
    
      }).then((result) => {
        retornos2= result;
        console.log(retornos2)

        retornos2.forEach(retorno2 => {
            adicionaDadosNaTabela2(retorno2);
        });

    });
});


let btn3 = document.querySelector(".btn3");

let retornos3 = [];

btn3.addEventListener("click", ()=>{
    let tabela1 = document.querySelector(".tabela1");
    console.log(tabela1)
  
    tabela1.style.display = "none";

    let tabela2= document.querySelector(".tabela2");
    console.log(tabela2)
   
    tabela2.style.display = "none";

    let tabela3 = document.querySelector(".tabela3");
    console.log(tabela3)
  
    tabela3.style.display = "table";


    fetch("https://jsonplaceholder.typicode.com/todos").then((response) => {
        if (response.status == 200) {
          return response.json();
        }
        else {
          document.querySelector("#erro").setAttribute('style', 'display:block')
          console.log(response.status)
        }
    
      }).then((result) => {
        retornos3 = result;
        console.log(retornos3)

        let retornoNovo3 = retornos3.map(retorno3 => {
          return {
            id: retorno3.id,
            userId: retorno3.userId,
            title: retorno3.title
          }
        });

        retornoNovo3.forEach(retorno3 => {
            adicionaDadosNaTabela3(retorno3);
        });
      });
});



function adicionaDadosNaTabela(retorno1) {
    let dadosTr = montarTr(retorno1)
    let tabela = document.getElementById("corpo-tabela")
    tabela.appendChild(dadosTr);
}
  
function montarTr(retorno1) {
    let dadosTr = document.createElement("tr");
    dadosTr.classList.add("dados");
    dadosTr.appendChild(montaTD(retorno1.id, "info-id"));
    dadosTr.appendChild(montaTD(retorno1.userId, "info-user"));
    dadosTr.appendChild(montaTD(retorno1.title, "info-title"));
    dadosTr.appendChild(montaTD(retorno1.body, "info-body"));
  
    return dadosTr;
}
  

function montaTD(data, classe) {
    let td = document.createElement("td");
    td.textContent = data;
    td.classList.add(classe);
    
    return td;
}


function adicionaDadosNaTabela2(retorno2) {
    let dadosTr = montarTr2(retorno2)
    let tabela2 = document.getElementById("corpo-tabela2")
    tabela2.appendChild(dadosTr);
}
  
function montarTr2(retorno2) {
    let dadosTr = document.createElement("tr");
    dadosTr.classList.add("dados2");
    dadosTr.appendChild(montaTD(retorno2.id, "info-id2"));
    dadosTr.appendChild(montaTD(retorno2.userId, "info-user2"));
    dadosTr.appendChild(montaTD(retorno2.title, "info-title2"));
    
  
    return dadosTr;
}

  
function adicionaDadosNaTabela3(retorno3) {
    let dadosTr = montarTr3(retorno3)
    let tabela3 = document.getElementById("corpo-tabela3")
    tabela3.appendChild(dadosTr);
}
  


function montarTr3(_retorno3) {
    let dadosTr = document.createElement("tr");
    dadosTr.classList.add("dados3");
    dadosTr.appendChild(montaTD(_retorno3.id, "info-id3"));
    dadosTr.appendChild(montaTD(_retorno3.userId, "info-user3"));
    dadosTr.appendChild(montaTD(_retorno3.title, "info-title3"));
  
    return dadosTr;
}
  