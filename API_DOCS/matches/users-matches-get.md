## Read All Users Matches

**Auth required** : YES

* [GET All Liked Jobs] : `GET /api/users/:user_id/matches`

# Success Response

**Code** : `200 Success`

```json
[
    {
    "name": "Koss - Bogisich",
    "position_name": "Dynamic Functionality Director",
    "type": "Contract",
    "job_bio": "Exercitationem aut laboriosam autem qui ab dolores ut asperiores et. Inventore qui dolores inventore tempore ad expedita. Recusandae tempore ut voluptatibus ducimus. Molestiae libero consequuntur exercitationem dolores. Voluptates quas laudantium.",
    "skills": "solid state"
  },
  {
    "name": "Osinski - Aufderhar",
    "position_name": "International Web Officer",
    "type": "Part-Time",
    "job_bio": "Aut numquam iure impedit nihil nisi. Dolore commodi dolorum accusantium. Iure pariatur dignissimos. Perspiciatis qui alias similique eos culpa cupiditate quas. Provident tenetur magni et aut consequatur. Saepe quis quis ipsum.",
    "skills": "redundant"
  },
  {
    "name": "Rodriguez - Schiller",
    "position_name": "National Solutions Coordinator",
    "type": "Contract",
    "job_bio": "Ea sint rem. Illo nesciunt et quo omnis. Ea placeat ipsam. Vel ut sunt molestiae quo reiciendis eum. Libero ad voluptas ea deleniti quibusdam praesentium delectus ut nostrum. Debitis dolore rem et qui.",
    "skills": "auxiliary"
  }
]
```

# Error Response

```json
{
 	"message": "Error getting matches for user"
}
```


**Auth required** : YES

* [GET One Match By Id] : `GET /api/users/:user_id/matches/:match_id`

## Success Response

**Code** : `200 OK`

```json
{
    "name": "Koss - Bogisich",
    "position_name": "Dynamic Functionality Director",
    "type": "Contract",
    "job_bio": "Exercitationem aut laboriosam autem qui ab dolores ut asperiores et. Inventore qui dolores inventore tempore ad expedita. Recusandae tempore ut voluptatibus ducimus. Molestiae libero consequuntur exercitationem dolores. Voluptates quas laudantium.",
    "skills": "solid state"
}
```


## Error Response

**Code** : `400 Bad Request`

```json
{
 	"message": "Error getting match for user"
}
```