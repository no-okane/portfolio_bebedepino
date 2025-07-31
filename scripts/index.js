window.addEventListener('load', function () {
    // 네비게이션과 컨테이너 엘리먼트 선택
    const nav = document.querySelector('nav');  // nav 엘리먼트
    const container = nav.querySelector('.container');  // .container 엘리먼트
    const lineBnr = document.querySelector('.line_bnr');  // .line_bnr 엘리먼트
    const lineBnrHeight = lineBnr.offsetHeight;  // .line_bnr의 높이

    // 페이지 로드 시 기본 상태에서 배경을 투명으로 설정
    nav.style.backgroundColor = 'transparent';  // 네비게이션 배경을 투명으로
    container.style.backgroundColor = 'transparent';  // 컨테이너 배경을 투명으로

    // 추가적으로 글씨 색상 및 이미지 필터 초기화
    const leftLinks = container.querySelectorAll('.left a');  // 왼쪽 링크들
    const rightLinks = container.querySelectorAll('.right a');  // 오른쪽 링크들
    const rightImages = container.querySelectorAll('.right a img');  // 오른쪽 이미지들
    const h1Image = container.querySelector('h1 a img');  // h1 이미지

    // 링크 및 이미지 색상 초기 설정 (투명 배경 상태)
    leftLinks.forEach(function(link) {
        link.style.color = '';  // 기본 링크 색상
    });
    rightLinks.forEach(function(link) {
        link.style.color = '';  // 기본 링크 색상
    });

    // 이미지 색상 초기 설정
    if (h1Image) {
        h1Image.style.filter = '';  // 필터 초기화
    }
    rightImages.forEach(function(image) {
        image.style.filter = '';  // 필터 초기화
    });
});

// 스크롤 이벤트 처리
window.addEventListener('scroll', function () {
    const nav = document.querySelector('nav');  // nav 엘리먼트
    const container = nav.querySelector('.container');  // .container 엘리먼트
    const lineBnr = document.querySelector('.line_bnr');  // .line_bnr 엘리먼트
    const lineBnrHeight = lineBnr.offsetHeight;  // .line_bnr의 높이
    const scrollY = window.scrollY || document.documentElement.scrollTop;  // 현재 스크롤 위치
    const windowWidth = window.innerWidth || document.documentElement.clientWidth;  // 화면 너비

    // 스크롤이 .line_bnr 높이를 넘으면 nav 배경을 흰색으로 변경하고 고정
    if (scrollY > lineBnrHeight) {
        // 배경을 흰색으로 변경
        nav.style.backgroundColor = '#fff';  // 네비게이션 배경을 흰색으로 변경
        container.style.backgroundColor = '#fff';  // 컨테이너 배경을 흰색으로 변경

        // 글씨 색상 변경: 링크 및 이미지 색상 변경
        const leftLinks = container.querySelectorAll('.left a');
        const rightLinks = container.querySelectorAll('.right a');
        const rightImages = container.querySelectorAll('.right a img');
        const h1Image = container.querySelector('h1 a img');

        leftLinks.forEach(function(link) {
            link.style.color = '#000';  // 링크 색상 검정으로 변경
        });
        rightLinks.forEach(function(link) {
            link.style.color = '#000';  // 링크 색상 검정으로 변경
        });

        // 이미지 색상 반전 (필터 적용)
        if (h1Image) {
            h1Image.style.filter = 'invert(1)';  // 이미지 색상 반전
        }
        rightImages.forEach(function(image) {
            image.style.filter = 'invert(1)';  // 이미지 색상 반전
        });

        // nav를 화면 상단에 고정
        nav.style.position = 'fixed';  // nav를 fixed로 설정
        nav.style.top = '0';  // top을 0으로 설정
        nav.style.width = '100%';  // 너비를 100%로 설정
        nav.style.zIndex = '99';  // 다른 요소들보다 위로 올라오게 설정

        // box-shadow 추가
        nav.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';  // nav에 그림자 추가

        // 반응형 처리 (430px 이하일 때 마지막 링크에 invert 필터 적용)
        if (windowWidth <= 430) {
            const lastLeftLink = container.querySelector('.left a:last-of-type');
            if (lastLeftLink) {
                lastLeftLink.style.filter = 'invert(1)';  // 마지막 링크 색상 반전
            }
        }

    } else {
        // 스크롤이 .line_bnr 높이 아래로 내려가면 nav 배경을 투명으로 변경하고 원래 위치로 되돌리기
        nav.style.backgroundColor = 'transparent';  // 네비게이션 배경을 투명으로 설정
        container.style.backgroundColor = 'transparent';  // 컨테이너 배경을 투명으로 설정

        // 글씨 색상 복구: 링크 색상 기본으로 복구
        const leftLinks = container.querySelectorAll('.left a');
        const rightLinks = container.querySelectorAll('.right a');
        const rightImages = container.querySelectorAll('.right a img');
        const h1Image = container.querySelector('h1 a img');

        leftLinks.forEach(function(link) {
            link.style.color = '';  // 기본 링크 색상으로 복구
        });
        rightLinks.forEach(function(link) {
            link.style.color = '';  // 기본 링크 색상으로 복구
        });

        // 이미지 필터 복구
        if (h1Image) {
            h1Image.style.filter = '';  // 필터 초기화
        }
        rightImages.forEach(function(image) {
            image.style.filter = '';  // 필터 초기화
        });

        // nav 원래 위치로 되돌리기
        nav.style.position = 'absolute';  // 원래 위치로 돌아가도록 설정
        nav.style.top = `${lineBnrHeight}px`;  // .line_bnr 바로 아래로 설정

        // box-shadow 제거
        nav.style.boxShadow = '';  // 그림자 제거

        // 반응형 처리 (430px 이하일 때 마지막 링크 필터 제거)
        if (windowWidth <= 430) {
            const lastLeftLink = container.querySelector('.left a:last-of-type');
            if (lastLeftLink) {
                lastLeftLink.style.filter = '';  // 마지막 링크 필터 제거
            }
        }
    }
});
