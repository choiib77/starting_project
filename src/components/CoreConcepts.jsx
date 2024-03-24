import CoreConcept from "./CoreConcept";
import Section from "./Section";
import { CORE_CONCEPTS } from "../data";


export default function CoreConcepts(){
    return (
        <Section id='core-concepts' title="Core Concepts"> 
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
        </Section>
    )
}