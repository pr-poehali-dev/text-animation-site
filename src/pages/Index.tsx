import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [activeSection, setActiveSection] = useState("main");
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const sections = [
    { id: "main", title: "Главная", icon: "Home" },
    { id: "prologue", title: "Пролог", icon: "BookOpen" },
    { id: "tired", title: "Ты устал?", icon: "Coffee" },
    { id: "insomnia", title: "Бессонница", icon: "Moon" },
    { id: "meaning", title: "В чём смысл?", icon: "Compass" },
    { id: "still-here", title: "Ты ещё здесь", icon: "Heart" },
    { id: "epilogue", title: "Эпилог", icon: "Sunrise" },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case "main":
        return (
          <div className="text-center space-y-8">
            <div className="animate-fade-in">
              <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                «Ты ещё здесь — это уже победа»
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Большой мотивационный рассказ о силе жизни, борьбе и смысле
              </p>
              <Button
                onClick={() => setActiveSection("prologue")}
                className="bg-white text-black hover:bg-gray-200 px-8 py-3 text-lg"
              >
                Начать чтение
              </Button>
            </div>
          </div>
        );

      case "prologue":
        return (
          <div className="animate-slide-up space-y-6">
            <h2 className="text-4xl font-bold mb-8 text-center">Пролог</h2>
            <div className="text-lg leading-relaxed space-y-4">
              <p>Ты просыпаешься. Опять. Снова.</p>
              <p>
                Не выспался. Голова тяжёлая, мысли путаются. За окном — серость,
                дождь или просто пустота. В зеркале — усталые глаза, тени под
                ними, лицо, которое ты почти не узнаёшь.
              </p>
              <p className="italic">«Зачем?» — шепчет что-то внутри.</p>
              <p>Но ты всё ещё здесь.</p>
              <p className="text-2xl font-bold text-center mt-8">
                И это уже победа.
              </p>
            </div>
          </div>
        );

      case "tired":
        return (
          <div className="animate-slide-up space-y-6">
            <h2 className="text-4xl font-bold mb-8 text-center">
              Часть 1. Ты устал?
            </h2>
            <div className="text-lg leading-relaxed space-y-4">
              <p>
                Усталость — не слабость. Это знак. Знак того, что ты шёл долго.
                Очень долго.
              </p>
              <p>
                Ты падал. Поднимался. Снова падал. Иногда лежал, глядя в
                потолок, и думал: <em>«Может, хватит?»</em>
              </p>
              <p>Но ты вставал.</p>
              <p>
                Потому что даже маленький шаг — это движение. Даже если ты
                просто перевернулся на другой бок, когда не мог уснуть — это уже
                сопротивление.
              </p>
              <p className="text-xl font-semibold">
                Ты устал? Хорошо. Значит, ты жив.
              </p>
            </div>
          </div>
        );

      case "insomnia":
        return (
          <div className="animate-slide-up space-y-6">
            <h2 className="text-4xl font-bold mb-8 text-center">
              Часть 2. Бессонница
            </h2>
            <div className="text-lg leading-relaxed space-y-4">
              <p>Ночь. Тишина. Часы тикают, а мозг не выключается.</p>
              <div className="pl-4 border-l-2 border-gray-600 space-y-2">
                <p className="italic">«Что, если…»</p>
                <p className="italic">«А вдруг…»</p>
                <p className="italic">«Почему я…»</p>
              </div>
              <p>
                Мысли крутятся, как вихрь. Ты ворочаешься, смотришь в темноту,
                чувствуешь, как время тянется, а сон не приходит.
              </p>
              <p>Но знаешь что?</p>
              <p className="text-xl font-semibold">Ты не один.</p>
              <p>
                Миллионы людей сейчас тоже не спят. Они так же смотрят в
                потолок, так же борются со своими мыслями.
              </p>
              <p>И ты среди них. Ты — часть этого молчаливого сопротивления.</p>
              <p>Бессонница — не конец. Это просто ещё одна ночь.</p>
              <p className="text-xl font-semibold">А за ней будет утро.</p>
            </div>
          </div>
        );

      case "meaning":
        return (
          <div className="animate-slide-up space-y-6">
            <h2 className="text-4xl font-bold mb-8 text-center">
              Часть 3. В чём смысл?
            </h2>
            <div className="text-lg leading-relaxed space-y-4">
              <p>Иногда кажется, что его нет.</p>
              <p>
                Ты делаешь одно и то же, но ничего не меняется. Ты стараешься,
                но мир не замечает. Ты кричишь — а в ответ тишина.
              </p>
              <p>Но смысл — не где-то там.</p>
              <p>
                Он — в том, что ты <strong>ещё дышишь</strong>.
              </p>
              <p>
                В том, что ты можешь <strong>снова попробовать</strong>.
              </p>
              <p>
                В том, что ты <strong>не сдался</strong>, хотя мог бы.
              </p>
              <p>
                Смысл — не в грандиозных победах. Он — в том, чтобы просто{" "}
                <strong>быть</strong>.
              </p>
              <p className="text-xl font-semibold text-center">
                И этого достаточно.
              </p>
            </div>
          </div>
        );

      case "still-here":
        return (
          <div className="animate-slide-up space-y-6">
            <h2 className="text-4xl font-bold mb-8 text-center">
              Часть 4. Ты ещё здесь
            </h2>
            <div className="text-lg leading-relaxed space-y-4">
              <p>Мир не идеален. Жизнь — не справедлива.</p>
              <p>Но ты всё равно здесь.</p>
              <p>
                Значит, ты <strong>сильнее</strong>, чем думаешь.
              </p>
              <p>
                Значит, в тебе <strong>ещё есть огонь</strong>.
              </p>
              <p>
                Значит, <strong>ты нужен</strong>.
              </p>
              <p>Может быть, не всей вселенной. Может, даже не многим.</p>
              <p>
                Но <strong>кому-то</strong> — да.
              </p>
              <p>
                Или <strong>чему-то</strong>.
              </p>
              <p>
                Может, это просто утренний кофе, который ты любишь. Или книга,
                которую ты ещё не дочитал. Или песня, которую ты хочешь услышать
                ещё раз.
              </p>
              <p className="text-xl font-semibold text-center">
                Это — уже причина.
              </p>
            </div>
          </div>
        );

      case "epilogue":
        return (
          <div className="animate-slide-up space-y-6">
            <h2 className="text-4xl font-bold mb-8 text-center">Эпилог</h2>
            <div className="text-lg leading-relaxed space-y-4">
              <p>Ты просыпаешься.</p>
              <p>Опять. Снова.</p>
              <p>
                Но сегодня — ты <strong>выбираешь жить</strong>.
              </p>
              <p>Не потому что легко.</p>
              <p>
                А потому что <strong>ты можешь</strong>.
              </p>
              <p>
                Потому что <strong>ты уже победил</strong>.
              </p>
              <p>
                Просто тем, что <strong>ты ещё здесь</strong>.
              </p>
              <div className="border-t border-gray-600 pt-6 mt-8">
                <p className="font-semibold">P.S.</p>
                <p>Если этот текст нашёл тебя — значит, он для тебя.</p>
                <p>Держись.</p>
                <p>Ты не один.</p>
                <p className="text-xl font-bold">
                  И ты <strong>сильнее</strong>, чем думаешь.
                </p>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="BookOpen" size={24} />
              <span className="text-xl font-bold">Ты ещё здесь</span>
            </div>
            <div className="flex items-center space-x-2">
              {sections.map((section) => (
                <Button
                  key={section.id}
                  variant={activeSection === section.id ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setActiveSection(section.id)}
                  className="hidden md:flex items-center space-x-2"
                >
                  <Icon name={section.icon} size={16} />
                  <span>{section.title}</span>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-sm border-t border-gray-800 p-4 z-50">
        <div className="flex justify-between items-center">
          {sections.map((section) => (
            <Button
              key={section.id}
              variant={activeSection === section.id ? "default" : "ghost"}
              size="sm"
              onClick={() => setActiveSection(section.id)}
              className="p-2"
            >
              <Icon name={section.icon} size={18} />
            </Button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <main className="pt-20 pb-20 md:pb-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="bg-card/50 backdrop-blur-sm border-gray-800 p-8 md:p-12">
            {showContent && renderContent()}
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Index;
