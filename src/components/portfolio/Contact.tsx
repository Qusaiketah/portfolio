import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { SectionBadge } from './SectionBadge';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';

export const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);

  useEffect(() => {
    const pubKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (pubKey) emailjs.init(pubKey);
  }, []);

  const contactInfo = t('contact') as { email: string; linkedin: string; github: string };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (sending) return;

    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all fields.');
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_CONTACT as string;

    if (!serviceId || !templateId) {
      toast.error('Missing EmailJS environment variables.');
      return;
    }

    setSending(true);
    const loading = toast.loading('Sending message...');

    try {
      const res = await emailjs.send(serviceId, templateId, {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      });

      if (res?.status === 200) {
        toast.success(t('ui.formSuccess') || 'Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(`EmailJS responded with ${res?.status}`);
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      toast.error('Failed to send email. Please try again.');
    } finally {
      toast.dismiss(loading);
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-accent/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionBadge text={t('ui.sectionBadges.contact')} />

        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12">
          {t('ui.nav.6')}
        </h2>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Social Links */}
          <div className="space-y-10 mt-2 md:mt-4 lg:mt-6">
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-6 rounded-2xl bg-gradient-card-1 shadow-glow-sm hover:shadow-glow-md transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="p-3 rounded-full bg-primary/20 mr-4">
                <Linkedin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">LinkedIn</h3>
                <p className="text-sm text-white/70 group-hover:text-primary transition-colors">
                  Connect with me
                </p>
              </div>
            </a>

            <a
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-6 rounded-2xl bg-gradient-card-2 shadow-glow-sm hover:shadow-glow-md transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="p-3 rounded-full bg-primary/20 mr-4">
                <Github className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">GitHub</h3>
                <p className="text-sm text-white/70 group-hover:text-primary transition-colors">
                  View my projects
                </p>
              </div>
            </a>

            <div className="flex items-center p-6 rounded-2xl bg-gradient-card-3 shadow-glow-sm">
              <div className="p-3 rounded-full bg-primary/20 mr-4">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                <p className="text-sm text-white/70">{contactInfo.email}</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                {t('ui.formName')}
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none text-foreground"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                {t('ui.formEmail')}
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none text-foreground"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                {t('ui.formMessage')}
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none resize-none text-foreground"
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              className={`w-full px-6 py-3 rounded-full font-medium flex items-center justify-center space-x-2 transition-all duration-300 ${
                sending
                  ? 'bg-gray-500 cursor-not-allowed text-gray-300'
                  : 'bg-primary text-primary-foreground hover:shadow-glow-md'
              }`}
            >
              <span>{sending ? 'Sending...' : t('ui.formSubmit')}</span>
              {!sending && <Send className="w-5 h-5" />}
            </button>
          </form>
        </div>

        {/* CTA Card */}
        <div className="p-8 rounded-2xl bg-gradient-hero text-center shadow-glow-lg">
          <h3 className="text-3xl font-bold text-foreground mb-4">{t('ui.ctaReady')}</h3>
          <p className="text-lg text-foreground/80 mb-6 max-w-2xl mx-auto">
            {t('tagline')}
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-3 bg-background text-foreground rounded-full font-medium hover:shadow-glow-md transition-all duration-300"
          >
            {t('ui.buttons.contact')}
          </button>
        </div>
      </div>
    </section>
  );
};
