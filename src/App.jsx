import { useState } from 'react';

import componentsImg from './assets/components.png';
import { CORE_CONCEPTS, EXAMPLES  } from './data.js';
import Header from './components/Header/Heeader.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';

// npm run dev

function App() {
    // 상태값 변경
    const [selectedTopic, setSelectedTopic] = useState();
    function handleClick(selectedButton){
        setSelectedTopic(selectedButton)
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


    return (
        <div>
            <Header/>
            <main>
                <section id='core-concepts'> 
                    <h2>Core Concepts</h2>
                    <ul>
                        {/* <CoreConcept 
                            title="Componeonts" 
                            description="The core UI building block." 
                            image={componentsImg} 
                        /> */}
                        {/* data.js 로 불러오기 위의 구문 축약 같은 props면 이걸로 가능 */}
                        {/* CoreConcept {...CORE_CONCEPTS[0]} /> */}
                        {/* 배열수만큼 돌리기 */}
                        {CORE_CONCEPTS.map((concept) => (
                            <CoreConcept key={concept.title} {...concept} />
                        ))}
                    </ul>
                </section>
                <section id='examples'>
                    {/* children 은 컴퍼넌트 사이에 있는 텍스트값을 말한다 (기본) */}
                    <h2>Examples</h2>
                    <menu>
                        {/* 방법1 children을 활용 */}
                        {/* 클릭했을 때 실행하기 위해서 */}
                        {/* 이벤트로부터 독립적인 함수는 어떻게 “구성 및 설정” (예: 어떤 인자를 전달할지 정의하는 등) */}
                        <TabButton isSelected={selectedTopic === 'Component'} onSelect={() => handleClick('Component')}>Component</TabButton>
                        <TabButton isSelected={selectedTopic === 'JSX'} onSelect={() => handleClick('JSX')}>JSX</TabButton>
                        <TabButton isSelected={selectedTopic === 'Props'} onSelect={() => handleClick('Props')}>Props</TabButton>
                        <TabButton isSelected={selectedTopic === 'State'} onSelect={() => handleClick('State')}>State</TabButton>
                        {/* 방법2 props 활용 */}
                        {/* <TabButton label="children" /> */}
                    </menu>
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
                </section>
            </main>
        </div>
    );
}

export default App;
