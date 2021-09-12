
import Cabecalho from '../../components/cabecalho'
import Menu from '../../components/menu'

import { Container, Conteudo } from './styled'


export default function Index() {
    return (
        <Container>
            <Menu />
            <Conteudo>
                <Cabecalho />
                <div class="body-right-box">
                    <div class="new-student-box">
                        
                        <div class="text-new-student">
                            <div class="bar-new-student"></div>
                            <div class="text-new-student">Novo Produto</div>
                        </div>

                        <div class="input-new"> 
                            <div className="input-new-student">
                                <div class="input-left">
                                    <div class="agp-input"> 
                                        <div class="name-student"> &nbsp;&nbsp;Nome: </div>  
                                        <div class="input"> <input /> </div>  
                                    </div> 
                                    <div class="agp-input">
                                        <div class="number-student"> Categoria: </div>  
                                        <div class="input"> <input /> </div> 
                                    </div>
                                    <div class="agp-input">
                                        <div class="number-student"> Avaliação: </div>  
                                        <div class="input"> <input /> </div> 
                                    </div>
                                </div>

                                <div class="input-right">
                                    <div class="agp-input">
                                        <div class="corse-student"> &nbsp;&nbsp;Preço DE: </div>  
                                        <div class="input"> <input /> </div>  
                                    </div>
                                    <div class="agp-input">
                                        <div class="class-student"> Preço POR: </div>  
                                        <div class="input"> <input /> </div> 
                                    </div>
                                    <div class="agp-input">
                                        <div class="class-student1"> Estoque: </div>  
                                        <div class="input"> <input /> </div> 
                                    </div>
                                </div>
                            </div>  
                            <div className="agp-input"> 
                                    <div class="class-student"> Link Imagem: </div>  
                                    <div class="input"> <input className="input1" /> </div>
                            </div>
                            <div className="agp-input1"> 
                                    <div class="class-student2"> Descrição: </div>  
                                    <div class="input"> <textarea /> </div>
                                    <div class="button-create"> <button> Cadastrar </button> </div>
                            </div>
                        </div>
                    </div>

                    <div class="student-registered-box">
                        <div class="row-bar"> 
                            <div class="bar-new-student"> </div>
                            <div class="text-registered-student"> Alunos Matriculados </div>
                        </div>
                    
                        <table class ="table-user">
                            <thead>
                                <tr>
                                    <th> </th>
                                    <th> ID </th>
                                    <th> Produto </th>
                                    <th> Categoria </th>
                                    <th> Preço </th>
                                    <th> Estoque </th>
                                    <th class="coluna-acao"> </th>
                                    <th class="coluna-acao"> </th>
                                </tr>
                            </thead>
                    
                            <tbody>
                                <tr>
                                    <td> <img  style={{ height:"3em", width:"3em", marginLeft:"1em" }} src="/assets/images/produto.jpg" alt="img-produto"/> </td>
                                    <td> 1 </td>
                                    <td> FIFA 22 </td>
                                    <td> Game </td>
                                    <td> R$220,00 </td>
                                    <td> 2 </td>
                                    <td> <button> <img src="/assets/images/edit.svg" alt="" /> </button> </td>
                                    <td> <button> <img src="/assets/images/trash.svg" alt="" /> </button> </td>
                                </tr>
                            </tbody> 
                        </table>
                    </div>
                </div>
            </Conteudo>
        </Container>
    )
}
