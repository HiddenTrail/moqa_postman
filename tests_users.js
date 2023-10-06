pm.test("Response has 10 users", function () {
    let jsonData = pm.response.json();

    pm.expect(jsonData.length).to.eql(10);

    for (let i = 0; i < 10; i++) {        
        pm.expect(jsonData[i].id).to.eql(i+1);
    }
});
