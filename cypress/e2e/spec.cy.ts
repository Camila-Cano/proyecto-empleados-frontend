describe('Automatizacon caso de prueba para registrar un empleado', () => {
  it('Registro exitoso de un empleado', () => {
    // apertura del sitio y seleccion de opcion de menu
    cy.visit('/');
    cy.screenshot();
    cy.get('#menuRegistroEmpleado').click();
    cy.screenshot();
    // diligenciamiento del formulario
    let identificacion = Math.floor(Math.random() * 9999999999) + 1000000;
    let codigo = Math.floor(Math.random() * 999) + 100;
    cy.get('#documentoIdentidad').type(identificacion.toString());
    cy.get('#codigo').type(codigo.toString());
    cy.get('#nombre').type('Maria Camila');
    cy.get('#apellido').type('Cano Chica');
    cy.get('#direccion').type('Calle 33 # 28 - 44');
    cy.get('#telefono').type('3177577212');
    cy.screenshot()
    // ejecucion de la solicitud de guardado
    cy.get('#btnCrearEmpleado').click();
    cy.wait(3000);
    // validacion de prueba
    cy.get('.ng-star-inserted').first().then((element) => {
      let textValue = Cypress.$(element).text().trim()
      expect(textValue).to.equal('SuccessOperacion ejecutada con exito OK')
    });
    cy.screenshot();
  });

});
