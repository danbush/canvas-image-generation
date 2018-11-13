"use strict";

const helloWorld = new Vue({
  el: '#helloVue',
  data: {
    title: "Hey, what about ham!",
    message: "This is a message"
  }
});

const example = new Vue({
  el: '#example',
  data: {
    title: "Hey– what about clams",
    message: "This is another message",
    name: "Horses",
    img: {
      src: "https://placeimg.com/200/200/animals",
      alt:"fuck off"
    }
  }
});