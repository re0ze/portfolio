import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  GraduationCap, Mail, MapPin, Code, Shield, 
  Database, Palette, Award, Smartphone, Globe,
  Layout, UserCheck, Lock, Sparkles
} from 'lucide-react';

function Section({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SkillCard({ icon: Icon, title, description }: { icon: any; title: string; description: string }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.03, rotateY: 10 }}
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-burgundy-50"
    >
      <Icon className="w-8 h-8 text-burgundy-600 mb-4" />
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}

function ProjectCard({ icon: Icon, title, description }: { icon: any; title: string; description: string }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.02, rotateY: 10 }}
      className="bg-gradient-to-br from-burgundy-50 to-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
    >
      <div className="bg-burgundy-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
        <Icon className="w-7 h-7 text-burgundy-600" />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  );
}

function ServiceCard({ icon: Icon, title }: { icon: any; title: string }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className="flex items-center gap-4 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-r-4 border-burgundy-400"
    >
      <div className="bg-burgundy-50 p-3 rounded-full">
        <Icon className="w-6 h-6 text-burgundy-600" />
      </div>
      <h3 className="text-lg font-medium text-gray-800">{title}</h3>
    </motion.div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-right" dir="rtl">
      {/* Hero Section */}
      <Section className="bg-[#770c25] text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              رئام زياد الشديفات
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl mb-8"
            >
              مطورة ويب وتطبيقات | متخصصة في أمن الشبكات والمعلومات
            </motion.p>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex justify-center items-center space-x-4 space-x-reverse"
            >
              <span className="flex items-center bg-white/10 px-4 py-2 rounded-full">
                <MapPin className="w-5 h-5 ml-2" />
                المفرق، الأردن
              </span>
              <span className="flex items-center bg-white/10 px-4 py-2 rounded-full">
                <Mail className="w-5 h-5 ml-2" />
                reamshdefat@gmail.com
              </span>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* About Section */}
      <Section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: '#120101' }}>نبذة عني</h2>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-burgundy-100">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                أنا رئام زياد الشديفات، مطورة برمجيات وخبيرة في أمن المعلومات من الأردن. حاصلة على شهادة البكالوريوس في تخصص أمن شبكات ومعلومات من جامعة البلقاء - كلية الحصن.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-burgundy-50 p-6 rounded-xl">
                  <h3 className="text-burgundy-700 font-semibold mb-3 text-lg">المهارات الأساسية</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-burgundy-400 rounded-full ml-2"></span>
                      تطوير واجهات المستخدم (React.js)
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-burgundy-400 rounded-full ml-2"></span>
                      تصميم وتطوير المواقع الإلكترونية
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-burgundy-400 rounded-full ml-2"></span>
                      برمجة تطبيقات الموبايل
                    </li>
                  </ul>
                </div>
                <div className="bg-burgundy-50 p-6 rounded-xl">
                  <h3 className="text-burgundy-700 font-semibold mb-3 text-lg">التخصصات</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-burgundy-400 rounded-full ml-2"></span>
                      أمن الشبكات والمعلومات
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-burgundy-400 rounded-full ml-2"></span>
                      تحليل وحماية البيانات
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-burgundy-400 rounded-full ml-2"></span>
                      إدارة قواعد البيانات
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section className="py-20 bg-gradient-to-b from-burgundy-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">المشاريع المتميزة</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <ProjectCard
              icon={Globe}
              title="موقع شخصي باستخدام React.js"
              description="موقع يعرض معلوماتي ومهاراتي بطريقة احترافية مع تصميم عصري وتجربة مستخدم مميزة"
            />
            <ProjectCard
              icon={Smartphone}
              title="تطبيق موبايل Flutter"
              description="تطبيق لإدارة المهام اليومية مع واجهة مستخدم سلسة وإشعارات ذكية"
            />
            <ProjectCard
              icon={Layout}
              title="تصميم Dashboard تفاعلي"
              description="واجهة مستخدم ديناميكية تعرض بيانات تحليلية مع رسوم بيانية تفاعلية"
            />
            {/* New Projects */}
            <ProjectCard
              icon={Globe}
              title="موقع شخصي بسيط"
              description={
                <>
                  موقع ويب يعرض محتوى ديناميكي باستخدام تقنيات حديثة. يمكنك زيارته من هنا: 
                  <a href="https://web1-beta-sage.vercel.app/" target="_blank" className="text-burgundy-600 underline ml-1">رابط المشروع</a>
                </>
              }
            />
            <ProjectCard
              icon={Database}
              title="موقع جلب معلومات الأفلام"
              description={
                <>
                  موقع يستخدم API لجلب معلومات الأفلام مع تصميم جذاب وتجربة مستخدم رائعة. يمكنك زيارته من هنا: 
                  <a href="https://website2-tyt1-git-main-re0zes-projects.vercel.app/" target="_blank" className="text-burgundy-600 underline ml-1">رابط المشروع</a>
                </>
              }
            />
          </div>
        </div>
      </Section>

      {/* Practical Projects Section */}
      <Section className="py-20 bg-gradient-to-b from-white to-burgundy-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">قسم المشاريع العملية</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <ProjectCard
              icon={Code}
              title="موقع شخصي بسيط"
              description="وصف المشروع العملي الأول."
            />
            <ProjectCard
              icon={Database}
              title="مشروع عملي 2"
              description="وصف المشروع العملي الثاني."
            />
            <ProjectCard
              icon={Shield}
              title="مشروع عملي 3"
              description="وصف المشروع العملي الثالث."
            />
          </div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">المهارات التقنية</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <SkillCard
              icon={Code}
              title="لغات البرمجة"
              description="Java, C++, JavaScript"
            />
            <SkillCard
              icon={Palette}
              title="تطوير الواجهات"
              description="React.js, HTML, CSS"
            />
            <SkillCard
              icon={Database}
              title="قواعد البيانات"
              description="MySQL, Firebase"
            />
            <SkillCard
              icon={Shield}
              title="أمن المعلومات"
              description="أساسيات الحماية السيبرانية"
            />
          </div>
        </div>
      </Section>

      {/* Services Section */}
      <Section className="py-20 bg-gradient-to-b from-white to-burgundy-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">الخدمات التي أقدمها</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <ServiceCard
              icon={Globe}
              title="تطوير مواقع ويب احترافية"
            />
            <ServiceCard
              icon={Smartphone}
              title="برمجة تطبيقات موبايل"
            />
            <ServiceCard
              icon={Sparkles}
              title="تحسين تجربة المستخدم"
            />
            <ServiceCard
              icon={Database}
              title="إدارة وتحليل قواعد البيانات"
            />
            <ServiceCard
              icon={Lock}
              title="تأمين وحماية البيانات والشبكات"
            />
          </div>
        </div>
      </Section>

      {/* Certificates Section */}
      <Section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">الشهادات والدورات التدريبية</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'ICDL Advanced Excel',
              'Flutter Development',
              'WordPress Development',
              'CCNA (Cisco Certified Network Associate)',
              'Freelance with Bot'
            ].map((cert, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.02 }}
                className="flex items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-r-4 border-burgundy-400"
              >
                <Award className="w-8 h-8 text-burgundy-600 ml-4" />
                <span className="text-lg">{cert}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>جميع الحقوق محفوظة © {new Date().getFullYear()} رئام الشديفات</p>
        </div>
      </footer>
    </div>
  );
}

export default App;