* **src/constant.js** has main details about you.

To make a post:
* make new file under **src/posts** should be js file.
* copy template from **src/post_template** and past it into you new file
* change title and time, inside body write regular **html**
* change `title` `time`, `body` variable name (just add number at the end).
* in **src/posts/post_manager.js**
* * import your new file `import {title2, time2, body2} from './new_post'`
* * append it to **posts** array:
```js
const posts = [
    {title:title1, time:time1, body:body1},
    {title:title2, time:time2, body:body2}
]
```
