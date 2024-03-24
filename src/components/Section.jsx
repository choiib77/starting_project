
// html 공통적인 코드는 컴포넌트 만들어서 사용 
// ...props 는 컴포넌트의 prop을 태그 속성으로 사용이 가능하다 
// children은 컴포넌트 태그 사이에 작성한거 적용가능
export default function Section({title,children ,...props}){
    return(
        <section {...props}>
            <h2>{title}</h2>
            {children}
        </section>
    );
}