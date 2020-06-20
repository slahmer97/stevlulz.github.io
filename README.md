* **src/constant.js** has main details about you.

To make a post:
* make new file under **src/posts** should be js file.
* copy template from **src/post_template** and past it into you new file
* change title and time, inside body write regular **html**
* change `title` `time`, `body` variable name (just add number at the end).
* in **src/posts/post_manager.js**
* * import your new file `import {title2, time2, body2} from './new_post'`
* * append it to **posts** array on the top:
```js
const posts = [
    {title:title2, time:time2, body:body2},
    {title:title1, time:time1, body:body1},
]
```
* For math eq we are using **mathjax** checkout **post2.js** for example you may also consider [this](http://asciimath.org/).
