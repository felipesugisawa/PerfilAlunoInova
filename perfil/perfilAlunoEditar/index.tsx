import React, {useEffect, useState} from 'react';
import Input from '../../components/input';
import BackgroundAluno from '../../components/backgroundAluno';
import '../perfilAluno/style.css';
import {useHistory} from 'react-router-dom';
import {parseJwt} from '../../services/auth';
import addimg from '../../assets/images/mais_Cinza.png';
import trashimg from '../../assets/images/lixo_Cinza.png';
import Header from '../../components/header/index';
import Footer from '../../components/footer/index';
import AlunoCadastro from '../alunoCadastro';

function PerfilAluno(){
    let history = useHistory();
    const [IdAluno, setIdAluno] = useState(0);
    const [Nome, setNome] = useState(0);
    const [Empregado, setEmpregado] = useState('');
    const [IdGenero, setIdGenero] = useState(0);
    // ususario
    const [Telefone,setTelefone ] = useState('');
    const [Celular, setCelular ] = useState('');
    const [EmailContato, setEmailContato ] = useState('');
    // Curriculo
    const [NomeEmpresa, setNomeEmpresa] = useState('');
    const [NomeEscola, setNomeEscola] = useState('');
    const [DataInicioEscola, setDataInicioEscola] = useState('');
    const [DataTerminoEscola, setDataTerminoEscola] = useState('');
    const [Competencia, setCompetencia] = useState('');
    const [LinkLinkedIn, setLinkLinkedIn] = useState('');
    const [LinkGitHub, setLinkGitHub] = useState('');
    const [InformacoesAdicionais, setInformacoesAdicionais] = useState('');

    useEffect(() => {
        listarAlunoPorId(parseJwt().Id);

    }, [])

    const listarAlunoPorId = (id:number) => {
        fetch('http://localhost:5000/api/Aluno/' + id, {
            method: 'GET',
            headers: {
                authorization: 'Bearer' + localStorage.getItem('token-inova')
            }
        })
        .then(resp => resp.json())
        .then(data => {
            setIdAluno(data.idAluno);
            setNome(data.nome);
            setEmpregado(data.empregado);
            setIdGenero(data.idGenero);
            
            setTelefone(data.telefone); 
            setCelular(data.celular);
            setEmailContato(data.emailContato);
            
            setNomeEmpresa(data.nomeEmpresa);
            setNomeEscola(data.nomeEscola);
            setDataInicioEscola(data.dataInicioEscola);
            setDataTerminoEscola(data.dataTerminoEscola);
            setCompetencia(data.competencia);
            setLinkLinkedIn(data.linkLinkedIn);
            setLinkGitHub(data.linkGitHub);
            setInformacoesAdicionais(data.informacoesAdicionais);
        })
        .catch(e => console.error(e));
    }
    // const trash = (id:any) =>{
    //     const url = 'http://localhost:5000/api/inovavagas/'+id;
    //         fetch(url, {
    //             headers:{
    //             'Content-Type': 'application/json;charset=utf-8',
    //             authorization: 'bearer '+ localStorage.getItem('token-inovavagas')
    //         },
    //         method: 'DELETE'
    //     })
    //     .then(Response => Response.json())
    //     .then(dados=>{
    //     listar();
    //     })
    //     .catch(err => {
    //     console.error(err); //retornar um erro 
    //     })
    // };

    
    return (
        <div>
            {/* {
            PerfilAluno.map((item: any) =>{
                return(
                    <tr key={item.idFilme}>
                    <td>{item.idFilme}</td>
                    <td>{item.idGeneroNavigation.nome}</td>
                    <td>{item.titulo}</td>
                    <td className="icon">
                    <img src={addimg} onClick={() => add(item.idFilme)} />  
                    <img src={trashimg} onClick={() => trash(item.idFilme)}/>  
                    </td>
                    </tr>
                )
                })
            } */}
            <Header pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
            <BackgroundAluno/>

            <div className="box2">
                <div className="sobreusuario">

                    <div className="editar">
                        <h2>{Nome}</h2>
                        <a href="../perfilAluno">Editar Curriculo</a>
                        <div className="botoes">
                            <img src={trashimg} className="trash" alt="adicionar" /> {/*onClick={() => trash(item.idFilme)}width="40px"*/}
                            <img src={addimg} alt="adicionar" width="20px"/>
                        </div>
                    </div>
                    <h3>{EmailContato}</h3>
                    <h3>{Celular}</h3>
                    <h3>{Telefone}</h3>

                    <div className="p">
                        <p>
                            Experiencia profissional
                            <img src={trashimg} className="trash" alt="adicionar" width="40px"/>
                            <img src={addimg} alt="adicionar" width="20px"/>
                        </p>
                    </div>
                    <div className="color-line"></div>
                    <Input name='NomeEmpresa' placeholder='Nome Empresa' type='text'  onChange={event => setNomeEmpresa(event.target.value)} />
                    <Input name='Empregado' placeholder='Empregado' type='text'  onChange={event => setEmpregado(event.target.value)} />
                    <h3>{NomeEmpresa}</h3>
                    <h3>{Empregado}</h3>

                    <div className="p">
                        <p>
                            Formacao academica
                            <img src={trashimg} className="trash" alt="adicionar" width="40px"/>
                            <img src={addimg} alt="adicionar" width="20px"/>
                        </p>
                    </div>
                    <div className="color-line"></div>
                    <Input name='NomeEscola' placeholder='NomeEscola' type='text'  onChange={event => setNomeEscola(event.target.value)} />
                    <Input name='DataInicioEscola' placeholder='Data Inicio Escola' type='date'  onChange={event => setDataInicioEscola(event.target.value)} />
                    <Input name='DataTerminoEscola' placeholder='Data Termino Escola' type='date'  onChange={event => setDataTerminoEscola(event.target.value)} />
                    <h4>Ensino medio cursando ou interrompido</h4>
                    <h3>Escola: {NomeEscola}</h3>
                    <h3>{DataInicioEscola} até {DataTerminoEscola}</h3>

                    <div className="p">
                        <p>
                            Competencias
                            <img src={trashimg} className="trash" alt="adicionar" width="40px"/>
                            <img src={addimg} alt="adicionar" width="20px"/>
                        </p>
                    </div>
                    <div className="color-line"></div>
                    <Input name='Competencia' placeholder='Competencia' type='text'  onChange={event => setCompetencia(event.target.value)} />
                    <h3>{Competencia}</h3>
                    
                    <div className="p">
                        <p>
                            Redes Sociais
                            <img src={trashimg} className="trash" alt="adicionar" width="40px"/>
                            <img src={addimg} alt="adicionar" width="20px"/>
                        </p>
                    </div>
                    <div className="color-line"></div>
                    <Input name='links' placeholder='Link LinkedIn' type='text'  onChange={event => setLinkLinkedIn(event.target.value)} />
                    <Input name='links' placeholder='Link Git Hub' type='text'  onChange={event => setLinkGitHub(event.target.value)} />
                    <h3>Linkedin:</h3>
                    <h3>{LinkLinkedIn}</h3>
                    <h3>GitHub:</h3>
                    <h3>{LinkGitHub}</h3>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default PerfilAluno;