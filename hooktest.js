fixture("First fixture")
  .page("https://devexpress.github.io/testcafe/example/")
  .beforeEach(async t=>{
      await t 
       .maximizeWindow()
       .setTestSpeed(0.1)
       .setPageLoadTimeout(0);   
  });

test
.page("https://devexpress.github.io/testcafe/example/")
("First Test",async t =>{
        await t
            .typeText("#developer-name", "TAU")
            .click("#windows")
            .click("#submit-button");

    });