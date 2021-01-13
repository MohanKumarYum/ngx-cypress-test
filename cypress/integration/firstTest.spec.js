/// <reference types="cypress" />

describe("Our first test suite", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.contains("Form").click();
    cy.contains("Form Layouts").click();
  });

  it("First test", () => {
    cy.visit("/");
    cy.contains("Form").click();
    cy.contains("Form Layouts").click();

    // by tag name
    cy.get("input");

    // by ID
    cy.get("#inputEmail1");

    // by class name
    cy.get(".input-full-width");

    // by attribute name
    cy.get("[placeholder]");

    // by attibute name and value
    cy.get('[placeholder="Email"]');

    // by class value
    cy.get('[class="input-full-width size-medium shape-rectangle"]');

    // by tag name & attribute with value
    cy.get('input[placeholder="Email"]');

    // by two different attributes
    cy.get('[placeholder="Email"][fullwidth]');

    // by tag name, attribute with value, ID & class name
    cy.get('input[placeholder="Email"]#inputEmail1.input-full-width');
  });

  it("Second test", () => {
    cy.visit("/");
    cy.contains("Form").click();
    cy.contains("Form Layouts").click();

    cy.get('[data-cy="signinButtonPrimary"]');

    cy.contains("Sign in");

    cy.get(":nth-child(3) > .col-md-6 > nb-card > nb-card-header");

    cy.contains('[status="warning"]', "Sign in");

    cy.get("#inputEmail3")
      .parents("form")
      .find("button")
      .should("contain.text", "Sign in")
      .parents("form")
      .find('[class="custom-checkbox"]')
      .click();
  });

  it.only("then and wrap methods", () => {
    // cy.contains('nb-card', 'Using the Grid').find('[for="inputEmail1"]').should('contain', 'Email')

    cy.contains("nb-card", "Using the Grid").then((firstForm) => {
      // text() - this is jquery method
      const emailLabelFirst = firstForm.find('[for="inputEmail1"]').text();
      const passwordLabelFirst = firstForm
        .find('[for="inputPassword2"]')
        .text();
      expect(emailLabelFirst).to.equal("Email");
      expect(passwordLabelFirst).to.equal("Password");

      cy.contains("nb-card", "Basic form").then((secondForm) => {
        // js scope in play, hence firstForm is variables are being accessed here.

        const emailLabelSecond = secondForm
          .find('[for="exampleInputEmail1"]')
          .text();
        const passwordLabelSecond = secondForm
          .find('[for="exampleInputPassword1"]')
          .text();
        expect(passwordLabelFirst).to.equal(passwordLabelSecond);
        expect(emailLabelFirst).to.not.equal(emailLabelSecond); // not method used here.

        // Wrap the resovled promise from the first promise in .wrap to continue cypress
        cy.wrap(firstForm).find('[data-cy="signinButtonPrimary"]');
      });
    });
  });
});
