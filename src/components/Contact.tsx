
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "kunaneeraj2004@gmail.com",
      link: "mailto:kunaneeraj2004@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "91+ 8125720708",
      link: "tel: 8125720708"
    },
    {
      icon: MapPin,
      title: "Srikakulam",
      value: "Andhra Pradesh, India",
      link: "#"
    }
  ];

  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8"></div>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and interesting projects.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                Whether you have a project in mind, want to collaborate, or just want to say hello, 
                I'd love to hear from you. Feel free to reach out through any of the channels below.
              </p>
            </div>
            
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <a
                  key={info.title}
                  href={info.link}
                  className="flex items-center space-x-4 p-4 bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-lg border border-slate-600/50 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{info.title}</h4>
                    <p className="text-slate-300">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-8 border border-slate-600/50">
            <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    First Name
                  </label>
                  <Input 
                    placeholder="Neeraj"
                    className="bg-slate-800/50 border-slate-600 text-white placeholder-slate-400 focus:border-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Last Name
                  </label>
                  <Input 
                    placeholder="Kuna"
                    className="bg-slate-800/50 border-slate-600 text-white placeholder-slate-400 focus:border-purple-500"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Email
                </label>
                <Input 
                  type="email"
                  placeholder="kunaneeraj2004@gmail.com"
                  className="bg-slate-800/50 border-slate-600 text-white placeholder-slate-400 focus:border-purple-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Subject
                </label>
                <Input 
                  placeholder="Project Inquiry"
                  className="bg-slate-800/50 border-slate-600 text-white placeholder-slate-400 focus:border-purple-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Message
                </label>
                <Textarea 
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="bg-slate-800/50 border-slate-600 text-white placeholder-slate-400 focus:border-purple-500 resize-none"
                />
              </div>
              
              <Button 
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 py-3 text-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
