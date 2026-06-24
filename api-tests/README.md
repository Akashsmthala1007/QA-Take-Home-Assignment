**I have used the following APIs for the automation**<br>
**1. https://reqres.in/api/test-suite/collections/users/records** --> **Postive Testcase**<br>
**2. https://reqres.in/api/login** --> **Negative Testcase**<br>

**Payload Used for the Positive Scenario**<br>
{
  name: "Jane Doe",
  email: "jane@example.com",
  role: "admin"
}; <br>

**Payload Used for the Negative Scenario**<br>
{password: "cityslicka"}

**Framework Used -- Playwright Framework with JavaScript**<br>

**To run the test, use the following command** --> **npx playwright test tests/apitests.spec.js**<br>
**To view the report, use the following command** --> **npx playwright show-report**<br>
