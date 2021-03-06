// ๊ธฐ๋ณธ ํ์
const app = new Vue({
  el: "#app",
  data: {
    message: "Hello, Vue !",
  },
});

// ๐ฅDirective: ๋ ๋๋ง ๋ DOM์ ์กฐ์ํจ
// v-bind
const app2 = new Vue({
  el: "#app-2",
  data: {
    message: `์ด ํ์ด์ง๋ ${new Date()}์ ๋ก๋๋์์ต๋๋ค.`,
  },
});

// v-if
const app3 = new Vue({
  el: "#app-3",
  data: {
    seen: true,
  },
});

// v-for
const app4 = new Vue({
  el: "#app-4",
  data: {
    todos: [
      { text: "study Javascript" },
      { text: "study React" },
      { text: "study Vue" },
    ],
  },
});

// v-on:click
var app5 = new Vue({
  el: "#app-5",
  data: {
    message: "HI! Vue.js!",
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split("").reverse().join("");
    },
  },
});

// v-model
const app6 = new Vue({
  el: "#app-6",
  data: {
    message: "test message",
  },
});

// ๐ฅVue Component :  ๋ฏธ๋ฆฌ ์ ์๋ ์ต์์ ๊ฐ์ง Vue instance
// ์ปดํฌ๋ํธ๋ฅผ ๋ฑ๋กํ๋ ๋ฒ
Vue.component("todo-item", {
  // ์ปดํฌ๋ํธ๋ ์ฌ์ฉ์ ์ ์ ์์ฑ prop์ ์๋ ฅ๋ฐ์ ์ ์์.
  props: ["todo"],
  template: "<li>{{ todo.text }}</li>",
});

var app7 = new Vue({
  el: "#app-7",
  data: {
    groceryList: [
      { id: 0, text: "Vegetables" },
      { id: 1, text: "Cheese" },
      { id: 2, text: "Whatever else humans are supposed to eat." },
    ],
  },
});
