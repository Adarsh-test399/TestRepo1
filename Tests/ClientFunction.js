import {Selector,ClientFunction} from 'testcafe'

const developerName= Selector("#developer-name");
const osOption= Selector("#windows");
const submitButton= Selector("#submit-button")

const getPageURL= ClientFunction(()=> window.location.href)

fixture("First fixture")
  .page("https://devexpress.github.io/testcafe/example/")

test("First Test",async t =>{
        await t
            .typeText(developerName, "Adarsh")
            .click(osOption)
            .click(submitButton)
            .expect(getPageURL()).contains('thank-you');

    });