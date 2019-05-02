# CS52 Workshops:  TITLE OF YOUR WORKSHOP

![](http://i.giphy.com/eUh8NINbZf9Ys.gif)

Brief motivation here as well as in presentation

## Overview

Summary of what we're about to do.

## Setup

Any necessary setup steps

## Step by Step

* Explanations of the what **and** the why behind each step. Try to include:
  * higher level concepts
  * best practices

Remember to explain any notation you are using.

```javascript
/* and use code blocks for any code! */
```

![screen shots are helpful](img/screenshot.png)

:sunglasses: GitHub markdown files [support emoji notation](http://www.emoji-cheat-sheet.com/)

Here's a resource for [github markdown](https://guides.github.com/features/mastering-markdown/).

### Part 2: Add an Editor

At this point you should have a basic application which can add and delete todo items. 
![img of progress here](./img/part1_done.png)

But, what if we had an editor to make our notes pretty?

![img of editor here](./img/tinymce.png)

First, install the *tinymce* editor.

`yarn add vue-tinymce-editor`

Great! Now import it in `ToDo.vue`.

```javascript
import tinymce from ‘vue-tinymce-editor;
```

You’ll also need to list it as a component being used.

```javascript
components {
  ToDoItem,
  tinymce,
},
```

Go ahead and delete your `input` tag and replace it with the fancy new `tinymce` tag.

```
<tinymce id="d1"
           :other_options="tinyOptions"
           v-model="todo"
           v-on:keyup.enter="createNewToDoItem"
></tinymce>
```

Finally, specify some options for styling the component in the `data` function. Your data function should look like this now.

```javascript
data() {
     return {
         list: [
             {
               id: 1,
               text: 'Stretch Break'
             },
             {
               id: 2,
               text: 'Wait 15 minutes'
             },
             {
               id: 3,
               text: 'Stretch Break(again)'
             }
         ],
         todo: '',
         logo: Logo,
         tinyOptions: {
                   'height': 200
           },
     }
```

Whoa! We have a fancy new editor now instead of the plain ol’ input tag. You should be able to add and delete different ToDo items with the new editor. But… the ToDo items don’t keep the styling that the *tinymce* has. Well, don’t fret, Vue has a special attribute for this: `v-html`. Remove the inner html and dd this property to the `<p>` tag in `ToDoItem.vue`.

```javascript
<p class="ToDoItem-Text" v-html="todo.text"></p>

```

Now your notes can be edited in the editor AND look good when added. That’s it!


## Summary / What you Learned

* [ ] can be checkboxes

## Reflection

*2 questions for the workshop participants to answer (very short answer) when they submit the workshop. These should try to get at something core to the workshop, the what and the why.*

* [ ] 2 reflection questions
* [ ] 2 reflection questions


## Resources

* cite any resources
