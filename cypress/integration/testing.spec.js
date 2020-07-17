/* eslint-disable no-undef */
/// <reference types="cypress" />

context("Login", () => {
  beforeEach(() => {
    cy.server();
    cy.visit("https://tiicottom.netlify.app/");
    cy.contains("Students").should("exist");

  });

  it("Page loads, and we see My Students title", () => {
    cy.contains("Students").should("exist");
  });

  it("Searching by First name works", () => {
    cy.get("[data-cy=First]").type("tom");

    cy.contains("Tommy Lim").should("exist");
    cy.contains("Bobby Mountain").should("not.exist");

  });

  it("Searching by Last name works", () => {
    cy.get("[data-cy=Last]").type("Bob");

    cy.contains("Super").should("exist");
    cy.contains("Boe").should("exist");
    cy.contains("Bobby Mountain").should("not.exist");

  });

  it("Searching by First & Last name works", () => {
    cy.get("[data-cy=First]").type("bo");
    cy.contains("Boe Bob").should("exist");

    cy.get("[data-cy=Last]").type("Bob");

    cy.contains("Boe Bob").should("exist");
    cy.contains("Bobby Mountain").should("not.exist");
  });



  it("Can Navigate to About page and Back", () => {
    cy.get("[data-cy=AboutBtn]").click();
    cy.contains("About page").should("exist");

    cy.get("[data-cy=HomeBtn]").click();
    cy.contains("My Students").should("exist");




  });

});
