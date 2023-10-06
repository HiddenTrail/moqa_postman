pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Response has access token and token type", function () {
    let responseText = pm.response.text()
    pm.expect(responseText).to.include("access_token");
    pm.expect(responseText).to.include("token_type");
});

let responseJson = pm.response.json();
pm.variables.set("AccessToken", responseJson.access_token);
pm.variables.set("TokenType", responseJson.token_type);


console.log(`AccessToken is: ${pm.variables.get("AccessToken")}`);
