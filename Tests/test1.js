import {Selector} from 'testcafe'

const remotetesting= Selector("#remote-testing");
fixture("First fixture")
  .page("https://devexpress.github.io/testcafe/example/");

test("First Test",async t =>{
        await t
            .expect (Selector [id=remotetesting])
            .typeText("#developer-name", "TAU")
            .click("#windows")
            .click("#submit-button");

    });