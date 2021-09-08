// 기본 형식
const app = new Vue({
  el: "#app",
  data: {
    message: "Hello, Vue !",
  },
});

// 💥Directive: 렌더링 된 DOM을 조작함
// v-bind
const app2 = new Vue({
  el: "#app-2",
  data: {
    message: `이 페이지는 ${new Date()}에 로드되었습니다.`,
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

// 💥Vue Component :  미리 정의된 옵션을 가진 Vue instance
// 컴포넌트를 등록하는 법
Vue.component("todo-item", {
  // 컴포넌트는 사용자 정의 속성 prop을 입력받을 수 있음.
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
