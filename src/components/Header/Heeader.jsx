import reactImg from '../../assets/react-core-concepts.png';
import '../Header/Header.css'
const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];
// 랜덤
function genRandomInt(max){
    return Math.floor(Math.random() * (max + 1));
}

function Header() {
    // 새로고침할 때 마다 랜덤으로 보이기위함
    const description = reactDescriptions[genRandomInt(2)];
    return (
        <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
            {description} React concepts you will need for almost any app you are
            going to build!
        </p>
        </header>
    );
}

export default Header;