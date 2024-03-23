function TabButton({children, onSelect, isSelected}){
    return (
        <li>
            {/* 버튼 선택시 클래스 추가 / 클릭시 내용 변경 */}
            <button className={isSelected ? 'active' : undefined} onClick={onSelect}>{children}</button>
        </li>
    )
}

export default TabButton;