import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Result.css";

const translations = {
  ko: {
    title: "AIO 최적화 진단 결과",
    subtitle: "AI 최적화 점수",
    domainLabel: "도메인",
    industryLabel: "업종",
    buttonText: "WBaio 바로가기",
    buttonDesc: "WBaio와 함께 AIO 점수를 높여보세요!",
    items: [
      {
        title: "AI 검색 가시성",
        score: 8,
        max: 20,
        desc: `브랜드 키워드가 AI 검색 플랫폼에 잘 노출되지 않습니다.\nAI는 웹페이지의 구조와 키워드를 바탕으로 브랜드를 인식합니다.\n현재 사이트는 주요 키워드와 콘텐츠가 AI에 의해 인식되지 않고 있습니다.`
      },
      {
        title: "외부 신뢰도 지표",
        score: 6,
        max: 20,
        desc: `사이트에 대한 외부 링크가 부족합니다.\nAI는 다른 사이트에서 얼마나 언급되는지를 바탕으로 신뢰도를 판단합니다.\n현재는 인용 및 추천 콘텐츠가 거의 없습니다.`
      },
      {
        title: "콘텐츠 구조화",
        score: 9,
        max: 20,
        desc: `본문에 제목, 소제목, 리스트 등의 구조가 부족합니다.\nAI는 정보를 파악할 때 시맨틱 구조를 중요하게 생각합니다.\n현재 페이지는 일관된 구조 없이 콘텐츠가 배열되어 있습니다.`
      },
      {
        title: "메타데이터 최적화",
        score: 12,
        max: 20,
        desc: `title, description, og 태그 등이 일부 누락되었습니다.\nAI는 메타데이터를 바탕으로 콘텐츠 요약 및 분류를 수행합니다.\n해당 항목이 부족하면 AI 검색 노출이 제한됩니다.`
      },
      {
        title: "FAQ 및 대화형 콘텐츠",
        score: 12,
        max: 20,
        desc: `AI는 사용자 질문에 답변 가능한 콘텐츠를 우선 인식합니다.\n자연어 기반 FAQ가 없다면 AI 추천에서 제외될 수 있습니다.\n현재는 대화형 콘텐츠나 FAQ가 거의 존재하지 않습니다.`
      }
    ]
  },
  en: {
    title: "AIO Diagnosis Result",
    subtitle: "AIO Score",
    domainLabel: "Domain",
    industryLabel: "Industry",
    buttonText: "Go to WBaio",
    buttonDesc: "Boost your AI visibility with WBaio",
    items: [
      {
        title: "AI Visibility",
        score: 8,
        max: 20,
        desc: `Your brand keywords are rarely exposed on AI search platforms.\nAI recognizes your brand based on page structure and keyword relevance.\nCurrent content is not indexed effectively.`
      },
      {
        title: "External Credibility",
        score: 6,
        max: 20,
        desc: `There are few external links to your site.\nAI evaluates trustworthiness based on citations and backlinks.\nVery few sources currently reference your site.`
      },
      {
        title: "Content Structuring",
        score: 9,
        max: 20,
        desc: `Your content lacks headings, lists, and hierarchy.\nAI favors semantic structure to interpret information.\nCurrent layout is inconsistent and unstructured.`
      },
      {
        title: "Metadata Optimization",
        score: 12,
        max: 20,
        desc: `Missing or incomplete metadata detected.\nAI uses metadata to summarize and categorize pages.\nSearch visibility may be restricted due to poor markup.`
      },
      {
        title: "FAQ & Conversational Content",
        score: 12,
        max: 20,
        desc: `AI prefers content that can directly answer user queries.\nFAQ content is important for natural language understanding.\nYour site lacks these formats.`
      }
    ]
  },
  ja: {
    title: "AIO最適化診断結果",
    subtitle: "AI最適化スコア",
    domainLabel: "ドメイン",
    industryLabel: "業種",
    buttonText: "WBaioへ",
    buttonDesc: "WBaioでAI可視性を改善しましょう！",
    items: [
      {
        title: "AI検索可視性",
        score: 8,
        max: 20,
        desc: `ブランドキーワードがAI検索にほとんど表示されません。\nAIはWebページの構造とキーワードに基づいて認識します。\n現在のコンテンツはAIにうまく認識されていません。`
      },
      {
        title: "外部信頼指標",
        score: 6,
        max: 20,
        desc: `外部からのリンクが非常に少ないです。\nAIは外部でどれだけ言及されているかで信頼性を判断します。\n参照・推薦コンテンツが不足しています。`
      },
      {
        title: "コンテンツ構造化",
        score: 9,
        max: 20,
        desc: `見出しやリストなどの構造が不足しています。\nAIはセマンティック構造を重視します。\n現在のページは一貫性に欠けています。`
      },
      {
        title: "メタデータ最適化",
        score: 12,
        max: 20,
        desc: `メタデータの設定が不完全です。\nAIはtitle, ogタグなどから内容を理解します。\n検索可視性が制限される恐れがあります。`
      },
      {
        title: "FAQと対話型コンテンツ",
        score: 12,
        max: 20,
        desc: `AIはユーザー質問に答えられる内容を優先します。\nFAQなどの自然言語コンテンツが重要です。\n現在はこうした形式が不足しています。`
      }
    ]
  }
};

