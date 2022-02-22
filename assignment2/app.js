const app = Vue.createApp({
  data() {
    return {
      confirmedName: "",
      confirmedName2: "",
    };
  },
  methods: {
    haveAlert() {
      alert("clicked");
    },
    setName() {
      this.confirmedName = event.target.value;
    },
    setName2() {
      this.confirmedName2 = event.target.value;
    },
  },
});

app.mount("#assignment");
