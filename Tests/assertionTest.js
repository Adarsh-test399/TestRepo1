import {Selector} from 'testcafe'

const developerName= Selector("#developer-name");
const osOption= Selector("#windows");
const submitButton= Selector("#submit-button")



fixture("First fixture")
  .page("https://devexpress.github.io/testcafe/example/")

test("First Test",async t =>{
        await t
            .expect(developerName.value).eql('','input is empty')
            .typeText(developerName, "Adarsh")
            .expect(developerName.value).eql('Adarsh','input contain Adarsh')
            .click(osOption)
            .click(submitButton);
    });