### Deployment Instructions

```
aws configure

brew install aws-sam-cli   # MacOS

sam build
sam deploy --guided

* Enter a stack name (e.g., lambda-rds-benchmark)
* Accept default settings
* AWS SAM will deploy Lambda + API Gateway
```

### Testing the API

curl -X GET "https://your-api-id.execute-api.region.amazonaws.com/benchmark"


for i in {1..10}; do
    curl -X GET "https://your-api-id.execute-api.region.amazonaws.com/benchmark" &
done
