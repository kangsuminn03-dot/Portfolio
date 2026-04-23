function openTab(index) {
    // 1. 모든 탭 버튼에서 'active' 클래스를 제거합니다.
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    // 2. 모든 탭 콘텐츠에서 'active' 클래스를 제거합니다.
    const items = document.querySelectorAll('.tab-item');
    items.forEach(item => item.classList.remove('active'));

    // 3. 클릭된 순서(index)에 해당하는 버튼과 콘텐츠에만 'active' 클래스를 추가합니다.
    buttons[index].classList.add('active');
    items[index].classList.add('active');
}