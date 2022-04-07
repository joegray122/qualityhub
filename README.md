# Qualityhub

### Current status

Firstly there is an *ingestion* service, this creates a local api endpoint `/cypress/results`
on port `8000`, that accepts post requests matching cypress test result format.

*testApp* is the mock project we are using to test our quality hub project, so far we have
cypress added and amended the `plugins/index.js` to post test results to our *ingestion* 
service using cypress' in built `after:run` feature.

Finally, we have our webapp which will provide the frontend for our project. Currently
this is a simple webapp created using `create-react-app`, `mui` and `recharts` to give
a vague outline of what our test results might be diaplyed as - this is all based on mock
data so far however.
