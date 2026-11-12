---
date: '4'
title: 'Secure Multi-Account Landing Zone'
cover: './cover.png'
github: 'https://github.com/Bernard-Baah/aws-architect-portfolio/tree/main/04-landing-zone'
external: ''
cta: ''
tech:
  - Terraform
  - AWS Organizations
  - SCPs
  - GuardDuty
  - Security Hub
  - Identity Center
---

An existing AWS Organization adopted into Terraform and hardened: guardrail SCPs, an organization CloudTrail into a locked Log Archive account, GuardDuty, Config and Security Hub run from an Audit account, and Identity Center single sign-on. Tested: even an admin is **denied turning off Config** by the SCP, and Security Hub failed checks fell from **236 to 152** (critical 26 to 12) in three days.
