---
title: Create a Project
sidebar_position: 3
---

This endpoint creates a new project within an organization. It's used to programmatically set up a new Supabase instance, complete with a database and API keys.

```POST```  /v1/projects

### Request body parameters
The request body should be a JSON object with the following fields:

|Parameter|Required|Type|Description|
|---------|--------|-----|-----------|
|```db_pass```| Yes | string| secure password for the database
|```name```| Yes | string| The name of the project
|```organization_id```| Yes | string| Slug of your organization.
|```region```| Yes | enum| The deployment region. Options: `us-east-1`, `eu-west-1`, `ap-southeast-1`. Defaults to `us-east-1`.
|```desired_instance_size```| No | enum| The desired size of the instance.
|```template_url```| No | string| The URL of the project template.
|```plan```| No | enum| **Deprecated** The plan for the project.
|```kps_enabled```| No | boolean| **Deprecated**


### Sample response

```
{
  "id": "lorem",
  "organization_id": "lorem",
  "name": "lorem",
  "region": "us-east-1",
  "created_at": "2023-03-29T16:32:59Z",
  "status": "INACTIVE"
}
```


### Response Schema
The table below describes the properties in the response body.

|Parameter|Required|Type|Description|
|---------|--------|-----|-----------|
|```id```| Yes | string| ID of your project. 
|```name```| Yes | string| The name of the project
|```organization_id```| Yes | string| Slug of your organization.
|```region```| Yes | enum| Region of your project. Example: us-east-1.
|```created_at```| Yes | string| Creation timestamp. Example: 2023-03-29T16:32:59Z.
|```status```| Yes | string|The current status of the project. Accepted values: ```INACTIVE```, ```ACTIVE_HEALTHY```, ```ACTIVE_UNHEALTHY```, ```COMING_UP```, ```UNKNOWN```, ```GOING_DOWN```, ```INIT_FAILED```, ```REMOVED```, ```RESTORING```, ```UPGRADING```, ```PAUSING```, ```RESTORE_FAILED```, ```RESTARTING```, ```PAUSE_FAILED```, ```RESIZING```.


### Response Codes
- ```200 OK```: The project was successfully deleted.

- ```401 Forbidden```: The request does not include a valid access token or the provided credentials are incorrect.