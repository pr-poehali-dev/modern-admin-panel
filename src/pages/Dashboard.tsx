import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('dashboard');
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  };

  const menuItems = [
    { id: 'dashboard', label: 'Дашборд', icon: 'LayoutDashboard' },
    { id: 'users', label: 'Пользователи', icon: 'Users' },
    { id: 'analytics', label: 'Аналитика', icon: 'BarChart3' },
    { id: 'content', label: 'Контент', icon: 'FileText' },
    { id: 'finance', label: 'Финансы', icon: 'Wallet' },
    { id: 'reports', label: 'Отчеты', icon: 'ClipboardList' },
    { id: 'notifications', label: 'Уведомления', icon: 'Bell' },
    { id: 'settings', label: 'Настройки', icon: 'Settings' },
  ];

  const stats = [
    { label: 'Всего пользователей', value: '12,486', change: '+12.5%', trend: 'up', icon: 'Users', color: 'text-blue-500', bgColor: 'bg-blue-500/10' },
    { label: 'Активные сеансы', value: '3,247', change: '+8.2%', trend: 'up', icon: 'Activity', color: 'text-green-500', bgColor: 'bg-green-500/10' },
    { label: 'Доход за месяц', value: '₽824,300', change: '+23.1%', trend: 'up', icon: 'TrendingUp', color: 'text-purple-500', bgColor: 'bg-purple-500/10' },
    { label: 'Конверсия', value: '4.86%', change: '-2.4%', trend: 'down', icon: 'Target', color: 'text-orange-500', bgColor: 'bg-orange-500/10' },
  ];

  const recentUsers = [
    { name: 'Анна Иванова', email: 'anna@example.com', role: 'Админ', status: 'active', avatar: 'АИ' },
    { name: 'Михаил Петров', email: 'mikhail@example.com', role: 'Редактор', status: 'active', avatar: 'МП' },
    { name: 'Елена Смирнова', email: 'elena@example.com', role: 'Пользователь', status: 'inactive', avatar: 'ЕС' },
    { name: 'Дмитрий Козлов', email: 'dmitry@example.com', role: 'Менеджер', status: 'active', avatar: 'ДК' },
    { name: 'Ольга Новикова', email: 'olga@example.com', role: 'Пользователь', status: 'active', avatar: 'ОН' },
  ];

  const activities = [
    { action: 'Новый пользователь зарегистрирован', user: 'Анна Иванова', time: '2 минуты назад', icon: 'UserPlus', color: 'text-green-500' },
    { action: 'Опубликован новый контент', user: 'Михаил Петров', time: '15 минут назад', icon: 'FileText', color: 'text-blue-500' },
    { action: 'Обновлены настройки системы', user: 'Система', time: '1 час назад', icon: 'Settings', color: 'text-purple-500' },
    { action: 'Создан новый отчет', user: 'Елена Смирнова', time: '2 часа назад', icon: 'ClipboardList', color: 'text-orange-500' },
  ];

  const chartData = {
    users: [65, 78, 85, 92, 88, 95, 108, 115, 122, 135, 145, 158],
    revenue: [45, 52, 58, 65, 72, 68, 75, 82, 88, 95, 102, 110],
    months: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
  };

  const pieData = [
    { label: 'Админы', value: 15, color: 'bg-purple-500' },
    { label: 'Редакторы', value: 25, color: 'bg-blue-500' },
    { label: 'Менеджеры', value: 30, color: 'bg-green-500' },
    { label: 'Пользователи', value: 30, color: 'bg-orange-500' },
  ];

  const maxUsers = Math.max(...chartData.users);
  const maxRevenue = Math.max(...chartData.revenue);

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      <aside className="w-64 bg-sidebar text-sidebar-foreground flex flex-col border-r border-sidebar-border slide-in">
        <div className="p-6 border-b border-sidebar-border">
          <div className="flex items-center gap-3 cursor-pointer hover:scale-105 transition-transform duration-300">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center shadow-lg">
              <Icon name="Zap" size={24} className="text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold">Admin Panel</h1>
              <p className="text-xs text-sidebar-foreground/60">Управление системой</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {menuItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                activeSection === item.id
                  ? 'bg-sidebar-accent text-sidebar-accent-foreground shadow-lg scale-105'
                  : 'text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground hover:scale-102'
              }`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <Icon name={item.icon} size={20} />
              <span className="font-medium">{item.label}</span>
              {item.id === 'notifications' && (
                <Badge className="ml-auto bg-destructive text-destructive-foreground">3</Badge>
              )}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-sidebar-border">
          <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-sidebar-accent/50 hover:bg-sidebar-accent transition-colors cursor-pointer group">
            <Avatar className="w-9 h-9 group-hover:scale-110 transition-transform">
              <AvatarFallback className="bg-gradient-to-br from-primary to-purple-600 text-white text-sm font-medium">
                ЮП
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">Юрий Попов</p>
              <p className="text-xs text-sidebar-foreground/60 truncate">admin@panel.dev</p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleLogout}
              className="opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <Icon name="LogOut" size={16} />
            </Button>
          </div>
        </div>
      </aside>

      <main className="flex-1 overflow-auto">
        <header className="bg-card/80 backdrop-blur-sm border-b border-border sticky top-0 z-10">
          <div className="px-8 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold text-foreground">
                  {menuItems.find((item) => item.id === activeSection)?.label}
                </h2>
                <p className="text-muted-foreground mt-1">
                  Добро пожаловать в панель управления
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative">
                  {showSearch && (
                    <Input
                      type="text"
                      placeholder="Поиск..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-64 fade-in pl-10"
                      autoFocus
                    />
                  )}
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setShowSearch(!showSearch)}
                    className="hover:scale-110 transition-transform"
                  >
                    <Icon name="Search" size={20} />
                  </Button>
                </div>
                <Button variant="outline" size="icon" className="relative hover:scale-110 transition-transform">
                  <Icon name="Bell" size={20} />
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-destructive text-destructive-foreground text-xs rounded-full flex items-center justify-center animate-pulse">
                    3
                  </span>
                </Button>
                <Button className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 shadow-lg hover:shadow-xl transition-all hover:scale-105">
                  <Icon name="Plus" size={20} className="mr-2" />
                  Создать
                </Button>
              </div>
            </div>
          </div>
        </header>

        <div className="p-8 space-y-8">
          {activeSection === 'dashboard' && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-border/50 overflow-hidden group fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`absolute inset-0 ${stat.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    <CardHeader className="pb-3 relative z-10">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                          {stat.label}
                        </CardTitle>
                        <div className={`w-10 h-10 rounded-lg ${stat.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                          <Icon name={stat.icon} size={20} className={stat.color} />
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                      <div className="flex items-center gap-1 mt-2">
                        <Icon
                          name={stat.trend === 'up' ? 'TrendingUp' : 'TrendingDown'}
                          size={16}
                          className={stat.trend === 'up' ? 'text-green-500' : 'text-red-500'}
                        />
                        <span
                          className={`text-sm font-medium ${
                            stat.trend === 'up' ? 'text-green-500' : 'text-red-500'
                          }`}
                        >
                          {stat.change}
                        </span>
                        <span className="text-sm text-muted-foreground ml-1">за месяц</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="fade-in border-border/50 hover:shadow-xl transition-shadow" style={{ animationDelay: '0.4s' }}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="TrendingUp" size={20} className="text-primary" />
                      Рост пользователей
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 flex items-end gap-2">
                      {chartData.users.map((value, index) => (
                        <div key={index} className="flex-1 flex flex-col items-center gap-2 group">
                          <div
                            className="w-full bg-gradient-to-t from-primary to-primary/60 rounded-t-lg transition-all duration-500 hover:from-primary hover:to-primary/80 cursor-pointer relative hover:scale-105"
                            style={{
                              height: `${(value / maxUsers) * 100}%`,
                              animationDelay: `${index * 0.05}s`,
                            }}
                          >
                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-foreground text-background text-xs px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                              {value}K пользователей
                            </div>
                          </div>
                          <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">{chartData.months[index]}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="fade-in border-border/50 hover:shadow-xl transition-shadow" style={{ animationDelay: '0.5s' }}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="DollarSign" size={20} className="text-green-500" />
                      Динамика доходов
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 flex items-end gap-2">
                      {chartData.revenue.map((value, index) => (
                        <div key={index} className="flex-1 flex flex-col items-center gap-2 group">
                          <div
                            className="w-full bg-gradient-to-t from-green-500 to-green-400 rounded-t-lg transition-all duration-500 hover:from-green-500 hover:to-green-500/80 cursor-pointer relative hover:scale-105"
                            style={{
                              height: `${(value / maxRevenue) * 100}%`,
                              animationDelay: `${index * 0.05}s`,
                            }}
                          >
                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-foreground text-background text-xs px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                              ₽{value}К дохода
                            </div>
                          </div>
                          <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">{chartData.months[index]}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="fade-in border-border/50 hover:shadow-xl transition-shadow" style={{ animationDelay: '0.6s' }}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="PieChart" size={20} className="text-purple-500" />
                      Распределение по ролям
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {pieData.map((item, index) => (
                        <div key={index} className="space-y-2 group cursor-pointer">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium group-hover:text-primary transition-colors">{item.label}</span>
                            <span className="text-sm text-muted-foreground">{item.value}%</span>
                          </div>
                          <Progress value={item.value} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="lg:col-span-2 fade-in border-border/50 hover:shadow-xl transition-shadow" style={{ animationDelay: '0.7s' }}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Users" size={20} className="text-blue-500" />
                      Недавние пользователи
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentUsers.map((user, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-all cursor-pointer hover:scale-102 hover:shadow-md"
                        >
                          <div className="flex items-center gap-3">
                            <Avatar className="hover:scale-110 transition-transform">
                              <AvatarFallback className="bg-gradient-to-br from-primary to-purple-600 text-white font-medium">
                                {user.avatar}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium text-foreground">{user.name}</p>
                              <p className="text-sm text-muted-foreground">{user.email}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant="secondary" className="text-xs hover:scale-110 transition-transform">
                              {user.role}
                            </Badge>
                            <div
                              className={`w-2 h-2 rounded-full ${
                                user.status === 'active' ? 'bg-green-500 animate-pulse' : 'bg-gray-400'
                              }`}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="fade-in border-border/50 hover:shadow-xl transition-shadow" style={{ animationDelay: '0.8s' }}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Activity" size={20} className="text-orange-500" />
                    Последняя активность
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {activities.map((activity, index) => (
                      <div key={index} className="flex flex-col gap-3 p-4 rounded-lg hover:bg-muted/50 transition-all cursor-pointer hover:scale-105 hover:shadow-lg border border-border/50">
                        <div className={`w-10 h-10 rounded-full bg-muted flex items-center justify-center`}>
                          <Icon name={activity.icon} size={20} className={activity.color} />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-foreground mb-2">{activity.action}</p>
                          <div className="space-y-1">
                            <p className="text-xs text-muted-foreground flex items-center gap-1">
                              <Icon name="User" size={12} />
                              {activity.user}
                            </p>
                            <p className="text-xs text-muted-foreground flex items-center gap-1">
                              <Icon name="Clock" size={12} />
                              {activity.time}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </>
          )}

          {activeSection !== 'dashboard' && (
            <Card className="fade-in border-border/50 hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon
                    name={menuItems.find((item) => item.id === activeSection)?.icon || 'FileText'}
                    size={24}
                    className="text-primary"
                  />
                  Раздел "{menuItems.find((item) => item.id === activeSection)?.label}"
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-16">
                  <div className="w-20 h-20 bg-muted rounded-2xl flex items-center justify-center mx-auto mb-6 hover:scale-110 transition-transform">
                    <Icon name="Construction" size={48} className="text-muted-foreground" />
                  </div>
                  <p className="text-xl font-semibold text-foreground mb-2">Раздел в разработке</p>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    Здесь будет интерфейс для управления разделом "{menuItems.find((item) => item.id === activeSection)?.label}". 
                    Скоро добавим функционал!
                  </p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
