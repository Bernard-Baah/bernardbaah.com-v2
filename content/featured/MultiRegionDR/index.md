---
date: '3'
title: 'Multi-Region Disaster Recovery'
cover: './cover.png'
github: 'https://github.com/Bernard-Baah/aws-architect-portfolio/tree/main/03-multi-region-dr'
external: ''
cta: ''
tech:
  - Terraform
  - CloudFront
  - RDS Read Replica
  - Secrets Manager
  - Warm Standby
---

A warm standby across us-east-1 and us-west-2, built so the web app survives the loss of an entire AWS Region. CloudFront origin failover reroutes each request with no DNS wait, and a cross-region RDS replica is promoted by a timed script. Game day: **100% availability** through a primary-region outage, and writable again in **9 min 15 s** against a 15-minute RTO target.
