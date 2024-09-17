const App = {
  data() {
    return {
      tittle: "Список заметок",
      placeholderString: "Введите название заметки",
      inputValue: "",
    };
  },
  methods: {
    inputChange(event) {
      console.log("inputChange", event);
    },
  },
};

const app = Vue.createApp(App).mount("#app");
