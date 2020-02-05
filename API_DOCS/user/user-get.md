## Read All Users

**Auth required** : YES

* [GET All Users] : `GET /api/users/`

# Success Response

**Code** : `201 CREATED`

You will get a lot of users

```json
[
    {
    "id": 1,
    "name": "Mr. Billy Mills",
    "email": "Krista.Pagac@hotmail.com",
    "location": "North Emmyshire",
    "personal_skills": "cross-platform",
    "personal_interests": "USB",
    "experiences": [
      {
        "job_title": "Technician",
        "company_name": "Dare and Sons"
      },
      {
        "job_title": "Orchestrator",
        "company_name": "Willms - Donnelly"
      },
      {
        "job_title": "Developer",
        "company_name": "Pacocha, Rodriguez and Littel"
      },
      {
        "job_title": "Manager",
        "company_name": "Runte - Yost"
      },
      {
        "job_title": "Developer",
        "company_name": "Weimann - Welch"
      }
  }
  ...
]
```

# Error Response

```json
{
 	"message": "could not find user"
}
```


**Auth required** : YES

* [GET A User] : `GET /api/users/:id`

## Success Response

**Code** : `200 OK`

```json
{
    "id": 1,
    "name": "Mr. Billy Mills",
    "email": "Krista.Pagac@hotmail.com",
    "location": "North Emmyshire",
    "personal_skills": "cross-platform",
    "personal_interests": "USB",
    "experiences": [
      {
        "job_title": "Technician",
        "company_name": "Dare and Sons"
      },
      {
        "job_title": "Orchestrator",
        "company_name": "Willms - Donnelly"
      },
      {
        "job_title": "Developer",
        "company_name": "Pacocha, Rodriguez and Littel"
      },
      {
        "job_title": "Manager",
        "company_name": "Runte - Yost"
      },
      {
        "job_title": "Developer",
        "company_name": "Weimann - Welch"
      }
  }
```


## Error Response

**Code** : `400 Bad Request`

```json
{
 	"message": "could not find user"
}
```