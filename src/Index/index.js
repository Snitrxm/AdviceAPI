import './style.css'
import axios from 'axios'
import { useRef } from 'react'

const Index = () =>{
    const title = useRef(null);

    const getAdvice = () => {
        const response = axios.get('https://api.adviceslip.com/advice')
        .then(res => {
            title.current.innerText = res.data.slip.advice
        }).catch(error => {
            console.log(error);
        })
    }

    

    return (
        <div className='body'>
            <div className='container'>
                <div className='advice'>
                    <h1 ref={title}></h1>
                </div>
                <div className='button'>
                    <button onClick={getAdvice}>New Advice</button>
                </div>
            </div>
        </div>
    );
}

export default Index;