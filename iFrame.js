fixture("Iframe fixture")
.page("https://the-internet.herokuapp.com/iframe")

const nameInput= Selector("#developer-name");

test("Iframe test",async t =>{
        await t
            .switchToIframe(IframeName)
            .click(textarea)
            .presskey('ctrl+a delete')
            .typeText(textarea,'Hello from Adarsh') 
            .expect(textarea.innerText).contains('Adarsh')
            .switchToMainWindow();   
    });