import {Selector} from 'testcafe'

const developerName= Selector("#developer-name");
const osOption= Selector("#windows");
const submitButton= Selector("#submit-button")



fixture("First fixture")
  .page("https://devexpress.github.io/testcafe/example/")

test("First Test",async t =>{
        await t
            .typeText(developerName, "Adarsh")
            .click(osOption)
            .click(submitButton);

    });