import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-foreground">SmartHome</div>
          <div className="hidden md:flex gap-8">
            <a href="#hero" className="text-muted-foreground hover:text-foreground transition-colors">Главная</a>
            <a href="#tech" className="text-muted-foreground hover:text-foreground transition-colors">Технологии</a>
            <a href="#benefits" className="text-muted-foreground hover:text-foreground transition-colors">Преимущества</a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Цены</a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Контакты</a>
          </div>
          <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
            Консультация
          </Button>
        </div>
      </nav>

      <section id="hero" className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
                Умный дом<br />
                <span className="text-accent">премиум-класса</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Полный контроль климата, освещения и штор в одном касании. 
                Технологии будущего для вашего комфорта сегодня.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8">
                  Рассчитать стоимость
                </Button>
                <Button size="lg" variant="outline" className="border-2">
                  Смотреть проекты
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/a1a2fb13-416b-4726-a67c-2f7e665c3d8c/files/c708f6e3-7ff8-440c-962e-8ac8fefe2db8.jpg" 
                alt="Умный дом интерьер"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="tech" className="py-20 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Технологии управления
            </h2>
            <p className="text-xl text-muted-foreground">
              Три ключевых системы для максимального комфорта
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 animate-fade-in">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                <Icon name="Thermometer" size={32} className="text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Климат-контроль</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Автоматическое поддержание идеальной температуры в каждой комнате. 
                Интеграция с системами отопления и кондиционирования.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-accent" />
                  Зонирование по комнатам
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-accent" />
                  Адаптивные сценарии
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-accent" />
                  Удаленное управление
                </li>
              </ul>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 animate-fade-in [animation-delay:200ms]">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                <Icon name="Lightbulb" size={32} className="text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Умное освещение</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Настройка яркости и температуры света под любое настроение. 
                Сценарии освещения для работы, отдыха и развлечений.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-accent" />
                  RGB и теплый/холодный свет
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-accent" />
                  Датчики присутствия
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-accent" />
                  Голосовое управление
                </li>
              </ul>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 animate-fade-in [animation-delay:400ms]">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                <Icon name="Blinds" size={32} className="text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Автоматические шторы</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Электрокарнизы с бесшумными моторами. Управление по расписанию, 
                датчикам освещенности или вручную.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-accent" />
                  Таймер и сценарии
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-accent" />
                  Датчик освещенности
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-accent" />
                  Тихая работа
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/a1a2fb13-416b-4726-a67c-2f7e665c3d8c/files/6b2f0ca6-883b-43e2-9367-cf6590204f97.jpg" 
                alt="Панель управления"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
            
            <div className="animate-fade-in">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">
                Почему выбирают нас
              </h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Shield" size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Надежность</h3>
                    <p className="text-muted-foreground">
                      Используем только проверенное оборудование премиум-класса 
                      с гарантией до 5 лет
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Zap" size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Энергоэффективность</h3>
                    <p className="text-muted-foreground">
                      Экономия до 40% на счетах за электричество благодаря 
                      умному управлению системами
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Settings" size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Индивидуальный подход</h3>
                    <p className="text-muted-foreground">
                      Проектируем систему под ваш образ жизни и архитектуру помещения
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Users" size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Сервис 24/7</h3>
                    <p className="text-muted-foreground">
                      Техподдержка и обслуживание в любое время. 
                      Выезд специалиста в день обращения
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Тарифные планы
            </h2>
            <p className="text-xl text-muted-foreground">
              Выберите оптимальное решение для вашего дома
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 border-2 hover:shadow-xl transition-all duration-300 animate-fade-in">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">Стандарт</h3>
                <p className="text-muted-foreground">Для квартир до 80 м²</p>
              </div>
              <div className="text-center mb-8">
                <div className="text-5xl font-bold text-foreground mb-2">350 000₽</div>
                <p className="text-sm text-muted-foreground">под ключ</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Климат-контроль (2 зоны)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Освещение (до 15 точек)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Шторы (до 3 окон)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Мобильное приложение</span>
                </li>
              </ul>
              <Button className="w-full" variant="outline">
                Узнать подробнее
              </Button>
            </Card>

            <Card className="p-8 border-4 border-accent hover:shadow-2xl transition-all duration-300 relative animate-fade-in [animation-delay:200ms]">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-6 py-1 rounded-full text-sm font-bold">
                Популярный
              </div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">Премиум</h3>
                <p className="text-muted-foreground">Для домов до 200 м²</p>
              </div>
              <div className="text-center mb-8">
                <div className="text-5xl font-bold text-foreground mb-2">750 000₽</div>
                <p className="text-sm text-muted-foreground">под ключ</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Климат-контроль (5 зон)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Освещение (до 40 точек)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Шторы (до 8 окон)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Голосовое управление</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Датчики присутствия</span>
                </li>
              </ul>
              <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                Заказать проект
              </Button>
            </Card>

            <Card className="p-8 border-2 hover:shadow-xl transition-all duration-300 animate-fade-in [animation-delay:400ms]">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">Люкс</h3>
                <p className="text-muted-foreground">Для больших домов</p>
              </div>
              <div className="text-center mb-8">
                <div className="text-5xl font-bold text-foreground mb-2">от 1.5М₽</div>
                <p className="text-sm text-muted-foreground">индивидуальный расчет</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Климат без ограничений</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Освещение RGB + сценарии</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Шторы любой сложности</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Интеграция с безопасностью</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Персональный менеджер</span>
                </li>
              </ul>
              <Button className="w-full" variant="outline">
                Индивидуальный расчет
              </Button>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Получить консультацию
            </h2>
            <p className="text-xl text-muted-foreground">
              Оставьте заявку и мы свяжемся с вами в течение 30 минут
            </p>
          </div>

          <Card className="p-8 border-2 animate-scale-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Ваше имя
                </label>
                <Input 
                  placeholder="Иван Петров"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="h-12"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Телефон
                </label>
                <Input 
                  type="tel"
                  placeholder="+7 (999) 123-45-67"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="h-12"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Сообщение
                </label>
                <Textarea 
                  placeholder="Расскажите о вашем проекте..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={4}
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
              >
                Отправить заявку
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </form>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-border bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold text-foreground mb-4">SmartHome</div>
              <p className="text-muted-foreground text-sm">
                Умные технологии для вашего комфорта
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-foreground mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Проекты</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Отзывы</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-foreground mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Установка</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Обслуживание</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Гарантия</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-foreground mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (495) 123-45-67
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@smarthome.ru
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © 2024 SmartHome. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
