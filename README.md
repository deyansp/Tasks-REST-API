# Link to App
[Sandbox Link](https://n65td.sse.codesandbox.io/)

# Overview 
The API receives queries through URL parameters and returns JSON data as a response. It was made using Node.js with the Express framework and based on the MVC architecture.

# Supported URL Requests and Examples
The following paths are supported:
 * /tasks
 * /tasks/:id
 * /tasks/search/:query

* Return a list of all tasks 
`/tasks`

* Return a specific task based on ID
`/tasks/2`

* Return all tasks that match a search term in their name or description
`/tasks/search/dslr`

# Sample Output

Upon a successful request and provided that there are tasks that match the set critirea, the API will return data in the following format:

```javascript
[{"id":2,"name":"Fix bugs","description":"This one never ends, does it?","due_date":"2021-08-06T00:05:00.000Z"}]
```

If there is an issue or no results the API will return an error message in the following format:

```javascript
{"error":"Task not found"}
```



