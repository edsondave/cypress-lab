const USERNAME = 'pepitoperez59';
const EMAIL = USERNAME + '@example.com';
const PASSWORD = '87654321';
const CHALLENGE_NAME = 'My Challenge';
const CHALLENGE_SHORT_NAME = 'mc';
const CHALLENGE_SUMARY = 'Challenge sumary.';
const CHALLENGE_DESCRIPTION = 'Challenge description.';
const HABIT = "Habit sample";
const TASK = "Task sample";

context('Sign up tests', () => {

    it('Sign up a new user', () => {
        cy.visit('https://habitica.com/static/home')
		
        cy.get('#usernameInput').type(USERNAME).should('have.value', USERNAME);
		cy.get('#intro-signup>div>div>div:nth-child(2)>form>input:nth-child(3)').type(EMAIL);
		cy.get('#intro-signup>div>div>div:nth-child(2)>form>input:nth-child(4)').type(PASSWORD);
		cy.get('#intro-signup>div>div>div:nth-child(2)>form>input:nth-child(5)').type(PASSWORD);
		
        cy.get('.btn-info[type="submit"]').click();
		
        cy.contains("Bienvenido a").should('be.visible');
		
		cy.get('div.section:nth-child(3) > div:nth-child(1) > div:nth-child(3) > button:nth-child(1)').click();
		cy.get('.next-outer').click();
		cy.get('#avatar-modal___BV_modal_body_ > div.container.interests-section > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div').click();
		cy.get('.next-outer').click();
		cy.get('a.btn').click();
		
    });
	
	it('Log-in Test', () => {
		
        cy.visit('https://habitica.com/login')
		
        cy.get('#usernameInput').type(USERNAME).should('have.value', USERNAME);
		cy.get('#passwordInput').type(PASSWORD);
		
        cy.get('#login-form > div:nth-child(8) > button').click();
		
    });
	
    it('Create a Challege Test', () => {
        		
		cy.get('#menu_collapse>ul>li:nth-child(7)>a').click();
		cy.get('#app > div.container-fluid > div.sticky > div > div > div > div.col-10.standard-page > div.row.header-row > div.col-md-4 > button').click();
				
		cy.get('#challenge-modal___BV_modal_body_ > div > div:nth-child(1) > input').type(CHALLENGE_NAME);
		cy.get('#challenge-modal___BV_modal_body_ > div > div:nth-child(2) > input').type(CHALLENGE_SHORT_NAME);
		cy.get('#challenge-modal___BV_modal_body_ > div > div:nth-child(3) > textarea').type(CHALLENGE_SUMARY);
		cy.get('#challenge-modal___BV_modal_body_ > div > div:nth-child(4) > textarea').type(CHALLENGE_DESCRIPTION);
		cy.get('#challenge-modal___BV_modal_body_>div>div:nth-child(5)>select').select('Desafíos públicos');
		
		cy.get('#challenge-modal___BV_modal_body_>div>div.row.footer-wrap>div.col-12.text-center.submit-button-wrapper>button').click();
		cy.get('#challenge-modal___BV_modal_header_ > button').click();
		
    });
	
	it('Create a Habit Test', () => {
        
		cy.get('#menu_collapse>ul>li:nth-child(1)>a').click();
		cy.get('#app>div.container-fluid>div.sticky>div>div>div.row.tasks-columns>div.tasks-column.col-lg-3.col-md-6.habit>div.tasks-list>textarea').type(HABIT + '{enter}');
		
    });
	
	it('Create a Task Test', () => {
        
		cy.get('#app>div.container-fluid>div.sticky>div>div>div.row.tasks-columns>div.tasks-column.col-lg-3.col-md-6.daily>div.tasks-list>textarea').type(TASK + '{enter}');		
	
    });
	
});