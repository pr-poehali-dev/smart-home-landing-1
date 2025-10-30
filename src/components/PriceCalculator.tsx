import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import Icon from '@/components/ui/icon';

const PriceCalculator = () => {
  const [area, setArea] = useState([100]);
  const [climateZones, setClimateZones] = useState([3]);
  const [lightPoints, setLightPoints] = useState([20]);
  const [curtainCount, setCurtainCount] = useState([4]);
  const [voiceControl, setVoiceControl] = useState(false);
  const [presenceSensors, setPresenceSensors] = useState(false);
  const [rgbLighting, setRgbLighting] = useState(false);

  const calculatePrice = () => {
    let basePrice = 200000;
    
    basePrice += area[0] * 2500;
    basePrice += climateZones[0] * 45000;
    basePrice += lightPoints[0] * 3500;
    basePrice += curtainCount[0] * 25000;
    
    if (voiceControl) basePrice += 80000;
    if (presenceSensors) basePrice += 60000;
    if (rgbLighting) basePrice += 45000;
    
    return basePrice;
  };

  const totalPrice = calculatePrice();

  return (
    <Card className="p-8 border-2">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-foreground mb-2">
          Рассчитайте стоимость проекта
        </h3>
        <p className="text-muted-foreground">
          Настройте параметры под ваши потребности
        </p>
      </div>

      <div className="space-y-8">
        <div>
          <div className="flex justify-between items-center mb-4">
            <Label className="text-base font-medium">Площадь помещения</Label>
            <span className="text-lg font-bold text-accent">{area[0]} м²</span>
          </div>
          <Slider
            value={area}
            onValueChange={setArea}
            min={30}
            max={500}
            step={10}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-muted-foreground mt-2">
            <span>30 м²</span>
            <span>500 м²</span>
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-4">
            <Label className="text-base font-medium">Зоны климат-контроля</Label>
            <span className="text-lg font-bold text-accent">{climateZones[0]} зон</span>
          </div>
          <Slider
            value={climateZones}
            onValueChange={setClimateZones}
            min={1}
            max={10}
            step={1}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-muted-foreground mt-2">
            <span>1 зона</span>
            <span>10 зон</span>
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-4">
            <Label className="text-base font-medium">Точки освещения</Label>
            <span className="text-lg font-bold text-accent">{lightPoints[0]} шт</span>
          </div>
          <Slider
            value={lightPoints}
            onValueChange={setLightPoints}
            min={5}
            max={100}
            step={5}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-muted-foreground mt-2">
            <span>5 точек</span>
            <span>100 точек</span>
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-4">
            <Label className="text-base font-medium">Количество штор</Label>
            <span className="text-lg font-bold text-accent">{curtainCount[0]} окон</span>
          </div>
          <Slider
            value={curtainCount}
            onValueChange={setCurtainCount}
            min={1}
            max={20}
            step={1}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-muted-foreground mt-2">
            <span>1 окно</span>
            <span>20 окон</span>
          </div>
        </div>

        <div className="border-t border-border pt-6 space-y-4">
          <p className="font-medium text-foreground mb-4">Дополнительные опции</p>
          
          <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
            <div className="flex items-center gap-3">
              <Icon name="Mic" size={20} className="text-accent" />
              <div>
                <p className="font-medium text-foreground">Голосовое управление</p>
                <p className="text-sm text-muted-foreground">Alexa, Google Assistant</p>
              </div>
            </div>
            <Switch checked={voiceControl} onCheckedChange={setVoiceControl} />
          </div>

          <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
            <div className="flex items-center gap-3">
              <Icon name="Radar" size={20} className="text-accent" />
              <div>
                <p className="font-medium text-foreground">Датчики присутствия</p>
                <p className="text-sm text-muted-foreground">Автоматика освещения</p>
              </div>
            </div>
            <Switch checked={presenceSensors} onCheckedChange={setPresenceSensors} />
          </div>

          <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
            <div className="flex items-center gap-3">
              <Icon name="Palette" size={20} className="text-accent" />
              <div>
                <p className="font-medium text-foreground">RGB освещение</p>
                <p className="text-sm text-muted-foreground">16 млн цветов</p>
              </div>
            </div>
            <Switch checked={rgbLighting} onCheckedChange={setRgbLighting} />
          </div>
        </div>

        <div className="border-t border-border pt-6">
          <div className="bg-accent/10 rounded-xl p-6 mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-lg font-medium text-foreground">Итоговая стоимость:</span>
              <div className="text-right">
                <div className="text-4xl font-bold text-accent">
                  {totalPrice.toLocaleString('ru-RU')} ₽
                </div>
                <p className="text-sm text-muted-foreground mt-1">под ключ с установкой</p>
              </div>
            </div>
          </div>

          <div className="grid gap-3">
            <Button 
              size="lg" 
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Получить консультацию
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="w-full"
            >
              <Icon name="FileText" size={20} className="mr-2" />
              Скачать смету
            </Button>
          </div>
        </div>

        <div className="bg-muted/30 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <Icon name="Info" size={20} className="text-accent flex-shrink-0 mt-0.5" />
            <div className="text-sm text-muted-foreground">
              <p className="font-medium text-foreground mb-1">Что входит в стоимость:</p>
              <ul className="space-y-1">
                <li>• Оборудование премиум-класса</li>
                <li>• Монтаж и настройка системы</li>
                <li>• Гарантия 3 года</li>
                <li>• Обучение пользованию</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default PriceCalculator;
