// GET {{URL}}/users/{{testUserId}}/posts?id={{testPostId}}

let jsonData = pm.response.json();


pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Response has correct userId", function () {
    pm.expect(jsonData[0].userId).to.eql(pm.collectionVariables.get("testUserId"));
});

pm.test("Response has correct postId", function () {
    pm.expect(jsonData[0].id).to.eql(pm.collectionVariables.get("testPostId"));
});

pm.test("Response has only one post", function () {
    pm.expect(jsonData.length).to.eql(1)
});
