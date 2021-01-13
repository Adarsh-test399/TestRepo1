fixture ("navigate example")
  .page("https://devexpress.github.io/testcafe/example/")

test("navigate test",async t =>{
        await t
        .navigateTo ("www.google.com");
})