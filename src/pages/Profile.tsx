import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import Icon from '@/components/ui/icon';

interface ProfileProps {
  onBack: () => void;
}

const Profile = ({ onBack }: ProfileProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-style-black via-style-dark to-style-black">
      {/* Mobile App Container */}
      <div className="max-w-sm mx-auto bg-style-dark/80 backdrop-blur-lg min-h-screen">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 pt-12">
          <Button
            variant="ghost"
            size="icon"
            onClick={onBack}
            className="text-style-text hover:bg-style-gray/30"
          >
            <Icon name="ArrowLeft" size={24} />
          </Button>
          <h1 className="text-xl font-bold text-style-text">Профиль</h1>
          <Button
            variant="ghost"
            size="icon"
            className="text-style-text hover:bg-style-gray/30"
          >
            <Icon name="Settings" size={24} />
          </Button>
        </div>

        {/* Profile Header */}
        <div className="px-6 mb-6 text-center">
          <Avatar className="h-24 w-24 mx-auto mb-4">
            <AvatarImage src="/img/a0f52a81-1b4c-4ab4-8eb2-6c77b2b36810.jpg" />
            <AvatarFallback className="text-2xl">АМ</AvatarFallback>
          </Avatar>
          <h2 className="text-2xl font-bold text-style-text mb-1">Алексей Морозов</h2>
          <p className="text-style-text-muted mb-3">Стилист-новичок</p>
          <Badge variant="secondary" className="bg-style-accent/20 text-style-accent border-style-accent/30">
            Пользователь с июня 2024
          </Badge>
        </div>

        {/* Overall Style Score */}
        <div className="px-6 mb-6">
          <Card className="bg-style-gray/20 backdrop-blur-sm border-style-gray/40">
            <CardHeader className="text-center pb-3">
              <CardTitle className="text-style-text text-xl">Общая оценка стиля</CardTitle>
              <div className="text-6xl font-bold text-style-text my-4">8.5</div>
              <Badge variant="secondary" className="bg-style-accent/20 text-style-accent border-style-accent/30 text-lg px-4 py-1">
                Отличный уровень
              </Badge>
            </CardHeader>
            <CardContent>
              <Progress value={85} className="h-3 mb-4" />
              <div className="flex justify-between text-sm text-style-text-muted">
                <span>Начинающий</span>
                <span>Эксперт</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Style Categories */}
        <div className="px-6 mb-6">
          <h3 className="text-style-text font-semibold mb-4">Категории стиля</h3>
          <div className="space-y-4">
            <Card className="bg-style-gray/20 border-style-gray/40">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-style-accent to-style-accent-muted rounded-full flex items-center justify-center">
                      <Icon name="Briefcase" size={18} className="text-style-text" />
                    </div>
                    <span className="text-style-text font-medium">Деловой стиль</span>
                  </div>
                  <span className="text-style-accent font-bold">9.2</span>
                </div>
                <Progress value={92} className="h-2" />
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/20">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                      <Icon name="Coffee" size={18} className="text-white" />
                    </div>
                    <span className="text-white font-medium">Casual</span>
                  </div>
                  <span className="text-yellow-400 font-bold">7.8</span>
                </div>
                <Progress value={78} className="h-2" />
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/20">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <Icon name="Shirt" size={18} className="text-white" />
                    </div>
                    <span className="text-white font-medium">Вечерний</span>
                  </div>
                  <span className="text-blue-400 font-bold">8.1</span>
                </div>
                <Progress value={81} className="h-2" />
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Statistics */}
        <div className="px-6 mb-6">
          <h3 className="text-white font-semibold mb-4">Статистика</h3>
          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-white/5 border-white/20">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-white mb-1">47</div>
                <p className="text-gray-400 text-sm">Оценено образов</p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/20">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-white mb-1">12</div>
                <p className="text-gray-400 text-sm">Советов получено</p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/20">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-white mb-1">+2.1</div>
                <p className="text-gray-400 text-sm">Рост за месяц</p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/20">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-white mb-1">5</div>
                <p className="text-gray-400 text-sm">Дней в приложении</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Achievements */}
        <div className="px-6 mb-6">
          <h3 className="text-white font-semibold mb-4">Достижения</h3>
          <div className="space-y-3">
            <Card className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-yellow-500/30">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
                    <Icon name="Trophy" size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Стилист-новичок</h4>
                    <p className="text-gray-300 text-sm">Получен рейтинг выше 8.0</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-500/30">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <Icon name="Star" size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Деловой эксперт</h4>
                    <p className="text-gray-300 text-sm">Отличная оценка в деловом стиле</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/20 opacity-60">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center">
                    <Icon name="Lock" size={20} className="text-gray-400" />
                  </div>
                  <div>
                    <h4 className="text-gray-400 font-medium">Мастер стиля</h4>
                    <p className="text-gray-500 text-sm">Получить рейтинг 9.5+</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-sm">
          <div className="bg-style-dark/80 backdrop-blur-lg border-t border-style-gray/20 px-6 py-4">
            <div className="flex justify-around">
              <Button variant="ghost" size="sm" className="flex-col text-style-light-gray" onClick={onBack}>
                <Icon name="Home" size={20} />
                <span className="text-xs mt-1">Главная</span>
              </Button>
              <Button variant="ghost" size="sm" className="flex-col text-style-light-gray">
                <Icon name="Search" size={20} />
                <span className="text-xs mt-1">Поиск</span>
              </Button>
              <Button variant="ghost" size="sm" className="flex-col text-style-light-gray">
                <Icon name="Heart" size={20} />
                <span className="text-xs mt-1">Избранное</span>
              </Button>
              <Button variant="ghost" size="sm" className="flex-col text-style-text">
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

export default Profile;