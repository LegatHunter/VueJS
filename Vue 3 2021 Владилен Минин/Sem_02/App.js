const App = {
  data() {
    return {
      tittle: "Список заметок",
      placeholderString: "Введите название заметки",
      inputValue: "",
      notes: ["Заметка 1", "Заметка 2", "Заметка 3"],
    };
  },
  methods: {
    inputChange(event) {
      console.log("inputChange", event.target.value)
      this.inputValue = event.target.value
    },
    addNewNote(){
      if(this.inputValue !== ''){
        this.notes.push(this.inputValue)
        this.inputValue = ''
      }
    }
  },
};

const app = Vue.createApp(App).mount("#app");
