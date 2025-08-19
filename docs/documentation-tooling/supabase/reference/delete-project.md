---
title: Delete a Project
sidebar_position: 2
---

```DELETE``` `v1/projects/{ref}`

This endpoint permanently deletes a project. This action is irreversible and will remove all associated data, including the database, API keys, and storage files.

### Path parameter
The request requires the following path parameter:

|Parameter|Required|Type|Description|
|---------|--------|-----|-----------|
|```ref```| Yes | string| The reference to the project

### Sample response
A successful response returns a ```200 OK``` status code  with the ID, reference, and name of the deleted project.

```
{
  "id": 42,
  "ref": "lorem",
  "name": "lorem"
}

```

### Response Schema

|Parameter|Required|Type|Description|
|---------|--------|-----|-----------|
|```id```| Yes | integer| ID of your project. 
|```ref```| Yes | string| The reference to the proejct
|```organization_id```| Yes | string| Slug of your organization.


### Response Codes
- ```200 OK```: The project was successfully deleted.

- ```403 Forbidden```: The authenticated user does not have permission to delete the project.