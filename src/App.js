import './App.css';
import Testimonios from './Component/testimonios';

function App(){
  return (
    <div className='App'>
       <div className='contenedorApp'>
      <h1 className="tituloPrincipal">FreecodeCampGuatemala</h1>
      <Testimonios
       nombre='Shawn Wang'
       imagen='shawn'
       pais='Singapur'
       profesion='Ingeniero de Software'
       empresa='Amazon'
       testimonio='Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida.'
      />
      <Testimonios
       nombre='Sarah Chima'
       imagen='sarah'
       pais='Nigeria'
       profesion='Ingeniero de Software'
       empresa='ChatDesk'
       testimonio='freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble.'
      />
      <Testimonios
       nombre='Emma Bostian'
       imagen='Emma'
       pais='Suecia'
       profesion='Ingeniero de Software'
       empresa='Spotify'
       testimonio='Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.'
      />
    </div>

    </div>
   
   
  );
}

export default App;
