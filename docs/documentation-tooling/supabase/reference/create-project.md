---
title: Create a Project
sidebar_position: 3
---

```POST``` /v1/projects

### Request body Parameters
- ```db_pass```(required):string.  Secure password for database
- ```name``` (required): string. The name of the project
- ```organization_id``` (required): enum The ID of the organization.
- ```region``` (optional): enum The deployment region (defaults to us-east-1).
- ```desired_instance_size``` (optional)
- ```templace_url```: string