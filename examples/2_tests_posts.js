// GET {{URL}}/posts

let jsonData = pm.response.json();
let posts = []

const expectedPostTitle = "a quo magni similique perferendis"
const expectedPostId = 30

pm.test("Response has 100 posts", function () {
    pm.expect(jsonData.length).to.eql(100);

    for (let i = 0; i < 100; i++) {
        pm.expect(jsonData[i].id).to.eql(i+1);
        if (jsonData[i].userId == pm.collectionVariables.get("testUserId")) {
            posts.push(jsonData[i].id)
        }
    }
});

console.log(`Posts from the test user are: ${posts}`)

let actualPost = jsonData.find( jsonData => jsonData.title == expectedPostTitle)

pm.test("Verify PostId", function () {
    pm.expect(actualPost.id).to.eql(expectedPostId);
});

pm.collectionVariables.set("testPostId", actualPost.id);
console.log(`Test post Id is: ${pm.collectionVariables.get("testPostId")}`)
console.log(`Test post data is: ${JSON.stringify(jsonData[pm.collectionVariables.get("testPostId") - 1])}`);
