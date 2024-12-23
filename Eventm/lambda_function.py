import boto3

def lambda_handler(info, context):
    # Logic to collect 3 details from the JavaScript file (front end)
    # `info` is expected to contain those 3 details: eventid, eventname, and eventdate
    receivedEventID = info['eid']
    receivedEventName = info['ename']
    receivedEventDate = info['edate']

    # Connect to DynamoDB
    myDynamoDB = boto3.resource('dynamodb')
    myTable = myDynamoDB.Table("event_management_table")

    # Insert item into DynamoDB table
    myTable.put_item(
        Item={
            "eventid": receivedEventID,
            "eventname": receivedEventName,
            "eventdate": receivedEventDate
        }
    )
