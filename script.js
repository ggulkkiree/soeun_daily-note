let enteredPin = "";
const correctPin = "0000"; // 임시 기본 비밀번호

function addNumber(num) {
    if (enteredPin.length < 4) {
        enteredPin += num;
        updateDots();
    }

    // 4자리가 다 입력되면 비밀번호 확인
    if (enteredPin.length === 4) {
        setTimeout(checkPin, 200); // 점이 찍히는 걸 보여주기 위해 0.2초 늦게 실행
    }
}

function clearNumber() {
    enteredPin = "";
    updateDots();
}

function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        if (index < enteredPin.length) {
            dot.classList.add('active'); // 입력된 숫자만큼 점 색깔 바꾸기
        } else {
            dot.classList.remove('active');
        }
    });
}

function checkPin() {
    if (enteredPin === correctPin) {
        // 비밀번호가 맞으면 잠금 화면 숨기고 메인 화면 보여주기
        document.getElementById('lock-screen').classList.add('hidden');
        document.getElementById('main-screen').classList.remove('hidden');
    } else {
        // 틀렸을 경우
        alert("비밀번호가 틀렸습니다! (힌트: 0000)");
        clearNumber();
    }
}
