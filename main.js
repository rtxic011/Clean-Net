document.addEventListener('DOMContentLoaded', () => {
    // 마우스 호버 시 카드 애니메이션을 위한 JavaScript (CSS로 대부분 처리됨)
    // 여기서는 CSS transition만으로 충분한 효과를 볼 수 있습니다.
    // 만약 더 복잡한 인터랙션이 필요하다면 여기에 코드를 추가할 수 있습니다.

    // 모든 카드 요소에 대한 선택자를 업데이트 (혹시 모를 추가적인 JS 처리를 위해)
    const cards = document.querySelectorAll('.value-card, .help-card, .commitment-card, .experience-card, .concept-item');

    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            // 마우스 진입 시 추가적인 JS 동작 (현재는 CSS hover로 충분)
            // console.log('Mouse entered card:', card.className);
        });

        card.addEventListener('mouseleave', () => {
            // 마우스 이탈 시 추가적인 JS 동작 (현재는 CSS hover로 충분)
            // console.log('Mouse left card:', card.className);
        });
    });
});