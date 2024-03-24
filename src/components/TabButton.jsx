function TabButton({children, isSelected,...props}){
    return (
        <li>
            {/* 버튼 선택시 클래스 추가 / 클릭시 내용 변경 */}
            <button className={isSelected ? 'active' : undefined} {...props}>{children}</button>
        </li>
    )
}

export default TabButton;