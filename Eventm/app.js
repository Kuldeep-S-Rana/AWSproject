// Define the API Gateway URL
// Replace "http://yougateway" with the actual URL of your AWS API Gateway endpoint
const apiGatewayURL = "http://yougateway"; 

// Get a reference to the form element in the HTML document
const MyForm = document.querySelector("form");

// Add an event listener for the "submit" event on the form
// This function will be triggered when the user submits the form
MyForm.addEventListener("submit", function (event) {
    // Prevent the default behavior of form submission (page reload)
    event.preventDefault();

    // Collect form data from the input fields
    // Fetch Event ID from the first input field
    const fetchedEventID = event.target[0].value;

    // Fetch Event Name from the second input field
    const fetchedEventName = event.target[1].value;

    // Fetch Event Date from the third input field
    const fetchedEventDate = event.target[2].value;

    // Create a JSON object containing the form data
    const formData = {
        eid: fetchedEventID,   // Event ID
        ename: fetchedEventName, // Event Name
        edate: fetchedEventDate, // Event Date
    };

    // Send the collected data to the API Gateway using a POST request
    fetch(apiGatewayURL, {
        method: "POST", // HTTP method
        headers: {
            "Content-Type": "application/json", // Set the content type to JSON
        },
        body: JSON.stringify(formData), // Convert the formData object to a JSON string
    })
    .then((response) => {
        // Check if the response status is OK (status code 200)
        if (response.ok) {
            // Parse the JSON response from the API
            return response.json();
        } else {
            // Throw an error if the response is not OK
            throw new Error("Failed to send data to API Gateway");
        }
    })
    .then((data) => {
        // Log the API response data to the console
        console.log("Data successfully sent to API Gateway:", data);

        // Show a success message to the user
        alert("Event registered successfully!");
    })
    .catch((error) => {
        // Log any errors to the console
        console.error("Error:", error);

        // Show an error message to the user
        alert("Failed to register event. Please try again.");
    });
});
