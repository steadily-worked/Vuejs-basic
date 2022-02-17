const app = Vue.createApp({
  // Vue 프로젝트를 시작하는 명령
  data: function () {
    return {
      courseGoal: "Finish the course and learn Vue!", // 원하는 타입을 저장할 수 있음
      vueLink: "https://vuejs.org",
    };
  },
});

app.mount("#user-goal");
// 위의 코드를 수행하는 명령. 내부에 들어가는 id나 div에 따라 해당하는 영역 내부에서 Vue가 실행
