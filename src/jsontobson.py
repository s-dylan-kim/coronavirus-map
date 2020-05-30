import json
import pymongo
from bson import BSON

json_string = ""
# with open('smallerlocationhistoryex.json') as json_file:
#     parsed_json = json.loads(json_file.read())
#     for p in parsed_json['locations']:
#         # print("latitude: " + str(p['latitudeE7']))
#         # print("longitude: " + str(p['longitudeE7']))
#         # print(" ")
#         json_string += p

with open('smallerlocationhistoryex.json') as json_file:
    for i, line in enumerate(json_file):
        # append the parsed IO string to the JSON string
        json_string += line

try:
    json_docs = json.loads(json_string)

    # loads() method returns a Python dict
    print("json_docs TYPE:", type(json_docs))

    # return a list of all of the JSON document keys
    print("MongoDB collections:", list(json_docs.keys()))

except ValueError as error:
    print("json.loads() ValueError for BSON object:", error)
    quit()

for key, val in json_docs.items():
    for i, doc in enumerate(json_docs[key]):
        try:
            # print the original JSON document
            print("\ndoc:", doc)

            # encode the document using the BSON library
            data = BSON.encode(doc)
            print("BSON encoded data:", type(data))

            # print the result of the BSON encoding
            print("data:", data)

            # decode the BSON document back to a Python dict object
            decode_doc = BSON.decode(data)
            print("decode_doc:", decode_doc)

        except Exception as error:
            # catch any BSON encoding or decoding errors
            print("enumerate() JSON documents ERROR:", error)
