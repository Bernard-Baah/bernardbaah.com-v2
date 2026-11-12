---
date: '1'
title: 'Highly Available Multi-Tier Web App'
cover: './cover.png'
github: 'https://github.com/Bernard-Baah/aws-architect-portfolio/tree/main/01-ha-web-app'
external: ''
cta: ''
tech:
  - Terraform
  - CloudFront
  - AWS WAF
  - Auto Scaling
  - RDS Multi-AZ
---

A business-critical web app built to survive the loss of an Availability Zone with no manual intervention. CloudFront and AWS WAF front an internal load balancer, an Auto Scaling group and RDS PostgreSQL Multi-AZ, with no public endpoint inside the VPC. Measured: **100% availability** through graceful instance replacement, 96.5% through a hard instance crash, and a **40-second** database failover.
