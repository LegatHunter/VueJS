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

        addNewNote() {
            if (this.inputValue === "") {
                return;
            }
            this.notes.push(this.inputValue);
            this.inputValue = "";
        },
        toUpperCase(item) {
            return item.toUpperCase();
        },
        removeNote(i) {
            this.notes.splice(i, 1);
        },
        removeNotesAll() {
            this.notes = []
        }
    },
    computed:{
        doubleCountComputed(){
            return this.notes.length * 2;
        },
    },
    watch: {

    }
};

const app = Vue.createApp(App).mount("#app_todo");
