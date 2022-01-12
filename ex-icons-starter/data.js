let tessereArray =[
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

let containerRow = document.getElementById("containertessere");


function creaTessere(tessereArray,containerRow){
	for( let i=0;  i<tessereArray.length  ; i++){

		containerRow.innerHTML+= `
	
		<div class="col-2 d-flex align-items-center justify-content-center styletessera g-4 ">
			<div class="content text-center ${tessereArray[i].color}">
				<i class=" ${tessereArray[i].family} ${tessereArray[i].prefix}${tessereArray[i].name}"></i>
				<div class="nome">${tessereArray[i].name}</div>
			</div> 
		</div>
		
		`

	};
}


function cambio(){
	document.getElementById("tipologia").addEventListener("click",function(){
		let tipo = this.value;

		
		if(tipo == "all"){
			containerRow.innerHTML="";
			creaTessere(tessereArray,containerRow);
			
		}else {
			containerRow.innerHTML="";
		    
			let arrayVersatile = tessereArray.filter((elemento) => {

				if(elemento.type == tipo){                             //dando TIPO rendo questo if disponibilie per tutti i .value 
					
					return true;
					
				}else{
					return false;
				}
				
				
			})
			
			creaTessere(arrayVersatile,containerRow);                   //richiamando la funzione la attivo e faccio vedere gli elementi a schermo
		
		}
	})
	
}



cambio()		







