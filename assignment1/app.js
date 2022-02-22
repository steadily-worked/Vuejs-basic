const app = Vue.createApp({
  data() {
    return {
      name: "steadily-worked",
      age: 27,
      imageLink:
        "https://art.nativescript-vue.org/NativeScript-Vue-White-Green.png",
    };
  },
  methods: {
    printName() {
      return this.name;
    },
    printAge() {
      return this.age;
    },
    // printAgePlusFive() {
    //   return this.age + 5;
    // },
    ranNum() {
      const randomNum = Math.random();
      if (randomNum < 0.5) {
        return 0;
      } else {
        return 1;
      }
    },
  },
});

app.mount("#assignment");
