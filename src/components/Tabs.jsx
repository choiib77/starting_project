// 반복되는 형태 재사용을 위해서 컴포넌트 생성
export default function Tabs({children,buttons,ButtonsContainer="menu"}){
    // 식별자 태그로 활용하기 위해서는 menu를 string으로 받고 변수에 담는다.
    // const ButtonsContainer = buttonsContainer;
    return (
        <>
            <ButtonsContainer>
                {/* button의 경우 보내는게 복잡해서 Examples에다가 코드 */}
                {buttons}
            </ButtonsContainer>
            {children}
        </>
    )
}