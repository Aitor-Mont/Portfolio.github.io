import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, AlertCircle, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    message: ''
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: '', message: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es obligatorio.';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje no puede estar vacío.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      const subject = encodeURIComponent("SOLICITUD DE CONTACTO");
      const body = encodeURIComponent(`Nombre/Empresa: ${formData.name}\n\nMensaje:\n${formData.message}`);
      window.location.href = `mailto:aitormon@gmail.com?subject=${subject}&body=${body}`;

      // Optional: Clear form after "sending" (opening mail client)
      setFormData({ name: '', message: '' });
      setErrors({ name: '', message: '' });

      // Show success tooltip
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  return (
    <section id="contact" className="relative pt-20 pb-0 bg-slate-900 text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img
          src="/archivos/contacto.jpg"
          alt="Contact Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contacto</h2>
          <div className="h-1 w-20 bg-primary-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-slate-800/40 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl">

          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-primary-300">Hablemos</h3>
            <p className="text-slate-300">
              Estoy disponible para nuevas oportunidades y colaboraciones. Si buscas un desarrollador apasionado y experimentado, no dudes en contactarme.
            </p>

            <div className="space-y-6 mt-8">
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-primary-900/30 rounded-lg text-primary-400 group-hover:text-primary-300 transition-colors">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Teléfono</h4>
                  <p className="text-slate-300">640 277 884</p>
                  <p className="text-slate-300">944 102 430</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-primary-900/50 rounded-lg text-primary-400 group-hover:text-primary-300 transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Email</h4>
                  <a href="mailto:aitormon@gmail.com" className="text-slate-300 hover:text-white transition-colors">
                    aitormon@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-primary-900/50 rounded-lg text-primary-400 group-hover:text-primary-300 transition-colors">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Localización</h4>
                  <p className="text-slate-300">Bilbao, España</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/0 p-6 rounded-2xl border border-white/10 relative flex flex-col justify-end">
            {showSuccess && (
              <div className="absolute top-2 right-2 bg-green-500 text-white px-3 py-1.5 rounded-lg shadow-lg flex items-center gap-2 text-sm font-medium animate-pulse z-20">
                <CheckCircle size={16} />
                Mensaje enviado correctamente
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  Nombre / Empresa
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-slate-900/40 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-slate-500 transition-all ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-slate-600'}`}
                  placeholder="Tu nombre o empresa"
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                    <AlertCircle size={14} />
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-slate-900/40 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-slate-500 transition-all ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-slate-600'}`}
                  placeholder="¿En qué puedo ayudarte?"
                ></textarea>
                {errors.message && (
                  <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                    <AlertCircle size={14} />
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white font-bold rounded-lg shadow-lg hover:shadow-primary-500/25 transition-all transform hover:-translate-y-1"
              >
                <Send size={20} />
                Enviar Mensaje
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;