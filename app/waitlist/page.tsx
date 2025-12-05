"use client";
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Image from 'next/image';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import JoinWaitlistButton from '@/components/ui/joinwaitlist';
import HeartButton from '@/components/ui/heartbutton';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    isCompany: false,
    isRestaurant: false,
    isEmployee: false,
    contactDetail: ""
  });
  const [active, setActive] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Configuración de EmailJS
    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

    try {
      // Importar emailjs dinámicamente
      const emailjs = (await import('emailjs-com')).default;

      // Preparar los datos del template
      const templateParams = {
        from_name: formState.name,
        from_email: formState.email,
        is_company: formState.isCompany ? 'Sí' : 'No',
        is_restaurant: formState.isRestaurant ? 'Sí' : 'No',
        is_employee: formState.isEmployee ? 'Sí' : 'No',
        contact_detail: formState.contactDetail,
        message: `Nueva solicitud de lista de espera!\n\nNombre: ${formState.name}\nEmail: ${formState.email}\nEs Empresa: ${formState.isCompany ? 'Sí' : 'No'}\nEs Restaurante: ${formState.isRestaurant ? 'Sí' : 'No'}\nEs Empleado: ${formState.isEmployee ? 'Sí' : 'No'}\nInformación de contacto: ${formState.contactDetail}`
      };

      // Enviar email usando EmailJS
      await emailjs.send(serviceID, templateID, templateParams, publicKey);

      // Redirigir a página de éxito
      router.push('/success');
    } catch (error) {
      console.error('Error sending email:', error);
      setMessage('Failed to send message. Please try again.');
      setActive(true);
      setTimeout(() => {
        setActive(false);
        setMessage("");
      }, 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.id]: e.target.checked,
    }));
  };

  return (
    <div className="flex flex-col items-center justify-center  min-h-screen p-4 bg-[url('/div.svg')] opacity-100">
      <MaxWidthWrapper>
        <div className="flex justify-center items-center mb-6">
          <Image src="/logo_dalmfoods.jpeg" alt="Logo DalmFoods" width={140} height={140} />
        </div>
        <h2 className="text-3xl mb-6 text-center font-bold">Únete a la Lista de Espera</h2>

        {/* Notification for successful form submission */}
        <div
          style={{
            right: active && message ? 24 : "-50%",
          }}
          className="fixed bottom-5 duration-200 px-4 py-2 font-semibold rounded bg-sky-200 text-black shadow-lg">
          <p>{message}</p>
        </div>

        <form onSubmit={handleSubmit} className="w-full text-center">
          <div className="flex flex-col mb-4">
            <label htmlFor="name" className="sr-only">Full Name</label>
            <input
              placeholder="Full Name"
              onChange={handleChange}
              id="name"
              type="text"
              required
              className="border border-gray-300 p-4 w-full rounded-md  placeholder:font-bold placeholder-gray-500"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="email" className="sr-only">Enter Email Address</label>
            <input
              placeholder="Enter Email Address"
              onChange={handleChange}
              id="email"
              type="email"
              required
              className="border border-gray-300 p-4 w-full rounded-md  placeholder:font-bold placeholder-gray-500"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label className="mt-4 mb-2 text-3xl">Soy un/una ______________ (selecciona todas las que apliquen)</label>
            <div className="flex flex-wrap gap-2 justify-center mt-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  id="isCompany"
                  checked={formState.isCompany}
                  onChange={handleCheckboxChange}
                  className="hidden"
                />
                <span className={`flex items-center gap-2 px-8 py-4 border rounded-lg cursor-pointer ${formState.isCompany ? 'bg-black text-white' : 'bg-white text-black'}`}>
                  Empresa
                  {formState.isCompany}
                </span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  id="isRestaurant"
                  checked={formState.isRestaurant}
                  onChange={handleCheckboxChange}
                  className="hidden"
                />
                <span className={`flex items-center gap-2 px-8 py-4 border rounded-lg cursor-pointer ${formState.isRestaurant ? 'bg-black text-white' : 'bg-white text-black'}`}>
                  Restaurante
                  {formState.isRestaurant}
                </span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  id="isEmployee"
                  checked={formState.isEmployee}
                  onChange={handleCheckboxChange}
                  className="hidden"
                />
                <span className={`flex items-center gap-2 px-8 py-4 border rounded-lg cursor-pointer ${formState.isEmployee ? 'bg-black text-white' : 'bg-white text-black'}`}>
                  Empleado
                  {formState.isEmployee}
                </span>
              </label>
            </div>
          </div>

          {(formState.isCompany || formState.isRestaurant || formState.isEmployee) && (
            <div className="flex flex-col mb-4">
              <label htmlFor="contactDetail" className="sr-only">Nombre de tu Empresa/Restaurante o Teléfono</label>
              <input
                placeholder="Nombre de tu Empresa/Restaurante o Teléfono de contacto"
                onChange={handleChange}
                id="contactDetail"
                type="text"
                required
                className="border border-gray-300 p-4 w-full rounded-md  placeholder:font-bold placeholder-gray-500 "
              />
            </div>
          )}

          <button className="join-waitlist-button" >
            <HeartButton text="Te contactaremos" />
          </button>
        </form>
      </MaxWidthWrapper>
    </div>
  );
};

export default Contact;
