import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-primary">科技创新</div>
            <div className="hidden md:flex gap-8">
              {[
                { id: 'home', label: '首页' },
                { id: 'about', label: '关于我们' },
                { id: 'services', label: '服务' },
                { id: 'products', label: '产品' },
                { id: 'contact', label: '联系我们' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.id ? 'text-primary' : 'text-foreground/60'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </nav>
      </header>

      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                引领未来
                <span className="block text-primary">科技创新</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                专注于为企业提供先进的工程解决方案和技术服务，助力数字化转型
              </p>
              <div className="flex gap-4">
                <Button size="lg" onClick={() => scrollToSection('contact')}>
                  联系我们
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('products')}>
                  了解更多
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 animate-fade-in">
              <div className="absolute inset-0 flex items-center justify-center">
                <Icon name="Cpu" size={120} className="text-primary/40" />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-20">
            {[
              { icon: 'Zap', title: '高效创新', desc: '快速响应市场需求，提供创新解决方案' },
              { icon: 'Shield', title: '安全可靠', desc: '企业级安全标准，保障系统稳定运行' },
              { icon: 'TrendingUp', title: '持续增长', desc: '助力企业实现可持续发展目标' }
            ].map((item, idx) => (
              <Card key={idx} className="border-2 hover:border-primary transition-all hover:shadow-lg">
                <CardContent className="pt-6">
                  <Icon name={item.icon as any} size={40} className="text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">关于我们</h2>
            <p className="text-lg text-muted-foreground">
              我们是一家专注于工业工程和技术创新的领先企业，致力于为客户提供世界级的解决方案
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">我们的使命</h3>
              <p className="text-muted-foreground mb-6">
                通过持续的技术创新和优质服务，帮助企业实现数字化转型，提升竞争力，创造更大价值。
              </p>
              <h3 className="text-2xl font-bold mb-4">我们的愿景</h3>
              <p className="text-muted-foreground">
                成为全球领先的工业技术解决方案提供商，推动行业进步，为可持续发展做出贡献。
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: '15+', label: '年行业经验' },
                { number: '500+', label: '成功案例' },
                { number: '200+', label: '专业团队' },
                { number: '98%', label: '客户满意度' }
              ].map((stat, idx) => (
                <Card key={idx} className="text-center">
                  <CardContent className="pt-6">
                    <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">我们的服务</h2>
            <p className="text-lg text-muted-foreground">
              提供全方位的工程技术服务，满足不同行业的需求
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: 'Settings',
                title: '工程咨询',
                desc: '专业的工程技术咨询服务，为项目提供全面的技术支持和解决方案'
              },
              {
                icon: 'Code',
                title: '系统集成',
                desc: '提供先进的系统集成服务，实现各类系统的无缝对接和高效运行'
              },
              {
                icon: 'Database',
                title: '数据分析',
                desc: '利用大数据和人工智能技术，为企业提供深度数据分析和决策支持'
              },
              {
                icon: 'Cloud',
                title: '云计算服务',
                desc: '提供安全可靠的云计算解决方案，助力企业实现数字化转型'
              },
              {
                icon: 'Lock',
                title: '信息安全',
                desc: '全方位的信息安全保障服务，保护企业核心数据和系统安全'
              },
              {
                icon: 'Headphones',
                title: '技术支持',
                desc: '7×24小时专业技术支持，确保系统稳定运行和问题快速解决'
              }
            ].map((service, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-all hover:-translate-y-1">
                <CardContent className="pt-6">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} size={28} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">核心产品</h2>
            <p className="text-lg text-muted-foreground">
              创新的产品解决方案，满足企业多样化需求
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: 'Activity',
                title: '智能监控平台',
                desc: '实时监控系统运行状态，智能预警和故障诊断，提升运维效率',
                features: ['实时监控', '智能预警', '数据可视化', '移动端支持']
              },
              {
                icon: 'Workflow',
                title: '自动化管理系统',
                desc: '全流程自动化管理，提高工作效率，降低运营成本',
                features: ['流程自动化', '智能调度', '资源优化', '报表分析']
              },
              {
                icon: 'BarChart',
                title: '数据分析平台',
                desc: '强大的数据分析能力，为企业决策提供科学依据',
                features: ['多维分析', 'AI预测', '可视化报告', '自定义指标']
              },
              {
                icon: 'Globe',
                title: '物联网解决方案',
                desc: '全面的物联网技术支持，实现设备互联和智能控制',
                features: ['设备接入', '远程控制', '数据采集', '边缘计算']
              }
            ].map((product, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-all">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                      <Icon name={product.icon as any} size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{product.title}</h3>
                      <p className="text-muted-foreground">{product.desc}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    {product.features.map((feature, fidx) => (
                      <div key={fidx} className="flex items-center gap-2 text-sm">
                        <Icon name="Check" size={16} className="text-primary" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">联系我们</h2>
            <p className="text-lg text-muted-foreground">
              期待与您合作，共创美好未来
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">联系信息</h3>
              <div className="space-y-6">
                {[
                  { icon: 'MapPin', title: '地址', info: '中国北京市朝阳区科技园区100号' },
                  { icon: 'Phone', title: '电话', info: '+86 10 8888 8888' },
                  { icon: 'Mail', title: '邮箱', info: 'info@tech-innovation.cn' },
                  { icon: 'Clock', title: '工作时间', info: '周一至周五 9:00-18:00' }
                ].map((contact, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name={contact.icon as any} size={20} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">{contact.title}</div>
                      <div className="text-muted-foreground">{contact.info}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Card>
              <CardContent className="pt-6">
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="text-sm font-medium mb-2 block">姓名</label>
                    <Input placeholder="请输入您的姓名" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">邮箱</label>
                    <Input type="email" placeholder="请输入您的邮箱" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">电话</label>
                    <Input placeholder="请输入您的电话" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">留言</label>
                    <Textarea placeholder="请输入您的留言内容" rows={4} />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    提交咨询
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-secondary-foreground py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-lg font-bold mb-4">科技创新</h4>
              <p className="text-sm opacity-80">引领未来，创新无限</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4">快速链接</h4>
              <div className="space-y-2 text-sm opacity-80">
                {['首页', '关于我们', '服务', '产品', '联系我们'].map((link) => (
                  <div key={link} className="hover:opacity-100 cursor-pointer transition-opacity">
                    {link}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4">服务</h4>
              <div className="space-y-2 text-sm opacity-80">
                {['工程咨询', '系统集成', '数据分析', '云计算服务'].map((service) => (
                  <div key={service} className="hover:opacity-100 cursor-pointer transition-opacity">
                    {service}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4">关注我们</h4>
              <div className="flex gap-4">
                {['MessageCircle', 'Mail', 'Phone'].map((icon) => (
                  <div
                    key={icon}
                    className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center cursor-pointer transition-all"
                  >
                    <Icon name={icon as any} size={18} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm opacity-80">
            © 2024 科技创新有限公司. 保留所有权利.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
