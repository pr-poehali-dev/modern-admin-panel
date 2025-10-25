import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-purple-500/5">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10">
        <nav className="border-b border-border/50 bg-card/50 backdrop-blur-sm">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-purple-600 rounded-xl flex items-center justify-center">
                  <Icon name="Zap" size={24} className="text-white" />
                </div>
                <span className="text-xl font-bold">Admin Panel</span>
              </div>
              <div className="flex items-center gap-3">
                <Button
                  variant="ghost"
                  onClick={() => navigate('/login')}
                  className="hover:scale-105 transition-transform"
                >
                  Войти
                </Button>
                <Button
                  onClick={() => navigate('/register')}
                  className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 shadow-lg hover:shadow-xl transition-all hover:scale-105"
                >
                  Начать бесплатно
                </Button>
              </div>
            </div>
          </div>
        </nav>

        <main className="container mx-auto px-6 py-20">
          <div className="text-center max-w-4xl mx-auto mb-20 fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6 hover:scale-105 transition-transform cursor-pointer">
              <Icon name="Sparkles" size={16} />
              <span className="text-sm font-medium">Новая версия 2.0 уже доступна</span>
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-purple-600 bg-clip-text text-transparent">
              Управляйте всем в одном месте
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Современная админ панель с интерактивной аналитикой, управлением пользователями и полным контролем над вашим проектом
            </p>
            <div className="flex items-center justify-center gap-4">
              <Button
                size="lg"
                onClick={() => navigate('/register')}
                className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white px-8 py-6 text-lg shadow-2xl hover:shadow-3xl transition-all hover:-translate-y-1"
              >
                <Icon name="Rocket" size={24} className="mr-2" />
                Попробовать сейчас
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate('/dashboard')}
                className="px-8 py-6 text-lg hover:scale-105 transition-transform"
              >
                <Icon name="Play" size={24} className="mr-2" />
                Живое демо
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: 'BarChart3',
                title: 'Интерактивная аналитика',
                description: 'Графики и диаграммы в реальном времени с анимацией',
                color: 'text-blue-500',
                bgColor: 'bg-blue-500/10',
              },
              {
                icon: 'Users',
                title: 'Управление пользователями',
                description: 'Полный контроль над ролями и доступами',
                color: 'text-green-500',
                bgColor: 'bg-green-500/10',
              },
              {
                icon: 'Zap',
                title: 'Молниеносная скорость',
                description: 'Плавные анимации и мгновенный отклик',
                color: 'text-purple-500',
                bgColor: 'bg-purple-500/10',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl border border-border/50 bg-card hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-14 h-14 rounded-xl ${feature.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon name={feature.icon} size={28} className={feature.color} />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="inline-flex items-center gap-8 px-8 py-6 rounded-2xl bg-gradient-to-r from-primary/10 to-purple-500/10 border border-border/50">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-1">12K+</div>
                <div className="text-sm text-muted-foreground">Пользователей</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-500 mb-1">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-500 mb-1">24/7</div>
                <div className="text-sm text-muted-foreground">Поддержка</div>
              </div>
            </div>
          </div>
        </main>

        <footer className="border-t border-border/50 bg-card/30 backdrop-blur-sm mt-20">
          <div className="container mx-auto px-6 py-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-purple-600 rounded-lg flex items-center justify-center">
                  <Icon name="Zap" size={20} className="text-white" />
                </div>
                <span className="text-sm text-muted-foreground">© 2025 Admin Panel. Все права защищены.</span>
              </div>
              <div className="flex items-center gap-6">
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Документация
                </a>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  API
                </a>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Поддержка
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
