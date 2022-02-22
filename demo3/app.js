const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },
  methods: {
    setName(event, lastName) {
      this.name = event.target.value + "-" + lastName;
    },
    addNumber(num) {
      this.counter = this.counter + num;
    },
    reduceNumber() {
      if (this.counter > 0) {
        this.counter = this.counter - 1;
      }
    },
  },
});

app.mount("#events");
