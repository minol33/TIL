// [main.js 설명]
// 1. 애플리케이션 진입점으로 Vue 초기화, 폴더 , 전역, 컴포넌트 , 라이브러리 등록 수행 실시
// 2. import App 을 사용해 최상위 App.vue 컴포넌트 지정 실시
// 3. createApp mount 를 사용해 index.html 파일 div id 값 설정 및 렌더링 시작점 지정 실시
// 4. router : 라우터는 웹페이지 간의 이동하는 방법 및 경로를 설정해주는 파일입니다
// 5. app.config.globalProperties : 글로벌 변수를 선언합니다. 변수 명칭은 $변수명칭 을 지정합니다

// [애플리케이션 생성 실시]
import { createApp } from 'vue'
import App from './App.vue'
import routers from './routers/index.js'

// [앱 생성 실시]
const app = createApp(App);

// [앱 글로벌 변수 선언 실시]
app.config.globalProperties.$name = "투케이"; // [name / 이름]
app.config.globalProperties.$age = 29; // [age / 나이]

// [라우터 사용 설정]
app.use(routers);

// [main 아이디 : 렌더링 시작점] 
app.mount('#main');




[vue 컴포넌트 - 소스 코드]

<script>

export default {
  name: 'MainComponent',

  // [부모에서 전달 받은 데이터 : 자식에서 동적 수정 불가능]
  // [형태 : <MainComponent msg="MainComponent"/>]
  props: {
    msg: String
  },

  // [컴포넌트 생성 시 초기 데이터 설정 (리턴 값 지정)]
  data () {
    console.log("");
    console.log("[MainComponent] : [data] : [start]");
    console.log("설 명 : 데이터 초기화 준비");
    console.log("글로벌 변수 [이름] : " + this.$name);
    console.log("글로벌 변수 [나이] : " + this.$age);
    console.log("");

    return {
      data: "MAIN" // [데이터 정의]
    }    
  },

  // [메소드 정의 실시]
  methods: {
  }
}

</script>


[결과 출력]

[main component] : [data] : [start]
설명 : 데이터 초기화준비
글로벌 변수 [이름] : 투케이
글로벌 변수 [나이] : 29

--------------------------------------------------------------------------

< global.js >
  
 // [global > global.js 설명]
// 1. 모든 컴포넌트가 공유할 수 있는 글로벌 영역 입니다

// [설정 수행 실시]
///*
export default {

    install(Vue) {

        // [getSum 함수 설정]
        Vue.config.globalProperties.$getSum = function(one, two){
            return one + two;
        }
        
    }
}
//*/

[main.js - 소스코드]


// [main.js 설명]
// 1. 애플리케이션 진입점으로 Vue 초기화, 폴더 , 전역, 컴포넌트 , 라이브러리 등록 수행 실시
// 2. import App 을 사용해 최상위 App.vue 컴포넌트 지정 실시
// 3. createApp mount 를 사용해 index.html 파일 div id 값 설정 및 렌더링 시작점 지정 실시
// 4. router : 라우터는 웹페이지 간의 이동하는 방법 및 경로를 설정해주는 파일입니다
// 5. app.config.globalProperties : 글로벌 변수를 선언합니다. 변수 명칭은 $변수명칭 을 지정합니다





// [애플리케이션 생성 실시]
import { createApp } from 'vue'
import App from './App.vue'
import routers from './commonRouters/index.js' // [router]
import globals from './commonGlobal/global.js' // [global]

// [앱 생성 실시]
const app = createApp(App);

// [앱 글로벌 변수 선언 실시]
//app.config.globalProperties.$name = "투케이"; // [name / 이름]

// [라우터 사용 설정]
app.use(routers);

// [글로벌 사용 설정]
app.use(globals);

// [main 아이디 : 렌더링 시작점] 
app.mount('#main');
 
[MainComponent.vue - 소스코드]

// [컴포넌트 생성 시 초기 데이터 설정 (리턴 값 지정)]
data () {
  console.log("");
  console.log("[MainComponent] : [data] : [start]");
  console.log("설 명 : 데이터 초기화 준비");
  console.log("sum : " + this.$getSum(10,20));
  console.log("");

  return {
    data: "MAIN" // [데이터 정의]
  }    
}

[결과 출력]

[main component] : [data] : [start]
설명 : 데이터 초기화준비
sum : 30

