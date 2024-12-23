
// On the button we need to perform click action / event
// once i click on that then i collect all the 3 details

const MyForm = document.querySelector("form")

MyForm.addEventListener("submit", function(output)
{
    output.preventDefault()
    let fetchedEventID = output.target[0].value//3
    let fetchedEventName = output.target[1].value//Playing
    let fetechedEventDate = output.target[2].value//----

    // Connect this front end to api gateway
    // https://dhadypeao9.execute-api.ap-south-1.amazonaws.com/development

    fetch("https://dhadypeao9.execute-api.ap-south-1.amazonaws.com/development/register", {
        method: "POST",
        body: { "eid": fetchedEventID, "ename": fetchedEventName,"edate": fetechedEventDate  }
    })
})
