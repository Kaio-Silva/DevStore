
import { Container } from './styled'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Index() {

    async function emBreve(){
        toast.warning("Em breve...")
    }

    return (
        <Container>
            <ToastContainer />
            <div class="reader-right-box">
                <div class="box-user"> 
                    <div class="user-image">
                        <img src="/assets/images/neo.png" alt="" />
                        <div class="absolute">3</div>
                    </div>
                    <div class="user-name"> Olá, <b>Luigi da Silva Coelho</b> </div>
                </div>
                
                <div class="box-image">
                    <div class="refresh-button"> <button onClick={emBreve}> <img src="/assets/images/refresh.svg" alt = "" />  </button> </div>
                    <div class="left-button"> <button onClick={emBreve}> <img src="/assets/images/log-out.svg" alt = "" />  </button> </div>
                </div>
            </div>
            <div class="bottom-bar-right-header" />
        </Container>
    )
}
