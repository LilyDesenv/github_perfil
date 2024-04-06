import styles from './Perfil.module.css'

const Perfil = ({nomeUsuario} ) => {
    const endereco = `https://github.com/${nomeUsuario}.png`
    return(
        <header className={styles.header}>
            <img className={styles.avatar}  src={endereco} alt="" />
            <h1 className={styles.name}>{nomeUsuario}</h1>
        </header>
    )
}
// const Perfil = (props) => {
//     // const usuario = {
//     //     nome: 'Lyly',
//     //     avatar: 'https://github.com/LilyDesenv.png'
//     // }
//     const {endereco, nome} = props;
//     return(
//         <div>
//             {JSON.stringify(props)}
//             {/* <img className='perfil-avatar'  src={props.endereco} alt="" />
//             <h3 className='perfil-tittle'>{props.nome}</h3> */}
//             <img className='perfil-avatar'  src={endereco} alt="" />
//             <h3 className='perfil-tittle'>{nome}</h3>
//         </div>
//     )
// }
export default Perfil;
//export default function() {
// export default () => {
//     const usuario = {
//         nome: 'Lyly',
//         avatar: 'https://github.com/LilyDesenv.png'
//     }
//     return(
//         <div>
//             <img className='perfil-avatar'  src={usuario.avatar} alt="" />
//             <h3 className='perfil-tittle'>{usuario.nome}</h3>
//         </div>
//     )
// }
