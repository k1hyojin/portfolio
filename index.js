const portfolio = {lists:
  [
      {
          thimg:"./img/p1.jpg",
          title:"Movie Intro",
          subtitle:"영상 출력으로 구성한 이벤트 웹페이지",
          tools:"HTML, CSS",
          concept:"영상을 팟 인코더로 편집하여 mp4 확장자로 변환 후 HTML과 결합하여 영상 이벤트 페이지를 제작하였습니다.",
          links:"http://bbooooh.dothome.co.kr/portfolio/mintro/"
      },
      {
          thimg:"./img/p2.jpg",
          title:"Flat Kit-Sink (쇼핑몰)",
          subtitle:"Fade배너로 상품을 한 눈에 확인 할 수 있는 가전제품 쇼핑몰 웹페이지",
          tools:"HTML, SaSS, jQuery, Javascript, Ajax, Json",
          concept:"시간함수로 fade 배너를 제작했습니다. 모든 상품 출력은 json 배열을 받아 출력하였습니다. ",
          links:"http://bbooooh.dothome.co.kr/portfolio/shop1/"
      },
      {
          thimg:"./img/p3.jpg",
          title:"Yellow Pet",
          subtitle:"rolling베너, fade배너로 상품을 한눈에 확인 할 수 있는 반려동물 쇼핑몰 웹페이지",
          tools:"HTML, SaSS, jQuery, Javascript, API, Ajax, SEO, Json",
          concept:"관리자 페이지를 통해 모든 데이터를 parse하여 메인 페이지를 제작하였습니다.<br> 로그인, 회원가입이 가능하고 ajax로 json 배열을 받아 상품 상세페이지를 출력하였으며 API를 통해 우편번호찾기, 상품결제시스템을 구현하였습니다. 틀린그림찾기를 할 수 있는 이벤트페이지는 쿠키를 이용해 제어할 수 있습니다.",
          links:"http://bbooooh.dothome.co.kr/portfolio/shop/"
      },
      {
          thimg:"./img/p4.jpg",
          title:"Yellow Pet (관리자)",
          subtitle:"동적인 메인 페이지 및 서브 페이지를 구현하기 위한 관리자 페이지",
          tools:"HTML, SaSS, Vue.js, javascript, Ajax, Json, CKeditor",
          concept:"배너, FAQ, 회원관리, 상품등록, 사이즈 정보 등 다양한 기능을 수정하고 관리할 수 있도록 제작된 페이지 입니다.<br>모든 페이지는 Back-end와 함께 제작하였고 My-sql을 사용하여 데이터를 관리합니다.",
          links:"http://bbooooh.dothome.co.kr/portfolio/shop/adm/"
      },
      {
          thimg:"./img/p5.jpg",
          title:"MOMENTUM",
          subtitle:"노마드코더 강의 웹페이지",
          tools:"HTML, CSS, javascript",
          concept:"노마드 코더 강의를 듣고 제작한 momentum 입니다.<br>localstorage를 이용해서 데이터를 저장하고 날씨 api를 연동하여 그 위치에 따라 날씨를 불러옵니다.<br> 자체적으로 24시간/12시간제, 음악 플레이어 기능을 구현하였습니다.",
          links:"http://bbooooh.dothome.co.kr/nomade/"
      },
      {
          thimg:"./img/p6.jpg",
          title:"Hellow Pet (mobile)",
            subtitle:"pet shop 모바일 페이지",
            tools:"HTML, SaSS, Javascript, Jquery, Ajax, Json",
            concept:"기획서를 기반으로 모바일에서 효율적으로 볼 수 있게 퍼블리싱한 쇼핑몰 웹페이지 입니다.",
            links:"http://bbooooh.dothome.co.kr/portfolio/mshop/"
      },
      {
          thimg:"./img/p7.jpg",
          title:"MINIMAL (mobile)",
          subtitle:"의류 쇼핑몰 모바일 페이지",
          tools:"HTML, Javascript, Jquery, Ajax, Json, Vue",
          concept:"디자인 및 퍼블리싱은 외부에서 제작되었습니다.<br>그 외 기능은 기획에 맞춰서 롤링배너기능 추가 및 랜덤함수, 시간함수를 사용하여 배열 출력 수정 재구성한 페이지 입니다.",
          links:"http://bbooooh.dothome.co.kr/portfolio/mshop2/"
      }
  ]
}

// ---------------------- 스크롤 이벤트 시작 -----------------------
gsap.registerPlugin(ScrollTrigger);

const container = document.querySelector("#portfolio_container");

ScrollTrigger.create({    // 헤더 에니메이션
    start: 'top -80',
    end: 99999,
    toggleClass: {className: 'main-tool-bar--scrolled', targets: '.main-tool-bar'}
  });

let scroll = gsap.to(container, {   // 포트폴리오 스크롤이벤트
  x: () => -(container.offsetWidth - innerWidth),
  ease: "power3.inout",
  scrollTrigger: {
    trigger: container,
    start: "50% 50%",
	  pin:container,
    invalidateOnRefresh: true,
    // markers: true,
    scrub: 2,
    end: () => "+=" + (container.offsetWidth -innerWidth )
  }
});

// ---------------------- 스크롤 이벤트 끝 -----------------------


portfolio.lists.forEach((content,i,arr)=>{  // 포트폴리오 로드
    const li = document.createElement("li")
    li.style.background=`url("${content.thimg}") no-repeat center center`;
    container.appendChild(li);
    
    const allCards = document.querySelectorAll("#portfolio_container > li");

    allCards[i].innerHTML=
    `<ol class="portfolio_hover">
    <li>${content.title}<a href=${content.links}> go <i class="fa-solid fa-arrow-right fa-sm"></i></a></li>
    <li>${content.tools}</li>
    <li>${content.subtitle}</li>
    <li>${content.concept}</li>
    </ol>`;

    allCards[i].addEventListener("mouseenter",(z)=>{  // hover event
      z.target.childNodes[0].classList.add("hover")
    });
    allCards[i].addEventListener("mouseleave",(z)=>{  // hover out
      z.target.childNodes[0].classList.remove("hover")
    });
});

// ---------------------- 포트폴리오 끝 -----------------------

const hamButton = document.querySelector("#ham_button");
const menu = document.querySelector(".menu");
const span = document.querySelectorAll("#ham_button > span");
hamButton.addEventListener("click",()=>{
   menu.classList.toggle("menu_ani");
   for(let i = 0; i<span.length; i++){
    span[i].classList.toggle(`ham${i+1}`);
   }
});

// ---------------------- 메뉴버튼 끝 -----------------------

const frm = document.getElementById("gform")
const mailBtn = document.querySelector("#email_btn");
const regExp= /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;


mailBtn.addEventListener("click",(e)=>{
  if(frm.name.value === ""){
    e.preventDefault();
    alert("이름을 입력해주세요!");
    frm.name.focus();
  }else if(frm.email.value ==="" || !regExp.test(frm.email.value)){
    e.preventDefault();
    alert("올바른 이메일을 입력해주세요!");
    frm.email.focus();
  }else if(frm.message.value === ""){
    e.preventDefault();
    alert("메세지를 입력해주세요!");
    frm.message.focus();
  }else{
    frm.method = "POST";
    frm.action = "https://script.google.com/macros/s/AKfycbyoKpHYk8-ngEz8nIrQDW6iTaRGC5jN-JUDBEPj03QsOfFy-0MClM7Q0O8g9-XXUKx6pQ/exec"
    frm.submit();
    alert("전송 완료! 빠른시일내에 연락드리겠습니다. 감사합니다 :)")
  }
});