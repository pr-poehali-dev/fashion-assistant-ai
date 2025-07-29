import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Icon from '@/components/ui/icon';
import Profile from './Profile';

const Index = () => {
  const [currentScreen, setCurrentScreen] = useState<'home' | 'profile'>('home');

  if (currentScreen === 'profile') {
    return <Profile onBack={() => setCurrentScreen('home')} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-style-black via-style-dark to-style-black">
      {/* Mobile App Container */}
      <div className="max-w-sm mx-auto bg-style-dark/80 backdrop-blur-lg min-h-screen">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 pt-12">
          <div>
            <h1 className="text-2xl font-bold text-style-text">StyleAI</h1>
            <p className="text-style-text-muted text-sm">Твой персональный стилист</p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setCurrentScreen('profile')}
            className="text-style-text hover:bg-style-gray/30"
          >
            <Avatar className="h-8 w-8">
              <AvatarImage src="/img/a0f52a81-1b4c-4ab4-8eb2-6c77b2b36810.jpg" />
              <AvatarFallback>АМ</AvatarFallback>
            </Avatar>
          </Button>
        </div>

        {/* Style Score Card */}
        <div className="px-6 mb-6">
          <Card className="bg-style-gray/20 backdrop-blur-sm border-style-gray/40">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-style-text text-lg">Оценка стиля</CardTitle>
                  <CardDescription className="text-style-text-muted">
                    Твой общий рейтинг
                  </CardDescription>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-style-text">8.5</div>
                  <Badge variant="secondary" className="bg-style-accent/20 text-style-accent border-style-accent/30">
                    Отлично
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Progress value={85} className="h-2" />
              <p className="text-xs text-style-text-muted mt-2">
                +0.3 с прошлой недели
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="px-6 mb-6">
          <h2 className="text-style-text font-semibold mb-4">Быстрые действия</h2>
          <div className="grid grid-cols-2 gap-3">
            <Button 
              variant="outline" 
              className="h-20 flex-col bg-style-gray/20 border-style-gray/40 hover:bg-style-gray/30 text-style-text"
            >
              <Icon name="Camera" size={24} className="mb-2" />
              <span className="text-sm">Оценить образ</span>
            </Button>
            <Button 
              variant="outline" 
              className="h-20 flex-col bg-style-gray/20 border-style-gray/40 hover:bg-style-gray/30 text-style-text"
            >
              <Icon name="Lightbulb" size={24} className="mb-2" />
              <span className="text-sm">Совет дня</span>
            </Button>
          </div>
        </div>

        {/* Recent Outfits */}
        <div className="px-6 mb-6">
          <h2 className="text-style-text font-semibold mb-4">Последние образы</h2>
          <div className="space-y-3">
            <Card className="bg-white/5 border-white/20">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-style-accent-muted to-style-accent rounded-lg flex items-center justify-center">
                    <Icon name="Shirt" size={20} className="text-style-text" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-style-text font-medium">Деловой стиль</h3>
                    <p className="text-style-text-muted text-sm">Сегодня, 09:30</p>
                  </div>
                  <Badge variant="secondary" className="bg-style-accent/20 text-style-accent">
                    9.2
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-style-gray/20 border-style-gray/40">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-style-accent-muted to-style-accent rounded-lg flex items-center justify-center">
                    <Icon name="Coffee" size={20} className="text-style-text" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-style-text font-medium">Casual встреча</h3>
                    <p className="text-style-text-muted text-sm">Вчера, 15:45</p>
                  </div>
                  <Badge variant="secondary" className="bg-style-accent-muted/30 text-style-accent">
                    7.8
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* AI Recommendations */}
        <div className="px-6 mb-6">
          <h2 className="text-style-text font-semibold mb-4">Рекомендации AI</h2>
          <Card className="bg-stone-200 border-stone-300">
            <CardContent className="p-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-style-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Sparkles" size={16} className="text-white" />
                </div>
                <div>
                  <h3 className="text-gray-800 font-medium mb-1">Улучши свой образ</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Попробуй добавить темно-синий пиджак к твоей белой рубашке. 
                    Это поднимет твой рейтинг на 0.5 балла!
                  </p>
                  <Button size="sm" className="mt-3 bg-style-accent hover:bg-style-accent/90 text-white">
                    Посмотреть
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Navigation */}
        <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-sm">
          <div className="bg-style-dark/80 backdrop-blur-lg border-t border-style-gray/20 px-6 py-4">
            <div className="flex justify-around">
              <Button variant="ghost" className="flex-col text-style-text px-4 py-3 h-auto min-h-[60px] hover:bg-style-gray/30">
                <Icon name="Home" size={20} />
                <span className="text-xs mt-1">Главная</span>
              </Button>
              <Button variant="ghost" className="flex-col text-style-light-gray px-4 py-3 h-auto min-h-[60px] hover:bg-style-accent/20 hover:text-style-accent">
                <Icon name="Search" size={20} />
                <span className="text-xs mt-1">Поиск</span>
              </Button>
              <Button variant="ghost" className="flex-col relative px-4 py-3 h-auto min-h-[60px] hover:bg-style-accent/20">
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-style-accent rounded-full flex items-center justify-center">
                  <span className="text-xs text-white font-medium">3</span>
                </div>
                <div className="text-style-accent">
                  <Icon name="Heart" size={20} />
                  <span className="text-xs mt-1 block">Избранное</span>
                </div>
              </Button>
              <Button 
                variant="ghost" 
                className="flex-col text-style-light-gray px-4 py-3 h-auto min-h-[60px] hover:bg-style-gray/30"
                onClick={() => setCurrentScreen('profile')}
              >
                <Icon name="User" size={20} />
                <span className="text-xs mt-1">Профиль</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Space for bottom navigation */}
        <div className="h-20"></div>
      </div>
    </div>
  );
};

export default Index;