import "./AboutMe.css";
import Award from "../../img/award.png";

const AboutMe = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">Немного о себе</h1>
        <p className="a-sub">
        Давно установленный факт, что читатель будет отвлекаться на
           читаемый контент)
        </p>
        <p className="a-desc">
          Я бакалавр по специальности Информационная Безопасность , опыт в этой сфере меньше года  ,
          больше 8 лет увлекаюсь видеосьемкой и сотрудничаю со многими компаниями в этой сфере  .
          Год назад начал изучать HTML , CSS , JS . Создавать Front очень увлекательнo можно заливать в код сутками)))
          Front-end разработчиков можно условно назвать «повелителями первых впечатлений».
          Разработчик находится на передовой, отвечая за внешний функционал сайта или веб-приложения. Во многом от front-end 
          разработчика зависит мнение пользователей – поставить ли программному продукту  мысленный лайк или никогда больше его не использовать и забыть, как страшный сон.
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Makers.kg Awards 2021</h4>
            <p className="a-award-desc">
              Лучший студент недели , лучший пожарный 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
