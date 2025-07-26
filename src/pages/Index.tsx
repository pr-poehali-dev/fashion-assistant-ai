import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-barbershop-black text-barbershop-white font-sans">
      {/* Header */}
      <header className="bg-barbershop-black/95 backdrop-blur-sm fixed w-full z-50 border-b border-barbershop-gray/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-barbershop-gold rounded-full flex items-center justify-center">
                <Icon name="Scissors" size={24} className="text-barbershop-black" />
              </div>
              <div>
                <h1 className="font-oswald text-xl font-bold tracking-wide">SMART CUT & CARE</h1>
                <p className="text-xs text-barbershop-gray">ПРЕМИАЛЬНЫЙ БАРБЕРШОП</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-barbershop-gray hover:text-barbershop-gold transition-colors">УСЛУГИ</a>
              <a href="#about" className="text-barbershop-gray hover:text-barbershop-gold transition-colors">О НАС</a>
              <a href="#gallery" className="text-barbershop-gray hover:text-barbershop-gold transition-colors">ГАЛЕРЕЯ</a>
              <a href="#contact" className="text-barbershop-gray hover:text-barbershop-gold transition-colors">КОНТАКТЫ</a>
            </nav>
            <Button className="bg-barbershop-gold text-barbershop-black hover:bg-barbershop-gold/90 font-oswald font-semibold">
              ЗАПИСАТЬСЯ
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-barbershop-black via-barbershop-dark-gray to-barbershop-black">
        <div className="absolute inset-0 bg-[url('/img/0b561a92-9196-4822-8799-9f67642c1338.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="font-oswald text-6xl md:text-8xl font-bold mb-6 leading-tight">
            SMART CUT
            <span className="block text-barbershop-gold">& CARE</span>
          </h1>
          <p className="text-xl md:text-2xl text-barbershop-gray mb-8 leading-relaxed">
            Премиальный барбершоп для настоящих мужчин.<br />
            Стрижки, уход за бородой, стильные образы.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-barbershop-gold text-barbershop-black hover:bg-barbershop-gold/90 font-oswald font-semibold text-lg px-8 py-3">
              <Icon name="Calendar" size={20} className="mr-2" />
              ЗАПИСАТЬСЯ СЕЙЧАС
            </Button>
            <Button size="lg" variant="outline" className="border-barbershop-gray text-barbershop-gray hover:bg-barbershop-gray hover:text-barbershop-black font-oswald font-semibold text-lg px-8 py-3">
              <Icon name="Phone" size={20} className="mr-2" />
              ПОЗВОНИТЬ
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-barbershop-dark-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-oswald text-4xl md:text-5xl font-bold mb-4">НАШИ УСЛУГИ</h2>
            <p className="text-barbershop-gray text-lg">Профессиональный уход для современного мужчины</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-barbershop-black border-barbershop-gray/30 hover:border-barbershop-gold/50 transition-colors group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-barbershop-gold rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Icon name="Scissors" size={32} className="text-barbershop-black" />
                </div>
                <h3 className="font-oswald text-2xl font-bold mb-4">СТРИЖКИ</h3>
                <p className="text-barbershop-gray mb-6">Классические и современные мужские стрижки от опытных мастеров</p>
                <p className="text-barbershop-gold font-oswald text-xl font-bold">ОТ 2500₽</p>
              </CardContent>
            </Card>

            <Card className="bg-barbershop-black border-barbershop-gray/30 hover:border-barbershop-gold/50 transition-colors group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-barbershop-gold rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Icon name="User" size={32} className="text-barbershop-black" />
                </div>
                <h3 className="font-oswald text-2xl font-bold mb-4">БОРОДА</h3>
                <p className="text-barbershop-gray mb-6">Моделирование, стрижка и уход за бородой. Создание идеального образа</p>
                <p className="text-barbershop-gold font-oswald text-xl font-bold">ОТ 1800₽</p>
              </CardContent>
            </Card>

            <Card className="bg-barbershop-black border-barbershop-gray/30 hover:border-barbershop-gold/50 transition-colors group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-barbershop-gold rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Icon name="Sparkles" size={32} className="text-barbershop-black" />
                </div>
                <h3 className="font-oswald text-2xl font-bold mb-4">БРИТЬЕ</h3>
                <p className="text-barbershop-gray mb-6">Традиционное бритье опасной бритвой с горячими полотенцами</p>
                <p className="text-barbershop-gold font-oswald text-xl font-bold">ОТ 2000₽</p>
              </CardContent>
            </Card>

            <Card className="bg-barbershop-black border-barbershop-gray/30 hover:border-barbershop-gold/50 transition-colors group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-barbershop-gold rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Icon name="Zap" size={32} className="text-barbershop-black" />
                </div>
                <h3 className="font-oswald text-2xl font-bold mb-4">КОМПЛЕКС</h3>
                <p className="text-barbershop-gray mb-6">Полный комплекс: стрижка + борода + бритье + укладка</p>
                <p className="text-barbershop-gold font-oswald text-xl font-bold">ОТ 4500₽</p>
              </CardContent>
            </Card>

            <Card className="bg-barbershop-black border-barbershop-gray/30 hover:border-barbershop-gold/50 transition-colors group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-barbershop-gold rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Icon name="Star" size={32} className="text-barbershop-black" />
                </div>
                <h3 className="font-oswald text-2xl font-bold mb-4">VIP УХОД</h3>
                <p className="text-barbershop-gray mb-6">Премиальные процедуры: маски, массаж, ароматерапия</p>
                <p className="text-barbershop-gold font-oswald text-xl font-bold">ОТ 3500₽</p>
              </CardContent>
            </Card>

            <Card className="bg-barbershop-black border-barbershop-gray/30 hover:border-barbershop-gold/50 transition-colors group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-barbershop-gold rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Icon name="Gift" size={32} className="text-barbershop-black" />
                </div>
                <h3 className="font-oswald text-2xl font-bold mb-4">ПОДАРОЧНЫЕ</h3>
                <p className="text-barbershop-gray mb-6">Подарочные сертификаты для настоящих мужчин</p>
                <p className="text-barbershop-gold font-oswald text-xl font-bold">ОТ 2000₽</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-barbershop-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-oswald text-4xl md:text-5xl font-bold mb-6">О НАШЕМ БАРБЕРШОПЕ</h2>
              <p className="text-barbershop-gray text-lg mb-6 leading-relaxed">
                Smart Cut & Care — это не просто барбершоп, это место, где традиционное мастерство встречается 
                с современными техниками. Мы создаем не просто стрижки, а формируем стиль жизни современного мужчины.
              </p>
              <p className="text-barbershop-gray text-lg mb-8 leading-relaxed">
                Наши мастера — это профессионалы с многолетним опытом, которые постоянно совершенствуют свои навыки 
                и следят за последними тенденциями в мире мужского груминга.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-oswald font-bold text-barbershop-gold mb-2">5+</div>
                  <div className="text-barbershop-gray">лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-oswald font-bold text-barbershop-gold mb-2">1000+</div>
                  <div className="text-barbershop-gray">довольных клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-oswald font-bold text-barbershop-gold mb-2">3</div>
                  <div className="text-barbershop-gray">опытных мастера</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-oswald font-bold text-barbershop-gold mb-2">24/7</div>
                  <div className="text-barbershop-gray">онлайн запись</div>
                </div>
              </div>

              <Button className="bg-barbershop-gold text-barbershop-black hover:bg-barbershop-gold/90 font-oswald font-semibold">
                УЗНАТЬ БОЛЬШЕ
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-lg overflow-hidden">
                <img 
                  src="/img/8cd922e0-1f71-4f30-bb41-4112da7bbfee.jpg" 
                  alt="Инструменты барбершопа" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-barbershop-gold rounded-full flex items-center justify-center">
                <Icon name="Award" size={32} className="text-barbershop-black" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-barbershop-dark-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-oswald text-4xl md:text-5xl font-bold mb-4">НАШИ РАБОТЫ</h2>
            <p className="text-barbershop-gray text-lg">Примеры стрижек и образов наших клиентов</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="aspect-square rounded-lg overflow-hidden group">
              <img 
                src="/img/b50eaa0c-4ef9-44df-a4d8-ec67415bad2f.jpg" 
                alt="Стильная мужская стрижка" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden group">
              <img 
                src="/img/0b561a92-9196-4822-8799-9f67642c1338.jpg" 
                alt="Барбершоп интерьер" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden group">
              <img 
                src="/img/8cd922e0-1f71-4f30-bb41-4112da7bbfee.jpg" 
                alt="Инструменты мастера" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="aspect-square rounded-lg bg-barbershop-gold/10 flex items-center justify-center group cursor-pointer">
              <div className="text-center">
                <Icon name="Plus" size={48} className="text-barbershop-gold mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <p className="text-barbershop-gold font-oswald font-semibold">СМОТРЕТЬ ВСЕ</p>
              </div>
            </div>
            <div className="aspect-square rounded-lg bg-barbershop-black border border-barbershop-gray/30 flex items-center justify-center">
              <div className="text-center">
                <Icon name="Instagram" size={48} className="text-barbershop-gray mx-auto mb-4" />
                <p className="text-barbershop-gray font-oswald">@SMARTCUT_CARE</p>
              </div>
            </div>
            <div className="aspect-square rounded-lg bg-gradient-to-br from-barbershop-gold/20 to-barbershop-gold/5 flex items-center justify-center">
              <div className="text-center p-6">
                <Icon name="Quote" size={32} className="text-barbershop-gold mx-auto mb-4" />
                <p className="text-barbershop-gray text-sm italic mb-2">"Лучший барбершоп в городе!"</p>
                <p className="text-barbershop-gold text-xs">— Алексей М.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-barbershop-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-oswald text-4xl md:text-5xl font-bold mb-6">ЗАПИСАТЬСЯ НА СТРИЖКУ</h2>
              <p className="text-barbershop-gray text-lg mb-8">
                Заполните форму, и мы свяжемся с вами для подтверждения записи
              </p>
              
              <form className="space-y-6">
                <div>
                  <Input 
                    placeholder="Ваше имя" 
                    className="bg-barbershop-dark-gray border-barbershop-gray/30 text-barbershop-white placeholder:text-barbershop-gray"
                  />
                </div>
                <div>
                  <Input 
                    placeholder="Номер телефона" 
                    className="bg-barbershop-dark-gray border-barbershop-gray/30 text-barbershop-white placeholder:text-barbershop-gray"
                  />
                </div>
                <div>
                  <Textarea 
                    placeholder="Какую услугу хотите получить?" 
                    className="bg-barbershop-dark-gray border-barbershop-gray/30 text-barbershop-white placeholder:text-barbershop-gray"
                    rows={4}
                  />
                </div>
                <Button className="w-full bg-barbershop-gold text-barbershop-black hover:bg-barbershop-gold/90 font-oswald font-semibold text-lg py-3">
                  ЗАПИСАТЬСЯ
                </Button>
              </form>
            </div>
            
            <div>
              <h3 className="font-oswald text-2xl font-bold mb-6">КОНТАКТЫ</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-barbershop-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={20} className="text-barbershop-black" />
                  </div>
                  <div>
                    <h4 className="font-oswald font-semibold mb-1">АДРЕС</h4>
                    <p className="text-barbershop-gray">ул. Премиальная, 15<br />г. Москва, 101000</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-barbershop-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={20} className="text-barbershop-black" />
                  </div>
                  <div>
                    <h4 className="font-oswald font-semibold mb-1">ТЕЛЕФОН</h4>
                    <p className="text-barbershop-gray">+7 (495) 123-45-67</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-barbershop-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" size={20} className="text-barbershop-black" />
                  </div>
                  <div>
                    <h4 className="font-oswald font-semibold mb-1">РЕЖИМ РАБОТЫ</h4>
                    <p className="text-barbershop-gray">
                      Пн-Пт: 10:00 - 22:00<br />
                      Сб-Вс: 10:00 - 20:00
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-barbershop-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={20} className="text-barbershop-black" />
                  </div>
                  <div>
                    <h4 className="font-oswald font-semibold mb-1">EMAIL</h4>
                    <p className="text-barbershop-gray">info@smartcutcare.ru</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-barbershop-gray/20">
                <h4 className="font-oswald font-semibold mb-4">СОЦИАЛЬНЫЕ СЕТИ</h4>
                <div className="flex space-x-4">
                  <div className="w-12 h-12 bg-barbershop-dark-gray rounded-full flex items-center justify-center hover:bg-barbershop-gold hover:text-barbershop-black transition-colors cursor-pointer">
                    <Icon name="Instagram" size={20} />
                  </div>
                  <div className="w-12 h-12 bg-barbershop-dark-gray rounded-full flex items-center justify-center hover:bg-barbershop-gold hover:text-barbershop-black transition-colors cursor-pointer">
                    <Icon name="MessageCircle" size={20} />
                  </div>
                  <div className="w-12 h-12 bg-barbershop-dark-gray rounded-full flex items-center justify-center hover:bg-barbershop-gold hover:text-barbershop-black transition-colors cursor-pointer">
                    <Icon name="Phone" size={20} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-barbershop-dark-gray border-t border-barbershop-gray/20 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-10 h-10 bg-barbershop-gold rounded-full flex items-center justify-center">
                <Icon name="Scissors" size={20} className="text-barbershop-black" />
              </div>
              <div>
                <h4 className="font-oswald font-bold">SMART CUT & CARE</h4>
                <p className="text-xs text-barbershop-gray">ПРЕМИАЛЬНЫЙ БАРБЕРШОП</p>
              </div>
            </div>
            <p className="text-barbershop-gray text-sm">
              © 2025 Smart Cut & Care. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}