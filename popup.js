document.addEventListener('DOMContentLoaded', function () {
    const writeBtn = document.getElementById('write-button');

    if (writeBtn) {
        writeBtn.addEventListener('click', function () {
            // 팝업 크기
            const width = 600;
            const height = 600;
            // 화면 중앙 위치 계산
            const left = window.screenX + (window.outerWidth - width) / 2;
            const top = window.screenY + (window.outerHeight - height) / 2;
            window.open(
                'popup.html',
                'pop',
                `width=${width},height=${height},left=${left},top=${top},resizable=no,scrollbars=yes`
            );
        });
    }
});