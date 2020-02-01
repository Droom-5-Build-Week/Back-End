# Back-End API Doc

## Open Endpoints

Open endpoint requires no authentication
** Auth required ** : NO
* [Register] : `POST /api/auth/register`
** Data Example **
```json
{
	"email": "bigby@example.com",
	"password": "yourpasswordhere"
}
```
## Success Response
** Code ** : `201 CREATED`
```json
{
	"email": "bigby@example.com",
	"password": "your-password-will-be-salted-and-hashed-for-security"
}
```

## Error Response
** Condition ** : If 'email' and 'password' combination is wrong

```json
{
 	"message": "error..."
}
```
** Auth required ** : NO
* [Login] : `POST /api/auth/login`
** Data Example **
```json
{
	"email": "bigby@example.com",
	"password": "yourpasswordhere"
}
```

## Success Response
** Code ** : `200 OK`
```json
{
	"token": "tokenwillbereallylongandhaverandomcharactes"
}
```

## Error Response
** Condition ** : If 'email' and 'password' combination is wrong
** Code ** : `400 Bad Request`
```json
{
 	"message": "error...with specified error message"
}
```


### Account related

Endpoints for view and manipulating the Accounts that the Authenticated User has permission to access
