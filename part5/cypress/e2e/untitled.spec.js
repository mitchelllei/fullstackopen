describe('Check login form log in out app', function() {
    beforeEach(function() {
     cy.request('POST', 'http://localhost:3003/api/testing/reset')
     const user = {
       name: 'Matti Luukkainen',
       username: 'mluukkai',
       password: 'salainen'
     }
     cy.request('POST', 'http://localhost:3003/api/users/', user) 
     cy.visit('http://localhost:3000')
   })
   
   it('Login form is shown', function() {
    cy.get(`#login_buton1`).click()
  })
  
  it("tests login", function() {
    
    cy.get(`#login_buton1`).click()
    cy.get('#username').type('mluukkai')
    cy.get('#password').type('salainen')
    cy.get(`#login_button`).click()
  })
  
  it("tests logout", function() {
    
  
    cy.get(`#login_buton1`).click()
  
    
    cy.contains('logout').click()
    cy.get(`#logout_button`).click()
  
  })
  
  })
  
  describe('Check add blog', function() {
    beforeEach(function() {
     cy.request('POST', 'http://localhost:3003/api/testing/reset')
     const user = {
       name: 'Matti Luukkainen',
       username: 'mluukkai',
       password: 'salainen'
     }
     cy.request('POST', 'http://localhost:3003/api/users/', user) 
     cy.visit('http://localhost:3000')
   })
   
  
   it("add blog", function() {
    
    cy.get(`#login_buton1`).click()
    cy.get('#username').type('mluukkai')
    cy.get('#password').type('salainen')
    cy.get(`#login_button`).click()
    cy.get('#title').type('mlu')
    cy.get('#author').type('sa')
    cy.get('#url').type('asf')
    cy.get('#likes').type('5')
    cy.contains('add blog').click({ force: true }) 
  })
  
  })