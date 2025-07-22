window.addEventListener('scroll', function () {
    const lineBnr = document.querySelector('.line_bnr');  // .line_bnr 엘리먼트
    const nav = document.querySelector('nav');  // nav 엘리먼트
    const container = nav.querySelector('.container');  // nav 안의 .container
    const leftLinks = container.querySelectorAll('.left a');  // .left a 링크
    const rightLinks = container.querySelectorAll('.right a');  // .right a 링크
    const rightImages = container.querySelectorAll('.right a img');  // .right a img
    const h1Image = container.querySelector('h1 a img');  // h1 a img
    const lineBnrHeight = lineBnr.offsetHeight;  // .line_bnr의 높이 (35px)
    const scrollY = window.scrollY || document.documentElement.scrollTop;  // 현재 스크롤 위치

    // 초기 상태에서 nav 배경을 투명으로 설정
    if (scrollY <= lineBnrHeight) {
        nav.style.backgroundColor = 'transparent';  // 초기에는 배경 투명
        nav.style.boxShadow = '';  // box-shadow 제거
    }

    // .line_bnr 높이를 지나면 nav 고정
    if (scrollY > lineBnrHeight) {
        nav.style.position = 'fixed';  // nav를 화면 상단에 고정
        nav.style.top = '0';
        nav.style.width = '100%';
        nav.style.zIndex = '99';  // 내비게이션이 다른 요소 위로 올라오도록 설정
        
        // nav 배경을 흰색으로 변경
        nav.style.backgroundColor = '#fff';  // 배경을 흰색으로 변경
        nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';  // box-shadow 추가

        // .container 배경을 흰색으로 변경
        container.style.backgroundColor = '#fff';  // 배경을 흰색으로 변경

        // 글씨 색상 변경: .left a, .right a
        leftLinks.forEach(function(link) {
            link.style.color = '#000';  // .left a 링크 색상 검정으로 변경
        });

        rightLinks.forEach(function(link) {
            link.style.color = '#000';  // .right a 링크 색상 검정으로 변경
        });

        // 이미지 색상 반전 (필터 적용)
        if (h1Image) {
            h1Image.style.filter = 'invert(1)';  // 필터를 적용하여 색상 반전
        }
        
        // .right a img 이미지 색상 반전 (필터 적용)
        rightImages.forEach(function(image) {
            image.style.filter = 'invert(1)';  // 필터를 적용하여 색상 반전
        });

    } else {
        // .line_bnr 아래로 돌아가면 nav 원래 상태로
        nav.style.position = 'absolute';  // nav를 원래 위치로 되돌림
        nav.style.top = `${lineBnrHeight}px`;  // .line_bnr 바로 아래로 설정

        // .container 배경을 투명으로 복구
        container.style.backgroundColor = 'transparent';  // 배경을 투명으로 복구

        // 글씨 색상 복구: .left a, .right a
        leftLinks.forEach(function(link) {
            link.style.color = '';  // .left a 링크 색상 기본으로 복구 (흰색)
        });

        rightLinks.forEach(function(link) {
            link.style.color = '';  // .right a 링크 색상 기본으로 복구 (흰색)
        });

        // 이미지 필터 복구
        if (h1Image) {
            h1Image.style.filter = '';  // 필터 복구
        }

        // .right a img 이미지 필터 복구
        rightImages.forEach(function(image) {
            image.style.filter = '';  // 필터 복구
        });

        nav.style.boxShadow = '';  // 스크롤 최상단으로 돌아가면 box-shadow 제거
    }
});
