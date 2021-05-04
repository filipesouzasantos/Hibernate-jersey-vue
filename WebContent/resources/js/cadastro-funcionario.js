var app = new Vue({
	el: "#app",
	data: {
		nome: "",
		email: "",
		salario: null,
		idade: null,
		setor: null,
		errors : [],
	},

	methods: {

		createFuncionary: function() {
			
		this.errors = [];
			if (!this.nome || !this.idade || !this.salario || !this.setor || !this.email ) {
				 this.errors.push('Todos os campos são obrigatórios.');
				
			}if(Number.isInteger(this.idade) || this.idade >=150 || this.idade <= 0){
				 this.errors.push('Idade invalida!');
			} 
			if( this.salario <= 0 ){
				 this.errors.push('Salario invalido!');
			} 
			
			if(!this.errors.length) {
				var funcionary = {
					nome: this.nome,
					"setor": {
						"id": this.setor,
					},
					"salario": this.salario,
					"email": this.email,
					"idade": this.idade
				}
				axios.post("/funcionarios/rs/funcionarios/", funcionary).then(response => {
					alert("Funcionário foi criado com sucesso!");
				})
			}

		}

	}
});