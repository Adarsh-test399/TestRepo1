fixture("Hover Test")
  .page("https://devexpress.github.io/testcafe/example/");

test("Hover Test",async t =>{
        await t
            .hover('input#populate');
            
    });