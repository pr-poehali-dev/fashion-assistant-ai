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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Mobile App Container */}
      <div className="max-w-sm mx-auto bg-black/40 backdrop-blur-lg min-h-screen">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 pt-12">
          <div>
            <h1 className="text-2xl font-bold text-white">StyleAI</h1>
            <p className="text-gray-400 text-sm">Твой персональный стилист</p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setCurrentScreen('profile')}
            className="text-white hover:bg-white/10"
          >
            <Avatar className="h-8 w-8">
              <AvatarImage src="/img/a0f52a81-1b4c-4ab4-8eb2-6c77b2b36810.jpg" />
              <AvatarFallback>АМ</AvatarFallback>
            </Avatar>
          </Button>
        </div>

        {/* Style Score Card */}
        <div className="px-6 mb-6">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-white text-lg">Оценка стиля</CardTitle>
                  <CardDescription className="text-gray-300">
                    Твой общий рейтинг
                  </CardDescription>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-white">8.5</div>
                  <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30">
                    Отлично
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Progress value={85} className="h-2" />
              <p className="text-xs text-gray-400 mt-2">
                +0.3 с прошлой недели
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="px-6 mb-6">
          <h2 className="text-white font-semibold mb-4">Быстрые действия</h2>
          <div className="grid grid-cols-2 gap-3">
            <Button 
              variant="outline" 
              className="h-20 flex-col bg-white/5 border-white/20 hover:bg-white/10 text-white"
            >
              <Icon name="Camera" size={24} className="mb-2" />
              <span className="text-sm">Оценить образ</span>
            </Button>
            <Button 
              variant="outline" 
              className="h-20 flex-col bg-white/5 border-white/20 hover:bg-white/10 text-white"
            >
              <Icon name="Lightbulb" size={24} className="mb-2" />
              <span className="text-sm">Совет дня</span>
            </Button>
          </div>
        </div>

        {/* Recent Outfits */}
        <div className="px-6 mb-6">
          <h2 className="text-white font-semibold mb-4">Последние образы</h2>
          <div className="space-y-3">
            <Card className="bg-white/5 border-white/20">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Icon name="Shirt" size={20} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-medium">Деловой стиль</h3>
                    <p className="text-gray-400 text-sm">Сегодня, 09:30</p>
                  </div>
                  <Badge variant="secondary" className="bg-green-500/20 text-green-400">
                    9.2
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/20">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                    <Icon name="Coffee" size={20} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-medium">Casual встреча</h3>
                    <p className="text-gray-400 text-sm">Вчера, 15:45</p>
                  </div>
                  <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-400">
                    7.8
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* AI Recommendations */}
        <div className="px-6 mb-6">
          <h2 className="text-white font-semibold mb-4">Рекомендации AI</h2>
          <Card className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-500/30">
            <CardContent className="p-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Sparkles" size={16} className="text-white" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Улучши свой образ</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Попробуй добавить темно-синий пиджак к твоей белой рубашке. 
                    Это поднимет твой рейтинг на 0.5 балла!
                  </p>
                  <Button size="sm" className="mt-3 bg-white/20 hover:bg-white/30 text-white">
                    Посмотреть
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Navigation */}
        <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-sm">
          <div className="bg-black/60 backdrop-blur-lg border-t border-white/10 px-6 py-4">
            <div className="flex justify-around">
              <Button variant="ghost" size="sm" className="flex-col text-white">
                <Icon name="Home" size={20} />
                <span className="text-xs mt-1">Главная</span>
              </Button>
              <Button variant="ghost" size="sm" className="flex-col text-gray-400">
                <Icon name="Search" size={20} />
                <span className="text-xs mt-1">Поиск</span>
              </Button>
              <Button variant="ghost" size="sm" className="flex-col text-gray-400">
                <Icon name="Heart" size={20} />
                <span className="text-xs mt-1">Избранное</span>
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="flex-col text-gray-400"
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