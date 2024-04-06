import { useState, useEffect } from "react"

const Formulario = () => {

    let [materiaA, setMateriaA] = useState(0);
    let [materiaB, setMateriaB] = useState(0);
    let [materiaC, setMateriaC] = useState(0);
    let [nome, setNome] = useState('');

    useEffect(()=>{
        // console.log('o componente iniciou')
        
        return () => {console.log('o componente finalizou')}
    },[])
    
    useEffect(()=>{
        // console.log('o estado do nome mudou')
    }, [nome])

    useEffect(()=>{
        // console.log('o estado da nota mudou')
    }, [materiaA, materiaB, materiaC])

    const alteraNome = (evento) => {
        setNome(evento.target.value);
    }

    const  CalculaMedia = () => {
        return (Number(materiaA)+Number(materiaB)+Number(materiaC))/3
    }

    const renderizaResultado = () =>{
        if(CalculaMedia() >= 7){
            return (
                <p>O(A) Aluno(a) {nome} foi Aprovado(a)</p>
            )
        }else{
            return (
                <p>O(A) Aluno(a) {nome} foi Reprovado(a)</p>
            )
        }
    }

    return (
        <form>
            <ul>
                {[1,2,3,4,5].map(item => <li key={item}>{item}</li>)}
            </ul>
            <input  type="text" placeholder="Seu nome" onChange={alteraNome}/>
            <input min={0} max={10} type="number" placeholder="Nota matéria A" onChange={({target}) => setMateriaA(parseInt(target.value))} />
            <input type="number" placeholder="Nota matéria B" onChange={e => setMateriaB(parseInt(e.target.value))} />
            <input type="number" placeholder="Nota matéria C" onChange={e => setMateriaC(parseInt(e.target.value))} />
            {/* <p>O Aluno Foi Aprovado</p>
            Nota matéria A: {materiaA}<br/>
            Nota matéria B: {materiaB} <br/>
            Nota matéria C: {materiaC}<br/> */}
            {renderizaResultado()}
        </form>
    )
}

export default Formulario