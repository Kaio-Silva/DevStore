
import { useState, useEffect, useRef } from 'react';
import Cabecalho from '../../components/cabecalho'
import Menu from '../../components/menu'

import { Container, Conteudo } from './styled.js'

import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'; 

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import LoadingBar from 'react-top-loading-bar'

import Api from '../../services/api.js'
const api = new Api();


export default function Index() {

    const [ produtos, setProdutos ] = useState([]);
    const [ nome, setNome ] = useState('');
    const [ categoria, setCategoria ] = useState('');     
    const [ precoDE, setPrecoDE ] = useState('');     
    const [ precoPOR, setPrecoPOR ] = useState('');     
    const [ avaliacao, setAvaliacao ] = useState('');  
    const [ estoque, setEstoque ] = useState('');
    const [ descricao, setDescricao ] = useState('');   
    const [ imagem, setImagem ] = useState('');    
    const [ idAlterando, setIdAlterando ] = useState(0);
    
    const loading = useRef(null);


    async function listar(){
        let r = await api.listar();
        setProdutos(r);
    }

    async function inserir(){
        loading.current.continuousStart();

        if(idAlterando === 0){
            let r = await api.inserir(nome, categoria, precoDE, precoPOR, avaliacao, 
                                 estoque, descricao, imagem);
            
            if(r.erro)
                toast.error(r.erro)
            else    
                toast.success("🚀 Produto Inserido!!");
        } else {
            let r = await api.alterar(idAlterando ,nome, categoria, precoDE, precoPOR, avaliacao, 
                estoque, descricao, imagem);
            
            if(r.erro)
                toast.error(r.erro)
            else        
                toast.success("🚀 Produto Alterado!!");               
        }    
        listar();
        limpar();

        loading.current.complete()
    }

    async function limpar(){
        setNome('');
        setCategoria('');
        setPrecoDE('');
        setPrecoPOR('');
        setAvaliacao('');
        setEstoque('');
        setDescricao('');
        setImagem('');
        setIdAlterando(0);
    }

    async function alterar(item){
        setNome(item.nm_produto);
        setCategoria(item.ds_categoria);
        setPrecoDE(item.vl_preco_de);
        setPrecoPOR(item.vl_preco_por);
        setAvaliacao(item.vl_avaliacao);
        setEstoque(item.qtd_estoque);
        setDescricao(item.ds_produto);
        setImagem(item.img_produto);
        setIdAlterando(item.id_produto);
    }

    async function remover(id){
        confirmAlert({
            title: 'Remover Produto',
            message: `Deseja remover o Produto ${id} ?`,
            buttons: [
              {
                label: 'Sim',
                onClick: async () => { 
                    loading.current.continuousStart();

                    let r = await api.remover(id);
                    
                    if(r.erro)
                        toast.error(r.erro);
                    else
                        toast.success("🚀 Aluno Removido!!") 
                    
                    listar();

                    loading.current.complete();
                } 
              },
              {
                label: 'Não'
              }
            ]
          });
    }

    useEffect(() =>{
        listar();
    }, [])

    return (
        <Container>
            <LoadingBar color="#10EAEA" ref={loading}/>
            <ToastContainer />
            <Menu />
            <Conteudo>
                <Cabecalho />
                <div class="body-right-box">
                    <div class="new-student-box">
                        
                        <div class="text-new-student">
                            <div class="bar-new-student"></div>
                            <div class="text-new-student"> { idAlterando > 0 && idAlterando != null ? `Alterando Produto ${idAlterando}` : "Novo Produto"} </div>
                        </div>

                        <div class="input-new"> 
                            <div className="input-new-student">
                                <div class="input-left">
                                    <div class="agp-input"> 
                                        <div class="name-student"> &nbsp;&nbsp;Nome: </div>  
                                        <div class="input"> <input type="text" value={nome} onChange={e => setNome(e.target.value)}/> </div>  
                                    </div> 
                                    <div class="agp-input">
                                        <div class="number-student"> Categoria: </div>  
                                        <div class="input"> <input type="text" value={categoria} onChange={e => setCategoria(e.target.value)}/> </div> 
                                    </div>
                                    <div class="agp-input">
                                        <div class="number-student"> Avaliação: </div>  
                                        <div class="input"> <input value={avaliacao} onChange={e => setAvaliacao(e.target.value)}/> </div> 
                                    </div>
                                </div>

                                <div class="input-right">
                                    <div class="agp-input">
                                        <div class="corse-student"> &nbsp;&nbsp;Preço DE: </div>  
                                        <div class="input"> <input  value={precoDE} onChange={e => setPrecoDE(e.target.value)}/> </div>  
                                    </div>
                                    <div class="agp-input">
                                        <div class="class-student"> Preço POR: </div>  
                                        <div class="input"> <input  value={precoPOR} onChange={e => setPrecoPOR(e.target.value)}/> </div> 
                                    </div>
                                    <div class="agp-input">
                                        <div class="class-student1"> Estoque: </div>  
                                        <div class="input"> <input  value={estoque} onChange={e => setEstoque(e.target.value)}/> </div> 
                                    </div>
                                </div>
                            </div>  
                            <div className="agp-input"> 
                                    <div class="class-student"> Link Imagem: </div>  
                                    <div class="input"> <input className="input1" type="text" value={imagem} onChange={e => setImagem(e.target.value)}/> </div>
                            </div>
                            <div className="agp-input1"> 
                                    <div class="class-student2"> Descrição: </div>  
                                    <div class="input"> <textarea type="text" value={descricao} onChange={e => setDescricao(e.target.value)}/> </div>
                                    <div class="button-create"> <button onClick={inserir}> { idAlterando > 0 && idAlterando != null ? "Alterar" : "Cadastrar"} </button> </div>
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
                                {produtos.map((x, i) =>
                                    <tr className={i % 2 === 0 ? "linha-alternada" : ""}>
                                        <td> <img  style={{ height:"3em", width:"3em" }} src={x.img_produto} alt="img-produto"/> </td>
                                        <td> {x.id_produto} </td>
                                        <td title={x.nm_produto}> {x.nm_produto != null && x.nm_produto.length >= 17 ? x.nm_produto.substr(0, 17) + "..." : x.nm_produto} </td>
                                        <td title={x.ds_categoria}> {x.ds_categoria != null && x.ds_categoria.length >= 14 ? x.ds_categoria.substr(0, 14) + "..." : x.ds_categoria} </td>
                                        <td title={x.vl_preco_por}> {x.vl_preco_por != null && x.vl_preco_por} </td>
                                        <td> {x.qtd_estoque} </td>
                                        <td class="coluna-acao"> <button onClick={() => alterar(x)}> <img src="/assets/images/edit.svg" alt="" /> </button> </td>
                                        <td class="coluna-acao"> <button onClick={() => remover(x.id_produto)}> <img src="/assets/images/trash.svg" alt="" /> </button> </td>
                                    </tr>
                                )}
                            </tbody> 
                        </table>
                    </div>
                </div>
            </Conteudo>
        </Container>
    )
}
