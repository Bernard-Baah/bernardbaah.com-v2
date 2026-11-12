---
date: '2'
title: 'Serverless Event-Driven Pipeline'
cover: './cover.png'
github: 'https://github.com/Bernard-Baah/aws-architect-portfolio/tree/main/02-serverless-pipeline'
external: ''
cta: ''
tech:
  - Terraform
  - Step Functions
  - Lambda
  - DynamoDB
  - Python
---

Validates data center rack-inventory CSVs the moment they are uploaded, catching duplicate asset tags, missing serials and double-booked rack units, with no servers to run. S3 events start a Step Functions workflow; results land in DynamoDB behind an IAM-authorized query API. A **500-file burst finished with zero files lost** at about $0.19 per 1,000 files, backed by 38 unit tests and a dead-letter-queue incident drill.
