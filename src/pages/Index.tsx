import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [activeSection, setActiveSection] = useState('dashboard');

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
    { label: 'Всего пользователей', value: '12,486', change: '+12.5%', trend: 'up', icon: 'Users', color: 'text-blue-500' },
    { label: 'Активные сеансы', value: '3,247', change: '+8.2%', trend: 'up', icon: 'Activity', color: 'text-green-500' },
    { label: 'Доход за месяц', value: '₽824,300', change: '+23.1%', trend: 'up', icon: 'TrendingUp', color: 'text-purple-500' },
    { label: 'Конверсия', value: '4.86%', change: '-2.4%', trend: 'down', icon: 'Target', color: 'text-orange-500' },
  ];

  const recentUsers = [
    { name: 'Анна Иванова', email: 'anna@example.com', role: 'Админ', status: 'active' },
    { name: 'Михаил Петров', email: 'mikhail@example.com', role: 'Редактор', status: 'active' },
    { name: 'Елена Смирнова', email: 'elena@example.com', role: 'Пользователь', status: 'inactive' },
    { name: 'Дмитрий Козлов', email: 'dmitry@example.com', role: 'Менеджер', status: 'active' },
    { name: 'Ольга Новикова', email: 'olga@example.com', role: 'Пользователь', status: 'active' },
  ];

  const activities = [
    { action: 'Новый пользователь зарегистрирован', user: 'Анна Иванова', time: '2 минуты назад' },
    { action: 'Опубликован новый контент', user: 'Михаил Петров', time: '15 минут назад' },
    { action: 'Обновлены настройки системы', user: 'Система', time: '1 час назад' },
    { action: 'Создан новый отчет', user: 'Елена Смирнова', time: '2 часа назад' },
  ];

  const chartData = {
    users: [65, 78, 85, 92, 88, 95, 108, 115, 122, 135, 145, 158],
    revenue: [45, 52, 58, 65, 72, 68, 75, 82, 88, 95, 102, 110],
    months: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
  };

  const maxUsers = Math.max(...chartData.users);
  const maxRevenue = Math.max(...chartData.revenue);

  return (
    <div className="flex h-screen bg-background">
      <aside className="w-64 bg-sidebar text-sidebar-foreground flex flex-col border-r border-sidebar-border">
        <div className="p-6 border-b border-sidebar-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <Icon name="Zap" size={24} className="text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-lg font-bold">Admin Panel</h1>
              <p className="text-xs text-sidebar-foreground/60">Управление системой</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                activeSection === item.id
                  ? 'bg-sidebar-accent text-sidebar-accent-foreground shadow-lg'
                  : 'text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground'
              }`}
            >
              <Icon name={item.icon} size={20} />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-sidebar-border">
          <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-sidebar-accent/50">
            <Avatar className="w-9 h-9">
              <AvatarFallback className="bg-primary text-primary-foreground text-sm">ЮП</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">Юрий Попов</p>
              <p className="text-xs text-sidebar-foreground/60 truncate">admin@panel.dev</p>
            </div>
          </div>
        </div>
      </aside>

      <main className="flex-1 overflow-auto">
        <header className="bg-card border-b border-border sticky top-0 z-10">
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
                <Button variant="outline" size="icon" className="relative">
                  <Icon name="Bell" size={20} />
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-destructive text-destructive-foreground text-xs rounded-full flex items-center justify-center">
                    3
                  </span>
                </Button>
                <Button variant="outline" size="icon">
                  <Icon name="Search" size={20} />
                </Button>
              </div>
            </div>
          </div>
        </header>

        <div className="p-8 space-y-8">
          {activeSection === 'dashboard' && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 fade-in">
                {stats.map((stat, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer border-border/50"
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-sm font-medium text-muted-foreground">
                          {stat.label}
                        </CardTitle>
                        <Icon name={stat.icon} size={20} className={stat.color} />
                      </div>
                    </CardHeader>
                    <CardContent>
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
                <Card className="fade-in border-border/50">
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
                            className="w-full bg-gradient-to-t from-primary to-primary/60 rounded-t-lg transition-all duration-500 hover:from-primary/80 hover:to-primary/40 cursor-pointer relative"
                            style={{
                              height: `${(value / maxUsers) * 100}%`,
                              animationDelay: `${index * 0.05}s`,
                            }}
                          >
                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-foreground text-background text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                              {value}K
                            </div>
                          </div>
                          <span className="text-xs text-muted-foreground">{chartData.months[index]}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="fade-in border-border/50">
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
                            className="w-full bg-gradient-to-t from-green-500 to-green-400 rounded-t-lg transition-all duration-500 hover:from-green-400 hover:to-green-300 cursor-pointer relative"
                            style={{
                              height: `${(value / maxRevenue) * 100}%`,
                              animationDelay: `${index * 0.05}s`,
                            }}
                          >
                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-foreground text-background text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                              ₽{value}К
                            </div>
                          </div>
                          <span className="text-xs text-muted-foreground">{chartData.months[index]}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="fade-in border-border/50">
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
                          className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
                        >
                          <div className="flex items-center gap-3">
                            <Avatar>
                              <AvatarFallback className="bg-primary/10 text-primary font-medium">
                                {user.name
                                  .split(' ')
                                  .map((n) => n[0])
                                  .join('')}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium text-foreground">{user.name}</p>
                              <p className="text-sm text-muted-foreground">{user.email}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant="secondary" className="text-xs">
                              {user.role}
                            </Badge>
                            <div
                              className={`w-2 h-2 rounded-full ${
                                user.status === 'active' ? 'bg-green-500' : 'bg-gray-400'
                              }`}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="fade-in border-border/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Activity" size={20} className="text-orange-500" />
                      Последняя активность
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {activities.map((activity, index) => (
                        <div key={index} className="flex gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Icon name="Check" size={16} className="text-primary" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-foreground">{activity.action}</p>
                            <div className="flex items-center gap-2 mt-1">
                              <p className="text-xs text-muted-foreground">{activity.user}</p>
                              <span className="text-xs text-muted-foreground">•</span>
                              <p className="text-xs text-muted-foreground">{activity.time}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </>
          )}

          {activeSection !== 'dashboard' && (
            <Card className="fade-in border-border/50">
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
                <div className="text-center py-12">
                  <Icon name="Construction" size={48} className="text-muted-foreground mx-auto mb-4" />
                  <p className="text-lg font-medium text-foreground">Раздел в разработке</p>
                  <p className="text-muted-foreground mt-2">
                    Здесь будет интерфейс для управления разделом "{menuItems.find((item) => item.id === activeSection)?.label}"
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

export default Index;
