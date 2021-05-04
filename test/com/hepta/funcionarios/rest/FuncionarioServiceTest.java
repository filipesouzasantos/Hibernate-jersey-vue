package com.hepta.funcionarios.rest;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.MethodOrderer.OrderAnnotation;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;

import com.hepta.funcionarios.entity.Funcionario;
import com.hepta.funcionarios.persistence.FuncionarioDAO;

@TestMethodOrder(OrderAnnotation.class)
class FuncionarioServiceTest {
	
	private FuncionarioDAO  dao = new FuncionarioDAO();
	private static Funcionario funcionario = new Funcionario();
	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		funcionario.setNome("nomeTeste");
		funcionario.setEmail("teste@mail.com");
		funcionario.setIdade(100);
		funcionario.setSalario(1000.0);
	}
	@Order(1)
	@Test
	 void  testFuncionarioSave() throws Exception  {
		dao.save(funcionario);
		Funcionario funcionaioCreated = dao.find(funcionario.getId());
		assertNotNull(funcionaioCreated);
	}
	@Order(2)
	@Test
	 void testFuncionariopdate() throws Exception {
		funcionario.setNome("Modify here");
		dao.update(funcionario);
		assertEquals("Modify here", funcionario.getNome());
	}
	@Order(3)
	@Test
	void testFuncionarioRead() throws Exception {
		 assertFalse(dao.getAll().isEmpty());
	}
	@Order(4)
	@Test
	void testFuncionarioDelete() throws Exception {
		dao.delete(funcionario.getId());
		Funcionario funcionaioDeleted = dao.find(funcionario.getId());
		assertNull(funcionaioDeleted);
	}

}
