## Read All Companies

**Auth required** : YES

* [GET All Companies] : `GET /api/companies/`

# Success Response

**Code** : `201 CREATED`

You will get a lot of users

```json
{
    "id": 48,
    "email": "Abigail_Kutch@yahoo.com",
    "..."
}
```

# Error Response

```json
{
 	"message": "could not find user"
}
```


**Auth required** : YES

* [GET A Company] : `GET /api/companies/:id`

## Success Response

**Code** : `200 OK`

```json
{
    
}
```


## Error Response

**Code** : `400 Bad Request`

```json
{
 	"message": "could not find company"
}
```