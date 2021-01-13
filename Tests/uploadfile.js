import {Selector} from 'testcafe'

const fileUpload= Selector('input#file-upload');
const uploadFileButton= Selector('input#file-submit.button');

fixture("File Upload Fixture")
  .page("https://the-internet.herokuapp.com/upload")

test("First Test",async t =>{
        await t
            .setFileToUpload(fileUpload,'../../upload/logo.png')
            .click(uploadFileButton);
        
});