const Result = () => {
  const location = useLocation();
  const { domain, industry, language: initialLang } = location.state || {};
  const [language, setLanguage] = useState(initialLang || "ko");
  const t = translations[language];
  const totalScore = 47;

  const handleGoToWBaio = () => {
    window.location.href = "https://wbaio.ai";
  };

  return (
    <div className="result-page">
        {/* 오른쪽 상단 언어 선택 */}
      <header className="lang-switcher">
      <span className="lang-label">🌐 현재 언어: {language}</span>
      <div className="flag-buttons">
         <img src="https://flagcdn.com/w40/kr.png" alt="KR" onClick={() => setLanguage("ko")} />
         <img src="https://flagcdn.com/w40/jp.png" alt="JP" onClick={() => setLanguage("ja")} />
         <img src="https://flagcdn.com/w40/us.png" alt="EN" onClick={() => setLanguage("en")} />
      </div>
      </header>
      
      <h1>{t.title}</h1>
      <p><strong>{t.domainLabel}:</strong> {domain}</p>
      <p><strong>{t.industryLabel}:</strong> {industry}</p>
    
      {/* 점수 & 코멘트 */}
      <div className="summary-section">
        <div className="score-visual">
          <svg className="progress-circle" width="160" height="160">
            <g transform="rotate(-90 80 80)">
              <circle cx="80" cy="80" r="70" className="bg" />
              <circle
                cx="80"
                cy="80"
                r="70"
                className="fg"
                strokeDasharray={440}
                strokeDashoffset={440 - (440 * totalScore) / 100}
              />
            </g>
            <text x="80" y="90" textAnchor="middle" className="score-text">
              {totalScore}
            </text>
          </svg>
          <p>{t.subtitle}</p>
        </div>

        <div className="score-comment">
          {t.comment}
        </div>
      </div>

      {/* 항목별 카드 */}
      <div className="card-section">
        {t.items.map((item, idx) => (
          <div className="feedback-card" key={idx}>
            <h3>{item.title}</h3>
            <div className="score-bar">
              <div
                className="score-fill"
                style={{ width: `${(item.score / item.max) * 100}%` }}
              ></div>
              <span className="score-label">{item.score}/{item.max}</span>
            </div>
            <p style={{ whiteSpace: "pre-line" }}>{item.desc}</p>
          </div>
        ))}
      </div>

      {/* 버튼 */}
      <div className="next-action">
        <p>{t.buttonDesc}</p>
        <button className="wbaio-button" onClick={handleGoToWBaio}>
          {t.buttonText}
        </button>
      </div>
    </div>
  );
};

export default Result;
