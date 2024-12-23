
{
  "eid": 2,
  "ename": "Dancing",
  "edate": "25-05-1997"
}

import boto3

def lambda_handler(info, context):
    # Logic to collect 3 details from javascript file(front end)
    # info ==> actually have those 3 details(eventid, eventname and eventdate)
    print(info)
    receievedEventID = info['eid']
    receievedEventName = info['ename']
    receievedEventDate = info['edate']

    # connect to DynamoDB
    myDynamoDB = boto3.resource('dynamodb')
    myTable = myDynamoDB.Table("event_management_table")
    

    myTable.put_item(
       Item = { "eventid": receievedEventID,
       "eventname": receievedEventName,
       "eventdate": receievedEventDate
       }
    )
