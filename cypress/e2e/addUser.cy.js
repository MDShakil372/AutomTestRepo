/*
Task 1: Automate API testing. 
Write an automation test using postman or any tool of your choice.
Endpoint: https://gorest.co.in/
Resource: POST /public/v2/users
Run a http POST on the above endpoint. 
Create a new user and assert if you can find the newly created user in the Get user endpoint (https://gorest.co.in/public/v2/users/7014306)
Assert to check for the presence of the various properties in the returned object
*/

describe("To Validate 'POST, GET API call for users", function () {

    it("Create new user & validate it using GET call - Record should Returns 200 Response", function () {
        cy.request({
          method: 'POST',
          url: `http://gorest.co.in/public/v2/users`,     
        }).then((response) => {
        expect(response.status).to.eq(200);
         // Check if the first API response status is 200
         if (response.status === 200) {
          // Run the second API request
          cy.request({
            method: 'GET',
            url: `http://gorest.co.in/public/v2/users/7029971`,
           
          }).then((secondResponse) => {  
            expect(secondResponse.status).to.eq(200);	  
            // Validate specific data in the response
                let list = secondResponse.body;     
                expect(list.name).to.eql("Harita Singh")   
                expect(list.email).to.eql("harita_singh@corwin.test")
                expect(list.gender).to.eql("female")
          });
        } else {
          console.log('First API request did not return a 200 status.');
        }
      });
      });
      
      })