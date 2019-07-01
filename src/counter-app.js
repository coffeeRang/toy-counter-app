console.log('counter-app.js run');
/**
 * 작성할 함수
 * increase : default - 1씩 증가, 특정 파라미터를 받을 경우 해당 값만큼 증가
 * decrease : default - 1씩 감소, 특정 파라미터를 받을 경우 해당 값만큼 감소
 * reset : default - 현재 증감된 값을 초기값으로 변경, 특정 파라미터를 받을 겨웅 해당 값으로 초기화
 * getCounterNum : 현재까지 증감된 값을 조회
 */
document.querySelector('#btn_increase').addEventListener('click', function() {
    let increaseNum = document.querySelector('#increase_num').value || undefined;
    counterApp.increase(increaseNum);
    document.querySelector('#current_num').value = counterApp.getCurrentNum();
});

document.querySelector('#btn_decrease').addEventListener('click', function() {
    let decreaseNum = document.querySelector('#decrease_num').value || undefined;
    counterApp.decrease(decreaseNum);
    document.querySelector('#current_num').value = counterApp.getCurrentNum();
});

document.querySelector('#btn_reset').addEventListener('click', function() {
    let resetNum = document.querySelector('#reset_num').value || undefined;
    counterApp.reset(resetNum);
    document.querySelector('#current_num').value = counterApp.getCurrentNum();
});

const counterApp = {
    counterNum: 0,
    initNum: 0,
    increase: function(data = 1) {
        this.counterNum += Number(data);
    },
    decrease: function(data = 1) {
        this.counterNum -= Number(data);
    },
    getCurrentNum: function(data) {
        return this.counterNum;
    },
    reset: function(data = 0) {
        this.counterNum = data;
    }
}

const logFn = function(data) {
    console.log('>> log : ' + data);
}

export default counterApp;