import { useState } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';

const translations = {
  ko: {
    title: 'AIO SCORE',
    subtitle: '우리 브랜드의 AI 최적화 점수는 몇 점일까요?',
    domainPlaceholder: '도메인을 입력하세요 (예: wisebirds.jp)',
    industryPlaceholder: '업종을 선택해주세요',
    start: '진단 시작',
    industries: ['병원', '이커머스', '교육'],
  },
  ja: {
    title: 'AIOスコア',
    subtitle: 'あなたのブランドのAI最適化スコアは何点でしょうか？',
    domainPlaceholder: 'ドメインを入力してください（例: wisebirds.jp）',
    industryPlaceholder: '業種を選択してください',
    start: '診断を始める',
    industries: ['美容外科', 'ECサイト', '教育'],
  },
  en: {
    title: 'AIO SCORE',
    subtitle: 'What is your brand’s AI optimization score?',
    domainPlaceholder: 'Enter your domain (e.g. wisebirds.jp)',
    industryPlaceholder: 'Select your industry',
    start: 'Start Diagnosis',
    industries: ['Medical', 'E-commerce', 'Education'],
  },
};

function App() {
  const [language, setLanguage] = useState('ko');
  const [domain, setDomain] = useState('');
  const [industry, setIndustry] = useState('');
  const navigate = useNavigate();
  const t = translations[language];

  const handleStart = () => {
    if (!domain || !industry) {
      alert('도메인과 업종을 모두 선택해주세요!');
      return;
    }
    navigate('/loading', {
      state: { domain, industry, language }
    });
  };

  return (
    <div className="page-wrapper">
      <div className="language-selector">
        <img src="https://flagcdn.com/w40/kr.png" alt="한국어" onClick={() => setLanguage('ko')} />
        <img src="https://flagcdn.com/w40/jp.png" alt="日本語" onClick={() => setLanguage('ja')} />
        <img src="https://flagcdn.com/w40/us.png" alt="English" onClick={() => setLanguage('en')} />
      </div>

      <div className="container">
        <h1>{t.title}</h1>
        <p className="subtitle">{t.subtitle}</p>

        <div className="form">
          <input
            type="text"
            placeholder={t.domainPlaceholder}
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
          />

          <select value={industry} onChange={(e) => setIndustry(e.target.value)}>
            <option value="" disabled hidden>{t.industryPlaceholder}</option>
            {t.industries.map((item, index) => (
              <option key={index} value={item}>{item}</option>
            ))}
          </select>

          <button onClick={handleStart}>{t.start}</button>
        </div>
      </div>
    </div>
  );
}

export default App;
