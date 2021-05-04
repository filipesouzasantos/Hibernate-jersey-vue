var inicio = new Vue({
	el: "#inicio",
	data: {
		listaProdutos: [],
		listaProdutosHeader: [
			{ sortable: false, key: "nome", label: "Nome" },
			{ sortable: false, key: "fabricante.nome", label: "Fabricante" },
			{ sortable: false, key: "volume", label: "Volume" },
			{ sortable: false, key: "unidade", label: "Unidade" },
			{ sortable: false, key: "estoque", label: "Estoque" }
		],

		
	},
	created: function() {
		let vm = this;
		vm.buscaProdutos();
	},
	methods: {
		buscaProdutos: function() {
			const vm = this;
			axios.get("/funcionarios/rs/funcionarios")
				.then(response => {
					vm.listaProdutos = response.data;
				}).catch(function(error) {
					vm.mostraAlertaErro("Erro interno", "Não foi listar natureza de serviços");
				}).finally(function() {
				});
		},

		deleteFuncionary: function(id) {
			axios.delete("/funcionarios/rs/funcionarios/" + id).then(response => {
				alert(" Funcionario deletado com sucesso!");
				this.buscaProdutos();
			}).catch(function(error) {
					vm.mostraAlertaErro("Erro interno", "Não foi possivél deletar");
				})
		},
		editFuncionary: function(id ,nome, idade, email, salario, setor ) {
			var funcionary = {
				nome,
				"setor": {
					"id": setor,
				},
				 salario,
				 email,
				 idade
			}
			axios.put("/funcionarios/rs/funcionarios/"+id, funcionary).then(response => {
				alert("Funcionário editado com sucesso!");
				this.buscaProdutos();
			}).catch(function(error) {
					vm.mostraAlertaErro("Erro interno", "Não foi possivél atualizar");
				})
		}

	}
});
