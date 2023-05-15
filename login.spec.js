describe('Login Testing', function(){
    //Enter User 1
    describe('Should load the page', function(){
        //Page Load
        it("Should load the page", function(){
            cy.visit('./index.html');
        })
        it("Check for empty Username", ()=>{
            cy.visit('./index.html')
            cy.get('#submit').click();
            cy.get('input[id="username"]').should('have.css', 'background-color', 'rgb(255, 0, 0)');
        })
        it("Check for empty Password", ()=>{
            cy.get('input[id="username"]').type("abc");
            cy.get('#submit').click();
            cy.get('input[id="password"]').should('have.css', 'background-color', 'rgb(255, 0, 0)');
        })
        it("accept a username and password", ()=>{
            cy.visit('./index.html')
            cy.get('input[id="username"]').type("abc").should('have.value', "abc");
            cy.get('input[id="password"]').type("abc").should('have.value','abc');
        })
        it("Click on Log in", ()=>{
            cy.get('#submit').click();
        })
        it("Check Answers", ()=>{
            cy.get('#answers').should('have.text', 'User Name: abcPassword: abc');
        })
    })
})