## Read All Users Interested In Jobs

**Auth required** : YES

* [GET All Interested Users] : `GET /api/companies/:company_id/matches`

# Success Response

**Code** : `200 Success`

```json
[
   {
    "name": "Humberto Reichel",
    "email": "Ceasar5@yahoo.com",
    "position_name": "International Web Officer",
    "type": "Part-Time"
  },
  {
    "name": "Bettie Balistreri",
    "email": "Federico21@gmail.com",
    "position_name": "International Web Officer",
    "type": "Part-Time"
  }
]
```

# Error Response

```json
{
 	"message": "Error getting matches"
}
```