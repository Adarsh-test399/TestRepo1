fixture("Speed test fixture")
.page("https://devexpress.github.io/testcafe/example/")

const nameInput= Selector("#developer-name");

test("Set Test Speed test",async t =>{
        await t
            .setTestSpeed(0.01)
            .typeText(nameInput, 'Peter')
            .typeText(nameInput, 'Parker')
            
    });