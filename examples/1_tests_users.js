// GET {{URL}}/users

let jsonData = pm.response.json();

const expectedUsername = "Clementine Bauch"
const expectedUserId = 3

pm.test("Response has 10 users", function () {
    pm.expect(jsonData.length).to.eql(10);

    for (let i = 0; i < 10; i++) {
        pm.expect(jsonData[i].id).to.eql(i+1);
    }
});

let actualUser = jsonData.find( jsonData => jsonData.name == expectedUsername)

pm.test("Verify UserId", function () {
    pm.expect(actualUser.id).to.eql(expectedUserId);
});

pm.collectionVariables.set("testUserId", actualUser.id);
console.log(`Test user Id is: ${pm.collectionVariables.get("testUserId")}`)
console.log(`Test user data is: ${JSON.stringify(jsonData[pm.collectionVariables.get("testUserId") - 1])}`);
