require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const githubData ={
  "login": "Aryanvishwakarma01",
  "id": 177709019,
  "node_id": "U_kgDOCpef2w",
  "avatar_url": "https://avatars.githubusercontent.com/u/177709019?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Aryanvishwakarma01",
  "html_url": "https://github.com/Aryanvishwakarma01",
  "followers_url": "https://api.github.com/users/Aryanvishwakarma01/followers",
  "following_url": "https://api.github.com/users/Aryanvishwakarma01/following{/other_user}",
  "gists_url": "https://api.github.com/users/Aryanvishwakarma01/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Aryanvishwakarma01/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Aryanvishwakarma01/subscriptions",
  "organizations_url": "https://api.github.com/users/Aryanvishwakarma01/orgs",
  "repos_url": "https://api.github.com/users/Aryanvishwakarma01/repos",
  "events_url": "https://api.github.com/users/Aryanvishwakarma01/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Aryanvishwakarma01/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Aryan Vishwakarma",
  "company": "Student",
  "blog": "",
  "location": "Chandigarh",
  "email": null,
  "hireable": true,
  "bio": "I am a passionate web developer with a strong foundation in HTML, CSS, and JavaScript. Alongside web development, I have advanced programming skills in C, C++, ",
  "twitter_username": null,
  "public_repos": 17,
  "public_gists": 0,
  "followers": 2,
  "following": 3,
  "created_at": "2024-08-07T04:24:40Z",
  "updated_at": "2025-07-06T11:18:28Z"
}
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/github', (req, res)=>{
    res.json(githubData)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})