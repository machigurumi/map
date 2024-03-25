import './AboutUs.scss'
import config from '../config.json'
import { FaPlus } from 'react-icons/fa';

const Content = () => {
  const clickHandler = () => {
    if (config.form_url) {
      window.location.href = config.form_url
    }
  }


  return (
    <div className="about-us">
      <div className="container">
        <div className="branding">
          <div className="image"><img src={`${process.env.PUBLIC_URL}/machilogo.svg`} alt=""/></div>
          <div className="logo">まちぐるみ図書館デジタルマップ</div>
        </div>

        <p>「まちぐるみ図書館」は、まち全体を図書館に見立て、泉大津市内の様々な場所で本に出会える環境を整えるプロジェクトです。泉大津市立図書館シープラでは、「まちぐるみ図書館」を一緒につくるパートナーを募集しています！</p>
        

        {config.form_url?
          <>
            <h2>データの更新について</h2>
            <p>このアプリのデータを更新するには下の「 + 」ボタンを押してフォームに必要な情報を入力してください。</p>
            <div className="goto-form"><button><FaPlus color="#FFFFFF" onClick={clickHandler} /></button></div>
          </>
          :
          <></>
        }
      </div>
    </div>
  );
};

export default Content;
