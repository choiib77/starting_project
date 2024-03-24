import { useState ,useEffect} from 'react';
import { EXAMPLES } from '../data.js';
import Section from "./Section";
import TabButton from './TabButton.jsx';
import Tabs from './Tabs.jsx';

export default function Examples(){
    // 버튼 상태값 변경
    const [selectedTopic, setSelectedTopic] = useState();
    function handleClick(selectedButton){
        return setSelectedTopic(selectedButton)
    }

    // selectedTopic 값이 없다면 함수
    let tabContent = <p>Please select a topic.</p>;
    if (selectedTopic){
        tabContent =  (
            <div id='tab-content'>
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>
                        {EXAMPLES[selectedTopic].code}
                    </code>
                </pre>
            </div>
        )
    }
    // 버튼 명칭과 데이터 명칭 동일할 경우
    const [topics,setTopics] = useState([]);
    useEffect(() => {
        // topicsData 객체에서 각 주제의 title만 추출하여 새로운 배열을 생성
        const titles = Object.values(EXAMPLES).map(topic => topic.title);
        // 생성된 배열을 topicsState 상태로 설정
        setTopics(titles);
      }, []); // 빈 배열을 전달하여 컴포넌트가 처음 마운트될 때만 실행
    
    return (
        <Section id='examples' title="Examples">
            {/* children 은 컴퍼넌트 사이에 있는 텍스트값을 말한다 (기본) */}
            <Tabs 
                // "menu" (menu,ul,div 등등)식별자 (태그)로 해야하고 컴포넌트는 {Section} (<Section/>이라는 뜻)으로 해줘야함 
                // ButtonsContainer="menu"
                // 재사용 코드를 위해서 컴포넌트 분리
                buttons={
                <>
                    {/* 방법1 children을 활용 */}
                    {/* 클릭했을 때 실행하기 위해서 */}
                    {/* 이벤트로부터 독립적인 함수는 어떻게 “구성 및 설정” (예: 어떤 인자를 전달할지 정의하는 등) */}
                    {/* <TabButton isSelected={selectedTopic === 'Component'} onClick={() => handleClick('Component')}>Component</TabButton>
                    <TabButton isSelected={selectedTopic === 'JSX'} onClick={() => handleClick('JSX')}>JSX</TabButton>
                    <TabButton isSelected={selectedTopic === 'Props'} onClick={() => handleClick('Props')}>Props</TabButton>
                    <TabButton isSelected={selectedTopic === 'State'} onClick={() => handleClick('State')}>State</TabButton> */}

                    {/* 방법2 props 활용 */}
                    {/* <TabButton label="children" /> */}

                    {topics.map((topic) => (
                        <TabButton isSelected={selectedTopic === topic} key={topic} onClick={() => handleClick(topic)}>{topic}</TabButton>
                    ))}
                </>
            }>
                {/* 값이 있고 없고의 노출 */}
                {!selectedTopic ? (<p>Please select a topic.</p>) : 
                    (
                    <div id='tab-content'>
                        <h3>{EXAMPLES[selectedTopic].title}</h3>
                        <p>{EXAMPLES[selectedTopic].description}</p>
                        <pre>
                            <code>
                                {EXAMPLES[selectedTopic].code}
                            </code>
                        </pre>
                    </div>
                    )
                }
                {/* 다른 방법 값이 없을 때 &&연산자 뒤에꺼 노출*/}
                {/* {!selectedTopic && (<p>Please select a topic.</p>)} */}

                {/* 함수로도 처리 가능 */}
                {/* {tabContent} */}
            </Tabs>
        </Section>
    )
}