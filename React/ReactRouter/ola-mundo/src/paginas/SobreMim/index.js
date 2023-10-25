import styles from "./SobreMim.module.css";

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.png";

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Lucas Medeiros!
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto de lucas medeiros"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Oi, tudo bem? Eu sou Dev Trainee e estou contente de te ver por aqui.
            </p>
            <p className={styles.paragrafo}>
                Minha história com programação começou na  Universidade Pitágoras Unopar Anhanguera (UNOPAR), quando fiz curso superior de Análise e Desenvolvimento de Sistemas. Eu aprendi algoritmos, lógica de programação e o básico de várias linguagens, como, Python, Java, mas sem aprofundar muito em cada uma delas. Eu gosto muito de estudar programação, e fiz uma transição de carreira da área de contabilidade para área em que realmente amo o que eu faço.
            </p>
            <p className={styles.paragrafo}>
                No ensino superior, eu ja cursava Ciências Contábeis. Quase Finalizando o curso , começei a ir em um curso prático disponibilizado pela DB1 GROUP (BOOTCAMP DB1), onde eu descobri que a minha verdadeira paixão é (Programação), Lá eu tive a oportunidade de estudar desenvolvimento web, do inicio ao deploy,como: ALGORITMOS | LOGICA DA Programação |    Versionamento GIT | JAVASCRIPT| TYPESCRIPT | NODE | REACT | REACT NATIVE | tendo varios professores.
            </p>
            <p className={styles.paragrafo}>
                Com isso tive minha experiência de dev mais próxima da realidade, com professores já inseridos no mercado de trabalho, e aprendi muito enquanto codificava.
            </p>
            <p className={styles.paragrafo}>
                E foi enquanto eu estava no BOOTCAMP DB1 que decidi procurar o mais rápido possível entrar no mercado de trabalho. Eu encontrei uma vaga na DB1 Global Software como Dev Trainee e percebi que ela foi uma grande oportunidade, para iniciar a carreira de programação que é a verdadeira paixão minha. Para minha felicidade, participei de um processo seletivo, com a Bianca e o nosso querido gestor Cleber e fui escolhido para fazer parte do time de desenvolvimento da UNIPRIME.

            </p>
            <p className={styles.paragrafo}>
                Desde então, tem sido aprenas aprendizados atrás de aprendizados. fico bastante grato aos professores do curso prático, o BOOTCAMP DB1, em específico a um professor único e padrinho (DOUGLAS JUNIOR) onde sempre apoiou os alunos :
            </p>

            <p className={styles.paragrafo}>
                <strong> "SE TEM UMA PEQUENA CHANCE DE GOSTAR DISSO, ABRACA ISSO COM TODAS AS SUAS FORCAS."</strong>
            </p>
            <p className={styles.paragrafo}>
                <strong>"TUDO QUE EU CONQUISTEI FOI GRAÇAS A TECNOLOGIA."</strong>
            </p>

            <p className={styles.paragrafo}> 
            Hoje sou muito feliz de ter a oportunidade de trazer meus projetos enquando estudo. E Muito grato por toda a oportunidade de fazer parte desse mundo DB1.
            </p>
        </PostModelo >
    )
}