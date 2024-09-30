<template>
  <div class="container">
    <form class="card" @submit.prevent="submitHandler">
      <h1>Анкета на Vue разработчика!</h1>
      <AppInput
        placeholder="Введите имя"
        :error="errors.name"
        label="Как тебя зовут?"
        v-model="name"
      >
      </AppInput>
      <div class="form-control">
        <label for="age">Выбери возраст</label>
        <input type="number" id="age" max="70" v-model.number="age" />
      </div>

      <div class="form-control">
        <label for="city">Твой город</label>
        <select id="city" v-model="city">
          <option value="spb">Санкт-Петербург</option>
          <option value="msk">Москва</option>
          <option value="kzn">Казань</option>
          <option selected value="nsk">Новосибирск</option>
        </select>
      </div>

      <div class="form-checkbox">
        <span class="label">Готов к переезду в Токио?</span>
        <div class="checkbox">
          <label
            ><input type="radio" name="trip" v-model="relocate" value="yes" />
            Да</label
          >
        </div>

        <div class="checkbox">
          <label
            ><input type="radio" name="trip" v-model="relocate" value="no" />
            Нет</label
          >
        </div>
      </div>

      <div class="form-checkbox">
        <span class="label">Что знаешь во Vue?</span>
        <div class="checkbox">
          <label
            ><input type="checkbox" value="vuex" v-model="vue" name="vue" />
            Vuex</label
          >
        </div>
        <div class="checkbox">
          <label
            ><input type="checkbox" value="Vue CLI" v-model="vue" name="vue" />
            Vue CLI</label
          >
        </div>
        <div class="checkbox">
          <label
            ><input
              type="checkbox"
              value="Vue Router"
              v-model="vue"
              name="vue"
            />
            Vue Router</label
          >
        </div>
      </div>
      <div class="form-checkbox">
        <span class="label">Правила нашей компании</span>
        <label
          ><input type="checkbox" value="soglasen" v-model="soglasen"
        /></label>
        Согласен
      </div>
      <button type="submit" class="btn primary">Отправить</button>
    </form>
  </div>
</template>

<script>
import AppInput from "@/components/AppInput.vue";
export default {
  data() {
    return {
      name: "",
      age: 18,
      city: "spb",
      relocate: "yes",
      vue: [],
      soglasen: false,
      errors: {
        name: null,
      },
    };
  },
  components: { AppInput },
  methods: {
    formIsValid() {
      let isValid = true;
      if (this.name.length === 0) {
        this.errors.name = "Имя неможет быть пустым";
        isValid = false;
      } else {
        this.errors.name = null;
      }
      return isValid;
    },
    submitHandler() {
      if (this.formIsValid()) {
        console.group("form data");
        console.log("Name", this.name);
        console.log("Age", this.age);
        console.log("City", this.city);
        console.log("Tokyo", this.relocate);
        console.log("Vue", this.vue);
        console.log("Soglasen", this.soglasen);
        console.groupEnd();
      }
    },
  },
};
</script>

<style>
.form-control small {
  color: #e53935;
}
.form-control.invalid input {
  border-color: #e53935;
}
</style>
