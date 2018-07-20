function persistence(num) {
    //숫자를 문자열로 형변환 후에 배열에 하나씩 집어넣기
    var arr = num.toString().split("");
    var cnt = 0;
    var newarr;

    //자릿수가 1이 될때까지 반복
    while (arr.length > 1) {
        //배열의 reduce() 함수 사용
        //http://dororongju.tistory.com/22
        //모든 자릿수 곱해서 newarr에 저장
        newarr = arr.reduce((a, b) => a * b);
        cnt++;
        //newarr를 다시 숫자로 형변환 후 arr에 집어넣음
        arr = newarr.toString().split("");
    }

    return cnt;
}