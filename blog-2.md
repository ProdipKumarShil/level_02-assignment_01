## Why is any labeled a "type safety hole," and why is unknown the safer choice for handling unpredictable data? Explain the concept of type narrowing.

I think any is wrost type in typescript. because when we use any the typescript compailer skip the type checking. unkwon is more safer option because we doesn't use it driectly.

```
const name: any = 1212
```

we give the name type string but we can assign number on it. that's why it called 'type saftey hole'